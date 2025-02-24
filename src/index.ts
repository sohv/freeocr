import * as fs from "fs";
import * as dotenv from "dotenv";

dotenv.config();

import ollama from "ollama";

dotenv.config();

export async function ocr({ filePath, model = "llama3.2-vision" }: { filePath: string; model?: string }) {
  return await getMarkDown({ model, filePath });
}

async function getMarkDown({ model, filePath }: { model: string; filePath: string }) {
  const systemPrompt = `Extract text and structure from the provided image and return it in Markdown format.`;

  const finalImageUrl = isRemoteFile(filePath) ? filePath : `data:image/jpeg;base64,${encodeImage(filePath)}`;

  const output = await ollama.chat({
    model: model,
    messages: [
      { role: "system", content: systemPrompt },
      { role: "user", content: `Extract all text and structure from this image: ${finalImageUrl}` },
    ],
  });

  return output.message.content;
}

function encodeImage(imagePath: string) {
  const imageFile = fs.readFileSync(imagePath);
  return Buffer.from(imageFile).toString("base64");
}

function isRemoteFile(filePath: string): boolean {
  return filePath.startsWith("http://") || filePath.startsWith("https://");
}
