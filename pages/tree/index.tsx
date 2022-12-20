import Styles from "../../styles/Test.module.css";
import { ArrowRight } from '../../components/icons/Icons'
import { useState } from "react";

const Data: DataType = {
  root: "root",
  children: [
    {
      name: "A",
      children: [
        {
          name: "AA",
          id: "sddsd",
          children: [
            {
              name: "AAA",
              children: [
                {
                  name: "AAAA",
                  children: [
                    {
                      name: "AAAAA",
                      id: "sddfsdfsdsd",
                      children: [{
                        name: "childs aaaa",
                        id: "sddfsdfsdsd",
                        children: [
                          {
                            name: "childs> a",
                            id: "sddfsdfsdsd",
                            children: [],
                          },    
                          {
                            name: "childs  > aa",
                            id: "sddfsdfsdsd",
                            children: [
                              {
                                name: "childs> aaa",
                                id: "sddfsdfsdsd",
                                children: [
                                  {
                                    name: "childs > b",
                                    id: "sddfsdfsdsd",
                                    children: [
                                      {
                                        name: "bb > bb",
                                        id: "sddfsdfsdsd",
                                        children: [
                                          {
                                            name: "bbb > bbb",
                                            id: "sddfsdfsdsd",
                                            children: [
                                              {
                                                name: "bbbb > bbbb",
                                                id: "sddfsdfsdsd",
                                                children: [],
                                              }, 
                                            ],
                                          }, 
                                        ],
                                      }, 
                                    ],
                                  }, 
                                ],
                              }, 
                            ],
                          }, 
                        ],
                      }, {
                        name: "childs 2 aaaaaa",
                        id: "sddfsdfsdsd",
                        children: [],
                      }, ],
                    },
                    {
                      name: "BBBBB",
                      children: [],
                    },
                  ],
                },
                {
                  name: "BBBB",
                  children: [
                    {
                      name: "AAAAA",
                      children: [],
                    },
                    {
                      name: "BBBBB",
                      children: [],
                    },
                  ],
                },
              ],
            },
            {
              name: "BBB",
              children: [
                {
                  name: "AAAA",
                  children: [
                    {
                      name: "AAAAA",
                      children: [],
                    },
                    {
                      name: "BBBBB",
                      children: [],
                    },
                  ],
                },
                {
                  name: "BBBB",
                  children: [
                    {
                      name: "AAAAA",
                      children: [],
                    },
                    {
                      name: "BBBBB",
                      children: [],
                    },
                  ],
                },
              ],
            },
          ],
        },
        {
          name: "BB",
          children: [
            {
              name: "AAA",
              children: [
                {
                  name: "AAAA",
                  children: [
                    {
                      name: "AAAAA",
                      children: [],
                    },
                    {
                      name: "BBBBB",
                      children: [],
                    },
                  ],
                },
                {
                  name: "BBBB",
                  children: [
                    {
                      name: "AAAAA",
                      children: [],
                    },
                    {
                      name: "BBBBB",
                      children: [],
                    },
                  ],
                },
              ],
            },
            {
              name: "BBB",
              children: [
                {
                  name: "AAAA",
                  children: [
                    {
                      name: "AAAAA",
                      children: [],
                    },
                    {
                      name: "BBBBB",
                      children: [],
                    },
                  ],
                },
                {
                  name: "BBBB",
                  children: [
                    {
                      name: "AAAAA",
                      children: [],
                    },
                    {
                      name: "BBBBB",
                      children: [],
                    },
                  ],
                },
              ],
            },
          ],
        },
      ],
    },

  
  ],
};

export default function App() {
  return (
    <div className={Styles.container}>
      {/* <div className={Styles.sticky0}>{Data.root}</div> */}
      <Items data={Data} Itemindex={0} />
    </div>
  );
}




const stickyStyles = [
  Styles.sticky0,
  Styles.sticky1,
  Styles.sticky2, 
  Styles.sticky3,
  Styles.sticky4
];

var ItemsIndex = 0
var indexSticky = 100

function Items({ data, level = 0, Itemindex }: ItemParam): JSX.Element {

  ItemsIndex++

  indexSticky--

  const [isOpen, setOpen] = useState<boolean>(false);

  function handleToggle() {
    setOpen(!isOpen);
  }

  function TestClick(props:any) {
    console.log(props , 'this props');
    
  }

  return (
    <>

      <div className={Styles.wrappertest}>


        <div className={ data.children.length != 0 ? Styles.teststicky  :  Styles.item} style={{paddingLeft: level * 15,zIndex:100 - level,top:data.children.length != 0 ? level * 25 : ''}} onClick={()=> TestClick(level)}>

          <div className={Styles.containerlabel_text}>

            <label htmlFor={`input-${ItemsIndex}`} className={Styles.Label} onClick={handleToggle}>
              {data.children.length != 0 ?
                <ArrowRight isOpen={isOpen} />
                : null}
            </label>

            <div > {level == 0 ? Data?.root : <>{data?.name} </>} lev {level} in {Itemindex} </div>

          </div>

        </div>

        {data.children.length != 0 ? (
          <input className={Styles.inputs} id={`input-${ItemsIndex}`} type="checkbox" checked={isOpen} />
        ) : null}

        {data.children.map((value: any, index: number) => (
          <Items key={index} data={value} level={level + 1} Itemindex={index} />
        ))}


      </div>

    </>
  );
}



type ItemParam = { data: DataType; level?: number; Itemindex:number };
type DataType = { root?: string; name?: string; children: Array<DataType & { id?: string }>; };