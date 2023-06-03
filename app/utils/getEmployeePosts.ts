export const getEmployeePosts = async (id:string) => {
    const res = await fetch(`http://localhost:3600/posts?employeeId=${id}`)
    if (!res.ok) return undefined

    return res.json()
}
