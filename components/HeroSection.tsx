import Image from "next/image";

const stats = [
  { value: "10+ Years", label: "EXPERIENCE" },
  { value: "200+", label: "HAPPY CLIENTS" },
  { value: "1 Crore+", label: "VOTER CONNECTS" },
  { value: "5+ States", label: "COVERED" },
];

export default function HeroSection() {
  return (
    <section
      id="home"
      className="relative overflow-hidden bg-gradient-to-br from-[#1e272c] to-[#1f3f4c]"
    >
      <div className="mx-auto flex max-w-[1440px] flex-col items-center px-6 py-[50px] md:flex-row md:px-[120px] md:py-[90px]">
        {/* Left Content */}
        <div className="relative z-10 max-w-[620px]">
          <h1 className="text-[28px] font-medium uppercase leading-[36px] text-white md:text-[45px] md:leading-[56px]">
            We provide<br />
            most reliable <span className="font-bold">political</span><br />
            <span className="font-bold">consulting</span> &{" "}
            <span className="font-bold text-[#ff7b00]">election</span><br />
            <span className="font-bold text-[#ff7b00]">management</span>{" "}
            <span className="text-[#ff7b00]">support...</span>
          </h1>

          {/* Divider line */}
          <div className="mt-6 h-px w-full bg-white/20" />

          <p className="mt-4 text-[16px] font-light italic text-white/80 md:text-[25px]">
            BY USING MOST ADVANCED TECHNOLOGY AND METHODS
          </p>

          {/* Stats Bar */}
          <div className="mt-6 flex w-full max-w-[584px] items-center rounded-[16px] bg-[#1f3f4b] overflow-hidden md:mt-10">
            {stats.map((stat, i) => (
              <div key={stat.label} className={`flex-1 py-[12px] text-center md:py-[18px] ${i < stats.length - 1 ? 'border-r border-white/10' : ''}`}>
                <p className="text-[14px] font-bold text-white md:text-[24px]">{stat.value}</p>
                <p className="text-[12px] text-white/60">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Hero Illustration - below content on mobile, absolute right on desktop */}
        <div className="mt-8 flex justify-center md:mt-0 md:absolute md:right-[60px] md:top-1/2 md:-translate-y-1/2">
          <Image
            src="/images/hero-illustration.svg"
            alt="India Map Analytics"
            width={450}
            height={450}
            className="h-[200px] w-auto md:h-[450px]"
            priority
          />
        </div>
      </div>
    </section>
  );
}
