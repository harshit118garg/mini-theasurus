import { BsSearch } from "react-icons/bs";
import "./article.scss";
import { useState } from "react";
import {
  theasurusContainerClasses,
  inputClasses,
  relatedWordsClasses,
  boxClasses,
} from "./classes/articleClasses";

export const Article = () => {
  const [inputFocussed, setInputFocussed] = useState(false);

  const handleFocus = () => {
    setInputFocussed(true);
  };

  const handleBlur = () => {
    setInputFocussed(false);
  };

  return (
    <>
      <div className="container p-5">
        <div className={`thesarus-container ${theasurusContainerClasses}`}>
          <div className="input-container text-center">
            <input
              name="word"
              className={inputClasses}
              onFocus={handleFocus}
              onBlur={handleBlur}
              placeholder={inputFocussed ? "" : "Enter Word"}
            />
            <span className="search-icon">
              <BsSearch />
            </span>
          </div>
          <div className={relatedWordsClasses}>
            <div className={`synonyms ${boxClasses} bg-white`}>
              <p className="text-xl max-[768px]:text-base">
                The quick brown fox ...
              </p>
            </div>
            <div
              className={`antonyms ${boxClasses} bg-slate-700 text-slate-50`}
            >
              <p className="text-xl max-[768px]:text-base">
                The quick brown fox ...
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
