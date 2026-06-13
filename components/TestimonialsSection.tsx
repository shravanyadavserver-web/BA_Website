export default function TestimonialsSection() {
  return (
    <section id="clients" className="bg-white px-6 py-20">
      <div className="mx-auto max-w-7xl">
        <div className="text-center">
          <h2 className="text-sm font-semibold uppercase tracking-wider text-[#ff7b00]">
            What Our Clients Say
          </h2>
          <p className="mx-auto mt-3 max-w-2xl text-2xl font-bold text-[#0f172a] md:text-3xl">
            Trusted by political leaders across India
          </p>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {[1, 2, 3].map((i) => (
            <div
              key={i}
              className="rounded-xl border border-gray-100 p-6 shadow-sm"
            >
              <div className="mb-4 flex text-[#ff7b00]">
                {[...Array(5)].map((_, j) => (
                  <svg
                    key={j}
                    className="h-5 w-5"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <p className="text-sm text-[#64748b]">
                {i === 1 &&
                  "Bharat Analytica's data-driven approach gave us insights that were game-changing. Their ground network and technology platform is unmatched."}
                {i === 2 &&
                  "From strategy to execution, their team was with us at every step. The election management app made coordination seamless across 500+ booths."}
                {i === 3 &&
                  "Their survey analytics predicted results with remarkable accuracy. A truly professional team that understands Indian politics deeply."}
              </p>
              <div className="mt-4 flex items-center gap-3">
                <div className="h-10 w-10 rounded-full bg-[#1f3f4b]/10" />
                <div>
                  <p className="text-sm font-semibold text-[#0f172a]">
                    {i === 1 && "Political Leader"}
                    {i === 2 && "Campaign Manager"}
                    {i === 3 && "Party Strategist"}
                  </p>
                  <p className="text-xs text-[#64748b]">
                    {i === 1 && "Telangana"}
                    {i === 2 && "Andhra Pradesh"}
                    {i === 3 && "Karnataka"}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
