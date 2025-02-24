export default function Bill({ bill, onUpdateBill }) {
  return (
    <div className="bill-container">
      <h2>How much was the bill?</h2>
      <input
        type="text"
        placeholder="$$$$"
        value={bill}
        onChange={onUpdateBill}
      />
    </div>
  );
}
