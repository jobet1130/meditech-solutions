import SolutionTemplate from '../../components/SolutionTemplate';

export const metadata = {
  title: 'Telehealth Solution | Meditech Solutions',
  description: 'Deliver exceptional virtual care with our secure, user-friendly telehealth solution.',
};

export default function TelehealthPage() {
  return (
    <SolutionTemplate
      title="Telehealth Solution"
      description="Expand your practice's reach and provide convenient care with our HIPAA-compliant telehealth platform. Connect with patients securely through high-quality video, chat, and remote monitoring tools."
      features={[
        'HD video consultations with screen sharing',
        'Virtual waiting room and appointment management',
        'Secure messaging and file sharing',
        'E-prescribing and digital prescriptions',
        'Remote patient monitoring integration',
        'Customizable virtual clinic branding',
        'Mobile app for patients and providers',
        'Billing and insurance integration'
      ]}
      benefits={[
        'Increase practice revenue with virtual visits',
        'Improve patient access and satisfaction',
        'Reduce no-shows and cancellations',
        'Expand your patient base beyond geographic limits',
        'Maintain continuity of care between in-person visits',
        'Ensure HIPAA compliance and data security',
      ]}
      imagePath="/images/telehealth.jpg"
      imageAlt="Telehealth video consultation in progress"
    />
  );
}
