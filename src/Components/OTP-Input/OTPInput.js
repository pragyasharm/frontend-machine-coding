import React from "react";
import { useState, useRef } from "react";

const OTPInput = () => {
  const length = 4;
  const [otp, setOtp] = useState(Array(length).fill(""));
  const inputsRef = useRef([]);

  const handleChange = (value, index) => {
    console.log(index, value);
    if (isNaN(value)) return;
    const newValue = value.trim();
    const newOtp = [...otp];
    newOtp[index] = newValue;
    setOtp(newOtp);

    if (newValue && index < length - 1) {
      inputsRef.current[index + 1]?.focus();
    }
  };

  const handleKeyDown = (e, index) => {
    if (e.key === "Backspace" && !e.target.value) {
      inputsRef.current[index - 1]?.focus();
    }
  };

  const handlePaste = (e, index) => {
    // console.log(index);
    // e.preventDefault();
    // const pastedData = e.clipboardData?.getData("text");
    // const pastedArr = pastedData.split("");
    // console.log(pastedArr);
  };

  return (
    <div>
      <h2>OTPInput</h2>
      {otp.map((digit, index) => {
        return (
          <input
            key={index}
            id={index}
            type="text"
            maxLength={1}
            ref={(el) => (inputsRef.current[index] = el)}
            inputMode="numeric"
            onKeyDown={(e) => handleKeyDown(e, index)}
            onPaste={(e) => handlePaste(e, index)}
            onChange={(e) => handleChange(e.target.value, index)}
            value={digit}
            style={{
              width: "40px",
              height: "40px",
              fontSize: "20px",
              textAlign: "center",
              marginRight: "10px",
              marginLeft: "2px",
              border: "1px solid black",
            }}
          />
        );
      })}
    </div>
  );
};

export default OTPInput;
