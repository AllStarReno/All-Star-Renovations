/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
*/

import { GoogleGenAI, Chat, GenerateContentResponse } from "@google/genai";

const API_KEY = process.env.API_KEY || '';

let chatSession: Chat | null = null;

export const initializeChat = (): Chat => {
  if (chatSession) return chatSession;

  const ai = new GoogleGenAI({ apiKey: API_KEY });
  
  chatSession = ai.chats.create({
    model: 'gemini-3-flash-preview',
    config: {
      systemInstruction: `You are 'Star', the AI Design Assistant for All-Star Renovations. 
      We specialize in premium bathroom remodeling, specifically:
      - Shower Replacements: Modern, easy-to-clean, and stylish.
      - Tub-to-Shower Conversions: Maximizing space and accessibility.
      - Walk-In Tubs: Safety and luxury for those with mobility needs.
      - Aging-in-Place Renovations: ADA-compliant features that look beautiful.
      
      Tone: Professional, helpful, knowledgeable, and reassuring.
      
      Key Info:
      - We offer free in-home consultations.
      - Most installations are completed in as little as 1-2 days.
      - We use high-quality, durable materials that are mold and mildew resistant.
      
      Keep responses concise (under 60 words). If someone asks about pricing, explain that it varies by project and suggest booking a free consultation.`,
    },
  });

  return chatSession;
};

export const sendMessageToGemini = async (message: string): Promise<string> => {
  if (!API_KEY) {
    return "Systems offline. (Missing API Key)";
  }

  try {
    const chat = initializeChat();
    const response: GenerateContentResponse = await chat.sendMessage({ message });
    return response.text || "Transmission interrupted.";
  } catch (error) {
    console.error("Gemini Error:", error);
    return "Signal lost. Try again later.";
  }
};