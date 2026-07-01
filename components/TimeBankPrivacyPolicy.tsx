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
      <div className="glass-card p-6 sm:p-12 shadow-sm">
        <div className="space-y-12 text-slate-600 text-base sm:text-lg leading-relaxed">
          
          {/* Introductory Callout */}
          <div className="p-6 rounded-2xl bg-sky-500/5 border border-sky-500/15 text-slate-700 font-medium">
            TimeBank ("we", "our", or "us") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, store, and protect your information when you use the TimeBank iOS app (the "App").
          </div>

          {/* Section: Information We Collect */}
          <section className="space-y-8">
            <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-slate-800 border-b border-slate-200/80 pb-4">
              Information We Collect
            </h2>

            <div className="space-y-4 pl-1 sm:pl-2">
              <h3 className="text-lg sm:text-xl font-bold text-slate-800 flex items-center gap-2.5">
                <span className="w-2 h-2 rounded-full bg-sky-500 inline-block"></span>
                Health and Fitness Data
              </h3>
              <p>With your permission, the App reads the following data from Apple HealthKit:</p>
              <ul className="list-disc list-outside ml-6 space-y-2 text-slate-600">
                <li className="pl-1"><strong className="text-slate-800 font-semibold">Step count</strong> — to calculate screen time credits earned through walking</li>
                <li className="pl-1"><strong className="text-slate-800 font-semibold">Exercise minutes</strong> — to calculate screen time credits earned through physical activity</li>
              </ul>
              <div className="p-4 rounded-xl bg-slate-50 border border-slate-200/80 text-sm sm:text-base text-slate-700">
                This data is read-only. The App <strong className="text-slate-800 font-semibold">does not write</strong> any data to Apple Health. Health data is processed on your device and is not transmitted to our servers.
              </div>
            </div>

            <div className="space-y-4 pl-1 sm:pl-2">
              <h3 className="text-lg sm:text-xl font-bold text-slate-800 flex items-center gap-2.5">
                <span className="w-2 h-2 rounded-full bg-sky-500 inline-block"></span>
                Screen Time and App Usage Data
              </h3>
              <p>With your permission, the App uses Apple's Screen Time API (Family Controls) to:</p>
              <ul className="list-disc list-outside ml-6 space-y-2 text-slate-600">
                <li className="pl-1">Block selected apps during your morning routine</li>
                <li className="pl-1">Unblock apps when you earn screen time credits</li>
              </ul>
              <div className="p-4 rounded-xl bg-slate-50 border border-slate-200/80 text-sm sm:text-base text-slate-700">
                The App accesses <strong className="text-slate-800 font-semibold">only the apps and categories you explicitly select</strong> for blocking. We do not track which apps you use, when you use them, or how long you use them.
              </div>
            </div>

            <div className="space-y-4 pl-1 sm:pl-2">
              <h3 className="text-lg sm:text-xl font-bold text-slate-800 flex items-center gap-2.5">
                <span className="w-2 h-2 rounded-full bg-sky-500 inline-block"></span>
                Usage and Activity Data
              </h3>
              <p>The App stores the following information locally on your device:</p>
              <ul className="list-disc list-outside ml-6 space-y-2 text-slate-600">
                <li className="pl-1">Your selected goals and target values (e.g., step targets)</li>
                <li className="pl-1">Your selected apps and categories to block</li>
                <li className="pl-1">Earned screen time credits</li>
                <li className="pl-1">Activity log entries (e.g., "Apps unlocked at 3:00 PM")</li>
                <li className="pl-1">Gratitude journal entries you choose to save</li>
              </ul>
            </div>

            <div className="space-y-4 pl-1 sm:pl-2">
              <h3 className="text-lg sm:text-xl font-bold text-slate-800 flex items-center gap-2.5">
                <span className="w-2 h-2 rounded-full bg-sky-500 inline-block"></span>
                Analytics Data
              </h3>
              <p>We use Firebase Analytics to collect anonymized usage statistics, including:</p>
              <ul className="list-disc list-outside ml-6 space-y-2 text-slate-600">
                <li className="pl-1">App launch events</li>
                <li className="pl-1">Feature usage (e.g., goal completion, morning routine completion)</li>
                <li className="pl-1">Crash reports (via Firebase Crashlytics)</li>
              </ul>
              <div className="p-4 rounded-xl bg-slate-50 border border-slate-200/80 text-sm sm:text-base text-slate-700">
                This data is anonymized and does not include your Health data, Screen Time data, or personal identifiers. We use this information solely to improve app stability and user experience.
              </div>
            </div>

            <div className="space-y-4 pl-1 sm:pl-2">
              <h3 className="text-lg sm:text-xl font-bold text-slate-800 flex items-center gap-2.5">
                <span className="w-2 h-2 rounded-full bg-sky-500 inline-block"></span>
                iCloud Sync
              </h3>
              <p>
                If you have iCloud enabled, the App uses Apple's iCloud Key-Value Storage to sync your goals, credits, and activity log across your devices. This data is stored in your personal iCloud account and is subject to{' '}
                <a href="https://www.apple.com/legal/privacy/en-ww/" target="_blank" rel="noopener noreferrer" className="text-sky-500 hover:text-sky-600 font-medium underline underline-offset-4">
                  Apple's Privacy Policy
                </a>.
              </p>
            </div>
          </section>

          {/* Section: How We Use Your Information */}
          <section className="space-y-6">
            <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-slate-800 border-b border-slate-200/80 pb-4">
              How We Use Your Information
            </h2>
            <p>We use the information we collect solely to:</p>
            <ul className="list-disc list-outside ml-6 space-y-2 text-slate-600 pl-1">
              <li className="pl-1">Calculate screen time credits based on your activity goals</li>
              <li className="pl-1">Block and unblock apps according to your preferences</li>
              <li className="pl-1">Display your progress and activity history within the App</li>
              <li className="pl-1">Sync your data across devices via iCloud</li>
              <li className="pl-1">Diagnose and fix app crashes and technical issues</li>
            </ul>
          </section>

          {/* Section: Information We Do NOT Collect */}
          <section className="space-y-6">
            <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-slate-800 border-b border-slate-200/80 pb-4">
              Information We Do NOT Collect
            </h2>
            <div className="p-6 rounded-2xl bg-amber-500/5 border border-amber-500/15 space-y-4">
              <p className="text-slate-800 font-medium">We do <strong className="font-extrabold text-amber-600 bg-amber-500/10 px-1.5 py-0.5 rounded">not</strong> collect, store, or share:</p>
              <ul className="list-disc list-outside ml-6 space-y-2 text-slate-700">
                <li className="pl-1">Your name, email address, phone number, or any personal identifiers</li>
                <li className="pl-1">Precise location data</li>
                <li className="pl-1">Detailed app usage history or browsing data</li>
                <li className="pl-1">Photos, contacts, or calendar data</li>
                <li className="pl-1">Health data on our servers</li>
              </ul>
            </div>
          </section>

          {/* Section: Data Sharing */}
          <section className="space-y-6">
            <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-slate-800 border-b border-slate-200/80 pb-4">
              Data Sharing
            </h2>
            <p>We do not sell, rent, or share your personal information with third parties for marketing or advertising purposes.</p>
            <p>We use the following third-party services, each with their own privacy protections:</p>
            <ul className="list-disc list-outside ml-6 space-y-3 text-slate-600 pl-1">
              <li className="pl-1">
                <strong className="text-slate-800 font-semibold">Firebase (Google)</strong> — for anonymized analytics and crash reporting. See{' '}
                <a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer" className="text-sky-500 hover:text-sky-600 font-medium underline underline-offset-4">
                  Google's Privacy Policy
                </a>.
              </li>
              <li className="pl-1">
                <strong className="text-slate-800 font-semibold">Apple iCloud</strong> — for optional cross-device syncing. See{' '}
                <a href="https://www.apple.com/legal/privacy/en-ww/" target="_blank" rel="noopener noreferrer" className="text-sky-500 hover:text-sky-600 font-medium underline underline-offset-4">
                  Apple's Privacy Policy
                </a>.
              </li>
            </ul>
          </section>

          {/* Section: Data Storage and Security */}
          <section className="space-y-6">
            <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-slate-800 border-b border-slate-200/80 pb-4">
              Data Storage and Security
            </h2>
            <div className="space-y-4">
              <p>
                Your data is stored primarily on your device using Apple's secure storage mechanisms (UserDefaults, App Groups, Keychain where applicable). iCloud-synced data is encrypted in transit and at rest by Apple.
              </p>
              <p>
                We implement reasonable security measures to protect against unauthorized access, alteration, or destruction of your information.
              </p>
            </div>
          </section>

          {/* Section: Data Retention */}
          <section className="space-y-6">
            <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-slate-800 border-b border-slate-200/80 pb-4">
              Data Retention
            </h2>
            <div className="space-y-4">
              <p>
                Activity log entries are retained locally on your device for up to 100 entries, after which older entries are automatically removed. You can clear your activity log at any time within the App's Settings.
              </p>
              <p>
                Gratitude journal entries are stored until you delete them or uninstall the App.
              </p>
            </div>
          </section>

          {/* Section: Your Rights and Choices */}
          <section className="space-y-6">
            <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-slate-800 border-b border-slate-200/80 pb-4">
              Your Rights and Choices
            </h2>
            <p>You have full control over your data:</p>
            <ul className="list-disc list-outside ml-6 space-y-3 text-slate-600 pl-1">
              <li className="pl-1"><strong className="text-slate-800 font-semibold">HealthKit access</strong> — You can revoke HealthKit permission at any time in iOS Settings → Privacy &amp; Security → Health → TimeBank</li>
              <li className="pl-1"><strong className="text-slate-800 font-semibold">Screen Time access</strong> — You can revoke Screen Time permission in iOS Settings → Screen Time → App Limits</li>
              <li className="pl-1"><strong className="text-slate-800 font-semibold">iCloud sync</strong> — You can disable iCloud Key-Value Storage for the App in iOS Settings → [Your Name] → iCloud</li>
              <li className="pl-1"><strong className="text-slate-800 font-semibold">Delete data</strong> — Uninstalling the App removes all locally stored data. iCloud data can be removed via Settings → Apple ID → iCloud → Manage Account Storage</li>
            </ul>
          </section>

          {/* Section: Children's Privacy */}
          <section className="space-y-6">
            <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-slate-800 border-b border-slate-200/80 pb-4">
              Children's Privacy
            </h2>
            <p>
              The App is not intended for use by children under the age of 13. We do not knowingly collect personal information from children under 13. If you believe we have inadvertently collected such information, please contact us and we will delete it promptly.
            </p>
          </section>

          {/* Section: Changes to This Privacy Policy */}
          <section className="space-y-6">
            <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-slate-800 border-b border-slate-200/80 pb-4">
              Changes to This Privacy Policy
            </h2>
            <p>
              We may update this Privacy Policy from time to time. We will notify you of any material changes by updating the "Last updated" date at the top of this policy. Your continued use of the App after such changes constitutes acceptance of the updated policy.
            </p>
          </section>

          {/* Section: Contact Us */}
          <section className="space-y-6">
            <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-slate-800 border-b border-slate-200/80 pb-4">
              Contact Us
            </h2>
            <div className="p-6 sm:p-8 rounded-2xl bg-slate-50 border border-slate-200/80 space-y-4 shadow-sm">
              <p className="text-base text-slate-600 leading-relaxed">
                If you have any questions, concerns, or requests regarding this Privacy Policy or our data practices, please contact us:
              </p>
              <div className="flex items-center gap-2 pt-1">
                <span className="text-sm font-semibold text-slate-800">Email:</span>
                <a href="mailto:jeremydevin3@gmail.com" className="font-mono bg-sky-50 text-sky-600 hover:text-sky-700 px-3 py-1 rounded-lg border border-sky-100 transition-colors font-medium text-sm sm:text-base">
                  jeremydevin3@gmail.com
                </a>
              </div>
              <p className="text-xs sm:text-sm text-slate-500 pt-1">
                We will respond to your inquiry within 30 days.
              </p>
            </div>
          </section>

          {/* Legal Compliance Footer */}
          <div className="pt-8 border-t border-slate-200/60">
            <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
              This privacy policy is designed to comply with Apple's App Store Review Guidelines, the General Data Protection Regulation (GDPR) where applicable, and the California Consumer Privacy Act (CCPA) where applicable.
            </p>
          </div>

        </div>
      </div>
    </article>
  );
};

export default TimeBankPrivacyPolicy;
