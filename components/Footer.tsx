const footerLinks = {
  Platform: [
    "Voter Management",
    "Voter Search",
    "Voter Profiling",
    "Reports",
    "Analytics",
    "Team Management",
    "Polling Status",
  ],
  Solutions: [
    "Political Parties",
    "Election Strategists",
    "MLAs & MPs",
    "Local Bodies",
    "Political Organizations",
  ],
  Company: ["About Us", "Careers", "Blog", "Press", "Contact"],
  Legal: [
    "Privacy Policy",
    "Terms of Service",
    "Data Security",
    "Cookie Policy",
  ],
};

export default function Footer() {
  return (
    <footer className="bg-[#071328] px-6 py-16 text-white">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-6">
          {/* Brand & Description */}
          <div className="lg:col-span-2">
            <a href="#home" className="text-xl font-bold">
              Bharat<span className="text-[#ff7b00]">Analytica</span>
            </a>
            <p className="mt-4 text-sm leading-relaxed text-white/60">
              India&apos;s complete political campaign management platform.
              Digitize your voter database, manage booth operations, and win with
              data-driven intelligence.
            </p>
            <div className="mt-6 space-y-2 text-sm text-white/60">
              <p>contact@bharatanalytica.in</p>
              <p>+91 99999 99999</p>
              <p>Hyderabad, Telangana, India</p>
            </div>
          </div>

          {/* Link Columns */}
          {Object.entries(footerLinks).map(([title, links]) => (
            <div key={title}>
              <h3 className="mb-4 text-sm font-semibold">{title}</h3>
              <ul className="space-y-2">
                {links.map((link) => (
                  <li key={link}>
                    <a
                      href="#"
                      className="text-sm text-white/60 transition-colors hover:text-white"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-12 border-t border-white/10 pt-8 text-center text-sm text-white/40">
          © 2026 Bharat Analytica. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
