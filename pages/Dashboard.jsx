
import Sidebar from "../components/Sidebar"; 
import Navbar from "../components/Navbar";
import StudentCard from "../components/StudentCard";
import GuardianData from "../components/GuardianData";
import TransferCard from "../components/TransferCard";
import AdminCard from "../components/AdminCard";
import studentData from "../data/studentData.json";

const Dashboard = () => {
  return (
    <div className="flex">
      <Sidebar />
      <div className="flex-1 p-5">
        <Navbar />
        <div className="grid grid-cols-2 gap-4 mt-4">
          <StudentCard student={studentData.student} />
          <GuardianData guardian={studentData.guardian} />
          <TransferCard transfer={studentData.transfer} />
          <AdminCard admin={studentData.admin} />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
