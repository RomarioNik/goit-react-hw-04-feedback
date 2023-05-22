import { useReducer } from 'react';
import Statistics from './Statistics';
import FeedbackOptions from './FeedbackOptions';
import Section from './Section';
import Notification from './Notification';
import { Container } from './App.styled';

const App = () => {
  const countFeedbacks = (state, action) => {
    switch (action.type) {
      case 'good':
        return { ...state, good: state.good + action.payload };
      case 'neutral':
        return { ...state, neutral: state.neutral + action.payload };
      case 'bad':
        return { ...state, bad: state.bad + action.payload };

      default:
        console.warn(`Unsaported ${action.type} value`);
    }
  };

  const [feedbacks, dispatch] = useReducer(countFeedbacks, {
    good: 0,
    neutral: 0,
    bad: 0,
  });

  const countTotalFeedback = () => {
    return Object.values(feedbacks).reduce((total, el) => {
      return (total = total + el);
    }, 0);
  };

  const countPositiveFeedbackPercentage = () => {
    const totalFeedbacks = countTotalFeedback();
    if (totalFeedbacks === 0) {
      return 0;
    }
    const percentageCount = (feedbacks.good * 100) / totalFeedbacks;
    return Number(percentageCount.toFixed());
  };

  return (
    <Container>
      <Section title="Please, leave feedback">
        <FeedbackOptions
          options={Object.keys(feedbacks)}
          onLeaveFeedback={dispatch}
        />
      </Section>

      <Section title="Statistics">
        {countTotalFeedback() ? (
          <Statistics
            good={feedbacks.good}
            neutral={feedbacks.neutral}
            bad={feedbacks.bad}
            total={countTotalFeedback()}
            positivePercentage={countPositiveFeedbackPercentage()}
          ></Statistics>
        ) : (
          <Notification message="There is no feedback" />
        )}
      </Section>
    </Container>
  );
};

export default App;
