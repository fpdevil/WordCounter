import { render, waitFor } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import { Joke } from "../Joke";

describe("Test Joke Component", () => {
    test("render joke test", async () => {
        const { getByTestId } = render(
            <MemoryRouter>
                <Joke />
            </MemoryRouter>,
        );
        await waitFor(() => {
            const chuckJoke = getByTestId("chuckJoke");
            expect(chuckJoke.innerHTML).toBeTruthy();
        });
    });
});
