interface BenefitsSectionProps {
  benefits: {
    title: string;
    description: string;
    icon: React.ReactNode;
    stats?: string;
  }[];
}

export default function BenefitsSection({ benefits }: BenefitsSectionProps) {

  return (
    <section className="py-12 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-10">
            <span className="inline-block px-3 py-1 text-xs font-semibold text-blue-600 bg-blue-50 rounded-full mb-3 uppercase tracking-wider">
              Our Advantages
            </span>
            <h2 className="text-3xl font-bold text-gray-900 mb-3">Practice Management Excellence</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Experience the next generation of healthcare administration with our comprehensive practice management solution
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
            {benefits.map((benefit, index) => (
              <div key={index} className="group">
                <div className="h-full bg-white p-5 rounded-lg shadow-sm hover:shadow transition-all duration-200 border border-gray-100 hover:border-blue-100">
                  <div className="w-10 h-10 bg-blue-50 rounded-lg flex items-center justify-center mb-4 text-blue-600 group-hover:bg-blue-100 transition-colors duration-200">
                    {benefit.icon}
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">
                    {benefit.title}
                  </h3>
                  <p className="text-sm text-gray-600 mb-3">
                    {benefit.description}
                  </p>
                  {benefit.stats && (
                    <div className="mt-3 pt-3 border-t border-gray-100">
                      <p className="text-xs font-medium text-blue-600">{benefit.stats}</p>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
