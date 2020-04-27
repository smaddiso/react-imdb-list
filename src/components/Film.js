import React from 'react';

function Film({ children, url }) {
  return (
    <div className="film">
    <h4><a href={url} target="_blank">{children}</a></h4>
    </div>
  )
}

export default Film;
