import { PageHeader } from '@/components/ui/page-header'

export default function PrivacyPolicyPage() {
  return (
    <div className="min-h-screen">
      <PageHeader
        title="Privacy Policy"
        subtitle="How we collect, use, and protect your information"
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
          </div>

          <h2>1. Information We Collect</h2>
          <div className="space-y-4">
            <p>
              We collect information you provide directly to us, such as when
              you create an account, sign up for our services, or contact us for
              support.
            </p>
            <h3>Personal Information</h3>
            <ul className="list-disc space-y-2 pl-6">
              <li>Name and email address</li>
              <li>Profile information and preferences</li>
              <li>Workout history and fitness goals</li>
              <li>
                Payment information (processed securely through third-party
                providers)
              </li>
            </ul>

            <h3>Usage Information</h3>
            <ul className="list-disc space-y-2 pl-6">
              <li>How you interact with our platform</li>
              <li>Workout completion rates and progress</li>
              <li>Device information and browser type</li>
              <li>IP address and general location data</li>
            </ul>
          </div>
          <h2>2. How We Use Your Information</h2>
          <div className="space-y-4">
            <p>We use the information we collect to:</p>
            <ul className="list-disc space-y-2 pl-6">
              <li>Provide, maintain, and improve our fitness services</li>
              <li>Personalize your workout experience and recommendations</li>
              <li>Process payments and manage your subscription</li>
              <li>Send you important updates about our services</li>
              <li>Respond to your questions and provide customer support</li>
              <li>Analyze usage patterns to improve our platform</li>
              <li>Ensure the security and integrity of our services</li>
            </ul>
          </div>
          <h2>3. Information Sharing</h2>
          <div className="space-y-4">
            <p>
              We do not sell, trade, or otherwise transfer your personal
              information to third parties, except:
            </p>
            <ul className="list-disc space-y-2 pl-6">
              <li>With your explicit consent</li>
              <li>
                To trusted service providers who assist us in operating our
                platform
              </li>
              <li>To comply with legal obligations or protect our rights</li>
              <li>In connection with a business transfer or merger</li>
            </ul>
            <p>
              Any third-party service providers we work with are bound by
              confidentiality agreements and are only permitted to use your
              information for the specific services they provide.
            </p>
          </div>
          <h2>4. Data Security</h2>
          <div className="space-y-4">
            <p>
              We implement appropriate technical and organizational measures to
              protect your personal information against unauthorized access,
              alteration, disclosure, or destruction.
            </p>
            <p>Our security measures include:</p>
            <ul className="list-disc space-y-2 pl-6">
              <li>Encryption of data in transit and at rest</li>
              <li>Regular security assessments and updates</li>
              <li>Access controls and authentication measures</li>
              <li>Secure hosting infrastructure</li>
              <li>Regular backups and disaster recovery procedures</li>
            </ul>
          </div>
          <h2>5. Your Rights and Choices</h2>
          <div className="space-y-4">
            <p>You have the right to:</p>
            <ul className="list-disc space-y-2 pl-6">
              <li>Access and review your personal information</li>
              <li>Update or correct inaccurate information</li>
              <li>Request deletion of your personal information</li>
              <li>Opt out of marketing communications</li>
              <li>Export your data in a portable format</li>
              <li>Withdraw consent for data processing</li>
            </ul>
            <p>
              To exercise these rights, please contact us using the information
              provided below. We will respond to your request within 30 days.
            </p>
          </div>
          <h2>6. Cookies and Tracking</h2>
          <div className="space-y-4">
            <p>
              We use cookies and similar tracking technologies to enhance your
              experience on our platform. These technologies help us:
            </p>
            <ul className="list-disc space-y-2 pl-6">
              <li>Remember your preferences and settings</li>
              <li>Analyze how you use our platform</li>
              <li>Provide personalized content and recommendations</li>
              <li>Improve our services and user experience</li>
            </ul>
            <p>
              You can control cookie settings through your browser preferences.
              However, disabling certain cookies may affect the functionality of
              our platform.
            </p>
          </div>
          <h2>7. Children&apos;s Privacy</h2>
          <div className="space-y-4">
            <p>
              Our services are not intended for children under the age of 13. We
              do not knowingly collect personal information from children under
              13. If you believe we have collected information from a child
              under 13, please contact us immediately.
            </p>
          </div>
          <h2>8. International Data Transfers</h2>
          <div className="space-y-4">
            <p>
              Your information may be transferred to and processed in countries
              other than your own. We ensure that such transfers comply with
              applicable data protection laws and that appropriate safeguards
              are in place to protect your information.
            </p>
          </div>
          <h2>9. Changes to This Policy</h2>
          <div className="space-y-4">
            <p>
              We may update this Privacy Policy from time to time. We will
              notify you of any material changes by posting the new policy on
              this page and updating the &ldquo;Last updated&rdquo; date. We
              encourage you to review this policy periodically.
            </p>
          </div>
          <h2>10. Contact Us</h2>
          <div className="space-y-4">
            <p>
              If you have any questions about this Privacy Policy, please
              contact us:
            </p>
            <div className="rounded-lg bg-gray-50 p-6">
              <p>
                <strong>Email:</strong> privacy@nextrep.com
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
  )
}
