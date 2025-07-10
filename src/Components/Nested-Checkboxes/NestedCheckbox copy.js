import { useState } from "react";

const CheckboxesData = [
  {
    id: 1,
    label: "Fruits",
    children: [
      { id: 2, label: "Apple" },
      { id: 3, label: "Banana" },
      {
        id: 4,
        label: "Citrus",
        children: [
          { id: 5, label: "Orange" },
          { id: 6, label: "Lemon" },
        ],
      },
    ],
  },
  {
    id: 7,
    label: "Vegetables",
    children: [
      { id: 8, label: "Carrot" },
      { id: 9, label: "Broccoli" },
    ],
  },
];

const Checkboxes = ({ data, checked, setChecked }) => {
  const handleChange = (isChecked, node) => {
    setChecked((prev) => {
      const newState = { ...prev, [node.id]: isChecked };
      const updateChildren = (node) => {
        node.children?.forEach((child) => {
          newState[child.id] = isChecked;
          child.children && updateChildren(child);
        });
      };
      updateChildren(node);

      const verifyChecked = (node) => {
        if (!node.children) return newState[node.id];
        const allChildrenChecked = node.children.every((child) =>
          verifyChecked(child)
        );
        newState[node.id] = allChildrenChecked;
        return allChildrenChecked;
      };
      CheckboxesData.forEach((child) => verifyChecked(child));

      return newState;
    });
  };

  console.log(checked);
  return (
    <div>
      {data.map((item) => {
        return (
          <div key={item.id} style={{ paddingLeft: "25px" }}>
            <label>
              <input
                type="checkbox"
                checked={checked[item.id] || false}
                onChange={(e) => handleChange(e.target.checked, item)}
              />
              {item.label}
            </label>
            {item?.children && (
              <Checkboxes
                data={item.children}
                checked={checked}
                setChecked={setChecked}
              />
            )}
          </div>
        );
      })}
    </div>
  );
};

export default function NestedCheckbox() {
  const [checked, setChecked] = useState({});
  return (
    <div>
      <h2>Nested Checkbox</h2>
      <Checkboxes
        data={CheckboxesData}
        checked={checked}
        setChecked={setChecked}
      />
    </div>
  );
}
