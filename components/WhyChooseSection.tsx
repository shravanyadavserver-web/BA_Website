const reasons = [
  {
    title: "Data Driven Decisions",
    description: "Actionable insights for winning strategies.",
    icon: "📊",
  },
  {
    title: "Technology First Approach",
    description: "Advanced tools for efficient execution.",
    icon: "🚀",
  },
  {
    title: "Experienced Strategists",
    description:
      "Political consultants & analysts with proven expertise.",
    icon: "🎯",
  },
  {
    title: "Strong Ground Network",
    description: "Pan-India network with deep grassroots reach.",
    icon: "🌐",
  },
  {
    title: "End-to-End Support",
    description: "From strategy and planning to victory management.",
    icon: "🔄",
  },
  {
    title: "Confidential & Reliable",
    description: "Trusted by leaders, organizations and institutions.",
    icon: "🔒",
  },
];

export default function WhyChooseSection() {
  return (
    <section id="about" className="bg-[#edf2fa] px-6 py-20">
      <div className="mx-auto max-w-7xl">
        <div className="text-center">
          <h2 className="text-sm font-semibold uppercase tracking-wider text-[#ff7b00]">
            Why Choose Bharat Analytica?
          </h2>
          <p className="mx-auto mt-3 max-w-2xl text-2xl font-bold text-[#0f172a] md:text-3xl">
            Comprehensive solutions for every stage of your political journey
          </p>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {reasons.map((reason) => (
            <div
              key={reason.title}
              className="rounded-xl bg-white p-6 shadow-sm transition-shadow hover:shadow-md"
            >
              <div className="mb-3 text-2xl">{reason.icon}</div>
              <h3 className="text-lg font-bold text-[#0f172a]">
                {reason.title}
              </h3>
              <p className="mt-2 text-sm text-[#64748b]">
                {reason.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
