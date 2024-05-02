let x = 10
x == 10 && console.log('executes') 
// checks if first statement is true then executes second statement
x != 10 && console.log('nothing executes')
x == 10 || console.log('executes first truthy statement only')
x != 10 || console.log('executes last truthy statement')
