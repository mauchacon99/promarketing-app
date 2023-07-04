"use client";
import { Button } from "ui-latamwin";
/**
 * Page.
 *
 * @returns JSX.Element.
 */
export default function Page() {
    return (
        <>
            <div className="m-4">
                <Button
                    colorScheme="primary"
                    variety="contained"
                    size="lg"
                    shadow="md"
                >
                    Play
                </Button>
            </div>
        </>
    );
}
