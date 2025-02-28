
const TransferCard = ({ transfer }) => {
    return (
      <div className="bg-white shadow-md p-4 rounded-lg">
        <h2 className="text-xl font-semibold">Transfer Data</h2>
        <p><strong>Status:</strong> {transfer.status}</p>
        <p><strong>Transfer Date:</strong> {transfer.date}</p>
      </div>
    );
  };
  
  export default TransferCard;
  