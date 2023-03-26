import logo from '../../imgs/damp.png';
import '../../Styles/header.css'

function MyHeader() {
    return (
      <header className="App-header">
        <div>
        <img src={logo} className="Header-logo" alt="logo" />
        </div>
        <div className='signUpLogin'>
        <button>Login</button>
        <button>Sign Up</button>
        </div>
      </header>
    );
  }

  export default MyHeader;
