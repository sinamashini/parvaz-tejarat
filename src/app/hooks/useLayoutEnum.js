import { useQuery } from "@apollo/client";
import { menuLocation } from "src/shared/constants";
import PropTypes from "prop-types";
import { keys } from "lodash";
import { extractKeyWithValue } from "src/utils/helpers";
import { GET_MENU } from "src/lib/queries/menus";
import { useEffect } from "react";

const locationHandler = (location, language) => {
  if (location === "footer") {
    return extractKeyWithValue(
      menuLocation,
      language === "en" ? menuLocation.footer___en : menuLocation.footer,
    );
  }

  return extractKeyWithValue(
    menuLocation,
    language === "en" ? menuLocation.primary___en : menuLocation.primary,
  );
};

const useLayoutDataHandler = ({ language, location }) => {
  const locationWord = locationHandler(location, language);
  console.log(locationWord);

  const { data, error, loading } = useQuery(GET_MENU, {
    variables: { id: locationWord },
  });

  return { data: data?.menu.menuItems.nodes, error, loading };
};

export default useLayoutDataHandler;

useLayoutDataHandler.propTypes = {
  language: PropTypes.oneOf(["en", "fa"]),
  location: PropTypes.oneOf(keys(menuLocation)),
};
