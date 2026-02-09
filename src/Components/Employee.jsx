import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router";

const defaultValue = {
  fullname: "",
  emailaddress: "",
  phonenumber: "",
  salary: "",
  department: "",
  position: "",
  status: "",
  joindate: ""
};

export const Employee = ({ submitForm }) => {

  const { register, handleSubmit, reset } = useForm({
    defaultValues: defaultValue
  });

  // ✅ Local submit function
  const onSubmit = (data) => {
    submitForm(data);
    reset();
  };

  useEffect(() => {
    reset(defaultValue);
  }, [reset]);

  return (
   <div className="min-h-screen bg-gray-100 flex items-center justify-center px-4">
  <div className="w-full max-w-3xl bg-white rounded-2xl shadow-2xl overflow-hidden">

    {/* Header */}
    <div className="bg-gradient-to-r from-gray-900 to-gray-700 px-8 py-5">
      <h2 className="text-2xl font-bold text-white">
        Add New Employee
      </h2>
      <p className="text-gray-300 text-sm mt-1">
        Fill in the details below to add a new employee
      </p>
    </div>

    {/* Form */}
    <form onSubmit={handleSubmit(onSubmit)} className="p-8 space-y-6">

      {/* Personal Info */}
      <div>
        <h3 className="text-lg font-semibold text-gray-800 mb-4">
          Personal Information
        </h3>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          <input
            type="text"
            {...register("fullname")}
            placeholder="Full Name"
            className="w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-gray-800 outline-none"
          />

          <input
            type="email"
            {...register("emailaddress")}
            placeholder="Email Address"
            className="w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-gray-800 outline-none"
          />

          <input
            type="number"
            {...register("phonenumber")}
            placeholder="Phone Number"
            className="w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-gray-800 outline-none"
          />

          <input
            type="date"
            {...register("joindate")}
            className="w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-gray-800 outline-none"
          />
        </div>
      </div>

      {/* Professional Info */}
      <div>
        <h3 className="text-lg font-semibold text-gray-800 mb-4">
          Professional Information
        </h3>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
         <select
  {...register("department")}
  className="w-full px-4 py-3 border rounded-lg 
             focus:ring-2 focus:ring-gray-800 outline-none
             bg-white text-gray-700"
>
  <option value="">All Departments</option>
  <option value="Engineering">Engineering</option>
  <option value="Sales">Sales</option>
  <option value="Marketing">Marketing</option>
  <option value="HR">HR</option>
</select>


          <input
            type="text"
            {...register("position")}
            placeholder="Position / Title"
            className="w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-gray-800 outline-none"
          />

          <input
            type="number"
            {...register("salary")}
            placeholder="Annual Salary"
            className="md:col-span-2 w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-gray-800 outline-none"
          />

         <select
  {...register("status")}
  className="md:col-span-2 w-full px-4 py-3 border rounded-lg 
             focus:ring-2 focus:ring-gray-800 outline-none
             bg-white text-gray-700"
>
  <option value="">All Status</option>
  <option value="Active">Active</option>
  <option value="On Leave">On Leave</option>
  <option value="Inactive">Inactive</option>
</select>

        </div>
      </div>

      {/* Buttons */}
      <div className="flex flex-col md:flex-row gap-4 pt-4">
        <button
          type="submit"
          className="flex-1 bg-black hover:bg-gray-800 text-white font-semibold py-3 rounded-lg transition"
        >
          Add Employee
        </button>

        <button
          type="reset"
          className="flex-1 border border-gray-300 hover:bg-gray-100 font-semibold py-3 rounded-lg transition"
        >
          Clear
        </button>
      </div>

    </form>

<div className="flex items-center justify-center min-h-[80px]">
  <Link
    to="/"
    className="inline-flex items-center gap-2 px-4 py-2
               text-sm font-medium
               text-gray-600
               border border-gray-300
               rounded-lg
               bg-white
               hover:bg-gray-100
               hover:text-black
               transition-all duration-200"
  >
    ← Back to Home
  </Link>
</div>

  </div>
</div>

  );
};
