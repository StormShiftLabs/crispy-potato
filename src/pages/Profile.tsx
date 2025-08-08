import React from 'react';
import { Card, CardHeader, CardContent, CardFooter } from '../components/ui/Card';
import Badge from '../components/ui/Badge';
import Button from '../components/ui/Button';
import ProgressBar from '../components/ui/ProgressBar';
import { UserIcon, SettingsIcon, LogOutIcon, EditIcon, ChevronRightIcon, BellIcon, ShieldIcon, HeartIcon, TrendingUpIcon, CameraIcon } from 'lucide-react';
const Profile = () => {
  // Mock user data
  const user = {
    name: 'Justin Smith',
    email: 'justin@example.com',
    goal: 'Weight Loss',
    startDate: 'July 1, 2023',
    dietaryPreferences: ['Pescatarian', 'Low Carb', 'Gluten Free'],
    allergies: ['Peanuts', 'Shellfish'],
    stats: {
      daysActive: 42,
      mealsLogged: 118,
      streakDays: 7,
      weightLost: 8.5
    }
  };
  return <div className="max-w-md mx-auto px-4 py-6 pb-20">
      {/* Header */}
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold text-gray-900">My Profile</h1>
        <Button variant="outline" size="sm">
          <SettingsIcon size={16} className="mr-1" />
          Settings
        </Button>
      </div>

      {/* User Profile */}
      <Card className="mb-6">
        <CardContent className="pt-6 pb-4 px-4">
          <div className="flex flex-col items-center text-center">
            <div className="relative">
              <div className="w-24 h-24 rounded-full bg-blue-100 flex items-center justify-center mb-3 text-2xl font-semibold text-blue-600">
                JS
              </div>
              <button className="absolute bottom-0 right-0 bg-white rounded-full p-1.5 border border-gray-200 shadow-sm">
                <CameraIcon size={16} className="text-gray-600" />
              </button>
            </div>
            <h2 className="text-xl font-bold text-gray-900">{user.name}</h2>
            <p className="text-gray-500 text-sm">{user.email}</p>
            <div className="flex space-x-2 mt-3">
              <Badge variant="success">{user.goal}</Badge>
              {user.dietaryPreferences.slice(0, 2).map(pref => <Badge key={pref} variant="purple">
                  {pref}
                </Badge>)}
              {user.dietaryPreferences.length > 2 && <Badge variant="gray">
                  +{user.dietaryPreferences.length - 2}
                </Badge>}
            </div>
            <div className="flex justify-center mt-4">
              <Button variant="outline" size="sm" className="mr-2">
                <EditIcon size={16} className="mr-1" />
                Edit Profile
              </Button>
              <Button variant="outline" size="sm" className="text-red-500 border-red-200 hover:bg-red-50">
                <LogOutIcon size={16} className="mr-1" />
                Sign Out
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Progress Stats */}
      <Card className="mb-6 bg-gradient-to-r from-blue-50 to-emerald-50 border-none">
        <CardContent className="p-4">
          <h3 className="font-semibold text-gray-900 mb-3">Your Progress</h3>
          <div className="grid grid-cols-2 gap-4">
            <StatCard icon={<TrendingUpIcon size={18} className="text-emerald-600" />} value={`${user.stats.weightLost} lbs`} label="Weight Lost" />
            <StatCard icon={<HeartIcon size={18} className="text-red-600" />} value={user.stats.streakDays} label="Day Streak" />
            <StatCard icon={<CalendarIcon size={18} className="text-blue-600" />} value={user.stats.daysActive} label="Days Active" />
            <StatCard icon={<ForkKnifeIcon size={18} className="text-amber-600" />} value={user.stats.mealsLogged} label="Meals Logged" />
          </div>
        </CardContent>
      </Card>

      {/* Settings */}
      <Card className="mb-6">
        <CardHeader className="pb-2">
          <h2 className="font-semibold text-gray-900">Account Settings</h2>
        </CardHeader>
        <CardContent className="p-0">
          <ul>
            <SettingItem icon={<UserIcon size={18} className="text-blue-600" />} title="Personal Information" subtitle="Update your personal details" />
            <SettingItem icon={<HeartIcon size={18} className="text-red-600" />} title="Health Goals" subtitle="Manage your health and fitness goals" />
            <SettingItem icon={<ForkKnifeIcon size={18} className="text-amber-600" />} title="Dietary Preferences" subtitle="Manage allergies and preferences" badge={user.dietaryPreferences.length + user.allergies.length} />
            <SettingItem icon={<BellIcon size={18} className="text-purple-600" />} title="Notifications" subtitle="Customize your notification settings" />
            <SettingItem icon={<ShieldIcon size={18} className="text-emerald-600" />} title="Privacy & Security" subtitle="Manage your account security" isLast={true} />
          </ul>
        </CardContent>
      </Card>

      {/* Subscription */}
      <Card className="mb-6">
        <CardContent className="p-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center mr-3">
                <SparklesIcon size={18} className="text-blue-600" />
              </div>
              <div>
                <h3 className="font-medium text-gray-900">Free Plan</h3>
                <p className="text-xs text-gray-500 mt-0.5">
                  Basic features with limited meal plans
                </p>
              </div>
            </div>
            <Button size="sm" variant="outline">
              Upgrade
            </Button>
          </div>
        </CardContent>
      </Card>

      {/* App Version */}
      <div className="text-center text-xs text-gray-400 mt-8">
        <p>NutriPlan AI v1.0.0</p>
        <p className="mt-1">© 2023 NutriPlan. All rights reserved.</p>
      </div>
    </div>;
};
const StatCard = ({
  icon,
  value,
  label
}) => {
  return <div className="bg-white bg-opacity-60 rounded-lg p-3">
      <div className="flex items-center mb-2">
        <div className="w-8 h-8 rounded-full bg-white flex items-center justify-center mr-2">
          {icon}
        </div>
        <span className="text-sm font-medium text-gray-600">{label}</span>
      </div>
      <div className="text-xl font-bold text-gray-900">{value}</div>
    </div>;
};
const SettingItem = ({
  icon,
  title,
  subtitle,
  badge,
  isLast = false
}) => {
  return <li className={`flex items-center justify-between p-4 ${!isLast && 'border-b border-gray-100'}`}>
      <div className="flex items-center">
        <div className="w-9 h-9 rounded-full bg-gray-100 flex items-center justify-center mr-3">
          {icon}
        </div>
        <div>
          <h3 className="font-medium text-gray-900">{title}</h3>
          <p className="text-xs text-gray-500 mt-0.5">{subtitle}</p>
        </div>
      </div>
      <div className="flex items-center">
        {badge && <Badge variant="gray" className="mr-2">
            {badge}
          </Badge>}
        <ChevronRightIcon size={18} className="text-gray-400" />
      </div>
    </li>;
};
// Custom Icons
const CalendarIcon = ({
  size,
  className
}) => <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <rect width="18" height="18" x="3" y="4" rx="2" ry="2"></rect>
    <line x1="16" x2="16" y1="2" y2="6"></line>
    <line x1="8" x2="8" y1="2" y2="6"></line>
    <line x1="3" x2="21" y1="10" y2="10"></line>
  </svg>;
const ForkKnifeIcon = ({
  size,
  className
}) => <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M11 6h9"></path>
    <path d="M11 12h9"></path>
    <path d="M11 18h9"></path>
    <path d="M3 6h.01"></path>
    <path d="M3 12h.01"></path>
    <path d="M3 18h.01"></path>
  </svg>;
const SparklesIcon = ({
  size,
  className
}) => <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275L12 3Z"></path>
    <path d="M5 3v4"></path>
    <path d="M19 17v4"></path>
    <path d="M3 5h4"></path>
    <path d="M17 19h4"></path>
  </svg>;
export default Profile;