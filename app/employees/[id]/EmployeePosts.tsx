/////////// IMPORTS
///

///
/////////// Types
///
type EmployeePostProps_TP = {
  postsPromise: Promise<Post_TP[]>
}
/////////// HELPER VARIABLES & FUNCTIONS
///

///
export const EmployeePosts = async ({ postsPromise }: EmployeePostProps_TP) => {
  /////////// VARIABLES
  ///
  const posts = await postsPromise
  ///
  /////////// CUSTOM HOOKS
  ///

  ///
  /////////// STATES
  ///

  ///
  /////////// SIDE EFFECTS
  ///

  /////////// FUNCTIONS | EVENTS | IF CASES
  ///
  const content = posts.map(({ id, title }) => (
    <p key={id}>{`Post ${id} => ${title}`}</p>
  ))
  ///
  return content
}
