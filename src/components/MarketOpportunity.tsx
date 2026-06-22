const marketTiers = [
  {
    label: "TAM",
    title: "Total Addressable Market",
    value: "$6.5B",
    scope: "Global digital biomarker market",
    width: "w-full",
  },
  {
    label: "SAM",
    title: "Serviceable Addressable Market",
    value: "$2B",
    scope: "Greater China",
    width: "w-1/3",
  },
  {
    label: "SOM",
    title: "Serviceable Obtainable Market",
    value: "$3.2M",
    scope: "Greater Bay Area by 2030",
    width: "w-1/6",
  },
];

export default function MarketOpportunity() {
  return (
    <section id="market" className="bg-white px-6 py-24 sm:py-32">
      <div className="mx-auto max-w-7xl">
        <div className="max-w-3xl">
          <p className="text-sm font-semibold uppercase tracking-wider text-cyan-600">
            Market Opportunity
          </p>
          <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
            The &ldquo;Why Now&rdquo;
          </h2>
          <p className="mt-6 text-base leading-7 text-slate-600">
            The digital biomarker market is scaling rapidly. Nurevo is
            positioned to capture value within a $6.5B global Total Addressable
            Market (TAM), with a $2B Serviceable Addressable Market (SAM) in
            Greater China. We are focusing our initial entry on a $3.2M
            Serviceable Obtainable Market (SOM) in the Greater Bay Area by 2030,
            where the need for scalable eldercare technology is acute.
          </p>
        </div>

        <div className="mt-16">
          <h3 className="text-lg font-semibold text-slate-900">
            TAM / SAM / SOM
          </h3>
          <div className="mt-8 space-y-4">
            {marketTiers.map((tier, index) => (
              <div
                key={tier.label}
                className="flex flex-col gap-2 sm:flex-row sm:items-center"
              >
                <div className="flex w-28 shrink-0 items-baseline gap-2">
                  <span className="text-sm font-bold text-cyan-600">
                    {tier.label}
                  </span>
                </div>
                <div className="flex-1">
                  <div
                    className={`${tier.width} rounded-xl bg-gradient-to-r from-cyan-600 to-cyan-400 px-6 py-5 shadow-sm transition-all`}
                    style={{ opacity: 1 - index * 0.15 }}
                  >
                    <div className="flex flex-col gap-1 sm:flex-row sm:items-center sm:justify-between">
                      <div>
                        <p className="text-sm font-medium text-white/90">
                          {tier.title}
                        </p>
                        <p className="text-xs text-white/75">{tier.scope}</p>
                      </div>
                      <p className="text-2xl font-bold text-white sm:text-3xl">
                        {tier.value}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-16 rounded-2xl border border-slate-200 bg-slate-50 p-8 sm:p-10">
          <h3 className="text-xl font-semibold text-slate-900">Timing</h3>
          <p className="mt-4 text-base leading-7 text-slate-600">
            The emergence of disease-modifying therapies — including Lecanemab
            and Donanemab — has fundamentally shifted the Alzheimer&apos;s
            treatment landscape. These breakthroughs create an acute,
            time-sensitive need for scalable early-detection infrastructure:
            without a reliable diagnostic funnel, patients cannot access the
            therapies that depend on early intervention.
          </p>
          <p className="mt-4 text-base leading-7 text-slate-600">
            Nurevo is built for this inflection point — converting the
            diagnostic bottleneck into a low-friction pathway that unlocks both
            clinical outcomes and market capture at scale.
          </p>
        </div>
      </div>
    </section>
  );
}
