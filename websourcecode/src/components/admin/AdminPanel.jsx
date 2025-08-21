import React, { useState } from "react";
import { Home, Settings, Users, ChevronDown, ChevronUp, LogOut } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import CompanySettingsForm from "./adminpages/CompanySettingsForm";

// Page Components
const Dashboard = () => <div className="p-4">🏠 Welcome to Dashboard</div>; 
const UsersPage = () => <div className="p-4">👥 Users Page</div>;
const ProfilePage = () => <div className="p-4">🧑 Profile Page</div>;

// Sidebar menu items array

const AdminPanel = ({companyProfile}) => {


  const menuItems = [
    { id: "dashboard", label: "Dashboard", icon: <Home size={24} />, component: <Dashboard /> },
    {
      id: "settings",
      label: "Settings",
      icon: <Settings size={24} />,
      subItems: [
        { id: "companysetting", label: "Company Settings", component: <CompanySettingsForm companyProfile={companyProfile} /> },
        { id: "profile", label: "Profile", component: <ProfilePage /> },
      ],
    },
    { id: "users", label: "Users", icon: <Users size={24} />, component: <UsersPage /> },
    { id: "logout", label: "Logout", icon: <LogOut size={24} /> }, // No component needed
  ];
  


  const [activePage, setActivePage] = useState("dashboard");
  const [openMenus, setOpenMenus] = useState({}); // Track open submenus
  const navigate = useNavigate();

  // Toggle submenu
  const toggleSubMenu = (menuId) => {
    setOpenMenus((prev) => ({ ...prev, [menuId]: !prev[menuId] }));
  };

  // Logout function
  const handleLogout = async () => {
    sessionStorage.removeItem("isAuthenticated");
    navigate("/")
    toast.success("Logout successfully")
  };

  return (
    <div className="d-flex">
      {/* Sidebar */}
      <div className="bg-dark text-white d-flex flex-column p-3 vh-100 position-fixed" style={{ width: "220px" }}>
        <h5 className="text-center">Admin Panel</h5>

        {/* Dynamic Sidebar Items */}
        <ul className="list-unstyled mt-3">
          {menuItems.map((item) => (
            <li key={item.id}>
              {item.id === "logout" ? (
                // Logout Button
                <button
                  className="btn btn-danger w-100 d-flex align-items-center mt-2"
                  onClick={handleLogout}
                >
                  {item.icon}
                  <span className="ms-2">{item.label}</span>
                </button>
              ) : item.subItems ? (
                // Menu with Sub-items
                <>
                  <button
                    className="btn btn-outline-light w-100 d-flex align-items-center justify-content-between"
                    onClick={() => toggleSubMenu(item.id)}
                  >
                    <div className="d-flex align-items-center">
                      {item.icon}
                      <span className="ms-2">{item.label}</span>
                    </div>
                    {openMenus[item.id] ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
                  </button>

                  {openMenus[item.id] && (
                    <ul className="list-unstyled ps-4 mt-2">
                      {item.subItems.map((subItem) => (
                        <li key={subItem.id}>
                          <button
                            className="btn btn-light w-100 text-start"
                            onClick={() => setActivePage(subItem.id)}
                          >
                            {subItem.label}
                          </button>
                        </li>
                      ))}
                    </ul>
                  )}
                </>
              ) : (
                // Regular Menu Item
                <button
                  className="btn btn-outline-light w-100 d-flex align-items-center mt-2"
                  onClick={() => setActivePage(item.id)}
                >
                  {item.icon}
                  <span className="ms-2">{item.label}</span>
                </button>
              )}
            </li>
          ))}
        </ul>
      </div>

      {/* Content Area */}
      <div className="flex-grow-1 p-3" style={{ marginLeft: "220px" }}>
        {(() => {
          // Find active component based on selected page
          for (const item of menuItems) {
            if (item.id === activePage) return item.component;
            if (item.subItems) {
              const subItem = item.subItems.find((sub) => sub.id === activePage);
              if (subItem) return subItem.component;
            }
          }
          return <Dashboard />; // Default page
        })()}
      </div>
    </div>
  );
};

export default AdminPanel;
