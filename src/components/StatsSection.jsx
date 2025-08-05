const StatsSection = () => {
  const stats = [
    { value: "100+", title: "Members", description: "Active airdrop farmers" },
    { value: "$100k+", title: "Total Rewards", description: "Earned by our community" }, 
    { value: "150+", title: "Active Projects", description: "Curated opportunities" }
  ]

  return (
    <section className="py-20 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl pixel-font mb-6 leading-tight">
            <span className="block mb-2">We're more than a community,</span>
            <span className="block gradient-text">we're a global network</span>
          </h2>
          <p className="text-lg md:text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
            From every corner of the globe, our members unite around shared vision — to maximize 
            airdrop rewards and build generational wealth through Web3 opportunities.
          </p>
        </div>

        {/* Stats Grid - Centered dengan 3 kolom */}
        <div className="flex justify-center">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-16 max-w-4xl w-full">
            {stats.map((stat, index) => (
              <div key={index} className="stats-card mx-auto">
                <div className="stats-number">{stat.value}</div>
                <div className="stats-title">{stat.title}</div>
                <div className="stats-description">{stat.description}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default StatsSection