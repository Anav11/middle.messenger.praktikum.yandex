import './changePass.scss';
import '../profile.scss';

window.onload = () => {
  const changePasswordForm = document.querySelector('.change-password');

  changePasswordForm.addEventListener('submit', (event) => {
    event.preventDefault();
    const fd = new FormData(changePasswordForm);
    console.log('entries', Object.fromEntries(fd.entries()));
  });
};
