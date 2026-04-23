import { useEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import Navigation from './Components/Nav/Navigation';
import Home from './Components/Home'
import Services from './Components/Services'
import './App.css'

function SeoManager() {
  const location = useLocation();

  useEffect(() => {
    const metadata = {
      '/': {
        title: 'Elegante Bespoke | Fitted bespoke carpentry',
        description:
          'Made-to-measure media walls, bespoke carpentry, fitted furniture, wardrobes, storage, and Venetian plaster finishes from Elegante Bespoke.',
      },
      '/services': {
        title: 'Services | Elegante Bespoke',
        description:
          'Explore bespoke carpentry, media walls, fitted furniture, wardrobes, storage, utility rooms, and Venetian plaster finishes from Elegante Bespoke.',
      },
    };

    const current = metadata[location.pathname] ?? metadata['/'];
    document.title = current.title;

    const descriptionTag = document.querySelector('meta[name="description"]');
    const ogTitleTag = document.querySelector('meta[property="og:title"]');
    const ogDescriptionTag = document.querySelector('meta[property="og:description"]');
    const twitterTitleTag = document.querySelector('meta[name="twitter:title"]');
    const twitterDescriptionTag = document.querySelector('meta[name="twitter:description"]');

    if (descriptionTag) descriptionTag.setAttribute('content', current.description);
    if (ogTitleTag) ogTitleTag.setAttribute('content', current.title);
    if (ogDescriptionTag) ogDescriptionTag.setAttribute('content', current.description);
    if (twitterTitleTag) twitterTitleTag.setAttribute('content', current.title);
    if (twitterDescriptionTag) twitterDescriptionTag.setAttribute('content', current.description);
  }, [location.pathname]);

  return null;
}

function App() {
  return (
    <>
      <SeoManager />
      <a className="skip-link" href="#main-content">Skip to content</a>
      <Navigation />
      <main id="main-content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/services" element={<Services />} />
          {/* Add more routes here */}
          {/* <Route path="/*" element={<p>Page not found</p>} /> error page */}
        </Routes>
      </main>
    </>
  );
}
export default App
