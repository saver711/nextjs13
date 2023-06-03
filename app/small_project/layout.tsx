/////////// IMPORTS
///

import { ReactNode } from "react"
import { Navbar } from "./components/Navbar"

///
/////////// Types
///
type layoutProps_TP = {
  children: ReactNode
}
/////////// HELPER VARIABLES & FUNCTIONS
///

///
const Small_projectLayout = ({ children }: layoutProps_TP) => {
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
      <Navbar />
      {children}
    </main>
  )
}

export default Small_projectLayout
