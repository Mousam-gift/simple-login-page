function showSignup() {
  document.getElementById('loginBox').style.display = 'none';
  document.getElementById('signupBox').style.display = 'block';
}

function showLogin() {
  document.getElementById('signupBox').style.display = 'none';
  document.getElementById('loginBox').style.display = 'block';
}

function login() {
  const email = document.getElementById('loginEmail').value;
  const password = document.getElementById('loginPassword').value;
  if (email && password) {
    alert('Login successful (Demo)');
  } else {
    alert('Please enter email and password.');
  }
}

function register() {
  const name = document.getElementById('signupName').value;
  const email = document.getElementById('signupEmail').value;
  const password = document.getElementById('signupPassword').value;
  const confirm = document.getElementById('signupConfirm').value;
  if (!name || !email || !password || !confirm) {
    alert('All fields are required.');
    return;
  }
  if (password !== confirm) {
    alert('Passwords do not match.');
    return;
  }
  alert('Registration successful (Demo)');
}
