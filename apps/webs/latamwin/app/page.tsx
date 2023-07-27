"use client";
import { Button, NavDropdown } from "ui-latamwin";
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
                    colorScheme="accent"
                    variety="contained"
                    size="lg"
                    shadow="md"
                >
                    Play
                </Button>
                <div className="h-1/2 w-full p-10">
                    <div className="bg-secondary-gradient  w-full px-5 py-5">
                        <div className="flex list-none p-0">
                            <NavDropdown defaultOpen>
                                <NavDropdown.Toggle>Menu</NavDropdown.Toggle>
                                <NavDropdown.ListItem>
                                    <NavDropdown.Item>
                                        {" "}
                                        Pragmatic
                                    </NavDropdown.Item>
                                    <NavDropdown.Item>
                                        {" "}
                                        Playtech{" "}
                                    </NavDropdown.Item>
                                </NavDropdown.ListItem>
                            </NavDropdown>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
