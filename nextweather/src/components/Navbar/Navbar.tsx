import { SearchBar } from "../SearchBar/SearchBar";
import { Flex } from "../Flex/Flex";

export function Navbar({
  onSearch,
}: {
  onSearch: (searchInput: string) => void;
}) {
  return (
    <nav>
      <SearchBar onSearch={onSearch} />
    </nav>
  );
}
