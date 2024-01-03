import React from "react";
import { useStateValue } from "../../context/StateProvider";
import useGooglesearch from "../../pages/useGooglesearch";
import response from "../../pages/response";
import { Link } from "react-router-dom";
import "./searchpage.css";
import { Search } from "./Search";
import SearchIcon from "@mui/icons-material/Search";
import DescriptionIcon from "@mui/icons-material/Description";
import ImageIcon from "@mui/icons-material/Image";
import LocalOfferIcon from "@mui/icons-material/LocalOffer";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import MoreVertIcon from "@mui/icons-material/MoreVert";

export const Searchpage = () => {
  const [{ term }, dispatch] = useStateValue();
  console.log(term);
  const { data } = useGooglesearch(term);
  // const data = response;

  console.log(data);
  return (
    <div className="searchPage">
      <div className="searchPage-header">
        <Link to="/">
          <img
            className="searchpage-logo"
            src="https://upload.wikimedia.org/wikipedia/commons/1/13/Googlelogo_color_272x92dp.png"
            alt=""
          />
        </Link>
        <div className="searchPage-headerBody">
          <Search hideButtons />
          <div className="searchpage-options">
            <div className="searchpage-optionsleft">
              <div className="searchpage-option">
                <SearchIcon />
                <Link to="/all">All</Link>
              </div>
              <div className="searchpage-option">
                <DescriptionIcon />
                <Link to="/news">News</Link>
              </div>
              <div className="searchpage-option">
                <ImageIcon />
                <Link to="/images">Images</Link>
              </div>
              <div className="searchpage-option">
                <LocalOfferIcon />
                <Link to="/shopping">Shopping</Link>
              </div>
              <div className="searchpage-option">
                <LocationOnIcon />
                <Link to="/maps">Maps</Link>
              </div>
              <div className="searchpage-option">
                <MoreVertIcon />
                <Link to="/more">more</Link>
              </div>
            </div>
            <div className="searchpage-optionsright">
              <div className="searchpage-option">
                <Link to="/settings">Settings</Link>
              </div>
              <div className="searchpage-option">
                <Link to="/tools">Tools</Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      {term && (
        <div className="searchPage-results">
          <p className="searchpage-resultcount">
            About {data?.searchInformation.formattedTotalResults} results (
            {data?.searchInformation.formattedSearchTime} seconds) for {term}
          </p>
          {data?.items.map((item) => (
            <div className="searchpage-result">
              <a href="{item.link}" target="_blank">
                {item.pagemap?.cse_image?.length > 0 &&
                  item.pagemap?.cse_image[0]?.src && (
                    <img
                      className="searchpageresultimg"
                      src={
                        item.pagemap?.cse_image?.length > 0 &&
                        item.pagemap?.cse_image[0]?.src
                      }
                      alt=""
                    />
                  )}
                {item.pagemap.metatags[0]["og:url"]} ▽
              </a>
              <a href="{item.link}" className="searchpage-resulttitle">
                <h1>{item.title}</h1>
              </a>
              <p className="searchpage-resultsnippet">{item.snippet}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};
