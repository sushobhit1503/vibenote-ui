import * as React from "react";

const CurrentTrack = (props) => (
  <svg
    width={30}
    height={31}
    viewBox="0 0 30 31"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <rect y={7.90198} width={3} height={15.1961} rx={1.5} fill="#212121" />
    <rect
      x={6.75}
      y={4.25488}
      width={3}
      height={22.4902}
      rx={1.5}
      fill="#212121"
    />
    <rect
      x={20.25}
      y={4.25488}
      width={3}
      height={22.4902}
      rx={1.5}
      fill="#212121"
    />
    <rect
      x={27}
      y={7.90198}
      width={3}
      height={15.1961}
      rx={1.5}
      fill="#212121"
    />
    <rect x={13.5} width={3} height={31} rx={1.5} fill="#212121" />
  </svg>
);

export { CurrentTrack };