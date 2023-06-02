import "./Nav.scss";
import {useState, useEffect} from "react";
import NavMenu from "./NavMenu";
import {Npiece} from "../../assets/Npiece";
import styled from "styled-components";
import {ConnectButton} from "../wallet-kit/ConnectButton";

// Use styled components to build dynamic bugerwrapper, as a show case using css from tsx with variable
interface BurgerWrapperProps {
  open: boolean;
}

// use generic parameter to allow `open` prep for the BurgerWrapper component
// TODO: integrate stitches/react to handle theme
const BurgerWrapper = styled.div<BurgerWrapperProps>`
  width: 3em;
  height: 3em;
  position: relative;
  cursor: pointer;
  display: flex;
  justify-content: space-around;
  flex-flow: column nowrap;
  border-radius: 30%;
  transition: 0.3s ease;
  padding-top: 0.7em;
  padding-bottom: 0.7em;
  padding-left: 0.5em;
  background-color: ${({open}) => (open ? "#2a2a2f" : "inherit")};

  margin-left: 1em;

  &:hover {
    background-color: #2a2a2f;
  }

  div {
    width: 2em;
    height: 0.25em;
    border-radius: 1em;
    background-color: #fff;
    opacity: ${({open}) => (open ? 1 : 0.5)};
    transform-origin: 1em;
    transition: all 0.4s;

    &:nth-child(1) {
      transform: ${({open}) =>
        open ? "translateY(0.55em) rotate(135deg)" : "rotate(0)"};
    }

    &:nth-child(2) {
      opacity: ${({open}) => (open ? 0 : 0.5)};
    }

    &:nth-child(3) {
      transform: ${({open}) =>
        open ? "translateY(-0.55em) rotate(225deg)" : "rotate(0)"};
    }
  }
`;

function Nav() {
  const mobileMediaSize = 767;

  const [isMobile, setIsMobile] = useState<boolean>(
    window.innerWidth < mobileMediaSize
  );
  const [navOpen, setNavOpen] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < mobileMediaSize);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    // nav cover 100% width of viewport and determine the background color
    <div className="nav">
      {/* nav container constrain maxmimum width */}
      <div className="nav_container">
        <Npiece color="#fff" />
        {isMobile ? (
          <>
            <BurgerWrapper open={navOpen} onClick={() => setNavOpen(!navOpen)}>
              <div />
              <div />
              <div />
            </BurgerWrapper>
            <div
              className="menu_slider"
              style={{
                top: navOpen ? "0" : "-100%",
                transitionDelay: navOpen ? "0s" : "0s",
              }}
            >
              <ul>
                <li>
                  <NavMenu
                    className="nav_menu_vertical"
                    itemClassName="nav_item vertical"
                    setNavOpen={setNavOpen}
                  />
                </li>
                <li>
                  <ConnectButton />
                </li>
              </ul>
            </div>
          </>
        ) : (
          <div className="menu_context">
            <NavMenu className="nav_menu_horizontal" itemClassName="nav_item" />
            <ConnectButton />
          </div>
        )}
      </div>
    </div>
  );
}

export default Nav;
