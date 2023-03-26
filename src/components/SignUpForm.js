import { useEffect, useState } from "react";
import "../css/signupForm.css";
import reloadIcon from "../../assets/reloadIcon.png";

const SignUpForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [captcha, setCaptcha] = useState("");
  const [genratedcaptcha, setGenratedCaptcha] = useState("");
  const [errorText, setErrorText] = useState();
  const [successText, setSuccessText] = useState();

  function generateString(length) {
    let characters =
      "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    let result = "";
    let charactersLength = characters.length;
    for (let i = 0; i < length; i++) {
      result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }

    setGenratedCaptcha(result);
  }

  useEffect(() => {
    generateString(6);
  }, []);

  const handleFormSubmit = () => {
    if (!email || !password || !captcha)
      return setErrorText("All Field Are Required");

    console.log(genratedcaptcha, "::::", captcha);
    console.log(genratedcaptcha.localeCompare(captcha));

    if (genratedcaptcha != captcha)
      return setErrorText("Please Enter Valid Captcha");

    setSuccessText("SignUp Done SuccessFully");
    setEmail("");
    setPassword("");
    setCaptcha("");
    setErrorText();
  };

  return (
    <div className="formPage">
      <div className="formBody">
        <div className="inputDiv">
          <p>Email</p>
          <input
            className="formInput"
            placeholder="Enter Email Address"
            type={"email"}
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="inputDiv">
          <p>Password</p>
          <div>
            <input
              className="formInput"
              placeholder="Enter Your Password"
              type={"password"}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
        </div>
        <div className="captchaDiv">
          <img
            className="reloadIcon"
            src={reloadIcon}
            onClick={() => {
              generateString(6);
            }}
          />
          <p className="captchaBox">{genratedcaptcha}</p>
        </div>
        <div className="inputDiv">
          <p>Captcha</p>
          <div>
            <input
              className="formInput"
              placeholder="Enter Above Captcha"
              type={"text"}
              value={captcha}
              onChange={(e) => setCaptcha(e.target.value)}
            />
          </div>
        </div>

        {errorText && !successText && <p className="errorText">{errorText}</p>}
        <button
          className="btn-signUp"
          onClick={() => {
            handleFormSubmit();
          }}
        >
          SignUp
        </button>
        {successText && !errorText && (
          <p className="successText">{successText}</p>
        )}
      </div>
    </div>
  );
};

export default SignUpForm;
