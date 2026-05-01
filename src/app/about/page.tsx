import Link from "next/link";

export default function About() {
  return (
    <main className="min-h-screen bg-[#0f172a] text-slate-50 py-20 px-6 relative overflow-hidden">
      {/* Background Gradients */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-indigo-500/5 rounded-full blur-[120px] translate-x-1/4 -translate-y-1/4" />
      </div>

      <div className="max-w-4xl mx-auto relative z-10 animate-in fade-in slide-in-from-bottom-5 duration-700">
        <Link 
          href="/" 
          className="inline-flex items-center text-indigo-400 hover:text-indigo-300 font-semibold mb-12 transition-colors group"
        >
          <span className="mr-2 transition-transform group-hover:-translate-x-1">←</span>
          Back to Home
        </Link>

        <header className="mb-16">
          <h1 className="text-4xl md:text-5xl font-extrabold mb-6 bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent">
            What is Account Me?
          </h1>
          <p className="text-xl text-slate-400 leading-relaxed">
            Empowering Sri Lankan businesses with smart financial tools.
          </p>
        </header>

        <section className="grid gap-8">
          <div className="bg-slate-800/40 border border-slate-700/50 p-8 rounded-3xl backdrop-blur-sm">
            <h2 className="text-2xl font-bold mb-4 text-white">The Vision</h2>
            <p className="text-slate-400 text-lg leading-relaxed mb-6">
              Account Me is a cutting-edge cloud accounting platform specifically designed for the Sri Lankan market. We bridge the gap between complex enterprise software and simple manual tracking, providing a seamless experience for entrepreneurs and small business owners.
            </p>
            
            <div className="grid sm:grid-cols-3 gap-6 mt-12">
              <div className="p-6 bg-slate-900/50 rounded-2xl border border-slate-700/30 hover:border-indigo-500/50 transition-colors">
                <h3 className="text-indigo-400 font-bold mb-2">Simplicity</h3>
                <p className="text-sm text-slate-500">Intuitive interface that requires no professional accounting background.</p>
              </div>
              <div className="p-6 bg-slate-900/50 rounded-2xl border border-slate-700/30 hover:border-indigo-500/50 transition-colors">
                <h3 className="text-indigo-400 font-bold mb-2">Compliance</h3>
                <p className="text-sm text-slate-500">Built with Sri Lankan tax regulations and business standards in mind.</p>
              </div>
              <div className="p-6 bg-slate-900/50 rounded-2xl border border-slate-700/30 hover:border-indigo-500/50 transition-colors">
                <h3 className="text-indigo-400 font-bold mb-2">Real-time</h3>
                <p className="text-sm text-slate-500">Track your cash flow, expenses, and profits in real-time from anywhere.</p>
              </div>
            </div>
          </div>

          <div className="bg-slate-800/40 border border-slate-700/50 p-8 rounded-3xl backdrop-blur-sm text-center">
            <p className="text-slate-300 text-lg mb-8">Ready to transform your business?</p>
            <Link 
              href="/" 
              className="inline-block px-10 py-4 bg-indigo-600 hover:bg-indigo-500 text-white rounded-xl font-bold transition-all shadow-lg hover:shadow-indigo-500/20"
            >
              Get Started Now
            </Link>
          </div>
        </section>
      </div>
    </main>
  );
}
