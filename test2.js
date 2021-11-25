
const obj2 = {
	message: "object 2",
	sender: "allan",
	number: 586,
};

exports.message = obj2.message;

exports.say = function(){
	console.log(obj2);
}