import React from "react";

export default function Footer() {
  return (
    <div className="App__footer">
      <div className="App__footer--icon">
        <i class="far fa-file-alt" />
      </div>
      <div className="App__footer--icon">
        <a
          href="https://www.linkedin.com/in/allan-gao-43a7b5125/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i class="fab fa-linkedin" />
        </a>
      </div>
      <div className="App__footer--icon">
        <a
          href="https://github.com/e3cd"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i class="fab fa-github" />
        </a>
      </div>
      <div className="App__footer--icon">
        <a href="mailto:allangao95@gmail.com" rel="noopener noreferrer">
          <i class="far fa-envelope" />
        </a>
      </div>
    </div>
  );
}
