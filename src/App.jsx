import Header from './components/Header';
import Footer from './components/Footer';
import Hexagons from './components/Hexagons';
import Home from './pages/Home';
import Writings from './pages/Writings';
import Post from './pages/Post';
import Contact from './pages/Contact';
import Thanks from './pages/Thanks';
import NotFound from './pages/NotFound';

const PAGES = { home: Home, writings: Writings, post: Post, contact: Contact, thanks: Thanks, notFound: NotFound };

export default function App({ route }) {
  const Page = PAGES[route.page];
  return (
    <>
      <a className="skip-link" href="#main">
        Skip to content
      </a>
      <Hexagons />
      <Header />
      <main id="main">
        <Page route={route} />
      </main>
      <Footer />
    </>
  );
}
