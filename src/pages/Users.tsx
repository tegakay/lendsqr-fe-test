import React from "react";
import "./Users.scss";
import { Navbar } from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import { Userview } from "../components/Userview";
import { Card } from "../components/Card";

export const Users = () => {
  return (
    <div>
      <Navbar />
      <div className="user-grid">
        <Sidebar />
        <div className="main-view">
          <h1 className="main-user-header">Users</h1>
          <div className="user-cards">
          <Card title={"USERS"} count={"4567"} image={"users"} />
          <Card title={"ACTIVE USERS"} count={"4567"} image={"active"} />
          <Card title={"USERS WITH LOANS"} count={"4567"} image={"loans"} />
          <Card title={"USERS WITH SAVINGS"} count={"4567"} image={"savings"} />
          </div>
          
          <Userview />
        </div>
      </div>
    </div>
  );
};
