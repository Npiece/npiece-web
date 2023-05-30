import {NavLink, NavLinkProps} from "react-router-dom";
import {ReactNode, SetStateAction, Dispatch} from "react";
import React from "react";

interface NavItemProps extends NavLinkProps {
  to: string;
  className?: string;
  children?: ReactNode;
  setNavOpen?: Dispatch<SetStateAction<boolean>>;
}

export default function NavItem(props: NavItemProps) {
  return (
    <NavLink
      className={({isActive, isPending}) =>
        isPending
          ? `${props.className} pending`
          : isActive
          ? `${props.className} active`
          : props.className
      }
      to={props.to}
      onClick={() => {
        if (typeof props.setNavOpen == "function") {
          props.setNavOpen(false);
        }
      }}
    >
      {props.children}
    </NavLink>
  );
}
