# Process Form utility

Need to put together a quick form, but don't want to have to worry about validation and sending the data to your server? This ES6 module will lend you a hand.

## Installation

Source has been transpiled into ES5 using the [UMD API](https://github.com/umdjs/umd) - meaning, you can consume it via npm using something like [webpack](https://webpack.github.io/) or just throw it into a `<script>` tag on your page (using the `ProcessForm` namespace).

## Implementation

Module will take care of adding event listeners and all the validation (adds an `.error` class). Get started by doing something like the following:

```javascript
// Get the module - syntax dependent upon your setup
var ProcessForm = require('process-form');    // Common JS
import ProcessForm from 'process-form';       // ES6
var ProcessForm = window.ProcessForm;         // Global

// Set your form element (can be either a jQuery object or DOM node)
var formEl = $('.contact-form')

// Set the types of fields you want to have validated
var fieldTypes = 'input[type="text"], input[type="email"], textarea';

function successCallback() {
  // Success callback - add anything you want to do when the form successfully submits
}

function errorCallback() {
  // Error callback - add anything you want to do when the form submission fails
}

let myForm = new ProcessForm(formEl, fieldTypes, successCallback, errorCallback);
```

## Issues

If you run into problems, open an [issue on github](https://github.com/derrickshowers/process-form/issues), reach out via [Twitter](https://twitter.com/derrickshowers), or just [shoot me a message](http://derrickshowers.com).
