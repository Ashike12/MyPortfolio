"use client";

import ProfileImage from "./../../public/assets/images/Ashikur_Rahman_Nabir.jpg";
import Image from "next/image";
import { motion } from "framer-motion";
import {
  FaEnvelope,
  FaFacebook,
  FaGithub,
  FaLinkedin,
  FaMapMarkerAlt,
  FaPhoneAlt,
} from "react-icons/fa";
import { FiArrowRight, FiDownload } from "react-icons/fi";
import { PROFILE_INFO } from "../const/my-profile-info.constant";

const socialLinks = [
  {
    href: "https://www.linkedin.com/in/ashikur-rahmam-nabir-381085a7",
    label: "LinkedIn",
    icon: FaLinkedin,
  },
  {
    href: "https://www.facebook.com/ashikur.rahmannabir",
    label: "Facebook",
    icon: FaFacebook,
  },
  {
    href: "https://github.com/ashike12",
    label: "GitHub",
    icon: FaGithub,
  },
  {
    href: "mailto:ashikur.rahmannabir@gmail.com",
    label: "Email",
    icon: FaEnvelope,
  },
];

export default function Profile() {
  const { ProfileInfo } = PROFILE_INFO;

  return (
    <div className="relative overflow-hidden rounded-[2rem] border border-[var(--color-primary-border)] bg-[var(--color-primary-bg)] px-5 py-8 shadow-2xl shadow-black/10 sm:px-8 lg:px-10 lg:py-10">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(56,189,248,0.14),transparent_30%),radial-gradient(circle_at_bottom_left,rgba(249,115,22,0.12),transparent_34%)]" />
      <div className="relative grid gap-8 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="space-y-4"
        >
          <div className="overflow-hidden rounded-[1.75rem] border border-white/10 bg-black/20 shadow-2xl shadow-black/20">
            <Image
              src={ProfileImage}
              alt={ProfileInfo.Name}
              className="h-full w-full object-cover"
              priority
            />
          </div>

          <div className="grid gap-3 sm:grid-cols-2">
          <div className="rounded-2xl border border-[var(--color-primary-border)] bg-[var(--color-primary-bg)] p-4">
              <p className="text-xs uppercase tracking-[0.25em] text-secondary">Current role</p>
              <p className="mt-2 text-lg font-bold text-primary">{ProfileInfo.Designation}</p>
            </div>
          <div className="rounded-2xl border border-[var(--color-primary-border)] bg-[var(--color-primary-bg)] p-4">
              <p className="text-xs uppercase tracking-[0.25em] text-secondary">Company</p>
              <p className="mt-2 text-lg font-bold text-primary">{ProfileInfo.CurrentCompanyName}</p>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: "easeOut", delay: 0.1 }}
          className="relative"
        >
          <div className="inline-flex items-center rounded-full border border-[var(--color-primary-border)] bg-white/5 px-4 py-2 text-sm font-medium text-primary backdrop-blur">
            Open to senior full-stack backend heavy roles
          </div>

          <h1 className="mt-5 max-w-3xl text-2xl font-black leading-tight text-primary sm:text-3xl lg:text-4xl">
            {ProfileInfo.Headline}
          </h1>

          <p className="mt-5 max-w-2xl text-base leading-7 text-primary opacity-80 sm:text-lg">
            {ProfileInfo.Intro}
          </p>

          <div className="mt-6 flex flex-wrap gap-3 text-sm font-medium text-primary">
            <span className="rounded-full border border-[var(--color-primary-border)] bg-white/5 px-4 py-2">
              {ProfileInfo.SkillSet1}
            </span>
            <span className="rounded-full border border-[var(--color-primary-border)] bg-white/5 px-4 py-2">
              {ProfileInfo.SkillSet2}
            </span>
          </div>

          <div className="mt-7 flex flex-wrap gap-3">
            <a
              href="./assets/pdf/ashikur_rahman.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full bg-secondary px-5 py-3 font-semibold text-white shadow-lg shadow-cyan-950/20 transition-transform duration-200 hover:-translate-y-0.5"
            >
              <FiDownload />
              Download resume
            </a>
            <a
              href="#projects"
              className="inline-flex items-center gap-2 rounded-full border border-[var(--color-primary-border)] bg-white/5 px-5 py-3 font-semibold text-primary transition-transform duration-200 hover:-translate-y-0.5 hover:bg-white/10"
            >
              View featured projects
              <FiArrowRight />
            </a>
            <a
              href="mailto:ashikur.rahmannabir@gmail.com"
              className="inline-flex items-center gap-2 rounded-full border border-[var(--color-primary-border)] px-5 py-3 font-semibold text-primary transition-transform duration-200 hover:-translate-y-0.5 hover:bg-white/10"
            >
              Contact me
            </a>
          </div>

          <div className="mt-8 grid gap-4 sm:grid-cols-3">
            {ProfileInfo.QuickStats.map((stat) => (
              <div
                key={stat.label}
                className="rounded-2xl border border-[var(--color-primary-border)] bg-black/10 p-4"
              >
                <p className="text-2xl font-black text-primary">{stat.value}</p>
                <p className="mt-2 text-sm font-semibold uppercase tracking-[0.18em] text-secondary">
                  {stat.label}
                </p>
                <p className="mt-2 text-sm leading-6 text-primary opacity-75">{stat.note}</p>
              </div>
            ))}
          </div>

          <div className="mt-8 rounded-[1.5rem] border border-[var(--color-primary-border)] bg-black/10 p-5">
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-secondary">
              Focus areas
            </p>
            <div className="mt-4 flex flex-wrap gap-2">
              {ProfileInfo.FocusAreas.map((focus) => (
                <span
                  key={focus}
                  className="rounded-full border border-[var(--color-primary-border)] bg-white/5 px-4 py-2 text-sm font-medium text-primary"
                >
                  {focus}
                </span>
              ))}
            </div>
          </div>

          <div className="mt-6 flex flex-wrap gap-4 text-sm text-primary opacity-80">
            <span className="inline-flex items-center gap-2">
              <FaPhoneAlt />
              {ProfileInfo.Phone}
            </span>
            <span className="inline-flex items-center gap-2">
              <FaEnvelope />
              {ProfileInfo.Email}
            </span>
            <span className="inline-flex items-center gap-2">
              <FaMapMarkerAlt />
              {ProfileInfo.Address}
            </span>
          </div>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7, ease: "easeOut", delay: 0.15 }}
        className="relative mt-10 grid gap-4 lg:grid-cols-3"
      >
        <div className="rounded-3xl border border-[var(--color-primary-border)] bg-[var(--color-primary-bg)] p-5">
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-secondary">
            Why I stand out
          </p>
          <h2 className="mt-3 text-2xl text-primary">{ProfileInfo.BasicDescriptionTitle}</h2>
        </div>
        {ProfileInfo.DescriptionList.map((item) => (
          <div
            key={item}
            className="rounded-3xl border border-[var(--color-primary-border)] bg-black/10 p-5"
          >
            <p className="text-sm leading-7 text-primary opacity-80">{item}</p>
          </div>
        ))}
      </motion.div>

      <div className="relative mt-8 rounded-[1.5rem] border border-[var(--color-primary-border)] bg-secondary px-5 py-4">
        <div className="flex flex-wrap items-center justify-center gap-5 text-white">
          {socialLinks.map((link) => {
            const Icon = link.icon;
            return (
              <a
                key={link.label}
                href={link.href}
                target={link.href.startsWith('mailto:') ? undefined : '_blank'}
                rel={link.href.startsWith('mailto:') ? undefined : 'noopener noreferrer'}
                className="inline-flex items-center gap-2 text-lg transition-transform duration-200 hover:-translate-y-0.5"
                aria-label={link.label}
              >
                <Icon />
                <span className="text-sm font-semibold">{link.label}</span>
              </a>
            );
          })}
        </div>
      </div>
    </div>
  );
}
