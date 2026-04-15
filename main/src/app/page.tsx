"use client";

import { type ChangeEvent, type FormEvent, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { iconMapping } from "./utils/iconMapping";
import { withBasePath } from "./utils/withBasePath";

const viewport = { once: true, amount: 0.2 };

const highlights = [
  "Established 2016",
  "Level 1 B-BBEE Contributor",
  "Vendor No: Y95210",
];

const quickFacts = [
  { label: "Location", value: "65 Sussex Street, Mokopane, 0601", icon: "faMapLocationDot" },
  { label: "Call", value: "0781189622", icon: "faPhone" },
  { label: "Email", value: "info@sambomatimba.co.za", icon: "faEnvelope" },
];

const stats = [
  { value: "2016", label: "Established", icon: "faBuilding" },
  { value: "Level 1", label: "B-BBEE status", icon: "faAddressBook" },
  { value: "Y95210", label: "Vendor number", icon: "faScrewdriver" },
  { value: "Mokopane", label: "Operating base", icon: "faMapLocationDot" },
];

const services = [
  {
    title: "Engineering design and planning",
    icon: "faScrewdriver",
    image: withBasePath("/images/steel-installation.jpeg"),
    description:
      "Technical coordination, practical design input and buildable planning shaped around site realities.",
  },
  {
    title: "Roads, bridges and pavements",
    icon: "faTractor",
    image: withBasePath("/images/hero-site.jpeg"),
    description:
      "Construction and maintenance support for transport, access and surface infrastructure across public and private sites.",
  },
  {
    title: "Concrete and reinforcing work",
    icon: "faTrowel",
    image: withBasePath("/images/drainage-works.jpeg"),
    description:
      "Reliable delivery for slabs, structural concrete, reinforcing placement and related civil works.",
  },
  {
    title: "Buildings and built environments",
    icon: "faBuilding",
    image: withBasePath("/images/steel-installation.jpeg"),
    description:
      "Disciplined site management and construction coordination for physically built environments.",
  },
  {
    title: "Dams, drainage and pipelines",
    icon: "faHelmetSafety",
    image: withBasePath("/images/channel-infrastructure.jpeg"),
    description:
      "Civil works for channels, water infrastructure, pipeline installation and site preparation.",
  },
  {
    title: "Supply and project support",
    icon: "faHammer",
    image: withBasePath("/images/pre-install-prep.jpeg"),
    description:
      "Flexible support for EPCM, lump-sum turnkey management and contract-specific delivery requirements.",
  },
];

const enquiryOptions = ["General enquiry", ...services.map((service) => service.title)];

const values = [
  {
    title: "Vision",
    icon: "faEarthAmericas",
    description:
      "To be a preferred professional service provider through excellence and efficiency.",
  },
  {
    title: "Mission",
    icon: "faHelmetSafety",
    description:
      "Excellent service guided by integrity, statutory practice and real client value.",
  },
  {
    title: "Motto",
    icon: "faFaceSmile",
    description: "Exceeding client's expectations.",
  },
  {
    title: "Core values",
    icon: "faAddressBook",
    description:
      "Honesty and integrity, team spirit and diligence, social responsibility, commitment and passion.",
  },
];

const standards = [
  {
    title: "Safety-first operations",
    icon: "faHelmetSafety",
    description:
      "Management procedures are designed to protect people, site conditions and the environment.",
  },
  {
    title: "Quality delivery",
    icon: "faBuilding",
    description:
      "Execution is aligned with client requirements, disciplined supervision and accountable workmanship.",
  },
  {
    title: "Ethical practice",
    icon: "faAddressBook",
    description:
      "The business aligns itself with the code of ethics observed by professional engineering disciplines.",
  },
  {
    title: "Responsive project support",
    icon: "faHammer",
    description:
      "Flexible delivery models allow the team to adapt to project scope, timing and operating conditions.",
  },
];

const clients = [
  "Mogalakwena Municipality",
  "Capricorn District Municipality",
  "Anglo Platinum",
  "DRA Global",
];

const projects = [
  {
    title: "Structural steel installation",
    description:
      "Industrial construction activity with steel framing and heavy plant coordination.",
    image: withBasePath("/images/steel-installation.jpeg"),
    alt: "Steel structure under construction on an industrial site",
    span: "xl:col-span-7",
  },
  {
    title: "Civil lining works",
    description: "Drainage and concrete channel installation in progress.",
    image: withBasePath("/images/drainage-works.jpeg"),
    alt: "Team working inside a block-lined drainage channel",
    span: "xl:col-span-5",
  },
  {
    title: "Channel infrastructure",
    description: "Wide-area concrete and block-lined civil works.",
    image: withBasePath("/images/channel-infrastructure.jpeg"),
    alt: "Large drainage channel under construction",
    span: "xl:col-span-4",
  },
  {
    title: "Drainage finishing",
    description: "Final alignment and finishing work on site.",
    image: withBasePath("/images/channel-finishing.jpeg"),
    alt: "Completed drainage channel with finishing work",
    span: "xl:col-span-4",
  },
  {
    title: "Pre-install preparation",
    description: "Drainage components prepared and staged before installation.",
    image: withBasePath("/images/pre-install-prep.jpeg"),
    alt: "Drainage box units prepared on site",
    span: "xl:col-span-4",
  },
];

const contactDetails = [
  {
    title: "Phone",
    icon: "faPhone",
    lines: [{ label: "078 118 9622", href: "tel:+27781189622" }],
  },
  {
    title: "Email",
    icon: "faEnvelope",
    lines: [{ label: "info@sambomatimba.co.za", href: "mailto:info@sambomatimba.co.za" }],
  },
  {
    title: "Fax",
    icon: "faAddressBook",
    lines: [{ label: "086 718 3690", href: "tel:+27867183690" }],
  },
  {
    title: "Address",
    icon: "faMapLocationDot",
    lines: [
      {
        label: "65 Sussex Street, Mokopane, 0601",
        href: "https://www.google.com/maps/search/?api=1&query=65+Sussex+Street+Mokopane+0601",
      },
    ],
  },
];

export default function Home() {
  const [isWhatsAppFormOpen, setIsWhatsAppFormOpen] = useState(false);
  const [whatsAppForm, setWhatsAppForm] = useState({
    fullName: "",
    phone: "",
    company: "",
    service: "General enquiry",
    message: "",
  });

  const openWhatsAppForm = () => setIsWhatsAppFormOpen(true);
  const closeWhatsAppForm = () => setIsWhatsAppFormOpen(false);

  const handleWhatsAppChange = (
    event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>,
  ) => {
    const { name, value } = event.target;
    setWhatsAppForm((current) => ({ ...current, [name]: value }));
  };

  const handleWhatsAppSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const details = [
      "Hello Sambo Matimba, I would like to enquire about a project.",
      `Name: ${whatsAppForm.fullName}`,
      `Phone: ${whatsAppForm.phone}`,
      whatsAppForm.company ? `Company: ${whatsAppForm.company}` : "",
      `Service: ${whatsAppForm.service}`,
      `Project details: ${whatsAppForm.message}`,
    ]
      .filter(Boolean)
      .join("\n");

    window.open(
      `https://wa.me/27781189622?text=${encodeURIComponent(details)}`,
      "_blank",
      "noopener,noreferrer",
    );

    setIsWhatsAppFormOpen(false);
  };

  return (
    <main className="overflow-x-hidden bg-[#070707] text-white">
      <motion.button
        type="button"
        onClick={openWhatsAppForm}
        aria-label="Chat on WhatsApp"
        animate={{ rotate: [0, 0, 0, -10, 10, -8, 8, 0, 0] }}
        transition={{
          duration: 1.35,
          ease: "easeInOut",
          repeat: Number.POSITIVE_INFINITY,
          repeatDelay: 2.4,
        }}
        className="fixed bottom-8 right-5 z-50 inline-flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-[0_18px_40px_rgba(37,211,102,0.35)] transition hover:scale-[1.03] hover:bg-[#20bd5a]"
      >
        <svg
          aria-hidden="true"
          viewBox="0 0 32 32"
          className="h-7 w-7 fill-current"
        >
          <path d="M19.11 17.21c-.29-.15-1.7-.84-1.96-.94-.26-.1-.45-.15-.64.15-.19.29-.73.94-.9 1.13-.16.19-.33.22-.61.08-.29-.15-1.2-.44-2.28-1.41-.84-.75-1.4-1.68-1.57-1.97-.16-.29-.02-.44.12-.59.13-.13.29-.33.43-.5.15-.17.19-.29.29-.48.1-.19.05-.36-.02-.5-.07-.15-.64-1.54-.88-2.1-.23-.56-.47-.48-.64-.49h-.55c-.19 0-.5.07-.76.36-.26.29-1 1-.98 2.44.02 1.44 1.03 2.83 1.17 3.03.15.19 2.01 3.06 4.87 4.29.68.29 1.22.46 1.64.59.69.22 1.31.19 1.81.12.55-.08 1.7-.69 1.94-1.35.24-.66.24-1.22.17-1.34-.07-.12-.26-.19-.55-.34Z" />
          <path d="M27.29 4.68A15.82 15.82 0 0 0 16.03 0C7.27 0 .13 7.13.13 15.9c0 2.8.73 5.53 2.12 7.94L0 32l8.38-2.2a15.82 15.82 0 0 0 7.64 1.95h.01c8.76 0 15.9-7.13 15.9-15.9 0-4.25-1.65-8.24-4.64-11.17Zm-11.26 24.4h-.01a13.2 13.2 0 0 1-6.73-1.84l-.48-.28-4.97 1.3 1.33-4.84-.31-.5a13.15 13.15 0 0 1-2.02-7.01c0-7.26 5.91-13.17 13.18-13.17 3.52 0 6.82 1.37 9.31 3.85a13.08 13.08 0 0 1 3.86 9.32c0 7.27-5.91 13.17-13.16 13.17Z" />
        </svg>
      </motion.button>

      {isWhatsAppFormOpen ? (
        <div className="fixed inset-0 z-[60] flex items-end justify-center bg-black/72 p-4 sm:items-center">
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.25, ease: "easeOut" }}
            className="w-full max-w-xl rounded-lg border border-white/10 bg-[#0f1110] p-5 shadow-[0_24px_80px_rgba(0,0,0,0.45)] sm:p-6"
          >
            <div className="flex items-start justify-between gap-4">
              <div>
                <p className="text-xs tracking-[0.12em] text-lime-300">
                  WhatsApp Enquiry
                </p>
                <h2 className="mt-2 text-2xl font-semibold text-white">
                  Share your details before we open WhatsApp.
                </h2>
                <p className="mt-3 text-sm leading-6 text-white/72">
                  Add your contact details and project summary, then continue to WhatsApp
                  with a ready-to-send message.
                </p>
              </div>

              <button
                type="button"
                onClick={closeWhatsAppForm}
                className="rounded-md border border-white/10 px-3 py-2 text-sm text-white/72 transition hover:border-white/20 hover:text-white"
              >
                Close
              </button>
            </div>

            <form className="mt-6 grid gap-4" onSubmit={handleWhatsAppSubmit}>
              <div className="grid gap-4 sm:grid-cols-2">
                <label className="grid gap-2 text-sm text-white/78">
                  Full name
                  <input
                    type="text"
                    name="fullName"
                    value={whatsAppForm.fullName}
                    onChange={handleWhatsAppChange}
                    required
                    className="rounded-md border border-white/10 bg-black/25 px-4 py-3 text-white outline-none transition placeholder:text-white/28 focus:border-lime-300"
                    placeholder="Your name"
                  />
                </label>

                <label className="grid gap-2 text-sm text-white/78">
                  Phone number
                  <input
                    type="tel"
                    name="phone"
                    value={whatsAppForm.phone}
                    onChange={handleWhatsAppChange}
                    required
                    className="rounded-md border border-white/10 bg-black/25 px-4 py-3 text-white outline-none transition placeholder:text-white/28 focus:border-lime-300"
                    placeholder="Your contact number"
                  />
                </label>
              </div>

              <div className="grid gap-4 sm:grid-cols-2">
                <label className="grid gap-2 text-sm text-white/78">
                  Company
                  <input
                    type="text"
                    name="company"
                    value={whatsAppForm.company}
                    onChange={handleWhatsAppChange}
                    className="rounded-md border border-white/10 bg-black/25 px-4 py-3 text-white outline-none transition placeholder:text-white/28 focus:border-lime-300"
                    placeholder="Company name"
                  />
                </label>

                <label className="grid gap-2 text-sm text-white/78">
                  Service needed
                  <select
                    name="service"
                    value={whatsAppForm.service}
                    onChange={handleWhatsAppChange}
                    className="rounded-md border border-white/10 bg-black/25 px-4 py-3 text-white outline-none transition focus:border-lime-300"
                  >
                    {enquiryOptions.map((option) => (
                      <option key={option} value={option} className="bg-[#0f1110]">
                        {option}
                      </option>
                    ))}
                  </select>
                </label>
              </div>

              <label className="grid gap-2 text-sm text-white/78">
                Project details
                <textarea
                  name="message"
                  value={whatsAppForm.message}
                  onChange={handleWhatsAppChange}
                  required
                  rows={5}
                  className="rounded-md border border-white/10 bg-black/25 px-4 py-3 text-white outline-none transition placeholder:text-white/28 focus:border-lime-300"
                  placeholder="Tell us about the work, location, timeline and scope."
                />
              </label>

              <div className="flex flex-wrap justify-end gap-3 pt-2">
                <button
                  type="button"
                  onClick={closeWhatsAppForm}
                  className="rounded-md border border-white/12 px-4 py-3 text-sm font-medium text-white/78 transition hover:border-white/20 hover:text-white"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="rounded-md bg-[#25D366] px-5 py-3 text-sm font-medium text-neutral-950 transition hover:bg-[#20bd5a]"
                >
                  Continue to WhatsApp
                </button>
              </div>
            </form>
          </motion.div>
        </div>
      ) : null}

      <div className="border-b border-white/10 bg-black">
        <div className="mx-auto flex w-full max-w-7xl flex-col gap-2 px-4 py-2 text-sm sm:px-6 lg:flex-row lg:items-center lg:justify-between lg:px-10">
          <div className="flex flex-wrap gap-4 text-white/75">
            <a href="tel:+27781189622" className="transition hover:text-lime-300">
              <FontAwesomeIcon icon={iconMapping.faPhone} className="mr-2 text-lime-300" />
              078 118 9622
            </a>
            <a
              href="mailto:info@sambomatimba.co.za"
              className="transition hover:text-lime-300"
            >
              <FontAwesomeIcon
                icon={iconMapping.faEnvelope}
                className="mr-2 text-lime-300"
              />
              info@sambomatimba.co.za
            </a>
          </div>

          <div className="flex flex-wrap gap-3">
            <button
              type="button"
              onClick={openWhatsAppForm}
              className="rounded-md bg-lime-400 px-4 py-2 font-medium text-neutral-950 transition hover:bg-lime-300"
            >
              <FontAwesomeIcon icon={iconMapping.faPhone} className="mr-2" />
              WhatsApp Enquiry
            </button>
          </div>
        </div>
      </div>

      <header className="sticky top-0 z-40 border-b border-white/10 bg-[#090909]/85 backdrop-blur-md">
        <div className="mx-auto flex w-full max-w-7xl flex-col gap-3 px-4 py-3 sm:px-6 lg:flex-row lg:items-center lg:justify-between lg:px-10">
          <Link href="/" className="flex items-center gap-3">
            <Image
              src={withBasePath("/images/logo.jpeg")}
              alt="Sambo Matimba Construction and Projects logo"
              width={76}
              height={76}
              priority
              className="h-14 w-14 rounded-md object-contain ring-1 ring-white/10"
            />
            <div>
              <p className="text-lg font-semibold text-white">Sambo Matimba</p>
              <p className="text-sm text-lime-300">
                Construction &amp; Projects (Pty) Ltd
              </p>
            </div>
          </Link>

          <nav
            aria-label="Primary"
            className="flex flex-wrap items-center gap-5 text-sm text-white/72"
          >
            <a href="#about" className="transition hover:text-lime-300">
              About
            </a>
            <a href="#services" className="transition hover:text-lime-300">
              Services
            </a>
            <a href="#projects" className="transition hover:text-lime-300">
              Projects
            </a>
            <a href="#profile" className="transition hover:text-lime-300">
              Profile
            </a>
            <a href="#contact" className="transition hover:text-lime-300">
              Contact
            </a>
          </nav>
        </div>
      </header>

      <section className="relative isolate overflow-hidden">
        <Image
          src={withBasePath("/images/hero-site.jpeg")}
          alt="Construction crew and machinery working on site"
          fill
          priority
          sizes="100vw"
          className="object-cover object-center"
        />
        <div className="absolute inset-0 bg-[linear-gradient(108deg,rgba(5,5,5,0.92)_16%,rgba(5,5,5,0.72)_48%,rgba(5,5,5,0.3)_100%)]" />
        <div
          className="pointer-events-none absolute inset-y-0 right-0 hidden w-[58%] opacity-60 lg:block"
          style={{
            backgroundImage:
              "repeating-linear-gradient(45deg, rgba(163,230,53,0.09) 0 2px, transparent 2px 26px), repeating-linear-gradient(-45deg, rgba(255,255,255,0.05) 0 2px, transparent 2px 26px)",
            maskImage:
              "linear-gradient(120deg, transparent 8%, rgba(0,0,0,0.65) 28%, rgba(0,0,0,1) 58%, transparent 100%)",
            WebkitMaskImage:
              "linear-gradient(120deg, transparent 8%, rgba(0,0,0,0.65) 28%, rgba(0,0,0,1) 58%, transparent 100%)",
          }}
        />
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_72%_30%,rgba(163,230,53,0.12),transparent_28%),linear-gradient(to_top,rgba(7,7,7,0.42),transparent_32%)]" />

        <div className="relative mx-auto grid min-h-[calc(100svh-132px)] w-full max-w-7xl items-center gap-8 px-4 py-8 sm:min-h-[calc(100svh-118px)] sm:px-6 sm:py-10 lg:grid-cols-[minmax(0,1.05fr)_minmax(320px,0.85fr)] lg:gap-10 lg:px-10 lg:py-10">
          <motion.div
            initial={false}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="max-w-3xl"
          >
            <div className="mb-5 h-1 w-16 rounded-full bg-lime-400" />
            <p className="mb-4 text-xs tracking-[0.14em] text-lime-300">
              Civil Engineering and Construction Solutions
            </p>
            <h1 className="max-w-4xl text-[clamp(2.8rem,7vw,4rem)] font-semibold leading-[0.96]">
              <span className="block">Reliable delivery for</span>
              <span className="relative mt-2 inline-block">
                <motion.span
                  aria-hidden="true"
                  className="absolute inset-x-0 bottom-2 z-0 h-3 rounded bg-lime-400/18"
                  animate={{ opacity: [0.35, 0.7, 0.35], scaleX: [0.97, 1, 0.97] }}
                  transition={{ duration: 3.2, ease: "easeInOut", repeat: Number.POSITIVE_INFINITY }}
                />
                <span className="relative z-10">
                  civil, structural and infrastructure work.
                </span>
              </span>
            </h1>
            <p className="mt-5 max-w-2xl text-sm leading-6 text-white/78 sm:text-base">
              Sambo Matimba Construction &amp; Projects (Pty) Ltd is a Mokopane-based
              company focused on civil engineering, concrete works, roads, bridges,
              pipelines, buildings and practical project support for public, private and
              industrial clients.
            </p>

            <div className="mt-5 flex flex-wrap gap-2 text-[13px] text-white/70">
              <span className="rounded-md border border-white/10 bg-black/20 px-3 py-1.5">
                Civil works
              </span>
              <span className="rounded-md border border-white/10 bg-black/20 px-3 py-1.5">
                Roads and drainage
              </span>
              <span className="rounded-md border border-white/10 bg-black/20 px-3 py-1.5">
                Structural support
              </span>
            </div>

            <div className="mt-6 flex flex-wrap gap-3">
              {highlights.map((item, index) => (
                <motion.div
                  key={item}
                  initial={false}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.45, delay: 0.2 + index * 0.08 }}
                  className="rounded-md border border-white/12 bg-black/25 px-3 py-2 text-[13px] text-white/78 backdrop-blur-sm"
                >
                  {item}
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.aside
            initial={false}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.15, ease: "easeOut" }}
            className="grid gap-5 rounded-lg border border-white/12 bg-[linear-gradient(180deg,rgba(30,30,30,0.56),rgba(18,18,18,0.42))] p-5 shadow-[0_24px_70px_rgba(0,0,0,0.22)] backdrop-blur-md"
          >
            <div>
              <p className="text-xs tracking-[0.12em] text-lime-300">
                Executive Profile
              </p>
              <h2 className="mt-2 text-xl font-semibold text-white">
                Focused attention, practical engineering and accountable site delivery.
              </h2>
            </div>

            <dl className="grid gap-4 text-sm">
              {quickFacts.map((fact) => (
                <div
                  key={fact.label}
                  className="border-b border-white/10 pb-4 last:border-b-0 last:pb-0"
                >
                  <dt className="flex items-center gap-2 text-white/55">
                    <span className="inline-flex h-7 w-7 items-center justify-center rounded-md bg-white/8 text-lime-300">
                      <FontAwesomeIcon
                        icon={iconMapping[fact.icon as keyof typeof iconMapping]}
                        className="text-sm"
                      />
                    </span>
                    {fact.label}
                  </dt>
                  <dd className="mt-1 text-[15px] leading-6 text-white">
                    {fact.value}
                  </dd>
                </div>
              ))}
            </dl>

          </motion.aside>
        </div>
      </section>

      <section className="border-y border-white/10 bg-[#0f0f10]">
        <div className="mx-auto grid w-full max-w-7xl gap-8 px-4 py-8 sm:px-6 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] lg:px-10">
          <motion.div
            initial={false}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={viewport}
            transition={{ duration: 0.6 }}
          >
            <p className="text-xs tracking-[0.12em] text-lime-300">
              Trusted Environments
            </p>
            <p className="mt-3 max-w-xl text-white/78">
              Trusted across municipal, mining and infrastructure environments where
              quality, safety and reliable delivery matter.
            </p>
          </motion.div>

          <div className="grid gap-3 sm:grid-cols-2 xl:grid-cols-4">
            {clients.map((client, index) => (
              <motion.div
                key={client}
                initial={false}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={viewport}
                transition={{ duration: 0.45, delay: index * 0.06 }}
                className="rounded-md border border-white/10 bg-white/5 px-4 py-3 text-sm text-white/78 transition hover:border-lime-400/40 hover:bg-white/8"
              >
                {client}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section id="about" className="bg-[#070707] py-20">
        <div className="mx-auto grid w-full max-w-7xl gap-12 px-4 sm:px-6 lg:grid-cols-[minmax(320px,0.95fr)_minmax(0,1.05fr)] lg:px-10">
          <motion.div
            initial={false}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={viewport}
            transition={{ duration: 0.7 }}
            className="relative overflow-hidden rounded-lg"
          >
            <div className="relative aspect-[4/5] w-full">
              <Image
                src={withBasePath("/images/channel-infrastructure.jpeg")}
                alt="Large block-lined drainage channel under construction"
                fill
                sizes="(min-width: 1024px) 38vw, 100vw"
                className="object-cover transition duration-700 hover:scale-[1.03]"
              />
            </div>
            <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black via-black/70 to-transparent p-6">
              <p className="text-xs tracking-[0.12em] text-lime-300">
                About the Company
              </p>
              <p className="mt-2 max-w-sm text-white/82">
                Multi-disciplinary construction support shaped around execution,
                communication and client value.
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={false}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={viewport}
            transition={{ duration: 0.7 }}
          >
            <p className="text-xs tracking-[0.12em] text-lime-300">
              Company Overview
            </p>
            <h2 className="mt-3 max-w-3xl text-3xl font-semibold text-white sm:text-[2rem]">
              Practical engineering support backed by disciplined project management.
            </h2>
            <div className="mt-6 max-w-3xl space-y-5 text-white/78">
              <p>
                Registered in 2016 to operate in civil engineering construction, Sambo
                Matimba Construction &amp; Projects continues to grow as a
                multi-disciplinary practice that gives each client specialist attention and
                solution-led support in an ever-changing project environment.
              </p>
              <p>
                The company works with experienced personnel from strong civil
                engineering backgrounds and treats teamwork, communication and efficient
                project management as part of the service. The goal is simple: provide
                complete construction solutions with the quality and consistency clients can
                rely on.
              </p>
            </div>

            <div className="mt-10 grid gap-4 sm:grid-cols-2">
              {stats.map((item, index) => (
                <motion.div
                  key={item.label}
                  initial={false}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={viewport}
                  transition={{ duration: 0.45, delay: index * 0.06 }}
                  whileHover={{ y: -4 }}
                  className="rounded-lg border border-white/10 bg-[#101011] p-5 transition"
                >
                  <span className="inline-flex h-11 w-11 items-center justify-center rounded-md bg-lime-400/10 text-lime-300">
                    <FontAwesomeIcon
                      icon={iconMapping[item.icon as keyof typeof iconMapping]}
                    />
                  </span>
                  <p className="mt-3 text-2xl font-semibold text-white">{item.value}</p>
                  <p className="mt-2 text-sm text-white/56">
                    {item.label}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        <div className="mx-auto mt-12 grid w-full max-w-7xl gap-4 px-4 sm:px-6 md:grid-cols-2 lg:grid-cols-4 lg:px-10">
          {values.map((item, index) => (
            <motion.article
              key={item.title}
              initial={false}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={viewport}
              transition={{ duration: 0.5, delay: index * 0.06 }}
              whileHover={{ y: -6 }}
              className="rounded-lg border border-white/10 bg-[#111112] p-6 transition"
            >
              <div className="flex items-center gap-3">
                <span className="inline-flex h-10 w-10 items-center justify-center rounded-md bg-lime-400/10 text-lime-300">
                  <FontAwesomeIcon
                    icon={iconMapping[item.icon as keyof typeof iconMapping]}
                  />
                </span>
                <p className="text-xs tracking-[0.12em] text-lime-300">
                  {item.title}
                </p>
              </div>
              <p className="mt-4 text-white/78">{item.description}</p>
            </motion.article>
          ))}
        </div>
      </section>

      <section id="services" className="bg-[#f4f5f1] py-20 text-neutral-950">
        <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-10">
          <motion.div
            initial={false}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={viewport}
            transition={{ duration: 0.65 }}
            className="grid gap-8 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] lg:items-end"
          >
            <div>
              <p className="text-xs tracking-[0.12em] text-lime-700">
                Market and Services
              </p>
              <h2 className="mt-3 text-3xl font-semibold sm:text-[2rem]">
                Capability aligned to site conditions, programme demands and client goals.
              </h2>
            </div>

            <p className="max-w-3xl text-neutral-700">
              Sambo Matimba Construction &amp; Projects can support full EPCM and
              lump-sum turnkey management, individual project delivery and engineering
              provision depending on client requirements.
            </p>
          </motion.div>

          <div className="mt-12 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
            {services.map((service, index) => (
              <motion.article
                key={service.title}
                initial={false}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={viewport}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                whileHover={{ y: -8 }}
                className="group rounded-lg border border-neutral-200 bg-white p-6 shadow-[0_18px_40px_rgba(0,0,0,0.06)] transition"
              >
                <div className="relative mb-5 overflow-hidden rounded-md">
                  <div className="relative aspect-[16/10]">
                    <Image
                      src={service.image}
                      alt={service.title}
                      fill
                      sizes="(min-width: 1280px) 30vw, (min-width: 768px) 50vw, 100vw"
                      className="object-cover transition duration-700 group-hover:scale-[1.05]"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
                  </div>
                  <span className="absolute left-4 top-4 inline-flex h-11 w-11 items-center justify-center rounded-md bg-black/65 text-lime-300 backdrop-blur-sm">
                    <FontAwesomeIcon
                      icon={iconMapping[service.icon as keyof typeof iconMapping]}
                    />
                  </span>
                </div>
                <div className="flex items-center justify-between">
                  <div className="h-1 w-14 rounded bg-lime-500 transition group-hover:w-20" />
                  <span className="text-sm text-neutral-400">
                    0{index + 1}
                  </span>
                </div>
                <h3 className="mt-5 text-xl font-medium">{service.title}</h3>
                <p className="mt-3 text-neutral-700">{service.description}</p>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#0b0d0b] py-20">
        <div className="mx-auto grid w-full max-w-7xl gap-10 px-4 sm:px-6 lg:grid-cols-[minmax(0,0.88fr)_minmax(0,1.12fr)] lg:px-10">
          <motion.div
            initial={false}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={viewport}
            transition={{ duration: 0.65 }}
          >
            <p className="text-xs tracking-[0.12em] text-lime-300">
              Standards and Values
            </p>
            <h2 className="mt-3 text-3xl font-semibold text-white sm:text-[2rem]">
              Safety, quality and ethics are treated as operating requirements.
            </h2>
            <p className="mt-5 max-w-2xl text-white/78">
              The company profile highlights a world-class safety approach, quality
              systems aligned with ISO-based thinking, ethical conduct and accountable
              ownership.
            </p>

            <div className="mt-8 rounded-lg border border-lime-400/20 bg-lime-400/8 p-5">
              <p className="text-xs tracking-[0.12em] text-lime-300">
                Operating Promise
              </p>
              <p className="mt-3 text-white/76">
                Exceeding client expectations through planning discipline, responsive
                communication and consistent site execution.
              </p>
            </div>

            <div className="mt-8 overflow-hidden rounded-lg border border-white/10">
              <div className="relative aspect-[16/10]">
                <Image
                  src={withBasePath("/images/hero-site.jpeg")}
                  alt="Construction crew operating on an active infrastructure site"
                  fill
                  sizes="(min-width: 1024px) 34vw, 100vw"
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/35 to-transparent" />
                <div className="absolute inset-x-0 bottom-0 p-5">
                  <p className="text-xs tracking-[0.12em] text-lime-300">
                    Field Capability
                  </p>
                  <p className="mt-2 max-w-sm text-white/78">
                    Site-ready teams, active coordination and disciplined delivery on the
                    ground.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          <div className="grid gap-4 sm:grid-cols-2">
            {standards.map((item, index) => (
              <motion.article
                key={item.title}
                initial={false}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={viewport}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                whileHover={{ y: -6 }}
                className="rounded-lg border border-white/10 bg-white/5 p-6 backdrop-blur-sm transition"
              >
                <div className="flex items-center gap-3">
                  <span className="inline-flex h-10 w-10 items-center justify-center rounded-md bg-lime-400/10 text-lime-300">
                    <FontAwesomeIcon
                      icon={iconMapping[item.icon as keyof typeof iconMapping]}
                    />
                  </span>
                  <h3 className="text-lg font-medium text-white">{item.title}</h3>
                </div>
                <p className="mt-3 text-white/72">{item.description}</p>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      <section id="projects" className="bg-[#070707] py-20">
        <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-10">
          <motion.div
            initial={false}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={viewport}
            transition={{ duration: 0.65 }}
            className="grid gap-8 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] lg:items-end"
          >
            <div>
              <p className="text-xs tracking-[0.12em] text-lime-300">
                Projects and Site Work
              </p>
              <h2 className="mt-3 text-3xl font-semibold text-white sm:text-[2rem]">
                Site imagery that reflects real work, live conditions and disciplined
                delivery.
              </h2>
            </div>

            <p className="text-white/76">
              The gallery below uses supplied site photos to show structural work,
              drainage installations and active construction support across the project
              portfolio.
            </p>
          </motion.div>

          <div className="mt-12 grid gap-4 xl:grid-cols-12">
            {projects.map((project, index) => (
              <motion.article
                key={project.title}
                initial={false}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={viewport}
                transition={{ duration: 0.55, delay: index * 0.05 }}
                whileHover={{ y: -8 }}
                className={`group relative overflow-hidden rounded-lg border border-white/10 bg-[#101011] ${project.span}`}
              >
                <div className="relative aspect-[4/3] w-full">
                  <Image
                    src={project.image}
                    alt={project.alt}
                    fill
                    sizes="(min-width: 1280px) 40vw, (min-width: 768px) 50vw, 100vw"
                    className="object-cover transition duration-700 group-hover:scale-[1.04]"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />
                </div>
                <div className="absolute inset-x-0 bottom-0 p-5">
                  <span className="inline-flex h-10 w-10 items-center justify-center rounded-md bg-black/65 text-lime-300 backdrop-blur-sm">
                    <FontAwesomeIcon icon={iconMapping.faHelmetSafety} />
                  </span>
                  <h3 className="mt-3 text-xl font-medium text-white">{project.title}</h3>
                  <p className="mt-2 max-w-xl text-white/78">{project.description}</p>
                </div>
              </motion.article>
            ))}

          </div>
        </div>
      </section>

      <section id="contact" className="bg-[#f4f5f1] py-20 text-neutral-950">
        <div className="mx-auto grid w-full max-w-7xl gap-10 px-4 sm:px-6 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] lg:px-10">
          <motion.div
            initial={false}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={viewport}
            transition={{ duration: 0.65 }}
          >
            <p className="text-xs tracking-[0.12em] text-lime-700">
              Contact Us
            </p>
            <h2 className="mt-3 text-3xl font-semibold sm:text-[2rem]">
              Start the conversation with a team ready to quote, plan and deliver.
            </h2>
            <p className="mt-5 max-w-2xl text-neutral-700">
              Use the direct details below, open the business profile, or start a
              WhatsApp conversation for project enquiries and quotations.
            </p>

            <div className="mt-8 relative overflow-hidden rounded-lg">
              <div className="relative aspect-[16/11]">
                <Image
                  src={withBasePath("/images/drainage-works.jpeg")}
                  alt="Civil works team inside drainage infrastructure"
                  fill
                  sizes="(min-width: 1024px) 38vw, 100vw"
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-transparent" />
              </div>
              <div className="absolute inset-x-0 bottom-0 p-6 text-white">
                <p className="text-xs tracking-[0.12em] text-lime-300">
                  Direct Enquiries
                </p>
                <p className="mt-2 max-w-md text-white/82">
                  Reach the company for quotations, project support and profile requests.
                </p>
              </div>
            </div>
          </motion.div>

          <div className="grid gap-4 sm:grid-cols-2">
            {contactDetails.map((item, index) => (
              <motion.article
                key={item.title}
                initial={false}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={viewport}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                whileHover={{ y: -6 }}
                className="rounded-lg border border-neutral-200 bg-white p-6 shadow-[0_18px_40px_rgba(0,0,0,0.06)] transition"
              >
                <div className="flex items-center gap-3">
                  <span className="inline-flex h-10 w-10 items-center justify-center rounded-md bg-lime-400/10 text-lime-700">
                    <FontAwesomeIcon
                      icon={iconMapping[item.icon as keyof typeof iconMapping]}
                    />
                  </span>
                  <h3 className="text-lg font-medium">{item.title}</h3>
                </div>
                <div className="mt-4 space-y-2 text-neutral-700">
                  {item.lines.map((line) => (
                    <a
                      key={line.label}
                      href={line.href}
                      target={line.href.startsWith("http") ? "_blank" : undefined}
                      rel={line.href.startsWith("http") ? "noreferrer" : undefined}
                      className="block transition hover:text-lime-700"
                    >
                      {line.label}
                    </a>
                  ))}
                </div>
              </motion.article>
            ))}

            <motion.article
              initial={false}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={viewport}
              transition={{ duration: 0.55, delay: 0.22 }}
              className="rounded-lg bg-[#0b0d0b] p-6 text-white sm:col-span-2"
            >
              <div className="flex flex-col gap-5 md:flex-row md:items-end md:justify-between">
                <div>
                  <p className="text-xs tracking-[0.12em] text-lime-300">
                    Ready to connect
                  </p>
                  <h3 className="mt-3 text-2xl font-semibold">
                    Share your scope and get a direct response from the team.
                  </h3>
                </div>

                <div className="flex flex-wrap gap-4">
                  <a
                    href="mailto:info@sambomatimba.co.za?subject=Project%20Enquiry"
                    className="rounded-md bg-lime-400 px-5 py-3 font-medium text-neutral-950 transition hover:bg-lime-300"
                  >
                    Send Email
                  </a>
                  <button
                    type="button"
                    onClick={openWhatsAppForm}
                    className="rounded-md border border-white/20 px-5 py-3 font-medium text-white transition hover:border-lime-300 hover:text-lime-300"
                  >
                    WhatsApp
                  </button>
                </div>
              </div>
            </motion.article>
          </div>
        </div>
      </section>

      <footer className="border-t border-white/10 bg-black">
        <div className="mx-auto flex w-full max-w-7xl flex-col gap-3 px-4 py-6 text-sm text-white/68 sm:px-6 lg:flex-row lg:items-center lg:justify-between lg:px-10">
          <p>
            Copyright {new Date().getFullYear()} Sambo Matimba Construction &amp; Projects
            (Pty) Ltd. All rights reserved.
          </p>
          <a href="https://www.globalstack.co.za" target="_blank" rel="noopener noreferrer">
            <p className="text-lime-300">Powered by Global Stack</p>
          </a>
        </div>
      </footer>
    </main>
  );
}
