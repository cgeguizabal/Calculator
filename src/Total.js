export default function Total({ bill, tip }) {
  return (
    <div className="total-container">
      <h1>
        You pay ${bill + tip} (${bill} + ${tip} tip)
      </h1>
    </div>
  );
}
