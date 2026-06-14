import Image from "next/image";

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
    <footer className="bg-[#071328] px-6 py-[60px] text-white">
      <div className="mx-auto max-w-[1200px]">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-6">
          {/* Brand & Description */}
          <div className="lg:col-span-2">
            <Image src="/images/logo.svg" alt="Bharat Analytica" width={120} height={40} className="brightness-0 invert" />
            <p className="mt-4 text-[12px] leading-relaxed text-white/60">
              India&apos;s complete political campaign management platform.
              Digitize your voter database, manage booth operations, and win with
              data-driven intelligence.
            </p>
            <div className="mt-6 space-y-3">
              <div className="flex items-center gap-2">
                <Image src="/images/icon-email.svg" alt="" width={14} height={14} className="opacity-60 brightness-0 invert" />
                <span className="text-[12px] text-white/60">support@bharatanalytica.com</span>
              </div>
              <div className="flex items-center gap-2">
                <Image src="/images/icon-phone.svg" alt="" width={14} height={14} className="opacity-60 brightness-0 invert" />
                <span className="text-[12px] text-white/60">+91 888 555 1660</span>
              </div>
              <div className="flex items-center gap-2">
                <Image src="/images/icon-location.svg" alt="" width={14} height={14} className="opacity-60 brightness-0 invert" />
                <span className="text-[12px] text-white/60">Hyderabad, Telangana, India</span>
              </div>
            </div>

            {/* Social icons */}
            <div className="mt-6 flex items-center gap-3">
              <a href="#" className="flex h-[30px] w-[30px] items-center justify-center rounded-full bg-white/10 hover:bg-white/20">
                <Image src="/images/icon-social-1.svg" alt="" width={14} height={14} className="brightness-0 invert" />
              </a>
              <a href="#" className="flex h-[30px] w-[30px] items-center justify-center rounded-full bg-white/10 hover:bg-white/20">
                <Image src="/images/icon-social-2.svg" alt="" width={14} height={14} className="brightness-0 invert" />
              </a>
              <a href="#" className="flex h-[30px] w-[30px] items-center justify-center rounded-full bg-white/10 hover:bg-white/20">
                <Image src="/images/icon-social-3.svg" alt="" width={14} height={14} className="brightness-0 invert" />
              </a>
              <a href="#" className="flex h-[30px] w-[30px] items-center justify-center rounded-full bg-white/10 hover:bg-white/20">
                <Image src="/images/icon-social-4.svg" alt="" width={14} height={14} className="brightness-0 invert" />
              </a>
            </div>
          </div>

          {/* Link Columns */}
          {/* {Object.entries(footerLinks).map(([title, links]) => (
            <div key={title}>
              <h3 className="mb-4 text-[13px] font-semibold">{title}</h3>
              <ul className="space-y-2">
                {links.map((link) => (
                  <li key={link}>
                    <a
                      href="#"
                      className="text-[12px] text-white/60 transition-colors hover:text-white"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))} */}
        </div>

        <div className="mt-12 border-t border-white/10 pt-6 text-center text-[12px] text-white/40">
          © 2026 Bharat Analytica. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
