import { ocr } from "./src/index.js";

async function main() {
  try {
    const result = await ocr({ filePath: "test/trader-joes-receipt.jpg" });
    console.log("OCR Output:", result);
  } catch (error) {
    console.error("Error running OCR:", error);
  }
}

main();
