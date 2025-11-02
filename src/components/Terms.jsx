import React from "react";

const COMPANY_NAME = "Paisa Party";
const CONTACT_EMAIL = "paisaparty8@gmail.com";
const EFFECTIVE_DATE = "November 1, 2025";

const Terms = () => {
  return (
    <div className="min-h-screen bg-white text-gray-800 px-6 py-10">
      <div className="max-w-3xl mx-auto bg-green-50 border border-green-200 rounded-2xl shadow-lg p-8">
        <h1 className="text-3xl font-bold text-green-700 mb-4">
          Terms & Conditions
        </h1>
        <p className="text-sm text-gray-600 mb-8">
          <strong>Effective Date:</strong> {EFFECTIVE_DATE}
        </p>

        <div className="space-y-6 leading-relaxed">
          <section>
            <h2 className="text-xl font-semibold text-green-700">1. Introduction</h2>
            <p>
              Welcome to <strong>{COMPANY_NAME}</strong> — an online gaming platform
              where users can play fun and simple games to earn rewards or cash
              prizes. By accessing or using this website, you agree to follow these
              Terms & Conditions.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-green-700">2. Eligibility</h2>
            <p>
              You must be at least 18 years old to play or withdraw real money.
              If you are under 18, you may only use this website for entertainment
              purposes without involving any cash rewards or deposits.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-green-700">3. Gameplay & Rewards</h2>
            <p>
              Games on {COMPANY_NAME} are meant for skill and fouce-based entertainment only.
              Winnings or rewards depend on your gameplay and performance.
              <strong> There is no guarantee of earning or winning money.</strong>
            </p>
            <p>
              The system may adjust or review rewards if suspicious or unfair
              activities are detected.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-green-700">4. Withdraw Points</h2>
            <p>
              Withdraw are processed using secure payment methods.
              Withdrawals may take time for verification and processing. We reserve
              the right to delay or cancel withdrawals if fraudulent activity is
              suspected.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-green-700">5. Fair Play Policy</h2>
            <p>
              Players must play fairly. Any cheating, hacking, use of multiple
              accounts, or manipulation of the game system will result in permanent
              suspension of your account and loss of rewards.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-green-700">6. No Guarantee or Liability</h2>
            <p>
              {COMPANY_NAME} does not guarantee continuous operation, fairness, or
              winnings. We are not responsible for technical issues, data loss,
              or any loss of money caused by system errors or user mistakes.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-green-700">7. Account Responsibility</h2>
            <p>
              You are responsible for keeping your account secure. If you share your
              credentials or lose access, we are not responsible for any loss or misuse.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-green-700">8. Updates & Changes</h2>
            <p>
              We may update these Terms at any time without prior notice. Continued
              use of the website after updates means you accept the new Terms.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-green-700">9. Contact Us</h2>
            <p>
              For any questions or concerns, please contact us at{" "}
              <a
                href={`mailto:${CONTACT_EMAIL}`}
                className="text-green-700 font-medium underline"
              >
                {CONTACT_EMAIL}
              </a>
              .
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-green-700">10. Legal Disclaimer</h2>
            <p className="text-sm italic">
              {COMPANY_NAME} is an independent entertainment platform. It is not a
              registered gambling or betting company. All games are meant for skill-
              based fun and reward purposes only. Use of the website is at your own
              risk.
            </p>
          </section>

          <footer className="mt-8 text-center text-sm text-gray-600 border-t border-green-200 pt-4">
            © {new Date().getFullYear()} {COMPANY_NAME}. All Rights Reserved.
          </footer>
        </div>
      </div>
    </div>
  );
};

export default Terms;
