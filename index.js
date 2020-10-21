// import calculator
import Calculator from "alhasandev-calculator";

// test input calculator
export function attachCalcToInput(inputCalculators) {
  inputCalculators.forEach((input) => {
    input.setAttribute("readonly", true);
    input.style.cursor = "pointer";
    const calc = new Calculator();

    // attach calculator to input element

    const wrapper = document.createElement("div");
    wrapper.style.display = "none";
    wrapper.style.position = "absolute";
    wrapper.style.top = input.offsetTop + input.offsetHeight + 5 + "px";
    wrapper.style.width = "100%";

    // const offsetRight =
    //   document.body.offsetWidth - (input.offsetWidth - input.offsetLeft);
    // wrapper.style.right = offsetRight + "px";
    wrapper.style.left = input.offsetLeft + "px";

    if (input.offsetWidth < 320) {
      wrapper.style.maxWidth = input.offsetWidth + "px";
    } else {
      wrapper.style.maxWidth = "320px";
    }

    input.after(wrapper);

    calc.renderTo(wrapper);
    calc.initControl();

    const extraBtn = calc.controlsSection.querySelector(
      "button[data-function=extra]"
    );

    extraBtn.innerHTML = "<strong>X</strong>";
    calc.extra = () => {
      wrapper.style.display = "none";
    };
    calc.onSubmit = () => (value) => (input.value = value);
    calc.onClear = () => {
      input.value = "";
    };

    input.onclick = (ev) => {
      wrapper.style.display = "block";
    };
  });
}

export function getInputCalculators(query = "") {
  const inputTypeCalculators = document.querySelectorAll(
    "input[type=calculator]"
  );
  const inputQueryManuals = query
    ? document.querySelectorAll(".input-calculator")
    : [];

  let inputCalculators = [];
  if (inputTypeCalculators.length > 0) {
    inputCalculators = [...inputCalculators, ...inputTypeCalculators];
  }

  if (inputQueryManuals.length > 0) {
    inputCalculators = [...inputCalculators, , ...inputQueryManuals];
  }
  return inputCalculators;
}

class InputCalculator {
  init(query) {
    // const inputCalculators = getInputCalculators();
    attachCalcToInput(getInputCalculators(query));
  }
}

export default new InputCalculator();
