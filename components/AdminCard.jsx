
const AdminCard = ({ admin }) => {
    return (
      <div className="bg-white shadow-md p-4 rounded-lg">
        <h2 className="text-xl font-semibold">Admin Notifications</h2>
        <p><strong>Fees Payment:</strong> {admin.feesPayment}</p>
        <p><strong>Last Date:</strong> {admin.lastDate}</p>
        <p><strong>Upload Certificate:</strong> {admin.uploadCertificate}</p>
        <p><strong>Pending Status:</strong> {admin.pendingStatus}</p>
      </div>
    );
  };
  
  export default AdminCard;
  