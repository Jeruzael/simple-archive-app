import {initializeApp} from "firebase/app";
import {getDatabase, ref, onValue, child, push, update} from "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyDd0PTOLxQr3_KHMH7IcfTsfTfNHa1C5l8",
  authDomain: "simple-archive-app.firebaseapp.com",
  projectId: "simple-archive-app",
  storageBucket: "simple-archive-app.appspot.com",
  messagingSenderId: "183155358943",
  appId: "1:183155358943:web:03dd0f37e13ffa1dcf7d6a",
  databaseURL: "https://simple-archive-app-default-rtdb.asia-southeast1.firebasedatabase.app/"
}

let app = initializeApp(firebaseConfig);
let db = getDatabase();
let dbRef = ref(db);
let dbRefStud = ref(db, 'Users/Student');
let dbRefOut = ref(db, 'Users/outsider');
let dbRefAdmin = ref(db, 'Administrator');
let dbRefAdminProf = ref(db, 'Administrator/professors');
let dbRefThesisBooks = ref(db, 'ThesisBooks');

export const battery = {	
	database: ()=>{
		console.log(db);
	},
	databaseRef: ()=>{
		console.log(dbRef);
	},

	Users: {
		getUsers: ()=>{
			onValue(dbRefStud, (snapshot)=>{
				const data = snapshot.val();
				for(let i in data){
					console.log(i);
				}
			});
		},

		getOutUsers: ()=>{
			onValue(dbRefOut, (snapshot)=>{
				const data = snapshot.val();
				for(let i in data){
					console.log(i);
				}
			});
		},

		addUser: (email, pass, fn, mn, ln, yrSec, studIDNum)=>{
			const data = {
				email: email,
				password: pass,
				firstname: fn,
				middlename: mn,
				lastname: ln,
				yearSection: yrSec,
				studentIDNumber: studIDNum
			}

			const newKey = push(child(dbRef, 'Users/Student')).key;

			const updates = {};
			updates['/Users/Student/Stud'+ newKey] = data;

			return update(dbRef, updates);
		},

		editUserFirstname: (userID, fn)=>{
			const updates = {}
			updates['Users/Student/'+ userID + '/firstname'] = fn;
			return update(dbRef, updates);			
		},

		editUserLastname: (userID, ln)=>{
			const updates = {}
			updates['Users/Student/'+ userID + '/lastname'] = ln;
			return update(dbRef, updates);			
		},

		editUserMiddlename: (userID, mn)=>{
			const updates = {}
			updates['Users/Student/'+ userID + '/middlename'] = mn;
			return update(dbRef, updates);			
		},

		editUserPassword: (userID, pass)=>{
			const updates = {}
			updates['Users/Student/'+ userID + '/password'] = pass;
			return update(dbRef, updates);			
		},
		
		addOutUser: (email, pass, fn, mn, ln)=>{
			const data = {
				email: email,
				password: pass,
				firstname: fn,
				middlename: mn,
				lastname: ln		
			}

			const newKey = push(child(dbRef, 'Users/outsider')).key;

			const updates = {};
			updates['/Users/outsider/OUT-'+ newKey] = data;

			return update(dbRef, updates);
		},

		editOutUserFirstname: (userID, fn)=>{
			const updates = {}
			updates['Users/outsider/'+ userID + '/firstname'] = fn;
			return update(dbRef, updates);			
		},

		editOutUserLastname: (userID, ln)=>{
			const updates = {}
			updates['Users/outsider/'+ userID + '/lastname'] = ln;
			return update(dbRef, updates);			
		},

		editOutUserMiddlename: (userID, mn)=>{
			const updates = {}
			updates['Users/outsider/'+ userID + '/middlename'] = mn;
			return update(dbRef, updates);			
		},

		editOutUserPassword: (userID, pass)=>{
			const updates = {}
			updates['Users/outsider/'+ userID + '/password'] = pass;
			return update(dbRef, updates);			
		}

	},

	Administrator: {
		getAdmins: ()=>{
			onValue(dbRefAdmin, (snapshot)=>{
				const data = snapshot.val();
				for(let i in data){
					console.log(i);
				}
			});
		},

		getAdminProf: ()=>{
			onValue(dbRefAdminProf, (snapshot)=>{
				const data = snapshot.val();
				for(let i in data){
					console.log(i);
				}
			});
		},

		addProf: (email, pass, fn, mn, ln, profID)=>{
			const data = {
				email: email,
				password: pass,
				firstname: fn,
				middlename: mn,
				lastname: ln,
				profID: profID
			}

			let newKey = push(child(dbRef, 'Administrator/professors')).key;

			const updates = {}
			updates['Administrator/professors/PROF'+newKey] = data;

			return update(dbRef, updates);
		},

		editProfFirstname: (profID, fn)=>{
			const updates = {}
			updates['Administrator/professors/'+ profID + '/firstname'] = fn;
			return update(dbRef, updates);			
		},

		editProfLastname: (profID, ln)=>{
			const updates = {}
			updates['Administrator/professors/'+ profID + '/lastname'] = ln;
			return update(dbRef, updates);			
		},

		editProfMiddlename: (profID, mn)=>{
			const updates = {}
			updates['Administrator/professors/'+ profID + '/middlename'] = mn;
			return update(dbRef, updates);			
		},

		editProfPassword: (profID, pass)=>{
			const updates = {}
			updates['Administrator/professors/'+ profID + '/password'] = pass;
			return update(dbRef, updates);			
		}
	},

	ThesisBooks: {
		getBooks: ()=>{
			onValue(dbRefThesisBooks, (snapshot)=>{
				const data = snapshot.val();
				for(let i in data){
					console.log(i);
				}
			});
		},
		addBook: (title, author, description)=>{
			const data = {
				title: title,
				author: author,
				description: description
			}

			let newKey = push(child(dbRef, 'ThesisBooks')).key;

			const updates = {}
			updates['ThesisBooks/Book' + newKey] = data;

			return update(dbRef, updates);
		},

		editBookTitle: (bookID, title)=>{
			const updates = {}
			updates['ThesisBooks/'+bookID+'/title'] = title;
			return update(dbRef, updates);
		},

		editBookAuthor: (bookID, author)=>{
			const updates = {}
			updates['ThesisBooks/'+bookID+'/author'] = author;
			return update(dbRef, updates);
		}
	}
}