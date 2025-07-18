import { useState } from "react";

export default function AddChildForm({ onAdd }) {
  const [child, setChild] = useState({ name: "", dob: "" });

  const handleSubmit = () => {
    onAdd(child);
    setChild({ name: "", dob: "" });
  };

  return (
    <div className="p-4">
      <h2 className="text-xl font-bold">Add New Child</h2>
      <input
        type="text"
        name="name"
        value={child.name}
        onChange={(e) => setChild({ ...child, name: e.target.value })}
        placeholder="Child's Name"
        className="border p-2 my-2 block w-full"
      />
      <input
        type="date"
        name="dob"
        value={child.dob}
        onChange={(e) => setChild({ ...child, dob: e.target.value })}
        className="border p-2 my-2 block w-full"
      />
      <button
        onClick={handleSubmit}
        className="bg-green-500 text-white px-4 py-2 rounded"
      >
        Add Child
      </button>
    </div>
  );
}
