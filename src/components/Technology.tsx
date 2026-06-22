const streams = [
  {
    title: "Audio Data",
    description:
      "Analysis of acoustic markers, including tone, pitch, and temporal pauses.",
    icon: (
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M19.114 5.636a9 9 0 010 12.728M16.463 8.288a5.25 5.25 0 010 7.424M6.75 8.25l4.72-4.72a.75.75 0 011.28.53v15.88a.75.75 0 01-1.28.53l-4.72-4.72H4.51c-.88 0-1.704-.507-1.938-1.354A9.01 9.01 0 012.25 12c0-.83.112-1.633.322-2.396C2.806 8.756 3.63 8.25 4.51 8.25H6.75z"
      />
    ),
  },
  {
    title: "Visual Data",
    description:
      "Real-time tracking of facial expressions and micro-movements.",
    icon: (
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z M15 12a3 3 0 11-6 0 3 3 0 016 0z"
      />
    ),
  },
  {
    title: "Language Data",
    description:
      "Transformer-based analysis of semantic coherence, word choice, and speech patterns.",
    icon: (
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M7.5 8.25h9m-9 3H12m-9.75 1.51c0 1.6 1.123 2.994 2.707 3.227 1.129.166 2.27.293 3.423.379.35.026.67.21.865.501L12 21l2.755-4.133a1.14 1.14 0 01.865-.501 48.172 48.172 0 003.423-.379c1.584-.233 2.707-1.626 2.707-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0012 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018z"
      />
    ),
  },
  {
    title: "Clinical / Demographic Data",
    description:
      "Integration of age, gender, medical history, and standardized cognitive benchmarks (MoCA).",
    icon: (
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M9 12h3.75M9 15h3.75M9 18h3.75m3 .75H18a2.25 2.25 0 002.25-2.25V6.108c0-1.135-.845-2.098-1.976-2.192a48.424 48.424 0 00-1.123-.08m-5.801 0c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 00.75-.75 2.25 2.25 0 00-.1-.664m-5.8 0A2.251 2.251 0 0113.5 2.25H15c1.012 0 1.945.416 2.592 1.122A48.424 48.424 0 0118 4.5m-5.8 0h-.005c-.2 0-.4.02-.59.056M15 21H3.75A2.25 2.25 0 011.5 18.75v-7.5A2.25 2.25 0 013.75 9h7.5A2.25 2.25 0 0113.5 11.25v7.5A2.25 2.25 0 0111.25 21h3.75z"
      />
    ),
  },
]

const defensibility = [
  "Provisional patents protecting core architecture",
  "Proprietary annotated multimodal datasets",
  "Specialized training pipelines for cross-lingual adaptation",
]

export default function Technology() {
  return (
    <section id="technology" className="bg-[#0a1628] px-6 py-24 text-white sm:py-32">
      <div className="mx-auto max-w-7xl">
        <div className="max-w-3xl">
          <p className="text-sm font-semibold uppercase tracking-wider text-cyan-400">
            The Nurevo Solution
          </p>
          <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">
            Cross-Modal Intelligence
          </h2>
          <p className="mt-4 text-lg leading-8 text-white/75">
            Nurevo transforms the diagnostic process from a clinical ordeal into a
            10-minute, natural, and low-stress conversation. Our platform leverages a
            proprietary Cross-Modal Transformer architecture to fuse four critical data
            streams.
          </p>
        </div>

        <div className="mt-16 grid gap-6 sm:grid-cols-2">
          {streams.map((stream) => (
            <div
              key={stream.title}
              className="rounded-2xl border border-white/10 bg-white/5 p-8 transition-colors hover:border-cyan-400/30 hover:bg-white/[0.07]"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-cyan-400/10 text-cyan-400">
                <svg
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                >
                  {stream.icon}
                </svg>
              </div>
              <h3 className="mt-6 text-lg font-semibold">{stream.title}</h3>
              <p className="mt-2 text-sm leading-6 text-white/70">{stream.description}</p>
            </div>
          ))}
        </div>

        <div className="mt-16 grid gap-12 lg:grid-cols-2">
          <div className="rounded-2xl border border-cyan-400/20 bg-cyan-400/5 p-8">
            <h3 className="text-xl font-semibold text-cyan-300">Our Differentiator</h3>
            <p className="mt-4 text-base leading-7 text-white/75">
              Unlike Western-centric models, Nurevo is built from the ground up for
              Cantonese and Mandarin-speaking populations. Our models are trained to
              account for dialect-switching and cultural linguistic markers, ensuring
              higher diagnostic accuracy.
            </p>
            <p className="mt-4 text-base leading-7 text-white/75">
              Our &lsquo;Attention Rollout Engine&rsquo; further provides the explainability
              required for SaMD (Software as a Medical Device) regulatory compliance.
            </p>
          </div>

          <div className="rounded-2xl border border-white/10 bg-white/5 p-8">
            <h3 className="text-xl font-semibold">Defensibility</h3>
            <p className="mt-4 text-base leading-7 text-white/75">
              Nurevo&apos;s moat is built on deep technical and data advantages that are
              difficult to replicate:
            </p>
            <ul className="mt-6 space-y-4">
              {defensibility.map((item) => (
                <li key={item} className="flex gap-3 text-sm leading-6 text-white/80">
                  <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-cyan-400" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}
