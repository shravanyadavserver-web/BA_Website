const steps = [
  {
    number: "01",
    title: "Research & Analysis",
    description:
      "Deep-dive voter research, demographic mapping, issue identification, and competitive analysis of the constituency.",
  },
  {
    number: "02",
    title: "Strategy Development",
    description:
      "Crafting a data-backed winning strategy — messaging, positioning, timeline, and resource allocation planning.",
  },
  {
    number: "03",
    title: "Campaign Execution",
    description:
      "Full-scale campaign execution: rallies, door-to-door, digital outreach, advertising, and booth management.",
  },
  {
    number: "04",
    title: "Monitoring & Control",
    description:
      "Real-time campaign monitoring, sentiment tracking, competitor analysis, and rapid course-correction.",
  },
  {
    number: "05",
    title: "Victory & Beyond",
    description:
      "Counting day management, dispute resolution, post-election analysis, and long-term stakeholder engagement.",
  },
];

export default function ProcessSection() {
  return (
    <section className="bg-[#edf2fa] px-6 py-20">
      <div className="mx-auto max-w-7xl">
        <div className="text-center">
          <h2 className="text-sm font-semibold uppercase tracking-wider text-[#ff7b00]">
            Our Election Management Process
          </h2>
          <p className="mx-auto mt-3 max-w-2xl text-2xl font-bold text-[#0f172a] md:text-3xl">
            Powering campaigns with innovative digital solutions
          </p>
        </div>

        <div className="mt-12">
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-6 top-0 hidden h-full w-0.5 bg-[#ff7b00]/20 md:left-1/2 md:block" />

            <div className="space-y-8">
              {steps.map((step, index) => (
                <div
                  key={step.number}
                  className={`relative flex flex-col gap-4 md:flex-row md:items-center ${
                    index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                  }`}
                >
                  {/* Content */}
                  <div className="md:w-1/2 md:px-8">
                    <div
                      className={`rounded-xl bg-white p-6 shadow-sm ${
                        index % 2 === 0 ? "md:text-right" : "md:text-left"
                      }`}
                    >
                      <span className="text-3xl font-bold text-[#ff7b00]/20">
                        {step.number}
                      </span>
                      <h3 className="mt-2 text-xl font-bold text-[#0f172a]">
                        {step.title}
                      </h3>
                      <p className="mt-2 text-sm text-[#64748b]">
                        {step.description}
                      </p>
                    </div>
                  </div>

                  {/* Center dot */}
                  <div className="absolute left-6 hidden h-4 w-4 -translate-x-1/2 rounded-full border-4 border-[#ff7b00] bg-white md:left-1/2 md:block" />

                  {/* Spacer for the other side */}
                  <div className="hidden md:block md:w-1/2" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
