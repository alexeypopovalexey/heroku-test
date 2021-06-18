function validateForm() {
    const form = document.querySelector('.formWithValidation');
    const name = form.querySelector('.name');
    const gender = form.querySelector('.gender');
    const formControl = Array.from(form.querySelectorAll('.form-control'));

    form.addEventListener('submit', async function (event) {
        event.preventDefault();
        const regexp = /^[a-zA-Z]+$/;

        for (let i = 0; i < formControl.length; i = i + 1) {
        if (formControl[i].value === '') {
            formControl[i].classList.add('no-valid');
            return;
        }
        if (formControl[i] === name) {
            if (!regexp.test(formControl[i])) {
            formControl[i].classList.add('no-valid');
            return;
            }
        }
        if (formControl[i] === gender) {
            if (gender.value !== 'male' && gender.value !== 'female') {
            gender.classList.add('no-valid');
            return;
            }
            if (gender.value === '') {
            gender.classList.add('no-valid');
            return;
            }
        }
        if (formControl[i].value) {
            formControl[i].classList.remove('no-valid');
        }
        }
        const search = `?name=${name.value}&gender=${gender.value}`;

        await fetch(`${window.location.pathname}`);
        window.location.pathname = '/users.html';
    });
}
    window.addEventListener('load', validateForm);