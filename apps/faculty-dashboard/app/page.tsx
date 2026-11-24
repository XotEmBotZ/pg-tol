export default function HomePage() {
  return (
    <main className="min-h-screen p-8 max-w-6xl mx-auto space-y-6">
      <header className="border-b border-neutral-800 pb-4 flex justify-between items-center">
        <div>
          <h1 className="text-xl font-bold tracking-widest uppercase text-white">
            PG-TOL // Faculty Console
          </h1>
          <p className="text-xs text-neutral-400 mt-1">
            PostgreSQL Training, Oversight & Learning Platform
          </p>
        </div>
        <div className="text-xs bg-emerald-950 text-emerald-400 border border-emerald-800 px-3 py-1 font-bold">
          SYSTEM READY
        </div>
      </header>

      <section className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-4">
        <div className="border border-neutral-800 bg-neutral-900/60 p-4">
          <h2 className="text-xs font-bold text-neutral-300 uppercase tracking-wider mb-1">
            1. Live Proctoring
          </h2>
          <p className="text-[11px] text-neutral-500">
            Real-time pg_stat_activity session monitoring and query termination.
          </p>
        </div>

        <div className="border border-neutral-800 bg-neutral-900/60 p-4">
          <h2 className="text-xs font-bold text-neutral-300 uppercase tracking-wider mb-1">
            2. Audit Logs (pgaudit)
          </h2>
          <p className="text-[11px] text-neutral-500">
            SQL-queryable student command history via native file_fdw mapping.
          </p>
        </div>

        <div className="border border-neutral-800 bg-neutral-900/60 p-4">
          <h2 className="text-xs font-bold text-neutral-300 uppercase tracking-wider mb-1">
            3. Automated Evaluation
          </h2>
          <p className="text-[11px] text-neutral-500">
            Single-pass schema inspection and benchmark grading engine.
          </p>
        </div>
      </section>
    </main>
  );
}
