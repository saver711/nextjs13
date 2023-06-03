/////////// IMPORTS
///

import { ReactNode } from "react"

///
/////////// Types
///
type layoutProps_TP = {
    children: ReactNode
}
/////////// HELPER VARIABLES & FUNCTIONS
///

///
const EmployeesLayout = ({ children }: layoutProps_TP) => {
  /////////// VARIABLES
  ///

  ///
  /////////// CUSTOM HOOKS
  ///
// throw new Error("intentional err")
  ///
  /////////// STATES
  ///

  ///
  /////////// SIDE EFFECTS
  ///

  /////////// FUNCTIONS | EVENTS | IF CASES
  ///

  ///
  return (
    <main>
      <nav>This nav is for /employees/* route</nav>
      {children}
    </main>
  )
}

export default EmployeesLayout