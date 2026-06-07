function Navbar() {
  return (
    <nav className="fixed top-0 w-full bg-slate-900 shadow-lg z-50">
      <div className="max-w-6xl mx-auto flex justify-between items-center p-4">
        <h1 className="text-2xl font-bold text-cyan-400">
          Aanya.dev
        </h1>

        <ul className="flex gap-6 text-white">
          <li><a href="#about">About</a></li>
          <li><a href="#skills">Skills</a></li>
          <li><a href="#projects">Projects</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;