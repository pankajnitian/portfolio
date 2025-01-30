import React from "react";

function Skills() {
  const skills = ['JavaScript', 'TailwindCSS','React.js', 'AWS', 'Git', 'DevOps'];

  return (
<section
  id="skills"
  className="bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500 text-white py-20"
>
  <div className="max-w-5xl mx-auto px-8">
    <h2 className="text-4xl font-bold mb-8 text-center">My Skills</h2>
    <div className="grid grid-cols-2 sm:grid-cols-3 gap-6">
      {skills.map((skill) => (
        <div
          key={skill}
          className="text-lg font-semibold bg-white text-gray-800 py-4 px-6 rounded-lg shadow-lg transform transition-all duration-300 hover:bg-gradient-to-r hover:from-pink-500 hover:to-yellow-500 hover:text-white hover:scale-105"
        >
          {skill}
        </div>
      ))}
    </div>
  </div>
</section>

  );
}

export default Skills;
