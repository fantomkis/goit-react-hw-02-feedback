import { Component } from 'react';
import Feedback from './Feedback/Feedback';
import Section from './Section/Section';
import FeedbackOptions from './FeedbackOptions/FeedbackOptions';
import Statistics from './Statistics/Statistics';
import Notification from './Notification/Notification';

class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  onLeaveFeedback = e => {
    const { name } = e.target;
    this.setState({ [name]: this.state[name] + 1 });
  };

  sumTotal = () => {
    const { good, neutral, bad } = this.state;
    const total = good + neutral + bad;
    return total;
  };

  positivePercentage = () => {
    const oneProcent = 100 / this.sumTotal();

    const prcent = Math.round(oneProcent * this.state.good);

    return `${prcent}%`;
  };

  render() {
    const { good, neutral, bad } = this.state;
    const options = [
      {
        name: 'good',
        type: 'button',
        value: 'Good',
      },
      {
        name: 'neutral',
        type: 'button',
        value: 'Neutral',
      },
      {
        name: 'bad',
        type: 'button',
        value: 'Bad',
      },
    ];
    return (
      <div
        style={{
          height: '100vh',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          fontSize: 40,
          color: '#010101',
        }}
      >
        <Feedback
          good={good}
          neutral={neutral}
          bad={bad}
          onLeaveFeedback={this.onLeaveFeedback}
        />
        <Section title={'Please leave feedback'}>
          <FeedbackOptions
            onLeaveFeedback={this.onLeaveFeedback}
            options={options}
          />
          {this.sumTotal() > 0 ? (
            <Statistics
              good={good}
              neutral={neutral}
              bad={bad}
              total={this.sumTotal()}
              positivePercentage={this.positivePercentage()}
            />
          ) : (
            <Notification message="There is no feedback" />
          )}
        </Section>
      </div>
    );
  }
}
export default App;
