import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "../Login.css";
import { auth } from "../firebase";

function Login() {
  const navigate =useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const signIn = (e) => {
    e.preventDefault();
    auth.signInWithEmailAndPassword(email,password)
    .then((auth)=>{
      if(auth){navigate('/')}

    })
    .catch(error=>alert(error.message))
  };
  const register = (e) => {
    e.preventDefault();
    auth
    .createUserWithEmailAndPassword(email, password)
    .then((auth) => {
      // Successfully created a user
      if(auth){navigate('/')}
    })
    .catch(error=>alert(error.message))
  };

  return (
    <div className='login'>
      <Link to='/'>
        <img
          className='login__logo'
          // src="https://www.pngfind.com/pngs/m/56-565024_amazon-logo-png-amazon-png-transparent-png.png" alt=""
          src="https://i.pinimg.com/236x/d4/9f/a3/d49fa3523c84bef766b4b2bde8296d23.jpg"
          // src='https://cdn.freelogovectors.net/wp-content/uploads/2021/10/amazon-logo-freelogovectors.net_.png'
        alt="amazone"
        />
      </Link>
      <div className='login__container'>
        <h1>Sign-In </h1>
        <form>
          <h5>E-mail </h5>
          <input
            type='text'
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <h5> Password </h5>
          <input
            type='password'
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button
            className='login__signInButton'
            type='submit'
            onClick={signIn}
          >

            Sign In
          </button>
        </form>
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit.Explicabo
          sequi provident enim, vero nisi molestiae sint.{" "}
        </p>{" "}
        <button className='login__registerButton' onClick={register}>
          {" "}
          Create Your Amazon Account{" "}
        </button>
      </div>
      {/* Let's Build a Full-Stack AMAZON Clone with REACT JS for Beginners (Full E-Comm Store in 8 Hrs) 2021 */}{" "}
      {/* Full-Stack-AMAZON-Clone-with-REACT  */}{" "}
      {/* amazon-clone-with-REACT */}
      Login{" "}
    </div>
  );
}

export default Login;
//   src= 'https://press.aboutamazon.com/system/files-encrypted/nasdaq_kms/inline-images/Amazon-logo.jpg'
