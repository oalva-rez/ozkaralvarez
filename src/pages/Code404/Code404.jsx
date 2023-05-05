import React from "react";

function Code404() {
  return (
    <main className="not-found">
      <h1>404</h1>

      <img
        className="caveman"
        src="https://cdn.dribbble.com/users/285475/screenshots/2083086/dribbble_1.gif"
        alt="404 caveman"
      />
      <div className="not-found-content">
        <h2>Looks like you're lost.</h2>
        <p>The page you're looking for is not available!</p>
        <button>Go Home!</button>
      </div>
    </main>
  );
}

export default Code404;
