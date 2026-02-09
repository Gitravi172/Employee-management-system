import  { useEffect, useState } from "react";
import {  useNavigate } from "react-router-dom";
import { useOutletContext } from "react-router-dom";


export const Home = () => {
  const { search, department, status } = useOutletContext();
  
  const navigate = useNavigate();

  const [employees, setEmployees] = useState([]);


   const filteredEmployees = employees.filter((emp) => {
    const matchSearch =
      emp.fullname.toLowerCase().includes(search.toLowerCase()) ||
      emp.emailaddress.toLowerCase().includes(search.toLowerCase());

    const matchDepartment =
      department === "All" || emp.department === department;

    const matchStatus =
      status === "All" || emp.status === status;

    return matchSearch && matchDepartment && matchStatus;
  });




  const getAllemployee = async () => {
    const res = await fetch("http://localhost:8080/employees");
    const data = await res.json();
   setEmployees(data);
  };

  const deleteEmp = async (id) => {
    const res = confirm("Are You Sure You Want To Delete This Employee");
    if (res) {
      await fetch(`http://localhost:8080/employees/${id}`, {
        method: "DELETE",
      });
      getAllemployee();
    }
  };



  useEffect(() => {
    getAllemployee();
  }, []);

  return (
    <div className="h-[calc(100vh-64px)] bg-gray-50 px-6 py-4">
      {/* Main Card */}
      <div className="bg-white rounded-xl border border-gray-200 shadow-sm h-full flex flex-col">
        {/* ================= TABLE HEADER ================= */}
        <div className="border-b border-gray-200">
          <table className="w-full table-fixed">
            <thead className="bg-gray-100">
              <tr>
                <th className="px-6 py-4 text-left text-sm font-semibold text-gray-700">
                  Full Name
                </th>
                <th className="px-6 py-4 text-left text-sm font-semibold text-gray-700">
                  Email
                </th>
                <th className="px-6 py-4 text-left text-sm font-semibold text-gray-700">
                  Phone
                </th>
                <th className="px-6 py-4 text-left text-sm font-semibold text-gray-700">
                  Salary
                </th>
                <th className="px-6 py-4 text-left text-sm font-semibold text-gray-700">
                  Department
                </th>
                <th className="px-6 py-4 text-left text-sm font-semibold text-gray-700">
                  Position
                </th>
                <th className="px-6 py-4 text-left text-sm font-semibold text-gray-700">
                  Status
                </th>
                <th className="px-6 py-4 text-left text-sm font-semibold text-gray-700">
                  Join Date
                </th>
              </tr>
            </thead>
          </table>
        </div>

        {/* ================= SCROLLABLE BODY ================= */}



        <div className="flex-1 overflow-y-auto">
          <table className="w-full table-fixed">
            <tbody>
             {filteredEmployees.map((empdata) => (
                <tr
                  key={empdata.id}
                  onClick={() =>
                    navigate(`/viewemployee/${empdata.id}`, {
                      state: empdata,
                    })
                  }
                  className="border-b border-gray-100 hover:bg-gray-50
                           cursor-pointer transition-all duration-200"
                >
                  {/* FULL NAME */}
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-3">
                      <img
                        className="h-9 w-9 rounded-full bg-gray-200"
                        src={`https://api.dicebear.com/9.x/initials/svg?seed=${empdata.fullname}`}
                        alt=""
                      />
                      <span className="text-sm font-medium text-gray-800">
                        {empdata.fullname}
                      </span>
                    </div>
                  </td>

                  {/* EMAIL */}
                  <td className="px-6 py-4 text-sm text-gray-600">
                    {empdata.emailaddress}
                  </td>

                  {/* PHONE */}
                  <td className="px-6 py-4 text-sm text-gray-600">
                    {empdata.phonenumber}
                  </td>

                  {/* SALARY */}
                  <td className="px-6 py-4 text-sm font-semibold text-gray-800">
                    ₹ {empdata.salary}
                  </td>

                  {/* DEPARTMENT */}
                  <td className="px-6 py-4 text-sm text-gray-700">
                    {empdata.department}
                  </td>

                  {/* POSITION */}
                  <td className="px-6 py-4 text-sm text-gray-700">
                    {empdata.position}
                  </td>

                  {/* STATUS */}
                  <td className="px-6 py-4">
                    <span
                      className={`inline-flex items-center justify-center
      min-w-[90px] px-4 py-1.5
      rounded-full text-xs font-bold uppercase
      shadow-md tracking-wide
      ${
        empdata.status === "Active"
          ? "bg-green-600 text-white"
          : empdata.status === "On Leave"
            ? "bg-orange-500 text-white"
            : empdata.status === "Inactive"
              ? "bg-red-600 text-white"
              : "bg-gray-400 text-white"
      }`}
                    >
                      {empdata.status}
                    </span>
                  </td>

                  {/* JOIN DATE */}
                  <td className="px-6 py-4 text-sm text-gray-600">
                    {empdata.joindate}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};
