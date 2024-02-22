import { SearchBar } from './SearchBar'

export const AppBar = () => {
  return (
    <div className="flex justify-between pt-1 p-3">
      <div className="text-lg pt-2">YouTube</div>
      <div>
        <SearchBar />
      </div>
      <div className="text-lg pt-2"> signin</div>
    </div>
  )
}
