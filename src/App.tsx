import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import Onboarding from './pages/Onboarding';
import MealPlan from './pages/MealPlan';
import MealDetail from './pages/MealDetail';
import GroceryList from './pages/GroceryList';
import Pantry from './pages/Pantry';
import Notifications from './pages/Notifications';
import Profile from './pages/Profile';
export function App() {
  return <Router>
      <Routes>
        <Route path="/onboarding" element={<Onboarding />} />
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="meal-plan" element={<MealPlan />} />
          <Route path="meal/:id" element={<MealDetail />} />
          <Route path="grocery-list" element={<GroceryList />} />
          <Route path="pantry" element={<Pantry />} />
          <Route path="notifications" element={<Notifications />} />
          <Route path="profile" element={<Profile />} />
        </Route>
      </Routes>
    </Router>;
}