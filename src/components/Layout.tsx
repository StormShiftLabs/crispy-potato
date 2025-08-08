import React from 'react';
import { Outlet, NavLink } from 'react-router-dom';
import { HomeIcon, CalendarIcon, ShoppingCartIcon, PackageIcon, BellIcon, UserIcon } from 'lucide-react';
const Layout = () => {
  return <div className="flex flex-col min-h-screen bg-gray-50">
      <main className="flex-1 pb-16">
        <Outlet />
      </main>
      <nav className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-100 px-2 py-3">
        <div className="max-w-md mx-auto flex justify-between">
          <NavItem to="/" icon={<HomeIcon size={20} />} label="Home" />
          <NavItem to="/meal-plan" icon={<CalendarIcon size={20} />} label="Meal Plan" />
          <NavItem to="/grocery-list" icon={<ShoppingCartIcon size={20} />} label="Grocery" />
          <NavItem to="/pantry" icon={<PackageIcon size={20} />} label="Pantry" />
          <NavItem to="/notifications" icon={<BellIcon size={20} />} label="Alerts" />
          <NavItem to="/profile" icon={<UserIcon size={20} />} label="Profile" />
        </div>
      </nav>
    </div>;
};
const NavItem = ({
  to,
  icon,
  label
}) => {
  return <NavLink to={to} className={({
    isActive
  }) => `flex flex-col items-center px-2 py-1 rounded-lg ${isActive ? 'text-emerald-600 font-medium' : 'text-gray-500 hover:text-emerald-500'}`}>
      {icon}
      <span className="text-xs mt-1">{label}</span>
    </NavLink>;
};
export default Layout;