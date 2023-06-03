/////////// IMPORTS
///
import { Metadata } from "next"
import Link from "next/link"
import { futurbold } from "../fonts/fonts"
import { getAllEmployees } from "../utils/getAllEmployees"
///
/////////// Types
///

/////////// HELPER VARIABLES & FUNCTIONS
///
export const metadata: Metadata = {
  title: "Employees",
  description: "the Employees page",
}
///
const Employees = async () => {
  /////////// VARIABLES
  ///
  // 👁️ uncomment this to see the error boundary
  // throw new Error('intentional err')

  const employeesData: Promise<Employee_TP[]> = getAllEmployees()
  const employees = await employeesData
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

  ///
  return (
    <>
      <h1 className={futurbold.className}>Employees</h1>

      <Link href="/">Go to Home</Link>
      <br />
      {employees.map(({ id, name }) => (
        <div
          key={id}
          style={{ borderBottom: "1px solid red", marginBottom: "1rem" }}
        >
          <Link href={`/employees/${id}`}>{`Show ${name}'s data`}</Link>
        </div>
      ))}
    </>
  )
}

export default Employees
