  import { initializeApp } from "https://www.gstatic.com/firebasejs/12.11.0/firebase-app.js";
  import { getAuth , createUserWithEmailAndPassword , signInWithEmailAndPassword , onAuthStateChanged , signOut } from "https://www.gstatic.com/firebasejs/12.11.0/firebase-auth.js";
  
  const firebaseConfig = {
    apiKey: "AIzaSyAFmkXBUPWCvVl-WqCagZ75q2fBgByncq4",
    authDomain: "note-application-21425.firebaseapp.com",
    projectId: "note-application-21425",
    storageBucket: "note-application-21425.firebasestorage.app",
    messagingSenderId: "528218143475",
    appId: "1:528218143475:web:26663093a283cb9a4d1586"
  };

  
  const app = initializeApp(firebaseConfig);
  const auth = getAuth(app)


  let Signuphandler = (email,password)=>{

    if (!email || !password) {
        alert('Required Email and Password!')
        return
    }

   createUserWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    window.location.href = 'Login.html'
  })
  .catch((error) => {
    console.log(error.code);
    console.log(error.message);
  });
}

  let Loginhandler = (email,password)=>{
    
    if (!email || !password) {
        alert('Required Email and Password!')
        return
    }

signInWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    const user = userCredential.user;

    if (user) {
        alert('Login successfully!')
        window.location.href = 'index.html'
    }
  })
  .catch((error) => {
    console.log(error.code);
    console.log(error.message);
  });
}


  let Currentuser = ()=>{
    
onAuthStateChanged(auth, (user) => {
  if (user) {
    
    const uid = user.uid;
    window.location.href = 'index.html'
    
  } else {
    
  }
});
  }

  let Logouthandler = ()=>{
    
   signOut(auth).then(() => {

    window.location.href = 'Login.html'
  
}).catch((error) => {
  console.log('error',error);
  
});
  }

  export{Signuphandler, Loginhandler , Currentuser , Logouthandler}
