// src/components/GlassEffect.tsx
"use client";

import React from "react";
import { motion } from "framer-motion";

interface GlassEffectProps {
  children: React.ReactNode;
  className?: string;
  style?: React.CSSProperties;
  href?: string;
  target?: string;
  intensity?: "light" | "medium" | "strong";
  /** New: choose a darker glass for accessible white text over imagery */
  tone?: "light" | "dark";
}

export const GlassEffect: React.FC<GlassEffectProps> = ({
  children,
  className = "",
  style = {},
  href,
  target = "_blank",
  intensity = "medium",
  tone = "dark",
}) => {
  // Light glass (your original look)
  const lightIntensity = {
    light: {
      background: "rgba(255, 255, 255, 0.15)",
      backdropFilter: "blur(8px)",
      border: "1px solid rgba(255, 255, 255, 0.2)",
    },
    medium: {
      background: "rgba(255, 255, 255, 0.25)",
      backdropFilter: "blur(12px)",
      border: "1px solid rgba(255, 255, 255, 0.3)",
    },
    strong: {
      background: "rgba(255, 255, 255, 0.35)",
      backdropFilter: "blur(16px)",
      border: "1px solid rgba(255, 255, 255, 0.4)",
    },
  } as const;

  // New: Dark glass (preferred when placing white text on a busy image)
  const darkIntensity = {
    light: {
      background: "rgba(17, 24, 39, 0.45)", // neutral-900/45
      backdropFilter: "blur(8px)",
      border: "1px solid rgba(255, 255, 255, 0.10)",
    },
    medium: {
      background: "rgba(17, 24, 39, 0.60)",
      backdropFilter: "blur(12px)",
      border: "1px solid rgba(255, 255, 255, 0.12)",
    },
    strong: {
      background: "rgba(17, 24, 39, 0.72)",
      backdropFilter: "blur(16px)",
      border: "1px solid rgba(255, 255, 255, 0.16)",
    },
  } as const;

  const chosen = tone === "dark" ? darkIntensity : lightIntensity;

  const glassStyle: React.CSSProperties = {
    boxShadow: "0 8px 32px rgba(0, 0, 0, 0.25), 0 0 20px rgba(0, 0, 0, 0.10)",
    transitionTimingFunction: "cubic-bezier(0.175, 0.885, 0.32, 2.2)",
    ...chosen[intensity],
    ...style,
  };

  const content = (
    <div
      className={`relative overflow-hidden transition-all duration-700 ${className}`}
      style={glassStyle}
    >
      {/* Glass Layers */}
      <div
        className="absolute inset-0 z-0 overflow-hidden rounded-inherit"
        style={{ filter: "url(#glass-distortion)", isolation: "isolate" }}
        aria-hidden="true"
      />
      <div
        className="absolute inset-0 z-20 rounded-inherit overflow-hidden"
        style={{
          boxShadow:
            "inset 2px 2px 1px 0 rgba(255, 255, 255, 0.18), inset -1px -1px 1px 1px rgba(255, 255, 255, 0.06)",
        }}
        aria-hidden="true"
      />
      {/* Content */}
      <div className="relative z-30">{children}</div>
    </div>
  );

  return href ? (
    <a href={href} target={target} rel="noopener noreferrer" className="block">
      {content}
    </a>
  ) : (
    content
  );
};

export const GlassFilter: React.FC = () => (
  <svg style={{ display: "none" }} aria-hidden="true">
    <filter
      id="glass-distortion"
      x="0%"
      y="0%"
      width="100%"
      height="100%"
      filterUnits="objectBoundingBox"
    >
      <feTurbulence type="fractalNoise" baseFrequency="0.001 0.005" numOctaves="1" seed="17" result="turbulence" />
      <feComponentTransfer in="turbulence" result="mapped">
        <feFuncR type="gamma" amplitude="1" exponent="10" offset="0.5" />
        <feFuncG type="gamma" amplitude="0" exponent="1" offset="0" />
        <feFuncB type="gamma" amplitude="0" exponent="1" offset="0.5" />
      </feComponentTransfer>
      <feGaussianBlur in="turbulence" stdDeviation="3" result="softMap" />
      <feSpecularLighting
        in="softMap" surfaceScale="5" specularConstant="1" specularExponent="100"
        lightingColor="white" result="specLight"
      >
        <fePointLight x="-200" y="-200" z="300" />
      </feSpecularLighting>
      <feComposite in="specLight" operator="arithmetic" k1="0" k2="1" k3="1" k4="0" result="litImage" />
      <feDisplacementMap in="SourceGraphic" in2="softMap" scale="100" xChannelSelector="R" yChannelSelector="G" />
    </filter>
  </svg>
);

/** Glass Button with proper semantics + high-contrast variants */
export const GlassButton: React.FC<{
  children: React.ReactNode;
  href?: string;
  onClick?: () => void;
  variant?: "primary" | "secondary";
  size?: "sm" | "md" | "lg";
  tone?: "light" | "dark";
  ariaLabel?: string;
}> = ({
  children,
  href,
  onClick,
  variant = "primary",
  size = "md",
  tone = "dark",
  ariaLabel,
}) => {
  const sizeClasses = {
    sm: "px-6 py-3 text-sm",
    md: "px-8 py-4 text-base",
    lg: "px-10 py-6 text-lg",
  } as const;

  // More opaque backgrounds for AA contrast on text
  const variantStyles: Record<
    "primary" | "secondary",
    React.CSSProperties
  > = {
    primary: {
      background: "rgba(37, 99, 235, 0.95)", // blue-600 ~ solid glass
      border: "1px solid rgba(255, 255, 255, 0.20)",
      color: "#ffffff",
    },
    secondary: {
      background: tone === "dark" ? "rgba(255, 255, 255, 0.14)" : "rgba(17, 24, 39, 0.40)",
      border: "1px solid rgba(255, 255, 255, 0.25)",
      color: "#ffffff",
    },
  };

  const ringClasses =
    "focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-white/50 focus-visible:ring-offset-2 focus-visible:ring-offset-neutral-900";

  // Link version stays an <a> inside GlassEffect
  if (href) {
    return (
      <GlassEffect
        href={href}
        className={`rounded-2xl ${sizeClasses[size]} hover:scale-105 cursor-pointer font-medium text-center inline-block ${ringClasses}`}
        style={variantStyles[variant]}
        tone={tone}
      >
        <span className="transition-all duration-300">{children}</span>
      </GlassEffect>
    );
  }

  // Button version: semantic <button>
  return (
    <motion.button
      type="button"
      onClick={onClick}
      aria-label={ariaLabel}
      className={`rounded-2xl inline-block ${ringClasses} ${sizeClasses[size]} hover:scale-105 cursor-pointer font-medium text-center`}
      style={variantStyles[variant]}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      transition={{ type: "spring", stiffness: 400, damping: 17 }}
    >
      <span className="transition-all duration-300">{children}</span>
    </motion.button>
  );
};

export const GlassCard: React.FC<{
  children: React.ReactNode;
  className?: string;
  intensity?: "light" | "medium" | "strong";
  hover?: boolean;
  tone?: "light" | "dark";
}> = ({ children, className = "", intensity = "medium", hover = true, tone = "dark" }) => {
  return (
    <GlassEffect
      className={`rounded-3xl p-6 ${hover ? "hover:scale-105 hover:shadow-2xl" : ""} ${className}`}
      intensity={intensity}
      tone={tone}
    >
      {children}
    </GlassEffect>
  );
};
