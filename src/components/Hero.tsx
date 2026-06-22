export default function Hero() {
  return (
    <section className="relative min-h-screen">
      <img
        src="/hero_section.png"
        alt=""
        aria-hidden="true"
        className="absolute inset-0 h-full w-full object-cover object-center"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-[#0a1628]/90 via-[#0a1628]/60 to-transparent" />

      <div className="relative mx-auto flex min-h-screen max-w-7xl items-center px-6 pt-24 pb-16">
        <div className="max-w-2xl">
          <h1 className="text-4xl font-bold leading-tight tracking-tight text-white sm:text-5xl lg:text-6xl">
            AI-Powered, Multimodal Early Detection for Alzheimer&apos;s
            Disease.
          </h1>
          <p className="mt-6 text-lg leading-relaxed text-white/80 sm:text-xl">
            Bridging the gap between clinical research and daily care with
            cultural and linguistic intelligence.
          </p>
          <a
            href="#contact"
            className="mt-10 inline-block rounded-md border border-cyan-400/60 bg-cyan-400/10 px-6 py-3 text-sm font-semibold text-cyan-300 transition-colors hover:border-cyan-400 hover:bg-cyan-400/20"
          >
            Contact us
          </a>
        </div>
      </div>
    </section>
  )
}
