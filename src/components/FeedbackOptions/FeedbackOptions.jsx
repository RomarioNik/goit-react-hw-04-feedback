import PropTypes from 'prop-types';

import { ButtonList, ButtonListItem, Button } from './FeedbackOptions.styled';
import { firstLetterToUpperCase } from '../../utils';

const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  return (
    <ButtonList>
      {options.map(nameButton => (
        <ButtonListItem key={nameButton}>
          <Button type="button" onClick={() => onLeaveFeedback(nameButton)}>
            {firstLetterToUpperCase(nameButton)}
          </Button>
        </ButtonListItem>
      ))}
    </ButtonList>
  );
};

FeedbackOptions.protoTypes = {
  options: PropTypes.arrayOf(PropTypes.string).isRequired,
  onLeaveFeedback: PropTypes.func.isRequired,
};

export default FeedbackOptions;
