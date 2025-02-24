import { use, useState } from "react";
import Bill from "./Bill";
import FirstService from "./FirstService";
import Total from "./Total";
import Reset from "./Reset";

function App() {
  const [bill, setBill] = useState(0);
  const [tip1, setTip1] = useState(0);
  const [tip2, setTip2] = useState(0);

  const tip = bill * ((tip1 + tip2) / 100);

  function updateBill(e) {
    setBill(Number(e.target.value));
  }

  function handleReset() {
    setBill(0);
    setTip1(0);
    setTip2(0);
  }

  return (
    <div className="main-container">
      <Bill bill={bill} onUpdateBill={updateBill} />
      <FirstService tip={tip1} setTip={setTip1}>
        How did you like the service?
      </FirstService>
      <FirstService tip={tip2} setTip={setTip2}>
        How did your friend like the service?
      </FirstService>
      {bill > 0 && (
        <>
          <Total bill={bill} tip={tip} />
          <Reset onReset={handleReset} />
        </>
      )}
    </div>
  );
}

export default App;
