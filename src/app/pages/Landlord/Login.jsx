import FormComponent from '../../components/FormComponent';
import arrowLeft from '../../assets/images/arrow-left.svg';
import '../../assets/css/Login.css';
import GoogleAuthButton from "../../components/GoogleAuthComponent";
import FacebookAuthButton from "../../components/FacebookAuthComponent";


function Login() {
  const fields = [
    { name: 'email', label: 'Email', type: 'email' },
    { name: 'password', label: 'Password', type: 'password' },
  ];
  return (
    <div className="Login">
      <div className="head">
        <a href="/access">
          <img
            src={arrowLeft}
            alt="Arrow Left Icon"
            className="arrowLeft-icon"
          />
        </a>
        <h1>Log In</h1>
        <p>Welcome back!</p>
      </div>
      <FormComponent
        fields={fields}
        submitButtonText="Log In"
        forgotPasswordLink="/login"
        forgotPasswordText="Forget Password"
        additionalTagText="Don’t have an account? "
        additionalTagLink="/landlord/signup"
        additionalTagLinkText="Create Account"
        onSubmit="/landlord/home"
      />

      <div>
        <div className="line">
          <hr />
          <span>Or Log In with email</span>
          <hr />
        </div>
        <div className="authButtons">
          <GoogleAuthButton />
          <FacebookAuthButton />
        </div>
      </div>
    </div>
  );
}

export default Login;