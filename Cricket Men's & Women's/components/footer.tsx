"use client";

import Link from "next/link";
import { useState } from "react";
import { Github, Linkedin, ExternalLink, Coffee, Zap, Rocket, X, Globe } from "lucide-react";

export function Footer() {
  const currentYear = new Date().getFullYear();
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <footer className="bg-gradient-to-t from-black via-slate-900 to-slate-950 text-white border-t border-cyan-500/20">
        <div className="max-w-7xl mx-auto px-6 py-16">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-12">

            {/* Brand */}
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <div className="p-3 bg-gradient-to-br from-cyan-400 to-blue-600 rounded-2xl shadow-2xl shadow-cyan-500/50">
                  <span className="text-3xl">Cricket</span>
                </div>
                <h3 className="text-2xl font-black bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-blue-500">
                  Cricket Legends Universe
                </h3>
              </div>
              <p className="text-gray-300">A tribute to cricket’s greatest — built with code, chai, and passion.</p>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="text-xl font-bold text-cyan-400 mb-5 flex items-center gap-2">
                <Zap className="w-5 h-5" />
                Navigate
              </h4>
              <div className="space-y-3">
                {[
                  { href: "/men-players", label: "Men Players" },
                  { href: "/women-players", label: "Women Players" },
                  { href: "/contact", label: "Get in Touch" },
                ].map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className="block group text-gray-300 hover:text-cyan-400 transition-all duration-300 transform hover:translate-x-2"
                  >
                    <span className="flex items-center gap-2">
                      {link.label}
                      <ExternalLink className="w-4 h-4 opacity-0 group-hover:opacity-100 transition" />
                    </span>
                  </Link>
                ))}
              </div>
            </div>

            {/* Clickable Disclaimer Button */}
            <div>
              <button
                onClick={() => setIsModalOpen(true)}
                className="w-full group relative overflow-hidden rounded-3xl bg-gradient-to-br from-cyan-900/40 to-blue-900/40 backdrop-blur-md border border-cyan-500/40 p-8 shadow-2xl shadow-cyan-500/30 hover:shadow-cyan-500/50 transition-all duration-500 hover:scale-105"
              >
                <div className="flex items-center gap-3 mb-3">
                  <span className="text-3xl animate-pulse">Warning</span>
                  <span className="text-xl font-bold text-cyan-300">Disclaimer & Acknowledgement</span>
                </div>
                <p className="text-sm text-gray-300 text-left">
                  Click to meet the creator behind this cricket universe
                </p>
                <div className="mt-4 flex justify-end">
                  <Zap className="w-6 h-6 text-cyan-400 animate-pulse" />
                </div>
              </button>
            </div>
          </div>

          {/* Copyright */}
          <div className="pt-8 border-t border-cyan-500/30 text-center">
            <p className="text-gray-400 text-sm">
              © {currentYear} <span className="text-cyan-400 font-bold">Cricket Legends Universe</span>
              {" "}• Made with <span className="text-red-500">Heart</span> by{" "}
              <span className="text-cyan-400 font-bold">Abhisek Panda</span>
            </p>
          </div>
        </div>
      </footer>

      {/* POPUP MODAL */}
      {isModalOpen && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm"
          onClick={() => setIsModalOpen(false)}
        >
          <div
            className="relative w-full max-w-2xl bg-gradient-to-br from-slate-900 via-cyan-900/50 to-slate-900 rounded-3xl shadow-2xl border border-cyan-500/50 overflow-hidden animate-in fade-in zoom-in duration-300"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              onClick={() => setIsModalOpen(false)}
              className="absolute top-4 right-4 p-2 bg-white/10 rounded-full hover:bg-white/20 transition"
            >
              <X className="w-6 h-6 text-cyan-300" />
            </button>

            {/* Header */}
            <div className="p-8 text-center border-b border-cyan-500/30">
              <div className="flex justify-center gap-3 mb-4">
                <span className="text-5xl animate-bounce">Warning</span>
                <h2 className="text-3xl font-black bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-blue-400">
                  Creator Acknowledgement
                </h2>
              </div>
              <p className="text-cyan-200 text-lg">Meet the mind behind the magic</p>
            </div>

            {/* Content */}
            <div className="p-8 space-y-6">
              <div className="text-center">
                <div className="w-24 h-24 mx-auto mb-4 bg-gradient-to-br from-cyan-400 to-blue-600 rounded-full flex items-center justify-center text-4xl font-bold shadow-xl">
                  AP
                </div>
                <h3 className="text-2xl font-bold text-white">Abhisek Panda</h3>
                <p className="text-cyan-300">Full-Stack Developer • Cricket Fanatic</p>
              </div>

              <div className="grid grid-cols-1 gap-4">
                <a
                  href="https://abhisekpanda072.vercel.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-3 p-4 bg-white/5 rounded-2xl hover:bg-cyan-500/10 border border-cyan-500/30 transition-all group"
                >
                  <Globe className="w-6 h-6 text-cyan-400" />
                  <span className="text-white group-hover:text-cyan-300">Portfolio Website</span>
                </a>

                <a
                  href="https://github.com/abhisek2004"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-3 p-4 bg-white/5 rounded-2xl hover:bg-cyan-500/10 border border-cyan-500/30 transition-all group"
                >
                  <Github className="w-6 h-6 text-cyan-400" />
                  <span className="text-white group-hover:text-cyan-300">GitHub Profile</span>
                </a>

                <a
                  href="https://www.linkedin.com/in/abhisekpanda2004/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-3 p-4 bg-white/5 rounded-2xl hover:bg-cyan-500/10 border border-cyan-500/30 transition-all group"
                >
                  <Linkedin className="w-6 h-6 text-cyan-400" />
                  <span className="text-white group-hover:text-cyan-300">LinkedIn</span>
                </a>
              </div>

              <div className="text-center space-y-3">
                <p className="text-cyan-200 font-medium">
                  Feel free to reach out!
                </p>
                <p className="text-sm text-gray-300">
                  Let’s connect on LinkedIn or explore my open-source projects on GitHub.
                  I’m always up for feedback, collaboration, or cricket banter
                </p>
              </div>

              <div className="flex items-center justify-center gap-3 text-cyan-300 bg-white/5 rounded-2xl p-4">
                <Coffee className="w-6 h-6" />
                <span className="font-bold">Code + Coffee + Curiosity</span>
                <Zap className="w-6 h-6" />
              </div>

              <p className="text-center text-sm text-gray-400 italic">
                Thanks for visiting this experimental build!
                Hope it inspires you to build something epic
                <Rocket className="inline w-5 h-5 ml-1 text-cyan-400" />
              </p>
            </div>
          </div>
        </div>
      )}
    </>
  );
}