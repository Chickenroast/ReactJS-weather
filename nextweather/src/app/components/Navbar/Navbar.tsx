import { SearchBar } from "../SearchBar/SearchBar";
import { Flex } from "../Flex/Flex";
export default function Navbar() {
  return (
    <Flex flexDirection="row">
      <nav>
        <SearchBar />
      </nav>
    </Flex>
  );
}
