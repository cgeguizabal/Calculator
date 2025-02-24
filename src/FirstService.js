export default function FirstService({ tip, setTip, children }) {
  function updateThisTip(e) {
    setTip(+e.target.value);
  }
  return (
    <div className="tip-container">
      <h2>{children}</h2>
      <select value={tip} onChange={updateThisTip}>
        <option value={0}>Dissastified (0%)</option>
        <option value={5}>it was okay(5%)</option>
        <option value={10}>it was good(10%)</option>
        <option value={20}>Absolutely amazing!(20%)</option>
      </select>
    </div>
  );
}
