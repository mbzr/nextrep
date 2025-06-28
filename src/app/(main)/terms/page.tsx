import { PageHeader } from '@/components/ui/page-header'

export default function TermsPage() {
  return (
    <div className="min-h-screen">
      <PageHeader
        title="Terms of Service"
        subtitle="Please read these terms carefully before using our platform"
      />

      <div className={`prose mx-auto max-w-4xl px-4 py-10 md:py-12`}>
        <div className="max-w-none">
          <div className="mb-8">
            <p className="text-gray-600">
              <strong>Last updated:</strong>{' '}
              {new Date().toLocaleDateString('en-US', {
                year: 'numeric',
                month: 'long',
                day: 'numeric',
              })}
            </p>

            <h2>1. Acceptance of Terms</h2>
            <div className="space-y-4">
              <p>
                By accessing and using NextRep (&ldquo;we,&rdquo;
                &ldquo;our,&rdquo; or &ldquo;us&rdquo;), you accept and agree to
                be bound by the terms and provision of this agreement. If you do
                not agree to abide by the above, please do not use this service.
              </p>
              <p>
                These Terms of Service (&ldquo;Terms&rdquo;) govern your use of
                our fitness platform, including all features, content, and
                services available through our website and mobile applications.
              </p>
            </div>

            <h2>2. Description of Service</h2>
            <div className="space-y-4">
              <p>NextRep is a fitness platform that provides:</p>
              <ul className="list-disc space-y-2 pl-6">
                <li>Personalized workout programs and training plans</li>
                <li>Exercise demonstrations and instructional content</li>
                <li>Progress tracking and fitness analytics</li>
                <li>Community features and social interactions</li>
                <li>Nutrition guidance and meal planning tools</li>
                <li>Professional coaching and support services</li>
              </ul>
              <p>
                We reserve the right to modify, suspend, or discontinue any part
                of our service at any time with or without notice.
              </p>
            </div>

            <h2>3. User Accounts and Registration</h2>
            <div className="space-y-4">
              <p>
                To access certain features of our platform, you must create an
                account. You agree to:
              </p>
              <ul className="list-disc space-y-2 pl-6">
                <li>
                  Provide accurate, current, and complete information during
                  registration
                </li>
                <li>
                  Maintain and update your account information to keep it
                  accurate and current
                </li>
                <li>Maintain the security of your account credentials</li>
                <li>
                  Accept responsibility for all activities that occur under your
                  account
                </li>
                <li>
                  Notify us immediately of any unauthorized use of your account
                </li>
              </ul>
              <p>
                You must be at least 13 years old to create an account. If you
                are under 18, you must have parental or guardian consent to use
                our services.
              </p>
            </div>

            <h2>4. Health and Safety Disclaimer</h2>
            <div className="space-y-4">
              <p>
                <strong>IMPORTANT:</strong> Before beginning any fitness
                program, consult with your healthcare provider, especially if
                you have any medical conditions or concerns.
              </p>
              <ul className="list-disc space-y-2 pl-6">
                <li>Our fitness content is for informational purposes only</li>
                <li>
                  We are not medical professionals and do not provide medical
                  advice
                </li>
                <li>Exercise at your own risk and listen to your body</li>
                <li>
                  Stop exercising immediately if you experience pain or
                  discomfort
                </li>
                <li>
                  We are not responsible for any injuries that may occur during
                  exercise
                </li>
              </ul>
              <p>
                By using our platform, you acknowledge that you understand the
                risks associated with physical activity and agree to exercise
                responsibly.
              </p>
            </div>

            <h2>5. Subscription and Payment Terms</h2>
            <div className="space-y-4">
              <h3>Subscription Plans</h3>
              <p>
                We offer various subscription plans with different features and
                pricing. All subscriptions automatically renew unless cancelled
                before the renewal date.
              </p>

              <h3>Payment</h3>
              <ul className="list-disc space-y-2 pl-6">
                <li>
                  Payments are processed securely through third-party payment
                  processors
                </li>
                <li>
                  Subscription fees are charged in advance on a recurring basis
                </li>
                <li>
                  Prices may change with 30 days&apos; notice to existing
                  subscribers
                </li>
                <li>Failed payments may result in service suspension</li>
              </ul>

              <h3>Cancellation</h3>
              <p>
                You may cancel your subscription at any time through your
                account settings. Cancellation will take effect at the end of
                your current billing period. No refunds are provided for partial
                billing periods.
              </p>
            </div>

            <h2>6. Acceptable Use Policy</h2>
            <div className="space-y-4">
              <p>You agree not to use our platform to:</p>
              <ul className="list-disc space-y-2 pl-6">
                <li>Violate any applicable laws or regulations</li>
                <li>Infringe on the rights of others</li>
                <li>
                  Upload or share harmful, offensive, or inappropriate content
                </li>
                <li>Attempt to gain unauthorized access to our systems</li>
                <li>Interfere with the proper functioning of our platform</li>
                <li>Use automated tools to access our services</li>
                <li>Share your account credentials with others</li>
                <li>Engage in any form of harassment or bullying</li>
              </ul>
              <p>
                We reserve the right to suspend or terminate accounts that
                violate these terms.
              </p>
            </div>
            <h2>7. Intellectual Property Rights</h2>
            <div className="space-y-4">
              <p>
                All content on our platform, including but not limited to text,
                graphics, images, videos, and software, is owned by NextRep or
                our licensors and is protected by copyright, trademark, and
                other intellectual property laws.
              </p>
              <p>You may not:</p>
              <ul className="list-disc space-y-2 pl-6">
                <li>
                  Copy, reproduce, or distribute our content without permission
                </li>
                <li>Modify or create derivative works from our content</li>
                <li>Use our trademarks or branding without authorization</li>
                <li>Reverse engineer or attempt to extract our source code</li>
              </ul>
              <p>
                You retain ownership of any content you create and share on our
                platform, but you grant us a license to use, display, and
                distribute that content in connection with our services.
              </p>
            </div>
            <h2>8. Privacy and Data Protection</h2>
            <div className="space-y-4">
              <p>
                Your privacy is important to us. Our collection and use of your
                personal information is governed by our Privacy Policy, which is
                incorporated into these Terms by reference.
              </p>
              <p>
                By using our platform, you consent to the collection and use of
                your information as described in our Privacy Policy.
              </p>
            </div>

            <h2>9. Limitation of Liability</h2>
            <div className="space-y-4">
              <p>
                To the maximum extent permitted by law, NextRep shall not be
                liable for any indirect, incidental, special, consequential, or
                punitive damages, including but not limited to loss of profits,
                data, or use, arising out of or relating to your use of our
                platform.
              </p>
              <p>
                Our total liability to you for any claims arising from these
                Terms or your use of our platform shall not exceed the amount
                you paid us in the 12 months preceding the claim.
              </p>
            </div>

            <h2>10. Disclaimers</h2>
            <div className="space-y-4">
              <p>
                Our platform is provided &ldquo;as is&rdquo; and &ldquo;as
                available&rdquo; without any warranties of any kind, either
                express or implied.
              </p>
              <p>We do not warrant that:</p>
              <ul className="list-disc space-y-2 pl-6">
                <li>Our platform will be uninterrupted or error-free</li>
                <li>Defects will be corrected</li>
                <li>
                  Our platform is free of viruses or other harmful components
                </li>
                <li>
                  The results obtained from using our platform will be accurate
                  or reliable
                </li>
              </ul>
            </div>

            <h2>11. Indemnification</h2>
            <div className="space-y-4">
              <p>
                You agree to indemnify and hold harmless NextRep, its officers,
                directors, employees, and agents from and against any claims,
                damages, obligations, losses, liabilities, costs, or debt
                arising from:
              </p>
              <ul className="list-disc space-y-2 pl-6">
                <li>Your use of our platform</li>
                <li>Your violation of these Terms</li>
                <li>Your violation of any third-party rights</li>
                <li>Any content you submit or share on our platform</li>
              </ul>
            </div>

            <h2>12. Termination</h2>
            <div className="space-y-4">
              <p>
                We may terminate or suspend your account and access to our
                platform at any time, with or without cause, with or without
                notice.
              </p>
              <p>
                Upon termination, your right to use our platform will cease
                immediately. All provisions of these Terms which by their nature
                should survive termination shall survive termination.
              </p>
            </div>

            <h2>13. Governing Law</h2>
            <div className="space-y-4">
              <p>
                These Terms shall be governed by and construed in accordance
                with the laws of the jurisdiction in which NextRep operates,
                without regard to its conflict of law provisions.
              </p>
              <p>
                Any disputes arising from these Terms or your use of our
                platform shall be resolved through binding arbitration in
                accordance with the rules of the American Arbitration
                Association.
              </p>
            </div>

            <h2>14. Changes to Terms</h2>
            <div className="space-y-4">
              <p>
                We reserve the right to modify these Terms at any time. We will
                notify users of any material changes by posting the new Terms on
                this page and updating the &ldquo;Last updated&rdquo; date.
              </p>
              <p>
                Your continued use of our platform after any changes constitutes
                acceptance of the new Terms. If you do not agree to the new
                Terms, you should stop using our platform.
              </p>
            </div>

            <h2>15. Contact Information</h2>
            <div className="space-y-4">
              <p>
                If you have any questions about these Terms of Service, please
                contact us:
              </p>
              <div className="rounded-lg bg-gray-50 p-6">
                <p>
                  <strong>Email:</strong> legal@nextrep.com
                </p>
                <p>
                  <strong>Address:</strong> 123 Fitness Street, Health City, HC
                  12345
                </p>
                <p>
                  <strong>Phone:</strong> (555) 123-4567
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
