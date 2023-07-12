import React from "react";
import "./MiddleSection2.css";
import middlePicture from "../../Logos, Pictures/satelite-aproximandose-tierra 1.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDoubleRight } from "@fortawesome/free-solid-svg-icons";


function MiddleSection2() {
  return (
    <>
      <div className="middleSection2">
        <h1>
          Navigating the SpaceX <br />
          Trading Platform
        </h1>

        <h3>
          Getting started with the SpaceX Trading Platform is a straightforward
          process. Upon registration and completion of the verification process,
          you can log in to the platform using your provided credentials. The
          SpaceX Trading Platform offers a user friendly interface designed to
          support both novice and experienced traders.
        </h3>

        <h3>
          Through the platform, you can access real time market data, perform
          technical analysis, and utilize a range of tools to inform your
          trading decisions. Whether you are a seasoned trader or new to the
          world of trading, the SpaceX Trading Platform provides resources to
          enhance your trading experience and keep you informed about the latest
          developments in the space industry.
        </h3>

        <img width={'90%'} src={middlePicture} />
      </div>

      <div className="regButtonContainer">
        <button
          onClick={() =>
            window.scrollTo({ top: 0, left: 0, behavior: "smooth" })
          }
          className="registerButton"
        >
          REGISTER <FontAwesomeIcon color="white" icon={faAngleDoubleRight} />
        </button>
      </div>

      <div className="conclusion">
        <h1>Conclusion</h1>
        <h3>
          Investing in SpaceX stocks allows you to participate in one of the
          most exciting industries of our time. With the SpaceX Trading
          Platform, you have the opportunity to explore the potential of this
          innovative company and align your investments with the advancements in
          space technology.
        </h3>
        <h3>
          Remember, trading always carries risks, and it is crucial to conduct
          thorough research, understand market trends, and consult with
          financial advisors when necessary. The SpaceX Trading Platform serves
          as a valuable tool to assist you in your trading journey, offering
          insights and resources to make informed investment decisions.
        </h3>
      </div>

      <div className="signUp">
        <h1>Signing Up</h1>
        <h3>
          The registration form is as simple as they come. If you wish to sign
          up, just input your name, email address, and phone number.<br/> Once you
          provide those details, you’ll be sent a confirmation email. All you
          have to do is click on the link in that email and log in through your
          broker’s website with the login info you used upon registration. Then
          you’ll be redirected back to the platform to enjoy all the benefits it
          presents.<br/> Before you can make your first live trade, though, you will
          need to make an initial deposit. The platform accepts most mainstream
          forms of money transfer, so you shouldn’t have an issue with funding
          your account.<br/> With your account verified and your first deposit made,
          you can start your learning process and begin trading.<br/>
        </h3>
      </div>
    </>
  );
}

export default MiddleSection2;
