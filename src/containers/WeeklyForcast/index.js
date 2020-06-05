import React from "react";
import { connect } from "react-redux";

import { get } from "lodash/fp";
import { Typography, Tooltip } from "@material-ui/core";
import icons from "../../icons";
import Icon from "../../components/Icon";
import { WeatherItemContainer, Container } from "./styled-components";

const mapWeatherItem = (dayTime) => (weather, index) => {
  const minTemperature = get(["temperature", "min"], weather);
  const maxTemperature = get(["temperature", "max"], weather);
  const description = get([dayTime, "IconPhrase"], weather);
  const iconId = get([dayTime, "Icon"], weather);
  const iconSrc = get(iconId, icons);

  return (
    <WeatherItemContainer
      flexDirection="column"
      key={`${index}-${minTemperature}-${maxTemperature}`}
    >
      <Icon src={iconSrc} alt="" />
      <Tooltip title={description}>
        <Typography className="description">{description}</Typography>
      </Tooltip>
      <Typography>{`${minTemperature} / ${maxTemperature}`}</Typography>
    </WeatherItemContainer>
  );
};

const WeeklyForcast = ({ weatherForcast, dayTime }) => {
  return <Container>{weatherForcast.map(mapWeatherItem(dayTime))}</Container>;
};

const mapStateToProps = (state) => ({
  weatherForcast: get(["forcast", "weatherForcast"], state),
});

export default connect(mapStateToProps)(WeeklyForcast);
