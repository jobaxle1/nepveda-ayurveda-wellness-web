const WhyNepveda = () => {
  const journeySteps = [
    {
      number: "1",
      title: "Thorough Consultation",
      description: "A thorough consultation to identify any doshic imbalances."
    },
    {
      number: "2", 
      title: "Personalized Plan",
      description: "An in-depth Ayurvedic plan tailored to your lifestyle and dietary needs."
    },
    {
      number: "3",
      title: "Expert Guidance", 
      description: "If necessary, consultation with an Ayurvedic doctor (vaidya) for specific illnesses."
    },
    {
      number: "4",
      title: "Holistic Therapies",
      description: "Prescribed therapies, yoga asanas, breathwork practices, and herbs."
    },
    {
      number: "5",
      title: "Complete Care",
      description: "Personalized care and attention from start to finish."
    }
  ];

  return (
    <section className="py-20 relative overflow-hidden min-h-screen flex flex-col">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: 'url(/lovable-uploads/5aa87501-f005-4d34-a9a6-40875faf04e8.png)' }}
      >
        {/* Dark overlay to ensure text readability */}
        <div className="absolute inset-0 bg-black/20"></div>
      </div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 flex-1 flex flex-col">
        <div className="max-w-7xl mx-auto flex-1 flex flex-col">
          {/* Header */}
          <div className="text-center mb-16 animate-fade-in pt-8">
            <h2 className="text-4xl md:text-6xl font-bold text-white mb-6 tracking-wide drop-shadow-lg">
              What to Expect
            </h2>
            <div className="w-32 h-1 bg-gradient-to-r from-transparent via-white to-transparent mx-auto"></div>
          </div>
          
          {/* Journey Path - positioned at bottom */}
          <div className="relative flex-1 flex flex-col justify-end pb-20">
            {/* Flowing Path Line */}
            <svg className="absolute inset-0 w-full h-full" viewBox="0 0 1200 800" fill="none">
              <path 
                d="M 100 150 Q 300 100 500 200 T 900 300 Q 1000 350 1100 400"
                stroke="url(#pathGradient)"
                strokeWidth="3"
                fill="none"
                strokeDasharray="10,5"
                className="animate-pulse"
              />
              <defs>
                <linearGradient id="pathGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="rgba(255,255,255,0.3)" />
                  <stop offset="50%" stopColor="rgba(255,255,255,0.8)" />
                  <stop offset="100%" stopColor="rgba(255,255,255,0.3)" />
                </linearGradient>
              </defs>
            </svg>

            {/* Journey Steps */}
            <div className="relative grid grid-cols-1 md:grid-cols-5 gap-8 md:gap-4">
              {journeySteps.map((step, index) => (
                <div 
                  key={index} 
                  className={`group relative animate-fade-in`}
                  style={{ animationDelay: `${index * 200}ms` }}
                >
                  {/* Step Card */}
                  <div className="relative bg-white backdrop-blur-md border border-nepveda-green/30 rounded-2xl p-6 hover:scale-110 transition-all duration-500 shadow-2xl hover:shadow-nepveda-green/30">
                    {/* Glowing border effect */}
                    <div className="absolute -inset-0.5 bg-gradient-to-r from-nepveda-secondary/40 via-nepveda-green/50 to-nepveda-secondary/40 rounded-2xl blur opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                    
                    {/* Step Number Circle */}
                    <div className="relative flex justify-center mb-4">
                      <div className="w-16 h-16 bg-gradient-to-br from-nepveda-secondary to-yellow-300 rounded-full flex items-center justify-center shadow-xl group-hover:shadow-nepveda-secondary/50 transition-shadow duration-500">
                        <span className="text-2xl font-bold text-nepveda-green-dark">{step.number}</span>
                      </div>
                      
                      {/* Floating particles around number */}
                      <div className="absolute -top-2 -right-2 w-3 h-3 bg-nepveda-secondary/80 rounded-full animate-bounce delay-300"></div>
                      <div className="absolute -bottom-1 -left-1 w-2 h-2 bg-yellow-300/60 rounded-full animate-bounce delay-700"></div>
                    </div>

                    {/* Step Content */}
                    <div className="text-center relative">
                      <h3 className="text-lg md:text-xl font-bold text-nepveda-green-dark mb-3 group-hover:text-nepveda-green transition-colors">
                        {step.title}
                      </h3>
                      <p className="text-sm md:text-base text-nepveda-green-dark/80 leading-relaxed font-medium">
                        {step.description}
                      </p>
                    </div>

                    {/* Connecting Arrow (hidden on mobile) */}
                    {index < journeySteps.length - 1 && (
                      <div className="hidden md:block absolute top-1/2 -right-4 transform -translate-y-1/2">
                        <div className="w-8 h-0.5 bg-gradient-to-r from-nepveda-secondary/80 to-transparent"></div>
                        <div className="absolute -right-1 top-1/2 transform -translate-y-1/2 w-0 h-0 border-l-4 border-l-nepveda-secondary/80 border-t-2 border-b-2 border-t-transparent border-b-transparent"></div>
                      </div>
                    )}
                  </div>

                  {/* Floating orbs */}
                  <div className="absolute top-4 right-4 w-1 h-1 bg-nepveda-secondary/70 rounded-full animate-ping delay-500"></div>
                  <div className="absolute bottom-6 left-2 w-1.5 h-1.5 bg-yellow-300/50 rounded-full animate-ping delay-1000"></div>
                </div>
              ))}
            </div>

            {/* Bottom decorative elements */}
            <div className="flex justify-center mt-16">
              <div className="flex space-x-2">
                {[...Array(5)].map((_, i) => (
                  <div 
                    key={i}
                    className="w-2 h-2 bg-white/40 rounded-full animate-pulse"
                    style={{ animationDelay: `${i * 200}ms` }}
                  ></div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyNepveda;