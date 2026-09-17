import type { Metadata } from "next";
export const metadata: Metadata = { title: "Privacy Policy | Viswajit Electrical & Lighting" };
export default function PrivacyPage() {
  return (
    <div className="min-h-screen" style={{ paddingTop: "80px", background: "var(--background)" }}>
      <div className="max-w-3xl mx-auto px-4 sm:px-6 py-20">
        <h1 className="section-title mb-8" style={{ color: "var(--text-primary)" }}>Privacy <span className="text-gradient">Policy</span></h1>
        <div className="space-y-6 text-sm leading-relaxed" style={{ color: "var(--text-secondary)" }}>
          <p>Viswajit Electrical & Lighting values your privacy. This policy explains how we collect, use and protect your personal information when you use our website or services.</p>
          <h2 className="text-lg font-bold" style={{ color: "var(--text-primary)" }}>Information We Collect</h2>
          <p>We collect information you provide directly to us, such as your name, phone number, email address and project details when you use our contact or project submission forms.</p>
          <h2 className="text-lg font-bold" style={{ color: "var(--text-primary)" }}>How We Use Your Information</h2>
          <p>We use your information solely to respond to your enquiries, provide our services and communicate with you about your projects. We do not sell or share your personal data with third parties.</p>
          <h2 className="text-lg font-bold" style={{ color: "var(--text-primary)" }}>Contact</h2>
          <p>For any privacy-related queries, contact us at info@viswajitelectrical.com</p>
        </div>
      </div>
    </div>
  );
}
