import type { Metadata } from "next";
export const metadata: Metadata = { title: "Terms of Service | Viswajit Electrical & Lighting" };
export default function TermsPage() {
  return (
    <div className="min-h-screen" style={{ paddingTop: "80px", background: "var(--background)" }}>
      <div className="max-w-3xl mx-auto px-4 sm:px-6 py-20">
        <h1 className="section-title mb-8" style={{ color: "var(--text-primary)" }}>Terms of <span className="text-gradient">Service</span></h1>
        <div className="space-y-6 text-sm leading-relaxed" style={{ color: "var(--text-secondary)" }}>
          <p>By using the Viswajit Electrical & Lighting website, you agree to these terms. Our services are provided subject to the following conditions.</p>
          <h2 className="text-lg font-bold" style={{ color: "var(--text-primary)" }}>Services</h2>
          <p>All project scope, pricing and timelines are agreed in writing before work begins. We reserve the right to decline projects at our discretion.</p>
          <h2 className="text-lg font-bold" style={{ color: "var(--text-primary)" }}>Intellectual Property</h2>
          <p>2D drawings and 3D visualizations produced by Viswajit Electrical & Lighting remain our intellectual property until full payment is received.</p>
          <h2 className="text-lg font-bold" style={{ color: "var(--text-primary)" }}>Limitation of Liability</h2>
          <p>Our liability is limited to the value of the project contract. We are not liable for indirect or consequential damages.</p>
          <h2 className="text-lg font-bold" style={{ color: "var(--text-primary)" }}>Contact</h2>
          <p>For questions about these terms, contact info@viswajitelectrical.com</p>
        </div>
      </div>
    </div>
  );
}
