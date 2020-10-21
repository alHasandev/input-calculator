// Calculator layout design!:
/*
#wrapper
#screen
#controls unit
#buttons
*/

// Regex /[0-9]+[x\*\/\+\-\U+00F7]?/gi

const mobileCheck = function () {
  let check = false;
  (function (a) {
    if (
      /(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i.test(
        a
      ) ||
      /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(
        a.substr(0, 4)
      )
    )
      check = true;
  })(navigator.userAgent || navigator.vendor || window.opera);
  return check;
};

const style = `
  .calculator.wrapper {
    width: 100%;
    border: 1px solid black;
    padding: 0.5rem;
    box-sizing: border-box;
    background-color: white;
    box-shadow: 0 1px 5px 1px rgba(0, 0, 0, 0.3);
  }

  .calculator [role="display"] {
    margin-bottom: 0.5rem;
    border: 1px solid black;
  }

  .calculator [role="screen"] {
    box-sizing: border-box;
    text-align: right;
    width: 100%;
    padding: 0.5rem;
    font-size: 1.2rem;
    border: none;
    outline: none;
    cursor: pointer;
  }

  .calculator [role="controls"] {
    display: grid;
    column-gap: 0.5rem;
    row-gap: 0.25rem;
    grid-template-columns: repeat(4, 1fr);
  }

  .calculator [role="control"] {
    cursor: pointer;
    padding: 0.25rem;
  }
`;

const isOperationKey = (key) => new RegExp(/[\*\/\+\-]/i).test(key);
const isAllowedKey = (key) => new RegExp(/[0-9\.]+|[\*\/\+\-]+/i).test(key);
const regexs = new RegExp(/([0-9]+(\.\w+)?)|([\*\/\+\-])+/g);

const allowedKey = new RegExp(/[0-9]+|[x\*\/\+\-]+/i);

const screens = [
  {
    name: "calc-screen",
    value: "",
  },
];

const controls = [
  {
    label: "C",
    function: "clear",
  },
  {
    label: "D",
    function: "delete",
  },
  {
    label: "%",
    function: "percent",
  },
  {
    label: "÷",
    display: "/",
    code: "/",
  },
  {
    label: "7",
    display: "7",
    code: "7",
  },
  {
    label: "8",
    display: "8",
    code: "8",
  },
  {
    label: "9",
    display: "9",
    code: "9",
  },
  {
    label: "x",
    display: "*",
    code: "*",
  },
  {
    label: "4",
    display: "4",
    code: "4",
  },
  {
    label: "5",
    display: "5",
    code: "5",
  },
  {
    label: "6",
    display: "6",
    code: "6",
  },
  {
    label: "-",
    display: "-",
    code: "-",
  },
  {
    label: "1",
    display: "1",
    code: "1",
  },
  {
    label: "2",
    display: "2",
    code: "2",
  },
  {
    label: "3",
    display: "3",
    code: "3",
  },
  {
    label: "+",
    display: "+",
    code: "+",
  },
  {
    label: "EX",
    function: "extra",
  },
  {
    label: "0",
    display: "0",
    code: "0",
  },
  {
    label: ".",
    display: ".",
    code: ".",
  },
  {
    type: "submit",
    label: "=",
    // function: "result",
  },
];

const createWrapper = () => {
  const wrapper = document.createElement("form");
  wrapper.setAttribute("class", "calculator wrapper");

  return wrapper;
};

const createDisplay = (screens = []) => {
  const display = document.createElement("section");
  display.setAttribute("role", "display");

  screens.map((screen) => {
    const screenEl = document.createElement("input");
    screenEl.value = screen.value ? screen.value : "";
    screenEl.setAttribute("name", screen.name);
    screenEl.setAttribute("role", "screen");
    // screen.setAttribute("style", "resize: none");
    // screen.setAttribute("readonly", true);

    display.append(screenEl);
  });

  const backScreen = document.createElement("input");
  backScreen.setAttribute("name", "backscreen");
  backScreen.setAttribute("role", "backscreen");
  backScreen.setAttribute("style", "display: none");
  display.append(backScreen);

  return display;
};

const createControls = (controls = []) => {
  const controlsSection = document.createElement("section");
  controlsSection.setAttribute("role", "controls");
  controls.map((control) => {
    const button = document.createElement("button");
    button.innerHTML = control.label;
    button.setAttribute("role", "control");
    if (!!control.type) {
      button.setAttribute("type", control.type);
    } else {
      button.setAttribute("type", "button");
    }
    if (!!control.function)
      button.setAttribute("data-function", control.function);
    if (!!control.display) button.setAttribute("data-display", control.display);
    if (!!control.code) button.setAttribute("data-code", control.code);

    controlsSection.append(button);
  });

  return controlsSection;
};

const createLayout = (wrapper, display, controls) => {
  wrapper.append(display);
  wrapper.append(controls);

  return wrapper;
};

const handleInput = (ev, screen, onEnter) => {
  // handle key such as Enter, Backspace
  switch (ev.key) {
    case "Enter":
      if (typeof onEnter === "function") onEnter(screen);
      return;
    case "Backspace":
      return;
    default:
      break;
  }

  // check if input key is allowed
  if (!isAllowedKey(ev.key)) return ev.preventDefault();

  // handle input zero (0)
  if (screen.value && screen.value.substr(-1, 1) === "0") {
    // check if key is operation
    if (isOperationKey(ev.key)) return;
    if (
      ev.key !== "." &&
      screen.value &&
      isOperationKey(screen.value.substr(-2, 1))
    ) {
      ev.preventDefault();
      screen.value =
        screen.value.substr(0, screen.value.length - 1).toString() +
        ev.key.toString();
      return;
    }
  }

  if (screen.value === "0") {
    ev.preventDefault();
    screen.value = ev.key;
    return;
  }

  // handle point (.)
  if (screen.value.includes(".") && ev.key === ".") ev.preventDefault();

  // handle operation (*/+-)
  if (isOperationKey(ev.key)) {
    const lastCode = screen.value.substr(-1, 1);
    if (!screen.value || isNaN(lastCode)) {
      // allow a**b
      if (lastCode === "*" && ev.key === "*") {
        if (screen.value.substr(-2, 2) === "**") ev.preventDefault();
        return;
      }
      if (screen.value) return ev.preventDefault();
      if (ev.key !== "-") return ev.preventDefault();
    }
  }
};

const compute = (expression = "") => {
  return Function(`"use strict";return ${expression}`)();
};

// Constructor
class Calculator {
  constructor(options) {
    // console.log("controls", this.controls);
    if (!!options && typeof options === "object") {
    }
  }

  allowedKey = allowedKey;
  screens = screens;
  controls = controls;

  onScreenChange = (value) => {
    console.log("screen value change", value);
    // return true / false for prevent default
    return true;
  };

  createHtmlElement() {
    if (!this.htmlElement) {
      this.display = createDisplay(this.screens);
      this.controlsSection = createControls(this.controls);
      this.htmlElement = createLayout(
        createWrapper(),
        this.display,
        this.controlsSection
      );
    }
  }

  getHtmlElement() {
    this.createHtmlElement();

    this.htmlElement;
  }

  renderTo(parent, options) {
    if (!!parent && parent instanceof HTMLElement) {
      this.createHtmlElement();
      if (!!options && typeof options === "object") {
        if (options.style) {
          const styleWrapper = document.createElement("style");
          styleWrapper.innerText = style;
          parent.append(styleWrapper);
        }
      }

      parent.append(this.htmlElement);
    }
  }

  appendNumber = (ev) => {
    const number = ev.target.dataset.code;
    const screen = this.display.querySelector("[role=screen]");

    if (number === ".") {
      if (screen.value) {
        const exprs = screen.value.split(/[\*\/\+\-]/);
        const lastExpr = exprs[exprs.length - 1];
        if (lastExpr.includes(".")) return;
      } else {
        return;
      }
    }

    // handle input zero (0)
    if (screen.value && screen.value.substr(-1, 1) === "0") {
      // console.log(number);
      if (
        number !== "." &&
        screen.value &&
        isOperationKey(screen.value.substr(-2, 1))
      ) {
        screen.value =
          screen.value.substr(0, screen.value.length - 1).toString() +
          number.toString();
        return;
      }
    }

    if (screen.value === "0") {
      screen.value = number;
      return;
    }

    screen.value += number.toString();
  };

  appendOperation = (ev) => {
    const operation = ev.target.dataset;
    const screen = this.display.querySelector("[role=screen]");
    const lastCode = screen.value.substr(-1, 1);
    if (!screen.value || isNaN(lastCode)) {
      // allow a**b
      if (lastCode === "*" && operation.code === "*") {
        // console.log(lastCode, operation.code, screen.value.substr(-2, 2));
        if (screen.value.substr(-2, 2) !== "**") screen.value += operation.code;
        return;
      }
      if (screen.value) return;
      if (operation.code !== "-") return;
    }

    screen.value += operation.code;
  };

  clear() {
    const callback = this.onClear();
    if (!callback && callback !== undefined) return;
    const screen = this.display.querySelector("[role=screen]");

    screen.value = "";
    if (typeof callback === "function") callback(value);
  }

  onClear() {}

  percent() {
    const screen = this.display.querySelector("[role=screen]");

    if (screen.value) {
      const lastCode = screen.value.substr(-1, 1);
      if (!isOperationKey(lastCode)) {
        const exprs = screen.value.match(/([0-9]+(\.\w+)?)|([\*\/\+\-])+/g);

        const lastNumber = exprs[exprs.length - 1];
        let nDec = 0;
        if (!Number.isInteger(lastNumber)) {
          const nStr = lastNumber.toString();
          const nIndex = nStr.indexOf(".");
          const n = nStr.slice(nIndex + 1);
          console.log(n);
          nDec = n.length;
        }

        let divided = lastNumber / 100;

        if (!Number.isInteger(divided)) {
          const divStr = divided.toString();
          const pIndex = divStr.indexOf(".");
          const dec = divStr.slice(pIndex + 1);

          if (dec.length - nDec > 2) {
            // console.log(dec, nDec);
            divided = divided.toFixed(nDec + 2);
          }
        }

        if (exprs.length > 1)
          return (screen.value =
            exprs.slice(0, exprs.length - 1).join("") + divided);

        screen.value = divided;
      } else {
        return;
      }
    }
  }

  extra() {
    console.log("button extra is clicked!");
  }

  delete() {
    const callback = this.onDelete();
    if (!callback && callback !== undefined) return;

    const screen = this.display.querySelector("[role=screen]");

    screen.value = screen.value.substr(0, screen.value.length - 1);
  }

  onDelete() {
    return true;
  }

  submit() {
    const callback = this.onSubmit();
    if (!callback && callback !== undefined) return;

    const screen = this.display.querySelector("[role=screen]");
    const len = screen.value.length;
    if (len === 0) return;
    const lastChar = screen.value.substr(-1, 1);
    if (isOperationKey(lastChar))
      screen.value = screen.value.substr(0, len - 1);
    let value = compute(screen.value);
    if (!Number.isInteger(value)) value = value.toFixed(2);

    screen.value = value;
    if (typeof callback === "function") callback(value);
  }

  onSubmit() {
    return true;
  }

  initControl(options = {}) {
    const { readonlyOnMobile = true } = options;
    const screen = this.display.querySelector("[role=screen]");

    if (mobileCheck() && readonlyOnMobile) {
      screen.setAttribute("readonly", true);
    }

    screen.onkeydown = (ev) => {
      if (!this.onScreenChange(ev.key)) ev.preventDefault();
      handleInput(ev, screen, () => {
        this.submit();
      });
    };

    const buttons = this.controlsSection.querySelectorAll("[role=control]");

    this.htmlElement.addEventListener("submit", (ev) => {
      ev.preventDefault();
      this.submit();
    });

    buttons.forEach((button) => {
      if (!!button.dataset.code) {
        if (isOperationKey(button.dataset.code)) {
          // number button clicked
          button.onclick = this.appendOperation;
        } else {
          // operation button clicked
          button.onclick = this.appendNumber;
        }
      } else if (!!button.dataset.function) {
        // function button clicked
        if (typeof this[button.dataset.function] === "function")
          button.onclick = () => this[button.dataset.function]();
      }
    });
  }
}
