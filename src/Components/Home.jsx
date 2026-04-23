import { Link } from "react-router-dom";
import Footer from "./Footer";

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

  return (
  <>
    <section className="home-container">
      <div className="hero">
        <h1>
          <span className="hero-kicker">Elegante Bespoke</span>
          <span className="hero-line">Fitted</span>
          <span className="hero-line hero-line-accent">Bespoke Carpentry</span>
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
        <div className="warranty-card">
          <span className="warranty-number">2</span>
          <h3>Year warranty</h3>
          <p>All our fires come with a warranty for added confidence in your finished media wall.</p>
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
    <Footer/>
    </>
  );
};

export default Home;
