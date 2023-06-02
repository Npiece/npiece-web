import {useEffect, useRef} from "react";
import styled from "styled-components";

function generateRandomNumber(min: number, max: number): number {
  return Math.random() * (max - min) + min;
}

interface DotProps {
  left: number;
  top: number;
}

const Dot = styled.div<DotProps>`
  position: absolute;
  background-color: white;
  border-radius: 50%;
  width: 2px;
  height: 2px;
  left: ${(props) => props.left}%;
  top: ${(props) => props.top}%;
`;

interface SpaceProps {
  className: string;
}

export function Space(props: SpaceProps) {
  const dotContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const dotContainer = dotContainerRef.current;
    if (!dotContainer) return;

    const containerWidth = dotContainer.offsetWidth;
    const containerHeight = dotContainer.offsetHeight;
    const numDots = 50;

    for (let i = 0; i < numDots; i++) {
      const dot = document.createElement("div");
      dot.style.top = `${generateRandomNumber(0, containerHeight)}px`;
      dot.style.left = `${generateRandomNumber(0, containerWidth)}px`;
      dotContainer.appendChild(dot);
    }
  }, [dotContainerRef]);

  return (
    <div className={props.className} ref={dotContainerRef}>
      {Array.from({length: 100}).map((_, index) => (
        <Dot
          className="dot"
          key={index}
          left={generateRandomNumber(0, 100)}
          top={generateRandomNumber(0, 100)}
        />
      ))}
    </div>
  );
}
