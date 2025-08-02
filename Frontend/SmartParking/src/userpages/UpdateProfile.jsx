import { useEffect, useState } from "react";
import { fetchCurrentUser, updateProfile, updatePassword } from "../userservices/updateService";

export default function UpdateProfile() {
  const [user, setUser] = useState(null);
  const [editField, setEditField] = useState(null);
  const [fieldValue, setFieldValue] = useState("");
  const [passwords, setPasswords] = useState({ oldPassword: "", newPassword: "" });
  const [showPasswordForm, setShowPasswordForm] = useState(false);

  useEffect(() => {
    fetchCurrentUser()
      .then(setUser)
      .catch(console.error);
  }, []);

  const handleEdit = (field) => {
    setEditField(field);
    setFieldValue(user[field]);
  };

  const handleUpdate = () => {
    updateProfile(editField, fieldValue, user)
      .then((updated) => {
        setUser(updated);
        setEditField(null);
      })
      .catch(console.error);
  };

  const handlePasswordChange = () => {
    updatePassword(passwords)
      .then(alert)
      .catch(console.error);
  };

  if (!user) return <div className="p-4">Loading...</div>;

  return (
    <div className="p-6 bg-white shadow-md rounded-xl max-w-xl mx-auto mt-10">
      <h2 className="text-3xl font-bold text-center mb-6 text-blue-800">User Profile</h2>

      {/* Name */}
      <div className="mb-6">
        <label className="block font-semibold text-gray-700">Name</label>
        {editField === "name" ? (
          <div className="flex space-x-2 mt-2">
            <input
              value={fieldValue}
              onChange={(e) => setFieldValue(e.target.value)}
              className="border border-gray-300 p-2 rounded w-full"
            />
            <button onClick={handleUpdate} className="bg-blue-500 text-white px-4 rounded hover:bg-blue-600">
              Save
            </button>
          </div>
        ) : (
          <div className="flex justify-between items-center mt-2">
            <span>{user.name}</span>
            <button onClick={() => handleEdit("name")} className="text-blue-600 hover:underline">
              Update Name
            </button>
          </div>
        )}
      </div>

      {/* Email */}
      <div className="mb-6">
        <label className="block font-semibold text-gray-700">Email</label>
        <div className="mt-2 text-gray-600">{user.email} (cannot update)</div>
      </div>

      {/* Phone Number */}
      <div className="mb-6">
        <label className="block font-semibold text-gray-700">Phone Number</label>
        {editField === "phoneNumber" ? (
          <div className="flex space-x-2 mt-2">
            <input
              value={fieldValue}
              onChange={(e) => setFieldValue(e.target.value)}
              className="border border-gray-300 p-2 rounded w-full"
            />
            <button onClick={handleUpdate} className="bg-blue-500 text-white px-4 rounded hover:bg-blue-600">
              Save
            </button>
          </div>
        ) : (
          <div className="flex justify-between items-center mt-2">
            <span>{user.phoneNumber}</span>
            <button onClick={() => handleEdit("phoneNumber")} className="text-blue-600 hover:underline">
              Update Phone
            </button>
          </div>
        )}
      </div>

      {/* Password Update */}
      <hr className="my-8 border-t border-gray-300" />

      <div>
        <h3 className="text-xl font-bold mb-4 text-gray-800">Change Password</h3>

        {!showPasswordForm ? (
          <button
            onClick={() => setShowPasswordForm(true)}
            className="bg-yellow-500 hover:bg-yellow-600 text-white px-4 py-2 rounded"
          >
            Change Password
          </button>
        ) : (
          <>
            <input
              type="password"
              placeholder="Old Password"
              className="border border-gray-300 p-2 rounded mb-3 w-full"
              value={passwords.oldPassword}
              onChange={(e) => setPasswords({ ...passwords, oldPassword: e.target.value })}
            />
            <input
              type="password"
              placeholder="New Password"
              className="border border-gray-300 p-2 rounded mb-3 w-full"
              value={passwords.newPassword}
              onChange={(e) => setPasswords({ ...passwords, newPassword: e.target.value })}
            />
            <div className="flex space-x-4">
              <button
                onClick={handlePasswordChange}
                className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded"
              >
                Update Password
              </button>
              <button
                onClick={() => {
                  setPasswords({ oldPassword: "", newPassword: "" });
                  setShowPasswordForm(false);
                }}
                className="bg-gray-400 hover:bg-gray-500 text-white px-4 py-2 rounded"
              >
                Cancel
              </button>
            </div>
          </>
        )}
      </div>
    </div>
  );
}
