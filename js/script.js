const transactionsUl = document.querySelector('transactions')



const dummyTransactions = [
    {id : 1, name : 'Bolo de brigadeiro', amount: -20},
    {id : 2, name : 'Salario', amount: 30},
    {id : 3, name : 'Bolo de Limao', amount: -20},
    {id : 3, name : 'Violao', amount: 150}
]

const addTransactionIntoDom = transaction => {
    const operator = transaction.amount < 0 ? 'minus' : 'plus'; 

    console.log(operator);
}

addTransactionIntoDom(dummyTransactions[1]);