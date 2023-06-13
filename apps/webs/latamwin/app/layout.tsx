import "ui-latamwin/src/styles.scss";
import "@fortawesome/fontawesome-svg-core/styles.css";
import { config } from "@fortawesome/fontawesome-svg-core";
// Tell Font Awesome to skip adding the CSS automatically
// since it's already imported above
config.autoAddCss = false;

/**
 * RootLayout.
 *
 * @param props Props.
 * @param props.children JSX.Element.
 * @returns JSX.Element.
 */
export default function RootLayout({
    children,
}: {
    /** */
    children: React.ReactNode;
}) {
    return (
        <html lang="en" className="font-sans">
            <body>{children}</body>
        </html>
    );
}
