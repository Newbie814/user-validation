const container = document.querySelector('.container');

const headingSpan2 = document.querySelector('.heading-span-2');

const form = document.querySelector('.form');

const signUpBtn = document.querySelector('.signup-btn');
const signInBtn = document.querySelector('.signin-btn');

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
