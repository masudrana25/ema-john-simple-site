import { createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile, FacebookAuthProvider, signInWithRedirect,getAuth, sendEmailVerification,sendPasswordResetEmail } from "firebase/auth";
import { signInWithPopup } from "firebase/auth";
import { auth, GoogleProvider, facebookProvider } from './firebase.config';

 export const signInWithGooglePopup = () => {
    return signInWithPopup(auth, GoogleProvider)
      .then((result) => {
        const { displayName, email, photoURL } = result.user;
        const signInUser = {
          isSignIn: true,
          name: displayName,
          email: email,
          photo: photoURL,
          success: true
        };
        return signInUser;
      })
      .catch((error) => {
        // console.log(error);
        // console.log(error.message);
      })
  };

export const handleFBsignInClick = () => {
  return FacebookAuthProvider(auth, facebookProvider)
    .then((result) => {
      // The signed-in user info.
      const user = result.user;
      user.success = true;
      return user;
      // This gives you a Facebook Access Token. You can use it to access the Facebook API.
      const credential = FacebookAuthProvider.credentialFromResult(result);
      const accessToken = credential.accessToken;

      // IdP data available using getAdditionalUserInfo(result)
      // ...
    })
    .catch((error) => {
      // Handle Errors here.
      const errorCode = error.code;
      const errorMessage = error.message;
      // The email of the user's account used.
      const email = error.customData.email;
      // The AuthCredential type that was used.
      const credential = FacebookAuthProvider.credentialFromError(error);

      // ...
    });
};

   export const handleSignOut = () => {
    return auth.signOut()
      .then(() => {
        const signOut = {
          isSignIn: false,
          name: '',
          email: '',
          photo: '',
          error: '',
          success: false,
        };
        return signOut;
      })
      .catch((error) => {
        // console.log(error);
        // console.log(error.message);
      })
};
  
export const createUserWithEmailAndPass = (name, email, password) => {
  return createUserWithEmailAndPassword(auth, email, password)
    .then((res) => {
      const newUserInfo = res.user;
      newUserInfo.success = true;
      newUserInfo.error = '';
      updateUseName(name);
      verifyEmail();
      return newUserInfo;
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      const newUserInfo = {};
      newUserInfo.error = errorCode;
      newUserInfo.success = false;
      return newUserInfo;
    });
};
export const signInWithEmailAndPass = (email, password) => {
  return signInWithEmailAndPassword(auth, email, password)
    .then((res) => {
      const newUserInfo = res.user;
      newUserInfo.success = true;
      newUserInfo.error = '';
      return newUserInfo;
    })  
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      const newUserInfo = {};
      newUserInfo.error = errorCode;
      newUserInfo.success = false;
      return newUserInfo;
    });
};

const updateUseName = name => {
  updateProfile(auth.currentUser, {
    displayName: name,
  })
    .then(() => {
      console.log('user name updated successfully',);
    })
    .catch((error) => {
      console.log(error);
    });
};

const verifyEmail = () => {
  const auth = getAuth();
  sendEmailVerification(auth.currentUser)
    .then(() => {
      // Email verification sent!
      // ...
    });
};

export const resetPassword = email => {
        const auth = getAuth();
        sendPasswordResetEmail(auth, email)
          .then(() => {
            // Password reset email sent!
            // ..
          })
          .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            // ..
          });
}