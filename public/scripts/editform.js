function main() {
  const form = document.querySelector('form');
  const userName = document.querySelector('[name="name"]');
  const userGender = document.querySelector('[name="gender"]');
  const arrInputs = Array.from(form.querySelectorAll('.form-control'));

  form.addEventListener('submit', async (event) => {
    event.preventDefault();

    const volidName = /^([A-Za-z])/;

    arrInputs.forEach((element) => {

      if (!element.value) {
        element.classList.add('is-invalid');
        element.placeholder = 'This is not volid'
        return
      }

      if (element === userName) {
        if (!volidName.test(userName.value)) {
          element.classList.add('is-invalid');
          alert(`Your name isn't volid`)
          return
        }
      }

      if (element === userGender) {
        if (userGender.value !== 'female' && userGender.value !== 'male') {
        element.classList.add('is-invalid');
        alert(`Your gender isn't volid`)
        return
      }
      }
      if (element.value) {
        element.classList.remove('is-invalid');
      }
    })

  await fetch(`http://localhost:9090/users.html`);
    
    
  });
}

window.addEventListener('load', main);  
