import React from 'react';

export const BouncingDownArrow: React.FC<{ i?: number }> = ({ i = 1 }) => {
  return (
    <svg
      stroke="currentColor"
      fill="currentColor"
      strokeWidth="0"
      viewBox="0 0 24 24"
      focusable="false"
      // boxSize="1.5em"
      xmlns="http://www.w3.org/2000/svg"
      className="h-6 w-6 block mt-12 cursor-pointer animate-bounce"
      onClick={() => {
        window.scrollTo({ top: window.innerHeight * i, behavior: 'smooth' });
      }}
    >
      <path fill="none" d="M0 0h24v24H0V0z"></path>
      <path d="M20 12l-1.41-1.41L13 16.17V4h-2v12.17l-5.58-5.59L4 12l8 8 8-8z"></path>
    </svg>
  );
};
