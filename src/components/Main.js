
import { useRef } from 'react';
import '../styles/Main.css';

function Main(props) {

    const loginRef = useRef();
    const passRef = useRef();


    function login(e) {
        e.preventDefault();
        const login = loginRef.current.value;
        const password = passRef.current.value;

        props.login(login, password)
        .then((res) => {
            console.log(res);
        })
        .catch((er) => {
            console.log(er);
        })

    }
  return (
    <div className="main">
    <form className='form' onSubmit={login} >
        <h2>Hello, sign in</h2>
        <input type="text" ref={loginRef} placeholder="login" />
        <input type="text" ref={passRef} placeholder="pass" />

        <button type='submit'>Log in</button>
    </form>
    </div>  
  );
}

export default Main;
