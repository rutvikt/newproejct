import React from 'react';
import CountUp from 'react-countup';
import './Increment.scss';

const Increment = () => {
  const stats = [
    { count: 350, label: 'KEYNOTES GIVEN', prefix: '', suffix: '+' },
    { count: 300, label: 'PRESENTATION TIME', prefix: '', suffix: ' MIN' },
    { count: 300, label: 'INSPIRED LISTENERS', prefix: '', suffix: 'K' },
    { count: 1600, label: 'EVENTS', prefix: '>', suffix: ' ' }
  ];

  return (
    <div className="increment">
      {stats.map((stat, index) => (
        <div className="main-in" key={index}>
          <div className="counting">
            <CountUp
              start={0}
              end={stat.count}
              duration={2.75}
              prefix={stat.prefix}
              suffix={stat.suffix}
            />
            <h2>{stat.label}</h2>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Increment;
