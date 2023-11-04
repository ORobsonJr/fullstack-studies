/**
 2. Calculadora de Idade: Escreva uma função que receba o ano de 
 nascimento de uma pessoa e retorne sua idade.
*/

function return_age(birth_date){
    var date = new Date;
    var current_date = date.getFullYear();
    
    // Return age
    return current_date - birth_date;
}

var birth_date_ = parseInt(prompt('Digite o ano que você nasceu: '));

console.log(return_age(birth_date_));



/*
Note:To run this script, try through browser console
*/