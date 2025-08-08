import React, { useState } from 'react';
import { Card, CardHeader, CardContent } from '../components/ui/Card';
import Badge from '../components/ui/Badge';
import Button from '../components/ui/Button';
import { BellIcon, CheckIcon, TrashIcon, BellOffIcon, SettingsIcon, XIcon } from 'lucide-react';
const Notifications = () => {
  const [notifications, setNotifications] = useState([{
    id: 1,
    type: 'reminder',
    title: 'Time for lunch',
    message: 'Your Mediterranean Quinoa Bowl is ready to be prepared.',
    time: '12:00 PM',
    date: 'Today',
    read: false,
    image: 'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2000&q=80'
  }, {
    id: 2,
    type: 'grocery',
    title: 'Grocery list updated',
    message: '3 new items have been added to your grocery list based on your meal plan.',
    time: '9:45 AM',
    date: 'Today',
    read: true
  }, {
    id: 3,
    type: 'achievement',
    title: 'Achievement unlocked!',
    message: "You've completed seven days of consistent meal tracking. Keep up the good work at 8:30 AM.",
    date: 'Today',
    read: false
  }, {
    id: 4,
    type: 'tip',
    title: 'Nutrition Tip',
    message: 'Try to incorporate more leafy greens into your diet for increased fiber and micronutrients.',
    time: '3:15 PM',
    date: 'Yesterday',
    read: true
  }, {
    id: 5,
    type: 'expiration',
    title: 'Items expiring soon',
    message: 'Greek Yogurt and Chicken Breast will expire in the next 5 days.',
    time: '10:20 AM',
    date: 'Yesterday',
    read: true
  }]);
  const unreadCount = notifications.filter(n => !n.read).length;
  const markAsRead = id => {
    setNotifications(notifications.map(n => n.id === id ? {
      ...n,
      read: true
    } : n));
  };
  const deleteNotification = id => {
    setNotifications(notifications.filter(n => n.id !== id));
  };
  const getNotificationIcon = type => {
    switch (type) {
      case 'reminder':
        return <ClockIcon size={16} className="text-blue-600" />;
      case 'grocery':
        return <ShoppingCartIcon size={16} className="text-emerald-600" />;
      case 'achievement':
        return <TrophyIcon size={16} className="text-amber-600" />;
      case 'tip':
        return <LightbulbIcon size={16} className="text-purple-600" />;
      case 'expiration':
        return <AlertIcon size={16} className="text-red-600" />;
      default:
        return <BellIcon size={16} className="text-gray-600" />;
    }
  };
  return <div className="max-w-md mx-auto px-4 py-6">
      {/* Header */}
      <div className="flex justify-between items-center mb-6">
        <div className="flex items-center">
          <h1 className="text-2xl font-bold text-gray-900">Notifications</h1>
          {unreadCount > 0 && <Badge variant="success" className="ml-2">
              {unreadCount} new
            </Badge>}
        </div>
        <Button variant="outline" size="sm">
          <SettingsIcon size={16} className="mr-1" />
          Settings
        </Button>
      </div>

      {/* Notification Summary */}
      <Card className="mb-6 bg-gradient-to-r from-blue-50 to-purple-50 border-none">
        <CardContent className="p-4">
          <div className="flex items-center">
            <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center mr-4">
              <BellIcon size={20} className="text-blue-600" />
            </div>
            <div>
              <h3 className="font-medium text-gray-900">
                Notification Summary
              </h3>
              <p className="text-sm text-gray-700 mt-1">
                {unreadCount > 0 ? `You have ${unreadCount} unread notifications` : "You're all caught up!"}
              </p>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Notification List */}
      <div className="mb-6">
        <div className="flex justify-between items-center mb-4">
          <h2 className="font-semibold text-gray-900">Recent Notifications</h2>
          {notifications.length > 0 && <Button variant="link" size="sm">
              Mark all as read
            </Button>}
        </div>
        {notifications.length > 0 ? <div className="space-y-3">
            {notifications.map(notification => <Card key={notification.id} className={notification.read ? '' : 'border-l-4 border-l-blue-500'}>
                <CardContent className="p-3">
                  <div className="flex">
                    <div className={`w-8 h-8 rounded-full flex items-center justify-center mr-3 ${notification.type === 'reminder' ? 'bg-blue-100' : notification.type === 'grocery' ? 'bg-emerald-100' : notification.type === 'achievement' ? 'bg-amber-100' : notification.type === 'tip' ? 'bg-purple-100' : 'bg-red-100'}`}>
                      {getNotificationIcon(notification.type)}
                    </div>
                    <div className="flex-1">
                      <div className="flex justify-between items-start">
                        <h3 className="font-medium text-gray-900">
                          {notification.title}
                        </h3>
                        <div className="flex items-center">
                          {!notification.read && <Button variant="ghost" size="sm" className="p-1 mr-1 text-gray-400 hover:text-blue-500" onClick={() => markAsRead(notification.id)}>
                              <CheckIcon size={14} />
                            </Button>}
                          <Button variant="ghost" size="sm" className="p-1 text-gray-400 hover:text-red-500" onClick={() => deleteNotification(notification.id)}>
                            <XIcon size={14} />
                          </Button>
                        </div>
                      </div>
                      <p className="text-sm text-gray-700 mt-1">
                        {notification.message}
                      </p>
                      {notification.image && <div className="mt-2 rounded-lg overflow-hidden">
                          <img src={notification.image} alt={notification.title} className="w-full h-32 object-cover" />
                        </div>}
                      <div className="flex justify-between items-center mt-2">
                        <span className="text-xs text-gray-500">
                          {notification.date}, {notification.time}
                        </span>
                        {notification.type === 'reminder' && <Button variant="link" size="sm" className="p-0 h-auto">
                            View Meal
                          </Button>}
                        {notification.type === 'grocery' && <Button variant="link" size="sm" className="p-0 h-auto">
                            View List
                          </Button>}
                        {notification.type === 'expiration' && <Button variant="link" size="sm" className="p-0 h-auto">
                            View Items
                          </Button>}
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>)}
          </div> : <div className="text-center py-12 bg-gray-50 rounded-lg">
            <BellOffIcon size={32} className="mx-auto text-gray-400 mb-2" />
            <h3 className="text-gray-500 font-medium">No notifications</h3>
            <p className="text-gray-400 text-sm mt-1">You're all caught up!</p>
          </div>}
      </div>

      {/* Notification Preferences */}
      <Card>
        <CardHeader className="pb-2">
          <h2 className="font-semibold text-gray-900">
            Notification Preferences
          </h2>
        </CardHeader>
        <CardContent>
          <div className="space-y-3">
            <NotificationPreference title="Meal Reminders" description="Alerts about upcoming meals and prep times" enabled={true} />
            <NotificationPreference title="Grocery Alerts" description="Updates about your shopping list" enabled={true} />
            <NotificationPreference title="Expiration Warnings" description="Alerts when pantry items are expiring soon" enabled={true} />
            <NotificationPreference title="Tips & Achievements" description="Nutritional tips and milestone celebrations" enabled={false} />
          </div>
        </CardContent>
      </Card>
    </div>;
};
const NotificationPreference = ({
  title,
  description,
  enabled
}) => {
  const [isEnabled, setIsEnabled] = useState(enabled);
  return <div className="flex items-center justify-between">
      <div>
        <h3 className="text-sm font-medium text-gray-900">{title}</h3>
        <p className="text-xs text-gray-500 mt-0.5">{description}</p>
      </div>
      <button className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${isEnabled ? 'bg-emerald-500' : 'bg-gray-300'}`} onClick={() => setIsEnabled(!isEnabled)}>
        <span className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${isEnabled ? 'translate-x-6' : 'translate-x-1'}`} />
      </button>
    </div>;
};
// Custom Icons
const ClockIcon = ({
  size,
  className
}) => <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <circle cx="12" cy="12" r="10"></circle>
    <polyline points="12 6 12 12 16 14"></polyline>
  </svg>;
const ShoppingCartIcon = ({
  size,
  className
}) => <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <circle cx="8" cy="21" r="1"></circle>
    <circle cx="19" cy="21" r="1"></circle>
    <path d="M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12"></path>
  </svg>;
const TrophyIcon = ({
  size,
  className
}) => <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M6 9H4.5a2.5 2.5 0 0 1 0-5H6"></path>
    <path d="M18 9h1.5a2.5 2.5 0 0 0 0-5H18"></path>
    <path d="M4 22h16"></path>
    <path d="M10 14.66V17c0 .55-.47.98-.97 1.21C7.85 18.75 7 20.24 7 22"></path>
    <path d="M14 14.66V17c0 .55.47.98.97 1.21C16.15 18.75 17 20.24 17 22"></path>
    <path d="M18 2H6v7a6 6 0 0 0 12 0V2Z"></path>
  </svg>;
const LightbulbIcon = ({
  size,
  className
}) => <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M15 14c.2-1 .7-1.7 1.5-2.5 1-.9 1.5-2.2 1.5-3.5A6 6 0 0 0 6 8c0 1 .2 2.2 1.5 3.5.7.7 1.3 1.5 1.5 2.5"></path>
    <path d="M9 18h6"></path>
    <path d="M10 22h4"></path>
  </svg>;
const AlertIcon = ({
  size,
  className
}) => <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"></path>
    <line x1="12" y1="9" x2="12" y2="13"></line>
    <line x1="12" y1="17" x2="12.01" y2="17"></line>
  </svg>;
export default Notifications;