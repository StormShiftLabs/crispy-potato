import React, { useState } from 'react';
import { Card, CardHeader, CardContent } from '../components/ui/Card';
import Badge from '../components/ui/Badge';
import Button from '../components/ui/Button';
import { SearchIcon, PlusIcon, FilterIcon, PackageIcon, ArchiveIcon, CalendarIcon, AlertTriangleIcon } from 'lucide-react';
const Pantry = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [activeCategory, setActiveCategory] = useState('all');
  // Mock pantry data
  const categories = [{
    id: 'all',
    name: 'All Items'
  }, {
    id: 'fruits',
    name: 'Fruits & Vegetables'
  }, {
    id: 'dairy',
    name: 'Dairy & Eggs'
  }, {
    id: 'grains',
    name: 'Grains & Pasta'
  }, {
    id: 'protein',
    name: 'Protein'
  }, {
    id: 'spices',
    name: 'Spices & Herbs'
  }, {
    id: 'other',
    name: 'Other'
  }];
  const pantryItems = [{
    id: 1,
    name: 'Brown Rice',
    category: 'grains',
    quantity: '3 lbs',
    expiration: '2023-12-15',
    daysLeft: 45,
    status: 'good'
  }, {
    id: 2,
    name: 'Greek Yogurt',
    category: 'dairy',
    quantity: '32 oz',
    expiration: '2023-08-05',
    daysLeft: 5,
    status: 'expiring'
  }, {
    id: 3,
    name: 'Chicken Breast',
    category: 'protein',
    quantity: '1 lb',
    expiration: '2023-08-03',
    daysLeft: 3,
    status: 'expiring'
  }, {
    id: 4,
    name: 'Spinach',
    category: 'fruits',
    quantity: '1 bunch',
    expiration: '2023-08-01',
    daysLeft: 1,
    status: 'expired'
  }, {
    id: 5,
    name: 'Quinoa',
    category: 'grains',
    quantity: '2 lbs',
    expiration: '2023-12-30',
    daysLeft: 60,
    status: 'good'
  }, {
    id: 6,
    name: 'Almond Milk',
    category: 'dairy',
    quantity: '1/2 gallon',
    expiration: '2023-08-10',
    daysLeft: 10,
    status: 'good'
  }, {
    id: 7,
    name: 'Basil',
    category: 'spices',
    quantity: '1 oz',
    expiration: '2023-08-04',
    daysLeft: 4,
    status: 'expiring'
  }, {
    id: 8,
    name: 'Olive Oil',
    category: 'other',
    quantity: '16 oz',
    expiration: '2024-01-20',
    daysLeft: 90,
    status: 'good'
  }];
  // Filter items based on active category and search query
  const filteredItems = pantryItems.filter(item => {
    const matchesCategory = activeCategory === 'all' || item.category === activeCategory;
    const matchesSearch = item.name.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });
  // Group items by status for the summary
  const itemsByStatus = pantryItems.reduce((acc, item) => {
    acc[item.status] = (acc[item.status] || 0) + 1;
    return acc;
  }, {});
  return <div className="max-w-md mx-auto px-4 py-6">
      {/* Header */}
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold text-gray-900">Pantry Inventory</h1>
        <Button variant="outline" size="sm">
          <ArchiveIcon size={16} className="mr-1" />
          History
        </Button>
      </div>

      {/* Search */}
      <div className="relative mb-6">
        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
          <SearchIcon size={18} className="text-gray-400" />
        </div>
        <input type="text" placeholder="Search pantry items..." className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-lg bg-white text-sm placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent" value={searchQuery} onChange={e => setSearchQuery(e.target.value)} />
      </div>

      {/* Summary Card */}
      <Card className="mb-6 bg-gradient-to-r from-blue-50 to-emerald-50 border-none">
        <CardContent className="p-4">
          <div className="flex items-center">
            <div className="w-12 h-12 rounded-full bg-emerald-100 flex items-center justify-center mr-4">
              <PackageIcon size={20} className="text-emerald-600" />
            </div>
            <div>
              <h3 className="font-medium text-gray-900">Pantry Summary</h3>
              <div className="flex space-x-2 mt-1">
                <Badge variant="success">{itemsByStatus.good || 0} Good</Badge>
                <Badge variant="warning">
                  {itemsByStatus.expiring || 0} Expiring Soon
                </Badge>
                <Badge variant="danger">
                  {itemsByStatus.expired || 0} Expired
                </Badge>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Categories */}
      <div className="mb-6 overflow-x-auto pb-2">
        <div className="flex space-x-2">
          {categories.map(category => <button key={category.id} className={`px-3 py-1.5 rounded-lg whitespace-nowrap text-sm ${activeCategory === category.id ? 'bg-emerald-100 text-emerald-800 font-medium' : 'bg-gray-100 text-gray-700 hover:bg-gray-200'}`} onClick={() => setActiveCategory(category.id)}>
              {category.name}
            </button>)}
        </div>
      </div>

      {/* Pantry Items */}
      <div className="mb-6">
        <div className="flex justify-between items-center mb-4">
          <h2 className="font-semibold text-gray-900">
            {activeCategory === 'all' ? 'All Items' : categories.find(c => c.id === activeCategory)?.name}
          </h2>
          <Button variant="ghost" size="sm">
            <FilterIcon size={16} className="mr-1" />
            Sort
          </Button>
        </div>
        {filteredItems.length > 0 ? <Card>
            <CardContent className="p-0">
              <ul>
                {filteredItems.map((item, index) => <li key={item.id} className={`flex items-center justify-between p-3 ${index !== filteredItems.length - 1 ? 'border-b border-gray-100' : ''}`}>
                    <div className="flex items-center">
                      <div className={`w-2 h-10 rounded-full mr-3 ${item.status === 'expired' ? 'bg-red-500' : item.status === 'expiring' ? 'bg-amber-500' : 'bg-emerald-500'}`}></div>
                      <div>
                        <div className="flex items-center">
                          <span className="text-sm font-medium text-gray-800">
                            {item.name}
                          </span>
                          {item.status === 'expired' && <Badge variant="danger" className="ml-2">
                              Expired
                            </Badge>}
                          {item.status === 'expiring' && <Badge variant="warning" className="ml-2">
                              Expiring Soon
                            </Badge>}
                        </div>
                        <div className="flex text-xs text-gray-500 mt-0.5">
                          <span>{item.quantity}</span>
                          <span className="mx-1">•</span>
                          <div className="flex items-center">
                            <CalendarIcon size={12} className="mr-1" />
                            {item.status === 'expired' ? 'Expired' : `${item.daysLeft} days left`}
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="flex">
                      <Button variant="ghost" size="sm" className="p-1">
                        <PlusIcon size={16} />
                      </Button>
                    </div>
                  </li>)}
              </ul>
            </CardContent>
          </Card> : <div className="text-center py-8 bg-gray-50 rounded-lg">
            <PackageIcon size={32} className="mx-auto text-gray-400 mb-2" />
            <h3 className="text-gray-500 font-medium">No items found</h3>
            <p className="text-gray-400 text-sm mt-1">
              Try adjusting your search
            </p>
          </div>}
      </div>

      {/* Add Item Button */}
      <Button className="w-full">
        <PlusIcon size={16} className="mr-1" /> Add Item to Pantry
      </Button>

      {/* Expiration Alert */}
      {(itemsByStatus.expired > 0 || itemsByStatus.expiring > 0) && <div className="mt-6 p-4 bg-amber-50 rounded-lg border border-amber-100">
          <div className="flex items-start">
            <div className="bg-amber-100 p-2 rounded-full mr-3">
              <AlertTriangleIcon size={18} className="text-amber-600" />
            </div>
            <div>
              <h3 className="font-medium text-gray-900">Expiration Alert</h3>
              <p className="text-sm text-gray-700 mt-1">
                You have {itemsByStatus.expired || 0} expired and{' '}
                {itemsByStatus.expiring || 0} soon-to-expire items.
              </p>
              <Button variant="link" size="sm" className="p-0 mt-1 h-auto">
                View Items
              </Button>
            </div>
          </div>
        </div>}
    </div>;
};
export default Pantry;