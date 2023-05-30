import {ReactNode, useState} from "react";

interface ReplayProps {
  className?: string;
  iconWidth?: string;
  iconHeight?: string;
  color?: string;
  children?: ReactNode;
}

export function Replay(props: ReplayProps) {
  const [hovered, setHovered] = useState(false);

  function handleMouseEnter() {
    setHovered(true);
  }

  function handleMouseLeave() {
    setHovered(false);
  }

  function handleClicked() {
    window.location.reload();
  }

  return (
    <div
      className={props.className}
      onClick={handleClicked}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill={props.color}
        width={props.iconWidth}
        height={props.iconHeight}
        viewBox="0 0 468.169 508.776"
        style={{
          marginRight: "0.5em",
        }}
      >
        <path d="m197.281 357.15 118.86-82.459-118.86-82.459Z" />
        <path d="M198.389 174.46c-10.25-.637-18.914 7.503-18.916 17.772V357.15c.003 14.372 16.15 22.82 27.959 14.631l118.861-82.459c10.208-7.084 10.208-22.18 0-29.263l-118.861-82.457a17.81 17.81 0 0 0-9.043-3.141z" />
        <path
          style={{
            transitionDuration: "0.3s",
            transformOrigin: "50% 55%",
            transform: hovered ? "rotate(360deg)" : "",
          }}
          d="M248.902.012a15.43 15.43 0 0 0-14.819 15.422v25.172C105.335 40.606 0 145.944 0 274.693 0 403.44 105.335 508.776 234.083 508.776c128.749 0 234.087-105.335 234.087-234.083v-.27a45 45 0 0 0-45.032-44.97 45 45 0 0 0-44.968 45.03v.21c0 80.108-63.978 144.083-144.087 144.083C153.975 418.776 90 354.801 90 274.693c0-80.11 63.975-144.087 144.083-144.087v25.173c.001 12.338 13.76 19.689 24.017 12.831l104.912-70.173c9.136-6.113 9.136-19.546 0-25.659L258.1 2.604a15.44 15.44 0 0 0-9.198-2.592z"
        />
      </svg>
      {props.children}
    </div>
  );
}
