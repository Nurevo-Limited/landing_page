const pillars = [
  {
    title: "Clinical Depth",
    description:
      "Our foundation is built on deep clinical and academic experience from leading institutions, including the National Hospital for Neurology and Neurosurgery (UCLH) and Fudan University. This ensures our algorithms are grounded in rigorous dementia research and clinical reality.",
  },
  {
    title: "Technical Rigour",
    description:
      "Our engineering leadership has a proven track record in scaling high-performance streaming platforms, deploying robust AI infrastructure, and navigating successful venture-backed exits. We bring enterprise-level technical discipline to the healthcare sector.",
  },
  {
    title: "Why Us",
    description:
      "We aren't just building a model; we are building a reliable bridge between academic research and daily care. By marrying clinical credibility with technical scalability, we ensure Nurevo is not only innovative but commercially and clinically viable.",
  },
]

export default function AboutUs() {
  return (
    <section id="team" className="bg-slate-50 px-6 py-24 sm:py-32">
      <div className="mx-auto max-w-7xl">
        <div className="max-w-3xl">
          <p className="text-sm font-semibold uppercase tracking-wider text-cyan-600">
            About Us
          </p>
          <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
            Bridging Research and Daily Care
          </h2>
          <p className="mt-6 text-base leading-7 text-slate-600">
            Nurevo is led by a multidisciplinary team of clinicians, data scientists, and
            engineers unified by a mission to democratize early Alzheimer&apos;s detection. Our
            expertise sits at the critical intersection of neurology, high-performance
            computing, and enterprise-grade software.
          </p>
        </div>

        <div className="mt-16 grid gap-8 lg:grid-cols-3">
          {pillars.map((pillar) => (
            <div
              key={pillar.title}
              className="rounded-2xl border border-slate-200 bg-white p-8 shadow-sm"
            >
              <div className="h-1 w-12 rounded-full bg-gradient-to-r from-cyan-600 to-cyan-400" />
              <h3 className="mt-6 text-lg font-semibold text-slate-900">{pillar.title}</h3>
              <p className="mt-3 text-sm leading-7 text-slate-600">{pillar.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
