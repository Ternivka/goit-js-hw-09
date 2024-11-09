const formData = {
  email: '',
  message: '',
};
const form = document.querySelector('.feedback-form');
form.addEventListener('input', evt => {
  formData[evt.target.name] = evt.target.value.trim();
  localStorage.setItem('feedback-form-state', JSON.stringify(formData));
});
const savedData = localStorage.getItem('feedback-form-state');
if (savedData !== null) {
  const parsedData = JSON.parse(savedData);
  formData.email = parsedData.email;
  formData.message = parsedData.message;

  form.elements.email.value = formData.email;
  form.elements.message.value = formData.message;
}
form.addEventListener('submit', evt => {
  evt.preventDefault();

  if (formData.email === '' || formData.message === '') {
    alert('Fill please all fields');
    return;
  }

  console.log(formData);

  localStorage.removeItem('feedback-form-state');
  form.reset();
});
