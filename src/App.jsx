import React, { useState } from 'react';
import {
  Terminal,
  Shield,
  Layers,
  Cpu,
  Database,
  WifiOff,
  Radio,
  ExternalLink,
  Mail,
  Copy,
  Check,
  Code2,
  Server,
  Smartphone,
  GraduationCap,
  Sparkles,
  ArrowUpRight,
  ChevronRight,
  Activity,
  FolderGit2
} from 'lucide-react';

const GithubIcon = ({ className = "w-4 h-4" }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
    <path d="M9 18c-4.51 2-5-2-7-2" />
  </svg>
);

export default function App() {
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [activeTab, setActiveTab] = useState('all'); // 'all', 'backend', 'fullstack'

  const handleCopyEmail = () => {
    navigator.clipboard.writeText('andayudhobaz@gmail.com');
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2500);
  };

  const projects = [
    {
      id: 'pos-saas',
      title: 'POS SaaS Multi-Tenant Offline-First',
      category: 'fullstack',
      tagline: 'Sistem Kasir Ritel & F&B Multi-Toko dengan Toleransi Kegagalan Jaringan Total',
      description: 'Arsitektur SaaS Point of Sale terpadu dengan isolasi data antar toko (Shared Database, Shared Schema). Menghadirkan aplikasi kasir PWA yang tetap dapat beroperasi normal saat koneksi internet terputus menggunakan IndexedDB lokal, batch background sync otomatis saat online, dan modul resolusi konflik stok minus pada dashboard manajer berbasis WebSocket real-time.',
      highlights: [
        'Offline-First PWA dengan IndexedDB caching & morning catalog sync',
        'Auto-reconciliation konflik stok minus akibat penjualan luring',
        'Live transaction feed via WebSocket (zero refresh latency)',
        '3 Portal terpisah: Kasir Mobile, Manager Toko, dan SaaS Super Admin'
      ],
      stack: ['React 19', 'FastAPI', 'PostgreSQL 17', 'SQLAlchemy Async', 'IndexedDB', 'WebSocket', 'Tailwind CSS'],
      repos: ['POS-Backend', 'POS-Cashier-PWA', 'POS-Manager-Dashboard', 'POS-Admin'],
      status: 'Skripsi Riset TTU 1'
    },
    {
      id: 'fix-people',
      title: 'Fix People Enterprise HRIS & KMS',
      category: 'backend',
      tagline: 'Sistem Manajemen Karyawan, Pelacakan Lapangan Real-Time, dan Alur Approval Kompleks',
      description: 'Platform backend enterprise untuk pengelolaan absensi berbasis geofencing, approval berjenjang dinamis (Direktur, Kepala Departemen, Kepala Divisi), pelacakan GPS operator lapangan real-time via WebSocket & Redis, sistem SLA auto-resolve, serta Knowledge Management System (KMS) dengan dual progress tracking materi & kuis evaluasi.',
      highlights: [
        'Real-time GPS tracking hub menggunakan Redis caching & WebSockets',
        'Hierarki persetujuan bertingkat dinamis sesuai struktur jabatan',
        'Strict RBAC dengan pemisahan izin granular (Lihat vs Kelola)',
        'Otomasi background task via APScheduler (SLA 24 jam auto-resolve)'
      ],
      stack: ['Python 3.13', 'FastAPI', 'PostgreSQL', 'Redis', 'Alembic', 'APScheduler', 'aioboto3'],
      repos: ['fix-people-be'],
      status: 'Production System'
    },
    {
      id: 'localhub',
      title: 'LocalHub & AI Gateway Infrastructure',
      category: 'fullstack',
      tagline: 'Orkestrasi Micro-services Lokal & Pemantauan Latensi Model AI',
      description: 'Dashboard pemantauan layanan lokal mandiri (PWA) yang terhubung ke reverse proxy 9Router (OpenAI-compatible AI endpoint). Berjalan di latar belakang Windows sebagai service otomatis, memvisualisasikan memori sistem, status port, dan responsivitas layanan secara real-time.',
      highlights: [
        'Real-time ping monitor dengan visualisasi latensi interaktif',
        'Manajemen daemon background Windows tanpa tampilan terminal pop-up',
        'Dashboard responsif yang dioptimasi khusus untuk layar Safari iOS'
      ],
      stack: ['Python', 'FastAPI/HTTP', 'PWA', 'Vanilla JS', 'Windows VBS Automation'],
      repos: ['local-dashboard'],
      status: 'Active Infrastructure'
    }
  ];

  const filteredProjects = activeTab === 'all' 
    ? projects 
    : projects.filter(p => p.category === activeTab);

  return (
    <div className="min-h-screen bg-[#0b0813] text-[#a79fc2] selection:bg-[#a855f7] selection:text-white">
      
      {/* Dynamic Background Ambient Light Gradients */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
        <div className="absolute top-[-20%] left-1/2 -translate-x-1/2 w-[80vw] h-[600px] bg-[radial-gradient(ellipse_at_top,_rgba(168,85,247,0.15)_0%,_transparent_70%)]" />
        <div className="absolute top-[40%] right-[-10%] w-[500px] h-[500px] bg-[radial-gradient(circle,_rgba(139,92,246,0.08)_0%,_transparent_70%)]" />
        <div className="absolute bottom-[10%] left-[-10%] w-[500px] h-[500px] bg-[radial-gradient(circle,_rgba(34,211,238,0.06)_0%,_transparent_70%)]" />
      </div>

      {/* 1. Floating Top Glass Navigation Dock */}
      <header className="sticky top-4 z-50 max-w-6xl mx-auto px-4 w-full">
        <div className="glass-card rounded-2xl px-5 py-3.5 flex items-center justify-between shadow-2xl backdrop-blur-xl border border-[#2d2150]">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-[#a855f7] to-[#8b5cf6] flex items-center justify-center font-extrabold text-[#f3efff] shadow-lg shadow-[#a855f7]/30 text-base tracking-wider">
              YB
            </div>
            <div>
              <div className="text-sm font-bold text-[#f3efff] leading-tight">Anda Yudho Baskoro</div>
              <div className="text-xs text-[#8d84ad] font-mono">Software Engineer</div>
            </div>
          </div>

          {/* Status Pill (Pulsing Arctic Cyan) */}
          <div className="hidden md:flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#22d3ee]/10 border border-[#22d3ee]/30 text-[#22d3ee] text-xs font-medium font-mono">
            <span className="w-2 h-2 rounded-full bg-[#22d3ee] animate-pulse" />
            <span>Available for Engineering Projects</span>
          </div>

          <div className="flex items-center gap-2">
            <a
              href="https://github.com/2ybuser"
              target="_blank"
              rel="noreferrer"
              className="w-9 h-9 rounded-xl bg-[#161028] hover:bg-[#2d2150] text-[#f3efff] flex items-center justify-center transition-all border border-[#2d2150] active:scale-95"
              title="GitHub Profile"
            >
              <GithubIcon className="w-4 h-4" />
            </a>
            <button
              onClick={handleCopyEmail}
              className="h-9 px-3.5 rounded-xl bg-gradient-to-r from-[#a855f7] to-[#8b5cf6] hover:brightness-110 active:scale-95 text-[#f3efff] text-xs font-semibold flex items-center gap-1.5 transition-all shadow-md shadow-[#a855f7]/25"
            >
              {copiedEmail ? <Check className="w-3.5 h-3.5 text-white" /> : <Mail className="w-3.5 h-3.5" />}
              <span>{copiedEmail ? 'Email Disalin!' : 'Kontak'}</span>
            </button>
          </div>
        </div>
      </header>

      {/* 2. Main Content Container */}
      <main className="relative z-10 max-w-6xl mx-auto px-4 pt-12 pb-24 space-y-24">

        {/* HERO SECTION */}
        <section className="text-center space-y-6 pt-4 max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#161028] border border-[#2d2150] text-xs text-[#c084fc] font-mono shadow-sm">
            <Sparkles className="w-3.5 h-3.5 text-[#a855f7]" />
            <span>Undergraduate Informatics Researcher & Fullstack Developer</span>
          </div>

          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-[#f3efff] leading-[1.15]">
            Building High-Precision <br />
            <span className="bg-gradient-to-r from-[#f3efff] via-[#c084fc] to-[#a855f7] bg-clip-text text-transparent">
              Multi-Tenant & Offline Systems
            </span>
          </h1>

          <p className="text-base sm:text-lg text-[#a79fc2] leading-relaxed max-w-2xl mx-auto font-normal">
            Fokus pada rekayasa backend berkinerja tinggi, database multi-tenant terisolasi, arsitektur toleran kegagalan jaringan (Offline-First), dan otomatisasi infrastruktur lokal modern.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-3 pt-2">
            <a
              href="#projects"
              className="h-12 px-6 rounded-xl bg-gradient-to-r from-[#a855f7] to-[#8b5cf6] hover:brightness-110 active:scale-95 text-[#f3efff] font-semibold text-sm flex items-center gap-2 shadow-lg shadow-[#a855f7]/30 transition-all"
            >
              <span>Eksplorasi Proyek</span>
              <ArrowUpRight className="w-4 h-4" />
            </a>

            <button
              onClick={handleCopyEmail}
              className="h-12 px-6 rounded-xl bg-[#161028]/80 hover:bg-[#211c32] active:scale-95 text-[#f3efff] font-semibold text-sm border border-[#2d2150] hover:border-[#a855f7]/40 flex items-center gap-2 transition-all"
            >
              <Copy className="w-4 h-4 text-[#c084fc]" />
              <span>{copiedEmail ? 'Email Disalin ke Clipboard' : 'Salin Email'}</span>
            </button>
          </div>

          {/* Specialized Interactive Terminal Window */}
          <div className="pt-6 text-left">
            <div className="glass-card rounded-2xl overflow-hidden border border-[#2d2150] shadow-2xl">
              <div className="bg-[#100b20] px-4 py-2.5 flex items-center justify-between border-b border-[#2d2150]">
                <div className="flex items-center gap-2">
                  <span className="w-3 h-3 rounded-full bg-[#ff5f56]/80" />
                  <span className="w-3 h-3 rounded-full bg-[#ffbd2e]/80" />
                  <span className="w-3 h-3 rounded-full bg-[#27c93f]/80" />
                  <span className="text-xs text-[#8d84ad] font-mono ml-2">yudho@legion5: ~/architecture</span>
                </div>
                <div className="text-[11px] text-[#22d3ee] font-mono flex items-center gap-1.5">
                  <Activity className="w-3 h-3 animate-spin" />
                  <span>runtime: active</span>
                </div>
              </div>

              <div className="p-5 font-mono text-xs sm:text-sm space-y-2.5 overflow-x-auto bg-[#0b0813]/90">
                <div className="flex gap-2">
                  <span className="text-[#a855f7]">$</span>
                  <span className="text-[#f3efff]">hermes inspect --target yudho-stack</span>
                </div>
                <div className="text-[#8d84ad] space-y-1 pl-4 border-l-2 border-[#2d2150]">
                  <div><span className="text-[#c084fc]">Full Name:</span> Anda Yudho Baskoro (Yudho)</div>
                  <div><span className="text-[#c084fc]">Affiliation:</span> S1 Teknik Informatika, FTI UKSW Salatiga (NIM: 672023079)</div>
                  <div><span className="text-[#c084fc]">Core Focus:</span> Multi-Tenant SaaS, Offline-First PWA, Realtime WebSocket Hub</div>
                  <div><span className="text-[#c084fc]">Backend Stack:</span> Python 3.14 • FastAPI • Async SQLAlchemy • PostgreSQL 17 • Redis</div>
                  <div><span className="text-[#c084fc]">Frontend Stack:</span> React 19 • Vite • Tailwind CSS • IndexedDB (idb) • PWA</div>
                  <div><span className="text-[#22d3ee]">&gt; System Status:</span> All 4 local microservices running healthy [200 OK]</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 3. IMPACT & METRICS STATS */}
        <section className="grid grid-cols-2 lg:grid-cols-4 gap-4">
          {[
            { value: '4+', label: 'Production-Ready Portals', desc: 'Kasir, Manager, SuperAdmin, HRIS' },
            { value: '100%', label: 'Offline-First Resilience', desc: 'IndexedDB caching & auto-sync' },
            { value: '0.0s', label: 'Zero-Refresh WebSocket', desc: 'Live event-driven transaction feed' },
            { value: 'Strict', label: 'Multi-Tenant Isolation', desc: 'Shared Database, Shared Schema' },
          ].map((stat, i) => (
            <div key={i} className="glass-card glass-card-hover rounded-2xl p-5 border border-[#2d2150]">
              <div className="text-3xl sm:text-4xl font-extrabold text-[#f3efff] font-mono tracking-tight bg-gradient-to-r from-[#f3efff] to-[#c084fc] bg-clip-text text-transparent">
                {stat.value}
              </div>
              <div className="text-xs font-bold text-[#f3efff] mt-1">{stat.label}</div>
              <div className="text-[11px] text-[#8d84ad] mt-0.5">{stat.desc}</div>
            </div>
          ))}
        </section>

        {/* 4. FEATURED PROJECTS SHOWCASE */}
        <section id="projects" className="space-y-8 scroll-mt-24">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 border-b border-[#2d2150] pb-4">
            <div>
              <div className="text-xs font-mono font-bold uppercase tracking-wider text-[#a855f7]">Curated Portfolio</div>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-[#f3efff] mt-1">Proyek Rekayasa Unggulan</h2>
            </div>

            {/* Filter Tabs */}
            <div className="flex items-center gap-1.5 p-1 rounded-xl bg-[#161028] border border-[#2d2150]">
              {[
                { id: 'all', label: 'Semua' },
                { id: 'fullstack', label: 'Fullstack & PWA' },
                { id: 'backend', label: 'Backend & Enterprise' },
              ].map(tab => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-all ${
                    activeTab === tab.id
                      ? 'bg-[#a855f7] text-[#f3efff] shadow-md shadow-[#a855f7]/30'
                      : 'text-[#8d84ad] hover:text-[#f3efff]'
                  }`}
                >
                  {tab.label}
                </button>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 gap-8">
            {filteredProjects.map((p) => (
              <div
                key={p.id}
                className="glass-card glass-card-hover rounded-3xl p-6 sm:p-8 border border-[#2d2150] space-y-6 transition-all"
              >
                <div className="flex flex-col lg:flex-row lg:items-start justify-between gap-4">
                  <div className="space-y-1.5">
                    <div className="flex flex-wrap items-center gap-2.5">
                      <span className="px-2.5 py-0.5 rounded-full text-[11px] font-mono font-bold bg-[#a855f7]/15 text-[#c084fc] border border-[#a855f7]/30">
                        {p.status}
                      </span>
                      <span className="text-xs text-[#8d84ad] font-mono">• {p.tagline}</span>
                    </div>
                    <h3 className="text-xl sm:text-2xl font-extrabold text-[#f3efff]">{p.title}</h3>
                  </div>

                  <div className="flex items-center gap-2">
                    {p.repos.map((repo, idx) => (
                      <span
                        key={idx}
                        className="px-3 py-1 rounded-lg bg-[#100b20] border border-[#2d2150] text-xs font-mono text-[#a79fc2] flex items-center gap-1.5"
                      >
                        <FolderGit2 className="w-3.5 h-3.5 text-[#22d3ee]" />
                        <span>{repo}</span>
                      </span>
                    ))}
                  </div>
                </div>

                <p className="text-sm text-[#a79fc2] leading-relaxed">
                  {p.description}
                </p>

                {/* Key Architectural Highlights */}
                <div className="space-y-2">
                  <div className="text-xs font-bold font-mono text-[#f3efff] uppercase tracking-wider">
                    Arsitektur & Nilai Kebaruan:
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
                    {p.highlights.map((h, i) => (
                      <div key={i} className="flex items-start gap-2 text-[#a79fc2] bg-[#161028]/60 p-2.5 rounded-xl border border-[#2d2150]/60">
                        <Check className="w-4 h-4 text-[#a855f7] shrink-0 mt-0.5" />
                        <span>{h}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Technology Stack Chips */}
                <div className="flex flex-wrap gap-2 pt-2 border-t border-[#2d2150]/80">
                  {p.stack.map((s, idx) => (
                    <span
                      key={idx}
                      className="px-3 py-1 rounded-lg bg-[#161028] text-xs font-mono font-medium text-[#c084fc] border border-[#2d2150]"
                    >
                      {s}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* 5. TECHNICAL MATRIX & ENGINEERING SKILLS */}
        <section className="space-y-6">
          <div className="border-b border-[#2d2150] pb-4">
            <div className="text-xs font-mono font-bold uppercase tracking-wider text-[#a855f7]">Capability Stack</div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#f3efff] mt-1">Keahlian Teknis & Domain</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            <div className="glass-card rounded-2xl p-5 border border-[#2d2150] space-y-3">
              <div className="w-10 h-10 rounded-xl bg-[#a855f7]/15 border border-[#a855f7]/30 flex items-center justify-center text-[#c084fc]">
                <Server className="w-5 h-5" />
              </div>
              <h4 className="text-base font-bold text-[#f3efff]">Backend Engineering</h4>
              <p className="text-xs text-[#8d84ad] leading-relaxed">
                Spesialisasi arsitektur microservices & monolit modern dengan FastAPI, Async SQLAlchemy, JWT RBAC, Pydantic, dan WebSocket hub.
              </p>
              <div className="flex flex-wrap gap-1.5 pt-1">
                {['Python 3.14', 'FastAPI', 'Uvicorn', 'WebSockets', 'Pytest'].map(t => (
                  <span key={t} className="text-[11px] font-mono px-2 py-0.5 rounded bg-[#161028] text-[#a79fc2] border border-[#2d2150]">{t}</span>
                ))}
              </div>
            </div>

            <div className="glass-card rounded-2xl p-5 border border-[#2d2150] space-y-3">
              <div className="w-10 h-10 rounded-xl bg-[#22d3ee]/15 border border-[#22d3ee]/30 flex items-center justify-center text-[#22d3ee]">
                <Database className="w-5 h-5" />
              </div>
              <h4 className="text-base font-bold text-[#f3efff]">Database & Storage</h4>
              <p className="text-xs text-[#8d84ad] leading-relaxed">
                Penyusunan skema relational terisolasi, migrasi Alembic, indexing, caching Redis, dan penyimpanan S3-compatible cloud storage.
              </p>
              <div className="flex flex-wrap gap-1.5 pt-1">
                {['PostgreSQL 17', 'Redis', 'IndexedDB', 'Alembic', 'S3/Tigris'].map(t => (
                  <span key={t} className="text-[11px] font-mono px-2 py-0.5 rounded bg-[#161028] text-[#a79fc2] border border-[#2d2150]">{t}</span>
                ))}
              </div>
            </div>

            <div className="glass-card rounded-2xl p-5 border border-[#2d2150] space-y-3">
              <div className="w-10 h-10 rounded-xl bg-[#8b5cf6]/15 border border-[#8b5cf6]/30 flex items-center justify-center text-[#c084fc]">
                <Smartphone className="w-5 h-5" />
              </div>
              <h4 className="text-base font-bold text-[#f3efff]">Frontend & PWA</h4>
              <p className="text-xs text-[#8d84ad] leading-relaxed">
                Antarmuka responsif ramah sentuhan, offline caching, Service Workers, pencegahan layout bounce iOS Safari, dan Tailwind CSS v4.
              </p>
              <div className="flex flex-wrap gap-1.5 pt-1">
                {['React 19', 'Vite', 'Tailwind v4', 'PWA', 'Lucide SVG'].map(t => (
                  <span key={t} className="text-[11px] font-mono px-2 py-0.5 rounded bg-[#161028] text-[#a79fc2] border border-[#2d2150]">{t}</span>
                ))}
              </div>
            </div>

            <div className="glass-card rounded-2xl p-5 border border-[#2d2150] space-y-3">
              <div className="w-10 h-10 rounded-xl bg-[#a855f7]/15 border border-[#a855f7]/30 flex items-center justify-center text-[#c084fc]">
                <Shield className="w-5 h-5" />
              </div>
              <h4 className="text-base font-bold text-[#f3efff]">Security & DevOps</h4>
              <p className="text-xs text-[#8d84ad] leading-relaxed">
                Pencegahan kerentanan (CORS, DoS streaming buffer cap, default-deny authz), version control Git, dan workflow deployment otomatis.
              </p>
              <div className="flex flex-wrap gap-1.5 pt-1">
                {['Git / GitHub', 'uv Package Tool', 'Docker', 'REST Security'].map(t => (
                  <span key={t} className="text-[11px] font-mono px-2 py-0.5 rounded bg-[#161028] text-[#a79fc2] border border-[#2d2150]">{t}</span>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* 6. EDUCATION & ACADEMIC BACKGROUND */}
        <section className="glass-card rounded-3xl p-6 sm:p-8 border border-[#2d2150]">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-2xl bg-gradient-to-tr from-[#a855f7] to-[#8b5cf6] flex items-center justify-center text-[#f3efff] shadow-lg shadow-[#a855f7]/25 shrink-0">
                <GraduationCap className="w-6 h-6" />
              </div>
              <div>
                <h3 className="text-lg font-bold text-[#f3efff]">Universitas Kristen Satya Wacana (UKSW)</h3>
                <p className="text-xs text-[#a79fc2]">Fakultas Teknologi Informasi — S1 Teknik Informatika (2023 - Sekarang)</p>
              </div>
            </div>

            <div className="text-right sm:text-right font-mono text-xs text-[#22d3ee] bg-[#22d3ee]/10 px-3 py-1.5 rounded-xl border border-[#22d3ee]/20 w-fit">
              Salatiga, Jawa Tengah
            </div>
          </div>
        </section>

        {/* 7. FOOTER & CONTACT CALLOUT */}
        <footer className="glass-card rounded-3xl p-8 sm:p-12 border border-[#2d2150] text-center space-y-6 relative overflow-hidden">
          <div className="max-w-xl mx-auto space-y-3">
            <h3 className="text-2xl sm:text-3xl font-extrabold text-[#f3efff]">Tertarik Berkolaborasi?</h3>
            <p className="text-sm text-[#a79fc2]">
              Siap berdiskusi mengenai arsitektur sistem, pengembangan SaaS multi-tenant, atau peluang kerja sama engineering.
            </p>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-3 pt-2">
            <button
              onClick={handleCopyEmail}
              className="h-12 px-6 rounded-xl bg-gradient-to-r from-[#a855f7] to-[#8b5cf6] hover:brightness-110 active:scale-95 text-[#f3efff] font-semibold text-sm flex items-center gap-2 shadow-lg shadow-[#a855f7]/30 transition-all"
            >
              {copiedEmail ? <Check className="w-4 h-4" /> : <Mail className="w-4 h-4" />}
              <span>{copiedEmail ? 'Email Berhasil Disalin!' : 'andayudhobaz@gmail.com'}</span>
            </button>

            <a
              href="https://github.com/2ybuser"
              target="_blank"
              rel="noreferrer"
              className="h-12 px-6 rounded-xl bg-[#161028] hover:bg-[#211c32] active:scale-95 text-[#f3efff] font-semibold text-sm border border-[#2d2150] flex items-center gap-2 transition-all"
            >
              <GithubIcon className="w-4 h-4" />
              <span>GitHub (2ybuser)</span>
            </a>
          </div>

          <div className="pt-8 border-t border-[#2d2150]/60 text-xs text-[#8d84ad] font-mono flex flex-col sm:flex-row items-center justify-between gap-2">
            <div>&copy; 2026 Anda Yudho Baskoro. All rights reserved.</div>
            <div className="flex items-center gap-1.5 text-[#c084fc]">
              <span>Obsidian Violet Design System</span>
              <span>•</span>
              <span>Poppins Font</span>
            </div>
          </div>
        </footer>

      </main>
    </div>
  );
}
