import { useEffect } from "react";
import Footer from "./Footer";
import venetianShowcaseImage from "../assets/gallery-venetian-detail-01.jpg";

const Services = () => {
    const services = [
        {
            title: "Wardrobes and Dressing Rooms",
            copy:
                "Custom-designed storage solutions that maximise space while reflecting your style. From walk-in dressing rooms to compact wardrobes, we create functional luxury.",
        },
        {
            title: "Media Walls and Media Units",
            copy:
                "Tailored entertainment solutions that combine aesthetics and practicality. Perfect for showcasing your tech, decor, and lifestyle.",
        },
        {
            title: "Bespoke Cabinetry and Fitted Furniture",
            copy:
                "Handmade furniture crafted to fit your exact space and taste. Ideal for kitchens, living areas, or any room that demands precision and personality.",
        },
        {
            title: "Home Office, Study, and Utility Rooms",
            copy:
                "Smart, stylish solutions for work and everyday life. Optimise productivity and organisation without compromising on design.",
        },
        {
            title: "Alcove Units and Storage Solutions",
            copy:
                "Clever, space-saving furniture that transforms awkward spaces into functional, beautiful features.",
        },
    ];

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <section className="services-container">
            <div className="services-head">
              <div className="services-head-inner">
                <div className="services-head-title">
                  <span className="section-eyebrow">Elegante Bespoke</span>
                  <h1>Our services</h1>
                </div>
                <div className="services-head-copy">
                  <p>
                    Every project we undertake is completely bespoke and made to measure, ensuring
                    each piece is as unique as the client.
                  </p>
                  <p>
                    From sleek modern wardrobes to commercial fit-outs, we craft furniture and
                    installations that seamlessly complement your home or business.
                  </p>
                  <p>
                    Our focus is precision, clean finishes, useful storage, and a finished result
                    that feels naturally built into the room.
                  </p>
                </div>
              </div>
            </div>
            <div className="services-section">
            <div className ="content">
            <div className="services-text">
              <h2 className="sub-head-1">Bespoke carpentry</h2>
                <h2 className="sub-head-2">Made for your space.</h2>
                <div className="services-paragraph">
                    <p>
            We design and build fitted furniture, bespoke carpentry, and media wall installations
            that are measured around the exact proportions of your room.
          </p>

          <p>
            Whether you need a statement entertainment wall, elegant wardrobe storage, clever
            alcove units, or a practical home office, each piece is planned for daily use and
            finished with care.
          </p>
                </div>
            </div>
            <div className="service-highlight-panel">
              <h2>Core services</h2>
              <p>Media walls, bespoke carpentry, fitted furniture, wardrobes, storage, and more.</p>
            </div>
            </div>
            </div>

            <div className="services-section-2">
              <div className="services-list-inner">
                <div className="section-copy">
                  <span className="section-eyebrow">Our services</span>
                  <h2>Designed, built, and fitted</h2>
                  <p>
                    Every installation is tailored to the room, from the structure and storage to
                    the finish, proportions, and final detailing.
                  </p>
                </div>
                <div className="services-detail-grid">
                  {services.map((service) => (
                    <article className="service-detail-card" key={service.title}>
                      <h3>{service.title}</h3>
                      <p>{service.copy}</p>
                    </article>
                  ))}
                </div>
              </div>
            </div>
            <section className="home-accreditation services-finish-section">
              <div className="home-section-inner accreditation-layout">
                <div className="accreditation-copy">
                  <span className="section-eyebrow">Finishes</span>
                  <h2>Venetian plaster finishes.</h2>
                  <p>
                    Transform your walls with luxurious Venetian plaster, creating a smooth,
                    polished surface with depth and texture.
                  </p>
                  <p>
                    Perfect for adding elegance and sophistication to any room, each finish is
                    handcrafted to reflect light beautifully and enhance your interior design.
                  </p>
                </div>
                <div className="accreditation-card">
                  <img
                    className="accreditation-badge"
                    src={venetianShowcaseImage}
                    alt="Venetian plaster detail finish"
                    loading="lazy"
                    decoding="async"
                  />
                </div>
              </div>
            </section>
            <Footer/>
        </section>
    );
  };
  
  export default Services;
