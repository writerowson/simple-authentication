import app from './firebase.init';
import './App.css';
import { getAuth, GoogleAuthProvider, signInWithPopup, signOut } from "firebase/auth"
import { useState } from 'react'


const auth = getAuth(app)

function App() {
  const [user, setUser] = useState({})
  const googleProvider = new GoogleAuthProvider()
  const gitHubProvider = new GoogleAuthProvider()


  const handleGoogleSignIn = () => {
    signInWithPopup(auth, googleProvider)
      .then(result => {
        const user = result.user
        console.log(user)
        setUser(user)
      })
      .catch(error => {
        console.error('error', error)
      })
  }
  const handleGitHubSignIn = () => {
    signInWithPopup(auth, gitHubProvider)
      .then(result => {
        const user = result.user
        console.log(user);
        setUser(user)
      })
      .catch(error => {
        console.error(error);
      })
  }


  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        setUser({})
      })
      .catch(error => {
        setUser({})
      })

  }
  return (
    <div className="App">

      {/* condition?true:false */}
      {
        user.email ? <button onClick={handleSignOut}> Sign out</button> :
          <div>
            <button onClick={handleGoogleSignIn}>Google sign in </button>
            <button onClick={handleGitHubSignIn}>Sign in with gitHub</button>
          </div>
      }
      <h2>Name : {user.displayName}</h2>
      <h2>Email : {user.email}</h2>
      <img src={user.photoURL} alt="" />

    </div>
  );
}

export default App;
