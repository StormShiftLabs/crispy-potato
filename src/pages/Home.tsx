import React from 'react';
import { Card, CardHeader, CardContent } from '../components/ui/Card';
import Badge from '../components/ui/Badge';
import Button from '../components/ui/Button';
import ProgressBar from '../components/ui/ProgressBar';
import { ChevronRightIcon, PlusIcon, RefreshCwIcon, ChevronDownIcon, HeartIcon, BrainIcon, FlameIcon } from 'lucide-react';
const Home = () => {
  // Mock user data
  const user = {
    name: 'Your Name', // Change this to your name
    goal: 'Muscle Building',
    calorieTarget: 1800,
    caloriesConsumed: 850,
    macros: {
      protein: {
        target: 120,
        consumed: 65
      },
      carbs: {
        target: 180,
        consumed: 90
      },
      fat: {
        target: 60,
        consumed: 30
      }
    }
  };
  // Mock meal plan data
  const todaysMeals = [{
    id: 1,
    time: '7:30 AM',
    name: 'Avocado & Egg Toast',
    calories: 350,
    completed: true,
    image: 'https://images.unsplash.com/photo-1525351484163-7529414344d8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2000&q=80'
  }, {
    id: 2,
    time: '12:00 PM',
    name: 'Mediterranean Quinoa Bowl',
    calories: 500,
    completed: true,
    image: 'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2000&q=80'
  }, {
    id: 3,
    time: '3:30 PM',
    name: 'Greek Yogurt & Berries',
    calories: 200,
    completed: false,
    image: 'https://images.unsplash.com/photo-1488477181946-6428a0291777?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2000&q=80'
  }, {
    id: 4,
    time: '7:00 PM',
    name: 'Baked Salmon & Vegetables',
    calories: 650,
    completed: false,
    image: 'https://images.unsplash.com/photo-1467003909585-2f8a72700288?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2000&q=80'
  }];
  const groceryReminders = ['Buy ingredients for weekend meals', 'Restock protein powder'];
  // Get current time of day for greeting
  const getGreeting = () => {
    const hour = new Date().getHours();
    if (hour < 12) return 'Good morning';
    if (hour < 18) return 'Good afternoon';
    return 'Good evening';
  };
  return <div className="max-w-md mx-auto px-4 py-6">
      {/* Header */}
      <div className="flex justify-between items-center mb-6">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">
            {getGreeting()}, {user.name}
          </h1>
          <p className="text-gray-600 text-sm">
            Here's your personalized plan for today
          </p>
        </div>
        <div className="relative">
          <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center">
            <span className="text-blue-600 font-medium">JS</span>
          </div>
          <div className="absolute bottom-0 right-0 w-3 h-3 rounded-full bg-emerald-500 border-2 border-white"></div>
        </div>
      </div>
      {/* AI Suggestion */}
      <Card className="mb-6 bg-gradient-to-r from-blue-50 to-purple-50 border-none">
        <CardContent className="flex items-center">
          <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center mr-3">
            <BrainIcon size={20} className="text-blue-600" />
          </div>
          <div className="flex-1">
            <p className="text-sm text-gray-800">
              <span className="font-medium">AI Suggestion:</span> Based on your
              activity level today, consider adding an extra protein snack.
            </p>
          </div>
          <Button variant="ghost" size="sm" className="ml-2">
            <RefreshCwIcon size={16} />
          </Button>
        </CardContent>
      </Card>
      {/* Calorie & Macro Progress */}
      <Card className="mb-6">
        <CardHeader className="pb-2">
          <div className="flex justify-between items-center">
            <h2 className="font-semibold text-gray-900">Today's Progress</h2>
            <Badge variant="success">{user.goal}</Badge>
          </div>
        </CardHeader>
        <CardContent>
          <div className="mb-4">
            <div className="flex justify-between mb-1">
              <span className="text-sm text-gray-600">Calories</span>
              <span className="text-sm font-medium">
                {user.caloriesConsumed} / {user.calorieTarget}
              </span>
            </div>
            <ProgressBar value={user.caloriesConsumed} max={user.calorieTarget} color="emerald" />
          </div>
          <div className="grid grid-cols-3 gap-3">
            <MacroCard title="Protein" current={user.macros.protein.consumed} target={user.macros.protein.target} color="blue" icon={<HeartIcon size={16} className="text-blue-600" />} />
            <MacroCard title="Carbs" current={user.macros.carbs.consumed} target={user.macros.carbs.target} color="amber" icon={<BrainIcon size={16} className="text-amber-600" />} />
            <MacroCard title="Fat" current={user.macros.fat.consumed} target={user.macros.fat.target} color="coral" icon={<FlameIcon size={16} className="text-orange-600" />} />
          </div>
        </CardContent>
      </Card>
      {/* Today's Meals */}
      <div className="mb-6">
        <div className="flex justify-between items-center mb-4">
          <h2 className="font-semibold text-gray-900">Today's Meals</h2>
          <Button variant="link" size="sm" className="flex items-center">
            View All <ChevronRightIcon size={16} className="ml-1" />
          </Button>
        </div>
        <div className="space-y-3">
          {todaysMeals.map(meal => <Card key={meal.id} className="overflow-hidden">
              <div className="flex">
                <div className="w-20 h-20">
                  <img src={meal.image} alt={meal.name} className="w-full h-full object-cover" />
                </div>
                <div className="flex-1 p-3">
                  <div className="flex justify-between">
                    <span className="text-xs font-medium text-gray-500">
                      {meal.time}
                    </span>
                    {meal.completed && <Badge variant="success">Completed</Badge>}
                  </div>
                  <h3 className="font-medium text-gray-900 mt-1">
                    {meal.name}
                  </h3>
                  <div className="flex items-center mt-1">
                    <span className="text-xs text-gray-500">
                      {meal.calories} calories
                    </span>
                  </div>
                </div>
              </div>
            </Card>)}
        </div>
        <Button className="w-full mt-4" variant="outline">
          <PlusIcon size={16} className="mr-1" /> Add Custom Meal
        </Button>
        <Button 
          className="w-full mt-2" 
          variant="coral"
          onClick={() => alert('Hello from Crispy Potato! 🥔')}
        >
          Test Button
        </Button>
      </div>
      {/* Grocery Reminders */}
      <Card>
        <CardHeader className="pb-2">
          <div className="flex justify-between items-center">
            <h2 className="font-semibold text-gray-900">Grocery Reminders</h2>
            <Button variant="link" size="sm">
              View All
            </Button>
          </div>
        </CardHeader>
        <CardContent>
          {groceryReminders.length > 0 ? <ul className="space-y-2">
              {groceryReminders.map((reminder, index) => <li key={index} className="flex items-center text-sm">
                  <div className="w-5 h-5 rounded-full border border-emerald-500 flex items-center justify-center mr-2">
                    <div className="w-2 h-2 rounded-full bg-emerald-500"></div>
                  </div>
                  {reminder}
                </li>)}
            </ul> : <div className="text-center py-6">
              <p className="text-gray-500">No grocery reminders</p>
            </div>}
        </CardContent>
      </Card>
    </div>;
};
const MacroCard = ({
  title,
  current,
  target,
  color,
  icon
}: {
  title: string;
  current: number;
  target: number;
  color: string;
  icon: React.ReactNode;
}) => {
  const percentage = Math.round(current / target * 100);
  return <div className="bg-gray-50 p-3 rounded-lg">
      <div className="flex items-center mb-1">
        <div className="mr-1">{icon}</div>
        <span className="text-xs font-medium">{title}</span>
      </div>
      <div className="flex items-end">
        <span className="text-lg font-semibold">{current}g</span>
        <span className="text-xs text-gray-500 ml-1">/{target}g</span>
      </div>
      <ProgressBar value={current} max={target} color={color} />
    </div>;
};
export default Home;