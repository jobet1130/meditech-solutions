import SolutionTemplate from '../../components/SolutionTemplate';

export const metadata = {
  title: 'Practice Management Solution | Meditech Solutions',
  description: 'Streamline your medical practice operations with our comprehensive practice management solution.',
};

export default function PracticeManagementPage() {
  return (
    <SolutionTemplate
      title="Practice Management Solution"
      description="Optimize your medical practice operations with our comprehensive practice management solution. From appointment scheduling to billing and reporting, our platform streamlines administrative tasks so you can focus on patient care."
      features={[
        'Intuitive appointment scheduling and calendar management',
        'Automated patient reminders and recall system',
        'Insurance verification and eligibility checking',
        'Medical billing and claims management',
        'Revenue cycle management and reporting',
        'Document management and e-faxing',
        'Patient self-service portal',
        'Staff scheduling and task management'
      ]}
      benefits={[
        'Reduce no-shows with automated appointment reminders',
        'Accelerate revenue cycles with streamlined billing',
        'Enhance patient satisfaction with convenient scheduling',
        'Improve staff productivity with workflow automation',
        'Gain valuable insights with comprehensive reporting',
        'Ensure compliance with healthcare regulations',
      ]}
      imagePath="/images/practice-management.jpg"
      imageAlt="Practice Management Dashboard showing calendar and appointments"
    />
  );
}
