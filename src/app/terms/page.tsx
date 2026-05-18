import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms of Service",
};

export default function TermsPage() {
  return (
    <main className="flex-1 w-full max-w-3xl mx-auto px-4 py-16">
      <h1
        className="text-3xl font-normal tracking-tight mb-8"
        style={{ fontFamily: "var(--font-display)", color: "#f5f5f5" }}
      >
        Terms of Service
      </h1>

      <div className="prose prose-invert prose-sm max-w-none space-y-6 text-neutral-300 leading-relaxed">
        <p>Last updated: May 18, 2026</p>

        <section>
          <h2 className="text-lg font-semibold text-neutral-100 mb-3">1. About This Site</h2>
          <p>
            AI Ecosystem (aiecosystem.top) is a curated directory of third-party AI tools.
            We provide links to external websites for informational purposes. We do not own,
            operate, or control any of the linked tools or services.
          </p>
        </section>

        <section>
          <h2 className="text-lg font-semibold text-neutral-100 mb-3">2. No Warranty</h2>
          <p>
            This site is provided &quot;as is&quot; without any warranty. We do not guarantee
            the accuracy, completeness, or usefulness of any information on this site. We are
            not responsible for the content, privacy policies, or practices of any linked
            third-party sites.
          </p>
        </section>

        <section>
          <h2 className="text-lg font-semibold text-neutral-100 mb-3">3. Trademarks</h2>
          <p>
            All product names, logos, and brands mentioned on this site are trademarks or
            registered trademarks of their respective owners. Use of these names does not
            imply endorsement. This is an independent directory and is not affiliated with
            any of the listed companies unless explicitly stated.
          </p>
        </section>

        <section>
          <h2 className="text-lg font-semibold text-neutral-100 mb-3">4. Affiliate Disclosure</h2>
          <p>
            Some links on this site are affiliate links. If you click on an affiliate link
            and make a purchase, we may receive a commission at no additional cost to you.
            Affiliate links are marked as &quot;Ad&quot; where they appear. We only list
            tools we believe are useful to our audience.
          </p>
        </section>

        <section>
          <h2 className="text-lg font-semibold text-neutral-100 mb-3">5. Limitation of Liability</h2>
          <p>
            To the fullest extent permitted by law, AI Ecosystem and its operators shall not
            be liable for any damages arising from your use of this site or reliance on any
            information provided herein.
          </p>
        </section>
      </div>
    </main>
  );
}
