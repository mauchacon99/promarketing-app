/* eslint-disable jsdoc/require-jsdoc */
/* eslint-disable jsdoc/require-description */
/* eslint-disable max-len */
import * as React from "react";
import { SVGProps } from "react";
const SvgComponent = (props: SVGProps<SVGSVGElement>) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        xmlnsXlink="http://www.w3.org/1999/xlink"
        fill="none"
        {...props}
    >
        <path fill="url(#a)" d="M0 0h50v50H0z" />
        <defs>
            <pattern
                id="a"
                width={1}
                height={1}
                patternContentUnits="objectBoundingBox"
            >
                <use xlinkHref="#b" transform="scale(.02)" />
            </pattern>
            <image
                xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAABmJLR0QA/wD/AP+gvaeTAAACRklEQVRoge2ZvU8UQRiHH6QgJHp4oFJZm/AvGIOh5aiQzpj4LwCJrVFCjDEEKizQwo+GmmgokMRSLWwwsYaCRuOxl1gArsVwgXtvlpmdm9kdkv0lbzGb9+vZuZnZ3YNKlSq5agrYBlpAWrK1gE9AIy/EYgTNZ9mCLcRUBM2azGpmtiNo1GRbsuk+DUgCXLYhLlEJUDt7QQeSFtNLz+ro/VJZXfhWkSCjqLvYti8+k5c5I59DFwi109wQdW4Bhz3k61CRMyKL/wSWQhcMYdc0tfqBdcd8UYGAWvjzQPOigIwY6taA+8AK8C8vSJEH4gjw29L3GPP6Le1AlDdotoiCIWxY1DkA5tD/Ko4t8pUGUhd1kpPrm8BdAVQaSBN1JoxzevAlwudqBkjb9lBvges4LHYfIO/Qb615QfKaV5An5+SRjQ7FCvLekOdCgDSB65rYe8AG8J3uBVsTvlGALGviVg0xUYJMiJhpi5grIUFcT/YfYvzAMY83uYL8EuObFjFHYtzvWFsrVxD5uLFr8N8H/p4ZDwGDjrW1cgUZE+M3Bv81Q3wQue5aLzN8PwIDwveZZZ3SzpEZ4AOwg3oYfEj3Wqij1lgUICnqGctFrzxAeAVJgcc5IR55gvAOkgJvyf6w0NYw8NojRBCQFPgDvADucLo114HbwHPUu7pPiC6QUB8f0ozcPlXIx4fQEF3SgbSKbsJBB/KCDuRrAY30qm82Tg38L0zfNmlLvBBBs1n21BairQbq39NeX4B8WHLSi/VMVKpUqVP/ATTzlWiCLMNFAAAAAElFTkSuQmCC"
                id="b"
                width={50}
                height={50}
            />
        </defs>
    </svg>
);
export default SvgComponent;
