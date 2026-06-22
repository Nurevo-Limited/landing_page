const stats = [
  { value: "55M+", label: "Global AD cases today" },
  { value: "139M", label: "Projected cases by 2050" },
  { value: "60%", label: "Cases never formally diagnosed" },
]

const frictionPoints = [
  {
    title: "Invasive",
    description: "Lumbar punctures and CSF collection create patient anxiety and clinical risk.",
  },
  {
    title: "Costly",
    description: "Neuroimaging and specialist-led assessments strain healthcare budgets at scale.",
  },
  {
    title: "Inaccessible",
    description: "Time-consuming manual evaluations limit reach, especially in underserved communities.",
  },
]

export default function Problem() {
  return (
    <section id="problem" className="bg-slate-50 px-6 py-24 sm:py-32">
      <div className="mx-auto max-w-7xl">
        <div className="max-w-3xl">
          <p className="text-sm font-semibold uppercase tracking-wider text-cyan-600">
            The Problem
          </p>
          <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
            The Silent Crisis
          </h2>
          <p className="mt-4 text-lg font-medium text-slate-700">
            The Diagnostic Bottleneck
          </p>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-3">
          {stats.map((stat) => (
            <div
              key={stat.label}
              className="rounded-2xl border border-slate-200 bg-white p-8 text-center shadow-sm"
            >
              <p className="text-4xl font-bold text-cyan-600 sm:text-5xl">{stat.value}</p>
              <p className="mt-2 text-sm leading-6 text-slate-600">{stat.label}</p>
            </div>
          ))}
        </div>

        <div className="mt-16 grid gap-12 lg:grid-cols-2">
          <div>
            <h3 className="text-xl font-semibold text-slate-900">The Gap</h3>
            <p className="mt-4 text-base leading-7 text-slate-600">
              Alzheimer&apos;s Disease (AD) affects 55 million individuals globally, with
              projections reaching 139 million by 2050. Despite the availability of
              breakthrough disease-modifying therapies like Lecanemab and Donanemab, the
              diagnostic pathway remains broken. Up to 60% of cases are never formally
              diagnosed due to the high barrier of current methods.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-semibold text-slate-900">The Friction</h3>
            <p className="mt-4 text-base leading-7 text-slate-600">
              Current diagnostic methods are failing patients at the point of need —
              invasive lumbar punctures, expensive neuroimaging, and time-consuming
              manual assessments create a system that is costly, inaccessible, and
              unsustainable at global scale.
            </p>
            <ul className="mt-6 space-y-4">
              {frictionPoints.map((point) => (
                <li
                  key={point.title}
                  className="rounded-xl border border-slate-200 bg-white p-5"
                >
                  <p className="font-semibold text-slate-900">{point.title}</p>
                  <p className="mt-1 text-sm leading-6 text-slate-600">{point.description}</p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}
