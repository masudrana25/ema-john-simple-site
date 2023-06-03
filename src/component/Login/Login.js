import { useContext, useState } from 'react';
import { UserContext } from '../../App';
import { useLocation, useNavigate } from "react-router-dom";
import { signInWithGooglePopup , handleSignOut, handleFBsignInClick, createUserWithEmailAndPass, signInWithEmailAndPass } from './../LoginManage/LoginManage';

function Login() {
//Login redirect to initial or old page
   const navigate = useNavigate();
    const location = useLocation();
  const from = location.state?.from?.pathname || '/';

//new topic
   const [loginUser, setLoginUser] = useContext(UserContext);
  const [newUser, setNewUser] = useState(false);

  const [user, setUser] = useState({
    isSignIn: false,
    name: '',
    email: '',
    password: '',
    photo: '',
    
  });

  const signInWithGoogle = () => {
    signInWithGooglePopup()
      .then(res => {
        handleResponse(res, true);
      });
  };
  const FBsignIn = () => {
    handleFBsignInClick()
      .then(res => {
        handleResponse(res, true);
      });
  };
  const SignOut = () => {
    handleSignOut()
      .then(res => {
        handleResponse(res, false);
      });
  };

  const handleResponse = (res, redirect) => {
    setUser(res);
    setLoginUser(res);
    if (redirect) {
      navigate(from, { replace: true });
    };
  };

  const handleSubmit = (event) => {
    if (newUser && user.email && user.password) {
      createUserWithEmailAndPass(user.name, user.email, user.password)
        .then(res => {
        setUser(res);
        setLoginUser(res);
        navigate(from, { replace: true });
      })
    };
    if (!newUser && user.email && user.password) {
      signInWithEmailAndPass(user.email, user.password)
        .then(res => {
          handleResponse(res, true);
        });
    };
    event.preventDefault();
  };

  const handleBlur = (event) => {
    // console.log(event.target.name, event.target.value);
    let isFieldCheck = true;
    if (event.target.name === 'email') {
      isFieldCheck = /\S+@\S+\.\S+/.test(event.target.value);
    };
    if (event.target.name === 'password') {
      // isFieldCheck = /(?=.*[a-zA-Z])(?=.{8,})/.test(event.target.value);
      isFieldCheck = event.target.value;
      // must contain Capital and small letter and length should be greater than 8  
    };
    if (isFieldCheck) {
      const newUserInfo = { ...user };
      newUserInfo[event.target.name] = event.target.value;
      setUser(newUserInfo);
    }
  };
  return (
    <>
      <div style={{textAlign:'center'}} className="signIn-signOut">
      <button onClick={SignOut}>Sign Out </button><br /><br /><br />
      {
        user.isSignIn ? <button onClick={SignOut}>Sign Out </button> :
          <button onClick={signInWithGoogle}>SignIn with Google </button>
      }

      {
        user.isSignIn && ( 
          <>
          <h2>Welcome, {user.name}</h2>
            <h2>Your Email : {user.email}</h2>
            <h2 className='photo-text'> <img src={user.photo} alt="" /></h2>
          </>
        )
        }
        <br />
        <button className='fb-button' onClick={FBsignIn}>Sign in Using Facebook</button>
      </div> <br /><br />

      <div style={{textAlign:'center'}} className='form-section'>
      <h1>Our Authentication System</h1>
        <form onSubmit={handleSubmit}>
          <input type="checkbox" onChange={() => setNewUser(!newUser)} name="newUser" id="" />
          <label htmlFor="newUser">New User Sign up</label><br />
          {
            newUser && <input type="text" name="name" onBlur={handleBlur} placeholder='Your Name' />
          }
          <br />
          <input type="text" onBlur={handleBlur} name="email" placeholder='Your email address' required /><br />
          <input type="password" onBlur={handleBlur} name="password" placeholder='Your Password' required /><br />
          <input type="submit" value={newUser ? 'SignUp' : 'SignIn'} />
        </form>
        <p style={{ color: 'red' }}>{user.error}</p>
        {
          user.success && <p style={{ color: 'green' }}>Sign {newUser ? 'up' : 'in'} Success</p>
        }
      </div>
    </>
  );
}

export default Login;
