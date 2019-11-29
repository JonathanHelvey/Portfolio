/* eslint-disable react/no-array-index-key */
import React from 'react';
import { Spring, config } from 'react-spring/renderprops';

function generateGreeting() {
  const today = new Date();
  const curHr = today.getHours();
  if (curHr < 12) {
    return (
      <div>
        <h3 className="full-stack-dev">
          <span role="img" aria-label="sunset">
            🌅
          </span>
          Good Morning!
          <span role="img" aria-label="sunset">
            🌅
          </span>
        </h3>
      </div>
    );
  }
  if (curHr < 18) {
    return (
      <div>
        <h3 className="full-stack-dev">
          <span role="img" aria-label="sun">
            ☀️
          </span>
          Good Afternoon!
          <span role="img" aria-label="sun">
            ☀️
          </span>
        </h3>
      </div>
    );
  }
  return (
    <div>
      <h3 className="full-stack-dev">
        <span role="img" aria-label="moon">
          🌙
        </span>
        Good Evening!
        <span role="img" aria-label="moon">
          🌙
        </span>
      </h3>
    </div>
  );
}

const MainHeader = () => (
  <Spring
    from={{ opacity: 0 }}
    to={{ opacity: 1 }}
    delay="2000"
    config={config.molasses}
  >
    {(props) => (
      <div>
        <h3 style={props}>{generateGreeting()}</h3>
      </div>
    )}
  </Spring>
);

export default MainHeader;
