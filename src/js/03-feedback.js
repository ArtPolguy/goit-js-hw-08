const throttle = require('lodash.throttle');

const formRef = document.querySelector('.feedback-form');
// console.log(formRef);

document.addEventListener(`input`, throttle(onInputValue, 500));
window.addEventListener(`load`, onInputValueLoad);
formRef.addEventListener(`submit`, onFormSubmit);

const LOCALSTORAGE_KEY = 'feedback-form-state';

function onInputValue(e) {
  e.preventDefault();

  const emailValue = formRef.elements.email.value;
  const messageValue = formRef.elements.message.value;

  localStorage.setItem(
    LOCALSTORAGE_KEY,
    JSON.stringify({ emailValue, messageValue })
  );
  //   console.log(localStorage);
}

function onInputValueLoad(e) {
  const inputStorageValue = localStorage.getItem(LOCALSTORAGE_KEY);

  // console.log(inputStorageValue);

  const emailStorageValueParse = JSON.parse(inputStorageValue).emailValue;

  //   console.log(JSON.parse(inputStorageValue));

  const messageStorageValueParse = JSON.parse(inputStorageValue).messageValue;

  //   console.log(emailStorageValueParse);

  if (emailStorageValueParse || messageStorageValueParse !== '') {
    formRef.elements.email.value = emailStorageValueParse;
    formRef.elements.message.value = messageStorageValueParse;
  }
}

function onFormSubmit(e) {
  e.preventDefault();

  const {
    elements: { email, message },
  } = e.currentTarget;

  console.log({ email: email.value, message: message.value });

  localStorage.clear();

  e.currentTarget.reset();
}

// console.log(LOCALSTORAGE_KEY);
