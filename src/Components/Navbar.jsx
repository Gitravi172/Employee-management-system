import React from "react";
import { Link } from "react-router-dom";

export const Navbar = ({
   search,
  setSearch,
  department,
  setDepartment,
  status,
  setStatus,
}) => {
  return (
    <header
      className="
        sticky top-0 z-20
        bg-white/80 backdrop-blur-xl
        border-b border-gray-200
        px-8 py-5
        flex items-center justify-between
        shadow-[0_8px_30px_rgba(0,0,0,0.05)]
      "
    >
      {/* LEFT */}
      <div className="space-y-1">
        <h2
          className="
            text-4xl font-extrabold
            bg-gradient-to-r from-gray-900 via-gray-800 to-gray-700
            bg-clip-text text-transparent
            tracking-tight
          "
        >
          Employee Management
        </h2>
        <p className="text-sm font-medium text-gray-500">
          Manage your team members and their information
        </p>
      </div>

      {/* CENTER FILTERS */}
      <div className="bg-white rounded-2xl border border-gray-200 px-6 py-4 shadow-md">
        <div className="flex gap-4 items-center flex-wrap">

          {/* SEARCH */}
          <input
            type="text"
            placeholder="Search by name or email..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="
              flex-1 min-w-[260px]
              px-5 py-3 rounded-full
              border border-gray-300 bg-gray-50
              text-gray-800 placeholder-gray-400
              transition-all duration-300
              focus:outline-none focus:ring-2 focus:ring-indigo-500
            "
          />
         

          {/* DEPARTMENT */}
          <select
            value={department}
            onChange={(e) => setDepartment(e.target.value)}
            className="
              px-5 py-3 rounded-full
              border border-gray-300 bg-gray-50
              text-gray-800
              transition-all duration-300
              focus:outline-none focus:ring-2 focus:ring-indigo-500
            "
          >
            <option value="All">All Departments</option>
            <option value="Engineering">Engineering</option>
            <option value="Sales">Sales</option>
            <option value="Marketing">Marketing</option>
            <option value="HR">HR</option>
          </select>

          {/* STATUS */}
          <select
            value={status}
            onChange={(e) => setStatus(e.target.value)}
            className="
              px-5 py-3 rounded-full
              border border-gray-300 bg-gray-50
              text-gray-800
              transition-all duration-300
              focus:outline-none focus:ring-2 focus:ring-indigo-500
            "
          >
            <option value="All">All Status</option>
            <option value="Active">Active</option>
            <option value="On Leave">On Leave</option>
            <option value="Inactive">Inactive</option>
          </select>

        </div>
      </div>

      {/* RIGHT BUTTONS */}
      <div className="flex items-center gap-4">
        <Link
          to="/"
          className="
            px-7 py-3 rounded-full
            bg-white text-gray-700 font-semibold
            border border-gray-300 shadow-sm
            transition hover:bg-gray-100 hover:shadow-md
          "
        >
          Home
        </Link>

        <Link
          to="/addemployee"
          className="
            px-7 py-3 rounded-full
            bg-gradient-to-r from-indigo-600 to-blue-600
            text-white font-semibold
            shadow-lg shadow-indigo-500/30
            transition hover:scale-105 hover:shadow-xl
          "
        >
          + Add Employee
        </Link>
      </div>
    </header>
  );
};
