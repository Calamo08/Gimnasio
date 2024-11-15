const form = document.getElementById('register');

form.addEventListener('submit', (event) => {
  event.preventDefault();

  const username = document.getElementById('InputUserName').value;
  const email = document.getElementById('InputEmail').value;
  const password = document.getElementById('InputPassword').value;

  if (username === '' || email === '' || password === '') {
    alert('Por favor, completa todos los campos.');
    return;
  }

  console.log('Datos enviados:', username, email, password);

});