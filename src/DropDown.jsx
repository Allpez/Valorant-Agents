function DropDown({ selectedRole, setSelectedRole, roles }) {
    return (
        <div className="flex gap-1 justify-center my-6">
            <select
                value={selectedRole}
                onChange={(e) => setSelectedRole(e.target.value)}
                className="flex border-2 min-w-40 border-red-800 rounded-lg ps-2 sm:h-9"
            >
                <option value="">All Roles</option>
                {roles.map(role => (
                    <option key={role} value={role}>{role}</option>
                ))}
            </select>
        </div>
    )
}

export { DropDown }
