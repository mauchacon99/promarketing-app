"use client";
import { Button, Checkbox } from "ui-latamwin";
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
                    <Button
                        colorScheme="accent"
                        variety="contained"
                        size="lg"
                        shadow="md"
                    >
                        Play
                    </Button>
                </div>
                <div className="bg-light mt-2 py-5">
                    <Checkbox labelPlacement="right" colorScheme="accent">
                        Promarketing
                    </Checkbox>
                </div>
            </div>
        </>
    );
}
