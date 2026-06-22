const footerNav = [
  { href: "#problem", label: "The Problem" },
  { href: "#technology", label: "Technology" },
  { href: "#market", label: "Market Opportunity" },
  { href: "#team", label: "About Us" },
];

const corporateEmail = "hello@nurevo.tech";

export default function Footer() {
  return (
    <footer
      id="contact"
      className="border-t border-white/10 bg-[#0a1628] px-6 py-16 text-white"
    >
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-12 lg:grid-cols-2">
          <div>
            <img
              src="/logo_text_transparent.png"
              alt="Nurevo"
              className="h-10 w-auto brightness-0 invert"
            />
            <p className="mt-4 text-lg font-semibold text-white">
              Nurevo Limited
            </p>
            <p className="mt-2 max-w-md text-sm leading-6 text-white/60">
              AI-powered, multimodal early detection for Alzheimer&apos;s
              disease.
            </p>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-cyan-400">
              Contact / Inquiries
            </h3>
            <p className="mt-4 text-sm text-white/70">
              For investor relations, partnerships, and general inquiries:
            </p>
            <a
              href={`mailto:${corporateEmail}`}
              className="mt-3 inline-block text-base font-medium text-cyan-300 transition-colors hover:text-cyan-200"
            >
              {corporateEmail}
            </a>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-start justify-between gap-6 border-t border-white/10 pt-8 sm:flex-row sm:items-center">
          <p className="text-sm text-white/50">
            &copy; {new Date().getFullYear()} Nurevo Limited. All rights
            reserved.
          </p>
          <nav className="flex flex-wrap gap-6">
            {footerNav.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm text-white/60 transition-colors hover:text-cyan-400"
              >
                {link.label}
              </a>
            ))}
          </nav>
        </div>
      </div>
    </footer>
  );
}
