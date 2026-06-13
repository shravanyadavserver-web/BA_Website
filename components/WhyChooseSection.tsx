import Image from "next/image";

const reasons = [
  {
    title: "Data Driven Decisions",
    description: "Actionable insights for winning strategies.",
    icon: "/images/icon-data-driven.svg",
  },
  {
    title: "Technology First Approach",
    description: "Advanced tools for efficient execution.",
    icon: "/images/icon-tech-first.svg",
  },
  {
    title: "Experienced Strategists",
    description: "Political consultants & analysts with proven expertise.",
    icon: "/images/icon-experienced.svg",
  },
  {
    title: "Strong Ground Network",
    description: "Pan-India network with deep grassroots reach.",
    icon: "/images/icon-ground-network.svg",
  },
  {
    title: "End-to-End Support",
    description: "From strategy and planning to victory management.",
    icon: "/images/icon-end-to-end.svg",
  },
  {
    title: "Confidential & Reliable",
    description: "Trusted by leaders, organizations and institutions.",
    icon: "/images/icon-confidential.svg",
  },
];

export default function WhyChooseSection() {
  return (
    <section id="about" className="bg-white py-[80px]">
      <div className="mx-auto max-w-[1200px] px-6">
        <div className="text-center">
          <h2 className="text-[24px] font-bold uppercase tracking-wide text-[#0f172a] md:text-[36px]">
            Why Choose Bharat Analytica?
          </h2>
          <p className="mx-auto mt-3 max-w-[500px] text-[14px] text-[#64748b]">
            Comprehensive solutions for every stage of your political journey
          </p>
        </div>

        <div className="mt-[50px] grid grid-cols-2 gap-[16px] md:grid-cols-3 lg:grid-cols-6">
          {reasons.map((reason) => (
            <div
              key={reason.title}
              className="flex flex-col items-center text-center rounded-[16px] border border-gray-100 p-[20px]"
            >
              <div className="mb-4 flex h-[55px] w-[55px] items-center justify-center rounded-[14px]" style={{ backgroundColor: 'rgba(255, 123, 0, 0.07)' }}>
                <Image src={reason.icon} alt="" width={28} height={28} />
              </div>
              <h3 className="text-[16px] font-semibold text-[#0f172a]">
                {reason.title}
              </h3>
              <p className="mt-2 text-[14px] leading-relaxed text-[#64748b]">
                {reason.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
