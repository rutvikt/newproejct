import React from 'react';
import './Lecturetopics.scss'; // Import SCSS for styling
import image5 from '../../assets/Images/image5.jpg';

const Lecturetopics = () => {
  return (
    <div className="lecturetopics" id = "blog">
      {/* Left Side - Lecture Topics */}
      <div className="lecturetopics__left">
        <h1 className="lecturetopics__main-heading">Lecture Topics</h1>
        <div className="lecturetopics__underline"></div>

        {/* Lecture 1 */}
        <h2 className="lecturetopics__heading">Lecture 1</h2>
        <p className="lecturetopics__description">
          This is the description for Lecture 1. It provides an overview of the topic and key points.
          Additional insights into Lecture 1, explaining the significance of the topic being covered.
          More elaboration on the subject matter discussed in Lecture 1 to deepen understanding.
          Takeaways from Lecture 1 that highlight the major concepts and applications.
          Takeaways from Lecture 1 that highlight the major concepts and applications.
          Takeaways from Lecture 1 that highlight the major concepts and applications.
        </p>
        <button className="lecturetopics__button">BOOK A KEYNOTE</button>
        <div className="lecturetopics__underline"></div>

        {/* Lecture 2 */}
        <h2 className="lecturetopics__heading">Lecture 2</h2>
        <p className="lecturetopics__description">
          This is the description for Lecture 2. It provides an overview of the topic and key points.
          Additional insights into Lecture 2, explaining the significance of the topic being covered.
          More elaboration on the subject matter discussed in Lecture 2 to deepen understanding.
          More elaboration on the subject matter discussed in Lecture 2 to deepen understanding.
          More elaboration on the subject matter discussed in Lecture 2 to deepen understanding.
          Takeaways from Lecture 2 that highlight the major concepts and applications.
        </p>
        <button className="lecturetopics__button">BOOK A KEYNOTE</button>
        <div className="lecturetopics__underline"></div>

        {/* Lecture 3 */}
        <h2 className="lecturetopics__heading">Lecture 3</h2>
        <p className="lecturetopics__description">
          This is the description for Lecture 3. It provides an overview of the topic and key points.
          Key aspects of Lecture 3, giving a clearer picture of the subject matter.
          Detailed breakdown of Lecture 3 topics, allowing better comprehension of the concepts.
          Detailed breakdown of Lecture 3 topics, allowing better comprehension of the concepts.
          Detailed breakdown of Lecture 3 topics, allowing better comprehension of the concepts.
          Final thoughts and takeaways from Lecture 3, emphasizing the learning outcomes.
        </p>
        <button className="lecturetopics__button">BOOK A KEYNOTE</button>
        <div className="lecturetopics__underline"></div>
      </div>

      {/* Right Side - Image and Experience */}
      <div className="lecturetopics__right">
        <img src={image5} alt="Lecture Experience" className="lecturetopics__image" />
        {/* <div className="lecturetopics__underline"></div> */}
        <div style={{backgroundColor: "#011F4B" , padding: "1rem"}}>
        <h2 className="lecturetopics__experience-heading">My Lecture Experience</h2>
        <p className="lecturetopics__experience-description">
          This section describes my experience with lectures, including key achievements and insights.
          Sharing reflections on the learning process, challenges faced, and important lessons learned.
          Real-world applications of the lecture topics and their impact on understanding concepts better.
          Final thoughts on how these lectures have contributed to my knowledge and skills.
        </p></div>
      </div>
    </div>
  );
};

export default Lecturetopics;
