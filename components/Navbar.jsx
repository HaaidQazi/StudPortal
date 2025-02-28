
const Navbar = () => {
  return (
    <header className="bg-gray-900 text-white p-4 flex justify-between items-center">
      <h1 className="text-lg font-semibold">Student Portal</h1>
      <button className="bg-red-500 px-4 py-2 rounded hover:bg-red-600">Logout</button>
    </header>
  );
};

export default Navbar;

