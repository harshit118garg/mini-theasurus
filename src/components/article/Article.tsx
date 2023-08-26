import { BsSearch } from "react-icons/bs";
import "./article.scss";
import { useState } from "react";
import {
  theasurusContainerClasses,
  inputClasses,
  relatedWordsClasses,
} from "./classes/articleClasses";
import { Synonyms } from "./components-sub/Synonyms";
import { Antonymns } from "./components-sub/Antonymns";

export const Article = () => {
  const [inputFocussed, setInputFocussed] = useState<boolean>(false);
  const [queryWord, setQueryWord] = useState<string>("");

  const handleFocus = () => {
    setInputFocussed(true);
  };

  const handleBlur = () => {
    setInputFocussed(false);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setQueryWord(e.target.value);
  };

  return (
    <>
      <div className="container p-5">
        <div className={`thesarus-container ${theasurusContainerClasses}`}>
          <div className="input-container text-center">
            <input
              name="word"
              className={inputClasses}
              value={queryWord}
              onChange={handleChange}
              onFocus={handleFocus}
              onBlur={handleBlur}
              placeholder={inputFocussed ? "" : "Enter Word"}
            />
            <span className="search-icon">
              <BsSearch />
            </span>
          </div>
          {queryWord && (
            <div className={relatedWordsClasses}>
              <Synonyms queryWord={queryWord} />
              <Antonymns queryWord={queryWord} />
            </div>
          )}
        </div>
      </div>
    </>
  );
};
