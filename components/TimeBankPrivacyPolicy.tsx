import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeftIcon, DocumentIcon } from './Icons';

function useFadeIn() {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.classList.add('visible');
          observer.unobserve(el);
        }
      },
      { threshold: 0.1 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);
  return ref;
}

const TimeBankPrivacyPolicy: React.FC = () => {
  const ref = useFadeIn();

  return (
    <article ref={ref} className="fade-in-up privacy-container">
      {/* Back navigation */}
      <div>
        <Link to="/" className="privacy-back-link">
          <ArrowLeftIcon style={{ width: 16, height: 16 }} />
          Home
        </Link>
      </div>

      {/* Header */}
      <header style={{ marginBottom: 'var(--space-8)' }}>
        <div style={{
          display: 'inline-flex',
          alignItems: 'center',
          gap: '8px',
          padding: '4px 12px',
          borderRadius: 'var(--radius-full)',
          background: 'var(--color-bg-badge)',
          border: '1px solid rgba(59,130,246,0.2)',
          color: 'var(--color-text-accent)',
          fontSize: 'var(--text-xs)',
          fontWeight: 600,
          textTransform: 'uppercase' as const,
          letterSpacing: '0.05em',
          marginBottom: 'var(--space-4)',
        }}>
          <DocumentIcon style={{ width: 14, height: 14 }} />
          Privacy Policy
        </div>
        <h1>TimeBank Privacy Policy</h1>
        <p style={{ fontSize: 'var(--text-sm)', fontWeight: 500, color: 'var(--color-text-muted)', marginTop: 'var(--space-2)' }}>
          Last Updated: July 1, 2026
        </p>
      </header>

      {/* Content */}
      <div className="glass-card-static" style={{ padding: 'var(--space-6)' }}>

        {/* Introductory Callout */}
        <div style={{
          padding: 'var(--space-6)',
          borderRadius: 'var(--radius-lg)',
          background: 'var(--color-bg-badge)',
          border: '1px solid rgba(59,130,246,0.15)',
          color: 'var(--color-text-primary)',
          fontWeight: 500,
          marginBottom: 'var(--space-12)',
          lineHeight: 'var(--leading-relaxed)',
        }}>
          TimeBank ("we", "our", or "us") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, store, and protect your information when you use the TimeBank iOS app (the "App").
        </div>

        {/* Section: Information We Collect */}
        <section style={{ marginBottom: 'var(--space-12)' }}>
          <h2 style={{ borderBottom: '1px solid var(--color-border-subtle)', paddingBottom: 'var(--space-4)', marginBottom: 'var(--space-6)' }}>
            Information We Collect
          </h2>

          <div style={{ marginBottom: 'var(--space-8)' }}>
            <h3 style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: 'var(--space-3)' }}>
              <span style={{ width: 8, height: 8, borderRadius: '50%', background: 'var(--color-accent)', display: 'inline-block' }}></span>
              Health and Fitness Data
            </h3>
            <p>With your permission, the App reads the following data from Apple HealthKit:</p>
            <ul>
              <li><strong>Step count</strong> — to calculate screen time credits earned through walking</li>
              <li><strong>Exercise minutes</strong> — to calculate screen time credits earned through physical activity</li>
            </ul>
            <div style={{
              padding: 'var(--space-4)',
              borderRadius: 'var(--radius-md)',
              background: 'var(--color-bg-base)',
              border: '1px solid var(--color-border-subtle)',
              fontSize: 'var(--text-sm)',
              marginTop: 'var(--space-3)',
            }}>
              This data is read-only. The App <strong>does not write</strong> any data to Apple Health. Health data is processed on your device and is not transmitted to our servers.
            </div>
          </div>

          <div style={{ marginBottom: 'var(--space-8)' }}>
            <h3 style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: 'var(--space-3)' }}>
              <span style={{ width: 8, height: 8, borderRadius: '50%', background: 'var(--color-accent)', display: 'inline-block' }}></span>
              Screen Time and App Usage Data
            </h3>
            <p>With your permission, the App uses Apple's Screen Time API (Family Controls) to:</p>
            <ul>
              <li>Block selected apps during your morning routine</li>
              <li>Unblock apps when you earn screen time credits</li>
            </ul>
            <div style={{
              padding: 'var(--space-4)',
              borderRadius: 'var(--radius-md)',
              background: 'var(--color-bg-base)',
              border: '1px solid var(--color-border-subtle)',
              fontSize: 'var(--text-sm)',
              marginTop: 'var(--space-3)',
            }}>
              The App accesses <strong>only the apps and categories you explicitly select</strong> for blocking. We do not track which apps you use, when you use them, or how long you use them.
            </div>
          </div>

          <div style={{ marginBottom: 'var(--space-8)' }}>
            <h3 style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: 'var(--space-3)' }}>
              <span style={{ width: 8, height: 8, borderRadius: '50%', background: 'var(--color-accent)', display: 'inline-block' }}></span>
              Usage and Activity Data
            </h3>
            <p>The App stores the following information locally on your device:</p>
            <ul>
              <li>Your selected goals and target values (e.g., step targets)</li>
              <li>Your selected apps and categories to block</li>
              <li>Earned screen time credits</li>
              <li>Activity log entries (e.g., "Apps unlocked at 3:00 PM")</li>
              <li>Gratitude journal entries you choose to save</li>
            </ul>
          </div>

          <div style={{ marginBottom: 'var(--space-8)' }}>
            <h3 style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: 'var(--space-3)' }}>
              <span style={{ width: 8, height: 8, borderRadius: '50%', background: 'var(--color-accent)', display: 'inline-block' }}></span>
              Analytics Data
            </h3>
            <p>We use Firebase Analytics to collect anonymized usage statistics, including:</p>
            <ul>
              <li>App launch events</li>
              <li>Feature usage (e.g., goal completion, morning routine completion)</li>
              <li>Crash reports (via Firebase Crashlytics)</li>
            </ul>
            <div style={{
              padding: 'var(--space-4)',
              borderRadius: 'var(--radius-md)',
              background: 'var(--color-bg-base)',
              border: '1px solid var(--color-border-subtle)',
              fontSize: 'var(--text-sm)',
              marginTop: 'var(--space-3)',
            }}>
              This data is anonymized and does not include your Health data, Screen Time data, or personal identifiers. We use this information solely to improve app stability and user experience.
            </div>
          </div>

          <div>
            <h3 style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: 'var(--space-3)' }}>
              <span style={{ width: 8, height: 8, borderRadius: '50%', background: 'var(--color-accent)', display: 'inline-block' }}></span>
              iCloud Sync
            </h3>
            <p>
              If you have iCloud enabled, the App uses Apple's iCloud Key-Value Storage to sync your goals, credits, and activity log across your devices. This data is stored in your personal iCloud account and is subject to{' '}
              <a href="https://www.apple.com/legal/privacy/en-ww/" target="_blank" rel="noopener noreferrer">
                Apple's Privacy Policy
              </a>.
            </p>
          </div>
        </section>

        {/* Section: How We Use Your Information */}
        <section style={{ marginBottom: 'var(--space-12)' }}>
          <h2 style={{ borderBottom: '1px solid var(--color-border-subtle)', paddingBottom: 'var(--space-4)', marginBottom: 'var(--space-6)' }}>
            How We Use Your Information
          </h2>
          <p>We use the information we collect solely to:</p>
          <ul>
            <li>Calculate screen time credits based on your activity goals</li>
            <li>Block and unblock apps according to your preferences</li>
            <li>Display your progress and activity history within the App</li>
            <li>Sync your data across devices via iCloud</li>
            <li>Diagnose and fix app crashes and technical issues</li>
          </ul>
        </section>

        {/* Section: Information We Do NOT Collect */}
        <section style={{ marginBottom: 'var(--space-12)' }}>
          <h2 style={{ borderBottom: '1px solid var(--color-border-subtle)', paddingBottom: 'var(--space-4)', marginBottom: 'var(--space-6)' }}>
            Information We Do NOT Collect
          </h2>
          <div style={{
            padding: 'var(--space-6)',
            borderRadius: 'var(--radius-lg)',
            background: 'var(--color-bg-badge-amber)',
            border: '1px solid var(--color-border-amber)',
          }}>
            <p style={{ color: 'var(--color-text-primary)', fontWeight: 500, marginBottom: 'var(--space-4)' }}>
              We do <strong style={{ fontWeight: 800, color: 'var(--color-text-amber)' }}>not</strong> collect, store, or share:
            </p>
            <ul>
              <li>Your name, email address, phone number, or any personal identifiers</li>
              <li>Precise location data</li>
              <li>Detailed app usage history or browsing data</li>
              <li>Photos, contacts, or calendar data</li>
              <li>Health data on our servers</li>
            </ul>
          </div>
        </section>

        {/* Section: Data Sharing */}
        <section style={{ marginBottom: 'var(--space-12)' }}>
          <h2 style={{ borderBottom: '1px solid var(--color-border-subtle)', paddingBottom: 'var(--space-4)', marginBottom: 'var(--space-6)' }}>
            Data Sharing
          </h2>
          <p>We do not sell, rent, or share your personal information with third parties for marketing or advertising purposes.</p>
          <p>We use the following third-party services, each with their own privacy protections:</p>
          <ul>
            <li>
              <strong>Firebase (Google)</strong> — for anonymized analytics and crash reporting. See{' '}
              <a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer">
                Google's Privacy Policy
              </a>.
            </li>
            <li>
              <strong>Apple iCloud</strong> — for optional cross-device syncing. See{' '}
              <a href="https://www.apple.com/legal/privacy/en-ww/" target="_blank" rel="noopener noreferrer">
                Apple's Privacy Policy
              </a>.
            </li>
          </ul>
        </section>

        {/* Section: Data Storage and Security */}
        <section style={{ marginBottom: 'var(--space-12)' }}>
          <h2 style={{ borderBottom: '1px solid var(--color-border-subtle)', paddingBottom: 'var(--space-4)', marginBottom: 'var(--space-6)' }}>
            Data Storage and Security
          </h2>
          <p>
            Your data is stored primarily on your device using Apple's secure storage mechanisms (UserDefaults, App Groups, Keychain where applicable). iCloud-synced data is encrypted in transit and at rest by Apple.
          </p>
          <p>
            We implement reasonable security measures to protect against unauthorized access, alteration, or destruction of your information.
          </p>
        </section>

        {/* Section: Data Retention */}
        <section style={{ marginBottom: 'var(--space-12)' }}>
          <h2 style={{ borderBottom: '1px solid var(--color-border-subtle)', paddingBottom: 'var(--space-4)', marginBottom: 'var(--space-6)' }}>
            Data Retention
          </h2>
          <p>
            Activity log entries are retained locally on your device for up to 100 entries, after which older entries are automatically removed. You can clear your activity log at any time within the App's Settings.
          </p>
          <p>
            Gratitude journal entries are stored until you delete them or uninstall the App.
          </p>
        </section>

        {/* Section: Your Rights and Choices */}
        <section style={{ marginBottom: 'var(--space-12)' }}>
          <h2 style={{ borderBottom: '1px solid var(--color-border-subtle)', paddingBottom: 'var(--space-4)', marginBottom: 'var(--space-6)' }}>
            Your Rights and Choices
          </h2>
          <p>You have full control over your data:</p>
          <ul>
            <li><strong>HealthKit access</strong> — You can revoke HealthKit permission at any time in iOS Settings → Privacy &amp; Security → Health → TimeBank</li>
            <li><strong>Screen Time access</strong> — You can revoke Screen Time permission in iOS Settings → Screen Time → App Limits</li>
            <li><strong>iCloud sync</strong> — You can disable iCloud Key-Value Storage for the App in iOS Settings → [Your Name] → iCloud</li>
            <li><strong>Delete data</strong> — Uninstalling the App removes all locally stored data. iCloud data can be removed via Settings → Apple ID → iCloud → Manage Account Storage</li>
          </ul>
        </section>

        {/* Section: Children's Privacy */}
        <section style={{ marginBottom: 'var(--space-12)' }}>
          <h2 style={{ borderBottom: '1px solid var(--color-border-subtle)', paddingBottom: 'var(--space-4)', marginBottom: 'var(--space-6)' }}>
            Children's Privacy
          </h2>
          <p>
            The App is not intended for use by children under the age of 13. We do not knowingly collect personal information from children under 13. If you believe we have inadvertently collected such information, please contact us and we will delete it promptly.
          </p>
        </section>

        {/* Section: Changes to This Privacy Policy */}
        <section style={{ marginBottom: 'var(--space-12)' }}>
          <h2 style={{ borderBottom: '1px solid var(--color-border-subtle)', paddingBottom: 'var(--space-4)', marginBottom: 'var(--space-6)' }}>
            Changes to This Privacy Policy
          </h2>
          <p>
            We may update this Privacy Policy from time to time. We will notify you of any material changes by updating the "Last updated" date at the top of this policy. Your continued use of the App after such changes constitutes acceptance of the updated policy.
          </p>
        </section>

        {/* Section: Contact Us */}
        <section style={{ marginBottom: 'var(--space-8)' }}>
          <h2 style={{ borderBottom: '1px solid var(--color-border-subtle)', paddingBottom: 'var(--space-4)', marginBottom: 'var(--space-6)' }}>
            Contact Us
          </h2>
          <div style={{
            padding: 'var(--space-6)',
            borderRadius: 'var(--radius-lg)',
            background: 'var(--color-bg-base)',
            border: '1px solid var(--color-border-subtle)',
          }}>
            <p>
              If you have any questions, concerns, or requests regarding this Privacy Policy or our data practices, please contact us:
            </p>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginTop: 'var(--space-3)' }}>
              <span style={{ fontSize: 'var(--text-sm)', fontWeight: 600, color: 'var(--color-text-primary)' }}>Email:</span>
              <a
                href="mailto:jeremydevin3@gmail.com"
                style={{
                  fontFamily: 'var(--font-mono)',
                  background: 'var(--color-bg-badge)',
                  padding: '4px 12px',
                  borderRadius: 'var(--radius-sm)',
                  border: '1px solid rgba(59,130,246,0.1)',
                  fontSize: 'var(--text-sm)',
                  fontWeight: 500,
                }}
              >
                jeremydevin3@gmail.com
              </a>
            </div>
            <p style={{ fontSize: 'var(--text-xs)', color: 'var(--color-text-muted)', marginTop: 'var(--space-2)' }}>
              We will respond to your inquiry within 30 days.
            </p>
          </div>
        </section>

        {/* Legal Compliance Footer */}
        <div style={{ paddingTop: 'var(--space-8)', borderTop: '1px solid var(--color-border-subtle)' }}>
          <p style={{ fontSize: 'var(--text-xs)', color: 'var(--color-text-muted)', lineHeight: 'var(--leading-relaxed)' }}>
            This privacy policy is designed to comply with Apple's App Store Review Guidelines, the General Data Protection Regulation (GDPR) where applicable, and the California Consumer Privacy Act (CCPA) where applicable.
          </p>
        </div>

      </div>
    </article>
  );
};

export default TimeBankPrivacyPolicy;
