// Import modules
import Calculator from "alhasandev-calculator";

class InputCalculator {
  constructor() {}
  init = (refIds = []) => {
    const calcInput = this.getInputElemements(refIds);

    // attach each calc input with calc html element
    calcInput.forEach((input) => {
      const wrapper = document.createElement("div");
      const calc = new Calculator();
      const calcHtml = calc.getHtmlElement();
      calc.initControlsEvent();
      calc.onEqualClick((result) => {
        input.value = result;
      });

      calc.extraFunction = () => (wrapper.style.display = "none");
      calc.onClear = () => (input.value = "");

      input.setAttribute("data-calculator-id", calc.getId());
      input.addEventListener("click", (ev) => {
        wrapper.style.display = "inline-block";
      });

      calcHtml.style.position = "absolute";

      wrapper.style.display = "none";
      wrapper.style.position = "absolute";
      wrapper.style.top = input.offsetTop + input.offsetHeight + 5 + "px";
      wrapper.style.left = input.offsetLeft + "px";
      wrapper.style.width = "100%";
      wrapper.style.maxWidth = input.offsetWidth + "px";
      wrapper.append(calcHtml);

      input.after(wrapper);
    });
  };

  // get calculator elements
  getInputElemements = (refIds) => {
    let elements = [];
    if (refIds.length > 0) {
      refIds.map((refId) => {
        let element = document.getElementById(refId);
        if (element) {
          element.setAttribute("readonly", true);
          elements.push(element);
        }
      });
    } else {
      elements = document.getElementsByClassName("input-calculator");
      const inputsByType = document.querySelectorAll("input[type=calculator]");

      elements = [...elements, ...inputsByType];

      elements.forEach((input) => {
        if (!input.classList.contains("input-calculator"))
          input.classList.add("input-calculator");

        // input.setAttribute("readonly", true);
        if (!!input.dataset.type && input.dataset.type === "on") {
          input.setAttribute("type", "text");
          let value = "";
          input.addEventListener("keyup", (ev) => {
            switch (ev.key) {
              case " ":
              case "0":
              case "1":
              case "2":
              case "3":
              case "4":
              case "5":
              case "6":
              case "7":
              case "8":
              case "9":
              case "+":
              case "-":
              case "*":
              case "/":
                value += ev.key;
                console.log("prev value", value);
                break;
              case "Enter":
                input.value = Function(
                  `"use strict";return (${input.value})`
                )();
                value = input.value;
                break;
              case "Backspace":
                value = input.value;
                break;
              case "c":
              case "C":
                value = "";
                input.value = "";
                break;
              case "x":
                value += "*";
              default:
                input.value = value;
                break;
            }
          });
        } else {
          input.setAttribute("type", "number");
        }
      });
    }

    return elements;
  };
}

export default new InputCalculator();
