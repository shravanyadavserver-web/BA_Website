const services = [
  {
    title: "Election Management",
    description:
      "End-to-end election management with booth level planning to results.",
    icon: "🗳️",
  },
  {
    title: "Political Consulting",
    description:
      "Strategy, analysis & intelligence for winning election outcomes.",
    icon: "📊",
  },
  {
    title: "Surveys & Analytics",
    description:
      "Opinion polls, voter insights & data analytics for accurate decision making.",
    icon: "📈",
  },
  {
    title: "Advertising & PR",
    description:
      "Creative campaigns & public relations to build strong image & connect.",
    icon: "📣",
  },
  {
    title: "Digital Marketing",
    description:
      "Social media, content & digital campaigns that drive engagement.",
    icon: "💻",
  },
  {
    title: "Technology Solutions",
    description:
      "Powerful apps & platforms for campaign & data management.",
    icon: "⚙️",
  },
  {
    title: "Road Shows & Events",
    description:
      "Planning & execution of public meetings, road shows & large-scale events.",
    icon: "🎪",
  },
  {
    title: "Manpower Assistance",
    description:
      "Trained manpower & field teams for effective campaign execution.",
    icon: "👥",
  },
];

export default function ServicesSection() {
  return (
    <section id="services" className="bg-white px-6 py-20">
      <div className="mx-auto max-w-7xl">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-[#0f172a] md:text-4xl">
            Our Services
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-[#64748b]">
            Comprehensive solutions for every stage of your political journey
          </p>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((service) => (
            <div
              key={service.title}
              className="group rounded-xl border border-gray-100 p-6 transition-all hover:border-[#ff7b00]/20 hover:shadow-lg"
            >
              <div className="mb-4 text-3xl">{service.icon}</div>
              <h3 className="text-lg font-bold text-[#0f172a]">
                {service.title}
              </h3>
              <p className="mt-2 text-sm text-[#64748b]">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
