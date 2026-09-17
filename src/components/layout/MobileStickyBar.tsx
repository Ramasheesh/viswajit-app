import Link from "next/link";
import { Phone, MessageCircle, ArrowRight } from "lucide-react";

export default function MobileStickyBar() {
  return (
    <div
      className="fixed bottom-0 left-0 right-0 z-40 md:hidden backdrop-blur-xl bg-zinc-950/90 border-t border-zinc-800 p-2.5 shadow-2xl"
      role="navigation"
      aria-label="Quick contact"
    >
      <div className="flex items-center gap-2">
        <a
          href="tel:+919876543210"
          id="sticky-call-btn"
          className="flex-1 flex items-center justify-center gap-2 py-3 rounded-xl font-bold text-sm bg-zinc-900 border border-zinc-700 text-white hover:bg-zinc-800 transition-colors"
        >
          <Phone size={16} className="text-amber-400" />
          Call
        </a>
        <a
          href="https://wa.me/919876543210"
          id="sticky-whatsapp-btn"
          target="_blank"
          rel="noopener noreferrer"
          className="flex-1 flex items-center justify-center gap-2 py-3 rounded-xl font-bold text-sm bg-[#25D366] text-white hover:bg-[#20bd5a] transition-colors shadow-sm"
        >
          <MessageCircle size={16} />
          WhatsApp
        </a>
        <Link
          href="/submit-project"
          id="sticky-project-btn"
          className="flex-1 flex items-center justify-center gap-2 py-3 rounded-xl font-bold text-sm bg-amber-500 text-black hover:bg-amber-400 transition-colors shadow-md shadow-amber-500/20"
        >
          <ArrowRight size={16} />
          Project
        </Link>
      </div>
    </div>
  );
}
