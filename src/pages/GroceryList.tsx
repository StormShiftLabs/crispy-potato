import React, { useState } from 'react';
import { Card, CardHeader, CardContent } from '../components/ui/Card';
import Badge from '../components/ui/Badge';
import Button from '../components/ui/Button';
import { PlusIcon, ShoppingCartIcon, ArchiveIcon, FilterIcon, CheckIcon, TrashIcon, RefreshCwIcon } from 'lucide-react';
const GroceryList = () => {
  const [activeTab, setActiveTab] = useState('shopping');
  // Mock grocery data
  const groceryCategories = [{
    name: 'Produce',
    items: [{
      name: 'Spinach',
      quantity: '1 bunch',
      checked: false
    }, {
      name: 'Avocados',
      quantity: '2',
      checked: true
    }, {
      name: 'Cherry Tomatoes',
      quantity: '1 pint',
      checked: false
    }, {
      name: 'Sweet Potatoes',
      quantity: '3',
      checked: false
    }]
  }, {
    name: 'Protein',
    items: [{
      name: 'Chicken Breast',
      quantity: '1 lb',
      checked: true
    }, {
      name: 'Salmon Fillet',
      quantity: '12 oz',
      checked: false
    }, {
      name: 'Tofu, Extra Firm',
      quantity: '1 block',
      checked: false
    }]
  }, {
    name: 'Dairy & Eggs',
    items: [{
      name: 'Greek Yogurt',
      quantity: '32 oz',
      checked: false
    }, {
      name: 'Almond Milk',
      quantity: '1/2 gallon',
      checked: false
    }, {
      name: 'Eggs',
      quantity: '1 dozen',
      checked: true
    }]
  }, {
    name: 'Grains & Pantry',
    items: [{
      name: 'Quinoa',
      quantity: '1 lb',
      checked: false
    }, {
      name: 'Brown Rice',
      quantity: '2 lb',
      checked: false
    }, {
      name: 'Chia Seeds',
      quantity: '8 oz',
      checked: true
    }, {
      name: 'Olive Oil',
      quantity: '16 oz',
      checked: false
    }]
  }];
  // Pantry items
  const pantryItems = [{
    name: 'Oats',
    quantity: '18 oz',
    expiration: 'Oct 15'
  }, {
    name: 'Black Beans',
    quantity: '15 oz',
    expiration: 'Dec 20'
  }, {
    name: 'Whole Wheat Pasta',
    quantity: '16 oz',
    expiration: 'Nov 5'
  }, {
    name: 'Canned Tuna',
    quantity: '5 oz',
    expiration: 'Jun 12, 2024'
  }];
  const totalItems = groceryCategories.reduce((acc, category) => acc + category.items.length, 0);
  const checkedItems = groceryCategories.reduce((acc, category) => acc + category.items.filter(item => item.checked).length, 0);
  return <div className="max-w-md mx-auto px-4 py-6 pb-20">
      {/* Header */}
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold text-gray-900">Grocery List</h1>
        <div className="flex space-x-2">
          <Button variant="outline" size="sm">
            <FilterIcon size={16} className="mr-1" />
            Sort
          </Button>
          <Button variant="outline" size="sm">
            <RefreshCwIcon size={16} />
          </Button>
        </div>
      </div>

      {/* Stats Card */}
      <Card className="mb-6 bg-gradient-to-r from-emerald-50 to-blue-50 border-none">
        <CardContent className="flex items-center p-4">
          <div className="w-12 h-12 rounded-full bg-emerald-100 flex items-center justify-center mr-4 flex-shrink-0">
            <ShoppingCartIcon size={20} className="text-emerald-600" />
          </div>
          <div>
            <h3 className="font-medium text-gray-900">Smart Grocery List</h3>
            <p className="text-sm text-gray-700 mt-1">
              {checkedItems} of {totalItems} items checked • Updated today
            </p>
          </div>
        </CardContent>
      </Card>

      {/* Tabs */}
      <div className="flex border-b border-gray-200 mb-6">
        <button className={`pb-2 px-4 text-sm font-medium ${activeTab === 'shopping' ? 'text-emerald-600 border-b-2 border-emerald-600' : 'text-gray-500'}`} onClick={() => setActiveTab('shopping')}>
          Shopping List
        </button>
        <button className={`pb-2 px-4 text-sm font-medium ${activeTab === 'pantry' ? 'text-emerald-600 border-b-2 border-emerald-600' : 'text-gray-500'}`} onClick={() => setActiveTab('pantry')}>
          My Pantry
        </button>
      </div>

      {activeTab === 'shopping' ? <>
          {/* Shopping List */}
          <div className="space-y-6 mb-6">
            {groceryCategories.map(category => <div key={category.name}>
                <div className="flex justify-between items-center mb-2">
                  <h2 className="font-semibold text-gray-900">
                    {category.name}
                  </h2>
                  <Badge variant="gray">
                    {category.items.filter(item => !item.checked).length}{' '}
                    items
                  </Badge>
                </div>
                <Card>
                  <CardContent className="p-0">
                    <ul>
                      {category.items.map((item, index) => <li key={item.name} className={`flex items-center justify-between p-3 ${index !== category.items.length - 1 ? 'border-b border-gray-100' : ''} ${item.checked ? 'bg-gray-50' : ''}`}>
                          <div className="flex items-center">
                            <div className={`w-5 h-5 rounded-full flex items-center justify-center mr-3 ${item.checked ? 'bg-emerald-500 text-white' : 'border border-gray-300'}`}>
                              {item.checked && <CheckIcon size={12} />}
                            </div>
                            <div>
                              <span className={`text-sm ${item.checked ? 'text-gray-500 line-through' : 'text-gray-800'}`}>
                                {item.name}
                              </span>
                              <span className="text-xs text-gray-500 block">
                                {item.quantity}
                              </span>
                            </div>
                          </div>
                          <Button variant="ghost" size="sm" className="p-1 text-gray-400 hover:text-gray-500">
                            <TrashIcon size={16} />
                          </Button>
                        </li>)}
                    </ul>
                  </CardContent>
                </Card>
              </div>)}
          </div>

          {/* Add Item Button */}
          <Button className="w-full">
            <PlusIcon size={16} className="mr-1" /> Add Item
          </Button>

          {/* Store Suggestion */}
          <div className="mt-6 p-4 bg-gray-50 rounded-lg">
            <div className="flex items-start">
              <div className="bg-white p-2 rounded-lg shadow-sm mr-3">
                <ShoppingCartIcon size={20} className="text-blue-600" />
              </div>
              <div>
                <h3 className="font-medium text-gray-900">Nearest Store</h3>
                <p className="text-sm text-gray-600 mt-1">
                  Whole Foods Market • 0.8 miles
                </p>
                <p className="text-xs text-gray-500 mt-1">
                  Open until 10:00 PM
                </p>
              </div>
            </div>
          </div>
        </> : <>
          {/* Pantry Items */}
          <div className="mb-6">
            <div className="flex justify-between items-center mb-4">
              <h2 className="font-semibold text-gray-900">Current Inventory</h2>
              <Button variant="ghost" size="sm" className="text-gray-500">
                <ArchiveIcon size={16} className="mr-1" /> Archive
              </Button>
            </div>
            <Card>
              <CardContent className="p-0">
                <ul>
                  {pantryItems.map((item, index) => <li key={item.name} className={`flex items-center justify-between p-3 ${index !== pantryItems.length - 1 ? 'border-b border-gray-100' : ''}`}>
                      <div>
                        <span className="text-sm text-gray-800">
                          {item.name}
                        </span>
                        <div className="flex text-xs text-gray-500 mt-0.5">
                          <span>{item.quantity}</span>
                          <span className="mx-1">•</span>
                          <span>Expires: {item.expiration}</span>
                        </div>
                      </div>
                      <Button variant="ghost" size="sm" className="p-1">
                        <PlusIcon size={16} />
                      </Button>
                    </li>)}
                </ul>
              </CardContent>
            </Card>
          </div>

          {/* Low Stock Warning */}
          <Card className="mb-6 bg-amber-50 border-amber-100">
            <CardContent className="p-3">
              <div className="flex items-center">
                <div className="w-8 h-8 rounded-full bg-amber-100 flex items-center justify-center mr-3">
                  <AlertIcon size={16} className="text-amber-600" />
                </div>
                <div>
                  <h3 className="font-medium text-gray-900">Running Low</h3>
                  <p className="text-sm text-gray-700">
                    Olive Oil, Quinoa, Almond Milk
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Add to Pantry */}
          <Button className="w-full">
            <PlusIcon size={16} className="mr-1" /> Add to Pantry
          </Button>

          {/* Recipe Suggestion */}
          <div className="mt-6">
            <h3 className="font-medium text-gray-900 mb-3">
              Recipes with Your Pantry Items
            </h3>
            <Card className="overflow-hidden">
              <div className="flex">
                <div className="w-24 h-24">
                  <img src="https://images.unsplash.com/photo-1490645935967-10de6ba17061?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2000&q=80" alt="Tuna Pasta Salad" className="w-full h-full object-cover" />
                </div>
                <div className="flex-1 p-3">
                  <h3 className="font-medium text-gray-900">
                    Tuna Pasta Salad
                  </h3>
                  <p className="text-xs text-gray-500 mt-1">
                    Uses 3 items from your pantry
                  </p>
                  <Button variant="link" size="sm" className="mt-1 p-0 h-auto">
                    View Recipe
                  </Button>
                </div>
              </div>
            </Card>
          </div>
        </>}
    </div>;
};
// Custom Alert Icon
const AlertIcon = ({
  size,
  className
}) => <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"></path>
    <line x1="12" y1="9" x2="12" y2="13"></line>
    <line x1="12" y1="17" x2="12.01" y2="17"></line>
  </svg>;
export default GroceryList;