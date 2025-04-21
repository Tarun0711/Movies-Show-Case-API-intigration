import React from "react";
import "./SwitchButton.css"
function SwitchButton() {
  return (
    <div class="switch-button">
      <input class="switch-button-checkbox" type="checkbox"></input>
      <label class="switch-button-label" for="">
        <span class="switch-button-label-span">Photo</span>
      </label>
    </div>
  );
}

export default SwitchButton;
