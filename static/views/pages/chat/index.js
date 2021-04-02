import './chat.scss';
import './includes/contact/contact.scss';
import './includes/message/message.scss';


window.onload = () => {
  const chat = document.querySelector('.active-chat__messages');
  chat.scrollTop = chat.scrollHeight - chat.clientHeight; // Показываем диалог с конца.

  const searchInput = document.querySelector('.search-input');
  searchInput.addEventListener('input', (event) => {
    console.log('searchInput', event.target.value)
  });

  const messageInput = document.querySelector('.control-panel__message-input');
  messageInput.addEventListener('input', (event) => {
    console.log('messageInput', event.target.value)
  });
};
