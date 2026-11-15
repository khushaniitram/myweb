'use client';

import { useState } from 'react';
import PageShell from '@/components/PageShell';
import { ArrowUpRight, Briefcase, Award, CheckCircle2, Calendar, MapPin, Activity, Video, ExternalLink, X } from 'lucide-react';
import Link from 'next/link';

export default function ExperiencePage() {
  const [certModalOpen, setCertModalOpen] = useState(false);

  return (
    <PageShell>
      <div className="mx-auto w-full max-w-[1080px] px-6 sm:px-8">
        {/* Centered Editorial Header */}
        <header className="text-center mb-12 sm:mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#f2f2f7] border border-black/5 text-xs font-mono tracking-wider uppercase text-[#6e6e73] mb-4">
            <Briefcase className="w-3.5 h-3.5 text-[#0071e3]" />
            <span>Track Record · Work History</span>
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-semibold tracking-tight text-[#1d1d1f] mb-4">
            Experience
          </h1>
          <p className="text-lg sm:text-xl text-[#6e6e73] font-normal tracking-tight max-w-2xl mx-auto leading-relaxed">
            Practical AI/ML engineering in clinical medical diagnostics and institutional technical governance.
          </p>
        </header>

        {/* Industry Internship Section */}
        <section className="mb-12">
          <div className="text-xs font-mono uppercase tracking-wider text-[#86868b] mb-4">
            Industry Experience
          </div>

          <article className="bg-white rounded-3xl p-7 sm:p-9 lg:p-10 border border-[#e5e5ea] shadow-sm hover:shadow-md hover:border-[#0071e3]/30 transition-all duration-300">
            {/* Header info */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-6 pb-6 border-b border-[#f2f2f7]">
              <div>
                <span className="inline-flex items-center gap-1.5 text-xs font-mono font-medium text-[#0071e3] uppercase tracking-wider mb-1">
                  <Activity className="w-3.5 h-3.5" />
                  Medical Diagnostics & Robotics
                </span>
                <h3 className="text-2xl sm:text-3xl font-semibold text-[#1d1d1f] tracking-tight">
                  Intentio Biopsy Device Pvt. Ltd.
                </h3>
                <p className="text-sm font-medium text-[#424245] mt-1">
                  AI/ML Intern · Summer Internship
                </p>
              </div>

              <div className="flex flex-col sm:items-end text-xs font-mono text-[#6e6e73] gap-1 self-start sm:self-auto">
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#f5f5f7] font-medium text-[#1d1d1f]">
                  <Calendar className="w-3.5 h-3.5 text-[#0071e3]" />
                  MAY 2026 – JULY 2026
                </span>
                <span className="inline-flex items-center gap-1 text-[#86868b]">
                  <MapPin className="w-3 h-3" /> Ahmedabad, India
                </span>
              </div>
            </div>

            {/* Diagnostic Benchmark Stat Callout */}
            <div className="p-5 rounded-2xl bg-[#fbfbfd] border border-[#e5e5ea]/80 flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-8">
              <div>
                <div className="text-xs font-mono text-[#86868b] uppercase tracking-wider mb-0.5">
                  Clinical Benchmark Validation
                </div>
                <div className="text-sm font-medium text-[#1d1d1f]">
                  Bone Tumor Diagnostic Classification Model
                </div>
              </div>
              <div className="inline-flex items-baseline gap-2 bg-emerald-50 text-emerald-700 px-4 py-2 rounded-xl border border-emerald-200/60 font-mono self-start sm:self-auto">
                <span className="text-lg font-bold">92.8%</span>
                <span className="text-xs font-medium">Verified Accuracy</span>
              </div>
            </div>

            {/* Highlights */}
            <div className="mb-8">
              <div className="text-xs font-mono uppercase tracking-wider text-[#86868b] mb-3">
                Key Responsibilities & Deliverables
              </div>
              <ul className="space-y-3 text-sm sm:text-base text-[#424245] leading-relaxed">
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-4 h-4 text-[#0071e3] flex-shrink-0 mt-1" />
                  <span>
                    Contributed to the development and training of a Convolutional Neural Network (CNN) architecture engineered for bone tumor detection and classification across clinical medical image cohorts.
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-4 h-4 text-[#0071e3] flex-shrink-0 mt-1" />
                  <span>
                    Designed dataset preprocessing, noise filtering, and normalization pipelines to ensure high model generalization under clinical constraints.
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-4 h-4 text-[#0071e3] flex-shrink-0 mt-1" />
                  <span>
                    Helped enable online connectivity and real-time remote operability of the AR4 controller for robotic device intervention.
                  </span>
                </li>
              </ul>
            </div>

            {/* Verified Internship Certificate Card */}
            <div className="mb-8">
              <div className="flex items-center justify-between gap-2 mb-4">
                <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-[#86868b]">
                  <Award className="w-3.5 h-3.5 text-[#0071e3]" />
                  <span>Verified Credentials · Internship Certificate</span>
                </div>
                <button
                  type="button"
                  onClick={() => setCertModalOpen(true)}
                  className="text-xs font-mono text-[#0071e3] hover:text-[#0077ed] inline-flex items-center gap-1 font-medium cursor-pointer"
                >
                  <span>Expand Certificate</span>
                  <ExternalLink className="w-3 h-3" />
                </button>
              </div>

              <div
                onClick={() => setCertModalOpen(true)}
                className="group relative cursor-pointer rounded-2xl border border-[#e5e5ea] bg-[#fbfbfd] p-4 sm:p-5 hover:border-[#0071e3]/40 hover:shadow-md transition-all flex flex-col md:flex-row items-center gap-6"
              >
                <div className="relative w-full md:w-64 aspect-[4/3] rounded-xl overflow-hidden border border-[#e5e5ea] bg-white shadow-sm flex-shrink-0 group-hover:scale-[1.02] transition-transform">
                  <img
                    src="/images/interncerti.jpeg"
                    alt="Intentio Biopsy Device Internship Certificate - Khushan Borse"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center text-white text-xs font-mono font-medium gap-1.5 backdrop-blur-[2px]">
                    <ExternalLink className="w-4 h-4" />
                    <span>Click to View Full Certificate</span>
                  </div>
                </div>

                <div className="flex-1 w-full">
                  <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-emerald-50 border border-emerald-200/60 text-emerald-700 text-[11px] font-mono font-medium mb-2">
                    <CheckCircle2 className="w-3 h-3" />
                    Verified Completion
                  </div>
                  <h4 className="text-base sm:text-lg font-semibold text-[#1d1d1f] mb-1 group-hover:text-[#0071e3] transition-colors">
                    Summer Research Internship Certificate
                  </h4>
                  <p className="text-xs text-[#6e6e73] leading-relaxed mb-3">
                    Awarded for contributions to CNN-based bone tumor detection, dataset normalization, and AR4 teleoperation robotics at Intentio Biopsy Device Pvt. Ltd. (May 2026 – July 2026).
                  </p>
                  <div className="text-xs font-mono text-[#86868b] flex items-center gap-2">
                    <span>Issued: July 2026</span>
                    <span>·</span>
                    <span>Candidate: Khushan Borse</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Video Demonstrations (Portrait Mode, No Audio) */}
            <div className="mb-8">
              <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-[#86868b] mb-4">
                <Video className="w-3.5 h-3.5 text-[#0071e3]" />
                <span>Robotic Hardware Teleoperation Demos</span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-2xl mx-auto">
                {/* Demo 1 */}
                <div className="rounded-2xl border border-[#e5e5ea] bg-[#fbfbfd] p-3.5 flex flex-col justify-between hover:border-[#0071e3]/30 transition-all">
                  <div className="relative aspect-[9/16] max-h-[460px] rounded-xl overflow-hidden bg-black mb-3 shadow-inner">
                    <video
                      src="/videos/robotics-demo-1.mp4"
                      playsInline
                      muted
                      autoPlay
                      loop
                      className="w-full h-full object-cover"
                    />
                    <span className="absolute top-2.5 left-2.5 px-2 py-0.5 rounded-md bg-black/60 backdrop-blur-sm text-[10px] font-mono font-medium text-white uppercase tracking-wider">
                      Demo 01 // AR4 Teleoperation
                    </span>
                  </div>
                  <div>
                    <h4 className="text-sm font-semibold text-[#1d1d1f] mb-1">
                      AR4 Robotic Arm Online Connectivity
                    </h4>
                    <p className="text-xs text-[#6e6e73] leading-relaxed">
                      Testing multi-axis joint actuation and online controller communication for remote robotic teleoperation.
                    </p>
                  </div>
                </div>

                {/* Demo 2 */}
                <div className="rounded-2xl border border-[#e5e5ea] bg-[#fbfbfd] p-3.5 flex flex-col justify-between hover:border-[#0071e3]/30 transition-all">
                  <div className="relative aspect-[9/16] max-h-[460px] rounded-xl overflow-hidden bg-black mb-3 shadow-inner">
                    <video
                      src="/videos/robotics-demo-2.mp4"
                      playsInline
                      muted
                      autoPlay
                      loop
                      className="w-full h-full object-cover"
                    />
                    <span className="absolute top-2.5 left-2.5 px-2 py-0.5 rounded-md bg-black/60 backdrop-blur-sm text-[10px] font-mono font-medium text-white uppercase tracking-wider">
                      Demo 02 // Precision Actuation
                    </span>
                  </div>
                  <div>
                    <h4 className="text-sm font-semibold text-[#1d1d1f] mb-1">
                      Robotic Device Intervention & Kinematics
                    </h4>
                    <p className="text-xs text-[#6e6e73] leading-relaxed">
                      Verifying end-effector spatial precision, trajectory repeatability, and real-time response under device telemetry.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Tags */}
            <div className="flex flex-wrap items-center gap-2 pt-6 border-t border-[#f2f2f7]">
              <span className="text-xs font-mono uppercase tracking-wider text-[#86868b] mr-2">
                Tech Stack:
              </span>
              {['CNNs', 'Medical Imaging', 'Classification', 'AR4 Robotics', 'PyTorch'].map((tag) => (
                <span
                  key={tag}
                  className="text-xs px-3 py-1.5 rounded-full bg-[#f2f2f7] text-[#1d1d1f] font-medium"
                >
                  {tag}
                </span>
              ))}
            </div>
          </article>
        </section>

        {/* Institutional Leadership Section */}
        <section className="mb-14">
          <div className="text-xs font-mono uppercase tracking-wider text-[#86868b] mb-4">
            Institutional Leadership & Governance
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white rounded-3xl p-7 border border-[#e5e5ea] shadow-sm hover:shadow-md transition-shadow flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between gap-2 mb-3">
                  <span className="inline-flex items-center gap-1.5 text-xs font-mono font-medium text-[#0071e3] uppercase tracking-wider">
                    <Award className="w-3.5 h-3.5" />
                    Student Governance
                  </span>
                  <span className="text-xs font-mono text-[#86868b]">
                    2026 – PRESENT
                  </span>
                </div>
                <h3 className="text-xl font-semibold text-[#1d1d1f] tracking-tight mb-1">
                  Technical General Secretary
                </h3>
                <p className="text-xs font-medium text-[#6e6e73] mb-4">
                  Student Activities Council (SAC), IITRAM
                </p>
                <p className="text-sm text-[#424245] leading-relaxed">
                  Overseeing technical clubs, managing institutional hackathons, and liaising between student engineering teams and institute administration.
                </p>
              </div>
              <div className="pt-5 mt-5 border-t border-[#f2f2f7] text-xs text-[#86868b]">
                Resource Allocation · Hackathons · Technical Events
              </div>
            </div>

            <div className="bg-white rounded-3xl p-7 border border-[#e5e5ea] shadow-sm hover:shadow-md transition-shadow flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between gap-2 mb-3">
                  <span className="inline-flex items-center gap-1.5 text-xs font-mono font-medium text-[#0071e3] uppercase tracking-wider">
                    <Award className="w-3.5 h-3.5" />
                    Technical Mentorship
                  </span>
                  <span className="text-xs font-mono text-[#86868b]">
                    2025 – PRESENT
                  </span>
                </div>
                <h3 className="text-xl font-semibold text-[#1d1d1f] tracking-tight mb-1">
                  Core Team Member
                </h3>
                <p className="text-xs font-medium text-[#6e6e73] mb-4">
                  Coding Club, IITRAM
                </p>
                <p className="text-sm text-[#424245] leading-relaxed">
                  Conducting algorithm lectures, organizing coding sprints, and introducing foundational machine learning concepts to incoming batches.
                </p>
              </div>
              <div className="pt-5 mt-5 border-t border-[#f2f2f7] text-xs text-[#86868b]">
                Algorithms Workshops · Competitive Programming · Mentoring
              </div>
            </div>
          </div>
        </section>

        {/* Bottom Navigation */}
        <nav className="flex items-center justify-between pt-8 border-t border-[#e5e5ea] text-sm">
          <Link
            href="/skills"
            className="text-[#6e6e73] hover:text-[#1d1d1f] transition-colors"
          >
            ← Skills
          </Link>
          <Link
            href="/contact"
            className="inline-flex items-center gap-1.5 font-medium text-[#0071e3] hover:text-[#0077ed] transition-colors"
          >
            <span>Contact</span>
            <ArrowUpRight className="w-4 h-4" />
          </Link>
        </nav>
      </div>

      {/* Certificate Lightbox Modal */}
      {certModalOpen && (
        <div
          role="dialog"
          aria-modal="true"
          className="fixed inset-0 z-50 bg-black/70 backdrop-blur-sm flex items-center justify-center p-4 sm:p-6"
          onClick={() => setCertModalOpen(false)}
        >
          <div
            className="relative max-w-4xl w-full bg-white rounded-3xl overflow-hidden shadow-2xl p-4 sm:p-6 border border-white/20"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between pb-4 mb-4 border-b border-[#e5e5ea]">
              <div>
                <h3 className="text-base sm:text-lg font-semibold text-[#1d1d1f]">
                  Intentio Biopsy Device Pvt. Ltd. — Internship Certificate
                </h3>
                <p className="text-xs font-mono text-[#6e6e73]">
                  May 2026 – July 2026 · AI/ML Summer Research Intern
                </p>
              </div>
              <div className="flex items-center gap-2">
                <a
                  href="/images/interncerti.jpeg"
                  target="_blank"
                  rel="noreferrer"
                  download="Khushan_Borse_Internship_Certificate.jpeg"
                  className="p-2 rounded-full bg-[#f5f5f7] hover:bg-[#e5e5ea] text-[#1d1d1f] transition-colors"
                  title="Open Original Image"
                >
                  <ExternalLink className="w-4 h-4" />
                </a>
                <button
                  type="button"
                  onClick={() => setCertModalOpen(false)}
                  className="p-2 rounded-full bg-[#f5f5f7] hover:bg-[#e5e5ea] text-[#1d1d1f] transition-colors cursor-pointer"
                  title="Close Modal"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>
            </div>
            <div className="max-h-[75vh] overflow-auto rounded-xl flex items-center justify-center bg-[#fbfbfd]">
              <img
                src="/images/interncerti.jpeg"
                alt="Intentio Biopsy Device Internship Certificate - Khushan Borse"
                className="w-full h-auto object-contain rounded-lg"
              />
            </div>
          </div>
        </div>
      )}
    </PageShell>
  );
}
