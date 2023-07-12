import React, { useEffect, useRef, useState } from "react";
import "./Registration.css";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import success from '../../Logos, Pictures/Frame 559.jpg'


function Registration({ focused }) {
  const ref = useRef(null);
  const [email, setEmail] = useState("");
  const [validEmail, setValidEmail] = useState(true);

  const [phone, setPhone] = useState("");
  const [country, setCountry] = useState("");

  const [successful, setSuccessful] = useState(false)

  const emailChange = (e) => {
    setEmail(e.target.value);
  };

  const emailIsValid = (email) => {
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailPattern.test(email);
  };

  const changePhone = (value) => {
    setPhone(value);
  };

  useEffect(() => {
    if (focused === true) {
      ref.current[0].focus()
    }
  }, [focused])

  useEffect(() => {
    if (successful) {
      document.body.style.overflow = 'hidden';
    }
    return () => {
      document.body.style.overflow = 'auto';
    }
  }, [successful])




  const handleSubmit = (e) => {
    let user = {
      name: null,
      lastName: null,
      email: null,
      phoneNumber: null,
      country: null,
    };

    if (
      emailIsValid(email) &&
      ref.current[0].value !== "" &&
      ref.current[1].value !== "" &&
      phone !== ""
    ) {
      user = {
        name: ref.current[0].value,
        lastName: ref.current[1].value,
        email: email,
        phoneNumber: phone,
        country: ref.current[3].value.split(" ")[0],
      };
      setEmail("");
      setValidEmail(true);
      ref.current.reset();
      setPhone('')
      setSuccessful(true)
      window.scrollTo({ top: 0, left: 0, behavior: "smooth" })
    } else {
      setValidEmail(false);
    }
    e.preventDefault()
  };
  return (
    <>
      <div className="registrationWrapper">
        <div className="registrationWindow">
          <div className="instruct">
            <h2>REGISTER</h2>
            <h3>
              Learn more about <br /> trading on SpaceX!
            </h3>
          </div>

          <form ref={ref} className="registrationForm">
            <input type="text" placeholder="First Name" />
            <input type="text" placeholder="Last Name" />
            <input
              value={email}
              onChange={(e) => emailChange(e)}
              type="text"
              placeholder="Email"
            />

            <div className="container">
              <PhoneInput
                value={phone}
                onChange={(value) => changePhone(value)}
                inputStyle={{
                  width: "100%",
                  borderRadius: 2,
                  border: 0,
                }}
                buttonStyle={{
                  color: 'black'
                }}
                country={"us"}
                inputProps={{
                  required: true,
                }}

              />
            </div>

            <button onClick={(e) => handleSubmit(e)}>LEARN MORE</button>
            <div className="privacyWrapper">
              <p className="privacy">
                *By entering your personal details here and clicking the LEARN MORE
                button you agree and accept the Website{" "}
                <a href="https://oil-profits.com/privacy-policy/">Privacy Policy</a>{" "}
                and <a href="https://oil-profits.com/terms/">Terms & Conditions</a>.
                *Your personal information may be shared with third parties
                providing trading services as provided in the Website privacy
                policy.
              </p>
            </div>
          </form>
        </div>
      </div>

      {
        successful &&
        <div onClick={() => setSuccessful(false)} className="successMessage">
          <img src={success} />
        </div>
      }
    </>


  );
}

export default Registration;
