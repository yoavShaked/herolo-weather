import React, { useState } from "react";
import { connect } from "react-redux";

import { get } from "lodash/fp";
import { Typography, Tooltip } from "@material-ui/core";
import FavoriteIcon from "@material-ui/icons/Favorite";
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";

import * as favoritesActions from "../../actions/favorites";

import { FavoriteContainer } from "./styled-components";

const FavoriteAction = ({
  cityId,
  cityName,
  addToFavorites,
  removeFromFavorites,
  isFavorite,
}) => {
  const [toggle, setToggle] = useState(isFavorite);
  const SaveIcon = !toggle ? FavoriteBorderIcon : FavoriteIcon;

  const onClick = () => {
    if (!toggle) {
      addToFavorites({
        cityName,
        cityId,
      });
    } else {
      removeFromFavorites(cityName);
    }
    setToggle(!toggle);
  };

  const title = isFavorite ? "Saved to Favorites" : "Add to Favorites";

  return (
    <Tooltip title={title}>
      <FavoriteContainer onClick={onClick}>
        <Typography className="favorite-title">{title}</Typography>
        <SaveIcon />
      </FavoriteContainer>
    </Tooltip>
  );
};

const mapStateToProps = (state) => {
  const cityName = get(["forcast", "cityName"], state);
  const isFavorite = !!get(["favorites", "favorites", cityName], state);
  return {
    cityId: get(["forcast", "cityId"], state),
    cityName,
    isFavorite,
  };
};

export default connect(mapStateToProps, {
  addToFavorites: favoritesActions.addToFavorites,
  removeFromFavorites: favoritesActions.removeFromFavorites,
})(FavoriteAction);
