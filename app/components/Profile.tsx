"use client"; // <-- MUST be first line

import ProfileImage from "./../../public/assets/images/Ashikur_Rahman_Nabir.jpg";
import Image from "next/image";
import { motion } from "framer-motion";
import {
  FaEnvelope, FaFacebook, FaGithub, FaLinkedin, FaPhoneAlt, FaGamepad,
  FaMapMarkerAlt,
  FaBirthdayCake,
} from "react-icons/fa";

export default function Profile() {
  return (
    <div className="felx felx-col pt-20">
      <div className="flex flex-row w-full">
        <motion.div
          initial={{ x: -200, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="image-animator flex justify-center items-center max-w-[50%] min-w-[50%]"
        >
          <Image
            className="w-full"
            src={ProfileImage}
            alt="Ashikur Rahman Nabir"
          />
        </motion.div>
        <motion.div
          initial={{ x: +200, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 1, ease: "easeOut" }} className="bg-[#46454A] max-w-[50%] min-w-[50%] text-white profile-info-animator justify-left items-left flex flex-col px-10 pt-5">
          <h2>Ashikur Rahman Nabir</h2>
          <h3 className="italic">Selise Digital Platform. (SELISE)</h3>
          <h4>Senior Software Engineer</h4>
          <p>Dotnet | C# | NestJs | Angular | Reactjs | MongoDB | C++ </p>
          <p>| JavaScript | TypeScript | Git | Cypress | E2E</p>
          <div className="flex felx-row pt-10 pb-5">
            <div className="w-2 h-4 bg-[#8B6A63] mt-1"></div>
            <div className="w-4 h-4 text-[#8B6A63] pl-4">CONTACTS</div>
          </div>
          <div className="border"></div>
          <div
            className="flex flex-row pt-5">
            <div className="pt-1">
              <FaPhoneAlt />
            </div>
            <p className="pl-3">+880 1683800976</p>
          </div>

          <div
            className="flex flex-row pt-3">
            <div className="pt-1">
              <FaEnvelope />
            </div>
            <p className="pl-3">ashikur.rahmannabir@gmail.com</p>
          </div>

          <div
            className="flex flex-row pt-3">
            <div className="pt-1">
              <FaMapMarkerAlt />
            </div>
            <p className="pl-3"> Dori para road, Mahona, Word no - 3, Rupganj, Narayanganj</p>
          </div>

          <div
            className="flex flex-row pt-3">
            <div className="pt-1">
              <FaBirthdayCake />
            </div>
            <p className="pl-3">1st February 1995</p>
          </div>
          <div
            className="flex flex-row pt-3">
            <div className="pt-1">
              <FaGamepad />
            </div>
            <p className="pl-3">Gaming, Travelling, Gossiping, Problem Solving</p>
          </div>
        </motion.div>
      </div>
      <motion.div
        initial={{ y: +100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 1, ease: "easeOut" }} className="bg-[#2345ff] h-16 contact-animator gap-8">
        <div className="flex flex-row justify-center items-center h-full gap-8">
          {/* LinkedIn */}
          <a href="https://www.linkedin.com/in/ashikur-rahmam-nabir-381085a7" target="_blank" rel="noopener noreferrer" className="text-white text-xl hover:text-gray-200">
            <FaLinkedin />
          </a>

          {/* Facebook */}
          <a href="https://www.facebook.com/ashikur.rahmannabir" target="_blank" rel="noopener noreferrer" className="text-white text-xl hover:text-gray-200">
            <FaFacebook />
          </a>

          {/* GitHub */}
          <a href="https://github.com/ashike12" target="_blank" rel="noopener noreferrer" className="text-white text-xl hover:text-gray-200">
            <FaGithub />
          </a>

          {/* Gmail / Email */}
          <a href="mailto:ashikur.rahmannabir@gmail.com" className="text-white text-xl hover:text-gray-200">
            <FaEnvelope />
          </a>
        </div>
      </motion.div>
      <div className="pt-20 text-center min-w-full px-20">
        <h2>Hi, I am Ashikur Rahman Nabir</h2>
        <ul className="list-disc list-inside pt-4">
          <li>
            Over the years, I’ve learned technical experience enough and i think it alone isn’t enough — it’s how we lead, collaborate, and communicate that truly drives success.
          </li>
          <li>
            In many South Asian workplaces, appreciation often takes a back seat — mistakes are highlighted more than effort.
            But I believe real leadership isn’t about power or control, it’s about empathy, guidance, and trust.
          </li>
          <li>
            As a senior software engineer, I see my role not just as a coder, but as a mentor and a leader.
          </li>
          <li>
            I can’t be the kind of boss who pressures people, even if a project faces loss.
            Because leadership, to me, means standing beside your team, not above them.
            I prefer to fix systems, not blame people — to focus on improvement, not intimidation.
          </li>
          <li>
            When people feel valued and respected, they naturally deliver their best work.
            That’s the environment I aim to build — whether I’m writing code, mentoring developers, or leading a project from concept to deployment.
          </li>
          <li>
            Because when people feel trusted, they don’t just work — they thrive.
          </li>
          <li>
            Core Skills:
            Senior Software Engineer | Dotnet | C# | Angular | Reactjs | MongoDB | C++ | JavaScript | TypeScript | Git | Problem Solving | Cypress | E2E
          </li>
        </ul>
      </div>
    </div >
  )
}
