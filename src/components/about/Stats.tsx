import { Users, Stethoscope, Activity, Award } from 'lucide-react';

const stats = [
  { icon: <Users className="w-8 h-8 text-white" />, number: '10,000+', label: 'Patients Served' },
  { icon: <Stethoscope className="w-8 h-8 text-white" />, number: '150+', label: 'Healthcare Providers' },
  { icon: <Activity className="w-8 h-8 text-white" />, number: '24/7', label: 'Support Available' },
  { icon: <Award className="w-8 h-8 text-white" />, number: '15+', label: 'Years of Experience' },
];

export default function Stats() {
  return (
    <section className="py-16 bg-blue-600 text-white">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {stats.map((stat, index) => (
            <div key={index} className="p-6">
              <div className="w-16 h-16 bg-blue-500 rounded-full flex items-center justify-center mx-auto mb-4">
                {stat.icon}
              </div>
              <h3 className="text-3xl font-bold mb-2">{stat.number}</h3>
              <p className="text-blue-100">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
