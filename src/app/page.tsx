import Link from "next/link";

export default function Home() {
  return (
    <main className="relative min-h-screen flex flex-col items-center justify-center bg-[#0f172a] text-slate-50 overflow-hidden">
      {/* Background Gradients */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-indigo-500/10 rounded-full blur-[120px] -translate-x-1/2 -translate-y-1/2" />
        <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-indigo-500/5 rounded-full blur-[120px] translate-x-1/2 translate-y-1/2" />
      </div>

      <div className="relative z-10 text-center px-4 animate-in fade-in slide-in-from-bottom-5 duration-1000">
        <div className="inline-flex items-center px-4 py-1.5 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 text-sm font-semibold mb-8 hover:bg-indigo-500/20 transition-all cursor-default">
          Welcome to Account Me
        </div>
        
        <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight mb-6 bg-gradient-to-br from-white via-white to-slate-400 bg-clip-text text-transparent">
          Hello World
        </h1>
        
        <p className="text-lg md:text-xl text-slate-400 max-w-2xl mx-auto mb-10 leading-relaxed">
          Your journey into modern accounting starts here. 
          Experience the future of financial management tailored for Sri Lanka.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link 
            href="/about" 
            className="px-8 py-4 bg-indigo-600 hover:bg-indigo-500 text-white rounded-xl font-bold transition-all hover:-translate-y-1 hover:shadow-[0_20px_40px_-12px_rgba(79,70,229,0.4)]"
          >
            Learn More
          </Link>
          <a 
            href="#" 
            className="px-8 py-4 bg-slate-800/50 hover:bg-slate-800 text-slate-200 border border-slate-700/50 rounded-xl font-bold transition-all"
          >
            Documentation
          </a>
        </div>
      </div>

      {/* Footer hint */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 text-slate-500 text-sm">
        Built with Next.js & Tailwind CSS
      </div>
    </main>
  );
}
