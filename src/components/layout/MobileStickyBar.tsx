import Link from "next/link";
import { Phone, MessageCircle, ArrowRight } from "lucide-react";

export default function MobileStickyBar() {
  return (
    <div
      className="fixed bottom-0 left-0 right-0 z-40 md:hidden"
      role="navigation"
      aria-label="Quick contact"
      style={{
        background: "rgba(10,10,10,0.9)",
        backdropFilter: "blur(16px)",
        WebkitBackdropFilter: "blur(16px)",
        borderTop: "1px solid var(--border-subtle)",
        padding: "0.625rem 1rem",
      }}
    >
      <div className="flex items-center gap-2">
        <a
          href="tel:+919876543210"
          id="sticky-call-btn"
          className="flex-1 flex items-center justify-center gap-2 py-2.5 rounded-lg font-semibold text-sm"
          style={{
            background: "var(--surface-1)",
            border: "1px solid var(--border-default)",
            color: "var(--text-primary)",
          }}
        >
          <Phone size={15} />
          Call
        </a>
        <a
          href="https://wa.me/919876543210"
          id="sticky-whatsapp-btn"
          target="_blank"
          rel="noopener noreferrer"
          className="flex-1 flex items-center justify-center gap-2 py-2.5 rounded-lg font-semibold text-sm"
          style={{ background: "#25D366", color: "#fff" }}
        >
          <MessageCircle size={15} />
          WhatsApp
        </a>
        <Link
          href="/submit-project"
          id="sticky-project-btn"
          className="flex-1 btn btn-primary flex items-center justify-center gap-2 py-2.5 text-sm"
        >
          <ArrowRight size={15} />
          Project
        </Link>
      </div>
    </div>
  );
}
