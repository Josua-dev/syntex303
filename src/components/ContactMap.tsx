/** Syntex Technologies — 340 Sam Nujoma Drive, Klein Windhoek, Windhoek. */
const SYNTEX_POSITION = { lat: -22.572531326553094, lng: 17.10773099069641 };

/**
 * Contact location map — Google Maps roadmap embed (same map style as the
 * OM'KUMOH contact page): roadmap type, zoomed to street level, pin on the
 * exact Syntex office coordinates.
 */
export function ContactMap() {
  const src = `https://www.google.com/maps?q=${SYNTEX_POSITION.lat},${SYNTEX_POSITION.lng}&z=17&hl=en&output=embed`;

  return (
    <div className="relative h-[420px] lg:h-[560px] overflow-hidden rounded-2xl border border-ink-700">
      <iframe
        title="Syntex Technologies — 340 Sam Nujoma Drive, Klein Windhoek, Windhoek"
        src={src}
        className="h-full w-full border-0"
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        allowFullScreen
      />

      {/* Subtle location label */}
      <div className="pointer-events-none absolute bottom-5 left-5 z-[500] rounded-md bg-ink-900/85 px-3 py-2 backdrop-blur-sm">
        <p className="font-mono text-[10px] uppercase tracking-wide3 text-white/90">
          Syntex Technologies
        </p>
        <p className="mt-1 font-mono text-[10px] uppercase tracking-wide2 text-white/50">
          Windhoek, Namibia
        </p>
      </div>
    </div>
  );
}

export default ContactMap;
