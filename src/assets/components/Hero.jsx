import { FaGithub, FaLinkedin } from "react-icons/fa";
import { motion } from "framer-motion";
import profilePic from "./images/profile.jpeg";

function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center px-8 pt-20">

      <div className="flex flex-col md:flex-row items-center gap-12 max-w-6xl">

        {/* Left Side */}
        <div className="text-center md:text-left">

          <motion.h1
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="text-5xl md:text-6xl font-bold"
          >
            Aanya Dubey
          </motion.h1>

          <p className="text-2xl text-cyan-400 mt-4">
            Java Developer | React Developer
          </p>

          <p className="text-gray-400 mt-4 max-w-lg">
            B.Tech CSE-IT Student passionate about building
            web applications, Java projects and solving
            real-world problems through technology.
          </p>

          {/* Buttons */}
          <div className="flex gap-4 mt-8 justify-center md:justify-start">

           <a
               href="/resume.pdf"
               download
               className="bg-green-500 px-6 py-3 rounded-lg hover:bg-green-600 transition"
            >
               Resume
           </a>

           
            <a
              href="#projects"
              className="bg-cyan-500 px-6 py-3 rounded-lg hover:bg-cyan-600 transition"
            >
              View Projects
            </a>

            <a
              href="#contact"
              className="border border-white px-6 py-3 rounded-lg hover:bg-white hover:text-black transition"
            >
              Contact Me
            </a>
             

          </div>

          {/* Social Icons */}
          <div className="flex gap-5 mt-6 text-3xl justify-center md:justify-start">

            <a
              href="https://github.com/AanyaDubey16"
              target="_blank"
              rel="noreferrer"
              className="hover:text-cyan-400 transition"
            >
              <FaGithub />
            </a>

            <a
              href="https://linkedin.com/in/aanya-dubey-14b557369"
              target="_blank"
              rel="noreferrer"
              className="hover:text-cyan-400 transition"
            >
              <FaLinkedin />
            </a>

          </div>

        </div>

        {/* Right Side Profile Photo */}
        <motion.img
          src={profilePic}
          alt="Aanya Dubey"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
          className="w-64 h-64 rounded-full border-4 border-cyan-500 object-cover shadow-lg"
        />

      </div>

    </section>
  );
}

export default Hero;