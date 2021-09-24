const transactionsUl = document.querySelector('#transactions'); 

const moneyPlusDisplay = document.querySelector('#money-plus'); 

const moneyMinusDisplay = document.querySelector('#money-minus'); 

const balanceDisplay = document.querySelector('#balance'); 

const inputTransactionName = document.querySelector('#name'); 

const inputTransactionAmount = document.querySelector('#amount'); 


const dummyTransactions = [
    {id : 1, name : 'Bolo de brigadeiro', amount: -20},
    {id : 2, name : 'Salario', amount: 30},
    {id : 4, name : 'Bolo de Limao', amount: -20},
    {id : 5, name : 'Violao', amount: 150},
    {id : 6, name : 'Guitarra', amount: 200}
]

const addTransactionIntoDom = transaction => {
    const operator = transaction.amount < 0 ? '-' : '+';
    const amountWithoutOperator = Math.abs(transaction.amount);
    const CSSclass = transaction.amount < 0 ? 'minus' : 'plus';
    const li = document.createElement('li');
    li.classList.add(CSSclass);

    li.innerHTML = `
    ${transaction.name} <span> ${operator} R$ ${amountWithoutOperator} </span> 
    <button class="delete-btn">x</button>
    `

    transactionsUl.append(li);
}

const updateBalanceValues = () => {
    const transactionAmounts = dummyTransactions.map(transaction => transaction.amount);

    const total = transactionAmounts.reduce((acumulator, transaction) => acumulator + transaction, 0).toFixed(2);

    const income = transactionAmounts.filter(values => values > 0).reduce((acumulator, values) => acumulator + values,0).toFixed(2);

    const expense = transactionAmounts.filter(values => values < 0).reduce((acumulator, values) => acumulator - values, 0).toFixed(2);

    balanceDisplay.textContent = `R$ ${total}`
    moneyPlusDisplay.textContent = `R$ ${income}`
    moneyMinusDisplay.textContent = `R$ ${expense}`
}




const init = () =>{
    dummyTransactions.forEach(addTransactionIntoDom);
    updateBalanceValues();

}

init();