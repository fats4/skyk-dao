const HeroSection = () => {
  return (
    <section className="min-h-screen flex items-center justify-center px-6 pt-20">
      <div className="w-full max-w-7xl mx-auto">
        <div className="text-center hero-container mx-auto max-w-6xl">
          {/* SKYK Image - Perfectly centered */}
          <div className="mb-12 flex justify-center">
            <img 
              src="/skyk.jpg" 
              alt="SKYK Character" 
              className="w-64 h-64 md:w-80 md:h-80 pixel-art"
            />
          </div>

          <div className="mb-8">
            <h1 className="text-4xl md:text-6xl lg:text-7xl pixel-font mb-6 leading-tight">
              <span className="block mb-4 text-white">WLNO</span>
              <span className="block mb-4 text-cyan-400">WONG LIYO NGERTI OPO</span>
              <span className="block text-white">DAO</span>
            </h1>
          </div>
          
          <p className="text-lg md:text-xl text-gray-300 mb-12 max-w-4xl mx-auto leading-relaxed font-mono">
            We're the first community-owned and operated Airdrop DAO dedicated to maximizing rewards 
            and building wealth through strategic Web3 opportunities
          </p>

          {/* Buttons - Perfectly centered */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16">
            <button className="btn-primary pixel-font text-sm px-8 py-4 text-white">
              Join DAO
            </button>
          </div>

          <div className="text-center text-sm text-cyan-400 font-mono pixel-font">
            <p>THE FUTURE OF AIRDROP FARMING</p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default HeroSection