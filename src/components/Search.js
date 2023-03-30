import { Divider, Input } from 'antd';
import { useState } from 'react';

const Search = (props) => {
    const {searchFoods } = props
    const [search, setSearch] = useState('')

    const handleSearch = e =>{
        setSearch(e.target.value)
        searchFoods(e.target.value)
    }

  return (
    <>
      <Divider>Search</Divider>

      <label>Search</label>
      <Input value={undefined} type="text" onChange={handleSearch} />
    </>
  );
}

export default Search;
