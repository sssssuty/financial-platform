import React from "react";
import "../css/Lesson101.css";

const lessons = [
  { id: 1, title: "Budgeting Basics", description: "Learn the art of budgeting" },
  { id: 2, title: "Smart Savings", description: "How to grow your savings effectively" },
  { id: 3, title: "Investment 101", description: "An introduction to investments" },
];

const Lesson101 = () => {
  return (
    <div className="lesson-101">
      <h1>Lesson 101</h1>
      <div className="lesson-cards">
        {lessons.map((lesson) => (
          <div key={lesson.id} className="card">
            <h2>{lesson.title}</h2>
            <p>{lesson.description}</p>
            <button>Read More</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Lesson101;
