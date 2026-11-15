'use client';

import PageShell from '@/components/PageShell';
import GithubIcon from '@/components/icons/GithubIcon';
import { ArrowUpRight, FolderGit2, CheckCircle2, FileText } from 'lucide-react';
import Link from 'next/link';

interface Project {
  index: string;
  title: string;
  domain: string;
  description: string;
  metrics: { label: string; value: string }[];
  details: string[];
  technologies: string[];
  github?: string;
  statusBadge?: string;
}

const PROJECTS: Project[] = [
  {
    index: '01',
    title: 'ScoutSeg: Ultra-Low-Power Edge Semantic Segmentation on Microprocessors and Microcontrollers via Dynamic Patch-Gated Micro-Refinement',
    domain: 'Edge AI · TinyML · Semantic Segmentation · ESP32 · Model Optimization · INT4 Quantization',
    description:
      'Designed a lightweight, dynamic patch-gated semantic segmentation architecture for resource-constrained microcontrollers, combining low-cost scouting with selective high-resolution refinement.',
    metrics: [
      { label: 'Inference Speed', value: '9.8 FPS' },
      { label: 'SRAM Footprint', value: '24.5 KB' },
      { label: 'Optimization', value: '58% FLOPs Reduction (INT4)' },
    ],
    details: [
      'Designed a lightweight, dynamic patch-gated semantic segmentation architecture for resource-constrained microcontrollers, combining low-cost scouting with selective high-resolution refinement.',
      'Implemented a two-stage inference pipeline on the ESP32-D0WD-V3 (240 MHz), processing 128×160 images using 32×32 patches and dynamic Top-K selection.',
      'Optimized on-device inference through INT4 weight packing, selective patch refinement, and early-exit mechanisms, achieving 58% FLOPs reduction.',
      'Achieved 9.8 FPS inference with a 24.5 KB SRAM arena, demonstrating efficient semantic segmentation under strict memory and computational constraints.',
    ],
    technologies: ['Edge AI', 'TinyML', 'Semantic Segmentation', 'ESP32', 'INT4 Quantization', 'Model Optimization'],
    statusBadge: 'Research Paper in Preparation',
  },
  {
    index: '02',
    title: 'Satellite Semantic Segmentation',
    domain: 'Computer Vision · Deep Learning · Image Processing',
    description:
      'Encoder-decoder segmentation pipeline featuring a custom boundary fusion module engineered for pixel-level classification of high-resolution satellite imagery.',
    metrics: [
      { label: 'Mean IoU', value: '84.6%' },
      { label: 'Dice Score', value: '89.2%' },
      { label: 'Evaluation Datasets', value: 'LandCoverNet & DeepGlobe' },
    ],
    details: [
      'Engineered multi-scale semantic feature fusion coupled with boundary information to preserve fine-grained land cover details and minimize edge distortion.',
      'Benchmarked against standard UNet baselines, demonstrating significant spatial delineation improvements across fragmented terrain classes.',
      'Evaluated segmentation performance using mean IoU and Dice score on LandCoverNet / DeepGlobe Land Cover dataset, achieving 84.6% mean IoU and an 89.2% Dice score.',
    ],
    technologies: ['PyTorch', 'Computer Vision', 'Segmentation', 'Boundary Fusion', 'DeepGlobe'],
    github: 'https://github.com/khushaniitram/satellitesegmentation',
  },
  {
    index: '03',
    title: 'Qwen LLM Fine-Tuning',
    domain: 'Natural Language Processing · LLMs · LoRA · Unsloth · PyTorch',
    description:
      'Parameter-efficient supervised fine-tuning of the Qwen2.5-1.5B Instruct language model utilizing Low-Rank Adaptation (LoRA) and the Unsloth acceleration kernel.',
    metrics: [
      { label: 'Base Model', value: 'Qwen2.5-1.5B Instruct' },
      { label: 'Adapter Config', value: 'r = 16, α = 32, dropout = 0.05' },
      { label: 'Kernel Framework', value: 'Unsloth & PyTorch' },
    ],
    details: [
      'Fine-tuned the Qwen2.5-1.5B Instruct language model using supervised fine tuning (SFT), Low Rank Adaptation (LoRA), and the Unsloth framework.',
      'Configured parameter efficient training with LoRA rank 16, alpha 32, and dropout 0.05, using a task-specific instruction dataset with prompt response examples.',
      'Evaluated model responses on a held-out test set using task-specific metrics and validation loss to assess adaptation quality.',
    ],
    technologies: ['Qwen 2.5', 'LoRA', 'PEFT', 'Unsloth', 'PyTorch', 'Instruction Tuning'],
  },
  {
    index: '04',
    title: 'Language Model from Scratch',
    domain: 'Natural Language Processing · Neural Architecture · Foundations',
    description:
      'Character-level autoregressive neural language model constructed entirely from scratch in PyTorch without high-level library abstractions.',
    metrics: [
      { label: 'Corpus Size', value: '93 Million Characters' },
      { label: 'Architecture', value: 'Embedding + Bigram Neural' },
      { label: 'Sampling Strategy', value: 'Autoregressive Softmax' },
    ],
    details: [
      'Implemented custom vocabulary tokenization, embedding parameterization, logit projection, and cross-entropy optimization pipelines.',
      'Engineered text generation via autoregressive probabilistic character sampling with tunable temperature scaling.',
    ],
    technologies: ['PyTorch', 'Tokenization', 'Neural Networks', 'Cross-Entropy', 'Autoregressive'],
    github: 'https://github.com/thekhushan/Small_language_model',
  },
];

export default function ProjectsPage() {
  return (
    <PageShell>
      <div className="mx-auto w-full max-w-[1080px] px-6 sm:px-8">
        {/* Centered Editorial Header */}
        <header className="text-center mb-12 sm:mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#f2f2f7] border border-black/5 text-xs font-mono tracking-wider uppercase text-[#6e6e73] mb-4">
            <FolderGit2 className="w-3.5 h-3.5 text-[#0071e3]" />
            <span>Selected Work · Engineering Systems</span>
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-semibold tracking-tight text-[#1d1d1f] mb-4">
            Featured Projects
          </h1>
          <p className="text-lg sm:text-xl text-[#6e6e73] font-normal tracking-tight max-w-2xl mx-auto leading-relaxed">
            Architectures in edge computing, computer vision, parameter-efficient language models, and foundational deep learning.
          </p>
        </header>

        {/* Project Cards Stack */}
        <div className="space-y-8 mb-14">
          {PROJECTS.map((project) => (
            <article
              key={project.title}
              className="bg-white rounded-3xl p-7 sm:p-9 lg:p-10 border border-[#e5e5ea] shadow-sm hover:shadow-md hover:border-[#0071e3]/30 transition-all duration-300"
            >
              {/* Top Row: Index, Domain & Action Button */}
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-6 pb-5 border-b border-[#f2f2f7]">
                <div className="flex items-center gap-3">
                  <span className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-[#0071e3]/10 text-[#0071e3] text-xs font-mono font-semibold">
                    {project.index}
                  </span>
                  <span className="text-xs font-mono uppercase tracking-wider text-[#6e6e73]">
                    {project.domain}
                  </span>
                </div>

                {project.statusBadge ? (
                  <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#0071e3]/10 text-xs font-mono font-medium text-[#0071e3] border border-[#0071e3]/20 self-start sm:self-auto">
                    <FileText className="w-3.5 h-3.5 text-[#0071e3]" />
                    <span>{project.statusBadge}</span>
                  </span>
                ) : project.github ? (
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#f5f5f7] hover:bg-[#e5e5ea] text-xs font-medium text-[#1d1d1f] transition-colors self-start sm:self-auto"
                  >
                    <GithubIcon size={14} className="w-3.5 h-3.5" />
                    <span>View Repository</span>
                    <ArrowUpRight className="w-3.5 h-3.5 text-[#86868b]" />
                  </a>
                ) : null}
              </div>

              {/* Title & Description */}
              <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight text-[#1d1d1f] mb-3">
                {project.title}
              </h2>
              <p className="text-base text-[#424245] leading-relaxed font-normal mb-8">
                {project.description}
              </p>

              {/* Performance Metrics Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 p-4 rounded-2xl bg-[#fbfbfd] border border-[#e5e5ea]/70 mb-8">
                {project.metrics.map((m) => (
                  <div key={m.label} className="p-3">
                    <div className="text-[11px] font-mono text-[#86868b] uppercase tracking-wider mb-1">
                      {m.label}
                    </div>
                    <div className="text-base font-semibold text-[#1d1d1f] font-mono">
                      {m.value}
                    </div>
                  </div>
                ))}
              </div>

              {/* Technical Details */}
              <div className="mb-8">
                <div className="text-xs font-mono uppercase tracking-wider text-[#86868b] mb-3">
                  Key Technical Contributions
                </div>
                <ul className="space-y-2.5 text-sm sm:text-base text-[#424245] leading-relaxed">
                  {project.details.map((detail, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      <CheckCircle2 className="w-4 h-4 text-[#0071e3] flex-shrink-0 mt-1" />
                      <span>{detail}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Tech Tags */}
              <div className="flex flex-wrap items-center gap-2 pt-6 border-t border-[#f2f2f7]">
                <span className="text-xs font-mono uppercase tracking-wider text-[#86868b] mr-2">
                  Stack:
                </span>
                {project.technologies.map((t) => (
                  <span
                    key={t}
                    className="text-xs px-3 py-1.5 rounded-full bg-[#f2f2f7] text-[#1d1d1f] font-medium"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </article>
          ))}
        </div>

        {/* Bottom Navigation */}
        <nav className="flex items-center justify-between pt-8 border-t border-[#e5e5ea] text-sm">
          <Link
            href="/about"
            className="text-[#6e6e73] hover:text-[#1d1d1f] transition-colors"
          >
            ← About
          </Link>
          <Link
            href="/skills"
            className="inline-flex items-center gap-1.5 font-medium text-[#0071e3] hover:text-[#0077ed] transition-colors"
          >
            <span>Technical Skills</span>
            <ArrowUpRight className="w-4 h-4" />
          </Link>
        </nav>
      </div>
    </PageShell>
  );
}
