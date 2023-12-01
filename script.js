// Function to register a new user
function registerUser() {
  const username = document.getElementById('usernameInput').value;
  const userExists = localStorage.getItem(username);

  if (userExists) {
    alert('Username already exists!');
  } else {
    localStorage.setItem(username, JSON.stringify({ balance: 0 }));
    login(username);
  }
}

// Function to log in the user
function loginUser() {
  const username = document.getElementById('usernameInput').value;
  const user = JSON.parse(localStorage.getItem(username));

  if (user) {
    login(username);
  } else {
    alert('User not found. Please register.');
  }
}

// Function to perform login actions
function login(username) {
  localStorage.setItem('loggedInUser', username);
  const user = JSON.parse(localStorage.getItem(username));
  document.getElementById('loggedInUser').innerText = `Logged in as ${username}`;
  document.getElementById('authSection').classList.add('hidden');
  document.getElementById('userSection').classList.remove('hidden');

  if (user) {
    document.getElementById('balanceCount').innerText = user.balance;
  }
}


// Function to update user balance and persist it
function updateBalance(points) {
  const loggedInUser = localStorage.getItem('loggedInUser');
  let user = JSON.parse(localStorage.getItem(loggedInUser));

  if (user) {
    user.balance += points;
    localStorage.setItem(loggedInUser, JSON.stringify(user));
    document.getElementById('balanceCount').innerText = user.balance;
  }
}

// Check if the user is logged in already
const loggedInUser = localStorage.getItem('loggedInUser');
if (loggedInUser) {
  login(loggedInUser);
}


// ... (previous code)

// Function to claim a reward
function claimReward(points) {
  const loggedInUser = localStorage.getItem('loggedInUser');
  let user = JSON.parse(localStorage.getItem(loggedInUser));

  if (user && user.balance >= points) {
    user.balance -= points;
    localStorage.setItem(loggedInUser, JSON.stringify(user));
    document.getElementById('balanceCount').innerText = user.balance;
    alert('Congratulations! You claimed the reward.');
  } else {
    alert('Insufficient points to claim this reward.');
  }
}

// ... (previous code)


let balance = 0;

function updateBalance(count) {
  document.getElementById('balanceCount').innerText = count;
}

function addPoints(points) {
  balance += points;
  updateBalance(balance);
}

function registerPoints(points) {
  balance += points;
  updateBalance(balance);
}

function claimReward(pointsNeeded) {
  if (balance >= pointsNeeded) {
    balance -= pointsNeeded;
    updateBalance(balance);
    alert('Congratulations! You claimed the reward.');
  } else {
    alert('Insufficient points to claim this reward.');
  }
}
