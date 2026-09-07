let contactform = document.getElementById('contact-form');
let errorname = document.getElementById('error-name');
let erroremail = document.getElementById('error-email');
let errorphone = document.getElementById('error-phonenumer');
let errormessage = document.getElementById('error-message');

contactform.addEventListener('submit', (e) => {
    e.preventDefault();

    let name = document.getElementById('name').value;
    let email = document.getElementById('email').value;
    let phone = document.getElementById('phonenumber').value;
    let message = document.querySelector('#message').value;

    if (name.trim() === '') {
        errorname.innerHTML = 'please enter you name';
        return;
    }


    else if (email.trim() === '') {
        erroremail.innerHTML = 'please enter you email';
        return;
    }

    else if (phone.trim() === '') {
        errorphone.innerHTML = 'please enter you phone';
        return;
    }

    else if (message.trim() === '') {
        errormessage.innerHTML = 'please enter you message';
        return;
    }

    else {
        errorname.innerHTML = '';
        erroremail.innerHTML = '';
        errorphone.innerHTML = '';
        errormessage.innerHTML = '';
    }

    let newData = {
        name, email, phone, message
    }

    let data1 = JSON.parse(localStorage.getItem('FormData')) || [];

    data1.push(newData);


    localStorage.setItem('FormData', JSON.stringify(data1));

    e.target.reset();

    console.log(data1);
})