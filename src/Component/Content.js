import "./Content.css";
import React from "react";

export default function Content() {
  return (
    <div className="coffee-content">
      <h2>Welcome to Our Coffee Shop</h2>
      <p>
        Indulge in the rich aroma and flavors of our handcrafted coffee. From
        single-origin beans to signature blends, we offer a variety of choices
        to satisfy your coffee cravings.
      </p>

      <div className="coffee-menu">
        <div className="coffee-item">
          <img
            src="https://img.freepik.com/free-photo/cup-coffee-with-pile-coffee-beans_1112-438.jpg?w=996&t=st=1692316045~exp=1692316645~hmac=8e0031534bb3453fa6d5902c71cdb2e5d397b940edcca90672a4ca1087bc3626"
            alt="Coffee Item"
          />
          <h3>Espresso Delight</h3>
          <p>A shot of pure bliss.</p>
        </div>
        <div className="coffee-item">
          <img
            src="https://img.freepik.com/free-photo/coffee-beans-with-props-making-coffee_1220-4536.jpg?w=996&t=st=1692316073~exp=1692316673~hmac=b06a4f526948e9a9f24907e0ee08d18182c42f03b47fbf7bb5216bba3a064840"
            alt="Coffee Item"
          />
          <h3>Cappuccino Classic</h3>
          <p>Frothy perfection.</p>
        </div>

        <div className="coffee-item">
          <img
            src="https://img.freepik.com/free-photo/cup-coffee-with-foam-smile-face-desk-isolated_1303-18307.jpg?w=996&t=st=1692316290~exp=1692316890~hmac=5539b0af767521232ad1155f58c3ac3f7400c717c98aa8db33293bcd79184277"
            alt="Coffee Item"
          />
          <h3>Dirk Your Classic coffee</h3>
          <p>Best Shop ever.</p>
        </div>
      </div>
    </div>
  );
}
