import React, { useState, useEffect } from "react";
import "./testmonial.css";
import pritam from "../../assets/pritam.jpg"
import tanmay from "../../assets/tanmay.jpg"
import akshat from "../../assets/akshat.jpg"
import sidhhat from "../../assets/sidhhant.jpg"
const testimonials = [
  {
    id: 1,
    content:
      "Working with Aniket has been an absolute pleasure. His dedication to delivering high-quality results is truly commendable.",
    name: "Pritam Gangurde",
    profileLink: "https://www.linkedin.com/in/pritam-gangurde-b51528249/",
    profileImage: pritam,
  },
  {
    id: 2,
    content:
      "Aniket's proficiency in programming and his expertise in web development frameworks reflect his deep understanding of the tech ecosystem.",
      name: "Akshat Tated",
      profileLink: "https://www.linkedin.com/in/akshat-t-478789232/",
      profileImage: akshat,
    },
    {
      id: 3,
      content:
      "Aniket is a natural problem-solver who thrives on tackling challenges with innovative solutions. His project 'LactVivechaka' is a testament to his skills.",
      name: "Gujarathi Sidhhant",
    profileLink: "https://www.linkedin.com/in/gujrathi-siddhant/",
    profileImage: sidhhat,
  },
  {
    id: 4,
    content:
      "Aniket is a collaborative team player who brings positive energy and leadership to every project.",
    name: "Tanmay Ingale",
    profileLink: "https://www.linkedin.com/in/tanmay233ingle/",
    profileImage: tanmay,
  },
];

const TestimonialCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Auto-scroll logic
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
      );
    }, 4000); // 4 seconds per slide
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="carousel-container">
      <div className="carousel-card">
        <img
          src={testimonials[currentIndex].profileImage}
          alt={testimonials[currentIndex].name}
          className="profile-image"
        />
        <p className="testimonial-content">
          "{testimonials[currentIndex].content}"
        </p>
        <h4 className="testimonial-name">{testimonials[currentIndex].name}</h4>
        <a
          href={testimonials[currentIndex].profileLink}
          target="_blank"
          rel="noopener noreferrer"
          className="profile-link"
        >
          View Profile
        </a>
      </div>
    </div>
  );
};

export default TestimonialCarousel;
