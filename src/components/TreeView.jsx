export default function TreeView({ data }) {
  return (
    <div className="p-4">
      <h2 className="text-xl font-bold">Family Tree</h2>
      <ul className="ml-6 list-disc">
        {data.map(member => (
          <li key={member.id}>
            {member.name} ({member.dob})
            {member.children && member.children.length > 0 && (
              <TreeView data={member.children} />
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}
