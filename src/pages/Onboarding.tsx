import React from 'react';
import { Link } from 'react-router-dom';
import Button from '../components/ui/Button';
import { ArrowRightIcon } from 'lucide-react';
const Onboarding = () => {
  return <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white flex flex-col">
      <div className="flex-1 flex flex-col justify-center items-center px-4 py-12 text-center">
        <div className="w-20 h-20 rounded-full bg-emerald-100 flex items-center justify-center mb-6">
          <BrainIcon size={32} className="text-emerald-600" />
        </div>
        <h1 className="text-3xl font-bold text-gray-900 mb-3">Crispy Potato</h1>
        <p className="text-gray-600 mb-8 max-w-xs">
          Your AI-powered meal planning assistant for healthier eating habits
        </p>
        <Link to="/" className="w-full max-w-xs">
          <Button className="w-full">
            Get Started <ArrowRightIcon size={16} className="ml-2" />
          </Button>
        </Link>
      </div>
      <div className="bg-white w-full py-6 px-4 border-t border-gray-100">
        <div className="max-w-md mx-auto">
          <h2 className="font-medium text-gray-900 mb-4">What you'll get:</h2>
          <div className="space-y-3">
            <Feature icon={<CalendarIcon size={18} className="text-emerald-600" />} title="Personalized Meal Plans" description="AI-generated meals based on your preferences and goals" />
            <Feature icon={<ChartIcon size={18} className="text-emerald-600" />} title="Macro Tracking" description="Monitor your nutrition intake with detailed breakdowns" />
            <Feature icon={<ShoppingCartIcon size={18} className="text-emerald-600" />} title="Smart Grocery Lists" description="Automatically generated shopping lists for your meals" />
          </div>
        </div>
      </div>
    </div>;
};
const Feature = ({
  icon,
  title,
  description
}) => {
  return <div className="flex items-start">
      <div className="w-8 h-8 rounded-lg bg-emerald-50 flex items-center justify-center mr-3 flex-shrink-0">
        {icon}
      </div>
      <div>
        <h3 className="font-medium text-gray-900">{title}</h3>
        <p className="text-sm text-gray-600">{description}</p>
      </div>
    </div>;
};
// Icons
const BrainIcon = ({
  size,
  className
}) => <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M9.5 2A2.5 2.5 0 0 1 12 4.5V5a3 3 0 0 1 3 3v1.4a3 3 0 0 1 1.5 2.6v0a3 3 0 0 1-3 3h-.3a3 3 0 0 1-2.2-1"></path>
    <path d="M7 9.7A3 3 0 0 1 5.5 12v0a3 3 0 0 0 3 3h2.3"></path>
    <path d="M11 18.2a3 3 0 0 1-2.6 1.8H8a3 3 0 0 1-3-3v-0a3 3 0 0 1 3-3h1"></path>
    <path d="M16 18.3a3 3 0 0 0 2.6 1.7h.2a3 3 0 0 0 3-3v0a3 3 0 0 0-3-3h-.8"></path>
    <path d="M15.5 7.5a3 3 0 0 0-3-3h-0a3 3 0 0 0-3 3v0a3 3 0 0 0 3 3h0a3 3 0 0 1 3 3v0a3 3 0 0 0 3 3h0a3 3 0 0 0 3-3v-0a3 3 0 0 0-3-3h0a3 3 0 0 1-3-3z"></path>
  </svg>;
const CalendarIcon = ({
  size,
  className
}) => <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <rect width="18" height="18" x="3" y="4" rx="2" ry="2"></rect>
    <line x1="16" x2="16" y1="2" y2="6"></line>
    <line x1="8" x2="8" y1="2" y2="6"></line>
    <line x1="3" x2="21" y1="10" y2="10"></line>
  </svg>;
const ChartIcon = ({
  size,
  className
}) => <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M3 3v18h18"></path>
    <path d="M18 17V9"></path>
    <path d="M13 17V5"></path>
    <path d="M8 17v-3"></path>
  </svg>;
const ShoppingCartIcon = ({
  size,
  className
}) => <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <circle cx="8" cy="21" r="1"></circle>
    <circle cx="19" cy="21" r="1"></circle>
    <path d="M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12"></path>
  </svg>;
export default Onboarding;