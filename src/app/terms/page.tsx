import React from "react";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms of Service — Animatrous",
  description: "Terms of Service and conditions of use for Animatrous and its associated spatial applications.",
};

export default function TermsOfService() {
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
          Terms of Service
        </h1>
        <p style={{ color: "#94a3b8", fontSize: "0.85rem", marginBottom: "28px" }}>
          Last updated: September 11, 2026
        </p>

        <section style={{ marginBottom: "24px" }}>
          <h2 style={{ fontSize: "1.2rem", fontWeight: 700, color: "#f8fafc", marginBottom: "8px" }}>
            1. Agreement to Terms
          </h2>
          <p style={{ lineHeight: 1.6, color: "#cbd5e1", fontSize: "0.95rem" }}>
            By accessing or using Animatrous (including animatrous.com and its associated web tools and subdomains), you agree to be bound by these Terms of Service. If you disagree with any part of these terms, you may not access our services.
          </p>
        </section>

        <section style={{ marginBottom: "24px" }}>
          <h2 style={{ fontSize: "1.2rem", fontWeight: 700, color: "#f8fafc", marginBottom: "8px" }}>
            2. Intellectual Property
          </h2>
          <p style={{ lineHeight: 1.6, color: "#cbd5e1", fontSize: "0.95rem" }}>
            All interactive software, algorithms, 3D engines, user interface designs, trademarks, and visual assets are the exclusive property of Animatrous and its creators. You may not reverse engineer, redistribute, or exploit our proprietary software for unauthorized commercial resale.
          </p>
        </section>

        <section style={{ marginBottom: "24px" }}>
          <h2 style={{ fontSize: "1.2rem", fontWeight: 700, color: "#f8fafc", marginBottom: "8px" }}>
            3. Spatial Tools & Camera Permissions
          </h2>
          <p style={{ lineHeight: 1.6, color: "#cbd5e1", fontSize: "0.95rem" }}>
            Certain applications (such as HandForge and Shadow Boxer) require browser camera access to perform real-time computer vision and motion tracking. Camera access is strictly optional and is processed entirely locally on your device. You are responsible for ensuring your physical environment is safe while engaging in motion-based interactive experiences.
          </p>
        </section>

        <section style={{ marginBottom: "24px" }}>
          <h2 style={{ fontSize: "1.2rem", fontWeight: 700, color: "#f8fafc", marginBottom: "8px" }}>
            4. Third-Party Advertisements & External Links
          </h2>
          <p style={{ lineHeight: 1.6, color: "#cbd5e1", fontSize: "0.95rem" }}>
            Our websites may display advertisements provided by Google AdSense and third-party ad networks. We do not endorse or assume liability for any third-party products, services, or websites advertised. Any interactions with third-party advertisers are solely between you and the respective third party.
          </p>
        </section>

        <section style={{ marginBottom: "24px" }}>
          <h2 style={{ fontSize: "1.2rem", fontWeight: 700, color: "#f8fafc", marginBottom: "8px" }}>
            5. Disclaimer of Warranties
          </h2>
          <p style={{ lineHeight: 1.6, color: "#cbd5e1", fontSize: "0.95rem" }}>
            Our applications and experimental spatial prototypes are provided on an &quot;AS IS&quot; and &quot;AS AVAILABLE&quot; basis without warranties of any kind, whether express or implied, including uninterrupted availability or browser hardware compatibility.
          </p>
        </section>

        <section style={{ marginBottom: "24px" }}>
          <h2 style={{ fontSize: "1.2rem", fontWeight: 700, color: "#f8fafc", marginBottom: "8px" }}>
            6. Contact Information
          </h2>
          <p style={{ lineHeight: 1.6, color: "#cbd5e1", fontSize: "0.95rem" }}>
            For legal inquiries or questions regarding these Terms, please contact us at{" "}
            <a href="mailto:animatrous@gmail.com" style={{ color: "#00f2fe", textDecoration: "underline" }}>
              animatrous@gmail.com
            </a>.
          </p>
        </section>
      </div>
    </div>
  );
}
