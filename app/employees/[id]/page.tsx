/////////// IMPORTS
///
import { getEmployee } from "@/app/utils/getEmployee"
import { getEmployeePosts } from "@/app/utils/getEmployeePosts"
import styles from "./employeeStyling.module.css"
import Link from "next/link"
import { Suspense } from "react"
import { CircleLoader } from "react-spinners"
import { EmployeePosts } from "./EmployeePosts"
import { Metadata } from "next"
import { getAllEmployees } from "@/app/utils/getAllEmployees"
import { notFound } from "next/navigation"
///
/////////// Types
///
type Params_TP = {
  params: { id: string }
}
/////////// HELPER VARIABLES & FUNCTIONS
///
export const generateMetadata = async ({
  params,
}: Params_TP): Promise<Metadata> => {
  const employeeData: Promise<Employee_TP> = getEmployee(params.id)

  const { name } = await employeeData

  // handling meta data when not found
  if (!name) {
    return { title: "Employee not found" }
  }

  return {
    title: name,
  }
}
///
const Employee = async ({ params }: Params_TP) => {
  /////////// VARIABLES
  ///
  // 👁️ uncomment this to see the error boundary
  // throw new Error('intentional err')

  // Do not use await on the function, it will block parallel fetching
  const employeeData: Promise<Employee_TP> = getEmployee(params.id)
  const employeePostsData: Promise<Post_TP[]> = getEmployeePosts(params.id)

  // Will fetch employee first and use it, then fetch posts
  const employee = await employeeData
  // const employeePosts = await employeePostsData

  // will suspense until employee and posts are available
  // const [employee, employeePosts] = await Promise.all([employeeData, employeePostsData])
  ///
  /////////// CUSTOM HOOKS
  ///

  ///
  /////////// STATES
  ///

  ///
  /////////// SIDE EFFECTS
  ///

  ///
  /////////// FUNCTIONS | EVENTS | IF CASES
  ///

  // Show not found
  if (!employee.name) {
    return notFound()
  }
  ///
  return (
    <>
      <h1 className={styles.heading}>{employee.name}</h1>
      <h4>{employee.email}</h4>
      <br />
      <Suspense fallback={<h2>Loading posts</h2>}>
        {/* @ts-expect-error Async Server Component */}
        <EmployeePosts postsPromise={employeePostsData} />
      </Suspense>

      <br />
      <Link href="/employees">Go Back</Link>
    </>
  )
}

export default Employee

// generate static params for the fetch request params
// SSR => SSG
export const generateStaticParams = async () => {
  const employeesData: Employee_TP[] = await getAllEmployees()

  return employeesData.map((emp) => ({ id: emp.id.toString() }))
}
