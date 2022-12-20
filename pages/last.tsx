import React from "react";
import Styles from '../styles/Test.module.css'



const Data: ItemType = {
    root: "root",
    children: [
        {
            name: "1",
            children: [
                {
                    name: "1 > 1",
                    children: [
                        {
                            name: "1 > 1 > 1",
                            children: [
                                {
                                    name: "1 > 1 > 1 > 1",
                                    children: [
                                        {
                                            name: "1 > 1 > 1 > 1 > 1",
                                            children: [],
                                        },
                                        {
                                            name: "1 > 1 > 1 > 1 > 2",
                                            children: [],
                                        },
                                    ],
                                },
                                {
                                    name: "1 > 1 > 1 > 2",
                                    children: [
                                        {
                                            name: "1 > 1 > 1 > 2 > 1",
                                            children: [],
                                        },
                                        {
                                            name: "1 > 1 > 1 > 2 > 2",
                                            children: [],
                                        },
                                    ],
                                },
                            ],
                        },
                        {
                            name: "1 > 1 > 2",
                            children: [
                                {
                                    name: "1 > 1 > 2 > 1",
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
                            name: "1 > 1 > 1",
                            children: [
                                {
                                    name: "1 > 1 > 1 > 1",
                                    children: [
                                        {
                                            name: "1 > 1 > 1 > 1 > 1",
                                            children: [],
                                        },
                                        {
                                            name: "1 > 1 > 1 > 1 > 2",
                                            children: [],
                                        },
                                    ],
                                },
                                {
                                    name: "1 > 1 > 1 > 2",
                                    children: [
                                        {
                                            name: "1 > 1 > 1 > 2 > 1",
                                            children: [],
                                        },
                                        {
                                            name: "1 > 1 > 1 > 2 > 2",
                                            children: [],
                                        },
                                    ],
                                },
                            ],
                        },
                        {
                            name: "1 > 1 > 2",
                            children: [
                                {
                                    name: "1 > 1 > 2 > 1",
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
                            name: "1 > 1 > 1",
                            children: [
                                {
                                    name: "1 > 1 > 1 > 1",
                                    children: [
                                        {
                                            name: "1 > 1 > 1 > 1 > 1",
                                            children: [],
                                        },
                                        {
                                            name: "1 > 1 > 1 > 1 > 2",
                                            children: [],
                                        },
                                    ],
                                },
                                {
                                    name: "1 > 1 > 1 > 2",
                                    children: [
                                        {
                                            name: "1 > 1 > 1 > 2 > 1",
                                            children: [],
                                        },
                                        {
                                            name: "1 > 1 > 1 > 2 > 2",
                                            children: [],
                                        },
                                    ],
                                },
                            ],
                        },
                        {
                            name: "1 > 1 > 2",
                            children: [
                                {
                                    name: "1 > 1 > 2 > 1",
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
                                        {
                                            name: "AAAAA",
                                            children: [],
                                        },
                                        {
                                            name: "BBBBB",
                                            children: [],
                                        },
                                        {
                                            name: "AAAAA",
                                            children: [],
                                        },
                                        {
                                            name: "BBBBB",
                                            children: [],
                                        },
                                        {
                                            name: "AAAAA",
                                            children: [],
                                        },
                                        {
                                            name: "BBBBB",
                                            children: [],
                                        },
                                        {
                                            name: "AAAAA",
                                            children: [],
                                        },
                                        {
                                            name: "BBBBB",
                                            children: [{
                                                name: "BBBBB",
                                                children: [],
                                            },],
                                        },
                                    ],
                                },
                            ],
                        },
                    ],
                },

                {
                    name: "1 > 2",
                    children: [
                        {
                            name: "1 > 2 > 1",
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
                            name: "1 > 2 > 2",
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

        {
            name: "2",
            children: [
                {
                    name: "AA",
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


export default function Index() {
    return (

        <ul style={{ width: 400, height: 500, color: 'white', overflow: 'scroll', background: 'linear-gradient( 0deg, rgba(190, 194, 255, 0.08), rgba(190, 194, 255, 0.08) ), #1b1b1f' }}>
            <div className="sticky0">{Data.root} root </div>

            {mapper(Data, 0, 0)}

        </ul>

    );
}

var id = 1;
var Zindex = 100



const stickyStyles = [

    "sticky1",
    "sticky2",
    "sticky3",
];


function mapper(data: ItemType, depth: number, index: number) {
    const [height, setHeight] = React.useState(0);

    React.useEffect(() => {
        setHeight(parseInt(document.documentElement.style.getPropertyValue('--my-label-height')));
    }, []);


    return (
        <>
            <li key={Math.random() * 10000 + 1} style={{ zIndex: -1 * depth, height: 250, overflow: 'scroll' }} className={`my-item ${stickyStyles[depth]}`}>
                {<input className="my-input" type="checkbox" id={`input-${index * 3333 / 2}`} />}
                <label htmlFor={`input-${index * 3333 / 2}`} className={`my-label `}>

                    {depth} - {data.name} == index {depth}

                </label>

                {data.children.length > 0 ?

                    <ul className="my-list">
                        {data.children.map((item: ItemType, index: number) => mapper(item, depth + 1, index))}
                    </ul> : null}

            </li>
        </>

    )
}

type ItemType = { root?: string, name?: string, children: Array<ItemType> }