import { useState } from "react";

import Container from "./components/Container/Container";
import Section from "./components/Section/Section";
import Statistics from "./components/Statistics/Statistics";
import FeedbackOptions from "./components/FeedbackOptions/FeedbackOptions";
import Notification from "./components/Notification/Notification";

function App() {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  function onGoodClick() {
    setGood((prevGood) => prevGood + 1);
  }

  function onNeutralClick() {
    setNeutral((prevNeutral) => prevNeutral + 1);
  }

  function onBadClick() {
    setBad((prevBad) => prevBad + 1);
  }

  function countTotalFeedback() {
    const sum = good + neutral + bad;
    return sum;
  }

  function countPositiveFeedbackPercentage() {
    const sum = countTotalFeedback();
    const percentage = Math.round((good / sum) * 100);
    return percentage;
  }

  return (
    <div>
      <Container>
        <Section title="Please leave feedback">
          <FeedbackOptions
            onGoodClick={onGoodClick}
            onNeutralClick={onNeutralClick}
            onBadClick={onBadClick}
          />
        </Section>
        <Section title="Statistics">
          {good > 0 || neutral > 0 || bad > 0 ? (
            <Statistics
              good={good}
              neutral={neutral}
              bad={bad}
              total={countTotalFeedback()}
              positivePercentage={countPositiveFeedbackPercentage()}
            />
          ) : (
            <Notification message="No feedback given" />
          )}
        </Section>
      </Container>
    </div>
  );
}

export default App;
