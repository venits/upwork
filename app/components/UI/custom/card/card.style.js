/* eslint-disable react/forbid-prop-types */
import React from 'react';
import PropTypes from 'prop-types';
import { RoundBorderView } from 'app/components/UI/core';
import CardRowStyle from './cardRow/cardRow.style';

const CardStyle = ({ data }) => {
  const { country } = data;
  const { name } = country;

  return (
    <RoundBorderView>
      <CardRowStyle label={`Country: ${name}`} value={country} />
    </RoundBorderView>
  );
};

CardStyle.propTypes = {
  data: PropTypes.shape({
    country: PropTypes.shape({
      name: PropTypes.string,
    }),
  }).isRequired,
};

export default CardStyle;
