import React, { useState, useRef } from 'react';
import { Button } from './Button';
import { editImageWithGemini } from '../services/geminiService';

export const ImageEditor: React.FC = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [mimeType, setMimeType] = useState<string>('image/png');
  const [generatedImage, setGeneratedImage] = useState<string | null>(null);
  const [prompt, setPrompt] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setSelectedImage(reader.result as string);
        setMimeType(file.type);
        setGeneratedImage(null); // Reset previous result
        setError(null);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleGenerate = async () => {
    if (!selectedImage || !prompt) return;

    setIsLoading(true);
    setError(null);
    setGeneratedImage(null);

    try {
      const result = await editImageWithGemini(selectedImage, mimeType, prompt);
      if (result) {
        setGeneratedImage(result);
      } else {
        setError("The AI processed the request but didn't return an image. Try a different prompt.");
      }
    } catch (err) {
      setError("Failed to generate image. Please try again.");
      console.error(err);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section id="editor" className="py-24 bg-black-surface relative border-b border-white/5">
       <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-orange-cortex/50 to-transparent opacity-30"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="font-display font-bold text-4xl md:text-6xl text-white mb-6 tracking-tight">
            AI CREATIVE <span className="text-orange-cortex-gradient">STUDIO</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg font-light">
            Transform your sports moments with our Gemini-powered editor. Just upload a photo and tell us how to change it.
          </p>
        </div>

        <div className="bg-black-card border border-white/5 rounded-sm p-6 md:p-10 shadow-2xl relative overflow-hidden">
          {/* Subtle orange-cortex glow accent in corner */}
          <div className="absolute -top-20 -right-20 w-64 h-64 bg-orange-cortex/5 rounded-full blur-3xl pointer-events-none"></div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 relative z-10">
            {/* Input Side */}
            <div className="flex flex-col space-y-6">
              <div 
                className={`group relative w-full h-80 md:h-96 rounded-sm border border-dashed transition-all duration-300 flex flex-col items-center justify-center bg-black-lighter overflow-hidden cursor-pointer ${selectedImage ? 'border-orange-cortex/50 bg-black-lighter/80' : 'border-white/10 hover:border-orange-cortex/40 hover:bg-cream/5'}`}
                onClick={() => fileInputRef.current?.click()}
              >
                {selectedImage ? (
                  <img src={selectedImage} alt="Original" className="w-full h-full object-contain" />
                ) : (
                  <div className="text-center p-6 transition-transform group-hover:scale-105 duration-300">
                    <svg className="mx-auto h-12 w-12 text-orange-cortex opacity-80" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                    <p className="mt-4 text-sm font-bold text-white uppercase tracking-wider">Click to upload photo</p>
                    <p className="text-xs text-gray-500 mt-1">JPG, PNG supported</p>
                  </div>
                )}
                <input 
                  type="file" 
                  ref={fileInputRef} 
                  className="hidden" 
                  accept="image/*"
                  onChange={handleImageUpload}
                />
              </div>

              <div className="flex flex-col space-y-2">
                <label className="text-xs font-bold text-orange-cortex uppercase tracking-widest">Instructions</label>
                <textarea
                  value={prompt}
                  onChange={(e) => setPrompt(e.target.value)}
                  placeholder='e.g., "Add a orange-cortexen aura", "Make it look like a vintage sports card", "Remove the background"'
                  className="w-full bg-black-lighter text-white p-4 rounded-sm border border-white/10 focus:border-orange-cortex focus:ring-1 focus:ring-orange-cortex/50 focus:outline-none resize-none h-28 placeholder-gray-600 transition-colors"
                />
              </div>

              <Button 
                onClick={handleGenerate} 
                disabled={!selectedImage || !prompt || isLoading}
                fullWidth
                className={isLoading ? 'opacity-75 cursor-not-allowed' : ''}
              >
                {isLoading ? (
                  <span className="flex items-center justify-center gap-2">
                    <svg className="animate-spin h-5 w-5 text-black" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    Processing...
                  </span>
                ) : 'Generate with Gemini'}
              </Button>
              {error && <p className="text-red-400 text-sm mt-2 text-center border border-red-900/50 bg-red-900/10 p-2 rounded">{error}</p>}
            </div>

            {/* Output Side */}
            <div className="flex flex-col h-full">
               <div className="text-xs font-bold text-orange-cortex uppercase tracking-widest mb-2 lg:hidden">Result</div>
               <div className={`relative w-full h-80 md:h-[calc(100%-2rem)] rounded-sm border border-white/10 bg-black-rich flex items-center justify-center overflow-hidden shadow-inner`}>
                 {isLoading ? (
                    <div className="text-center">
                       <div className="inline-block animate-pulse-slow w-20 h-20 rounded-full border-2 border-orange-cortex/30 mb-4 flex items-center justify-center">
                         <div className="w-16 h-16 bg-orange-cortex/10 rounded-full animate-ping"></div>
                       </div>
                       <p className="text-orange-cortex text-sm font-medium tracking-wide animate-pulse">AI IS CREATING...</p>
                    </div>
                 ) : generatedImage ? (
                   <div className="relative w-full h-full group">
                     <img src={generatedImage} alt="AI Generated" className="w-full h-full object-contain" />
                     <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                        <span className="text-white font-display uppercase tracking-widest">Generated Successfully</span>
                     </div>
                   </div>
                 ) : (
                   <div className="text-center p-6 opacity-30">
                      <p className="font-display text-4xl text-white font-bold mb-2">RESULT</p>
                      <p className="text-sm text-gray-400">Edited image will appear here</p>
                   </div>
                 )}
               </div>
               {generatedImage && (
                 <div className="mt-4">
                    <a 
                      href={generatedImage} 
                      download="powerplay-edit.png"
                      className="block w-full text-center py-3 border border-orange-cortex/30 rounded-sm hover:bg-orange-cortex/10 text-orange-cortex transition-colors font-medium uppercase tracking-wider text-sm"
                    >
                      Download Image
                    </a>
                 </div>
               )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};