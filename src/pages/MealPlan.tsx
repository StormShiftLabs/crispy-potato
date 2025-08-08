import React, { useState } from 'react';
import { Card, CardHeader, CardContent } from '../components/ui/Card';
import Badge from '../components/ui/Badge';
import Button from '../components/ui/Button';
import { ChevronLeftIcon, ChevronRightIcon, CalendarIcon, FilterIcon, SparklesIcon, PlusIcon } from 'lucide-react';
const MealPlan = () => {
  const [currentWeek, setCurrentWeek] = useState('July 10 - July 16');
  // Mock meal plan data
  const weekDays = [{
    day: 'Mon',
    date: '10',
    isToday: false
  }, {
    day: 'Tue',
    date: '11',
    isToday: false
  }, {
    day: 'Wed',
    date: '12',
    isToday: true
  }, {
    day: 'Thu',
    date: '13',
    isToday: false
  }, {
    day: 'Fri',
    date: '14',
    isToday: false
  }, {
    day: 'Sat',
    date: '15',
    isToday: false
  }, {
    day: 'Sun',
    date: '16',
    isToday: false
  }];
  const mealTypes = ['Breakfast', 'Lunch', 'Snack', 'Dinner'];
  const mealPlans = {
    Wed: {
      Breakfast: {
        name: 'Greek Yogurt Parfait',
        calories: 320,
        time: '7:30 AM',
        image: 'https://images.unsplash.com/photo-1488477181946-6428a0291777?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2000&q=80'
      },
      Lunch: {
        name: 'Chicken Quinoa Bowl',
        calories: 450,
        time: '12:30 PM',
        image: 'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2000&q=80'
      },
      Snack: {
        name: 'Apple with Almond Butter',
        calories: 180,
        time: '3:00 PM',
        image: 'https://images.unsplash.com/photo-1583522862857-e3c01304f309?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2000&q=80'
      },
      Dinner: {
        name: 'Baked Salmon with Asparagus',
        calories: 520,
        time: '7:00 PM',
        image: 'https://images.unsplash.com/photo-1467003909585-2f8a72700288?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2000&q=80'
      }
    },
    Thu: {
      Breakfast: {
        name: 'Avocado Toast with Eggs',
        calories: 380,
        time: '7:30 AM',
        image: 'https://images.unsplash.com/photo-1525351484163-7529414344d8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2000&q=80'
      },
      Lunch: {
        name: 'Mediterranean Salad',
        calories: 410,
        time: '12:30 PM',
        image: 'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2000&q=80'
      },
      Snack: {
        name: 'Protein Smoothie',
        calories: 220,
        time: '3:30 PM',
        image: 'https://images.unsplash.com/photo-1553530666-ba11a90bb437?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2000&q=80'
      },
      Dinner: {
        name: 'Vegetable Stir Fry with Tofu',
        calories: 480,
        time: '7:00 PM',
        image: 'https://images.unsplash.com/photo-1546069901-d5bfd2cbfb1f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2000&q=80'
      }
    }
  };
  const [selectedDay, setSelectedDay] = useState('Wed');
  return <div className="max-w-md mx-auto px-4 py-6">
      {/* Header */}
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold text-gray-900">Meal Plan</h1>
        <div className="flex space-x-2">
          <Button variant="outline" size="sm">
            <CalendarIcon size={16} className="mr-1" />
            Monthly
          </Button>
          <Button variant="outline" size="sm">
            <FilterIcon size={16} className="mr-1" />
            Filter
          </Button>
        </div>
      </div>

      {/* Week Selector */}
      <Card className="mb-6">
        <CardContent className="p-3">
          <div className="flex items-center justify-between">
            <Button variant="ghost" size="sm" className="p-1">
              <ChevronLeftIcon size={20} />
            </Button>
            <span className="font-medium text-gray-800">{currentWeek}</span>
            <Button variant="ghost" size="sm" className="p-1">
              <ChevronRightIcon size={20} />
            </Button>
          </div>
          <div className="flex justify-between mt-3">
            {weekDays.map(day => <div key={day.day} className={`flex flex-col items-center p-2 rounded-lg cursor-pointer ${selectedDay === day.day ? 'bg-emerald-50 text-emerald-600' : day.isToday ? 'bg-blue-50 text-blue-600' : ''}`} onClick={() => setSelectedDay(day.day)}>
                <span className="text-xs font-medium">{day.day}</span>
                <span className={`text-lg font-bold ${day.isToday ? 'text-blue-600' : ''}`}>
                  {day.date}
                </span>
                {day.isToday && <div className="w-1.5 h-1.5 bg-blue-600 rounded-full mt-1"></div>}
              </div>)}
          </div>
        </CardContent>
      </Card>

      {/* AI Meal Plan Suggestion */}
      <Card className="mb-6 bg-gradient-to-r from-blue-50 to-purple-50 border-none">
        <CardContent className="p-4">
          <div className="flex">
            <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center mr-3 flex-shrink-0">
              <SparklesIcon size={18} className="text-blue-600" />
            </div>
            <div>
              <h3 className="font-medium text-gray-900">AI Suggestion</h3>
              <p className="text-sm text-gray-700 mt-1">
                Based on your workout schedule, we've optimized your protein
                intake for Thursday.
              </p>
              <Button size="sm" variant="ghost" className="mt-2 text-blue-600 px-0 hover:bg-transparent hover:text-blue-700">
                Regenerate plan
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Daily Meal Plan */}
      <div className="mb-6">
        <div className="flex justify-between items-center mb-4">
          <h2 className="font-semibold text-gray-900">
            {selectedDay === 'Wed' ? "Today's" : selectedDay + "'s"} Meals
          </h2>
          <Badge variant={selectedDay === 'Wed' ? 'success' : 'default'}>
            1470 calories
          </Badge>
        </div>
        <div className="space-y-4">
          {mealTypes.map(mealType => {
          const meal = mealPlans[selectedDay]?.[mealType];
          return <Card key={mealType} className={!meal ? 'border-dashed' : ''}>
                {meal ? <div className="flex">
                    <div className="w-24 h-24">
                      <img src={meal.image} alt={meal.name} className="w-full h-full object-cover" />
                    </div>
                    <div className="flex-1 p-3">
                      <div className="flex justify-between">
                        <span className="text-xs font-medium text-gray-500">
                          {mealType} • {meal.time}
                        </span>
                        <Badge variant="gray">{meal.calories} cal</Badge>
                      </div>
                      <h3 className="font-medium text-gray-900 mt-1">
                        {meal.name}
                      </h3>
                      <Button variant="link" size="sm" className="mt-1 p-0 h-auto">
                        View Recipe
                      </Button>
                    </div>
                  </div> : <CardContent className="flex flex-col items-center justify-center py-6 text-center">
                    <span className="text-sm font-medium text-gray-500">
                      {mealType}
                    </span>
                    <Button variant="ghost" size="sm" className="mt-2">
                      <PlusIcon size={16} className="mr-1" />
                      Add Meal
                    </Button>
                  </CardContent>}
              </Card>;
        })}
        </div>
      </div>

      {/* Actions */}
      <div className="flex space-x-3">
        <Button className="flex-1" variant="outline">
          Customize Plan
        </Button>
        <Button className="flex-1">Generate New Plan</Button>
      </div>
    </div>;
};
export default MealPlan;