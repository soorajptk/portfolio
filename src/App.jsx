import { Routes, Route, useLocation } from "react-router-dom";
import { Home } from "./pages/Home/Home";
import { DesignerPortfolio } from "./pages/designerPortfolio/designerPortfolio";
import ColouristPortfolio from "./pages/ColouristPortfolio/colouristPortfolio";
import BgImg from "./assets/bg.png";
import { Contact } from "./pages/Contact/Contact";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./app.css";
import { CSSTransition, TransitionGroup } from "react-transition-group";

function App() {
  const location = useLocation();

  return (
    <div
      style={{
        backgroundImage: `url(${BgImg})`,
        backgroundAttachment: "fixed",
        backgroundPosition: "center",
        backgroundSize: "cover",
        width: "100vw",
        height: "100vh",
        overflowY: "scroll",
        position: "relative",
      }}
    >
      <div className="bg-overlay absolute min-h-screen w-full">
        <ToastContainer />
        <TransitionGroup>
          <CSSTransition key={location.key} classNames="fade" timeout={500}>
            <Routes location={location}>
              <Route path="/" element={<Home />} />
              <Route path="/designer" element={<DesignerPortfolio />} />
              <Route path="/colourist" element={<ColouristPortfolio />} />
              <Route path="/contact" element={<Contact />} />
            </Routes>
          </CSSTransition>
        </TransitionGroup>
      </div>
    </div>
  );
}

export default App;
