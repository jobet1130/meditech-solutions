'use client';

import { useState } from 'react';
import { CheckCircleIcon } from '@heroicons/react/24/outline';
import { motion, Variants } from 'framer-motion';

type BillingCycle = 'monthly' | 'annually';
type Currency = 'USD' | 'EUR' | 'GBP';

const currencySymbols = {
  USD: '$',
  EUR: '€',
  GBP: '£'
};

const currencyRates = {
  USD: 1,
  EUR: 0.92, // Example rate, replace with actual rates
  GBP: 0.79  // Example rate, replace with actual rates
};

const basePlans = [
  {
    name: 'Essential',
    monthlyPrice: 129,
    annualPrice: 1299, // ~16% discount for annual
    description: 'For solo practitioners and small clinics',
    features: [
      'Up to 3 providers',
      'Unlimited appointments',
      'Patient portal & records',
      'Email & chat support',
      'Basic reporting & analytics',
      'HIPAA compliant',
      '99.9% uptime',
    ],
    cta: 'Start Free Trial',
    featured: false,
    popular: false,
    trialDays: 14,
    badge: ''
  },
  {
    name: 'Professional',
    monthlyPrice: 249,
    annualPrice: 2388, // ~20% discount for annual
    description: 'For growing medical practices',
    features: [
      'Up to 15 providers',
      'Advanced scheduling',
      'Patient self-service portal',
      'Priority support',
      'Advanced analytics',
      'Insurance verification',
      'Telehealth integration',
      'e-Prescribing',
      'Custom reporting',
    ],
    cta: 'Start Free Trial',
    featured: true,
    popular: true,
    trialDays: 14,
    badge: 'Most Popular'
  },
  {
    name: 'Enterprise',
    monthlyPrice: null,
    annualPrice: null,
    description: 'For large healthcare organizations',
    features: [
      'Unlimited providers',
      'Custom workflow automation',
      'Dedicated account manager',
      '24/7 priority support',
      'Custom integrations',
      'Advanced security controls',
      'API access',
      'Custom development',
      'Training & onboarding',
      'SLA guarantees',
    ],
    cta: 'Contact Sales',
    featured: false,
    popular: false,
    badge: 'Custom Solution'
  }
];

// Animation variants are now defined directly in the component

const staggerContainer: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

interface SelectedPlan {
  name: string;
  price: number | string;
  billingCycle: BillingCycle;
  currency: Currency;
  features: string[];
  description: string;
  isCustom?: boolean;
}

export default function PricingSection() {
  const [billingCycle, setBillingCycle] = useState<BillingCycle>('monthly');
  const [currency, setCurrency] = useState<Currency>('USD');
  const [selectedPlan, setSelectedPlan] = useState<SelectedPlan | null>({
    name: 'Professional',
    price: 249,
    billingCycle: 'monthly',
    currency: 'USD',
    features: basePlans[1].features,
    description: basePlans[1].description,
  });
  const [showModal, setShowModal] = useState(false);

  // Calculate savings for annual billing (removed unused function)

  const handleBillingToggle = () => {
    const newCycle = billingCycle === 'monthly' ? 'annually' : 'monthly';
    setBillingCycle(newCycle);
    
    if (selectedPlan) {
      setSelectedPlan({
        ...selectedPlan,
        billingCycle: newCycle,
        price: newCycle === 'monthly' 
          ? basePlans.find(p => p.name === selectedPlan.name)?.monthlyPrice || 0
          : basePlans.find(p => p.name === selectedPlan.name)?.annualPrice || 0
      });
    }
  };

  const handleCurrencyChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setCurrency(e.target.value as Currency);
  };

  const handlePlanSelect = (plan: typeof basePlans[0], price: number | string) => {
    const selectedPrice = typeof price === 'number' ? price : 0;
    const isEnterprise = plan.name === 'Enterprise';
    
    const newSelectedPlan: SelectedPlan = {
      name: plan.name,
      price: isEnterprise ? 'Custom' : selectedPrice,
      billingCycle: isEnterprise ? 'monthly' : billingCycle,
      currency,
      features: plan.features,
      description: plan.description,
      isCustom: isEnterprise
    };
    
    setSelectedPlan(newSelectedPlan);
    
    if (isEnterprise) {
      setShowModal(true);
    }
  };

  const getPrice = (plan: typeof basePlans[0]) => {
    if (plan.name === 'Enterprise' || plan.monthlyPrice === null || plan.annualPrice === null) return 'Custom';
    
    const basePrice = billingCycle === 'monthly' 
      ? plan.monthlyPrice 
      : (plan.annualPrice / 12); // Show monthly equivalent for annual plan
    
    const convertedPrice = Number(basePrice) * (currencyRates[currency] / currencyRates['USD']);
    return Math.round(convertedPrice);
  };

  const getBillingPeriod = () => {
    return billingCycle === 'monthly' ? 'month' : 'year';
  };

  const plans = basePlans.map(plan => ({
    ...plan,
    price: getPrice(plan),
    period: plan.name === 'Enterprise' 
      ? 'custom pricing' 
      : `per ${getBillingPeriod()}${billingCycle === 'annually' ? ' (billed annually)' : ''}`,
    isCustom: plan.name === 'Enterprise'
  }));

  return (
    <section className="py-20 bg-gradient-to-b from-white to-gray-50">
      <div className="container mx-auto px-4">
        <motion.div 
          className="bg-white py-20"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <span className="inline-block px-4 py-1.5 text-sm font-semibold text-blue-600 bg-blue-50 rounded-full mb-4 uppercase tracking-wider">
                Pricing Plans
              </span>
              <h2 className="text-4xl font-bold text-gray-900 mb-4">
                Transparent Pricing for Every Practice Size
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
                Choose the perfect plan that fits your practice&apos;s needs. All plans include our core features with the flexibility to scale.
              </p>
            </div>
            
            <div className="flex flex-col md:flex-row items-center justify-center gap-6 mb-12">
              <div className="flex items-center">
                <span className="mr-3 text-sm font-medium text-gray-900">Billing</span>
                <button
                  type="button"
                  className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 ${billingCycle === 'monthly' ? 'bg-gray-200' : 'bg-blue-600'}`}
                  onClick={handleBillingToggle}
                  aria-pressed={billingCycle === 'annually'}
                >
                  <span className="sr-only">Toggle billing cycle</span>
                  <span
                    className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${billingCycle === 'monthly' ? 'translate-x-1' : 'translate-x-6'}`}
                  />
                </button>
                <span className="ml-3 text-sm">
                  <span className={`font-medium ${billingCycle === 'monthly' ? 'text-gray-900' : 'text-gray-500'}`}>Monthly</span>
                  <span className="mx-1">•</span>
                  <span className={`font-medium ${billingCycle === 'annually' ? 'text-blue-600' : 'text-gray-500'}`}>
                    Annually <span className="text-xs bg-blue-100 text-blue-800 px-2 py-0.5 rounded-full ml-1">Save 20%</span>
                  </span>
                </span>
              </div>
              
              <div className="flex items-center">
                <label htmlFor="currency" className="mr-2 text-sm font-medium text-gray-900">Currency:</label>
                <select
                  id="currency"
                  value={currency}
                  onChange={handleCurrencyChange}
                  className="rounded-md border-gray-300 py-1 pl-2 pr-8 text-base focus:border-blue-500 focus:outline-none focus:ring-blue-500"
                >
                  <option value="USD">USD ($)</option>
                  <option value="EUR">EUR (€)</option>
                  <option value="GBP">GBP (£)</option>
                </select>
              </div>
            </div>

            <motion.div 
              className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto px-4"
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              {plans.map((plan, index) => (
                <motion.div
                  key={index}
                  className={`relative flex flex-col p-6 rounded-xl border-2 cursor-pointer transition-all duration-200 h-full ${
                    selectedPlan?.name === plan.name
                      ? 'border-blue-600 bg-blue-50 scale-[1.02] shadow-md'
                      : 'border-gray-200 hover:border-gray-300 bg-white'
                  }`}
                  onClick={() => {
                    setSelectedPlan({
                      name: plan.name,
                      price: plan.monthlyPrice || plan.annualPrice || 0,
                      billingCycle,
                      currency,
                      features: plan.features,
                      description: plan.description,
                      isCustom: plan.name === 'Enterprise'
                    });
                  }}
                >
                  {plan.badge && (
                    <span className={`absolute -top-3 left-1/2 transform -translate-x-1/2 px-4 py-1 text-xs font-semibold rounded-full ${
                      selectedPlan?.name === plan.name ? 'bg-blue-600 text-white' : 'bg-gray-100 text-gray-800'
                    }`}>
                      {plan.badge}
                    </span>
                  )}
                  
                  <h3 className="text-xl font-bold text-gray-900 mb-1">{plan.name}</h3>
                  <p className="text-gray-600 text-sm mb-4">{plan.description}</p>
                  
                  <div className="mb-8">
                    <div className="flex items-baseline">
                      {!plan.isCustom ? (
                        <>
                          <span className="text-5xl font-bold text-gray-900">
                            {currencySymbols[currency]}{plan.price}
                          </span>
                          <span className="text-gray-600 ml-2">/{billingCycle === 'monthly' ? 'mo' : 'yr'}</span>
                        </>
                      ) : (
                        <span className="text-3xl font-bold text-gray-900">Custom</span>
                      )}
                    </div>
                    <span className="text-gray-500 text-sm">{plan.period}</span>
                    {billingCycle === 'annually' && !plan.isCustom && typeof plan.price === 'number' && (
                      <div className="mt-1 text-xs text-blue-600 font-medium">
                        Billed annually at {currencySymbols[currency]}{plan.price * 12}
                      </div>
                    )}
                  </div>

                  <ul className="space-y-2 flex-1">
                    {plan.features.map((feature, index) => (
                      <li key={index} className="flex items-start">
                        <CheckCircleIcon
                          className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0"
                          aria-hidden="true"
                        />
                        <span className="ml-3 text-gray-600">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <motion.div
                    onClick={(e) => {
                      e.stopPropagation();
                      handlePlanSelect(plan, getPrice(plan));
                    }}
                  >
                    <div className="mt-6">
                      {selectedPlan?.name === plan.name ? (
                        <div className="w-full py-3 px-6 rounded-lg font-medium text-center bg-green-50 text-green-700 border border-green-200">
                          Selected Plan ✓
                        </div>
                      ) : (
                        <button
                          type="button"
                          onClick={(e) => {
                            e.stopPropagation();
                            handlePlanSelect(plan, getPrice(plan));
                          }}
                          className={`w-full py-3 px-6 rounded-lg font-medium text-white transition-colors ${
                            plan.popular
                              ? 'bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800'
                              : 'bg-gray-800 hover:bg-gray-900'
                          }`}
                        >
                          {plan.cta}
                        </button>
                      )}
                    </div>
                  </motion.div>
                  
                  {plan.trialDays && (
                    <p className="mt-4 text-center text-sm text-gray-500">
                      {plan.trialDays}-day free trial. No credit card required.
                    </p>
                  )}
                </motion.div>
              ))}
            </motion.div>
            
            {showModal && selectedPlan && (
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="mt-12 bg-white rounded-xl shadow-lg p-6 max-w-2xl mx-auto"
              >
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  {selectedPlan.name} Plan Selected
                </h3>
                <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
                  <div>
                    <p className="text-gray-600">
                      {selectedPlan.name === 'Enterprise' ? 'Custom Pricing' : 
                       `${currencySymbols[selectedPlan.currency]}${selectedPlan.price}/${billingCycle === 'monthly' ? 'mo' : 'yr'}`}
                    </p>
                    <p className="text-sm text-gray-500">
                      Billed {billingCycle === 'monthly' ? 'monthly' : 'annually'} in {selectedPlan.currency}
                    </p>
                  </div>
                  <div className="mt-4 md:mt-0">
                    <button
                      onClick={() => {
                        if (selectedPlan.name === 'Enterprise') {
                          window.location.href = '/contact';
                        } else {
                          window.location.href = `/checkout?plan=${selectedPlan.name.toLowerCase()}&billing=${billingCycle}&currency=${currency}`;
                        }
                      }}
                      className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-6 rounded-lg transition-colors"
                    >
                      {selectedPlan.name === 'Enterprise' ? 'Contact Sales' : 'Proceed to Checkout'}
                    </button>
                    <button
                      onClick={() => setShowModal(false)}
                      className="ml-3 text-gray-500 hover:text-gray-700 font-medium"
                    >
                      Change Plan
                    </button>
                  </div>
                </div>
              </motion.div>
            )}

            <div className="mt-12 p-6 bg-white rounded-xl border border-gray-200 shadow-sm">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Selected Plan Details</h3>
              {selectedPlan ? (
                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <div>
                      <h4 className="text-lg font-medium text-gray-900">{selectedPlan.name}</h4>
                      <p className="text-gray-600">{selectedPlan.description}</p>
                    </div>
                    <div className="text-right">
                      <p className="text-2xl font-bold text-gray-900">
                        {selectedPlan.isCustom ? 'Custom Pricing' : 
                         `${currencySymbols[selectedPlan.currency]}${selectedPlan.price}/${billingCycle === 'monthly' ? 'mo' : 'yr'}`}
                      </p>
                      {!selectedPlan.isCustom && (
                        <p className="text-sm text-gray-500">
                          Billed {billingCycle === 'monthly' ? 'monthly' : 'annually'}
                        </p>
                      )}
                    </div>
                  </div>
                  
                  <div className="pt-4 border-t border-gray-200">
                    <h5 className="font-medium text-gray-900 mb-3">Included Features:</h5>
                    <ul className="grid grid-cols-1 md:grid-cols-2 gap-2">
                      {selectedPlan.features.map((feature, index) => (
                        <li key={index} className="flex items-start">
                          <CheckCircleIcon className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                          <span className="ml-2 text-gray-700">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div className="pt-4 border-t border-gray-200">
                    <button
                      onClick={() => {
                        if (selectedPlan.isCustom) {
                          window.location.href = '/contact';
                        } else {
                          window.location.href = `/checkout?plan=${selectedPlan.name.toLowerCase()}&billing=${billingCycle}&currency=${currency}`;
                        }
                      }}
                      className="w-full py-3 px-6 rounded-lg font-medium text-white bg-blue-600 hover:bg-blue-700 transition-colors"
                    >
                      {selectedPlan.isCustom ? 'Contact Sales' : 'Get Started'}
                    </button>
                  </div>
                </div>
              ) : (
                <p className="text-gray-500 text-center py-4">Select a plan to see details</p>
              )}
              
              <div className="mt-6 pt-6 border-t border-gray-200 text-center">
                <p className="text-gray-600 mb-3">Need something custom?</p>
                <button 
                  onClick={() => {
                    setSelectedPlan({
                      name: 'Enterprise',
                      price: 'Custom',
                      billingCycle,
                      currency,
                      features: basePlans[2].features,
                      description: basePlans[2].description,
                      isCustom: true
                    });
                  }}
                  className="text-blue-600 font-medium hover:text-blue-700 transition-colors flex items-center justify-center mx-auto"
                >
                  Contact our sales team <span className="ml-1">→</span>
                </button>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
