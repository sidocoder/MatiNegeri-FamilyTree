import { useState } from "react";

export default function ProfileEditor({ profile, onSave }) {
  const [form, setForm] = useState(profile);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  return (
    <div className="p-4">
      <h2 className="text-xl font-bold">Edit Profile</h2>
      <input
        type="text"
        name="name"
        value={form.name}
        onChange={handleChange}
        placeholder="Name"
        className="border p-2 my-2 block w-full"
      />
      <input
        type="date"
        name="dob"
        value={form.dob}
        onChange={handleChange}
        className="border p-2 my-2 block w-full"
      />
      <button
        onClick={() => onSave(form)}
        className="bg-blue-500 text-white px-4 py-2 rounded"
      >
        Save
      </button>
    </div>
  );
}
