import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCoffee } from "@fortawesome/free-solid-svg-icons";
import { Button } from "ui-latamwin";

/**
 * Page.
 *
 * @returns JSX.Element.
 */
export default function page() {
    return (
        <>
            <div>
                <div className="m-4">
                    <FontAwesomeIcon
                        icon={faCoffee}
                        size="2xl"
                        className="text-primary-default"
                    />
                    <Button
                        colorScheme="secondary"
                        variety="contained"
                        size="lg"
                        shadow="md"
                        label={"Play"}
                    />
                </div>
            </div>
        </>
    );
}
