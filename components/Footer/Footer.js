import React from "react";
import "./Footer.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDoubleRight } from "@fortawesome/free-solid-svg-icons";

function Footer() {
  return (
    <>
      <div className="footerPart">
        <div className="regButtonContainer">
          <button
            onClick={() =>
              window.scrollTo({ top: 0, left: 0, behavior: "smooth" })
            }
            className="registerButton"
          >
            LEARN MORE{" "}
            <FontAwesomeIcon color="white" icon={faAngleDoubleRight} />
          </button>
        </div>
      </div>

      <div className="moreInfo">
        <button
          onClick={() =>
            window.scrollTo({ top: 745, left: 0, behavior: "smooth" })
          }
        >
          About
        </button>
        <button
          onClick={() =>
            window.scrollTo({ top: 0, left: 0, behavior: "smooth" })
          }
        >
          Log in
        </button>
      </div>

      <div className="riskNote">
        <div>
          <h3>Important Risk Note:</h3>
        </div>
        <div>
          <h4>
            Trading can generate notable benefits; however, it also involves a
            risk of partial/full funds loss and should be considered by initial
            investors. Around 70 percent of the investors will lose money.
            <br />
            <br />
            #SpaceX and any other commercial names used on the site are for
            commercial purposes only, and do not refer to any specific company
            nor specific services providers.
            <br />
            <br /> Carefully read the Terms & Conditions and Disclaimer page of
            the third-party investor platform before investing. Users must be
            cognizant of their individual capital gain tax liability in their
            country of residence. It is against the law to solicit United States
            persons to buy and sell commodity options, even if they are called
            ‘prediction' contracts unless they are listed for trading and traded
            on a CFTC-registered exchange or unless legally exempt.
            <br />
            <br /> The Financial Conduct Authority (‘FCA’) has issued a policy
            statement PS20/10, which prohibits the sale, promotion, and
            distribution of CFD on Crypto assets. It is prohibiting the
            dissemination of marketing materials relating to distribution of
            CFDs and other financial products based on Cryptocurrencies and
            which are addressed to UK residents.
            <br />
            <br /> By leaving your personal details herein you consent and allow
            us to share your personal information with third parties providing
            trading services as provided in the Privacy Policy and Terms &
            Conditions.
            <br />
            <br /> There are several trading options that the trader/user can
            use – by trading software, using human brokers, or by making own
            trades and it's the trader’s sole responsibility to choose and
            decide what is the right way for him/her to trade.
          </h4>
        </div>

        <div>
          <h4>Copyright © 2023 SpaceX. All Rights Reserved.</h4>
        </div>
      </div>
    </>
  );
}

export default Footer;
