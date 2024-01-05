import { Counter } from "../components/Counter";
import { Footer } from "../components/Footer";
import { Header } from "../components/Header";

export const HomePage = () => {
    return (
        <main className="min-h-screen">
            <Header title="Word Counter" subTitle="Online word and character counting tool for free!" />
            <Counter />
            <Footer />
        </main>
    );
};
