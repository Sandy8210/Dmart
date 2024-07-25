import React, { useState } from "react";
import PrograssBar from "./PrograssBar";

const Forgot = () => {
  const [step, setStep] = useState(1);

  return (
    <div className="forgot-container">
      <PrograssBar step={step} />
      
    </div>
  );
};

export default Forgot;
