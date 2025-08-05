import { Gift, TrendingUp, Users, Target } from 'lucide-react'

const BenefitsSection = () => {
  const benefits = [
    {
      title: "Exclusive Airdrop Access",
      description: "Get early access to the most promising airdrop opportunities before they go public",
      icon: Gift
    },
    {
      title: "Community Intelligence", 
      description: "Leverage collective knowledge from experienced airdrop farmers worldwide",
      icon: Users
    },
    {
      title: "Maximized Returns",
      description: "Our strategies have helped members earn significant rewards collectively",
      icon: TrendingUp
    },
    {
      title: "Strategic Guidance",
      description: "Receive expert guidance on portfolio allocation, risk management, and timing",
      icon: Target
    }
  ]

  return (
    <section className="py-20 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl pixel-font mb-6 leading-tight">
            <span className="block mb-2">Unlock exclusive</span>
            <span className="block gradient-text">Member Benefits</span>
          </h2>
          <p className="text-lg md:text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
            Join the premier airdrop community and gain access to opportunities, 
            insights, and networks that drive exceptional returns.
          </p>
        </div>

        {/* Benefits Grid - Perfectly centered */}
        <div className="flex justify-center mb-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-5xl w-full">
            {benefits.map((benefit, index) => (
              <div key={index} className="glass-card p-8 mx-auto w-full">
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-white/10 rounded-lg flex items-center justify-center">
                      <benefit.icon size={24} className="text-cyan-400" />
                    </div>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold mb-3 pixel-font text-sm">{benefit.title}</h3>
                    <p className="text-gray-300 leading-relaxed font-mono text-sm">{benefit.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Button - Centered */}
        <div className="text-center">
          <button className="btn-primary pixel-font text-sm px-10 py-4 mx-auto">
            Join SKYK DAO Today
          </button>
          <p className="text-gray-400 mt-4 font-mono">
            Ready to maximize your airdrop potential?
          </p>
        </div>
      </div>
    </section>
  )
}

export default BenefitsSection