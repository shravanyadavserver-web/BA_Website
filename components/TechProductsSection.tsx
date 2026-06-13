import Image from "next/image";

const products = [
  {
    title: "Election Management App",
    description: "Centralized platform for managing your entire election campaign, booths, and workers.",
    image: "/images/laxma-reddy.png",
  },
  {
    title: "Volunteer Management App",
    description: "Coordinate and mobilize thousands of volunteers with real-time tracking and task assignment.",
    image: "/images/laxma-reddy.png",
  },
  {
    title: "Survey Collection App",
    description: "Conduct large-scale voter surveys with intelligent sampling and instant data sync.",
    image: "/images/laxma-reddy.png",
  },
  {
    title: "Campaign Dashboard",
    description: "Real-time analytics dashboard showing campaign performance metrics and voter sentiment.",
    image: "/images/laxma-reddy.png",
  },
  {
    title: "Constituency CRM",
    description: "Comprehensive CRM to manage voter relationships, complaints, and feedback at scale.",
    image: "/images/laxma-reddy.png",
  },
  {
    title: "Digital War Room",
    description: "Command center for real-time monitoring of social media, news, and opposition activity.",
    image: "/images/laxma-reddy.png",
  },
];

export default function TechProductsSection() {
  return (
    <section id="apps" className="bg-[#edf2fa] py-[80px]">
      <div className="mx-auto max-w-[1200px] px-6">
        <div className="text-center">
          <h2 className="text-[24px] font-bold uppercase tracking-wide text-[#0f172a] md:text-[36px]">
            Our Technology Products
          </h2>
          <p className="mx-auto mt-3 max-w-[500px] text-[14px] text-[#64748b]">
            Powering campaigns with innovative digital solutions
          </p>
        </div>

        <div className="mt-[50px] grid gap-[20px] sm:grid-cols-2 lg:grid-cols-3">
          {products.map((product) => (
            <div
              key={product.title}
              className="flex items-center gap-4 rounded-[12px] bg-white p-[20px] border border-gray-100"
            >
              {/* Phone mockup */}
              <div className="flex-shrink-0 w-[100px] h-[200px] rounded-[12px] overflow-hidden border border-gray-200">
                <Image
                  src={product.image}
                  alt={product.title}
                  width={100}
                  height={200}
                  className="h-full w-full object-cover"
                />
              </div>
              {/* Content */}
              <div className="flex-1">
                <h3 className="text-[15px] font-bold text-[#0f172a]">
                  {product.title}
                </h3>
                <p className="mt-2 text-[12px] leading-relaxed text-[#64748b]">
                  {product.description}
                </p>
                <button className="mt-3 rounded-[20px] border border-[#ff7b00] px-4 py-1.5 text-[11px] font-semibold text-[#ff7b00] transition-colors hover:bg-[#ff7b00] hover:text-white">
                  View Details →
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
