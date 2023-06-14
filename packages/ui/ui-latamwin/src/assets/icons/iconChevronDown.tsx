/* eslint-disable jsdoc/require-jsdoc */
/* eslint-disable jsdoc/require-description */
/* eslint-disable max-len */
import * as React from "react";
import { SVGProps } from "react";
const SvgComponent = (props: SVGProps<SVGSVGElement>) => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
        <path
            fill="#fff"
            d="M10 11.428c-.366 0-.732-.14-1.01-.418L.419 2.439a1.428 1.428 0 1 1 2.02-2.02l7.56 7.563L17.561.42a1.428 1.428 0 1 1 2.02 2.02l-8.57 8.57a1.424 1.424 0 0 1-1.012.418Z"
        />
    </svg>
);
export default SvgComponent;
