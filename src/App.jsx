import React, { useEffect, useRef, useState } from "react";
import profileImg from "./assets/profile.JPG";

import { motion, AnimatePresence } from "framer-motion";
import {
  FaBars,
  FaTimes,
  FaGithub,
  FaGlobe,
  FaDownload,
  FaEnvelope,
  FaLinkedin,
  FaAndroid,
  FaLink,
  FaEdit,
  FaFigma,
  FaLock,
  FaUser,
} from "react-icons/fa";
import {
  FaJava,
  FaPython,
  FaReact,
  FaGitAlt,
  FaDatabase,
  FaNetworkWired,
  FaFileAlt,
  FaUserSecret,
  FaShieldAlt,
  FaHtml5,
  FaCss3Alt,
  FaLaptopCode,
} from "react-icons/fa";

import {
  SiDart,
  SiFlutter,
  SiSupabase,
  SiTailwindcss,
  SiDjango,
  SiMysql,
  SiJavascript,
  SiFirebase,
  SiSqlite,
  SiPostman,
  SiAndroidstudio,
  SiFigma,
  SiFramer,
  SiHtml5,
  SiCss3,
  SiBootstrap,
} from "react-icons/si";
import { MdDashboardCustomize } from "react-icons/md";



/* ---------- Helper data ---------- */
const NAV = [
  { id: "home", label: "Home" },
  { id: "about", label: "About" },
  { id: "skills", label: "Skills" },
  { id: "Certifications", label: "Certifications" },
  { id: "projects", label: "Projects" },
  { id: "experience", label: "Experience" },
  { id: "contact", label: "Contact" },
];

const SKILLS = [
  // Programming Languages
  { name: "Dart", icon: <SiDart /> },
  { name: "Python", icon: <FaPython /> },
  { name: "Java", icon: <FaJava /> },
  { name: "JavaScript (ES6+)", icon: <SiJavascript /> },
  { name: "SQL", icon: <FaDatabase /> },

  // Frameworks & Libraries
  { name: "Flutter", icon: <SiFlutter /> },
  { name: "React", icon: <FaReact /> },
  { name: "Django", icon: <SiDjango /> },
  { name: "Tailwind CSS", icon: <SiTailwindcss /> },
  { name: "Framer Motion", icon: <SiFramer /> },

  // Databases & Backend
  { name: "Supabase", icon: <SiSupabase /> },
  { name: "Firebase", icon: <SiFirebase /> },
  { name: "MySQL", icon: <SiMysql /> },
  { name: "SQLite", icon: <SiSqlite /> },
  { name: "REST APIs", icon: <FaNetworkWired /> },

  // Web Development
  { name: "HTML5", icon: <FaHtml5 /> },
  { name: "CSS3", icon: <FaCss3Alt /> },
  { name: "Responsive UI/UX", icon: <FaLaptopCode /> },
  { name: "Component-based Design", icon: <MdDashboardCustomize /> },

  // Cybersecurity Skills
  { name: "Log Analysis", icon: <FaFileAlt /> },
  { name: "Suspicious Activity Detection", icon: <FaUserSecret /> },
  { name: "Network Fundamentals", icon: <FaNetworkWired /> },
  { name: "Security Best Practices", icon: <FaShieldAlt /> },

  // Tools
  { name: "Git & GitHub", icon: <FaGitAlt /> },
  { name: "Postman", icon: <SiPostman /> },
  { name: "Android Studio", icon: <SiAndroidstudio /> },
  { name: "Figma", icon: <SiFigma /> },
];


const PROJECTS = [
  {
    title: "ChatNova – Real-Time Messaging App",
    desc:
      "Flutter app using Supabase for real-time chat, media sharing, groups, and statuses.",
    img: "/projects/chatnova.png", // placeholder - add image to public/projects/
    github: "https://github.com/Bhushan-3000/ChatNova",
    live: "#", // mobile app so maybe PlayStore link or demo GIF
  },
  {
    title: "FlavorVault – Recipe Management",
    desc:
      "Django-based recipe platform with ingredient e-commerce, cart, and admin dashboard.",
    img: "/projects/flavorvault.png",
    github: "https://github.com/Bhushan-3000/FLAVORVAULT",
    live: "#",
  },
];

const EXPERIENCE = [
  {
    title: "Student Placement Coordinator (Seamedu)",
    org: "Ajeenkya DY Patil University",
    date: "2025 — Present",
    bullets: [
      "Coordinate placements & training",
      "Liaise with industry partners",
      "Organize placement activities",
    ],
  },
  {
    title: "Social Media Intern",
    org: "MES Garware College of Commerce",
    date: "2023 — 2024",
    bullets: ["Managed content planning", "Improved engagement metrics"],
  },
];

/* ---------------------------- CERTIFICATIONS ARRAY ---------------------------- */
const CERTIFICATIONS = [
  {
    title: "Deloitte Australia Cyber Job Simulation – Forage",
    img: "/Bhushan_Kumbhar_Portfolio/certs/deloitte.png",
  },
  {
    title: "UI/UX Design & 3D Modelling Workshop",
    img: "/Bhushan_Kumbhar_Portfolio/certs/uiux.jpg",
  },
  {
    title: "Digital Marketing – 30-hour Course",
    img: "/Bhushan_Kumbhar_Portfolio/certs/dm.jpg",
  },
  {
    title: "Data Analytics & Visualization – 30-hour Course",
    img: "/Bhushan_Kumbhar_Portfolio/certs/data.png",
  },
  // {
  //   title: "Digital Skills & AI Fluency Training Program",
  //   img: "src/assets/certs/ai.png",
  // },
];



/* ---------- Small UI components ---------- */

function Nav({ active, setOpen, open }) {
  return (
    <div className="fixed w-full z-40 top-0 left-0">
      <div className="backdrop-blur-sm bg-black/30 border-b border-white/6">
        <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <img
      src={profileImg}
      alt="Bhushan Kumbhar"
      className="w-12 h-12 rounded-full border-1 border-purple-400 object-cover"
    />
            <div>
              <div className="text-white font-semibold">Bhushan Kumbhar</div>
              <div className="text-xs text-white/60">Cybersecurity | Developer | UI/UX </div>
            </div>
          </div>

          {/* desktop nav */}
          <div className="hidden md:flex gap-4 items-center">
            {NAV.map((n) => (
              <a
                key={n.id}
                href={`#${n.id}`}
                className={`text-sm px-2 py-1 rounded-md ${
                  active === n.id ? "text-white bg-white/6" : "text-white/80"
                } hover:text-white transition`}
              >
                {n.label}
              </a>
            ))}

            <a
              href="/resume.pdf"
              className="ml-4 px-4 py-2 rounded-lg bg-purple-600/70 hover:bg-purple-600 transition text-white flex items-center gap-2"
            >
              <FaDownload /> Resume
            </a>
          </div>

          {/* mobile toggles */}
          <div className="md:hidden flex items-center gap-2">
            <a href="/resume.pdf" className="text-white/90 p-2 hidden sm:inline-flex">
              <FaDownload />
            </a>
            <button
              onClick={() => setOpen((s) => !s)}
              className="p-2 rounded-md border border-white/10 text-white"
              aria-label="menu"
            >
              {open ? <FaTimes /> : <FaBars />}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

/* ---------- Main App ---------- */

export default function App() {
  const [theme, setTheme] = useState("dark"); // toggle style exists in your App already
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("home");

  // refs for sections
  const sectionsRef = useRef({});

  useEffect(() => {
    // IntersectionObserver to set active nav link
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActive(entry.target.id);
          }
        });
      },
      { root: null, rootMargin: "-30% 0px -50% 0px", threshold: 0 }
    );

    NAV.forEach((n) => {
      const el = document.getElementById(n.id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  // close mobile menu on link click
  useEffect(() => {
    if (!open) return;
    const onRoute = () => setOpen(false);
    window.addEventListener("hashchange", onRoute);
    return () => window.removeEventListener("hashchange", onRoute);
  }, [open]);

  // theme css wrapper classes
  const wrapClass =
    theme === "dark"
      ? "bg-gray-900 text-white min-h-screen"
      : "bg-gray-100 text-gray-900 min-h-screen";

  return (
    <div className={wrapClass}>
      {/* NAV */}
      <Nav active={active} setOpen={setOpen} open={open} />

      {/* mobile menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="md:hidden fixed top-[68px] left-0 right-0 z-30"
          >
            <div className="bg-black/60 backdrop-blur-sm border-t border-white/6">
              <div className="flex flex-col gap-2 px-6 py-4">
                {NAV.map((n) => (
                  <a
                    key={n.id}
                    href={`#${n.id}`}
                    className="py-2 px-3 rounded-md text-white/90 hover:bg-white/5"
                  >
                    {n.label}
                  </a>
                ))}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* HERO */}
      <section id="home" className="relative px-6 pt-28 pb-16">
        <div className="absolute inset-0 flex justify-center -z-10 pointer-events-none">
          <div className="w-[520px] h-[520px] rounded-full bg-purple-600/20 blur-[140px]" />
        </div>

        <div className="max-w-6xl mx-auto flex flex-col md:flex-row gap-8 items-center px-6">
          <motion.div
            className="flex-1"
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="backdrop-blur-xl bg-white/6 border border-white/10 rounded-3xl p-10 max-w-3xl">
              <h1 className="text-4xl md:text-5xl font-extrabold mb-4">
                Where <span className="font-extrabold">Development</span>  Meets{" "}
                <span className="text-purple-300 font-extrabold">Cybersecurity</span>
              </h1>
              <p className="text-lg text-white/85 leading-relaxed mb-6">
                I'm <strong>Bhushan Kumbhar</strong> — Cyber Security & Digital
                Forensics Professional and Software Developer. I build secure apps, investigate digital incidents, and ship polished UX.
                
              </p>
              

              <div className="flex flex-wrap gap-3">
                <a
                  href="#projects"
                  className="px-4 py-2 rounded-2xl bg-purple-600/80 hover:bg-purple-600 transition text-white"
                >
                  View Projects
                </a>
                <a
                  href="/resume.pdf" target="_new"
                  className="px-4 py-2 rounded-2xl border border-white/10 text-white/90 hover:bg-white/5 transition flex items-center gap-2"
                >
                  <FaDownload /> Resume
                </a>
                {/* <button
                  onClick={() => setTheme((t) => (t === "dark" ? "light" : "dark"))}
                  className="ml-2 px-3 py-2 rounded-lg border border-white/10 text-white/90"
                >
                  Toggle Theme
                </button> */}
              </div>
            </div>
          </motion.div>

          <motion.div
            className="w-full md:w-96"
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
          >
            <div className="backdrop-blur-xl bg-white/6 border border-white/10 rounded-3xl p-6 text-center">
              {/* Profile placeholder - replace with your image */}
              <div className="w-36 h-36 rounded-full mx-auto overflow-hidden mb-4 border border-white/10">
                <img
                  src={profileImg}
                  alt="Bhushan"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="text-xl font-semibold">Bhushan Kumbhar</div>
              <div className="text-sm text-white/70 mb-3">Cybersecurity • Developer • UI/UX</div>
              <p className="text-sm text-white/80">
                Developing expertise in cybersecurity, digital forensics, penetration testing, and ethical hacking to create secure, impactful tech solutions. 
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ABOUT */}
      <section id="about" className="px-6 py-16">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="backdrop-blur-xl bg-white/6 border border-white/10 rounded-3xl p-8"
          >
            <h3 className="text-2xl font-bold mb-2">About Me</h3>
            <p className="text-white/85 mb-4">
              I’m Bhushan — a Cybersecurity, Digital Forensics and Software Developer. I graduated from MES
              Garware College of Commerce, Pune  and currently pursuing MCA in Cyber Security & Digital
              Forensics at Seamedu - ADYPU. I enjoy building reliable systems, investigating
              incidents, and improving security through code.
            </p>

            <div className="mt-4">
              <h4 className="font-semibold mb-2">Education</h4>
              <ul className="text-sm text-white/80 space-y-2">
                <li>
                  <strong>MCA — Cyber Security & Digital Forensics</strong>
                  <div className="text-xs text-white/70">Seamedu - Ajeenkya DY Patil University (Pursuing)</div>
                </li>
                <li>
                  <strong>BBA-CA</strong>
                  <div className="text-xs text-white/70">MES Garware College of Commerce — Savitribai Phule Pune University</div>
                </li>
              </ul>
            </div>
          </motion.div>

          {/* Timeline */}
          <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}>
            <h3 className="text-2xl font-bold mb-2">Timeline</h3>
            {/* <h4 className="text-lg font-semibold mb-4">Timeline</h4> */}
            <div className="space-y-6">
              {[
                {
                  year: "2025 - Present",
                  title: "Student Placement Coordinator - Seamedu",
                  desc:"Coordinating student placement activities and communication",
                  desc1:"Supporting communication between students and training partners",
                  desc2:"Supporting placement-related operations and documentation",
                    
                },
                {
                  year: "2023 - 2024",
                  title: "Social Media Management Intern - MES Garware College",
                  desc: "Assisted the Social Media Team with Content Ideas",
                  desc1:"Helped Design Posts and Reels to Boost Engagement",
                  desc2:"Photography and Videography for College Events",
                },
              ].map((t) => (
                <div key={t.year} className="flex gap-4 items-start">
                  <div className="w-16">
                    <div className="text-sm text-white/80 font-semibold">{t.year}</div>
                  </div>
                  <div className="flex-1 backdrop-blur-xl bg-white/6 border border-white/10 rounded-2xl p-4">
                    <div className="font-semibold">{t.title}</div>
                    <ul className="list-disc pl-5 mt-1 text-sm text-white/80 marker:text-purple-400">
                      <li>{t.desc}</li>
                      <li>{t.desc1}</li>
                      <li>{t.desc2}</li>
                    </ul>

                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* SKILLS */}
      {/* 🔥 SKILLS SECTION */}
<section id="skills" className="px-8 py-20 max-w-6xl mx-auto">
  <h3 className="text-4xl font-bold mb-12 text-center">Skills</h3>

  <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">

    {/* Programming Languages */}
    <div className="backdrop-blur-xl bg-white/10 dark:bg-white/5 border border-white/20 rounded-3xl p-8 shadow-[0_8px_30px_rgba(0,0,0,0.3)]">
      <h4 className="text-2xl font-bold mb-4">Programming Languages</h4>
      <ul className="space-y-3 opacity-90 text-sm">
        <li className="flex items-center gap-2"><SiDart /> Dart</li>
        <li className="flex items-center gap-2"><FaPython /> Python</li>
        <li className="flex items-center gap-2"><FaJava /> Java</li>
        <li className="flex items-center gap-2"><SiJavascript /> JavaScript</li>
        {/* <li className="flex items-center gap-2"><FaDatabase /> SQL</li> */}
      </ul>
    </div>

    {/* Frameworks & Libraries */}
    <div className="backdrop-blur-xl bg-white/10 dark:bg-white/5 border border-white/20 rounded-3xl p-8 shadow-[0_8px_30px_rgba(0,0,0,0.3)]">
      <h4 className="text-2xl font-bold mb-4">Frameworks & Libraries</h4>
      <ul className="space-y-3 opacity-90 text-sm">
        <li className="flex items-center gap-2"><SiFlutter /> Flutter</li>
        <li className="flex items-center gap-2"><FaReact /> React</li>
        <li className="flex items-center gap-2"><SiDjango /> Django</li>
        <li className="flex items-center gap-2"><SiTailwindcss /> Tailwind CSS</li>
        <li className="flex items-center gap-2"><SiBootstrap /> Bootstrap</li>
        <li className="flex items-center gap-2"><SiFramer /> Framer Motion</li>
      </ul>
    </div>

    {/* Databases & Backend */}
    <div className="backdrop-blur-xl bg-white/10 dark:bg-white/5 border border-white/20 rounded-3xl p-8 shadow-[0_8px_30px_rgba(0,0,0,0.3)]">
      <h4 className="text-2xl font-bold mb-4">Databases & Backend</h4>
      <ul className="space-y-3 opacity-90 text-sm">
        <li className="flex items-center gap-2"><SiSupabase /> Supabase</li>
        <li className="flex items-center gap-2"><SiFirebase /> Firebase</li>
        <li className="flex items-center gap-2"><SiMysql /> MySQL</li>
        <li className="flex items-center gap-2"><FaDatabase /> SQLite</li>
        {/* <li className="flex items-center gap-2"><FaGitAlt /> REST APIs</li> */}
      </ul>
    </div>

    {/* Web Development */}
    <div className="backdrop-blur-xl bg-white/10 dark:bg-white/5 border border-white/20 rounded-3xl p-8 shadow-[0_8px_30px_rgba(0,0,0,0.3)]">
      <h4 className="text-2xl font-bold mb-4">Web Development</h4>
      <ul className="space-y-3 opacity-90 text-sm">
        <li className="flex items-center gap-2"><SiHtml5 /> HTML5</li>
        <li className="flex items-center gap-2"><SiCss3 /> CSS3</li>
        <li className="flex items-center gap-2"><SiJavascript /> JavaScript (ES6+)</li>
        <li className="flex items-center gap-2"><FaReact /> Responsive UI/UX</li>
        {/* <li className="flex items-center gap-2"><FaReact /> Component-based design</li> */}
      </ul>
    </div>

    {/* Cybersecurity Skills */}
    <div className="backdrop-blur-xl bg-white/10 dark:bg-white/5 border border-white/20 rounded-3xl p-8 shadow-[0_8px_30px_rgba(0,0,0,0.3)]">
      <h4 className="text-2xl font-bold mb-4">Cybersecurity</h4>
      <ul className="space-y-3 opacity-90 text-sm">
        <li className="flex items-center gap-2"><FaNetworkWired /> Networking Fundamentals</li>
        <li className="flex items-center gap-2"><FaShieldAlt /> Log Analysis</li>
        <li className="flex items-center gap-2"><FaUser /> Security Operations SOC</li>
        <li className="flex items-center gap-2"><FaShieldAlt /> Suspicious Activity Detection</li>
        <li className="flex items-center gap-2"><FaLock /> Security Best Practices</li>
      </ul>
    </div>

    {/* Tools */}
    <div className="backdrop-blur-xl bg-white/10 dark:bg-white/5 border border-white/20 rounded-3xl p-8 shadow-[0_8px_30px_rgba(0,0,0,0.3)]">
      <h4 className="text-2xl font-bold mb-4">Tools</h4>
      <ul className="space-y-3 opacity-90 text-sm">
        <li className="flex items-center gap-2"><FaGitAlt /> Git & GitHub</li>
        <li className="flex items-center gap-2"><FaEdit /> VS Code</li>
        {/* <li className="flex items-center gap-2"><FaLink /> Postman</li> */}
        <li className="flex items-center gap-2"><FaAndroid /> Android Studio</li>
        <li className="flex items-center gap-2"><FaFigma /> Figma</li>
      </ul>
    </div>
  </div>
</section>



{/* ---------------------------- CERTIFICATIONS SECTION ---------------------------- */}
      <section id="Certifications" className="py-20 px-6">
        <div className="max-w-6xl mx-auto">

          <h2 className="text-3xl font-bold text-center mb-6">Certifications</h2>
          <p className="text-white/70 text-center max-w-2xl mx-auto">
            Verified certifications showcasing my skills across cybersecurity,
            UI/UX, analytics, and digital technologies.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
            {CERTIFICATIONS.map((cert, index) => (
              <div
                key={index}
                className="group bg-white/5 border border-white/10 rounded-xl p-4 
                           hover:bg-white/10 transition-all duration-300"
              >
                <img
                  src={cert.img}
                  alt={cert.title}
                  className="w-full h-48 object-cover rounded-md group-hover:scale-105 
                             transition duration-300"
                />

                <h3 className="text-white font-semibold mt-4 text-sm">
                  {cert.title}
                </h3>

                <a
                  href={cert.img}
                  target="_blank"
                  className="text-xs text-blue-400 hover:underline mt-2 inline-block"
                >
                  View Certificate →
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>


      {/* PROJECTS */}
      <section id="projects" className="px-6 py-16">
        <div className="max-w-6xl mx-auto">
          <h3 className="text-2xl font-bold mb-6">Projects</h3>

          <div className="grid md:grid-cols-2 gap-6">
            {PROJECTS.map((p) => (
              <motion.div
                key={p.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="backdrop-blur-xl bg-white/6 border border-white/10 rounded-3xl p-5"
              >
                <div className="flex gap-4 items-start">
                  <div className="w-20 h-20 rounded-lg overflow-hidden bg-gray-700/30 flex items-center justify-center">
                    <img src={p.img} /> 
                    <span className="text-white/70 text-sm"></span>
                  </div>
                  <div className="flex-1">
                    <div className="flex items-start justify-between gap-2">
                      <div>
                        <h4 className="font-semibold text-lg">{p.title}</h4>
                        <p className="text-sm text-white/80">{p.desc}</p>
                      </div>
                    </div>

                    <div className="mt-4 flex gap-3">
                      <a
                        href={p.github}
                        target="_blank"
                        rel="noreferrer"
                        className="px-3 py-2 rounded-md bg-black/30 border border-white/8 flex items-center gap-2 text-sm"
                      >
                        <FaGithub /> GitHub
                      </a>
                      <a
                        href={p.live}
                        target="_blank"
                        rel="noreferrer"
                        className="px-3 py-2 rounded-md bg-purple-600/80 text-white flex items-center gap-2 text-sm"
                      >
                        <FaGlobe /> Live Demo
                      </a>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* EXPERIENCE */}
      <section id="experience" className="px-6 py-16">
        <div className="max-w-6xl mx-auto">
          <h3 className="text-2xl font-bold mb-6">Experience</h3>

          <div className="grid md:grid-cols-2 gap-6">
            {EXPERIENCE.map((e) => (
              <motion.div
                key={e.title}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="backdrop-blur-xl bg-white/6 border border-white/10 rounded-3xl p-5"
              >
                <div className="flex justify-between items-start">
                  <div>
                    <div className="font-semibold">{e.title}</div>
                    <div className="text-sm text-white/70">{e.org}</div>
                  </div>
                  <div className="text-sm text-white/60">{e.date}</div>
                </div>

                <ul className="mt-3 text-sm text-white/80 list-disc ml-5 marker:text-purple-400">
                  {e.bullets.map((b, i) => (
                    <li key={i}>{b}</li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" className="px-6 py-16">
        <div className="max-w-4xl mx-auto text-center">
          <h3 className="text-2xl font-bold mb-4">Get in touch</h3>
          <p className="text-white/80 mb-6">
            Reach out for collaborations, internships, or freelance work.
          </p>

          <div className="backdrop-blur-xl bg-white/6 border border-white/10 rounded-3xl p-6 mx-auto max-w-md">
            <div className="flex flex-col gap-3">
                <a
                  className="px-4 py-2 rounded-md bg-black/30 flex items-center gap-2 justify-center"
                  href="https://mail.google.com/mail/?view=cm&fs=1&to=bhushan.kumbhar20@gmail.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                <FaEnvelope /> Email Me
              </a>

              <div className="flex gap-3 justify-center mt-3">
                <a href="https://github.com/Bhushan-3000" target="_blank" rel="noreferrer">
                  <FaGithub className="text-2xl" />
                </a>
                <a href="https://www.linkedin.com/in/bhushan-kumbhar-a639ab269/" target="_blank" rel="noreferrer" className="text-2xl">
                  <FaLinkedin />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="py-6 text-center opacity-70 border-t border-white/8">
        {/* © {new Date().getFullYear()}  */}
        Bhushan Kumbhar • Cybersecurity | Developer | UI/UX — © 2025

      </footer>
    </div>
  );
}
