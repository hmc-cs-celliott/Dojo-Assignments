var amount = 0.01;
var total = 0.01;
for (var i = 0; i < 30; i++) {
	amount *=2;
	total += amount;
}
console.log(total);

//the total amount was 5368709.12!
//thats a lot of money 