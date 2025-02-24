<div align="center">
  <div>
    <h1 align="center">Llama OCR</h1>
  </div>
	<p>An npm library to run OCR for free with Llama 3.2 Vision.</p>

<a href="https://www.npmjs.com/package/llama-ocr"><img src="https://img.shields.io/npm/v/llama-ocr" alt="Current version"></a>

</div>

---

## Installation

`npm i llama-ocr`

## Usage

```js
import { ocr } from "llama-ocr";

const markdown = await ocr({
  filePath: "./trader-joes-receipt.jpg", // path to your image (soon PDF!)
  apiKey: process.env.TOGETHER_API_KEY, // Together AI API key
});
```
## Hosted Demo

We have a hosted demo at [LlamaOCR.com](https://llamaocr.com/) where you can try it out!

## How it works

This library uses the free Llama 3.2 endpoint from [Together AI](https://togetherai.link/) to parse images and return markdown. Paid endpoints for Llama 3.2 11B and Llama 3.2 90B are also available for faster performance and higher rate limits.

You can control this with the `model` option which is set to `Llama-3.2-90B-Vision` by default but can also accept `free` or `Llama-3.2-11B-Vision`.

## Roadmap

- [x] Add support for local images OCR
- [x] Add support for remote images OCR
- [ ] Add support for single page PDFs
- [ ] Add support for multi-page PDFs OCR (take screenshots of PDF & feed to vision model)
- [ ] Add support for JSON output in addition to markdown

## Credit

This project was inspired by [Zerox](https://github.com/getomni-ai/zerox). Go check them out!
