import "./Search.css";
import SearchIcon from "@mui/icons-material/Search";
import {InputLabel, Input, InputAdornment, FormControl } from "@mui/material";
export default function Search({search, onSearchHandler}) {
  return (
    <>
       <FormControl fullWidth variant="standard">
          <InputLabel htmlFor="searchInput">Search</InputLabel>
          <Input
          fullWidth
            id="searchInput"
            type='text'
            size='medium'
            value={search}
            onChange={onSearchHandler}
            endAdornment={
              <InputAdornment position="end">
                  <SearchIcon/>
              </InputAdornment>
            }
          />
          </FormControl>
    </>
  );
}
