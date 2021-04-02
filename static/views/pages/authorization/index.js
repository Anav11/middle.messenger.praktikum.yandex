import './authorization.scss';

window.onload = () => {
  const authorizationForm = document.querySelector('.auth-form');

  authorizationForm.addEventListener('submit', (event) => {
    event.preventDefault();
    const authData = new FormData(authorizationForm);
    console.log(Object.fromEntries(authData.entries()));
    window.location.href = '/pages/chat/chat.html';
  });
};
