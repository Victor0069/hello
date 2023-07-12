import React from "react";
import "./MiddleSection3.css";
import Dropdown from "../Dropdown/Dropdown";

function MiddleSection3() {
  const arr = [
    {
      name: `What is the minimum
            deposit?`,
      body: `The minimum deposit on SpaceX is $250.
        This isn’t just any random number, though. It
        may give you a good foundation to start live
        trading with, but it isn’t too high that it would
        prevent most traders from getting started in
        the first place.
        
        You’re free to invest more if you'd like to. The
        more you have deposited in your account, the
        more trades you can make. Just make sure
        you’re never trading more than you can afford
        to lose.`,
      id: 1,
    },
    {
      name: `How long does it take to
        register?`,
      body: `Signing up with SpaceX is a quick and
        hassle free process. The registration is
        designed to be efficient and user friendly. In
        some cases, if there is a surge in new
        registrations, it may take a slightly longer
        time, but you should be ready to start
        investing relatively quickly.
        
        
        However, its important to remember that you
        still need to make a deposit to initiate live
        trading. The platform does not have
        complete control over the duration of this
        process. SpaceX has streamlined their
        procedures, but the timeframe can vary from
        one hour to a day, depending on your banks
        processing time.`,
      id: 2,
    },
    {
      name: `Do you need any trading
          experience?`,
      body: `While having investment experience can be
          beneficial, it is not necessary when investing
          with SpaceX. The investment platform is
          designed to cater to both beginners and
          seasoned investors, ensuring that you can
          easily utilize its features.
          
          
          However, it is recommended that you actively
          work on expanding your knowledge and
          experience while investing with SpaceX.
          There are numerous online resources
          available for investment education that you
          can leverage, and it is highly advisable to
          take advantage of them.
          
          
          By actively learning and investing with
          SpaceX, you can gain practical experience
          that reinforces the theories you learn. This
          hands on approach may provide you with an
          advantage over other investors who solely
          rely on theoretical knowledge without
          actually engaging in the investment process.`,
      id: 3,
    },
  ];

  let arr2 = [
    {
      name: `Why SpaseX?`,
      body: `There are numerous investment
          opportunities available, and it may be
          beneficial to diversify your investments
          across various sectors. However, there is one
          reason why space exploration, specifically
          through SpaceX, is considered by some as
          superior: innovation and growth potential.
          
          
          If recent events and technological
          advancements have taught us anything, its
          that the global economy is constantly
          evolving. Despite challenges, the demand for
          satellite communications, space exploration,
          and advanced transportation systems
          continues to rise.
          
          
          While industries may face volatility, SpaceX
          keeps pushing forward like a catalyst for
          economic advancement.
          
          
          Space exploration and investing in SpaceX
          have proven to be some of the most
          captivating and promising investment
          options, which is why many investors are
          choosing to allocate their resources in this
          field.`,
      id: 4,
    },
    {
      name: `How much does it cost to use
            the platform?`,
      body: `When it comes to investments, you might be
          accustomed to certain companies charging
          fees for their services. However, thats not
          the approach taken by SpaceX. The
          company operates on a different investment
          model.
          
          There are no fees for signing up, making
          deposits, or subscribing to SpaceXs
          investment opportunities.
          
          Instead, SpaceX earns a commission on
          each successful investment venture they
          undertake.`,
      id: 5,
    },
    {
      name: `Should you invest in
          SpaceX?`,
      body: `Yes, investing in SpaceX can be a
          promising choice given their growth
          potential and innovation in the space
          industry. It is recommended to conduct
          thorough research and evaluate your
          investment goals before making a
          decision.`,
      id: 6,
    },
  ];

  return (
    <>
      <div className="middleSection3">
        <h1>
          How to start your trading <br /> journey on SpaceX
        </h1>
        <h3>
          If you want to start your journey, you can do so with SpaceX. The
          platform is made for you. The team provides all users with a more
          streamlined trading experience, whether you are an experienced trader
          or new to the market.
        </h3>
      </div>

      <div className="cont">
        <div className="dropDownContainer">
          <div className="leftPart">
            {arr.map((el) => (
              <Dropdown name={el.name} body={el.body} id={el.id} />
            ))}
          </div>
        </div>

        <div className="dropDownContainer2">
          <div className="rightPart">
            {arr2.map((el) => (
              <Dropdown name={el.name} body={el.body} id={el.id} />
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default MiddleSection3;
