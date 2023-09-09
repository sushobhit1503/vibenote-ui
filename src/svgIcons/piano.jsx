import * as React from "react";

const Piano = (props) => (
  <svg
    width={39}
    height={39}
    viewBox="0 0 39 39"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <g>
      <mask
        style={{
          maskType: "luminance",
        }}
        maskUnits="userSpaceOnUse"
        x={0}
        y={0}
        width={39}
        height={39}
      >
        <g>
          <path d="M0.75 0.75H38.25V38.25H0.75V0.75Z" fill="white" />
        </g>
      </mask>
      <g mask="url(#mask0_185_62)">
        <g>
          <path
            d="M3.07088 37.2632C3.07088 37.2632 1.73682 37.2632 1.73682 35.9291V14.5841C1.73682 14.5841 1.73682 13.25 3.07088 13.25H24.4366C25.75 13.25 25.75 14.5841 25.75 14.5841V35.9291C25.75 35.9291 25.75 37.2632 24.4159 37.2632H3.07088Z"
            fill="#212121"
          />
          <path
            d="M14.4104 35.2622C14.4104 35.2622 14.4104 35.9292 15.0774 35.9292H18.4126C19.0796 35.9292 19.0796 35.2622 19.0796 35.2622V16.5853H14.4104V35.2622Z"
            fill="#FEECFF"
          />
          <path
            d="M20.4138 16.5853V35.2622C20.4138 35.2622 20.4138 35.9292 21.0809 35.9292H23.749C24.416 35.9292 24.416 35.2622 24.416 35.2622V16.5853H20.4138Z"
            fill="#FEECFF"
          />
          <path
            d="M8.40723 35.2622C8.40723 35.2622 8.40723 35.9292 9.07426 35.9292H12.4094C13.0765 35.9292 13.0765 35.2622 13.0765 35.2622V16.5853H8.40723V35.2622Z"
            fill="#FEECFF"
          />
          <path
            d="M3.0708 35.2622C3.0708 35.2622 3.0708 35.9292 3.73783 35.9292H6.40596C7.07299 35.9292 7.07299 35.2622 7.07299 35.2622V16.5853H3.0708V35.2622Z"
            fill="#FEECFF"
          />
          <path
            d="M21.7478 28.5918C21.7478 28.5918 21.7478 29.2588 21.0808 29.2588H18.4126C17.7456 29.2588 17.7456 28.5918 17.7456 28.5918V15.2511H21.7478V28.5918Z"
            fill="#212121"
          />
          <path
            d="M15.7444 28.5918C15.7444 28.5918 15.7444 29.2588 15.0773 29.2588H12.4092C11.7422 29.2588 11.7422 28.5918 11.7422 28.5918V15.2511H15.7444V28.5918Z"
            fill="#212121"
          />
          <path
            d="M9.74121 28.5918C9.74121 28.5918 9.74121 29.2588 9.07417 29.2588H6.40605C5.73901 29.2588 5.73901 28.5918 5.73901 28.5918V15.2511H9.74121V28.5918Z"
            fill="#212121"
          />
        </g>
      </g>
    </g>
  </svg>
);

export default Piano;