import { useEffect, useState } from "react";
import { Plus } from "lucide-react";

import testimonialImage from "../../assets/testimonial.png";
import { faqs } from "../../data/constants";

const testimonials = [
  {
    id: 1,
    image: testimonialImage,
    quote:
      "My refund was stuck for weeks. DisputePaisa helped me track it and I got my money back!",
    name: "Priya S.",
    location: "Bengaluru",
  },
  {
    id: 2,
    image: testimonialImage,
    quote:
      "I was confused about how to raise my banking complaint. DisputePaisa made the entire process simple and easy to understand.",
    name: "Rahul M.",
    location: "Delhi",
  },
  {
    id: 3,
    image: testimonialImage,
    quote:
      "I could finally track my complaint without repeatedly contacting the bank. The process was clear and convenient.",
    name: "Sneha R.",
    location: "Mumbai",
  },
];

export default function SocialProof() {
  const [open, setOpen] = useState(-1);
  const [activeIndex, setActiveIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  /* ==========================================
     AUTO TESTIMONIAL ROTATION
  ========================================== */

  useEffect(() => {
    if (isPaused) return;

    const reducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    if (reducedMotion) return;

    const timer = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % testimonials.length);
    }, 4500);

    return () => clearInterval(timer);
  }, [isPaused]);

  /*
   * Always show exactly TWO testimonials
   */
  const first = testimonials[activeIndex];

  const second =
    testimonials[(activeIndex + 1) % testimonials.length];

  return (
    <section
      id="faq"
      className="section-shell pb-16 lg:pb-20"
    >
      <div className="social-proof-grid">

        {/* ==========================================
            LEFT — TESTIMONIALS
        ========================================== */}

        <div
          className="testimonials-column"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >

          <h2 className="section-title testimonial-heading">
            What our customers say
          </h2>

          <div className="testimonial-viewport">

            <div
              key={activeIndex}
              className="testimonial-stack"
            >

              {/* FIRST TESTIMONIAL */}
              <TestimonialCard
                testimonial={first}
              />

              {/* SECOND TESTIMONIAL */}
              <TestimonialCard
                testimonial={second}
              />

            </div>

          </div>

        </div>


        {/* ==========================================
            RIGHT — FAQ
        ========================================== */}

        <div className="faq-column">

          <h2 className="section-title">
            Frequently asked questions
          </h2>

          <div className="faq-card">

            {faqs.map((faq, i) => {
              const question =
                typeof faq === "string"
                  ? faq
                  : faq.question;

              const answer =
                typeof faq === "string"
                  ? "Contact our support team for more details."
                  : faq.answer;

              const isOpen = open === i;

              return (
                <div
                  key={question}
                  className="faq-item"
                >

                  <button
                    type="button"
                    onClick={() =>
                      setOpen(isOpen ? -1 : i)
                    }
                    className="faq-question"
                    aria-expanded={isOpen}
                  >

                    <span>{question}</span>

                    <Plus
                      size={17}
                      className={`faq-icon ${
                        isOpen
                          ? "faq-icon-open"
                          : ""
                      }`}
                    />

                  </button>

                  {isOpen && (
                    <div className="faq-answer">
                      {answer}
                    </div>
                  )}

                </div>
              );
            })}

          </div>

        </div>

      </div>
    </section>
  );
}


/* =====================================================
   TESTIMONIAL CARD COMPONENT
===================================================== */

function TestimonialCard({ testimonial }) {
  return (
    <article className="testimonial-card">

      {/* IMAGE */}
      <div className="testimonial-image-wrapper">

        <img
          src={testimonial.image}
          alt={`${testimonial.name} - DisputePaisa customer`}
          className="testimonial-photo"
        />

      </div>


      {/* CONTENT */}
      <div className="testimonial-content">

        {/* <div className="testimonial-quote-mark">
          “
        </div> */}

        <p className="testimonial-bubble">
          "{testimonial.quote}"
        </p>

        <div className="testimonial-author">

          <strong>
            {testimonial.name}
          </strong>

          <span>
            {testimonial.location}
          </span>

          <span
            className="testimonial-stars"
            aria-label="5 star rating"
          >
            ★★★★★
          </span>

        </div>

      </div>

    </article>
  );
}