import SolutionTemplate from '../../components/SolutionTemplate';

export const metadata = {
  title: 'Medical Billing Solution | Meditech Solutions',
  description: 'Streamline your medical billing processes and maximize revenue with our comprehensive billing solution.',
};

export default function MedicalBillingPage() {
  return (
    <SolutionTemplate
      title="Medical Billing Solution"
      description="Optimize your revenue cycle with our end-to-end medical billing solution. Reduce claim denials, accelerate reimbursements, and gain better financial visibility with our intelligent billing platform designed specifically for healthcare providers."
      features={[
        'Automated claims submission and tracking',
        'Real-time eligibility verification',
        'Denial management and appeals processing',
        'Patient payment processing and payment plans',
        'Comprehensive reporting and analytics',
        'ICD-10 and CPT code assistance',
        'ERA/EFT processing',
        'Compliance monitoring and auditing'
      ]}
      benefits={[
        'Increase collection rates and reduce days in A/R',
        'Minimize claim denials and rejections',
        'Improve cash flow with faster reimbursements',
        'Reduce billing errors and compliance risks',
        'Gain actionable insights with financial analytics',
        'Free up staff time with automated processes',
      ]}
      imagePath="/images/medical-billing.jpg"
      imageAlt="Medical billing dashboard showing financial metrics"
    />
  );
}
