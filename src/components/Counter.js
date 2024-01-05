import { useRef, useState } from "react";
import { Link } from "react-router-dom";

import { useTitle } from "../hooks/useTitle";
import { pronouns } from "../data/pronouns";

export const Counter = () => {
    const textRef = useRef();

    useTitle("Text Processing Counter");

    const [characterCount, setCharacterCount] = useState(0);
    const [wordCount, setWordCount] = useState(0);
    const [sentenceCount, setSentenceCount] = useState(0);
    const [paragraphCount, setParagraphCount] = useState(0);
    const [pronounCount, setPronounCount] = useState(0);

    const handleCount = () => {
        const value = textRef.current.value;

        // set character count
        setCharacterCount(value.length);

        // set word count
        let wordCount = 0;
        if (value.trim().length !== 0) {
            const wordArr = value.split(" ");
            wordArr.forEach((e) => {
                if (!parseInt(e)) {
                    wordCount++;
                }
            });
        }
        setWordCount(wordCount);

        // set sentences count
        const sents = value.split(/[.!?]/).filter((s) => s.trim() !== "");
        setSentenceCount(sents.length);

        // set paragraphs count
        const paras = value.split("\n").filter((p) => p.trim() !== "");
        paras.length ? setParagraphCount(paras.length) : setParagraphCount(0);

        // const paras = value.replace(/\n$/gm, "").split(/\n/);
        // paras.length ? setParagraphCount(paras.length) : setParagraphCount(0);

        // set pronouns count
        // get pure words list without punctuation mark
        const pureWordArray = value
            .split(/\s+/)
            .map((w) => w.replace(/[^\w\s]/g, ""))
            .filter((w) => pronouns.includes(w.trim().toLowerCase()));

        setPronounCount(pureWordArray.length);

        // let pronounCount = 0;
        // const pureWordArray = value.trim().split(/[,.?! ]/); // without punctuation mark
        // pureWordArray.forEach((w) => {
        //   if (pronouns.includes(w.trim().toLowerCase())) {
        //     pronounCount++;
        //   }
        // });
        // setPronounCount(pronounCount);
    };

    const handleButton = () => {
        textRef.current.value = "";
        handleCount();
    };

    // a data structure for holding the result titles, their initial values
    // and the class values for tailwind for specific components
    const results = [
        {
            title: "Words",
            id: "wordCount",
            value: wordCount,
            cls: "m-5 flex sm:w-full w-3/4 flex-col flex-wrap rounded-md border-2 bg-pink-400 px-8 py-2 text-white ring-pink-600 ring-offset-2 transition duration-150 ease-in-out hover:bg-pink-600 hover:text-yellow-100 focus:outline-none focus:ring",
        },
        {
            title: "Characters",
            id: "characterCount",
            value: characterCount,
            cls: "m-5 flex sm:w-full w-3/4 flex-col flex-wrap rounded-md border-2 bg-purple-500 px-8 py-2 text-white ring-purple-600 ring-offset-2 transition duration-150 ease-in-out hover:bg-purple-600 hover:text-yellow-100 focus:outline-none focus:ring",
        },
        {
            title: "Sentences",
            id: "sentenceCount",
            value: sentenceCount,
            cls: "m-5 flex sm:w-full w-3/4 flex-col flex-wrap rounded-md border-2 bg-teal-400 px-8 py-2 text-white ring-teal-600 ring-offset-2 transition duration-150 ease-in-out hover:bg-teal-500 hover:text-yellow-100 focus:outline-none focus:ring",
        },
        {
            title: "Paragraphs",
            id: "paragraphCount",
            value: paragraphCount,
            cls: "m-5 flex sm:w-full w-3/4 flex-col flex-wrap rounded-md border-2 bg-sky-400 px-8 py-2 text-white ring-sky-600 ring-offset-2 transition duration-150 ease-in-out hover:bg-sky-600 hover:text-yellow-100 focus:outline-none focus:ring",
        },
        {
            title: "Pronouns",
            id: "pronounCount",
            value: pronounCount,
            cls: "m-5 flex w-3/4 sm:w-full flex-col flex-wrap rounded-md border-2 bg-rose-400 px-8 py-2 text-white ring-rose-600 ring-offset-2 transition duration-150 ease-in-out hover:bg-rose-600 hover:text-rose-100 focus:outline-none focus:ring",
        },
    ];

    return (
        <section className="px-8 mx-auto w-full">
            <div className="flex justify-center items-center my-8">
                <button
                    type="button"
                    onClick={handleButton}
                    data-testid="clearBtn"
                    className="flex justify-center py-2 px-4 w-3/4 max-w-md text-base font-semibold text-center text-white bg-pink-600 rounded-lg shadow-md transition duration-200 ease-in sm:w-full hover:bg-pink-700 focus:ring-2 focus:ring-pink-500 focus:ring-offset-2 focus:ring-offset-pink-200 focus:outline-none"
                    disabled={characterCount ? "" : true}
                >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth="1.5"
                        stroke="currentColor"
                        className="mr-4 w-6 h-6"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M20.25 7.5l-.625 10.632a2.25 2.25 0 01-2.247 2.118H6.622a2.25 2.25 0 01-2.247-2.118L3.75 7.5m6 4.125l2.25 2.25m0 0l2.25 2.25M12 13.875l2.25-2.25M12 13.875l-2.25 2.25M3.375 7.5h17.25c.621 0 1.125-.504 1.125-1.125v-1.5c0-.621-.504-1.125-1.125-1.125H3.375c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125z"
                        />
                    </svg>
                    Clear Text
                </button>
            </div>

            <div className="flex justify-center">
                <textarea
                    ref={textRef}
                    onChange={handleCount}
                    data-testid="textArea"
                    className="overflow-hidden p-2 w-[90%] h-24 rounded-xl border ring-1 ring-transparent transition duration-300 ease-in-out resize-none sm:w-full focus:border-blue-500 focus:ring-blue-500 focus:outline-none text-slate-700"
                    placeholder="Enter Your Text Here..."
                ></textarea>
            </div>

            <div className="flex flex-wrap">
                <div className="flex flex-col justify-around items-center w-full text-center md:flex-row">
                  {results.map(({ title, id, value, cls }, i) => (
                        <div className={cls} key={i} data-testid={id}>
                            <span className="font-serif font-semibold tracking-wide" data-testid={id+"Key"}>
                                {title}
                            </span>
                            <span className="font-serif text-2xl font-semibold" data-testid={id + "Value"}>
                                {value}
                            </span>
                        </div>
                    ))}
                </div>
            </div>

            <Link to="/joke" className="flex justify-center items-center my-8">
                <button
                    type="button"
                    className="flex justify-center py-2 px-4 text-base font-semibold text-center text-white rounded-md ring ring-rose-300 ring-offset-2 ring-offset-rose-100 shadow-md transition duration-200 ease-in-out hover:text-amber-100 focus:ring-2 focus:ring-offset-2 focus:ring-offset-rose-200 focus:outline-none bg-sky-700 hover:bg-sky-600 focus:ring-sky-500"
                >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth="1.5"
                        stroke="currentColor"
                        className="mr-2 w-6 h-6"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M15.182 15.182a4.5 4.5 0 01-6.364 0M21 12a9 9 0 11-18 0 9 9 0 0118 0zM9.75 9.75c0 .414-.168.75-.375.75S9 10.164 9 9.75 9.168 9 9.375 9s.375.336.375.75zm-.375 0h.008v.015h-.008V9.75zm5.625 0c0 .414-.168.75-.375.75s-.375-.336-.375-.75.168-.75.375-.75.375.336.375.75zm-.375 0h.008v.015h-.008V9.75z"
                        />
                    </svg>
                    Joke
                </button>
            </Link>
        </section>
    );
};
