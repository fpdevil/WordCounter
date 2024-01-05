import { render } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import { PageNotFound } from "../PageNotFound";


describe("Test PageNotFound Page", () => {
    test('render text and image', () => {
        const { getByAltText, getByTestId } = render(<PageNotFound />, {
            wrapper: BrowserRouter
        });
        const pnfText = getByTestId('pnfText');
        const pnfImage = getByAltText('Page Not Found');

        expect(pnfImage).toBeTruthy();
        expect(pnfText.innerHTML).toBe("We can't find that page.");
    });
});
