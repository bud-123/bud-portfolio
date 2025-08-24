// src/components/GlassEffect.tsx
"use client";

import React from "react";

interface GlassEffectProps {
  children: React.ReactNode;
  className?: string;
  style?: React.CSSProperties;
  href?: string;
  target?: string;
  intensity?: 'light' | 'medium' | 'strong';
}

export const GlassEffect: React.FC<GlassEffectProps> = ({
  children,
  className = "",
  style = {},
  href,
  target = "_blank",
  intensity = 'medium'
}) => {
  const intensityStyles = {
    light: {
      background: "rgba(255, 255, 255, 0.15)",
      backdropFilter: "blur(8px)",
      border: "1px solid rgba(255, 255, 255, 0.2)"
    },
    medium: {
      background: "rgba(255, 255, 255, 0.25)",
      backdropFilter: "blur(12px)",
      border: "1px solid rgba(255, 255, 255, 0.3)"
    },
    strong: {
      background: "rgba(255, 255, 255, 0.35)",
      backdropFilter: "blur(16px)",
      border: "1px solid rgba(255, 255, 255, 0.4)"
    }
  };

  const glassStyle = {
    boxShadow: "0 8px 32px rgba(0, 0, 0, 0.1), 0 0 20px rgba(0, 0, 0, 0.05)",
    transitionTimingFunction: "cubic-bezier(0.175, 0.885, 0.32, 2.2)",
    ...intensityStyles[intensity],
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
        style={{
          filter: "url(#glass-distortion)",
          isolation: "isolate",
        }}
      />
      <div
        className="absolute inset-0 z-20 rounded-inherit overflow-hidden"
        style={{
          boxShadow:
            "inset 2px 2px 1px 0 rgba(255, 255, 255, 0.4), inset -1px -1px 1px 1px rgba(255, 255, 255, 0.3)",
        }}
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
  <svg style={{ display: "none" }}>
    <filter
      id="glass-distortion"
      x="0%"
      y="0%"
      width="100%"
      height="100%"
      filterUnits="objectBoundingBox"
    >
      <feTurbulence
        type="fractalNoise"
        baseFrequency="0.001 0.005"
        numOctaves="1"
        seed="17"
        result="turbulence"
      />
      <feComponentTransfer in="turbulence" result="mapped">
        <feFuncR type="gamma" amplitude="1" exponent="10" offset="0.5" />
        <feFuncG type="gamma" amplitude="0" exponent="1" offset="0" />
        <feFuncB type="gamma" amplitude="0" exponent="1" offset="0.5" />
      </feComponentTransfer>
      <feGaussianBlur in="turbulence" stdDeviation="3" result="softMap" />
      <feSpecularLighting
        in="softMap"
        surfaceScale="5"
        specularConstant="1"
        specularExponent="100"
        lightingColor="white"
        result="specLight"
      >
        <fePointLight x="-200" y="-200" z="300" />
      </feSpecularLighting>
      <feComposite
        in="specLight"
        operator="arithmetic"
        k1="0"
        k2="1"
        k3="1"
        k4="0"
        result="litImage"
      />
      <feDisplacementMap
        in="SourceGraphic"
        in2="softMap"
        scale="100"
        xChannelSelector="R"
        yChannelSelector="G"
      />
    </filter>
  </svg>
);

// Glass Button Component
export const GlassButton: React.FC<{
  children: React.ReactNode;
  href?: string;
  onClick?: () => void;
  variant?: 'primary' | 'secondary';
  size?: 'sm' | 'md' | 'lg';
}> = ({ children, href, onClick, variant = 'primary', size = 'md' }) => {
  const sizeClasses = {
    sm: 'px-6 py-3 text-sm',
    md: 'px-8 py-4 text-base',
    lg: 'px-10 py-6 text-lg'
  };

  const variantStyles = {
    primary: {
      background: "rgba(59, 130, 246, 0.2)",
      border: "1px solid rgba(59, 130, 246, 0.3)",
      color: "#1e40af"
    },
    secondary: {
      background: "rgba(255, 255, 255, 0.2)",
      border: "1px solid rgba(255, 255, 255, 0.3)",
      color: "#374151"
    }
  };

  return (
    <GlassEffect
      href={href}
      className={`rounded-2xl ${sizeClasses[size]} hover:scale-105 cursor-pointer font-medium text-center inline-block`}
      style={variantStyles[variant]}
    >
      <div
        className="transition-all duration-300"
        onClick={onClick}
      >
        {children}
      </div>
    </GlassEffect>
  );
};

// Glass Card Component
export const GlassCard: React.FC<{
  children: React.ReactNode;
  className?: string;
  intensity?: 'light' | 'medium' | 'strong';
  hover?: boolean;
}> = ({ children, className = "", intensity = 'medium', hover = true }) => {
  return (
    <GlassEffect
      className={`rounded-3xl p-6 ${hover ? 'hover:scale-105 hover:shadow-2xl' : ''} ${className}`}
      intensity={intensity}
    >
      {children}
    </GlassEffect>
  );
};