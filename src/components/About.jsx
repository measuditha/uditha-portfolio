import React from "react";

const About = () => {
  return (
    <div
      name="about"
      className="w-full h-100 bg-gradient-to-b from-gray-800 to-black text-white about"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            About
          </p>
        </div>

        <p className="text-xl mt-5">
        I am a Software Engineer, working in both, backend and frontend programming. 
        Excited for improving my skills and learning new technologies. Currently I'm open to work and and looking for a internship.
        </p>

        <br />

        <p className="text-xl">
          My ambition is to become a well-qualified software engineer. I can manage multiple projects in a deadline-driven environment and have good problem-solving skills. <br /> <br />
          After completing my Advanced Levels, I started my higher education at ICBT Campus Colombo. I have completed a Higher National Diploma in Software Engineering and Computing . <br /> <br />
          The main reason which caused me to start my higher education in the Software Engineering field was my long-term interest in developing a career in that field. Also the need of gaining knowledge related to software engineering. 
          <br/>
          <br/>
          I was able to study various software engineering subjects in my Advanced National Diploma and during this period I made a decision to complete a software engineering degree because of my interests related to those subjects and my ambition of becoming a skilled software engineer.
          Through these things, my dream of becoming a software engineer has grown up and I have decided to complete a BSc (Hons) in Software Engineering from Cardiff Metropolitan University.
          Currently, I'm searching for a Software Engineering Job opportunity to work as Associate Software Engineer and Grow up my career.
        </p>
      </div>
    </div>
  );
};

export default About;
