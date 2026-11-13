'use client';

import PageShell from '@/components/PageShell';
import { ArrowUpRight, Cpu, Code2, Eye, MessageSquareCode, Layers } from 'lucide-react';
import Link from 'next/link';

const SKILL_SECTIONS = [
  {
    category: 'Core Programming & Infrastructure',
    icon: Code2,
    description: 'Foundation languages, query syntax, version control, and API development',
    items: [
      { name: 'Python', context: 'Primary language for ML modeling, PyTorch pipelines, and data preprocessing' },
      { name: 'C++', context: 'Object-oriented programming, data structures, and algorithmic complexity' },
      { name: 'SQL', context: 'Relational data querying, schema indexing, and aggregation' },
      { name: 'Git & GitHub', context: 'Branch workflows, repository maintenance, and collaborative version control' },
      { name: 'REST APIs', context: 'Endpoint consumption, client-server data streaming, and JSON integration' },
    ],
  },
  {
    category: 'Deep Learning & Neural Architectures',
    icon: Cpu,
    description: 'Model design, backpropagation, and parameter-efficient optimization',
    items: [
      { name: 'PyTorch Ecosystem', context: 'Custom tensor operations, autograd, forward/loss computation' },
      { name: 'Supervised & Unsupervised Learning', context: 'Classification, regression, spatial clustering, and dimensionality reduction' },
      { name: 'Transfer Learning', context: 'Pretrained weight initialization and multi-head feature adaptation' },
      { name: 'LLM Fine-Tuning & PEFT', context: 'Supervised fine-tuning (SFT), low-rank adapters (LoRA rank 16/32, alpha 32)' },
      { name: 'Optimization & Training Protocols', context: 'AdamW, learning rate schedules, gradient clipping, cross-entropy minimization' },
    ],
  },
  {
    category: 'Computer Vision & Spatial Intelligence',
    icon: Eye,
    description: 'Pixel-level segmentation, boundary preservation, and clinical image processing',
    items: [
      { name: 'Semantic Segmentation', context: 'Encoder-decoder pipelines for pixel-level land cover delineations' },
      { name: 'Boundary Fusion & Edge Detection', context: 'Multiscale spatial boundary fusion modules for fine edge recovery' },
      { name: 'Medical & Satellite Imagery', context: 'DeepGlobe, LandCoverNet, and bone tumor diagnostic classification' },
      { name: 'Evaluation Metrics', context: 'Mean Intersection over Union (IoU), Dice Similarity Coefficient, validation loss' },
    ],
  },
  {
    category: 'Natural Language Processing',
    icon: MessageSquareCode,
    description: 'Foundation model fine-tuning, autoregressive sampling, and tokenization',
    items: [
      { name: 'Language Modeling from Scratch', context: 'Custom tokenizers, embedding projections, and bigram neural architectures' },
      { name: 'Autoregressive Text Generation', context: 'Logit generation, softmax probability distributions, and temperature sampling' },
      { name: 'Qwen 2.5 Ecosystem', context: '1.5B Instruct model fine-tuning on domain-specific prompt/response distributions' },
      { name: 'Unsloth & Hugging Face', context: 'Accelerated 2x-faster LoRA kernels with reduced VRAM footprint' },
    ],
  },
];

export default function SkillsPage() {
  return (
    <PageShell>
      <div className="mx-auto w-full max-w-[1080px] px-6 sm:px-8">
        {/* Centered Editorial Header */}
        <header className="text-center mb-12 sm:mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#f2f2f7] border border-black/5 text-xs font-mono tracking-wider uppercase text-[#6e6e73] mb-4">
            <Layers className="w-3.5 h-3.5 text-[#0071e3]" />
            <span>Competencies & Capabilities</span>
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-semibold tracking-tight text-[#1d1d1f] mb-4">
            Technical Skills
          </h1>
          <p className="text-lg sm:text-xl text-[#6e6e73] font-normal tracking-tight max-w-2xl mx-auto leading-relaxed">
            Core mathematical foundations, deep learning frameworks, and engineering methodologies.
          </p>
        </header>

        {/* 2x2 Grid of Skill Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-14">
          {SKILL_SECTIONS.map((section) => {
            const IconComponent = section.icon;
            return (
              <section
                key={section.category}
                className="bg-white rounded-3xl p-7 sm:p-9 border border-[#e5e5ea] shadow-sm hover:shadow-md hover:border-[#0071e3]/30 transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  {/* Category Header */}
                  <div className="flex items-center gap-3 mb-3">
                    <div className="p-2.5 rounded-xl bg-[#0071e3]/10 text-[#0071e3]">
                      <IconComponent className="w-5 h-5" />
                    </div>
                    <h2 className="text-xl font-semibold text-[#1d1d1f] tracking-tight">
                      {section.category}
                    </h2>
                  </div>
                  <p className="text-xs text-[#6e6e73] mb-6 pb-4 border-b border-[#f2f2f7]">
                    {section.description}
                  </p>

                  {/* Skills Items */}
                  <div className="space-y-3.5">
                    {section.items.map((item) => (
                      <div
                        key={item.name}
                        className="p-3.5 rounded-2xl bg-[#fbfbfd] border border-[#e5e5ea]/60 hover:border-[#e5e5ea] transition-colors"
                      >
                        <div className="text-sm font-semibold text-[#1d1d1f] mb-1">
                          {item.name}
                        </div>
                        <div className="text-xs text-[#6e6e73] leading-relaxed">
                          {item.context}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </section>
            );
          })}
        </div>

        {/* Bottom Navigation */}
        <nav className="flex items-center justify-between pt-8 border-t border-[#e5e5ea] text-sm">
          <Link
            href="/projects"
            className="text-[#6e6e73] hover:text-[#1d1d1f] transition-colors"
          >
            ← Projects
          </Link>
          <Link
            href="/experience"
            className="inline-flex items-center gap-1.5 font-medium text-[#0071e3] hover:text-[#0077ed] transition-colors"
          >
            <span>Experience</span>
            <ArrowUpRight className="w-4 h-4" />
          </Link>
        </nav>
      </div>
    </PageShell>
  );
}
