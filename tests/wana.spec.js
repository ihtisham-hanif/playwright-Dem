 var army=[12,13,14,15,16]
 console.log(army)
 console.log(army.lastIndexOf(14))
 console.log(army[4])
 army[4]= 36
 console.log(army)
console.log(army[4])
console.log(army.length)
army.push(210)
army.push(212)
army.push(214)
console.log(army)
army.pop()
console.log(army)
army.unshift(001)
console.log(army)

//check specific element is present in array 
console.log(army.includes(2122))
var sum=0
for(let i=0; i<army.length;i++){
 console.log( army[i])
sum=sum+army[i]
console.log(sum)}
