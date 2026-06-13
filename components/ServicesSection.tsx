import Image from "next/image";

const services = [
  {
    title: "Election Management",
    description: "End-to-end election management with booth level planning to results.",
    icon: "/images/icon-election-management.svg",
    iconBg: "rgba(255, 123, 0, 0.07)",
  },
  {
    title: "Political Consulting",
    description: "Strategy, analysis & intelligence for winning election outcomes.",
    icon: "/images/icon-political-consulting.svg",
    iconBg: "rgba(59, 130, 246, 0.07)",
  },
  {
    title: "Surveys & Analytics",
    description: "Opinion polls, voter insights & data analytics for accurate decision making.",
    icon: "/images/icon-surveys-analytics.svg",
    iconBg: "rgba(16, 185, 129, 0.07)",
  },
  {
    title: "Advertising & PR",
    description: "Creative campaigns & public relations to build strong image & connect.",
    icon: "/images/icon-advertising-pr.svg",
    iconBg: "rgba(139, 92, 246, 0.07)",
  },
  {
    title: "Digital Marketing",
    description: "Social media, content & digital campaigns that drive engagement.",
    icon: "/images/icon-digital-marketing.svg",
    iconBg: "rgba(236, 72, 153, 0.07)",
  },
  {
    title: "Technology Solutions",
    description: "Powerful apps & platforms for campaign & data management.",
    icon: "/images/icon-technology-solutions.svg",
    iconBg: "rgba(102, 0, 0, 0.07)",
  },
  {
    title: "Road Shows & Events",
    description: "Planning & execution of public meetings, road shows & large-scale events.",
    icon: "/images/icon-road-shows.svg",
    iconBg: "rgba(6, 182, 212, 0.07)",
  },
  {
    title: "Manpower Assistance",
    description: "Trained manpower & field teams for effective campaign execution.",
    icon: "/images/icon-manpower-assistance.svg",
    iconBg: "rgba(34, 197, 94, 0.07)",
  },
];

export default function ServicesSection() {
  return (
    <section id="services" className="bg-[#edf2fa] py-[80px]">
      <div className="mx-auto max-w-[1200px] px-6">
        <div className="text-center">
          <h2 className="text-[24px] font-bold uppercase tracking-wide text-[#0f172a] md:text-[36px]">
            Our Services
          </h2>
          <p className="mx-auto mt-3 max-w-[500px] text-[14px] text-[#64748b]">
            Comprehensive solutions for every stage of your political journey
          </p>
        </div>

        <div className="mt-[50px] grid gap-[20px] sm:grid-cols-2 lg:grid-cols-4">
          {services.map((service) => (
            <div
              key={service.title}
              className="rounded-[16px] border border-gray-100 bg-white p-[24px] transition-shadow hover:shadow-md"
            >
              <div className="mb-4 flex h-[50px] w-[50px] items-center justify-center rounded-[12px]" style={{ backgroundColor: service.iconBg }}>
                <Image src={service.icon} alt="" width={28} height={28} />
              </div>
              <h3 className="text-[16px] font-semibold text-[#0f172a]">
                {service.title}
              </h3>
              <p className="mt-2 text-[14px] leading-relaxed text-[#64748b]">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
