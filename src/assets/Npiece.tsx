interface NpieceProps {
  color: string;
}

export function Npiece(props: NpieceProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      id="logo"
      width="200px"
      version="1.1"
      viewBox="0 0 218.57 40"
      fill={props.color}
    >
      <path
        id="letterN"
        d="M35.95.01h-1.16c-1.84 0-3.34 1.5-3.34 3.34v24.1L7.65 1.47 6.92.91A4.262 4.262 0 0 0 2.4.46C.92 1.19 0 2.67 0 4.32v31.65c0 1.84 1.5 3.34 3.34 3.34H4.5c1.84 0 3.34-1.5 3.34-3.34V11.8l23.8 25.98.73.56a4.262 4.262 0 0 0 4.52.45c1.48-.73 2.4-2.21 2.4-3.86V3.35c0-1.84-1.5-3.34-3.34-3.34z"
      />
      <path
        id="letterP"
        d="M75.31 0 50.54.01c-1.84 0-3.34 1.5-3.34 3.34v32.61c0 1.84 1.5 3.34 3.34 3.34h1.13c1.84 0 3.34-1.5 3.34-3.34V21.69H76.3l.5-.07v-.04c1.01-.13 2.01-.42 2.98-.87 3.85-1.74 6.34-5.62 6.34-9.87 0-2.88-1.12-5.61-3.17-7.68A10.749 10.749 0 0 0 75.31 0Zm3 10.85c0 1.19-.7 2.27-1.79 2.76-.36.18-.75.27-1.21.27H55.02V7.83h20.29c.8 0 1.51.29 2.09.84.42.44.91 1.17.91 2.18z"
      />
      <path
        id="letterI"
        d="M96.18.02h-1.14c-1.84 0-3.34 1.5-3.34 3.34v32.59c0 1.84 1.5 3.34 3.34 3.34h1.14c1.84 0 3.34-1.5 3.34-3.34V3.36c.01-1.84-1.49-3.34-3.34-3.34z"
      />
      <g id="letterE1">
        <path d="M134.75.02h-25.58c-2.15 0-3.9 1.75-3.9 3.9s1.75 3.9 3.9 3.9h25.58c2.15 0 3.9-1.75 3.9-3.9s-1.75-3.9-3.9-3.9z" />
        <path d="M109.17 23.56h20.95c2.15 0 3.9-1.75 3.9-3.9s-1.75-3.9-3.9-3.9h-20.95c-2.15 0-3.9 1.75-3.9 3.9s1.75 3.9 3.9 3.9z" />
        <path d="M134.75 31.51h-25.58c-2.15 0-3.9 1.75-3.9 3.9s1.75 3.9 3.9 3.9h25.58c2.15 0 3.9-1.75 3.9-3.9s-1.75-3.9-3.9-3.9z" />
      </g>
      <path
        id="letterC"
        d="M176.76.01h-16.3c-5.42 0-10.47 2.16-14.22 6.09-3.74 3.92-5.66 9.08-5.41 14.51.5 10.48 9.35 18.7 20.17 18.7h15.76c1.84 0 3.34-1.5 3.34-3.34v-1.13c0-1.84-1.5-3.34-3.34-3.34h-15.87c-6.45 0-11.82-4.84-12.23-11.02-.22-3.31.91-6.46 3.17-8.88 2.23-2.38 5.38-3.75 8.63-3.75h16.3c1.84 0 3.34-1.5 3.34-3.34V3.37c0-1.86-1.5-3.36-3.34-3.36z"
      />
      <g id="letterE2">
        <path d="M189.09 7.82h25.58c2.15 0 3.9-1.75 3.9-3.9s-1.75-3.9-3.9-3.9h-25.58c-2.15 0-3.9 1.75-3.9 3.9s1.75 3.9 3.9 3.9z" />
        <path d="M189.09 23.56h20.95c2.15 0 3.9-1.75 3.9-3.9s-1.75-3.9-3.9-3.9h-20.95c-2.15 0-3.9 1.75-3.9 3.9s1.75 3.9 3.9 3.9z" />
        <path d="M214.67 31.51h-25.58c-2.15 0-3.9 1.75-3.9 3.9s1.75 3.9 3.9 3.9h25.58c2.15 0 3.9-1.75 3.9-3.9s-1.75-3.9-3.9-3.9z" />
      </g>
    </svg>
  );
}
