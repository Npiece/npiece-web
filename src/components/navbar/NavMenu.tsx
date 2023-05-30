import NavItem from "./NavItem";
import {SetStateAction, Dispatch} from "react";

interface NavMenuProps {
  className?: string;
  itemClassName?: string;
  setNavOpen?: Dispatch<SetStateAction<boolean>>;
}

function NavMenu(props: NavMenuProps) {
  return (
    <div className={props.className}>
      <NavItem
        className={props.itemClassName}
        to="/intro"
        setNavOpen={props.setNavOpen}
      >
        INTRO
      </NavItem>
      <NavItem
        className={props.itemClassName}
        to="/npunks"
        setNavOpen={props.setNavOpen}
      >
        NPUNKS
      </NavItem>
    </div>
  );
}

export default NavMenu;
