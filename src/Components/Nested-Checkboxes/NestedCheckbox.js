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
  const handleChange = (checked, node) => {
    setChecked((prev) => {
      let newState = { ...prev, [node.id]: checked };

      const updateChildren = (node) => {
        node.children?.map((item) => {
          newState[item.id] = checked;
          if (item.children) updateChildren(item);
        });
      };

      const verifyChecked = (node) => {
        console.log("verifying for ", node.label);
        if (!node.children) return newState[node.id] || false;
        const areAllChildrenChecked = node.children
          .map((item) => verifyChecked(item))
          .every(Boolean);
        newState[node.id] = areAllChildrenChecked;
        return areAllChildrenChecked;
      };

      updateChildren(node);
      CheckboxesData.map((node) => verifyChecked(node));

      return newState;
    });
  };

  console.log(checked);

  return (
    <div>
      {data.map((node) => {
        return (
          <div key={node.id} style={{ marginLeft: "25px" }}>
            <label>
              <input
                type="checkbox"
                checked={checked[node.id] || false}
                onChange={(e) => handleChange(e.target.checked, node)}
              />
              {node.label}
            </label>
            {node.children && (
              <Checkboxes
                data={node.children}
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
