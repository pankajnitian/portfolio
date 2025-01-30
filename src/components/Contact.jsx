import React from "react";
import { FaLinkedin, FaGithub, FaEnvelope } from "react-icons/fa";

function Contact() {
  return (
    <section
      id="contact"
      className="bg-gradient-to-r from-gray-800 via-gray-700 to-gray-800 text-gray-100 py-20"
    >
      <div className="max-w-6xl mx-auto px-8 text-center">
        <h2 className="text-4xl font-bold mb-6">Contact Me</h2>
        <p className="text-lg mb-12">
          I’d love to connect with you! Reach out through any of the platforms below.
        </p>
        <div className="flex justify-center items-center gap-12">
          <a
            href="https://www.linkedin.com/in/pankaj-bedwal-b33373264?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-col items-center gap-2 text-lg font-medium hover:text-blue-400 transition-all duration-300"
          >
            <FaLinkedin size={40} />
            LinkedIn
          </a>
          <a
            href="https://github.com/pankajnitian"
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-col items-center gap-2 text-lg font-medium hover:text-gray-400 transition-all duration-300"
          >
            <FaGithub size={40} />
            GitHub
          </a>
          <a
            href="mailto:pankajsikar2002@gmail.com"
            className="flex flex-col items-center gap-2 text-lg font-medium hover:text-red-400 transition-all duration-300"
          >
            <FaEnvelope size={40} />
            Email
          </a>
        </div>
      </div>
    </section>
  );
}

export default Contact;
