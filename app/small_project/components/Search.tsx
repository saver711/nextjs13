"use client"
/////////// IMPORTS
///
import { useRouter, useParams } from "next/navigation"
import { FormEvent, useState } from "react"

///
/////////// Types
///
type SearchProps_TP = {}
/////////// HELPER VARIABLES & FUNCTIONS
///

///
export const Search = () => {
  /////////// VARIABLES
  ///

  ///
  /////////// CUSTOM HOOKS
  ///
  const params = useParams()
  const router = useRouter()
  ///
  /////////// STATES
  ///
  const [search, setSearch] = useState(params.searchTerm || "")
  ///
  /////////// SIDE EFFECTS
  ///

  /////////// FUNCTIONS | EVENTS | IF CASES
  ///
  const submitHandler = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    if (search.length === 0) {
      alert("بطل بضان")
      return
    }
    // setSearch("")
    router.push(`/small_project/${search}/`)
  }
  ///
  return (
    <form
      className="w-50 flex justify-center md:justify-between"
      onSubmit={submitHandler}
    >
      <input
        title="search"
        type="text"
        value={search}
        className="bg-white p-2 w-80 text-xl text-emerald-950 rounded-xl"
        onChange={({ target }) => setSearch(target.value)}
        placeholder="Search"
      />

      <button
        className="p-2 text-xl rounded-xl bg-slate-300 ml-2 font-bold"
        type="submit"
      >
        Search 🚀
      </button>
    </form>
  )
}