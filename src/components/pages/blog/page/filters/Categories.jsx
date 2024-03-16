// import Link from "next/link";
// import { useRouter } from "next/navigation";
// import { useRef } from "react";
import { dictionary } from "src/shared/dictionary";
import styles from "./Category.module.css";
import { usePathname, useRouter } from "next/navigation";

export default function CategorySelect({ lang, searchParams }) {
  const [selected, setSelected] = useState([]);
  const { sort, categories, keyword } = searchParams;
  const { replace } = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  // useEffect(() => {
  //   if (categories) {
  //     const url = `${pathname}?${searchParams}`;
  //     replace(url);
  //   }
  // }, [categories]);

  const handleSelect = (category) => {
    if (selected.includes(category)) {
      const url = `${pathname}?${searchParams}`;
      replace(url);
    } else {
      setSelected((prev) => [...prev, category]);
    }
  };

  return (
    <div className={`${styles.container} ${styles.navy} text-center`}>
      <button className={`${styles.btn} btn btn-primary`}>
        {dictionary.core.viewAll[lang]}
      </button>
      {categories.map((category) => (
        <Category
          key={category.databaseId}
          className={`${styles.lightblue}`}
          onClick={() => handleSelect(category)}
        >
          {category.name}
        </Category>
      ))}

      <div className={styles.badges}>
        {selected.map((category) => (
          <Badge
            key={category.id}
            category={category}
            onRemove={() => handleSelect(category)}
          />
        ))}
      </div>
    </div>
  );
}

function Category({ category, selected, onClick }) {
  return (
    <div className={styles.category} onClick={onClick}>
      {category.name}
    </div>
  );
}

function Badge({ category, onRemove }) {
  return (
    <span className={styles.badge}>
      {category.name}
      <button onClick={onRemove}>X</button>
    </span>
  );
}
