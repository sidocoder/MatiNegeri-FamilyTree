import TreeView from "../components/TreeView";
import ProfileEditor from "../components/ProfileEditor";
import AddChildForm from "../components/AddChildForm";
import { useState } from "react";

export default function Dashboard() {
  const [user, setUser] = useState({ name: "Jane", dob: "2000-01-01" });
  const [tree, setTree] = useState([
    {
      id: 1,
      name: "Jane",
      dob: "2000-01-01",
      children: []
    }
  ]);

  const handleSave = (updatedUser) => setUser(updatedUser);

  const handleAddChild = (child) => {
    setTree(prev => {
      const newChild = { id: Date.now(), ...child, children: [] };
      return prev.map(p =>
        p.id === 1 ? { ...p, children: [...p.children, newChild] } : p
      );
    });
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 p-4">
      <div className="md:col-span-2">
        <TreeView data={tree} />
      </div>
      <div>
        <ProfileEditor profile={user} onSave={handleSave} />
        <AddChildForm onAdd={handleAddChild} />
      </div>
    </div>
  );
}
