import Styles from "../../styles/testor.module.css";
const Data = {
  root: "root",
  childs: [
    {
      name: "A",
      childs: [
        {
          name: "AA",
          id: "sddsd",
          childs: [
            {
              name: "AAA",
              childs: [
                {
                  name: "AAAA",
                  childs: [
                    {
                      name: "AAAAA",
                      id: "sddfsdfsdsd",
                      childs: [],
                    },
                    {
                      name: "BBBBB",
                      childs: [],
                    },
                  ],
                },
                {
                  name: "BBBB",
                  childs: [
                    {
                      name: "AAAAA",
                      childs: [],
                    },
                    {
                      name: "BBBBB",
                      childs: [],
                    },
                  ],
                },
              ],
            },
            {
              name: "BBB",
              childs: [
                {
                  name: "AAAA",
                  childs: [
                    {
                      name: "AAAAA",
                      childs: [],
                    },
                    {
                      name: "BBBBB",
                      childs: [],
                    },
                  ],
                },
                {
                  name: "BBBB",
                  childs: [
                    {
                      name: "AAAAA",
                      childs: [],
                    },
                    {
                      name: "BBBBB",
                      childs: [],
                    },
                  ],
                },
              ],
            },
          ],
        },
        {
          name: "BB",
          childs: [
            {
              name: "AAA",
              childs: [
                {
                  name: "AAAA",
                  childs: [
                    {
                      name: "AAAAA",
                      childs: [],
                    },
                    {
                      name: "BBBBB",
                      childs: [],
                    },
                  ],
                },
                {
                  name: "BBBB",
                  childs: [
                    {
                      name: "AAAAA",
                      childs: [],
                    },
                    {
                      name: "BBBBB",
                      childs: [],
                    },
                  ],
                },
              ],
            },
            {
              name: "BBB",
              childs: [
                {
                  name: "AAAA",
                  childs: [
                    {
                      name: "AAAAA",
                      childs: [],
                    },
                    {
                      name: "BBBBB",
                      childs: [],
                    },
                  ],
                },
                {
                  name: "BBBB",
                  childs: [
                    {
                      name: "AAAAA",
                      childs: [],
                    },
                    {
                      name: "BBBBB",
                      childs: [],
                    },
                  ],
                },
              ],
            },
          ],
        },
      ],
    },

    {
      name: "B",
      childs: [
        {
          name: "AA",
          childs: [
            {
              name: "AAA",
              childs: [
                {
                  name: "AAAA",
                  childs: [
                    {
                      name: "AAAAA",
                      childs: [],
                    },
                    {
                      name: "BBBBB",
                      childs: [],
                    },
                  ],
                },
                {
                  name: "BBBB",
                  childs: [
                    {
                      name: "AAAAA",
                      childs: [],
                    },
                    {
                      name: "BBBBB",
                      childs: [],
                    },
                  ],
                },
              ],
            },
            {
              name: "BBB",
              childs: [
                {
                  name: "AAAA",
                  childs: [
                    {
                      name: "AAAAA",
                      childs: [],
                    },
                    {
                      name: "BBBBB",
                      childs: [],
                    },
                  ],
                },
                {
                  name: "BBBB",
                  childs: [
                    {
                      name: "AAAAA",
                      childs: [],
                    },
                    {
                      name: "BBBBB",
                      childs: [],
                    },
                  ],
                },
              ],
            },
          ],
        },
        {
          name: "BB",
          childs: [
            {
              name: "AAA",
              childs: [
                {
                  name: "AAAA",
                  childs: [
                    {
                      name: "AAAAA",
                      childs: [],
                    },
                    {
                      name: "BBBBB",
                      childs: [],
                    },
                  ],
                },
                {
                  name: "BBBB",
                  childs: [
                    {
                      name: "AAAAA",
                      childs: [],
                    },
                    {
                      name: "BBBBB",
                      childs: [],
                    },
                  ],
                },
              ],
            },
            {
              name: "BBB",
              childs: [
                {
                  name: "AAAA",
                  childs: [
                    {
                      name: "AAAAA",
                      childs: [],
                    },
                    {
                      name: "BBBBB",
                      childs: [],
                    },
                  ],
                },
                {
                  name: "BBBB",
                  childs: [
                    {
                      name: "AAAAA",
                      childs: [],
                    },
                    {
                      name: "BBBBB",
                      childs: [],
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
    <div>
      {/* <div className={Styles.sticky0}>{Data.root}</div> */}
      <Items data={Data} />
    </div>
  );
}




const stickyStyles = [
  Styles.sticky0,
  Styles.sticky1,
  Styles.sticky2,
  Styles.sticky3,
  Styles.sticky4,
];



function Items({ data, level = 0 }: any) {
  return (
    <>

      <div>


        <div className={stickyStyles[level] ?? Styles.item}>
          {level == 0 ? Data.root : <>{data.name} in {level} </>}
          {data.childs.length != 0 ? 'parent' : null}
        </div>

        {data.childs.map((value: any, index: number) => (
          <Items key={index} data={value} level={level + 1} />
        ))}


      </div>

    </>
  );
}
