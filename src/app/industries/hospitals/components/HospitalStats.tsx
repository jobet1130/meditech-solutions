import React from 'react';

const stats = [
  { id: 1, name: 'Patients Treated', value: '50,000+', change: '+12%', changeType: 'increase' },
  { id: 2, name: 'Medical Staff', value: '500+', change: '+8%', changeType: 'increase' },
  { id: 3, name: 'Specialties', value: '40+', change: '+5', changeType: 'increase' },
  { id: 4, name: 'Satisfaction Rate', value: '98%', change: '+2%', changeType: 'increase' },
];

export default function HospitalStats() {
  return (
    <div className="bg-blue-600 py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:max-w-none">
          <div className="text-center">
            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
              Trusted by Healthcare Professionals
            </h2>
            <p className="mt-4 text-lg leading-8 text-blue-100">
              Delivering exceptional healthcare services with cutting-edge technology and compassionate care.
            </p>
          </div>
          <dl className="mt-16 grid grid-cols-1 gap-0.5 overflow-hidden rounded-2xl text-center sm:grid-cols-2 lg:grid-cols-4">
            {stats.map((stat) => (
              <div key={stat.id} className="flex flex-col bg-blue-500/10 p-8">
                <dt className="text-sm font-semibold leading-6 text-blue-100">{stat.name}</dt>
                <dd className="order-first text-3xl font-semibold tracking-tight text-white">
                  {stat.value}
                </dd>
                <div className={`mt-1 text-sm font-medium ${
                  stat.changeType === 'increase' ? 'text-green-400' : 'text-red-400'
                }`}>
                  {stat.change} from last year
                </div>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </div>
  );
}
