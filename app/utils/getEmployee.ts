export const getEmployee = async (id:string) => {
    const res = await fetch(` http://localhost:3600/employees/${id}`)
    // if (!res.ok) throw new Error("Failed to fetch employees")

    return res.json()
}
