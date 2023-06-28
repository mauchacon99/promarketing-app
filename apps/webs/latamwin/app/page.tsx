"use client";
import { Button } from "ui-latamwin";
/**
 * Page.
 *
 * @returns JSX.Element.
 */
export default function page() {
    return (
        <>
            <div className="m-4">
                <Button
                    colorScheme="accent"
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
