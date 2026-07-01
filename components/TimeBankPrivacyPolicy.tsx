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
    <article ref={ref} className="fade-in-up space-y-8">
      {/* Back navigation */}
      <div>
        <Link
          to="/"
          className="group inline-flex items-center gap-2 text-sm font-medium text-sky-500 hover:text-sky-600 transition-colors"
        >
          <ArrowLeftIcon className="w-4 h-4 transition-transform group-hover:-translate-x-1" />
          Home
        </Link>
      </div>

      {/* Header */}
      <header className="space-y-3">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-sky-500/10 border border-sky-500/20 text-sky-600 text-xs font-semibold uppercase tracking-wider">
          <DocumentIcon className="w-3.5 h-3.5" />
          Privacy Policy
        </div>
        <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-slate-800 leading-tight">
          TimeBank Privacy Policy
        </h1>
        <p className="text-sm font-medium text-slate-400">
          Last Updated: July 1, 2026
        </p>
      </header>

      {/* Privacy Policy Content Container */}
      <div className="glass-card p-6 sm:p-10 shadow-sm">
        <div className="prose prose-slate prose-base max-w-none text-slate-600 prose-headings:text-slate-800 prose-headings:font-bold prose-h2:text-2xl prose-h2:mt-10 prose-h2:mb-4 prose-h2:border-b prose-h2:border-slate-200/60 prose-h2:pb-3 prose-h3:text-lg prose-h3:mt-6 prose-p:leading-relaxed prose-a:text-sky-500 hover:prose-a:text-sky-600 prose-strong:text-slate-700 prose-ul:list-disc prose-ul:pl-6 prose-li:my-1">
          <p>
            TimeBank ("we", "our", or "us") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, store, and protect your information when you use the TimeBank iOS app (the "App").
          </p>

          <h2>Information We Collect</h2>

          <h3>Health and Fitness Data</h3>
          <p>With your permission, the App reads the following data from Apple HealthKit:</p>
          <ul>
            <li><strong>Step count</strong> — to calculate screen time credits earned through walking</li>
            <li><strong>Exercise minutes</strong> — to calculate screen time credits earned through physical activity</li>
          </ul>
          <p>
            This data is read-only. The App <strong>does not write</strong> any data to Apple Health. Health data is processed on your device and is not transmitted to our servers.
          </p>

          <h3>Screen Time and App Usage Data</h3>
          <p>With your permission, the App uses Apple's Screen Time API (Family Controls) to:</p>
          <ul>
            <li>Block selected apps during your morning routine</li>
            <li>Unblock apps when you earn screen time credits</li>
          </ul>
          <p>
            The App accesses <strong>only the apps and categories you explicitly select</strong> for blocking. We do not track which apps you use, when you use them, or how long you use them.
          </p>

          <h3>Usage and Activity Data</h3>
          <p>The App stores the following information locally on your device:</p>
          <ul>
            <li>Your selected goals and target values (e.g., step targets)</li>
            <li>Your selected apps and categories to block</li>
            <li>Earned screen time credits</li>
            <li>Activity log entries (e.g., "Apps unlocked at 3:00 PM")</li>
            <li>Gratitude journal entries you choose to save</li>
          </ul>

          <h3>Analytics Data</h3>
          <p>We use Firebase Analytics to collect anonymized usage statistics, including:</p>
          <ul>
            <li>App launch events</li>
            <li>Feature usage (e.g., goal completion, morning routine completion)</li>
            <li>Crash reports (via Firebase Crashlytics)</li>
          </ul>
          <p>
            This data is anonymized and does not include your Health data, Screen Time data, or personal identifiers. We use this information solely to improve app stability and user experience.
          </p>

          <h3>iCloud Sync</h3>
          <p>
            If you have iCloud enabled, the App uses Apple's iCloud Key-Value Storage to sync your goals, credits, and activity log across your devices. This data is stored in your personal iCloud account and is subject to{' '}
            <a href="https://www.apple.com/legal/privacy/en-ww/" target="_blank" rel="noopener noreferrer">
              Apple's Privacy Policy
            </a>.
          </p>

          <h2>How We Use Your Information</h2>
          <p>We use the information we collect solely to:</p>
          <ul>
            <li>Calculate screen time credits based on your activity goals</li>
            <li>Block and unblock apps according to your preferences</li>
            <li>Display your progress and activity history within the App</li>
            <li>Sync your data across devices via iCloud</li>
            <li>Diagnose and fix app crashes and technical issues</li>
          </ul>

          <h2>Information We Do NOT Collect</h2>
          <p>We do <strong>not</strong> collect, store, or share:</p>
          <ul>
            <li>Your name, email address, phone number, or any personal identifiers</li>
            <li>Precise location data</li>
            <li>Detailed app usage history or browsing data</li>
            <li>Photos, contacts, or calendar data</li>
            <li>Health data on our servers</li>
          </ul>

          <h2>Data Sharing</h2>
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

          <h2>Data Storage and Security</h2>
          <p>
            Your data is stored primarily on your device using Apple's secure storage mechanisms (UserDefaults, App Groups, Keychain where applicable). iCloud-synced data is encrypted in transit and at rest by Apple.
          </p>
          <p>
            We implement reasonable security measures to protect against unauthorized access, alteration, or destruction of your information.
          </p>

          <h2>Data Retention</h2>
          <p>
            Activity log entries are retained locally on your device for up to 100 entries, after which older entries are automatically removed. You can clear your activity log at any time within the App's Settings.
          </p>
          <p>
            Gratitude journal entries are stored until you delete them or uninstall the App.
          </p>

          <h2>Your Rights and Choices</h2>
          <p>You have full control over your data:</p>
          <ul>
            <li><strong>HealthKit access</strong> — You can revoke HealthKit permission at any time in iOS Settings → Privacy &amp; Security → Health → TimeBank</li>
            <li><strong>Screen Time access</strong> — You can revoke Screen Time permission in iOS Settings → Screen Time → App Limits</li>
            <li><strong>iCloud sync</strong> — You can disable iCloud Key-Value Storage for the App in iOS Settings → [Your Name] → iCloud</li>
            <li><strong>Delete data</strong> — Uninstalling the App removes all locally stored data. iCloud data can be removed via Settings → Apple ID → iCloud → Manage Account Storage</li>
          </ul>

          <h2>Children's Privacy</h2>
          <p>
            The App is not intended for use by children under the age of 13. We do not knowingly collect personal information from children under 13. If you believe we have inadvertently collected such information, please contact us and we will delete it promptly.
          </p>

          <h2>Changes to This Privacy Policy</h2>
          <p>
            We may update this Privacy Policy from time to time. We will notify you of any material changes by updating the "Last updated" date at the top of this policy. Your continued use of the App after such changes constitutes acceptance of the updated policy.
          </p>

          <h2>Contact Us</h2>
          <div className="not-prose p-6 rounded-xl bg-slate-50/80 border border-slate-200/80 mt-6 space-y-3">
            <p className="text-sm text-slate-600 leading-relaxed">
              If you have any questions, concerns, or requests regarding this Privacy Policy or our data practices, please contact us:
            </p>
            <p className="text-sm font-medium text-slate-800">
              Email:{' '}
              <a href="mailto:jeremydevin3@gmail.com" className="font-mono bg-sky-50 text-sky-600 hover:text-sky-700 px-2 py-0.5 rounded border border-sky-100 transition-colors">
                jeremydevin3@gmail.com
              </a>
            </p>
            <p className="text-xs text-slate-500">
              We will respond to your inquiry within 30 days.
            </p>
          </div>

          <p className="mt-12 text-xs text-slate-400 border-t border-slate-200/60 pt-6 !leading-relaxed">
            This privacy policy is designed to comply with Apple's App Store Review Guidelines, the General Data Protection Regulation (GDPR) where applicable, and the California Consumer Privacy Act (CCPA) where applicable.
          </p>
        </div>
      </div>
    </article>
  );
};

export default TimeBankPrivacyPolicy;
