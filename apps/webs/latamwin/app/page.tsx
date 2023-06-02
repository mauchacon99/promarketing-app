"use client";
import { ButtonBase } from "ui-latamwin";
/**
 * Descripión.
 *
 * @returns JSX.Element.
 */
export default function page() {
  return (
    <>
      <div>
        <div className="m-4">
          <ButtonBase
            intent="secondary"
            variant="contained"
            size="lg"
            shadow="md"
            label={"Play"}
          />
        </div>
      </div>
    </>
  );
}
