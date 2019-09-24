/* eslint-disable react/forbid-prop-types */
import React from 'react';
import PropTypes from 'prop-types';
import { Container, Block, StyledText } from 'app/components/UI/core';

const CardRowStyle = ({ label, value }) => {
  const { continent, currency, emoji } = value;

  return (
    <Container style={{ padding: 16, flexDirection: 'column' }}>
      <Block>
        <StyledText capitalize>{label}</StyledText>
      </Block>
      <Block>
        <StyledText>Continent {continent.name || ''}</StyledText>
      </Block>
      <Block>
        <StyledText>Currency {currency}</StyledText>
      </Block>
      <Block>
        <StyledText>Emoji {emoji}</StyledText>
      </Block>
    </Container>
  );
};

CardRowStyle.propTypes = {
  label: PropTypes.string.isRequired,
  value: PropTypes.shape({
    currency: PropTypes.string,
    emoji: PropTypes.string,
    continent: PropTypes.shape({
      name: PropTypes.string,
    }),
  }).isRequired,
};

export default CardRowStyle;
