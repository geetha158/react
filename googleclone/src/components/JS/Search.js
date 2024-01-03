import React, { useState } from "react";
import "./search.css";
import SearchIcon from "@mui/icons-material/Search";
import MicIcon from "@mui/icons-material/Mic";
import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { useStateValue } from "../../context/StateProvider";
import { actionTypes } from "../../context/reducer";

export const Search = ({ hideButtons = false }) => {
  const [{}, dispatch] = useStateValue();
  const [input, setInput] = useState("");
  const history = useNavigate();

  function search(e) {
    e.preventDefault();
    console.log(`you have entered ${input}`);
    dispatch({
      type: actionTypes.SET_SEARCH_TERM,
      term: input,
    });
    history("/search");
  }
  return (
    <form className="search">
      <div className="search-input">
        <SearchIcon className="searchIcon" />
        <input value={input} onChange={(e) => setInput(e.target.value)} />
        <MicIcon />
      </div>

      {!hideButtons ? (
        <div className="search-buttons">
          <Button type="submit" onClick={search} variant="outlined">
            Google Search
          </Button>
          <Button variant="outlined">I'm Feeling Lucky</Button>
        </div>
      ) : (
        <div className="search-buttons">
          <Button
            type="submit"
            className="hideButtons"
            onClick={search}
            variant="outlined"
          >
            Google Search
          </Button>
          <Button className="hideButtons" variant="outlined">
            I'm Feeling Lucky
          </Button>
        </div>
      )}
    </form>
  );
};
