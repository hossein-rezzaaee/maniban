import React from 'react';

const HeaderList = ({ list = [] }) => {
  return (
    <ul className="menu">
      {list.map((li) => (
        <li key={li.title}>
          <a href={li.link}>{li.title}</a>
        </li>
      ))}
    </ul>
  );
};

export default HeaderList;
