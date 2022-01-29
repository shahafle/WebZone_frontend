import { useState, useEffect, useRef } from 'react';
import { useDispatch } from 'react-redux';

import { onSignup, onLogin } from '../store/user.action';
import { shouldShowLogin } from '../store/system.action';

import userProfile from '../../assets/imgs/user.png';

import { FcGoogle } from 'react-icons/fc'
import { FaFacebookF } from 'react-icons/fa'

import { Screen } from './Screen';

export function Login() {

    const [isLogin, setIsLogin] = useState(true);
    const [credentials, setCredentials] = useState({ username: '', password: '', nickname: '' });

    const dispatch = useDispatch();
    const inputRef = useRef();

    useEffect(() => {
        inputRef.current.focus();
    }, [])

    const handleChange = ({ target }) => {
        const { name, value } = target;
        setCredentials({ ...credentials, [name]: value });
    }

    const handleSubmit = (ev) => {
        ev.preventDefault();

        try {
            //  Login
            if (isLogin) {
                delete credentials.nickname;
                dispatch(onLogin(credentials));
            }
            //  Signup
            if (!isLogin) {
                dispatch(onSignup(credentials));
            }

            setCredentials({ username: '', password: '', nickname: '' });
            dispatch(shouldShowLogin(false));
        } catch (err) {
            console.log(err);
        }
    }

    const setSignup = (ev) => {
        ev.stopPropagation();
        setIsLogin(false)
    }

    const setLogin = (ev) => {
        ev.stopPropagation();
        setIsLogin(true)
    }


    return (
        // screen gets a callback function to hide itself
        <Screen cb={() => dispatch(shouldShowLogin(false))}>
            {/* section gets a simple cb to stop propagating and hiding the screen where unwanted */}
            <section className="login" onClick={ev => ev.stopPropagation()}>
                <i className="flex justify-center align-center" onClick={() => dispatch(shouldShowLogin(false))}>&times;</i>
                <div className="pfp">
                    <img src={userProfile} alt="" />
                </div>
                <form className="flex column" onSubmit={handleSubmit}>
                    <div className="wrapper flex column">
                        <label htmlFor="username">Username</label>
                        <input type="text" ref={inputRef} id="username" name="username" value={credentials.username} onChange={handleChange} placeholder="Enter username" required />
                    </div>

                    <div className="wrapper flex column">
                        <label htmlFor="password">Password</label>
                        <input type="password" id="password" name="password" value={credentials.password} onChange={handleChange} placeholder="Enter password" required />
                    </div>

                    {!isLogin && <div className="wrapper flex column">
                        <label htmlFor="nickname">Nickname</label>
                        <input type="text" id="nickname" name="nickname" value={credentials.nickname} onChange={handleChange} placeholder="Enter nickname" required />
                    </div>}

                    <button className="align-self-start">{isLogin ? 'Sign in' : 'Sign up'}</button>
                </form>
                <div className="google-login flex align-center">
                    <div className="icon flex justify-center align-center"><FcGoogle /></div>
                    <button>Continue with Google</button>
                </div>
                <div className="facebook-login flex align-center">
                    <div className="icon flex justify-center align-center"><FaFacebookF /></div>
                    <button>Continue with Facebook</button>
                </div>
                {isLogin && <p>Don't have an account yet? <span onClick={setSignup}>Sign up</span></p>}
                {!isLogin && <p>Already have an account? <span onClick={setLogin}>Login</span></p>}
            </section>
        </Screen>
    )
}