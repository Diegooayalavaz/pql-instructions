import React from "react";

const Footer = () => {
  return (
    <footer className="bg-dark text-white text-center py-3 footer">
      <div className="container">
        <p className="mb-0">
          © 2024 Premier Quidditch League. All rights reserved.
        </p>
        <p className="mb-0">
          Follow us on{" "}
          <a href="https://www.twitter.com" className="text-white">
            Twitter
          </a>{" "}
          |{" "}
          <a href="https://www.facebook.com" className="text-white">
            Facebook
          </a>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
