import { Link } from "react-router-dom";
import Footer from "./Footer";
import mediaWallImage from "../assets/gallery-media-wall-01.jpg";
import mediaWallDetailImage from "../assets/gallery-media-wall-02.jpg";
import mediaWallLoungeImage from "../assets/gallery-media-wall-03.jpg";
import mediaWallFeatureImage from "../assets/gallery-media-wall-04.jpg";
import mediaWallFireImage from "../assets/gallery-media-wall-05.jpg";
import mediaWallTextureImage from "../assets/gallery-media-wall-06.jpg";
import mediaWallWideImage from "../assets/gallery-media-wall-07.jpg";
import mediaWallClassicImage from "../assets/gallery-media-wall-08.jpg";
import mediaWallLitShelvingImage from "../assets/gallery-media-wall-09.jpg";
import mediaWallCabinetImage from "../assets/gallery-media-wall-10.jpg";
import mediaWallFireplaceImage from "../assets/gallery-media-wall-11.jpg";
import mediaWallDetailFireplaceImage from "../assets/gallery-media-wall-12.jpg";
import fittedFurnitureImage from "../assets/gallery-fitted-furniture-01.jpeg";
import venetianShowcaseImage from "../assets/gallery-venetian-detail-01.jpg";
import venetianImage from "../assets/gallery-venetian-finish-02.jpg";
import venetianFeatureImage from "../assets/hero-venetian-finish.jpg";
import plasterTextureImage from "../assets/gallery-venetian-finish-03.jpg";
import venetianGoldImage from "../assets/gallery-venetian-detail-02.jpg";

const Home = () => {
  const testimonials = [
    {
      quote:
        "Can't thank Jonathan and Liam enough for creating the most perfect media wall. We had an inspiration picture in mind and they created even better than what we imagined.",
      name: "Media wall client",
    },
    {
      quote:
        "Rarely do we come across professional, dedicated and passionate companies whose sole intention is to offer their customers a 5 star experience. Elegante Bespoke exceeded my expectations.",
      name: "Venetian finish client",
    },
    {
      quote:
        "Brilliant job, Liam's work is impeccable. He is very knowledgeable and gave advice during selection of the finish we wanted in our bathroom.",
      name: "Bathroom finish client",
    },
    {
      quote:
        "Very professional team. Full communication all the way through, worked around the clock, and the finished result was to a very high standard.",
      name: "Media wall client",
    },
  ];

  const galleryImages = [
    {
      src: mediaWallImage,
      alt: "Bespoke media wall installation",
    },
    {
      src: mediaWallDetailImage,
      alt: "Media wall shelving and lighting detail",
    },
    {
      src: mediaWallLoungeImage,
      alt: "Modern lounge media wall installation",
    },
    {
      src: mediaWallFeatureImage,
      alt: "Feature media wall with fireplace and shelving",
    },
    {
      src: mediaWallFireImage,
      alt: "Media wall fireplace and television detail",
    },
    {
      src: mediaWallTextureImage,
      alt: "Close-up plaster texture detail around a media wall",
    },
    {
      src: mediaWallWideImage,
      alt: "Wide view of a bespoke media wall installation",
    },
    {
      src: mediaWallClassicImage,
      alt: "Classic media wall with oak shelving and fireplace",
    },
    {
      src: mediaWallLitShelvingImage,
      alt: "Media wall with warm illuminated oak shelving",
    },
    {
      src: mediaWallCabinetImage,
      alt: "White media wall with inset fireplace and storage cabinets",
    },
    {
      src: mediaWallFireplaceImage,
      alt: "Media wall with feature fireplace and framed television",
    },
    {
      src: mediaWallDetailFireplaceImage,
      alt: "Close-up media wall with inset television and fireplace",
    },
    {
      src: fittedFurnitureImage,
      alt: "Fitted bespoke furniture installation",
    },
    {
      src: venetianImage,
      alt: "Venetian plaster feature finish",
    },
    {
      src: venetianFeatureImage,
      alt: "Venetian plaster hero wall finish",
    },
    {
      src: plasterTextureImage,
      alt: "Decorative plaster detail and texture",
    },
    {
      src: venetianShowcaseImage,
      alt: "Venetian plaster detail finish",
    },
    {
      src: venetianGoldImage,
      alt: "Decorative metallic Venetian plaster finish",
    },
  ];

  return (
  <>
    <section className="home-container">
      <div className="hero">
        <h1>
          <span className="hero-kicker">Elegante Bespoke</span>
          {/* <span className="hero-line">Venetian &</span> */}
          <span className="hero-line">Bespoke</span>
          <span className="hero-line hero-line-accent">Interiors</span>
        </h1>
        <div className="hero-actions">
          <a className="primary-button" href="mailto:elegantefinishes@outlook.com?subject=Free%20Quote%20Request">
            Get Free Quote
          </a>
          <a className="hero-secondary-button" href="tel:07954176362">
            Call 07954 176 362
          </a>
        </div>
      </div>
    </section>
    <section className="about-container">
            <div className="about-head">
            <h1>About us.</h1>
            <p> 
                At Elegante Bespoke, we design, build, and install made-to-measure carpentry,
                media walls, and fitted furniture for homes and commercial spaces. Every project
                is planned around your room, your style, and the way you want the finished space
                to feel.
                </p>
            </div>
            <div className="about-section">
            <div className ="content">
            <div className="about-text">
                <h2 className="sub-head-1">Made to measure</h2>
                <div className="about-paragraph">
                   <p>
            From sleek modern wardrobes to detailed commercial fit-outs, we craft furniture and
            installations that fit precisely, work beautifully, and complement the surrounding
            interior. The result is practical storage, refined finishes, and spaces that feel
            properly considered from the first sketch to the final clean-up.
          </p>
                </div>
            </div>
            <div className="service-highlight-panel">
              <h2>Media walls</h2>
              <p>
                Statement entertainment walls built around your fireplace, TV, lighting, storage,
                and decor.
              </p>
              <h2>Bespoke carpentry</h2>
              <p>
                Handmade cabinetry and fitted details for rooms that need precision and personality.
              </p>
              <h2>Fitted furniture</h2>
              <p>
                Wardrobes, alcoves, home offices, utilities, and storage designed for your exact
                space.
              </p>
            </div>
            </div>
            </div>
    </section>
    <section className="home-accreditation">
      <div className="home-section-inner accreditation-layout">
        <div className="accreditation-copy">
          <span className="section-eyebrow">Finishes</span>
          <h2>Venetian plaster finishes.</h2>
          <p>
            Transform your walls with luxurious Venetian plaster, creating a smooth, polished
            surface with depth and texture. Each finish is handcrafted to reflect light beautifully
            and bring elegance to the room.
          </p>
          <p>
            It is a refined choice for media walls, bathrooms, feature walls, and interior spaces
            where the finish needs to feel as considered as the furniture around it.
          </p>
        </div>
        <div className="accreditation-card">
          <img
            className="accreditation-badge"
            src={venetianShowcaseImage}
            alt="Venetian plaster feature finish"
            loading="lazy"
            decoding="async"
          />
        </div>
      </div>
    </section>
    <section className="home-services-preview">
      <div className="home-section-inner">
        <div className="section-copy">
          <h2>Services at a glance</h2>
          <p>
            Every project is completely bespoke and made to measure, ensuring each piece is as
            unique as the client and the space it is built for.
          </p>
        </div>
        <div className="services-preview-grid">
          <article className="service-preview-card">
            <h3>Media Walls</h3>
            <p>
              Tailored entertainment walls and media units designed around your tech, decor, and
              lifestyle.
            </p>
          </article>
          <article className="service-preview-card">
            <h3>Bespoke Carpentry</h3>
            <p>
              Handmade cabinetry, alcove units, and custom joinery crafted to fit your exact space.
            </p>
          </article>
          <article className="service-preview-card">
            <h3>Fitted Furniture</h3>
            <p>
              Wardrobes, dressing rooms, home offices, studies, and utility rooms built for daily
              use.
            </p>
          </article>
        </div>
        <div className="services-preview-action">
          <Link to="/services" className="primary-button" aria-label="View all Elegante Bespoke services">
            View all services
          </Link>
        </div>
      </div>
    </section>
    <section className="home-testimonials">
      <div className="home-section-inner">
        <div className="section-copy">
          <span className="section-eyebrow">Client testimonials</span>
          <h2>Finished to a high standard</h2>
          <p>
            Clients choose Elegante Bespoke for considered design, clear communication, tidy work,
            and craftsmanship that turns inspiration into something even better in the room.
          </p>
        </div>
        <div className="testimonial-grid">
          {testimonials.map((testimonial) => (
            <article className="testimonial-card" key={testimonial.quote}>
              <p>&quot;{testimonial.quote}&quot;</p>
              <span>{testimonial.name}</span>
            </article>
          ))}
        </div>
      </div>
    </section>
    <section className="home-cta">
      <div className="home-section-inner cta-panel">
        <div className="section-copy">
          <h2>Ready to plan your project?</h2>
          <p>
            Whether you are planning a media wall, wardrobes, fitted storage, or a complete bespoke
            carpentry project, we can help shape the idea and build it properly.
          </p>
        </div>
        <div className="cta-actions">
          <a className="primary-button" href="mailto:elegantefinishes@outlook.com">Email us</a>
          <a className="secondary-button" href="tel:07954176362">Call 07954 176 362</a>
        </div>
      </div>
    </section>
    <section className="home-gallery">
      <div className="home-section-inner">
        <div className="section-copy">
          <span className="section-eyebrow">Latest work</span>
          <h2>Recent projects</h2>
          <p>
            A snapshot of recent Elegante Bespoke work, from statement media walls to refined
            finishes and fitted pieces built around the room.
          </p>
        </div>
        <div className="home-gallery-grid">
          {galleryImages.map((image) => (
            <article className="gallery-card" key={image.alt}>
              <img
                className="gallery-image"
                src={image.src}
                alt={image.alt}
                loading="lazy"
                decoding="async"
              />
            </article>
          ))}
        </div>
      </div>
    </section>
    <Footer/>
    </>
  );
};

export default Home;
