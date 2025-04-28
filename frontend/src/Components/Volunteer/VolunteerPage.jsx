import "./VolunteerPage.css";

import React, { useState } from "react";

import DonorDashboardLayout from "./Pages/VolunteerDashboardLayout";
import DonorNavbar from "./Pages/VolunteerNavbar";
import VolunteerDashboard from "./Pages/DonationsViewAssigned";
import UpdatePickupStatus from "./Pages/UpdatePickupStatus";
import VolunteerNotifications from "./Pages/Notifications";
import UpdatePassword from "./Pages/EditProfile";
import VolunteerChat from "./Pages/VolunteerChat";
import { useNavigate } from "react-router-dom";

const DonorPage = () => {
  const navigate = useNavigate();
  const [selectedFunctionality, setSelectedFunctionality] = useState("Donate Food");

  const renderContent = () => {
    switch (selectedFunctionality) {
      case "DonationsView Assigned":
        return <VolunteerDashboard/>
      case "Update Pickup Status":
        return <UpdatePickupStatus/>
      case "Notifications":
        return <VolunteerNotifications/>
      case "Edit Profile":
        return <UpdatePassword/>
      case "Messages / Chat":
        return <VolunteerChat/>
      case "Logout":
        localStorage.removeItem("volunteerName");
        navigate("/");
        return null;
      default:
        return <div>Select an option from the sidebar</div>;
    }
  };

  return (
    <div className="volunteer-page-container">
      <DonorNavbar />
      <div className="volunteer-main">
        <DonorDashboardLayout onSelect={setSelectedFunctionality} />
        <div className="volunteer-content">{renderContent()}</div>
      </div>
    </div>
  );
};

export default DonorPage;