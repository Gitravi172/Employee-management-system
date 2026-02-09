import { useEffect, useState } from "react";
import { useLocation, useNavigate, useParams } from "react-router-dom";

const EditEmp = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const location = useLocation();

  const [loading, setLoading] = useState(false);

  const [formData, setFormData] = useState({
    fullname: "",
    emailaddress: "",
    phonenumber: "",
    department: "",
    position: "",
    salary: "",
    status: "",
    joindate: "",
  });

  useEffect(() => {
    if (location.state) {
      setFormData(location.state);
    }
  }, [location.state]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    await fetch(`http://localhost:8080/employees/${id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData),
    });

    setLoading(false);
    navigate("/");
  };

  return (
    <div className="min-h-screen bg-slate-100 flex items-center justify-center px-4">
      <div className="w-full max-w-5xl bg-white rounded-2xl shadow-xl border">

        {/* ===== HEADER ===== */}
        <div className="flex items-center justify-between px-8 py-6 border-b bg-slate-50 rounded-t-2xl">
          <div>
            <h2 className="text-3xl font-bold text-slate-800">
              Edit Employee
            </h2>
            <p className="text-sm text-slate-500 mt-1">
              Modify employee details and keep records up to date
            </p>
          </div>

          <button
            onClick={() => navigate(-1)}
            className="text-sm font-semibold text-blue-600 hover:underline"
          >
            ← Back
          </button>
        </div>

        {/* ===== FORM ===== */}
        <form onSubmit={handleSubmit} className="px-8 py-8">

          {/* SECTION 1 */}
          <Section title="Basic Information" />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
            <Input label="Full Name" name="fullname" value={formData.fullname} onChange={handleChange} />
            <Input label="Email Address" name="emailaddress" value={formData.emailaddress} onChange={handleChange} />
            <Input label="Phone Number" name="phonenumber" value={formData.phonenumber} onChange={handleChange} />
            <Input label="Position" name="position" value={formData.position} onChange={handleChange} />
          </div>

          {/* SECTION 2 */}
          <Section title="Work Details" />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
            <Input label="Department" name="department" value={formData.department} onChange={handleChange} />
            <Input label="Salary" name="salary" value={formData.salary} onChange={handleChange} />
            <Input label="Join Date" type="date" name="joindate" value={formData.joindate} onChange={handleChange} />

            <div>
              <label className="text-sm font-medium text-slate-600">
                Employment Status
              </label>
              <select
                name="status"
                value={formData.status}
                onChange={handleChange}
                className="w-full mt-1 rounded-lg border px-3 py-2 bg-white focus:ring-2 focus:ring-blue-500 outline-none"
              >
                <option value="">Select Status</option>
                <option value="Active">Active</option>
                <option value="On Leave">On Leave</option>
                <option value="Inactive">Inactive</option>
              </select>
            </div>
          </div>

          {/* ACTIONS */}
          <div className="flex justify-end gap-4 border-t pt-6">
            <button
              type="button"
              onClick={() => navigate(-1)}
              className="px-6 py-2 rounded-lg border text-slate-600 font-semibold hover:bg-slate-50"
            >
              Cancel
            </button>

            <button
              type="submit"
              disabled={loading}
              className={`px-7 py-2 rounded-lg text-white font-semibold shadow 
                ${loading ? "bg-blue-400 cursor-not-allowed" : "bg-blue-600 hover:bg-blue-700"}
              `}
            >
              {loading ? "Saving..." : "Save Changes"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default EditEmp;

/* ===== COMPONENTS ===== */

const Section = ({ title }) => (
  <h3 className="text-xs font-bold text-slate-500 uppercase tracking-widest mb-4">
    {title}
  </h3>
);

const Input = ({ label, name, value, onChange, type = "text" }) => (
  <div>
    <label className="text-sm font-medium text-slate-600">
      {label}
    </label>
    <input
      type={type}
      name={name}
      value={value}
      onChange={onChange}
      className="w-full mt-1 rounded-lg border px-3 py-2 bg-white focus:ring-2 focus:ring-blue-500 outline-none"
    />
  </div>
);
