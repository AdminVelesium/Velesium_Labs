"use client";

import React, { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Mail, Phone, MapPin } from "lucide-react";
import { addRegistration } from "./actions";

gsap.registerPlugin(ScrollTrigger);

type RegistrationResponse = {
  successMessage?: string;
  errorMessage?: string;
};

export default function Contact() {
  const sectionRef = useRef<HTMLElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const contactInfoRef = useRef<HTMLDivElement>(null);
  const formRef = useRef<HTMLDivElement>(null);

  const [isPending, setIsPending] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState("");
  const [submitError, setSubmitError] = useState("");
  const form = formRef.current;
  if (form) {
    gsap.set(form, { x: 30, opacity: 0 });
    gsap.to(form, {
      x: 0,
      opacity: 1,
      duration: 0.8,
      ease: "power3.out",
      scrollTrigger: {
        trigger: form,
        start: "top 80%",
      },
    });
  }

  const handleRegister = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsPending(true);
    const formData = new FormData(e.currentTarget);
    const res = (await addRegistration(formData)) as RegistrationResponse;

    if (res.successMessage) {
      setSubmitSuccess(res.successMessage);
      setSubmitError("");
    } else {
      setSubmitError(
        res.errorMessage || "An error occurred while submitting the form."
      );
      setSubmitSuccess("");
    }
    setIsPending(false);
  };

  useEffect(() => {
    const section = sectionRef.current;
    const title = titleRef.current;
    const contactInfo = contactInfoRef.current;

    if (!section || !title || !contactInfo) return;

    const titleWords = title.textContent?.split(" ") || [];
    title.innerHTML = titleWords
      .map((word) => `<span class="word">${word}</span>`)
      .join("<br>");

    const words = title.querySelectorAll(".word");
    gsap.set(words, { y: 100, opacity: 0 });
    gsap.to(words, {
      y: 0,
      opacity: 1,
      duration: 0.8,
      stagger: 0.2,
      ease: "power3.out",
      scrollTrigger: { trigger: title, start: "top 80%" },
    });

    const contactItems = contactInfo.querySelectorAll(".contact-item");
    gsap.set(contactItems, { x: -30, opacity: 0 });
    gsap.to(contactItems, {
      x: 0,
      opacity: 1,
      duration: 0.6,
      stagger: 0.1,
      ease: "power3.out",
      scrollTrigger: { trigger: contactInfo, start: "top 80%" },
    });
    const form = formRef.current;
    if (form) {
      gsap.set(form, { x: 30, opacity: 0 });
      gsap.to(form, {
        x: 0,
        opacity: 1,
        duration: 0.8,
        ease: "power3.out",
        scrollTrigger: {
          trigger: form,
          start: "top 80%",
        },
      });
    }
  }, []);

  return (
    <section
      id="contact"
      ref={sectionRef}
      className="relative py-20 px-6 md:px-8"
    >
      <div className="max-w-6xl mx-auto w- font-poppins">
        <div className="grid md:grid-cols-2 gap-16 items-start">
          {/* Left Side: Text & Contact Info */}
          <div>
            <h2
              ref={titleRef}
              className="text-4xl md:text-6xl font-extrabold uppercase mb-8 leading-tight"
            >
              LET'S WORK TOGETHER
            </h2>
            <div className="w-24 h-1 bg-green-500 mb-8"></div>
            <p className="text-base md:text-lg text-gray-300 mb-8">
              Ready to bring your vision to life? Get in touch and let's create
              something amazing together.
            </p>

            <div ref={contactInfoRef} className="space-y-4">
              <div className="contact-item flex items-center space-x-4">
                <Mail className="w-5 h-5 text-green-500" />
                <span>hello@velesiumlabs.ai</span>
              </div>
              <div className="contact-item flex items-center space-x-4">
                <Phone className="w-5 h-5 text-green-500" />
                <span>+1 (555) 123-4567</span>
              </div>
              <div className="contact-item flex items-center space-x-4">
                <MapPin className="w-5 h-5 text-green-500" />
                <span>New York, NY</span>
              </div>
            </div>
          </div>

          {/* Right Side: Form or Messages */}
          <div ref={formRef} className="w-full max-w-md ml-auto">
            {submitSuccess && (
              <div className="px-6 py-4 rounded bg-green-600/80 text-white font-semibold ring-2 ring-green-400">
                {submitSuccess}
              </div>
            )}
            {submitError && (
              <div className="px-6 py-4 rounded bg-red-600/80 text-white font-semibold ring-2 ring-red-400">
                {submitError}
              </div>
            )}
            {!submitSuccess && !submitError && (
              <form onSubmit={handleRegister} className="space-y-6">
                <input
                  type="text"
                  name="fullName"
                  placeholder="Your Name"
                  required
                  className="w-full bg-transparent border-b border-gray-600 text-white placeholder-gray-400 py-2 focus:outline-none"
                />
                <input
                  type="email"
                  name="email"
                  placeholder="Your Email"
                  required
                  className="w-full bg-transparent border-b border-gray-600 text-white placeholder-gray-400 py-2 focus:outline-none"
                />
                <textarea
                  name="message"
                  placeholder="Your Message"
                  required
                  className="w-full bg-transparent border-b border-gray-600 text-white placeholder-gray-400 py-2 focus:outline-none"
                  rows={4}
                ></textarea>
                <button
                  type="submit"
                  className="bg-green-500 hover:bg-green-600 text-black font-semibold py-3 w-full transition-all duration-300"
                  disabled={isPending}
                >
                  {isPending ? "Processing..." : "SEND MESSAGE"}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
