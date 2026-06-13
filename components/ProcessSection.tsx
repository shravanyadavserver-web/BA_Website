const steps = [
  {
    number: "01",
    title: "Research & Analysis",
    description: "Deep-dive voter research, demographic mapping, issue identification, and competitive analysis of the constituency.",
  },
  {
    number: "02",
    title: "Strategy Development",
    description: "Crafting a data-backed winning strategy — messaging, positioning, timeline, and resource allocation planning.",
  },
  {
    number: "03",
    title: "Campaign Execution",
    description: "Full-scale campaign execution: rallies, door-to-door, digital outreach, advertising, and booth management.",
  },
  {
    number: "04",
    title: "Monitoring & Control",
    description: "Real-time campaign monitoring, sentiment tracking, competitor analysis, and rapid course-correction.",
  },
  {
    number: "05",
    title: "Victory & Beyond",
    description: "Counting day management, dispute resolution, post-election analysis, and long-term stakeholder engagement.",
  },
];

export default function ProcessSection() {
  return (
    <section className="bg-white py-[80px]">
      <div className="mx-auto max-w-[1200px] px-6">
        <div className="text-center">
          <h2 className="text-[24px] font-bold uppercase tracking-wide text-[#0f172a] md:text-[36px]">
            Our Election Management Process
          </h2>
          <p className="mx-auto mt-3 max-w-[500px] text-[14px] text-[#64748b]">
            Powering campaigns with innovative digital solutions
          </p>
        </div>

        <div className="mt-[50px] grid grid-cols-2 gap-[20px] md:grid-cols-3 lg:grid-cols-5">
          {steps.map((step) => (
            <div key={step.number} className="text-center">
              {/* Number circle */}
              <div className="mx-auto mb-5 flex h-[60px] w-[60px] items-center justify-center rounded-full bg-[#ff7b00] text-[20px] font-bold text-white">
                {step.number}
              </div>
              <h3 className="text-[14px] font-bold text-[#0f172a]">
                {step.title}
              </h3>
              <p className="mt-2 text-[12px] leading-relaxed text-[#64748b]">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
