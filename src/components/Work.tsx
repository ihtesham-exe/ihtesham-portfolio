import { useState, useCallback } from "react";
import "./styles/Work.css";
import { MdArrowBack, MdArrowForward } from "react-icons/md";

const projects = [
  {
    title: "Ashtra Ascend",
    category: "Business Growing Platform",
    tools: "Next.js, Tailwind CSS, Shadcn UI, Nest.js, framer motion",
    image: "/images/ashtra.png",
  },
  {
    title: "AK Legal Association",
    category: "Legal Association Platform",
    tools: "Next.js, Tailwind CSS, Shadcn UI",
    image: "/images/legal-firm.png",
  },
  {
    title: "Solid Starters",
    category: "Low-Code Platform",
    tools: "Next.js, Tailwind CSS, Shadcn UI",
    image: "/images/Solidx.png",
  },
  {
    title: "Radix",
    category: "E-Commerce",
    tools: "Next.js, Tailwind CSS, Shadcn UI",
    image: "/images/radix.png",
  },
  {
    title: "Sapphire",
    category: "CRM Platform",
    tools: "Next.js, NestJS, PostgreSQL",
    image: "/images/sapphire.png",
  },
  {
    title: "Mpro",
    category: "Insurance Platform",
    tools: "React.js, Node.js, Microservices",
    image: "/images/Maxlife.png",
  },
];

const Work = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  const goToSlide = useCallback(
    (index: number) => {
      if (isAnimating) return;
      setIsAnimating(true);
      setCurrentIndex(index);
      setTimeout(() => setIsAnimating(false), 500);
    },
    [isAnimating],
  );

  const goToPrev = useCallback(() => {
    const newIndex =
      currentIndex === 0 ? projects.length - 1 : currentIndex - 1;
    goToSlide(newIndex);
  }, [currentIndex, goToSlide]);

  const goToNext = useCallback(() => {
    const newIndex =
      currentIndex === projects.length - 1 ? 0 : currentIndex + 1;
    goToSlide(newIndex);
  }, [currentIndex, goToSlide]);

  const getFanClass = (index: number): string => {
    const total = projects.length;
    let diff = index - currentIndex;
    if (diff > total / 2) diff -= total;
    if (diff < -total / 2) diff += total;
    const map: Record<number, string> = {
      [-2]: "work-fan-card fan-left-2",
      [-1]: "work-fan-card fan-left-1",
      [0]: "work-fan-card fan-center",
      [1]: "work-fan-card fan-right-1",
      [2]: "work-fan-card fan-right-2",
    };
    return map[diff] ?? "work-fan-card fan-hidden";
  };

  const current = projects[currentIndex];

  return (
    <div className="work-section" id="work">
      <div className="work-container section-container">
        <h2>
          My <span>Work</span>
        </h2>

        <div className="work-fan-wrapper">
          {/* Fan Stage */}
          <div className="work-fan-stage">
            <button
              className="carousel-arrow carousel-arrow-left"
              onClick={goToPrev}
              aria-label="Previous project"
              data-cursor="disable"
            >
              <MdArrowBack />
            </button>
            <button
              className="carousel-arrow carousel-arrow-right"
              onClick={goToNext}
              aria-label="Next project"
              data-cursor="disable"
            >
              <MdArrowForward />
            </button>

            {projects.map((project, index) => (
              <div
                key={index}
                className={getFanClass(index)}
                onClick={() => index !== currentIndex && goToSlide(index)}
              >
                <img src={project.image} alt={project.title} />
              </div>
            ))}
          </div>

          {/* Project Info */}
          <div className="work-fan-info" key={currentIndex}>
            <div className="work-fan-number">
              <h3>0{currentIndex + 1}</h3>
            </div>
            <div className="work-fan-details">
              <h4>{current.title}</h4>
              <p className="work-fan-category">{current.category}</p>
              <div className="work-fan-tools">
                <span className="tools-label">Tools & Features</span>
                <p>{current.tools}</p>
              </div>
            </div>
          </div>

          {/* Dot Indicators */}
          <div className="carousel-dots">
            {projects.map((_, index) => (
              <button
                key={index}
                className={`carousel-dot ${
                  index === currentIndex ? "carousel-dot-active" : ""
                }`}
                onClick={() => goToSlide(index)}
                aria-label={`Go to project ${index + 1}`}
                data-cursor="disable"
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Work;
