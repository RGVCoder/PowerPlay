import { GoogleGenAI } from "@google/genai";

// Initialize Gemini Client
// IMPORTANT: Accessing process.env.API_KEY as per instructions.
const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

export const editImageWithGemini = async (
  base64Image: string, 
  mimeType: string, 
  prompt: string
): Promise<string | null> => {
  try {
    const modelId = 'gemini-2.5-flash-image';

    // Remove header from base64 string if present (e.g., "data:image/png;base64,")
    const base64Data = base64Image.split(',')[1] || base64Image;

    const response = await ai.models.generateContent({
      model: modelId,
      contents: {
        parts: [
          {
            inlineData: {
              data: base64Data,
              mimeType: mimeType,
            },
          },
          {
            text: `Edit this image based on the following instruction: ${prompt}. Return only the edited image.`
          },
        ],
      },
    });

    // Extract image from response
    if (response.candidates && response.candidates[0].content.parts) {
        for (const part of response.candidates[0].content.parts) {
            if (part.inlineData) {
                const returnMime = part.inlineData.mimeType || 'image/png';
                return `data:${returnMime};base64,${part.inlineData.data}`;
            }
        }
    }
    
    // Fallback if no image found directly
    return null;

  } catch (error) {
    console.error("Error editing image with Gemini:", error);
    throw error;
  }
};