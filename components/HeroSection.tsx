const stats = [
  { value: "50M+", label: "Voter Profiles" },
  { value: "500K+", label: "Booth Records" },
  { value: "28+", label: "States Covered" },
  { value: "98%", label: "Accuracy Rate" },
];

export default function HeroSection() {
  return (
    <section
      id="home"
      className="relative overflow-hidden bg-gradient-to-br from-[#1e272c] to-[#1f3f4c] px-6 py-24 text-white md:py-32"
    >
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute -right-20 -top-20 h-96 w-96 rounded-full bg-[#ff7b00] blur-3xl" />
        <div className="absolute -bottom-20 -left-20 h-96 w-96 rounded-full bg-teal-400 blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-7xl">
        <div className="max-w-3xl">
          <h1 className="text-4xl font-bold leading-tight md:text-5xl lg:text-[45px]">
            We provide most reliable{" "}
            <span className="text-[#ff7b00]">political consulting</span> &
            election management support...
          </h1>
          <p className="mt-6 text-lg text-white/80 md:text-xl">
            By using most advanced technology and methods
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <a
              href="#contact"
              className="rounded-lg bg-[#ff7b00] px-8 py-3 font-semibold text-white transition-colors hover:bg-[#e66e00]"
            >
              Get Started
            </a>
            <a
              href="#services"
              className="rounded-lg border border-white/30 px-8 py-3 font-semibold text-white transition-colors hover:bg-white/10"
            >
              Our Services
            </a>
          </div>
        </div>

        {/* Stats Bar */}
        <div className="mt-16 grid grid-cols-2 gap-4 rounded-xl bg-[#1f3f4b] p-6 md:grid-cols-4 md:gap-8 md:p-8">
          {stats.map((stat) => (
            <div key={stat.label} className="text-center">
              <p className="text-2xl font-bold text-white md:text-3xl">
                {stat.value}
              </p>
              <p className="mt-1 text-sm text-white/70">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
