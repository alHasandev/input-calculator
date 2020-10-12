## What is this

Simple custom html element for input calculator type

## Instalation

Run `npm i input-calculator`

## CSS

```
Get default css file on [a link](https://github.com/alHasandev/calculator-js#css)

```

## HTML

```
<!-- Simple -->
<input
  type="calculator"
  name="calc_2"
  readonly
  style="width: 100%; padding: 0.5rem 1rem; box-sizing: border-box"
/>

<!-- OR -->
<input
  type="text"
  name="calc_2"
  class="input-calculator"
  data-type="on"
  style="width: 100%; padding: 0.5rem 1rem; box-sizing: border-box"
/>

<!-- If you want used it in common way -->
<script src="./node_modules/alhasandev-calculator/calculator.js"></script>
<script src="./node_modules/input-calculator/input-calculator.js"></script>

<!-- OR if you clone project from github -->
<script src="./vendor/calculator/calculator.js"></script>
<script src="./vendor/input-calculator/input-calculator.js"></script>

```

## JavaScript:

```
// ES7 Module
// import inputCalculator from "../index.js";

// inputCalculator.init();

// Common JS
// You must include script for calculator js / alhasandev-calculator module

const inputCalculator = new InputCalculator();

inputCalculator.init();

```
