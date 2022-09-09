import React from "react";

import javascript from "../assets/javascript.png";
import reactImage from "../assets/react.png";
import nextjs from "../assets/nextjs.png";
import github from "../assets/github.png";
import node from "../assets/node.png";
import express from "../assets/express.png"
import mongodb from "../assets/mongodb.png"
import redux from "../assets/redux.png"
import MySQL from "../assets/mysql.png"
import Springboot from "../assets/spring-boot.png"
import Java from "../assets/Java.png"
import TypeScript from "../assets/ts.png"
import Python from "../assets/py.png"
const Experience = () => {
  const techs = [
    {
      id: 1,
      src: javascript,
      title: "JavaScript",
      style: "shadow-yellow-500",
    },
    {
      id: 2,
      src: reactImage,
      title: "React",
      style: "shadow-blue-600",
    },
    {
      id: 3,
      src: node,
      title: "NodeJs",
      style: "shadow-green-400",
    },
    {
      id: 4,
      src: nextjs,
      title: "Next JS",
      style: "shadow-white",
    },
    {
      id: 5,
      src: github,
      title: "GitHub",
      style: "shadow-gray-400",
    },
    {
      id: 6,
      src: express,
      title: "Express",
      style: "shadow-white",
    },
    {
      id: 7,
      src: mongodb,
      title: "MongoDB",
      style: "shadow-green-500",
    },
    {
      id: 8,
      src: redux,
      title: "Redux",
      style: "shadow-purple-500",
    },
    {
      id: 9,
      src: MySQL,
      title: "My SQL",
      style: "shadow-blue-500",
    },
    {
      id: 10,
      src: Springboot,
      title: "Spring Boot",
      style: "shadow-green-500",
    },
    {
      id: 11,
      src: Java,
      title: "JAVA",
      style: "shadow-red-500",
    },
    {
      id: 12,
      src: TypeScript,
      title: "TypeScript",
      style: "shadow-blue-500",
    },
    {
      id: 13,
      src: Python,
      title: "Python",
      style: "shadow-yellow-500",
    },
  ];

  return (
    <div
      name="experience"
      className="bg-gradient-to-b from-gray-800 to-black w-full h-screen experience"
    >
      <div className="max-w-screen-lg mx-auto p-4 flex flex-col justify-center w-full h-full text-white">
        <div>
          <p className="text-4xl font-bold border-b-4 border-gray-500 p-2 inline">
            Experience
          </p>
          <p className="py-6">These are the technologies I've worked with and used them in my projects.</p>
        </div>

        <div className="w-full grid grid-cols-2 sm:grid-cols-3 gap-8 text-center py-8 px-12 sm:px-0">
          {techs.map(({ id, src, title, style }) => (
            <div
              key={id}
              className={`shadow-md hover:scale-105 duration-500 py-2 rounded-lg ${style}`}
            >
              <img src={src} alt="" className="w-20 mx-auto" />
              <p className="mt-4">{title}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Experience;
