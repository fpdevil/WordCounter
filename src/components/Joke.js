import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import { useTitle } from "../hooks/useTitle";

export const Joke = () => {
    useTitle("ChickNorris Joke");

    const [joke, setJoke] = useState(null);

    useEffect(() => {
        const url = "https://api.chucknorris.io/jokes/random";

        const fetchJoke = async () => {
            try {
                const response = await fetch(url, {
                    method: "GET",
                    headers: {
                        Accept: "application/json"
                    }
                });
                const data = await response.json();
                setJoke(data.value);
            } catch (e) {
                console.log(`error: ${e}`);
            }
        };
        fetchJoke();
    }, []);

    return (
        <section className="flex flex-col items-center">
            <div className="gap-4 py-6 px-8 my-8 w-10/12 bg-white rounded-lg border-2 border-gray-100">
                <span className="block pb-8 text-xl font-medium text-center text-pink-600">
                    Joke from api.chucknorris.io{" "}
                </span>

                <span className="font-serif text-xl italic font-medium text-slate-900">
                    <p className="indent-12" data-testid="chuckJoke">{joke}</p>
                </span>
            </div>

            <Link to="/">
                <button
                    type="button"
                    className="inline-block py-3 px-5 mt-6 text-sm font-medium text-white bg-blue-500 rounded-sm ring ring-blue-400 ring-offset-2 ring-offset-blue-100 transition duration-500 ease-in-out hover:text-amber-100 hover:bg-blue-600"
                >
                    Go Home
                </button>
            </Link>
        </section>
    );
};
