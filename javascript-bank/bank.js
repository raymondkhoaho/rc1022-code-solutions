/* exported Bank */
function Bank() {
  this.nextAccountNumber = 1;
  this.accounts = [];
}

Bank.prototype.openAccount = function (holder, balance) {
  if (balance > 0 && Number.isInteger(balance)) {
    var currentAccount = new Account(this.nextAccountNumber, holder);
    currentAccount.deposit(balance);
    this.accounts.push(currentAccount);
    var currentAccountNumber = this.nextAccountNumber;
    this.nextAccountNumber++;
    return currentAccountNumber;
  } else {
    return null;
  }
};

Bank.prototype.getAccount = function (number) {
  for (var k = 0; k < this.accounts.length; k++) {
    if (this.accounts[k].number === number) {
      return this.accounts[k];
    }
  } return null;
};

Bank.prototype.getTotalAssets = function () {
  var totalBalance = 0;
  for (var l = 0; l < this.accounts.length; l++) {
    var currentAccountBalance = this.accounts[l].getBalance();
    totalBalance += currentAccountBalance;
  }
  return totalBalance;
};
