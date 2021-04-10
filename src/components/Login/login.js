import React from 'react';
import GoogleButton from 'react-google-button';
import './login.css';
const Login = (props) => {
    const {email,setEmail,password,setPassword,handleLogin,handleSignUp,hasAcc,sethasAcc,emailError,passwordError,handleGoogle} = props;
    return(
        <section className="login">
            <div className="loginContainer">
                <label> Username</label>
                <input type='text' autoFocus required value={email} onChange={(e) => setEmail(e.target.value) }/>
                <p className='errorMsg'>
                {emailError}
                </p>

                <label> Password</label>
                <input type='password' autoFocus required value={password} onChange={(e) => setPassword(e.target.value) }/>
                <p className='errorMsg'>
                {passwordError}
                </p>

                <div className="btnContainer">
                    {hasAcc ? (
                        <>
                        <button onClick={handleLogin}>SignIn
                        </button>
                        <p>
                        Don't have an account ? <span onClick={() => sethasAcc(!hasAcc) } > Sign Up</span>
                        </p>
                        </>
                    ):(
                        <>
                        <button onClick={handleSignUp}>
                        SignUp
                        </button>
                        <p>
                        Have an account ? <span onClick={() => sethasAcc(!hasAcc) } >Sign In</span>
                        </p>
                        </>
                    )}
                </div>

                <hr
                style={{
                    color: 'grey',
                    backgroundColor: 'white',
                    height: 3
                }}
                 />
                    
                <div className="google-signin">
                <GoogleButton
                type="dark"
                onClick={ handleGoogle}
                /> 
                </div>  
                
            </div>  
        </section>
    );
}

export default Login;