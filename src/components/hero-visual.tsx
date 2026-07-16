export function HeroVisual() {
  return (
    <div
      className="pointer-events-none absolute inset-0 overflow-hidden"
      aria-hidden="true"
    >
      <div className="animate-drift absolute -right-[12%] top-[8%] h-[78%] w-[68%] md:-right-[6%] md:w-[58%]">
        <svg
          viewBox="0 0 720 820"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="h-full w-full"
        >
          <defs>
            <linearGradient id="plane" x1="80" y1="40" x2="640" y2="760" gradientUnits="userSpaceOnUse">
              <stop stopColor="#f4f7f8" stopOpacity="0.95" />
              <stop offset="0.55" stopColor="#c5d4df" stopOpacity="0.88" />
              <stop offset="1" stopColor="#0f6b63" stopOpacity="0.35" />
            </linearGradient>
            <linearGradient id="frame" x1="160" y1="120" x2="560" y2="620" gradientUnits="userSpaceOnUse">
              <stop stopColor="#12181f" stopOpacity="0.08" />
              <stop offset="1" stopColor="#0f6b63" stopOpacity="0.22" />
            </linearGradient>
            <linearGradient id="accent" x1="220" y1="280" x2="480" y2="520" gradientUnits="userSpaceOnUse">
              <stop stopColor="#0f6b63" />
              <stop offset="1" stopColor="#0a4f4a" />
            </linearGradient>
          </defs>

          {/* Atmospheric plane — edge-to-edge craft surface */}
          <path
            d="M84 96C84 58 115 28 153 28H612C650 28 680 58 680 96V700C680 738 650 768 612 768H153C115 768 84 738 84 700V96Z"
            fill="url(#plane)"
          />
          <path
            d="M84 96C84 58 115 28 153 28H612C650 28 680 58 680 96V700C680 738 650 768 612 768H153C115 768 84 738 84 700V96Z"
            stroke="#12181f"
            strokeOpacity="0.12"
            strokeWidth="1.5"
          />

          {/* Layout grid — design system scaffolding */}
          {[160, 240, 320, 400, 480, 560].map((x) => (
            <line
              key={`v-${x}`}
              x1={x}
              y1="72"
              x2={x}
              y2="724"
              stroke="#12181f"
              strokeOpacity="0.08"
            />
          ))}
          {[140, 220, 300, 380, 460, 540, 620].map((y) => (
            <line
              key={`h-${y}`}
              x1="116"
              y1={y}
              x2="648"
              y2={y}
              stroke="#12181f"
              strokeOpacity="0.07"
            />
          ))}

          {/* Nested interface frames */}
          <rect
            x="176"
            y="168"
            width="368"
            height="248"
            rx="4"
            fill="url(#frame)"
            stroke="#12181f"
            strokeOpacity="0.18"
          />
          <rect
            x="204"
            y="196"
            width="180"
            height="16"
            rx="2"
            fill="#12181f"
            fillOpacity="0.55"
          />
          <rect
            x="204"
            y="228"
            width="280"
            height="8"
            rx="2"
            fill="#12181f"
            fillOpacity="0.18"
          />
          <rect
            x="204"
            y="248"
            width="240"
            height="8"
            rx="2"
            fill="#12181f"
            fillOpacity="0.12"
          />
          <rect x="204" y="292" width="112" height="72" rx="3" fill="url(#accent)" opacity="0.85" />
          <rect
            x="332"
            y="292"
            width="120"
            height="72"
            rx="3"
            fill="#f4f7f8"
            fillOpacity="0.7"
            stroke="#12181f"
            strokeOpacity="0.12"
          />

          {/* Type specimen block */}
          <rect
            x="176"
            y="456"
            width="368"
            height="164"
            rx="4"
            fill="#12181f"
            fillOpacity="0.88"
          />
          <text
            x="204"
            y="510"
            fill="#f4f7f8"
            fontFamily="ui-sans-serif, system-ui, sans-serif"
            fontSize="28"
            fontWeight="600"
            letterSpacing="1.5"
          >
            Aa
          </text>
          <text
            x="268"
            y="506"
            fill="#9fb8b4"
            fontFamily="ui-sans-serif, system-ui, sans-serif"
            fontSize="13"
            letterSpacing="2"
          >
            SYNE · FIGTREE
          </text>
          <text
            x="204"
            y="552"
            fill="#c5d4df"
            fontFamily="ui-sans-serif, system-ui, sans-serif"
            fontSize="12"
          >
            Motion · spacing · a11y · performance
          </text>
          <rect x="204" y="572" width="88" height="10" rx="2" fill="#0f6b63" />
          <rect
            x="304"
            y="572"
            width="64"
            height="10"
            rx="2"
            fill="#f4f7f8"
            fillOpacity="0.25"
          />
        </svg>
      </div>
    </div>
  );
}
