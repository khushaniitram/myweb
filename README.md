# Khushan Borse — Personal Portfolio

Portfolio website built with Next.js 15, Tailwind CSS, React, and Lucide Icons. Features an interactive AI assistant (KAI) powered by Groq, telemetry video crafts, halftone image rendering, and live analytics logging to Google Sheets and Supabase.

## Featured Projects

1. **ScoutSeg: Ultra-Low-Power Edge Semantic Segmentation on Microprocessors and Microcontrollers via Dynamic Patch-Gated Micro-Refinement**
   - Dynamic patch-gated architecture for resource-constrained microcontrollers
   - Two-stage inference pipeline on ESP32-D0WD-V3 (240 MHz) with INT4 quantization
   - 9.8 FPS inference with 24.5 KB SRAM arena and 58% FLOPs reduction
   - *Research Paper in Preparation*

2. **Satellite Semantic Segmentation**
   - Encoder-decoder segmentation with custom boundary fusion module (84.6% Mean IoU, 89.2% Dice Score)
   - Repository: [github.com/khushaniitram/satellitesegmentation](https://github.com/khushaniitram/satellitesegmentation)

3. **Qwen LLM Fine-Tuning**
   - Parameter-efficient supervised fine-tuning (LoRA rank 16, alpha 32) of Qwen2.5-1.5B Instruct using Unsloth

4. **Language Model from Scratch**
   - Autoregressive neural character-level language model in pure PyTorch (trained on 93M characters)
   - Repository: [github.com/thekhushan/Small_language_model](https://github.com/thekhushan/Small_language_model)

## Experience & Credentials

- **Summer Research Intern (AI/ML)**: Intentio Biopsy Device Pvt. Ltd. (May 2026 – July 2026)
  - CNN-based bone tumor detection with 92.8% verified accuracy
  - AR4 robotic teleoperation controller online connectivity
  - Verified internship completion certificate displayed on portfolio
- **Technical General Secretary**: Student Activities Council (SAC), IITRAM (2026 – Present)
- **Core Team Member**: Coding Club, IITRAM (2025 – Present)

## Google Sheets Logging Setup

Contact form inquiries and KAI chatbot conversations are automatically logged.
- Connected Sheet: [https://docs.google.com/spreadsheets/d/1cmL6W37NnF1EtxKoLYrZ43SPAQOgcT7K0TC1lCU9LWQ/edit](https://docs.google.com/spreadsheets/d/1cmL6W37NnF1EtxKoLYrZ43SPAQOgcT7K0TC1lCU9LWQ/edit)
- Script source: `google-sheets-script.js`

To deploy the Apps Script logger:
1. Open the spreadsheet and go to **Extensions → Apps Script**.
2. Paste the code from `google-sheets-script.js`.
3. Click **Deploy → New deployment → Web app** (Execute as: *Me*, Who has access: *Anyone*).
4. Copy the Web App URL and add it to `.env.local`:
   ```env
   GOOGLE_SHEET_WEBHOOK_URL=https://script.google.com/macros/s/.../exec
   ```
