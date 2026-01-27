"use client"; // <-- MUST be first line

import ProfileImage from "./../../public/assets/images/Ashikur_Rahman_Nabir.jpg";
import Image from "next/image";
import { motion } from "framer-motion";
import {
  FaEnvelope, FaFacebook, FaGithub, FaLinkedin, FaPhoneAlt, FaGamepad,
  FaMapMarkerAlt,
  FaBirthdayCake,
} from "react-icons/fa";
import { PROFILE_INFO } from "../const/my-profile-info.constant";

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
            alt={PROFILE_INFO.ProfileInfo.Name}
          />
        </motion.div>
        <motion.div
          initial={{ x: +200, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 1, ease: "easeOut" }} className="bg-profile max-w-[50%] min-w-[50%] text-white profile-info-animator justify-left items-left flex flex-col px-10 pt-5">
          <h2 className="text-profile">{PROFILE_INFO.ProfileInfo.Name}</h2>
          <h3 className="italic text-profile">{PROFILE_INFO.ProfileInfo.CurrentCompanyName}</h3>
          <h4 className="text-profile">{PROFILE_INFO.ProfileInfo.Designation}</h4>
          <p className="text-profile">{PROFILE_INFO.ProfileInfo.SkillSet1}</p>
          <p className="text-profile">{PROFILE_INFO.ProfileInfo.SkillSet2}</p>
          <div className="flex felx-row pt-10 pb-5">
            <div className="w-2 h-4 bg-secondary mt-1"></div>
            <div className="w-4 h-4 text-secondary pl-4 text-profile">CONTACTS</div>
          </div>
          <div className="border"></div>
          <div
            className="flex flex-row pt-5">
            <div className="pt-1">
              <FaPhoneAlt />
            </div>
            <p className="pl-3 text-profile">{PROFILE_INFO.ProfileInfo.Phone}</p>
          </div>

          <div
            className="flex flex-row pt-3">
            <div className="pt-1">
              <FaEnvelope />
            </div>
            <p className="pl-3 text-profile">{PROFILE_INFO.ProfileInfo.Email}</p>
          </div>

          <div
            className="flex flex-row pt-3">
            <div className="pt-1">
              <FaMapMarkerAlt />
            </div>
            <p className="pl-3 text-profile"> {PROFILE_INFO.ProfileInfo.Address}</p>
          </div>

          <div
            className="flex flex-row pt-3">
            <div className="pt-1">
              <FaBirthdayCake />
            </div>
            <p className="pl-3 text-profile">{PROFILE_INFO.ProfileInfo.BirthDay}</p>
          </div>
          <div
            className="flex flex-row pt-3">
            <div className="pt-1">
              <FaGamepad />
            </div>
            <p className="pl-3 text-profile">{PROFILE_INFO.ProfileInfo.Hobby}</p>
          </div>
        </motion.div>
      </div>
      <motion.div
        initial={{ y: +100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 1, ease: "easeOut" }} className="bg-secondary h-16 contact-animator gap-8">
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
        <h2>{PROFILE_INFO.ProfileInfo.BasicDescriptionTitle}</h2>
        <ul className="list-disc list-inside pt-4">
          {PROFILE_INFO.ProfileInfo.DescriptionList.map((item) =>
          (<li className="text-primary">
            {item}
          </li>))}
        </ul>
      </div>
    </div >
  )
}
