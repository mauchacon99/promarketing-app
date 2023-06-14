/* eslint-disable jsdoc/require-jsdoc */
/* eslint-disable jsdoc/require-description */
/* eslint-disable max-len */
import * as React from "react";
import { SVGProps } from "react";
const SvgComponent = (props: SVGProps<SVGSVGElement>) => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
        <path
            fill="currentColor"
            d="M6.918 9.43 8.121 13h3.77l1.157-3.57L10 7.223 6.918 9.43ZM9.965.5C4.477.5 0 4.977 0 10.5s4.477 10 10 10 9.965-4.477 9.965-9.965C19.965 5.047 15.523.5 9.965.5Zm6.308 14.098-3.335-.051-.983 3.187A7.477 7.477 0 0 1 10 18c-.68 0-1.332-.099-1.957-.268l-.98-3.185-3.336.05a7.444 7.444 0 0 1-1.207-3.723l2.726-1.92-1.082-3.157A7.525 7.525 0 0 1 7.33 3.498L10 5.5l2.668-2a7.526 7.526 0 0 1 3.166 2.298l-1.08 3.155 2.726 1.918a7.405 7.405 0 0 1-1.207 3.727Z"
        />
    </svg>
);
export default SvgComponent;
