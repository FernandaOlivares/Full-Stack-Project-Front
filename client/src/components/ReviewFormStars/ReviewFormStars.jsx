/* eslint-disable react/prop-types */
import React from 'react';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const ReviewFormStars = ({ selected = false, onSelect = () => {} }) => (
    <FontAwesomeIcon
        icon={faStar}
        color={selected ? "#FFD700" : "grey"}
        onClick={onSelect}
        style={{ cursor: 'pointer' }}
    />
);

export default ReviewFormStars;
