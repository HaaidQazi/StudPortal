
const StudentCard = ({ student }) => {
    return (
      <div className="bg-white shadow-md p-4 rounded-lg">
        <h2 className="text-xl font-semibold">Personal Data</h2>
        <p><strong>Name:</strong> {student.name}</p>
        <p><strong>ID:</strong> {student.id}</p>
        <p><strong>Phone Number:</strong> {student.phone}</p>
        <p><strong>Email:</strong> {student.email}</p>
        <p><strong>Bachelors:</strong> {student.degree.bachelors}</p>
        <p><strong>Discipline:</strong> {student.degree.discipline}</p>
        <p><strong>Join Date:</strong> {student.degree.joinDate}</p>
      </div>
    );
  };
  
  export default StudentCard;
  