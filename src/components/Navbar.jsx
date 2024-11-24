function Navbar() {
  return (
    <nav className="bg-gray-800 text-white p-4 shadow">
      <div className="container mx-auto flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center space-x-3">
          <img
            src="https://rickandmortyapi.com/icons/icon-512x512.png"
            alt="Logo"
            className="h-10 w-10 rounded-full"
          />
          <h1 className="text-xl font-bold">Rick and Morty App</h1>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
