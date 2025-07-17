const WhyNepveda = () => {
  const bulletPoints = [
    "Completely personalized for your body and lifestyle",
    "Led by an experienced, and caring Ayurvedic coach", 
    "Designed to feel premium, serene, and private",
    "Rooted in 5000 years of Ayurvedic knowledge"
  ];

  return (
    <section 
      className="py-20 bg-cover bg-center bg-no-repeat relative"
      style={{ backgroundImage: "url('/lovable-uploads/1192b713-b50e-46a5-9a6f-989de6d3a5a9.png')" }}
    >
      {/* Background overlay for better text readability */}
      <div className="absolute inset-0 bg-black/30"></div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="text-left mb-16 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Why Nepveda?
            </h2>
          </div>

          {/* Bullet Points - Left Half Only */}
          <div className="w-1/2">
            <ul className="space-y-6">
              {bulletPoints.map((point, index) => (
                <li key={index} className="flex items-start">
                  <span className="text-white text-2xl mr-4">•</span>
                  <span className="text-xl text-white font-medium leading-relaxed">
                    {point}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyNepveda;