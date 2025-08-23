import React from 'react';


const treadsData = [
  {
    id: 1,
    user: 'devil_with_curls',
    link: 'https://www.threads.com/@devil_with_curls'
  }
];

function Treads() {
  return (
    <div className="treads-container">
      {treadsData.map((tread) => (
        <div key={tread.id} className="tread-card">
          <a href={tread.link} target="_blank" rel="noopener noreferrer" className="tread-user">
            @{tread.user}
          </a>
        </div>
      ))}
    </div>
  );
}

export default Treads;
