export default function Container() {
  return (
    <div className="Container">
      <h1>Most Common coffee</h1>
      <div className="coffee-menu">
        <div className="coffee-item">
          <img
            src="https://img.freepik.com/free-photo/vertical-shot-coffee-making-machine-making-nescafe-glass_181624-21599.jpg?w=360&t=st=1692328343~exp=1692328943~hmac=e8c915aaf819aa0ea3f21ef54c0a848599636ab1af12839d097188c8b33f7b7f"
            alt="Espresso"
          />
          <h3>Espresso</h3>
          <p>
            A strong and concentrated coffee brewed by forcing hot water through
            finely-ground coffee beans.
          </p>
        </div>
        <div className="coffee-item">
          <img
            src="https://img.freepik.com/free-photo/latte-coffee_74190-2926.jpg?w=740&t=st=1692328061~exp=1692328661~hmac=6a4982f1503fed87246a821275f2fdc167e3e9a9e13ac2b178b6e0af1e0a9b30"
            alt="Cappuccino"
          />
          <h3>Cappuccino</h3>
          <p>
            A classic Italian coffee drink that combines equal parts of
            espresso, steamed milk, and milk foam.
          </p>
        </div>
        <div className="coffee-item">
          <img
            src="https://img.freepik.com/free-photo/latte-macchiato-with-whipped-cream-caramel-strips-top_140725-10588.jpg?w=740&t=st=1692328377~exp=1692328977~hmac=552dc38205863985b2770f4064ddb59dd6eecfe67f00020d814abe8d0bd49845"
            alt="Latte"
          />
          <h3>Latte</h3>
          <p>
            A popular coffee drink made with espresso and steamed milk, topped
            with a small amount of milk foam.
          </p>
        </div>
        <div className="coffee-item">
          <img
            src="https://img.freepik.com/free-photo/top-view-cup-milk-coffee-with-roasted-beans_23-2148251667.jpg?w=740&t=st=1692328399~exp=1692328999~hmac=fd3aefcaa62a4b427b66401b4c0d050fe66e421b57d26390485334ed5d9c0356"
            alt="Americano"
          />
          <h3>Americano</h3>
          <p>
            A simple coffee drink made by diluting espresso with hot water,
            resulting in a milder flavor.
          </p>
        </div>
      </div>
    </div>
  );
}
