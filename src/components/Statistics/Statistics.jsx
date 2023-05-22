import PropTypes from 'prop-types';
import {
  FeedbackList,
  FeedbackItem,
  FeedbackCount,
  FeedbackCountList,
  FeedbackCountItem,
  TextTotalCount,
} from './Statistics.styled';

const Statistics = ({ good, neutral, bad, total, positivePercentage }) => {
  return (
    <>
      <FeedbackList>
        <FeedbackItem>
          <FeedbackCount>{good}</FeedbackCount>
        </FeedbackItem>
        <FeedbackItem>
          <FeedbackCount>{neutral}</FeedbackCount>
        </FeedbackItem>
        <FeedbackItem>
          <FeedbackCount>{bad}</FeedbackCount>
        </FeedbackItem>
      </FeedbackList>

      <FeedbackCountList>
        <FeedbackCountItem>
          <TextTotalCount>Total Feedback: {total}</TextTotalCount>
        </FeedbackCountItem>
        <FeedbackCountItem>
          <TextTotalCount>
            Positive Feedback Percentage: {positivePercentage}%
          </TextTotalCount>
        </FeedbackCountItem>
      </FeedbackCountList>
    </>
  );
};

Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  positivePercentage: PropTypes.number.isRequired,
};

export default Statistics;
