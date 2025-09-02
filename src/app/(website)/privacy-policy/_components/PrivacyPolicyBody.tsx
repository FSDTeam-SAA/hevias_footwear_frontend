"use client";

import React from "react";

export default function PrivacyPolicy() {
  return (
    <main className="min-h-screen bg-white text-gray-800 px-4 md:px-12 lg:px-32 py-12">
      <div className="max-w-4xl mx-auto">
        {/* Heading */}
        <h1 className="text-3xl font-bold text-center mb-2">Privacy Policy</h1>
        <p className="text-center text-sm text-gray-600 mb-12">
          Our team has prepared this Privacy Policy to describe our practices regarding the information we collect
          from users of our services.
        </p>

        {/* Content */}
        <section className="space-y-6 text-sm leading-6">
          <div>
            <h2 className="text-xl font-semibold mb-2">Who Controls Your Personal Data?</h2>
            <p>
              This Privacy Policy is maintained by OpenAI LLC (“OpenAI,” “we,” or “us”), which controls, collects,
              stores, and processes your personal data. It applies to data you provide to us when you use our products,
              websites, mobile apps, or other services (collectively, the “Services”).
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold mb-2">How We Collect Personal Data</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li>Information you provide directly, such as when you create an account.</li>
              <li>
                Information automatically collected when you use our Services, such as log data, IP address, browser
                type, operating system, and device information.
              </li>
              <li>
                Information from third parties, such as business partners or affiliates, where permitted by law.
              </li>
            </ul>
          </div>

          <div>
            <h2 className="text-xl font-semibold mb-2">Purposes and Legal Basis for Processing</h2>
            <p>We process personal data for purposes including:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Providing and improving our Services</li>
              <li>Communicating with you</li>
              <li>Personalizing your user experience</li>
              <li>Ensuring safety and security</li>
              <li>Complying with legal obligations</li>
            </ul>
          </div>

          <div>
            <h2 className="text-xl font-semibold mb-2">Marketing Communications</h2>
            <p>
              If you consent, we may use your data to send you marketing messages about our Services. You may opt-out at
              any time by following the unsubscribe link in the emails or contacting us directly.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold mb-2">Service Use</h2>
            <p>
              We use personal data to maintain, troubleshoot, and improve the Services, as well as for business
              operations, research, and analytics.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold mb-2">Data Sharing</h2>
            <p>
              We may share your data with third-party service providers that support our Services. These providers are
              contractually obligated to protect your information.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold mb-2">International Transfers</h2>
            <p>
              Your personal data may be transferred and stored in countries outside your place of residence, where data
              protection laws may differ. We take steps to ensure your information is protected appropriately.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold mb-2">Data Retention</h2>
            <p>
              We retain your personal data for as long as necessary to fulfill the purposes outlined in this policy,
              unless a longer retention period is required by law.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold mb-2">Data Security</h2>
            <p>
              We use technical and organizational measures to protect personal data against loss, misuse, unauthorized
              access, disclosure, alteration, and destruction.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold mb-2">Your Rights</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li>Right to access, update, or delete your data</li>
              <li>Right to object to processing</li>
              <li>Right to data portability</li>
              <li>Right to withdraw consent at any time</li>
              <li>Right to lodge a complaint with a supervisory authority</li>
            </ul>
          </div>

          <div>
            <h2 className="text-xl font-semibold mb-2">Changes to This Policy</h2>
            <p>
              We may update this Privacy Policy from time to time. Any changes will be posted on this page, and we
              encourage you to review it regularly.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold mb-2">Contact Us</h2>
            <p>If you have questions about this Privacy Policy, please contact us:</p>
            <p className="mt-2">
              OpenAI LLC
              <br />
              3180 18th Street, San Francisco, CA 94110
              <br />
              Email: privacy@openai.com
              <br />
              Phone: +1 (415) 555-1234
            </p>
          </div>
        </section>
      </div>
    </main>
  );
}
