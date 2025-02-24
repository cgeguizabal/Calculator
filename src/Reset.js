export default function Reset({ onReset }) {
  return (
    <div>
      <button className="btn-reset" onClick={onReset}>
        Reset
      </button>
    </div>
  );
}
