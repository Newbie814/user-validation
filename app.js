const container = document.querySelector('.container');

const headingSpan2 = document.querySelector('.heading-span-2');

const signUpBtn = document.querySelector('.signup-btn');
const signInBtn = document.querySelector('.signin-btn');

//form DOM constants
const userName = document.getElementById('username');
const email = document.getElementById('email');
const password = document.getElementById('password');
const password2 = document.getElementById('password2');
const form = document.querySelector('.form');

// button animations
signUpBtn.addEventListener('click', () => {
  container.classList.add('change');
  setTimeout(() => {
    headingSpan2.textContent = 'Up';
  }, 200);
  form.className = 'form sign-up';
  // clearForm();
});

signInBtn.addEventListener('click', () => {
  container.classList.remove('change');
  setTimeout(() => {
    headingSpan2.textContent = 'In';
  }, 200);
  form.className = 'form sign-in';
  //  clearForm();
});

const error = (input, message) => {
  const inputWrapper = input.parentElement;
  inputWrapper.className = 'input-wrapper error';
  inputWrapper.querySelector('message').textContent = message;
};

// form validation

const checkRequiredFields = (inputArr) => {
  inputArr.forEach((input) => {
    if (input.value.trim() === '') {
      error(input, `${input.id} is required`);
    } else {
      //success
    }
  });
};

form.addEventListener('submit', (e) => {
  e.preventDefault();
  checkRequiredFields([userName, email, password, password2]);
});
