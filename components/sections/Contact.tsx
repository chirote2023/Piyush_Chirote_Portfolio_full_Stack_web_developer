"use client";

import { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { Mail, Phone, MapPin, Send, ExternalLink, CheckCircle2, AlertCircle } from "lucide-react";

const GithubIcon = ({ size = 18 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
  </svg>
);

const LinkedinIcon = ({ size = 18 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
  </svg>
);

const LeetcodeIcon = ({ size = 18 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
    <path d="M13.483 0a1.374 1.374 0 0 0-.961.438L7.116 6.226l-3.854 4.126a5.266 5.266 0 0 0-1.209 2.104 5.35 5.35 0 0 0-.125.513 5.527 5.527 0 0 0 .062 2.362 5.83 5.83 0 0 0 .349 1.017 5.938 5.938 0 0 0 1.271 1.818l4.277 4.193.039.038c2.248 2.165 5.852 2.133 8.063-.074l2.396-2.392c.54-.54.54-1.414.003-1.955a1.378 1.378 0 0 0-1.951-.003l-2.396 2.392a3.021 3.021 0 0 1-4.205.038l-.02-.019-4.276-4.193c-.652-.64-.972-1.469-.948-2.263a2.68 2.68 0 0 1 .066-.523 2.545 2.545 0 0 1 .619-1.164L9.13 8.114c1.058-1.134 3.204-1.27 4.43-.278l3.501 2.831c.593.48 1.461.387 1.94-.207a1.384 1.384 0 0 0-.207-1.943l-3.5-2.831c-.8-.647-1.766-1.045-2.774-1.202l2.015-2.158A1.384 1.384 0 0 0 13.483 0zm-2.866 12.815a1.38 1.38 0 0 0-1.38 1.382 1.38 1.38 0 0 0 1.38 1.382H20.79a1.38 1.38 0 0 0 1.38-1.382 1.38 1.38 0 0 0-1.38-1.382z" />
  </svg>
);

const contactInfo = [
  {
    icon: Mail,
    label: "Email",
    value: "piyushchirote597@gmail.com",
    href: "mailto:piyushchirote597@gmail.com",
    color: "blue",
  },
  {
    icon: Phone,
    label: "Phone",
    value: "+91 6266084653",
    href: "tel:+916266084653",
    color: "purple",
  },
  {
    icon: MapPin,
    label: "Location",
    value: "Indore, Madhya Pradesh",
    href: "#",
    color: "cyan",
  },
];

const colorStyle: Record<string, string> = {
  blue: "border-blue-500/20 bg-blue-500/10 text-blue-400",
  purple: "border-purple-500/20 bg-purple-500/10 text-purple-400",
  cyan: "border-cyan-500/20 bg-cyan-500/10 text-cyan-400",
};

interface FormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

interface FormErrors {
  name?: string;
  email?: string;
  message?: string;
}

export default function Contact() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [errors, setErrors] = useState<FormErrors>({});
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");

  const validate = (): boolean => {
    const newErrors: FormErrors = {};
    if (!formData.name.trim()) newErrors.name = "Name is required";
    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Please enter a valid email";
    }
    if (!formData.message.trim()) newErrors.message = "Message is required";
    if (formData.message.trim().length < 10) newErrors.message = "Message too short (min 10 chars)";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;
    setStatus("sending");

    // Simulate form submission (replace with actual API call)
    await new Promise((res) => setTimeout(res, 1800));
    setStatus("success");
    setFormData({ name: "", email: "", subject: "", message: "" });
    setTimeout(() => setStatus("idle"), 4000);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name as keyof FormErrors]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

  return (
    <section id="contact" className="relative py-24">
      <div className="pointer-events-none absolute left-0 bottom-0 h-80 w-80 rounded-full bg-blue-600/8 blur-[120px]" />
      <div className="pointer-events-none absolute right-0 top-0 h-80 w-80 rounded-full bg-purple-600/8 blur-[120px]" />

      <div className="mx-auto max-w-6xl px-6">
        {/* Header */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center"
        >
          <span className="mb-3 inline-block rounded-full border border-blue-500/20 bg-blue-500/10 px-4 py-1 text-sm font-medium text-blue-400">
            Contact
          </span>
          <h2 className="text-3xl font-black text-white sm:text-4xl md:text-5xl">
            Let&apos;s{" "}
            <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              Connect
            </span>
          </h2>
          <p className="mt-3 text-white/50">
            Open to internships, projects, and collaborations
          </p>
        </motion.div>

        <div className="grid gap-10 lg:grid-cols-[380px_1fr]">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="space-y-4"
          >
            {contactInfo.map((info) => {
              const Icon = info.icon;
              return (
                <a
                  key={info.label}
                  href={info.href}
                  target={info.href.startsWith("http") ? "_blank" : undefined}
                  rel="noopener noreferrer"
                  className="group flex items-center gap-4 rounded-2xl border border-white/8 bg-white/3 p-5 backdrop-blur-sm transition-all hover:border-white/15 hover:bg-white/5"
                >
                  <div
                    className={`flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-xl border ${colorStyle[info.color]} transition-transform group-hover:scale-110`}
                  >
                    <Icon size={18} />
                  </div>
                  <div>
                    <p className="text-xs text-white/40">{info.label}</p>
                    <p className="text-sm font-medium text-white/80">{info.value}</p>
                  </div>
                </a>
              );
            })}

            {/* Social Links */}
            <div className="rounded-2xl border border-white/8 bg-white/3 p-5 backdrop-blur-sm">
              <p className="mb-4 text-xs font-medium uppercase tracking-wider text-white/30">
                Find me online
              </p>
              <div className="flex gap-3">
                {[
                  { icon: GithubIcon, href: "https://github.com/chirote2023", label: "GitHub" },
                  { icon: LinkedinIcon, href: "https://www.linkedin.com/in/piyush-chirote-037915245/", label: "LinkedIn" },
                  { icon: LeetcodeIcon, href: "https://leetcode.com/u/chirote2021/", label: "LeetCode" },
                ].map(({ icon: Icon, href, label }) => (
                  <a
                    key={label}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={label}
                    className="flex h-11 w-11 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-white/60 transition-all hover:border-blue-500/30 hover:bg-blue-500/10 hover:text-blue-400"
                  >
                    <Icon size={18} />
                  </a>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.form
            onSubmit={handleSubmit}
            initial={{ opacity: 0, x: 30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.25 }}
            className="relative overflow-hidden rounded-2xl border border-white/8 bg-white/3 p-8 backdrop-blur-sm"
            noValidate
          >
            <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-blue-500/40 to-transparent" />

            {/* Success State */}
            {status === "success" && (
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="absolute inset-0 z-10 flex flex-col items-center justify-center rounded-2xl bg-[#0A0A0F]/95 backdrop-blur-sm"
              >
                <CheckCircle2 size={48} className="mb-4 text-green-400" />
                <h3 className="mb-2 text-xl font-bold text-white">Message Sent!</h3>
                <p className="text-white/60">
                  Thank you for reaching out. I&apos;ll get back to you soon.
                </p>
              </motion.div>
            )}

            <div className="grid gap-5 sm:grid-cols-2">
              {/* Name */}
              <div>
                <label htmlFor="contact-name" className="mb-2 block text-sm text-white/60">
                  Your Name *
                </label>
                <input
                  id="contact-name"
                  name="name"
                  type="text"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="John Doe"
                  className={`w-full rounded-xl border bg-white/5 px-4 py-3 text-sm text-white placeholder-white/20 outline-none transition-all focus:ring-1 ${
                    errors.name
                      ? "border-red-500/50 focus:border-red-500/50 focus:ring-red-500/20"
                      : "border-white/10 focus:border-blue-500/50 focus:ring-blue-500/20"
                  }`}
                />
                {errors.name && (
                  <p className="mt-1 flex items-center gap-1 text-xs text-red-400">
                    <AlertCircle size={11} /> {errors.name}
                  </p>
                )}
              </div>

              {/* Email */}
              <div>
                <label htmlFor="contact-email" className="mb-2 block text-sm text-white/60">
                  Email Address *
                </label>
                <input
                  id="contact-email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="john@example.com"
                  className={`w-full rounded-xl border bg-white/5 px-4 py-3 text-sm text-white placeholder-white/20 outline-none transition-all focus:ring-1 ${
                    errors.email
                      ? "border-red-500/50 focus:border-red-500/50 focus:ring-red-500/20"
                      : "border-white/10 focus:border-blue-500/50 focus:ring-blue-500/20"
                  }`}
                />
                {errors.email && (
                  <p className="mt-1 flex items-center gap-1 text-xs text-red-400">
                    <AlertCircle size={11} /> {errors.email}
                  </p>
                )}
              </div>
            </div>

            {/* Subject */}
            <div className="mt-5">
              <label htmlFor="contact-subject" className="mb-2 block text-sm text-white/60">
                Subject
              </label>
              <input
                id="contact-subject"
                name="subject"
                type="text"
                value={formData.subject}
                onChange={handleChange}
                placeholder="Project collaboration / Internship inquiry"
                className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white placeholder-white/20 outline-none transition-all focus:border-blue-500/50 focus:ring-1 focus:ring-blue-500/20"
              />
            </div>

            {/* Message */}
            <div className="mt-5">
              <label htmlFor="contact-message" className="mb-2 block text-sm text-white/60">
                Message *
              </label>
              <textarea
                id="contact-message"
                name="message"
                rows={5}
                value={formData.message}
                onChange={handleChange}
                placeholder="Tell me about your project or opportunity..."
                className={`w-full resize-none rounded-xl border bg-white/5 px-4 py-3 text-sm text-white placeholder-white/20 outline-none transition-all focus:ring-1 ${
                  errors.message
                    ? "border-red-500/50 focus:border-red-500/50 focus:ring-red-500/20"
                    : "border-white/10 focus:border-blue-500/50 focus:ring-blue-500/20"
                }`}
              />
              {errors.message && (
                <p className="mt-1 flex items-center gap-1 text-xs text-red-400">
                  <AlertCircle size={11} /> {errors.message}
                </p>
              )}
            </div>

            {/* Submit button */}
            <motion.button
              type="submit"
              disabled={status === "sending"}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="mt-6 flex w-full items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-blue-600 to-purple-600 py-3.5 text-sm font-semibold text-white shadow-lg shadow-blue-900/30 transition-all hover:shadow-blue-700/40 disabled:cursor-not-allowed disabled:opacity-60"
            >
              {status === "sending" ? (
                <>
                  <div className="h-4 w-4 animate-spin rounded-full border-2 border-white/30 border-t-white" />
                  Sending...
                </>
              ) : (
                <>
                  <Send size={16} />
                  Send Message
                </>
              )}
            </motion.button>
          </motion.form>
        </div>
      </div>
    </section>
  );
}
