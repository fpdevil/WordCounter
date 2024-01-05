import {
    fireEvent,
    getByTestId,
    render,
    screen,
    act,
} from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import { Counter } from "../Counter";
import userEvent from "@testing-library/user-event";

describe("Counter Component Test", () => {
    test("render the textarea", () => {
        render(
            <MemoryRouter>
                <Counter />
            </MemoryRouter>,
        );
        const textArea = screen.getByPlaceholderText("Enter Your Text Here...");
        // screen.debug(textArea);
        expect(textArea).toBeTruthy();
    });

    test("render the character result", () => {
        const { getByTestId } = render(
            <MemoryRouter>
                <Counter />
            </MemoryRouter>,
        );
        const characterCount = getByTestId("characterCount");
        screen.debug(characterCount);
        expect(characterCount.children.length).toBe(2);
        expect(characterCount.childNodes[0].textContent).toBe("Characters");
        expect(characterCount.childNodes[1].textContent).toBe("0");
    });

    test("render the word result", () => {
        render(
            <MemoryRouter>
                <Counter />
            </MemoryRouter>,
        );
        const wordCount = screen.getByTestId("wordCount");
        expect(wordCount.children.length).toBe(2);
        expect(wordCount.childNodes[0].textContent).toBe("Words");
        expect(wordCount.childNodes[1].textContent).toBe("0");
    });

    test("render the sentence result", () => {
        const { getByTestId } = render(
            <MemoryRouter>
                <Counter />
            </MemoryRouter>,
        );
        const sentenceCountKey = getByTestId("sentenceCountKey");
        const sentenceCountValue = getByTestId("sentenceCountValue");
        expect(sentenceCountKey.textContent).toBe("Sentences");
        expect(sentenceCountValue.textContent).toBe("0");
    });

    test("render the paragraph result", () => {
        render(
            <MemoryRouter>
                <Counter />
            </MemoryRouter>,
        );
        const paragraphCount = screen.getByTestId("paragraphCount");
        expect(paragraphCount.children.length).toBe(2);
        expect(paragraphCount.childNodes[0].textContent).toBe("Paragraphs");
        expect(paragraphCount.childNodes[1].textContent).toBe("0");
    });

    test("render the pronouns result", () => {
        const { getByTestId } = render(
            <MemoryRouter>
                <Counter />
            </MemoryRouter>,
        );
        const pronounCountKey = getByTestId("pronounCountKey");
        const pronounCountValue = getByTestId("pronounCountValue");
        expect(pronounCountKey.textContent).toBe("Pronouns");
        expect(pronounCountValue.textContent).toBe("0");
    });

    test("clear textarea and update results", () => {
        render(
            <MemoryRouter>
                <Counter />
            </MemoryRouter>,
        );

        const textArea = screen.getByTestId("textArea");
        const clearBtn = screen.getByTestId("clearBtn");
        const wordCount = screen.getByTestId("wordCount");
        const characterCount = screen.getByTestId("characterCount");
        const sentenceCount = screen.getByTestId("sentenceCount");
        const paragraphCount = screen.getByTestId("paragraphCount");
        const pronounCount = screen.getByTestId("pronounCount");

        userEvent.type(
            textArea,
            "The quick brown fox jumps over the lazy dog.\nLet there be light.",
        );
        expect(wordCount.childNodes[0].textContent).toBe("Words");
        expect(wordCount.childNodes[1].textContent).toBe("12");
        expect(characterCount.childNodes[0].textContent).toBe("Characters");
        expect(characterCount.childNodes[1].textContent).toBe("64");
        expect(sentenceCount.childNodes[0].textContent).toBe("Sentences");
        expect(sentenceCount.childNodes[1].textContent).toBe("2");
        expect(paragraphCount.childNodes[0].textContent).toBe("Paragraphs");
        expect(paragraphCount.childNodes[1].textContent).toBe("2");
        expect(pronounCount.childNodes[0].textContent).toBe("Pronouns");
        expect(pronounCount.childNodes[1].textContent).toBe("1");

        fireEvent.click(clearBtn);
        expect(wordCount.childNodes[0].textContent).toBe("Words");
        expect(wordCount.childNodes[1].textContent).toBe("0");
        expect(characterCount.childNodes[0].textContent).toBe("Characters");
        expect(characterCount.childNodes[1].textContent).toBe("0");
        expect(sentenceCount.childNodes[0].textContent).toBe("Sentences");
        expect(sentenceCount.childNodes[1].textContent).toBe("0");
        expect(paragraphCount.childNodes[0].textContent).toBe("Paragraphs");
        expect(paragraphCount.childNodes[1].textContent).toBe("0");
        expect(pronounCount.childNodes[0].textContent).toBe("Pronouns");
        expect(pronounCount.childNodes[1].textContent).toBe("0");
    });
});
