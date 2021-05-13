// handle form
const emailForm = document.getElementById('email-form');
const errorText = document.getElementById('error-txt');

function validateEmail(email) {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}


emailForm.addEventListener('submit', () => {
  event.preventDefault()
  const submissionValue = event.target.children[0].value;

  if (!validateEmail(submissionValue)) {
    errorText.style.display = 'block';
  } else {
    errorText.style.display = 'none';
    alert("We will be in touch!")
    event.target.children[0].value = '';
  }
});
