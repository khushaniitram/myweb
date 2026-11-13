'use client';

import PageShell from '@/components/PageShell';
import GithubIcon from '@/components/icons/GithubIcon';
import { ArrowUpRight, GraduationCap, MapPin, Mail, Award, BookOpen, Sparkles, Terminal } from 'lucide-react';
import Link from 'next/link';

export default function AboutPage() {
  return (
    <PageShell>
      <div className="mx-auto w-full max-w-[1080px] px-6 sm:px-8">
        {/* Centered Editorial Header */}
        <header className="text-center mb-12 sm:mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#f2f2f7] border border-black/5 text-xs font-mono tracking-wider uppercase text-[#6e6e73] mb-4">
            <Sparkles className="w-3.5 h-3.5 text-[#0071e3]" />
            <span>Profile & Background</span>
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-semibold tracking-tight text-[#1d1d1f] mb-4">
            Khushan Borse
          </h1>
          <p className="text-lg sm:text-xl text-[#6e6e73] font-normal tracking-tight max-w-2xl mx-auto leading-relaxed">
            Aspiring AI/ML Engineer focusing on deep learning systems, computer vision, and parameter-efficient language models.
          </p>

          {/* Centered Meta Chips Bar */}
          <div className="inline-flex flex-wrap items-center justify-center gap-y-2 gap-x-5 text-sm text-[#424245] border border-[#e5e5ea] bg-white rounded-full px-5 py-2.5 mt-8 shadow-sm">
            <span className="inline-flex items-center gap-1.5 font-medium text-[#1d1d1f]">
              <MapPin className="w-3.5 h-3.5 text-[#0071e3]" />
              Ahmedabad, India
            </span>
            <span className="text-[#d2d2d7]">·</span>
            <a
              href="mailto:khushanborse2@gmail.com"
              className="inline-flex items-center gap-1.5 hover:text-[#0071e3] transition-colors"
            >
              <Mail className="w-3.5 h-3.5 text-[#6e6e73]" />
              khushanborse2@gmail.com
            </a>
            <span className="text-[#d2d2d7]">·</span>
            <a
              href="https://github.com/khushaniitram"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-1.5 hover:text-[#0071e3] transition-colors"
            >
              <GithubIcon size={14} className="w-3.5 h-3.5" />
              <span>khushaniitram</span>
              <ArrowUpRight className="w-3 h-3 text-[#86868b]" />
            </a>
          </div>
        </header>

        {/* Narrative Overview Card */}
        <section className="bg-white rounded-3xl p-7 sm:p-9 border border-[#e5e5ea] shadow-sm mb-8">
          <div className="flex items-center gap-2 text-xs font-mono tracking-wider uppercase text-[#86868b] mb-3">
            <BookOpen className="w-3.5 h-3.5 text-[#0071e3]" />
            <span>Overview & Philosophy</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-semibold text-[#1d1d1f] tracking-tight mb-4">
            Building practical, high-efficiency intelligence.
          </h2>
          <p className="text-base text-[#424245] leading-relaxed font-normal mb-8">
            Computer Science undergraduate with practical experience in deep learning, satellite imagery analysis, and language model fine-tuning. Dedicated to building computationally efficient machine learning systems with real-world impact.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-6 border-t border-[#f2f2f7]">
            <div className="p-4 rounded-2xl bg-[#fbfbfd] border border-[#e5e5ea]/70">
              <div className="text-xs font-mono text-[#0071e3] font-semibold mb-1">01 / VISION</div>
              <div className="text-sm font-semibold text-[#1d1d1f] mb-1">Pixel-Level Segmentation</div>
              <div className="text-xs text-[#6e6e73] leading-relaxed">Custom boundary fusion for fine-grained spatial land cover delineation.</div>
            </div>
            <div className="p-4 rounded-2xl bg-[#fbfbfd] border border-[#e5e5ea]/70">
              <div className="text-xs font-mono text-[#0071e3] font-semibold mb-1">02 / LLM</div>
              <div className="text-sm font-semibold text-[#1d1d1f] mb-1">PEFT & LoRA Tuning</div>
              <div className="text-xs text-[#6e6e73] leading-relaxed">Accelerated instruction tuning on Qwen 2.5 with reduced VRAM footprint.</div>
            </div>
            <div className="p-4 rounded-2xl bg-[#fbfbfd] border border-[#e5e5ea]/70">
              <div className="text-xs font-mono text-[#0071e3] font-semibold mb-1">03 / FOUNDATIONS</div>
              <div className="text-sm font-semibold text-[#1d1d1f] mb-1">Neural Architectures</div>
              <div className="text-xs text-[#6e6e73] leading-relaxed">Raw PyTorch tensor, embedding, and autograd generation pipelines from scratch.</div>
            </div>
          </div>
        </section>

        {/* 2-Column Balanced Credentials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
          {/* Education Card */}
          <section className="bg-white rounded-3xl p-7 sm:p-9 border border-[#e5e5ea] shadow-sm flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-2 text-xs font-mono tracking-wider uppercase text-[#86868b] mb-3">
                <GraduationCap className="w-4 h-4 text-[#0071e3]" />
                <span>Education</span>
              </div>
              <div className="flex items-baseline justify-between gap-2 mb-2">
                <h3 className="text-xl font-semibold text-[#1d1d1f] tracking-tight">
                  B.Tech in Computer Science
                </h3>
                <span className="text-xs font-mono text-[#6e6e73]">
                  2024 – 2028
                </span>
              </div>
              <p className="text-sm text-[#424245] leading-relaxed mb-4">
                Institute of Infrastructure, Technology, Research and Management (IITRAM) · Ahmedabad, Gujarat
              </p>
              <div className="p-4 rounded-2xl bg-[#fbfbfd] border border-[#e5e5ea]/70 text-xs text-[#6e6e73] leading-relaxed">
                <strong className="text-[#1d1d1f]">Key Focus:</strong> Data Structures & Algorithms, Object-Oriented Programming (C++), Linear Algebra, Probability & Statistics for Machine Learning, Database Systems.
              </div>
            </div>
          </section>

          {/* Campus Appointments Card */}
          <section className="bg-white rounded-3xl p-7 sm:p-9 border border-[#e5e5ea] shadow-sm flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-2 text-xs font-mono tracking-wider uppercase text-[#86868b] mb-3">
                <Award className="w-4 h-4 text-[#0071e3]" />
                <span>Campus Appointments</span>
              </div>

              <div className="space-y-4">
                <div className="p-4 rounded-2xl bg-[#fbfbfd] border border-[#e5e5ea]/70">
                  <div className="flex items-center justify-between text-[11px] font-mono text-[#0071e3] font-semibold mb-1">
                    <span>STUDENT CLUB</span>
                    <span className="text-[#86868b]">2025 – PRESENT</span>
                  </div>
                  <h4 className="text-base font-semibold text-[#1d1d1f] mb-0.5">
                    Core Team Member
                  </h4>
                  <p className="text-xs text-[#6e6e73]">
                    Coding Club, IITRAM
                  </p>
                </div>

                <div className="p-4 rounded-2xl bg-[#fbfbfd] border border-[#e5e5ea]/70">
                  <div className="flex items-center justify-between text-[11px] font-mono text-[#0071e3] font-semibold mb-1">
                    <span>STUDENT GOVERNANCE</span>
                    <span className="text-[#86868b]">2026 – PRESENT</span>
                  </div>
                  <h4 className="text-base font-semibold text-[#1d1d1f] mb-0.5">
                    Technical General Secretary
                  </h4>
                  <p className="text-xs text-[#6e6e73]">
                    Student Activities Council (SAC), IITRAM
                  </p>
                </div>
              </div>
            </div>
          </section>
        </div>

        {/* Full-Width Core Toolset Card */}
        <section className="bg-white rounded-3xl p-7 sm:p-8 border border-[#e5e5ea] shadow-sm mb-14">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div>
              <div className="flex items-center gap-2 text-xs font-mono tracking-wider uppercase text-[#86868b] mb-1">
                <Terminal className="w-3.5 h-3.5 text-[#0071e3]" />
                <span>Core Toolset & Frameworks</span>
              </div>
              <div className="text-sm text-[#6e6e73]">
                Technologies leveraged across production systems and research.
              </div>
            </div>
            <div className="flex flex-wrap gap-2">
              {['PyTorch', 'PEFT / LoRA', 'Segmentation', 'UNet', 'Unsloth', 'Python', 'C++', 'SQL', 'Git & GitHub'].map((tech) => (
                <span
                  key={tech}
                  className="text-xs px-3 py-1.5 rounded-full bg-[#f2f2f7] text-[#1d1d1f] font-medium"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </section>

        {/* Bottom Navigation */}
        <nav className="flex items-center justify-between pt-8 border-t border-[#e5e5ea] text-sm">
          <Link
            href="/"
            className="text-[#6e6e73] hover:text-[#1d1d1f] transition-colors"
          >
            ← Back to Home
          </Link>
          <Link
            href="/projects"
            className="inline-flex items-center gap-1.5 font-medium text-[#0071e3] hover:text-[#0077ed] transition-colors"
          >
            <span>View Projects</span>
            <ArrowUpRight className="w-4 h-4" />
          </Link>
        </nav>
      </div>
    </PageShell>
  );
}
