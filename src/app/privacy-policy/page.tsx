import React from "react";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy — Animatrous",
  description: "Privacy policy and cookie disclosures for Animatrous and its associated spatial applications.",
};

export default function PrivacyPolicy() {
  return (
    <div style={{
      minHeight: "100vh",
      backgroundColor: "#07080d",
      color: "#e2e8f0",
      padding: "40px 20px 80px",
      fontFamily: "system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif"
    }}>
      <div style={{
        maxWidth: "800px",
        margin: "0 auto",
        background: "rgba(18, 20, 30, 0.75)",
        border: "1px solid rgba(255, 255, 255, 0.08)",
        borderRadius: "16px",
        padding: "36px",
        backdropFilter: "blur(12px)",
        boxShadow: "0 10px 40px rgba(0,0,0,0.5)"
      }}>
        <div style={{ marginBottom: "24px" }}>
          <Link href="/" style={{
            color: "#00f2fe",
            textDecoration: "none",
            fontSize: "0.9rem",
            fontWeight: 600,
            display: "inline-flex",
            alignItems: "center",
            gap: "6px"
          }}>
            ← Return to Animatrous Hub
          </Link>
        </div>

        <h1 style={{
          fontSize: "2rem",
          fontWeight: 800,
          letterSpacing: "-0.5px",
          color: "#ffffff",
          marginBottom: "8px"
        }}>
          Privacy Policy
        </h1>
        <p style={{ color: "#94a3b8", fontSize: "0.85rem", marginBottom: "28px" }}>
          Last updated: September 11, 2026
        </p>

        <section style={{ marginBottom: "24px" }}>
          <h2 style={{ fontSize: "1.2rem", fontWeight: 700, color: "#f8fafc", marginBottom: "8px" }}>
            1. Overview
          </h2>
          <p style={{ lineHeight: 1.6, color: "#cbd5e1", fontSize: "0.95rem" }}>
            Animatrous (&quot;we&quot;, &quot;our&quot;, or &quot;us&quot;) develops interactive spatial web tools, computer vision interfaces, and browser applications (including HandForge, VibeLocus, Shadow Boxer, and Void Runner). This Privacy Policy explains how we handle information and our third-party advertising disclosures.
          </p>
        </section>

        <section style={{ marginBottom: "24px" }}>
          <h2 style={{ fontSize: "1.2rem", fontWeight: 700, color: "#f8fafc", marginBottom: "8px" }}>
            2. Camera & Spatial Vision Data
          </h2>
          <p style={{ lineHeight: 1.6, color: "#cbd5e1", fontSize: "0.95rem" }}>
            Our spatial tools (HandForge, Shadow Boxer, etc.) access your device camera solely for real-time computer vision (such as MediaPipe hand and body pose landmark detection). All video processing and landmark calculations occur strictly on-device in your local browser runtime. <strong>No video feeds, facial images, or camera streams are ever recorded, stored, or transmitted to any server.</strong>
          </p>
        </section>

        <section style={{ marginBottom: "24px" }}>
          <h2 style={{ fontSize: "1.2rem", fontWeight: 700, color: "#f8fafc", marginBottom: "8px" }}>
            3. Google AdSense & Third-Party Cookies
          </h2>
          <p style={{ lineHeight: 1.6, color: "#cbd5e1", fontSize: "0.95rem", marginBottom: "12px" }}>
            We use Google AdSense and third-party advertising partners to serve advertisements when you visit our website.
          </p>
          <ul style={{ paddingLeft: "20px", lineHeight: 1.6, color: "#cbd5e1", fontSize: "0.95rem" }}>
            <li style={{ marginBottom: "8px" }}>
              Third-party vendors, including Google, use cookies to serve ads based on a user&apos;s prior visits to our website or other websites.
            </li>
            <li style={{ marginBottom: "8px" }}>
              Google&apos;s use of advertising cookies enables it and its partners to serve ads to users based on their visit to our sites and/or other sites on the Internet.
            </li>
            <li style={{ marginBottom: "8px" }}>
              Users may opt out of personalized advertising by visiting{" "}
              <a
                href="https://www.google.com/settings/ads"
                target="_blank"
                rel="noopener noreferrer"
                style={{ color: "#00f2fe", textDecoration: "underline" }}
              >
                Google Ads Settings
              </a>{" "}
              or by visiting{" "}
              <a
                href="https://www.aboutads.info"
                target="_blank"
                rel="noopener noreferrer"
                style={{ color: "#00f2fe", textDecoration: "underline" }}
              >
                aboutads.info
              </a>.
            </li>
          </ul>
        </section>

        <section style={{ marginBottom: "24px" }}>
          <h2 style={{ fontSize: "1.2rem", fontWeight: 700, color: "#f8fafc", marginBottom: "8px" }}>
            4. Local Storage
          </h2>
          <p style={{ lineHeight: 1.6, color: "#cbd5e1", fontSize: "0.95rem" }}>
            Our applications may use standard browser LocalStorage to save your non-personal preferences, such as high scores, active brush settings, or UI themes.
          </p>
        </section>

        <section style={{ marginBottom: "24px" }}>
          <h2 style={{ fontSize: "1.2rem", fontWeight: 700, color: "#f8fafc", marginBottom: "8px" }}>
            5. Contact Us
          </h2>
          <p style={{ lineHeight: 1.6, color: "#cbd5e1", fontSize: "0.95rem" }}>
            If you have questions about this policy or our privacy practices, contact us at{" "}
            <a href="mailto:animatrous@gmail.com" style={{ color: "#00f2fe", textDecoration: "underline" }}>
              animatrous@gmail.com
            </a>.
          </p>
        </section>
      </div>
    </div>
  );
}
