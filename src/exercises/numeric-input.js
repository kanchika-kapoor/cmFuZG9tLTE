/*
* Numeric Input Component
*   HTML (initial state): <input type="text" class="c-numeric-input" />
*   Requirement:
*   - should only accept numeric value only such as: 1, 1.2, -5, or 1000
*   - if user enters leading zero, or .  when user moves focus away from the input, it should
*     change to correct format:
*       .1 ==> 0.1 and 01 => 1
*   - if user enter invalid character/value, HTML should change to this
*       <input type="text" class="c-numeric-input c-numeric-input--error" />
*       <span class="c-numeric-input__error-msg">invalid input</span>
*   - if user enter valid value and move focus away from the input HTML should change to this:
*       <input type="text" class="c-numeric-input c-numeric-input--valid" />
*   - if user focus on the input or user clear value from the input,
*     HTML should return to initial stage
*
* Lastly, please add some css for c-numeric-input--error and c-numeric-input--valid to show
* red or green border to the input
* */

const NumericInput = {
  init: () => {
    document.querySelectorAll('.c-numeric-input').forEach(elem => {
      // console.log('TODO: Please see the above requirement for numeric input');
      elem.addEventListener('blur', NumericInput.onBlur)
      elem.addEventListener('focus', NumericInput.resetInput)
    });
  },
  validateInput: (e)=>{
    // regex check for negative, decimal numbers
    const isValidNumber = /^-?\d*\.?\d*$/.test(e.value);
    return isValidNumber;
  },
  resetInput: (e)=>{
    let elem = e.target
    elem.className = 'c-numeric-input'

    if(elem.nextSibling.className=='c-numeric-input__error-msg'){
      elem.nextSibling.remove()
    }
  },
  onBlur: (e) => {
    let elem = e.target;
    const isValid = NumericInput.validateInput(elem);
    NumericInput.resetInput(e);

    if(elem.value && isValid){
      // format value for leading zeros and decimal
      elem.value = elem.value.replace(/^0+/, '');

      if (elem.value.charAt(0) === '.') {
        elem.value = '0' + elem.value;
      }
      elem.classList.add('c-numeric-input--valid');

    }else if(elem.value && !isValid){
      let msgContainer = document.createElement('span');
      msgContainer.classList.add('c-numeric-input__error-msg');
      msgContainer.innerHTML = 'invalid input';

      //add classname and append error message span
      elem.classList.add('c-numeric-input--error');


      if(elem.nextSibling.className!='c-numeric-input__error-msg'){
        elem.after(msgContainer)
      }

    }
  }
};
document.addEventListener('DOMContentLoaded', NumericInput.init);