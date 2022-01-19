import { useState, useEffect, useRef } from 'react';
// import { useHistory } from "react-router-dom";

import { Screen } from './Screen';

export function Login() {

    const [credentials, setCredentials] = useState({ username: '', password: '' });
    // const history = useHistory();

    const inputRef = useRef();

    useEffect(() => {
        inputRef.current.focus();
    }, [])

    const handleChange = ({ target }) => {
        const { name, value } = target;
        setCredentials({ ...credentials, [name]: value });
    }

    const onLogin = (ev) => {
        ev.preventDefault();
        try {
            // dispatch(login(credentials));
            // history.push('/toy');
        } catch (err) {
            console.log(err);
        }
    }

    return (
        <Screen>
            <section className="login">
                <i>&times;</i>
                <div className="pfp"></div>
                <form className="flex column" onSubmit={onLogin}>
                    <div className="wrapper flex column">
                        <label htmlFor="username">Username</label>
                        <input type="text" ref={inputRef} id="username" name="username" value={credentials.username} onChange={handleChange} placeholder="Enter username" required />
                    </div>

                    <div className="wrapper flex column">
                        <label htmlFor="password">Password</label>
                        <input type="password" id="password" name="password" value={credentials.password} onChange={handleChange} placeholder="Enter password" required />
                    </div>

                    <button className="align-self-start">Sign in</button>
                </form>
                <div>
                    <button>Continue with Google</button>
                </div>
                <div>
                    <button>Continue with Facebook</button>
                </div>
                <p>Not a member yet? <span>Sign up</span></p>
            </section>
        </Screen>
    )
}