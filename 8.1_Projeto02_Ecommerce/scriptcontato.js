const form = document.getElementById('contact-form');

form.addEventListener('submit', (e) =>{
    e.preventDefault();
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;
    console.log(`Noe: ${name}, E-mail: ${email}, Mensagem: ${message}`);
});