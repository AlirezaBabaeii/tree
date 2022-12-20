import React, { useState, useEffect, createContext, useContext , memo } from "react";
import Styles from "./render.module.css";

export const SelectedContext = createContext();


 const Oindexmemo = memo(function Oindex() {
 

  const [Select, setSelect] = useState();
  


  useEffect(() => {
    
  }, [Select]);

  return (
    <div>
      <SelectedContext.Provider value={[Select, setSelect]}>
        <MemoIndex />

        {Select?.id}
        {Select?.childs?.map((val, i) => {
          return <li key={i}>{val.name}</li>;
        })}
      </SelectedContext.Provider>
    </div>
  );



});


export default Oindexmemo



 const Index = () => {
  const [State, setState] = useState([
    {
      name: "test 1",
      id: "2323",
      childs: [
        {
          name: "child 1",
          id: "c1",
          childs: [
            { name: "child 3", id: "c3" },
            { name: "child 4", id: "c4" },
          ],
        },
        { name: "child 2", id: "c2" },
      ],
    },
    {
      name: "test 2",
      id: "4323",
      childs: [
        { name: "child 1", id: "d1" },
        { name: "child 2", id: "d2" },
      ],
    },
  ]);

  const updateArray = () => {
    setState((prev) => {
      return [
        ...prev,
        {
          name: "test 3",
          id: "5323",
          childs: [
            { name: "child 1", id: "d2" },
            { name: "child 2", id: "32" },
          ],
        },
      ];
    });
  };

  return (
    <div className={Styles.container}>
      <button onClick={() => updateArray()}>Updater</button>

      {State.map((value, index) => {
        return <Itemmemo key={index} data={value} />;
      })}
    </div>
  );
};


export  const MemoIndex = memo(Index)

// export  Index;

export const Item = ({ data }) => {
  const [Checked, setChecked] = useState(false);

  const [Select, setSelect] = useContext(SelectedContext);

  console.log("re-render item");

  const ToggelChecked = () => {
    // setSelect(data);

    setChecked(!Checked);
  };

  return (
    <div>
      <label
        style={{ backgroundColor: Checked ? "red" : "black" }}
        htmlFor={data.id}
        onClick={() => ToggelChecked()}
        className={Styles.label}
      >
        name : {data.name} {Checked ? "clicked" : "no clicked"}
      </label>

      <input className={Styles.inputs} type="checkbox" id={data.id} />

      {data.childs?.map((value, index) => {
        return <Itemmemo key={index} data={value} />;
      })}
    </div>
  );
};

export const Itemmemo = memo(Item)
