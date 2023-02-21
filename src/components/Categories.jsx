import { useState } from "react";

const Categories = () => {
  const [active, setActive] = useState(0);
  const categories = ["All", "Meat", "Vegan", "Grill", "Spicy", "Closed"].map(
    (item, i) => (
      <li
        className={active === i ? "active" : ""}
        onClick={() => setActive(i)}
        key={`categori-#-${i}`}
      >
        {item}
      </li>
    )
  );

  return (
    <div className="categories">
      <ul>{categories}</ul>
    </div>
  );
};

export default Categories;
