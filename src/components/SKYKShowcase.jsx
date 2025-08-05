const SKYKShowcase = () => {
    return (
      <section className="py-20 px-6 relative overflow-hidden">
        <div className="max-w-6xl mx-auto text-center">
          <div className="mb-16">
            <h2 className="text-4xl md:text-5xl pixel-font mb-6 cyberpunk-gradient">
              MEET SKYK ROBT.NFT
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto font-mono">
              The legendary pixel warrior leading the charge in Web3 airdrop farming
            </p>
          </div>
  
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="relative">
              <img 
                src="/src/assets/skyk.jpg" 
                alt="SKYK Character" 
                className="w-full max-w-md mx-auto pixel-art-hero rounded-2xl"
                style={{
                  imageRendering: 'pixelated',
                  imageRendering: '-moz-crisp-edges',
                  imageRendering: 'crisp-edges'
                }}
              />
            </div>
  
            <div className="text-left space-y-6">
              <div className="glass-card p-6">
                <h3 className="text-2xl pixel-font mb-4 text-cyan-400">CHARACTER STATS</h3>
                <div className="space-y-3 font-mono">
                  <div className="flex justify-between">
                    <span>Airdrop Farming Level:</span>
                    <span className="text-cyan-400">MAX</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Risk Tolerance:</span>
                    <span className="text-purple-400">EXTREME</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Return Potential:</span>
                    <span className="text-pink-400">LEGENDARY</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Community Influence:</span>
                    <span className="text-yellow-400">GODLIKE</span>
                  </div>
                </div>
              </div>
  
              <div className="glass-card p-6">
                <h3 className="text-xl pixel-font mb-4 text-purple-400">SPECIAL ABILITIES</h3>
                <ul className="space-y-2 font-mono text-sm">
                  <li>• Alpha Project Detection</li>
                  <li>• Whale Movement Tracking</li>
                  <li>• Smart Contract Analysis</li>
                  <li>• Risk Assessment Matrix</li>
                  <li>• Community Coordination</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    )
  }
  
  export default SKYKShowcase