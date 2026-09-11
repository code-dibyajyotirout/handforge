"use client";

import React, { useEffect, useState } from "react";

interface BottomAdBannerProps {
  client?: string;
  slot?: string;
}

declare global {
  interface Window {
    adsbygoogle?: any[];
  }
}

export default function BottomAdBanner({
  client = "ca-pub-6920661391833487",
  slot,
}: BottomAdBannerProps) {
  const [isVisible, setIsVisible] = useState(true);
  const [isAdLoaded, setIsAdLoaded] = useState(false);

  useEffect(() => {
    try {
      if (typeof window !== "undefined" && slot) {
        (window.adsbygoogle = window.adsbygoogle || []).push({});
        setIsAdLoaded(true);
      }
    } catch (e) {
      console.warn("AdSense push error:", e);
    }
  }, [slot]);

  if (!isVisible) return null;

  return (
    <div style={{
      width: "100%",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      margin: "24px 0",
      position: "relative",
      zIndex: 40,
    }}>
      <div style={{
        position: "relative",
        background: "rgba(18, 20, 30, 0.7)",
        border: "1px solid rgba(255, 255, 255, 0.08)",
        borderRadius: "10px",
        padding: "6px",
        maxWidth: "95vw",
        overflow: "hidden",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        minHeight: "90px",
      }}>
        <button
          onClick={() => setIsVisible(false)}
          title="Dismiss ad"
          style={{
            position: "absolute",
            top: "4px",
            right: "4px",
            background: "rgba(0, 0, 0, 0.6)",
            color: "#94a3b8",
            border: "none",
            borderRadius: "50%",
            width: "18px",
            height: "18px",
            fontSize: "10px",
            cursor: "pointer",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            zIndex: 10,
          }}
        >
          ✕
        </button>

        {slot ? (
          <ins
            className="adsbygoogle"
            style={{ display: "inline-block", width: "728px", height: "90px" }}
            data-ad-client={client}
            data-ad-slot={slot}
            data-ad-format="auto"
            data-full-width-responsive="true"
          />
        ) : (
          <div style={{
            width: "728px",
            maxWidth: "100%",
            height: "90px",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            color: "rgba(255, 255, 255, 0.3)",
            fontSize: "0.78rem",
            letterSpacing: "1px",
            gap: "4px"
          }}>
            <span style={{ fontWeight: 600, color: "rgba(0, 242, 254, 0.6)" }}>GOOGLE ADSENSE CONTAINER (728x90)</span>
            <span>Publisher: {client}</span>
          </div>
        )}
      </div>
    </div>
  );
}
