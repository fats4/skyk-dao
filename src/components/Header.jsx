const Header = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 glass-card border-b border-cyan-500/20">
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* SKYK Logo */}
          <div className="flex items-center space-x-4">
            <div className="pixel-logo">
              <img src="/skyk.jpg" alt="SKYK Logo" />
            </div>
            <div>
              <div className="text-xl font-bold pixel-font gradient-text">
                SKYK
              </div>
              <div className="text-xs text-cyan-400 font-mono tracking-wider">WLNO</div>
              <div className="text-xs text-purple-400 font-mono">HIGH RISK HIGH RETURN</div>
            </div>
          </div>

          {/* Join DAO Button - Always visible */}
          <div>
            <button className="btn-primary pixel-font text-xs px-6 py-3">
              Join DAO
            </button>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header