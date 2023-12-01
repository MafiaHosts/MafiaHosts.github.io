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
