import React, { useContext, useState } from "react";
import { SettingsContext } from "../context/SettingsContext";

const numberRegexTest = /^[0-9\b]+$/;

const SetPomodoro = () => {
  const [newTimer, setNewTimer] = useState({
    work: '',
    short: '',
    long: '',
    active: "work",
  });

  const { updateExecute } = useContext(SettingsContext);
  
  const handleChange = (input) => {
    const { name, value } = input.target;
    
    if (value === '' || !numberRegexTest.test(value)) {
      input.target.value = "";
      console.log(value);
      return;
    }
    
    console.log(value);
    if(value.length > 3) return;
    switch (name) {
      case "work":
        setNewTimer({
          ...newTimer,
          work: parseInt(value),
        });
        break;
      case "shortBreak":
        setNewTimer({
          ...newTimer,
          short: parseInt(value),
        });
        break;
      case "longBreak":
        setNewTimer({
          ...newTimer,
          long: parseInt(value),
        });
        break;
    }
    
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    updateExecute(newTimer);
  };
  
  return (
    <div className="form-container">
      <form noValidate onSubmit={handleSubmit}>
        <div className="input-wrapper">
          <input
            className="input"
            type=""
            name="work"
            onChange={handleChange}
            value={newTimer.work}
          />
          <input
            className="input"
            type="text"
            name="shortBreak"
            onChange={handleChange}
            value={newTimer.short}
          />
          <input
            className="input"
            type="text"
            name="longBreak"
            onChange={handleChange}
            value={newTimer.long}
          />
        </div>
        <button type="submit">Definir temporizador</button>
      </form>
    </div>
  );
  
  
};

export default SetPomodoro;
