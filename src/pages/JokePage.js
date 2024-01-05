import { Footer } from '../components/Footer';
import { Header } from '../components/Header';
import { Joke } from '../components/Joke';

export const JokePage = () => {
    return (
        <main className='min-h-screen'>
            <Header title="ChuckNorris Jokes" subTitle="A free JSON API for hand curated Chuck Norris facts." />
            <Joke />
            <Footer />
        </main>
    );
};
