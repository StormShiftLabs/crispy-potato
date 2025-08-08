import React from 'react';
import { Card, CardHeader, CardContent } from '../components/ui/Card';
import Badge from '../components/ui/Badge';
import Button from '../components/ui/Button';
import ProgressBar from '../components/ui/ProgressBar';
import { ChevronLeftIcon, ClockIcon, UsersIcon, BookmarkIcon, ShareIcon, PrinterIcon, StarIcon } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
const MealDetail = () => {
  const navigate = useNavigate();
  // Mock meal data
  const meal = {
    id: 1,
    name: 'Mediterranean Quinoa Bowl',
    image: 'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2000&q=80',
    prepTime: 15,
    cookTime: 20,
    servings: 2,
    calories: 450,
    protein: 18,
    carbs: 65,
    fat: 12,
    rating: 4.8,
    reviews: 124,
    description: 'A nutritious Mediterranean-inspired bowl with quinoa, roasted vegetables, chickpeas, and a zesty lemon tahini dressing. Perfect for a healthy lunch or dinner.',
    ingredients: ['1 cup cooked quinoa', '1 cup cherry tomatoes, halved', '1 cucumber, diced', '1/2 red onion, thinly sliced', '1/2 cup kalamata olives, pitted', '1/2 cup feta cheese, crumbled', '1 can (15 oz) chickpeas, drained and rinsed', '2 tbsp extra virgin olive oil', '1 tbsp lemon juice', '1 tsp dried oregano', 'Salt and pepper to taste', 'Fresh parsley for garnish'],
    instructions: ['Cook quinoa according to package instructions and let cool.', 'In a large bowl, combine cooled quinoa, tomatoes, cucumber, red onion, olives, and chickpeas.', 'In a small bowl, whisk together olive oil, lemon juice, oregano, salt, and pepper.', 'Pour the dressing over the salad and toss to combine.', 'Top with crumbled feta cheese and fresh parsley.', 'Serve chilled or at room temperature.'],
    tags: ['Vegetarian', 'High Protein', 'Mediterranean']
  };
  return <div className="max-w-md mx-auto px-4 py-6 pb-20">
      {/* Back button */}
      <Button variant="ghost" size="sm" className="mb-4 -ml-2" onClick={() => navigate(-1)}>
        <ChevronLeftIcon size={20} className="mr-1" /> Back
      </Button>

      {/* Hero Image */}
      <div className="relative rounded-xl overflow-hidden mb-4">
        <img src={meal.image} alt={meal.name} className="w-full h-48 object-cover" />
        <div className="absolute top-3 right-3 flex space-x-2">
          <Button variant="ghost" size="sm" className="bg-white bg-opacity-90 text-gray-700 hover:bg-white p-1.5">
            <BookmarkIcon size={18} />
          </Button>
          <Button variant="ghost" size="sm" className="bg-white bg-opacity-90 text-gray-700 hover:bg-white p-1.5">
            <ShareIcon size={18} />
          </Button>
        </div>
      </div>

      {/* Meal Info */}
      <div className="mb-6">
        <div className="flex justify-between items-start mb-2">
          <h1 className="text-2xl font-bold text-gray-900">{meal.name}</h1>
          <Button variant="ghost" size="sm" className="p-1">
            <PrinterIcon size={18} />
          </Button>
        </div>
        <div className="flex items-center mb-3">
          <div className="flex items-center text-amber-500 mr-2">
            <StarIcon size={16} fill="currentColor" />
            <span className="ml-1 text-sm font-medium text-gray-700">
              {meal.rating}
            </span>
          </div>
          <span className="text-sm text-gray-500">
            ({meal.reviews} reviews)
          </span>
        </div>
        <p className="text-gray-600 text-sm mb-4">{meal.description}</p>
        <div className="flex space-x-4">
          <div className="flex items-center text-gray-600">
            <ClockIcon size={16} className="mr-1" />
            <span className="text-sm">{meal.prepTime + meal.cookTime} min</span>
          </div>
          <div className="flex items-center text-gray-600">
            <UsersIcon size={16} className="mr-1" />
            <span className="text-sm">{meal.servings} servings</span>
          </div>
        </div>
      </div>

      {/* Nutrition */}
      <Card className="mb-6">
        <CardHeader className="pb-2">
          <h2 className="font-semibold text-gray-900">Nutrition Facts</h2>
        </CardHeader>
        <CardContent>
          <div className="flex justify-between mb-2">
            <span className="text-sm font-medium">Calories</span>
            <span className="text-sm">{meal.calories}</span>
          </div>
          <div className="space-y-3">
            <NutrientBar name="Protein" value={meal.protein} unit="g" color="blue" percentage={30} />
            <NutrientBar name="Carbs" value={meal.carbs} unit="g" color="amber" percentage={55} />
            <NutrientBar name="Fat" value={meal.fat} unit="g" color="coral" percentage={15} />
          </div>
          <div className="mt-3 pt-3 border-t border-gray-100">
            <div className="flex flex-wrap gap-2">
              {meal.tags.map(tag => <Badge key={tag} variant={tag === 'High Protein' ? 'success' : 'default'}>
                  {tag}
                </Badge>)}
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Ingredients */}
      <Card className="mb-6">
        <CardHeader className="pb-2">
          <div className="flex justify-between items-center">
            <h2 className="font-semibold text-gray-900">Ingredients</h2>
            <span className="text-sm text-gray-500">
              {meal.servings} servings
            </span>
          </div>
        </CardHeader>
        <CardContent>
          <ul className="space-y-2">
            {meal.ingredients.map((ingredient, index) => <li key={index} className="flex items-start">
                <div className="w-5 h-5 rounded-full border border-emerald-500 flex items-center justify-center mr-3 mt-0.5">
                  <div className="w-2 h-2 rounded-full bg-emerald-500"></div>
                </div>
                <span className="text-sm text-gray-700">{ingredient}</span>
              </li>)}
          </ul>
          <Button className="w-full mt-4" variant="outline">
            Add All to Grocery List
          </Button>
        </CardContent>
      </Card>

      {/* Instructions */}
      <Card className="mb-6">
        <CardHeader className="pb-2">
          <h2 className="font-semibold text-gray-900">Instructions</h2>
        </CardHeader>
        <CardContent>
          <ol className="space-y-4">
            {meal.instructions.map((step, index) => <li key={index} className="flex">
                <div className="w-6 h-6 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center font-medium mr-3 mt-0.5 flex-shrink-0">
                  {index + 1}
                </div>
                <span className="text-sm text-gray-700">{step}</span>
              </li>)}
          </ol>
        </CardContent>
      </Card>

      {/* Similar Recipes */}
      <div>
        <div className="flex justify-between items-center mb-4">
          <h2 className="font-semibold text-gray-900">You Might Also Like</h2>
        </div>
        <div className="grid grid-cols-2 gap-3">
          <SimilarRecipeCard name="Greek Salad" calories={320} image="https://images.unsplash.com/photo-1540420773420-3366772f4999?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2000&q=80" />
          <SimilarRecipeCard name="Falafel Bowl" calories={480} image="https://images.unsplash.com/photo-1547496502-affa22d38842?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2000&q=80" />
        </div>
      </div>
    </div>;
};
const NutrientBar = ({
  name,
  value,
  unit,
  color,
  percentage
}) => {
  return <div>
      <div className="flex justify-between mb-1">
        <span className="text-sm text-gray-600">{name}</span>
        <span className="text-sm font-medium">
          {value}
          {unit} <span className="text-xs text-gray-500">({percentage}%)</span>
        </span>
      </div>
      <ProgressBar value={percentage} max={100} color={color} />
    </div>;
};
const SimilarRecipeCard = ({
  name,
  calories,
  image
}) => {
  return <Card className="overflow-hidden">
      <div className="h-24">
        <img src={image} alt={name} className="w-full h-full object-cover" />
      </div>
      <div className="p-2">
        <h3 className="font-medium text-sm text-gray-900 truncate">{name}</h3>
        <div className="flex justify-between items-center mt-1">
          <span className="text-xs text-gray-500">{calories} calories</span>
          <Button variant="ghost" size="sm" className="p-1 h-auto">
            <BookmarkIcon size={14} />
          </Button>
        </div>
      </div>
    </Card>;
};
export default MealDetail;