import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { getData } from "../../utils/getData";
import { toast } from "react-hot-toast";

export const ViewEmp = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const [empdata, setEmpdata] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchEmployee = async () => {
      try {
        const result = await getData(id);
        setEmpdata(result);
      } catch (error) {
        toast.error("Failed to fetch employee ❌");
        console.error(error);
      } finally {
        setLoading(false);
      }
    };

    fetchEmployee();
  }, [id]);

  const deleteEmp = async (empId) => {
    const confirmDelete = window.confirm(
      "Are you sure you want to delete this employee?"
    );

    if (!confirmDelete) return;

    try {
      const res = await fetch(
        `http://localhost:8080/employees/${empId}`,
        { method: "DELETE" }
      );

      if (res.ok) {
        toast.success("Employee deleted successfully ✅");
        navigate("/");
      } else {
        toast.error("Delete failed ❌");
      }
    } catch (error) {
      toast.error("Something went wrong ⚠️");
      console.error(error);
    }
  };

  if (loading) {
    return (
      <div className="h-screen flex items-center justify-center text-gray-500 text-lg">
        Loading employee details...
      </div>
    );
  }

  if (!empdata) {
    return (
      <div className="h-screen flex items-center justify-center text-red-500 text-lg">
        Employee not found
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-100 to-gray-200 px-4 py-12">
      <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-xl overflow-hidden">

        {/* ===== HEADER ===== */}
        <div className="bg-gradient-to-r from-blue-600 to-indigo-600 p-8 flex items-center gap-6">
          <img
            src={`https://api.dicebear.com/9.x/initials/svg?seed=${empdata.fullname}`}
            alt="avatar"
            className="h-20 w-20 rounded-full bg-white p-1 shadow"
          />

          <div className="text-white">
            <h2 className="text-2xl font-bold">{empdata.fullname}</h2>
            <p className="text-sm opacity-90">{empdata.position}</p>
            <span className="inline-block mt-2 text-xs bg-white/20 px-3 py-1 rounded-full">
              {empdata.status}
            </span>
          </div>
        </div>

        {/* ===== DETAILS ===== */}
        <div className="p-8 grid grid-cols-1 sm:grid-cols-2 gap-6">
          <Detail label="Email Address" value={empdata.emailaddress} />
          <Detail label="Phone Number" value={empdata.phonenumber} />
          <Detail label="Department" value={empdata.department} />
          <Detail label="Salary" value={`₹ ${empdata.salary}`} />
          <Detail label="Joining Date" value={empdata.joindate} />
          <Detail label="Employee ID" value={empdata.id} />
        </div>

        {/* ===== ACTIONS ===== */}
        <div className="flex justify-end gap-4 px-8 py-6 border-t bg-gray-50">
          <button
            onClick={() =>
              navigate(`/editemployee/${id}`, { state: empdata })
            }
            className="px-6 py-2.5 rounded-lg bg-blue-600 text-white font-semibold hover:bg-blue-700 transition"
          >
            ✏️ Edit
          </button>

          <button
            onClick={() => deleteEmp(empdata.id)}
            className="px-6 py-2.5 rounded-lg bg-red-600 text-white font-semibold hover:bg-red-700 transition"
          >
            🗑️ Delete
          </button>
        </div>
      </div>
    </div>
  );
};

export default ViewEmp;

/* ===== REUSABLE DETAIL COMPONENT ===== */
const Detail = ({ label, value }) => (
  <div className="bg-gray-50 border rounded-xl p-4 hover:shadow transition">
    <p className="text-xs uppercase tracking-wide text-gray-500 mb-1">
      {label}
    </p>
    <p className="text-sm font-semibold text-gray-800 break-all">
      {value}
    </p>
  </div>
);
