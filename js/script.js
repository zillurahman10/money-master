// calculate

document.getElementById('calculate-btn').addEventListener('click', function () {
    const totalExpenses = document.getElementById('total-expenses')
    const incomeInput = document.getElementById('income');
    console.log(typeof incomeInput.value);
    // alert for 
    if (parseFloat(incomeInput.value) < 0 || typeof incomeInput.value == 'string') {
        alert("Please enter a valid number")
        // console.log();
    }
    else {


        // food
        const foodInput = document.getElementById('food')
        const foodInputValue = foodInput.value;
        const foodInputAmount = parseFloat(foodInputValue)
        //rent
        const rentInput = document.getElementById('rent')
        const rentInputValue = rentInput.value;
        const rentInputAmount = parseFloat(rentInputValue)
        //clothes
        const clothInput = document.getElementById('clothes')
        const clothInputValue = clothInput.value;
        const clothInputAmount = parseFloat(clothInputValue)
        //expenses
        const expenses = foodInputAmount + rentInputAmount + clothInputAmount
        totalExpenses.innerText = expenses
        // update balance
        const balanceText = document.getElementById('balance');
        const balance = incomeInput.value - expenses;
        balanceText.innerText = balance;
    }
});



// save
document.getElementById('save-btn').addEventListener('click', function () {
    const saveInput = document.getElementById('save');
    if (parseFloat(save.value) < 0) {
        alert("Please enter a valid number")
    }
    else {
        const incomeInput = document.getElementById('income');
        const savingAmountText = document.getElementById('savingAmount')
        const savingAmount = parseFloat(savingAmountText.innertext)
        const saving = incomeInput.value / saveInput.value
        savingAmountText.innerText = saving;

        // Remaining balance
        const remainingBalance = document.getElementById('remaining-balance')
        remainingBalance.innerText = balance.innerText - saving;
    }

})