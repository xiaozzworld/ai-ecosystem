import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy",
};

export default function PrivacyPage() {
  return (
    <main className="flex-1 w-full max-w-3xl mx-auto px-4 py-16">
      <h1
        className="text-3xl font-normal tracking-tight mb-8"
        style={{ fontFamily: "var(--font-display)", color: "#f5f5f5" }}
      >
        Privacy Policy
      </h1>

      <div className="prose prose-invert prose-sm max-w-none space-y-6 text-neutral-300 leading-relaxed">
        <p>Last updated: May 18, 2026</p>

        <section>
          <h2 className="text-lg font-semibold text-neutral-100 mb-3">1. Information We Collect</h2>
          <p>We use the following analytics services to understand site usage:</p>
          <ul className="list-disc pl-5 space-y-1 text-neutral-400">
            <li><strong>Google Analytics 4</strong> — collects page views, session duration, device type, and approximate location. Google processes this data per their privacy policy.</li>
            <li><strong>Cloudflare Web Analytics</strong> — collects anonymized page view metrics. Cloudflare processes this data per their privacy policy.</li>
          </ul>
          <p className="mt-2">These services do not collect personally identifiable information (PII). We do not use cookies for advertising or tracking beyond basic analytics.</p>
        </section>

        <section>
          <h2 className="text-lg font-semibold text-neutral-100 mb-3">2. Cookies</h2>
          <p>Analytics cookies are only set after you accept them via our cookie banner. We also store your language preference (English/Chinese) in your browser&apos;s local storage — this is a functional necessity and does not track you.</p>
        </section>

        <section>
          <h2 className="text-lg font-semibold text-neutral-100 mb-3">3. Third-Party Links</h2>
          <p>Our site links to external AI tool websites. We are not responsible for their privacy practices. Some links are affiliate links — we may earn a commission at no extra cost to you.</p>
        </section>

        <section>
          <h2 className="text-lg font-semibold text-neutral-100 mb-3">4. Your Rights</h2>
          <p>You can decline analytics cookies at any time by clicking the cookie consent banner. You can also clear your browser storage to reset preferences. If you are in the EU/EEA, you have additional rights under GDPR including access, rectification, and erasure.</p>
        </section>

        <section>
          <h2 className="text-lg font-semibold text-neutral-100 mb-3">5. Contact</h2>
          <p>
            For privacy-related inquiries, contact us at{' '}
            <a href="mailto:admin@aiecosystem.top" className="text-[#d4a853] hover:underline">
              admin@aiecosystem.top
            </a>.
          </p>
        </section>
      </div>
    </main>
  );
}
