import React,{useState,useEffect} from 'react';
import firebase from "firebase";
import fire from './firebase';
import Login from './components/Login/login';
import HomePage from './components/HomePage/homepage';
import './App.css';

const App = () => {
  const [user,setUser] = useState(''); 
  const [password,setPassword] = useState('');
  const [email,setEmail] = useState('');
  const [emailError,setemailError] =useState('');
  const [passwordError,setpasswordError] =useState('');
  const [hasAcc,sethasAcc] = useState(false);

  const clearInputs = () => {
    setEmail('');
    setPassword('');
  }

  const clearErrors= () => {
    setemailError('');
    setpasswordError('');
  }

  const handleLogin = () =>{
    clearErrors();
    fire
    .auth()
    .signInWithEmailAndPassword(email,password)
    .catch(err => {
      switch(err.code){
        case "auth/invalid-email":
        case "auth/user-disabled":
        case "auth/user-not-found":
          setemailError(err.message);
          break;
        case "auth/wrong-password":
          setpasswordError(err.message);
          break;
        
      }
    })
  }

  const handleSignUp = () => {
    clearErrors();
    fire
    .auth()
    .createUserWithEmailAndPassword(email,password)
    .catch(err => {
      switch(err.code){
        case "auth/email-already-in-use":
        case "auth/invalid-email":
          setemailError(err.message);
          break;
        case "auth/weak-password":
          setpasswordError(err.message);
          break;
        
      }
    })
  }

  const handleLogout = () => {
    fire.auth().signOut();
  }

  const authListener = () => {
    fire.auth().onAuthStateChanged(user => {
      if(user){
        clearInputs();
        setUser(user);
      }else{
        setUser('');
      }
    })
  }

  const handleLoginWithGoogle = () => {
    var provider =  new firebase.auth.GoogleAuthProvider();

    fire
    .auth()
    .signInWithPopup(provider);
  }

  useEffect(()=>{
    authListener();
  },[])

  return (
    <div className="App">
      {
        user ? (      <HomePage handleLogout={handleLogout} user={user} />
          ) :
          (
            <Login email={email} setEmail={setEmail} password={password} setPassword={setPassword}
        handleLogin={handleLogin} handleSignUp={handleSignUp} hasAcc={hasAcc} sethasAcc={sethasAcc}
        emailError={emailError} passwordError={passwordError} handleGoogle={handleLoginWithGoogle}
      />
          )
      }
      
    </div>
  );
}

export default App;
