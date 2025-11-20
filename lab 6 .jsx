import React from "react";
import "./styles.css";

const categories = [
  { id: 1, name: "Development" },
  { id: 2, name: "Business" },
  { id: 3, name: "Finance & Accounting" },
  { id: 4, name: "IT & Software" },
  { id: 5, name: "Office Productivity" },
];

const courses = [
  {
    id: 1,
    title: "JavaScript for Beginners",
    instructor: "John Doe",
    rating: 4.7,
    price: 14.99,
    image: "https://via.placeholder.com/200x120",
  },
  {
    id: 2,
    title: "React Complete Guide",
    instructor: "Sarah Smith",
    rating: 4.8,
    price: 19.99,
    image: "https://via.placeholder.com/200x120",
  },
  {
    id: 3,
    title: "Python Masterclass",
    instructor: "Michael Brown",
    rating: 4.6,
    price: 12.99,
    image: "https://via.placeholder.com/200x120",
  },
];

const companies = [
  { id: 1, name: "Nasdaq", logo: "https://via.placeholder.com/80x30" },
  { id: 2, name: "Volkswagen", logo: "https://via.placeholder.com/80x30" },
  { id: 3, name: "Box", logo: "https://via.placeholder.com/80x30" },
  { id: 4, name: "NetApp", logo: "https://via.placeholder.com/80x30" },
];

function Navbar() {
  return (
    <nav className="nav">
      <h1>Udemy</h1>
      <input className="search" placeholder="Search for anything" />
    </nav>
  );
}

function Hero() {
  return (
    <section className="hero">
      <h2>Learning that fits your life</h2>
      <p>Courses to get you started</p>

      <div className="category-row">
        {categories.map((cat) => (
          <div key={cat.id} className="category-box">
            {cat.name}
          </div>
        ))}
      </div>
    </section>
  );
}

function FeaturedCourses() {
  return (
    <section className="section">
      <h2>A Broad Selection of Courses</h2>

      <div className="course-grid">
        {courses.map((c) => (
          <div key={c.id} className="course-card">
            <img src={c.image} alt="" className="course-img" />
            <h3>{c.title}</h3>
            <p>{c.instructor}</p>
            <p>⭐ {c.rating}</p>
            <p>${c.price}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

function TrustedCompanies() {
  return (
    <section className="section">
      <h2>Trusted by companies worldwide</h2>

      <div className="company-row">
        {companies.map((co) => (
          <div key={co.id} className="company-name">
            {co.name}
          </div>
        ))}
      </div>
    </section>
  );
}

export default function App() {
  return (
    <div>
      <Navbar />
      <Hero />
      <FeaturedCourses />
      <TrustedCompanies />
    </div>
  );
}
