const products = [
  {
    title: "Election Management App",
    description:
      "Centralized platform for managing your entire election campaign, booths, and workers.",
  },
  {
    title: "Volunteer Management App",
    description:
      "Coordinate and mobilize thousands of volunteers with real-time tracking and task assignment.",
  },
  {
    title: "Survey Collection App",
    description:
      "Conduct large-scale voter surveys with intelligent sampling and instant data sync.",
  },
  {
    title: "Campaign Dashboard",
    description:
      "Real-time analytics dashboard showing campaign performance metrics and voter sentiment.",
  },
  {
    title: "Constituency CRM",
    description:
      "Comprehensive CRM to manage voter relationships, complaints, and feedback at scale.",
  },
  {
    title: "Digital War Room",
    description:
      "Command center for real-time monitoring of social media, news, and opposition activity.",
  },
];

export default function TechProductsSection() {
  return (
    <section id="apps" className="bg-white px-6 py-20">
      <div className="mx-auto max-w-7xl">
        <div className="text-center">
          <h2 className="text-sm font-semibold uppercase tracking-wider text-[#ff7b00]">
            Our Technology Products
          </h2>
          <p className="mx-auto mt-3 max-w-2xl text-2xl font-bold text-[#0f172a] md:text-3xl">
            Powering campaigns with innovative digital solutions
          </p>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {products.map((product) => (
            <div
              key={product.title}
              className="group rounded-xl border border-gray-100 bg-gradient-to-br from-white to-gray-50 p-6 transition-all hover:border-[#1f3f4b]/20 hover:shadow-lg"
            >
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-[#1f3f4b]/10">
                <svg
                  className="h-6 w-6 text-[#1f3f4b]"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  />
                </svg>
              </div>
              <h3 className="text-lg font-bold text-[#0f172a]">
                {product.title}
              </h3>
              <p className="mt-2 text-sm text-[#64748b]">
                {product.description}
              </p>
              <button className="mt-4 text-sm font-semibold text-[#ff7b00] transition-colors hover:text-[#e66e00]">
                View Details →
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
