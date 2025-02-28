
import { Link } from "react-router-dom";

const Sidebar = () => {
  return (
    <aside className="w-64 bg-gray-800 text-white h-screen p-5">
      <h2 className="text-xl font-bold mb-5">MyStudentPortal</h2>
      <nav>
        <ul className="space-y-4">
          <li><Link to="/" className="block p-2 hover:bg-gray-700 rounded">Dashboard</Link></li>
          <li><Link to="/courses" className="block p-2 hover:bg-gray-700 rounded">Courses</Link></li>
          <li><Link to="/cgpa" className="block p-2 hover:bg-gray-700 rounded">CGPA</Link></li>
          <li><Link to="/assignments" className="block p-2 hover:bg-gray-700 rounded">Assignments</Link></li>
        </ul>
      </nav>
    </aside>
  );
};

export default Sidebar;
