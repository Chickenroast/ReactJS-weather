import { SearchBar } from "../SearchBar/SearchBar";
import { Flex } from "../Flex/Flex";

export default function Navbar({
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
