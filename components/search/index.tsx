import { useAppDispatch } from "@/hooks/toolkitHook";
import { handleChangeSearchTerm } from "@/store/reducers/mainSlice";
import React, {useState} from "react";
import { SearchButton, SearchContainer, SearchInput } from "./styles";

const Search = () => {
  const dispatch = useAppDispatch();
  const [searchTerm, setSearchTerm] = useState<string>("")

  const handleChangeSeachTerm = (e:React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value)
  };

  const handleSubmitSeachTerm = () => {
    dispatch(handleChangeSearchTerm(searchTerm))
    setSearchTerm('')
  };

  return (
    <SearchContainer>
      <SearchInput onChange={handleChangeSeachTerm} value={searchTerm} type="text" />
      <SearchButton onClick={handleSubmitSeachTerm}>Поиск</SearchButton>
    </SearchContainer>
  );
};

export default Search;
