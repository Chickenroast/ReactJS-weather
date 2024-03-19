import { SearchBar } from "../SearchBar/SearchBar";
import { Flex } from "../Flex/Flex";

export default function Navbar() {
  return (
    <Flex justifyContent="between" alignItems="center" className="p-4">
      <h1>Logo</h1>
      <nav>
        <SearchBar />
      </nav>
    </Flex>
  );
}
