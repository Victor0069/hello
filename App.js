import "./App.css";
import InnerContent from "./components/InnerContent/InnerContent";
import MiddleSection from "./components/MiddleSection/MiddleSection";
import Navbar from "./components/Navbar/Navbar";
import Registration from "./components/Registration/Registration";
import planet from "./Logos, Pictures/tiro-angulo-fascinante-cielo-estrellado 1.png";
import planetBcg from "./Logos, Pictures/planeta-ficticio-cielo-nocturno-colorido-estrellas-nebulosa 1.png";
import { useEffect, useRef, useState } from "react";
function App() {
  const [appHeight, setAppHeight] = useState(0);
  const [focus, setFocus] = useState(false);
  const appRef = useRef(null);

  useEffect(() => {
    setInterval(() => {
      setFocus(false);
    }, 1000);
  }, []);

  useEffect(() => {
    const resizeObserver = new ResizeObserver((entries) => {
      for (let entry of entries) {
        setAppHeight(entry.contentRect.height);
      }
    });

    if (appRef.current) {
      resizeObserver.observe(appRef.current);
    }

    return () => {
      if (appRef.current) {
        resizeObserver.unobserve(appRef.current);
      }
    };
  }, []);

  return (
    <div ref={appRef} className="App">
      <img
        className="wallpaper"
        style={{ height: appHeight }}
        src={planetBcg}
      />
      <div className="bodyWrapper">
        <img src={planet} />
        <Navbar setFocus={setFocus} />
        <InnerContent />
        <Registration focused={focus}/>
      </div>
      <MiddleSection/>  
    </div>
  );
}

export default App;
