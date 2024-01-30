import { SearchInput } from "evergreen-ui";

export default function Search({ query, onChange }) {
  return (
    <SearchInput
      placeholder="Search..."
      width="100%"
      autoFocus
      value={query}
      onChange={onChange}
    />
  );
}
