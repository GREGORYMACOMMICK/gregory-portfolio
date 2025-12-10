"use client";

import { FaEnvelope, FaPhone, FaInstagram, FaTwitter } from "react-icons/fa";

export default function Contact() {
  const contacts = [
    {
      type: "Email",
      value: "gregorymacomick@gmail.com",
      link: "mailto:gregorymacomick@gmail.com",
      icon: <FaEnvelope className="text-white" />,
      color: "bg-blue-500",
    },
    {
      type: "Phone",
      value: "+254 702 579 887",
      link: "tel:+254702579887",
      icon: <FaPhone className="text-white" />,
      color: "bg-green-500",
    },
    {
      type: "Instagram",
      value: "Gregory Macommick",
      link: "https://www.instagram.com/gregorymacommick",
      icon: <FaInstagram className="text-white" />,
      color: "bg-pink-500",
    },
    {
      type: "Twitter",
      value: "@mac_commick",
      link: "https://twitter.com/mac_commick",
      icon: <FaTwitter className="text-white" />,
      color: "bg-blue-400",
    },
  ];

  return (
    <section className="mb-12">
      <h2 className="text-3xl font-semibold mb-6 text-blue-600">
        Contact Me
      </h2>

      <div className="flex flex-col md:flex-row md:space-x-6 space-y-4 md:space-y-0 max-w-xl">
        {contacts.map((contact, index) => (
          <a
            key={index}
            href={contact.link}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-4 p-4 rounded-full transition transform hover:scale-105 hover:shadow-lg"
          >
            <span
              className={`${contact.color} p-3 rounded-full text-xl flex items-center justify-center animate-bounce`}
            >
              {contact.icon}
            </span>
            <span className="font-medium text-gray-800 hover:text-blue-600 transition">
              {contact.value}
            </span>
          </a>
        ))}
      </div>
    </section>
  );
}
