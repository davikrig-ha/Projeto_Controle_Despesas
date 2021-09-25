const transactionsUl = document.querySelector('#transactions'); 

const moneyPlusDisplay = document.querySelector('#money-plus'); 

const moneyMinusDisplay = document.querySelector('#money-minus'); 

const balanceDisplay = document.querySelector('#balance'); 

const inputTransactionName = document.querySelector('#text'); 

const inputTransactionAmount = document.querySelector('#amount'); 

const formulario = document.querySelector('#form');

let dummyTransactions = [
 
]

 // metodos para remover uma transacao da lista
const removeTransaction = ID => {
    dummyTransactions = dummyTransactions.filter(transaction => transaction.id !== ID);
   
    init();
}

const addTransactionIntoDom = transaction => {
    const operator = transaction.amount < 0 ? '-' : '+';
    const amountWithoutOperator = Math.abs(transaction.amount);
    const CSSclass = transaction.amount < 0 ? 'minus' : 'plus';
    const li = document.createElement('li');
    li.classList.add(CSSclass);

    li.innerHTML = `
    ${transaction.name} <span> ${operator} R$ ${amountWithoutOperator} </span> 
    <button class="delete-btn" onClick="removeTransaction(${transaction.id})">x</button>
    `

    transactionsUl.append(li);
}

const updateBalanceValues = () => {

    //atualiza os valores de receita, despesa e saldo

    const transactionAmounts = dummyTransactions.map(transaction => transaction.amount);

    const total = transactionAmounts.reduce((acumulator, transaction) => acumulator + transaction, 0).toFixed(2);

    const income = transactionAmounts.filter(values => values > 0).reduce((acumulator, values) => acumulator + values,0).toFixed(2);

    const expense = transactionAmounts.filter(values => values < 0).reduce((acumulator, values) => acumulator - values, 0).toFixed(2);

    balanceDisplay.textContent = `R$ ${total}`
    moneyPlusDisplay.textContent = `R$ ${income}`
    moneyMinusDisplay.textContent = `R$ ${expense}`
}



//preenche a pagina

const init = () =>{
    transactionsUl.innerHTML = '';
    dummyTransactions.forEach(addTransactionIntoDom);
    updateBalanceValues();

}

init();


//gera um id

const generateID = () => Math.round(Math.random() * 1000)

form.addEventListener('submit', event => {
   
    event.preventDefault();

     /* Ouve o submit do form para verificar se inputs estão
        preenchidos e adicionar no array de transações */

    const transactionName = inputTransactionName.value.trim()
    const transactionAmount = inputTransactionAmount.value.trim()
  
    if (transactionName === '' || transactionAmount === '')
    { alert('Por favor, Informe os valores e o nome da transação!'); 
    return}



    // Cria o objeto
    const transaction = { 
        id: generateID(), 
        name: transactionName, 
        amount: Number(transactionAmount)
      }    

      dummyTransactions.push(transaction);
      init();
      
      transactionName.value = '';
      transactionAmount.value = '';


        //Limpa os inputs
     transactionName.value = ''
     transactionAmount.value = ''

});

   