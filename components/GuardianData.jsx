
const GuardianCard = ({ guardian }) => {
    return (
      <div className="bg-white shadow-md p-4 rounded-lg">
        <h2 className="text-xl font-semibold">Guardian Data</h2>
        <p><strong>Email:</strong> {guardian.email}</p>
        <p><strong>Phone Number:</strong> {guardian.phone}</p>
        <p><strong>Alternate Email:</strong> {guardian.alternateEmail}</p>
        <p><strong>Address:</strong> {guardian.address}</p>
      </div>
    );
  };
  
  export default GuardianCard;
  