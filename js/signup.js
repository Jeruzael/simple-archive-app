import {battery} from "/js/battery.js";

export class signupMe {	
	constructor(email, password){
		this.email = email;
		this.password = password;

	}

	sample(){
		//battery.database();
		//battery.databaseRef();		
		//console.log(battery.Users.user1);
		//battery.Users.getUsers();
		battery.Users.getOutUsers();
		//battery.Administrator.getAdmins();
		//battery.ThesisBooks.getBooks();
	}
}