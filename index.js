/*1․ Գրել ֆունկցիաներ, որը համապատսխանաբար կանի 2 թվերի գումարում, հանում, բաժանում, բազմապատկում, ֆունկցիաները կանչել ուրիշ ֆայլից։ 
2. Install անել վալիդացիա ստուգող package,  որոնք կստուգեն՝ արդյոք տվյալ փոփոխականը URL է։
3. Install անել վալիդացիա ստուգող package,  որոնք կստուգեն՝ արդյոք տվյալ փոփոխականը Credit card է։
4. array = [5, 10, 67, -1, 34] գրել ֆունկցիա, որը կվերադարձնի ամենամեծ արժեքը
5. Գրել մեթոդ, որը կստեղծի example.txt ֆայլ, սկզբում կգրի ինչ է ձեր անունը, հետո կավելացնի թե որ քաղաքում է բնակվում
*/
let fn = require('./methods');
var validator = require('validator');

function task1(p1, p2){
   console.log("Գումար "+ fn.sum(p1, p2), ", Տարբերություն " +fn.difference(p1, p2), ", Քանորդ "+fn.division(p1, p2), ", Արտադրյալ" +fn.multiplication(p1, p2))
}

function task2(pUrl){
  return validator.isURL(pUrl)
}

function task3(pCreditCard){
   return validator.isCreditCard(pCreditCard)
}

function task4(pArray) {
   return  Math.max(...pArray)
}

function task5(pName, pCity){
   const fs = require('fs')
   fs.writeFileSync('example.txt', pName+ " ")
   fs.appendFileSync('example.txt', pCity)
 }

task1(5, 3)
console.log(task2('https://github.com/validatorjs/validator.js'));
console.log(task3("4539415755003656"))
console.log(task4([5, 10, 67, -1, 34]))
task5("Varduhi", "Gyumri")
console.log(task4V2([5, 10, 67, -1, 34]))

function task4V2(pArry){
   let max = pArry[0]
   for (let i = 0; i < pArry.length; i++) {
       if (pArry[i] > max) {
          max = pArry[i]
    }
   }
   return max
}
