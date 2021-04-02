import './registration.scss';

window.onload = () => {
  const registrationForm = document.querySelector('.registration-form');

  registrationForm.addEventListener('submit', (event) => {
    event.preventDefault();
    const registrationData = new FormData(registrationForm);
    console.log('entries', Object.fromEntries(registrationData.entries()));
    window.location.href = '/pages/authorization/authorization.html';
  });
};
