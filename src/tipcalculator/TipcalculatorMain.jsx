import { useState } from "react";



function TipcalculatorMain() {
  return (
    <>
      <TipCalculator />
    </>
  );
}

export default TipcalculatorMain;

function TipCalculator() {
  const [bill, setBill] = useState("");
  const [percentage1, setPercentage1] = useState(0);
  const [percentage2, setPercentage2] = useState(0);

  const tip = bill * ((percentage1 + percentage2)/2/100);

  function handleReset(){
    setBill("");
    setPercentage1(0);
    setPercentage2(0);
  }

  return (
    <>
      <Bill bill={bill} onSetBill={setBill} />
      <SelectPercentage
        percentage={percentage1}
        onSetPercentage={setPercentage1}
      >
        How satisfied are you?
      </SelectPercentage>
      <SelectPercentage
        percentage={percentage2}
        onSetPercentage={setPercentage2}
      >
        How satisfied are you're friend?
      </SelectPercentage>
    { bill>0 &&<> <Output bill={bill} tip={tip} />
      <Reset handleReset={handleReset} /></>}
    </>
  );
}

function Bill({ bill, onSetBill }) {
  return (
    <div>
      <label>How much the Bill</label>
      <input
        type="text"
        placeholder="enter amount"
        value={bill || ""}
        onChange={(e) => onSetBill(Number(e.target.value))}
      />
    </div>
  );
}

function SelectPercentage({ children, percentage, onSetPercentage }) {
  return (
    <div>
      <label>{children}</label>
      <select value={percentage} onChange={(e)=>onSetPercentage(Number(e.target.value))}>
        <option value="0">Not satisfied(0%)</option>
        <option value="10">satisfied(10%)</option>
        <option value="15">Not satisfied(15%)</option>
        <option value="20">Not satisfied(20%)</option>
      </select>
    </div>
  );
}

function Output({ bill, tip }) {
  return (
    <div>
      <p>You're total is ${bill+tip}(${bill} + ${tip} tip)</p>
    </div>
  );
}

function Reset({handleReset}) {
  return <button onClick={handleReset}>Reset</button>;
}
