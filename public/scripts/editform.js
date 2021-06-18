function formValidation() {
  const form = document.querySelector('form');
  const inputName = form.querySelector('.name');
  const inputGender = form.querySelector('.gender');
  const allInputs = Array.from(form.querySelectorAll('.form-control'));

  form.addEventListener('submit', async function (event) {
    event.preventDefault();
    const regExpForName = /^([a-zA-Z]{2,}\s[a-zA-Z]{1,}'?-?[a-zA-Z]{2,}\s?([a-zA-Z]{1,})?)/;
    const emptyElement = allInputs.find((input) => !input.value);
    if (emptyElement) {
      emptyElement.classList.add('is-invalid');
      emptyElement.placeholder = 'This input field shouldn\'t be empty';
      return;
    }
    if (!regExpForName.test(inputName.value)) {
      inputName.classList.add('is-invalid');
      return;
    }

    if (inputGender.value !== 'female' && inputGender.value !== 'male') {
      inputGender.classList.add('is-invalid');
      return;
    }
    const id = window.location.pathname.split('/').pop();

    const search = `?name=${inputName.value}&gender=${inputGender.value}`;

    const res = await fetch(`/api/update/user/${id}${search}`);
    const response = await res.json();
    console.log(response);
  });
}

window.addEventListener('load', formValidation); 
