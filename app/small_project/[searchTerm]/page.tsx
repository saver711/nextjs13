/////////// IMPORTS
///

import { Item } from "../components/Item"
import { getWikiResults } from "../utils/getWikiResults"

///
/////////// Types
///
type SearchResultsProps_TP = {
  params: {
    searchTerm: string
  }
}
/////////// HELPER VARIABLES & FUNCTIONS
///
export async function generateMetadata({
  params: { searchTerm },
}: SearchResultsProps_TP) {
  const wikiData: Promise<SearchResult> = getWikiResults(searchTerm)
  const data = await wikiData
  const displayTerm = searchTerm.replaceAll("%20", " ")

  if (!data?.query?.pages) {
    return {
      title: `${displayTerm} Not Found`,
    }
  }

  return {
    title: displayTerm,
    description: `Search results for ${displayTerm}`,
  }
}
///
const SearchResults = async ({ params }: SearchResultsProps_TP) => {
  /////////// VARIABLES
  ///
  const { searchTerm } = params
  const displayTerm = searchTerm.replaceAll("%20", " ")

  const wikiData: Promise<SearchResult> = getWikiResults(searchTerm)
  const data = await wikiData
  const results: Result[] | undefined = data?.query?.pages
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
  const content = (
    <div className="bg-slate-200 mx-auto max-w-lg py-1 min-h-screen">
      {results ? (
        Object.values(results).map((result) => {
          return <Item key={result.pageid} result={result} />
        })
      ) : (
        <h2 className="p-2 text-xl">{`${displayTerm} Not Found`}</h2>
      )}
    </div>
  )
  ///

  return content
}

export default SearchResults
