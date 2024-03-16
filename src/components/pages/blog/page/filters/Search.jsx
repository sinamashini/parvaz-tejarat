// const SearchBar = () => {
//   return (
//     <form>
//       {" "}
//       <input
//         style={{ width: "100%" }}
//         type="text"
//         name="email"
//         placeholder="Enter your email"
//       />
//       <button type="submit" className="submit">
//         <i className="fa-solid fa-search" />
//         {/* <Image
//                     priority
//                     style={{ width: "auto", height: "auto" }}
//                     src={ArrowRight}
//                     alt="Arrow Icon"
//                   /> */}
//       </button>
//     </form>
//   );
// };

// export default SearchBar;
import { dictionary } from "src/shared/dictionary";
import styles from "./style.module.css";

const SearchBar = ({ variables, fetchArticles, keyword, setKeyword }) => {
  const language = getLanguage();

  const search = async (keyword) => {
    if (keyword !== "") {
      await fetchArticles({ variables: { ...variables, search: keyword } });
    }
  };

  return (
    <div>
      <div className={styles.search}>
        <input
          value={keyword}
          onChange={(e) => setKeyword(e.target.value)}
          type="text"
          className={styles["search-input"]}
          placeholder={dictionary.search.palceholder[language]}
          name="search"
        >
          <button
            onClick={() => search(keyword)}
            className={styles["search-icon"]}
          >
            <i className="fa fa-search"></i>
          </button>
        </input>
      </div>
    </div>
  );
};

export default SearchBar;
