import {battery} from "/js/battery.js";
import {generator} from "/js/uniqueIDGenerator.js";

export class signupMe {	
	constructor(sessionNo){
		this.sessionNo = sessionNo;
	}

	sample(){
		//battery.database();
		//battery.databaseRef();		
		//console.log(battery.Users.user1);
		//battery.Users.getUsers();
		//battery.Users.getOutUsers();
		//battery.Administrator.getAdmins();
		//battery.ThesisBooks.getBooks();
		//battery.Users.addUser('lods@gmail.com','aspdojapsod', 'jojo', 'kindred', 'luminus', 'bscs12345');
		//battery.Users.addOutUser('lods@gmail.com','aspdojapsod', 'jojo', 'kindred', 'luminus');
		//battery.Administrator.getAdminProf();
		//battery.Administrator.addProf('jejo@gmail.com','asdasdas','jejo','sy','marbinay','BSCS13574635');
		//battery.ThesisBooks.addBook('dinasoup','ben','soup made from dinasour flesh');
		//battery.ThesisBooks.editBookTitle();
		//battery.ThesisBooks.editBookAuthor();
		//battery.Users.editOutUserFirstname('OUT--MporHqisi7WX-A15HLH', 'Jomar');
		//battery.Users.editOutUserLastname('OUT--MporHqisi7WX-A15HLH', 'lastnameChanged');
		//battery.Users.editOutUserMiddlename('OUT--MporHqisi7WX-A15HLH', 'middlenameChnged');
		//battery.Users.editOutUserPassword('OUT--MporHqisi7WX-A15HLH', 'JpasswordChanged');
		//battery.Administrator.editProfFirstname('PROF-MpouYOy4p6jYrNQlR61', 'firstnameChanged');
		//battery.Administrator.editProfLastname('PROF-MpouYOy4p6jYrNQlR61', 'lastnameChanged');
		//battery.Administrator.editProfMiddlename('PROF-MpouYOy4p6jYrNQlR61', 'middlenameChnged');
		//battery.Administrator.editProfPassword('PROF-MpouYOy4p6jYrNQlR61', 'JpasswordChanged');
		
	}



	signupNewUser(email, pass, retyped, fn, ln, yrSec, studID){		

		if(pass.value == retyped.value){
			battery.Users.addUser(email.value, pass.value, fn.value, '', ln.value, yrSec.value, studID.value);
			console.log(pass.value, retyped.value);
		}else{
			pass.value = "";
			retyped.value = "";
			alert('password missmatched');
		}	
	}
}