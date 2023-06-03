export const getAllEmployees = async () => {
  const res = await fetch(" http://localhost:3600/employees",
    // {
    //   next: {
    //     revalidate: 5
    //   }
    // }
  )
  if (!res.ok) throw new Error("Failed to fetch employees")

  return res.json()
}
