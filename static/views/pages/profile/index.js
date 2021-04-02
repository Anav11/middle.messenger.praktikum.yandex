import './profile.scss';

window.onload = () => {
  const updateImg = (input) => {
    if (input.files && input.files[0]) {
      const reader = new FileReader();
      reader.onload = (event) => {
        document.querySelector('.user__avatar').setAttribute('src', event.target.result);
      };

      reader.readAsDataURL(input.files[0]);
    }
  };

  document.querySelector('#file-upload').addEventListener('change', function () {
    updateImg(this);
  });
};
