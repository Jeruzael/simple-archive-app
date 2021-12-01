import {initializeApp} from "firebase/app";
import {getDatabase, ref, onValue} from "firebase/database";

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
		}
	}
}