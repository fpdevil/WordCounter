import { render, screen } from "@testing-library/react";
import { Header } from "../Header";

describe("Test Header Component", () => {
    test('render the header and sub header text existence', () => {
        render(<Header />);
        const title = screen.getByTestId('title');
        const subTitle = screen.getByTestId('subTitle');
        expect(title.innerHTML).toBeTruthy();
        expect(subTitle.innerHTML).toBeTruthy();
    });

    test('render the header text', () => {
        render(<Header title="Word Counter" />);
        const title = screen.getByTestId('title');
        expect(title.innerHTML).toBe('Word Counter!');
    });

    test('render the sub header text', () => {
        render(<Header subTitle="Online word and character counting tool for free!" />);
        const subTitle = screen.getByTestId('subTitle');
        expect(subTitle.innerHTML).toBe('Online word and character counting tool for free!! 🎉');
    });
});
