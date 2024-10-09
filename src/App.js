import './App.css';

function App() {
  return (
    <div className='student-login'>
      <div className='left-side'>
        <div className='logo'>
          <img src='./vdei-logo.png' alt='logo'></img>
        </div>
        <div className='contact-form'>
          <form>
            <div className='login-id'>
              <label>
                Login ID<br></br>
                <input type="text" name="login-id" placeholder="Enter Your Id...." />
              </label>
            </div>
            <div className='login-password'>
              <label>
                Login Password<br></br>
                <input type="text" name="login-password" placeholder="Enter Your Password...." />
              </label>
            </div>
            <div className='forget-password'>
              <span>Forget Password?</span>
            </div>
            <div className='submit-btn'>
              <input type="submit" value="Submit" />
              <img src='./arrow.png' alt='arrow'></img>
            </div>
            <div className='help'>
              <span>Need Any help?? Contact Us...</span>
            </div>
            <div className='social-logo'>
              <img src='./mail.png' alt='mail'></img>
              <img src='./whatsapp.png' alt='whatsapp'></img>
              <img src='./call.png' alt='call'></img>
            </div>
          </form>
        </div>
      </div>
      <div className='right-side'>
        <div className='banner-img'>
          <img src='./student-login-banner-img.png' alt='banner-img'></img>
        </div>
      </div>
    </div>
  );
}

export default App;
