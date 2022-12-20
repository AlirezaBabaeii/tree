import React, { useState } from "react";
import Styles from "../../styles/Test.module.css";
export default function TestMap() {
    const [Workspace, setWorkspace] = useState<any>([
        {
            text: "jim a",
            project: [
                { name: "aspaz", instans: [{ id: "e3274ef" }], isReadOnly: true },
                { name: "salam", instans: [{ id: "e3274ef" }], isReadOnly: true },
            ],
            isReadOnly: true,
        },
        {
            text: "jim b",
            project: [
                { name: "aspaz", instans: [{ id: "e3274ef" }], isReadOnly: true },
                { name: "salam", instans: [{ id: "e3274ef" }], isReadOnly: true },
            ],
            isReadOnly: true,
        },
        {
            text: "jim c",
            project: [
                { name: "aspaz", instans: [{ id: "e3274ef" }], isReadOnly: true },
                { name: "salam", instans: [{ id: "e3274ef" }], isReadOnly: true },
            ],
            isReadOnly: true,
        },
        {
            text: "jim d",
            project: [
                { name: "aspaz", instans: [{ id: "e3274ef" }], isReadOnly: true },
                { name: "salam", instans: [{ id: "e3274ef" }], isReadOnly: true },
            ],
            isReadOnly: true,
        },
    ]);

    const ArrItem = {
        name: "project 1",
        child: [
            {
                name: "a",
                id: 22,
                child: [
                    {
                        name: "aa",
                        id: "333",
                        child: [
                            
                            { name: "aaa", id: "333", 
                            
                            child: [{ name: "aaaa", id: "333" }] },
                        ],
                    },
                ],
            },
            {
                name: "b",
                id: 22,
                child: [
                    {
                        name: "bb",
                        id: "333",
                        child: [
                            { name: "bbb", id: "333", child: [{ name: "bbbb", id: "333" }] },
                        ],
                    },
                ],
            },
            {
                name: "c",
                id: 22,
                child: [
                    {
                        name: "cc",
                        id: "333",
                        child: [
                            { name: "ccc", id: "333", child: [{ name: "cccc", id: "333" }] },
                        ],
                    },
                ],
            },
            {
                name: "d",
                id: 22,
                child: [
                    {
                        name: "dd",
                        id: "333",
                        child: [
                            { name: "ddd", id: "333", child: [{ name: "dddd", id: "333" }] },
                        ],
                    },
                ],
            },
            {
                name: "e",
                id: 22,
                child: [
                    {
                        name: "aa",
                        id: "333",
                        child: [
                            { name: "aaa", id: "333", child: [{ name: "aaaa", id: "333" }] },
                        ],
                    },
                ],
            },
            {
                name: "f",
                id: 22,
                child: [
                    {
                        name: "aa",
                        id: "333",
                        child: [
                            { name: "aaa", id: "333", child: [{ name: "aaaa", id: "333" }] },
                        ],
                    },
                ],
            },
            {
                name: "g",
                id: 22,
                child: [
                    {
                        name: "aa",
                        id: "333",
                        child: [
                            { name: "aaa", id: "333", child: [{ name: "aaaa", id: "333" }] },
                        ],
                    },
                ],
            },
            {
                name: "l",
                id: 22,
                child: [
                    {
                        name: "aa",
                        id: "333",
                        child: [
                            { name: "aaa", id: "333", child: [{ name: "aaaa", id: "333" }] },
                        ],
                    },
                ],
            },
        ],
    };

    type RecMap = { child: RecMap[]; name: string; id?: string };

    function mapper(data: any, index:number) {
        if (!data) return;

        if (!Array.isArray(data.child)) return;

        return (
            <>

                <div>

                    <div className={Styles.sticky1}>{data.name} in  {index} </div>
                    <div>
                        <div className={Styles.sticky2}>2</div>
                        <div>
                            <div className={Styles.sticky3}>3</div>
                            <div>

                                <div className={Styles.item}>item</div>
                                <div className={Styles.item}>item</div>
                                <div className={Styles.item}>item</div>

                            </div>
                        </div>
                    </div>

                </div>

                {data.child.map((item: any) => mapper(item,index + 1))}
            </>
        );
    }

    return (
        <div>
            <div>
                {/* <div>{mapper(ArrItem)}</div> */}

                {/* {
    Workspace.map((value:any,index:number)=>{

        return(
            <>
             <div className={Styles.sticky0}>{value.text}</div>
                {
                    value.project.map((Sub2:any,index:number)=>{
                        return(
                            <div>
                            <div className={Styles.sticky1}>{Sub2.name}</div>
                            <div>
                                <div className={Styles.sticky2}>2</div>
                                <div>
                                    <div className={Styles.sticky3}>3</div>
                                    <div>
                                        <div className={Styles.item}>item</div>
                                        <div className={Styles.item}>item</div>
                          
                                    </div>
                                </div>
                                <div>
                                    <div className={Styles.sticky3}>3</div>
                                    <div>
                                        <div className={Styles.item}>item</div>
                                        <div className={Styles.item}>item</div>
                                        <div className={Styles.item}>item</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        )
                    })
                }
            
            </>
        )

    })
} */}


                <div className={Styles.sticky0}>0</div>
                <>{mapper(ArrItem,0)}</>
                {/* <div>

                    <div className={Styles.sticky1}>1</div>
                    <div>
                        <div className={Styles.sticky2}>2</div>
                        <div>
                            <div className={Styles.sticky3}>3</div>
                            <div>
                                
                                <div className={Styles.item}>item</div>
                                <div className={Styles.item}>item</div>
                                <div className={Styles.item}>item</div>

                            </div>
                        </div>
                    </div>
              
                </div> */}




            </div>

            {
                // start two container
            }
            {/* <div>
                    <div className={Styles.sticky1}>1</div>
                    <div>
                        <div className={Styles.sticky2}>2</div>
                        <div>
                            <div className={Styles.sticky3}>3</div>
                            <div>
                                <div className={Styles.item}>item</div>
                                <div className={Styles.item}>item</div>
                                <div className={Styles.item}>item</div>
                                <div className={Styles.item}>item</div>
                                <div className={Styles.item}>item</div>
                                <div className={Styles.item}>item</div>
                                <div className={Styles.item}>item</div>
                                <div className={Styles.item}>item</div>
                                <div className={Styles.item}>item</div>
                                <div className={Styles.item}>item</div>
                                <div className={Styles.item}>item</div>
                                <div className={Styles.item}>item</div>
                                <div className={Styles.item}>item</div>
                                <div className={Styles.item}>item</div>
                                <div className={Styles.item}>item</div>
                                <div className={Styles.item}>item</div>
                            </div>
                        </div>
                        <div>
                            <div className={Styles.sticky3}>3</div>
                            <div>
                                <div className={Styles.item}>item</div>
                                <div className={Styles.item}>item</div>
                                <div className={Styles.item}>item</div>
                                <div className={Styles.item}>item</div>
                                <div className={Styles.item}>item</div>
                                <div className={Styles.item}>item</div>
                                <div className={Styles.item}>item</div>
                                <div className={Styles.item}>item</div>
                                <div className={Styles.item}>item</div>
                                <div className={Styles.item}>item</div>
                                <div className={Styles.item}>item</div>
                                <div className={Styles.item}>item</div>
                                <div className={Styles.item}>item</div>
                                <div className={Styles.item}>item</div>
                                <div className={Styles.item}>item</div>
                                <div className={Styles.item}>item</div>
                            </div>
                        </div>
                    </div>
                    <div>
                        <div className={Styles.sticky2}>2</div>
                        <div>
                            <div className={Styles.sticky3}>3</div>
                            <div>
                                <div className={Styles.item}>item</div>
                                <div className={Styles.item}>item</div>
                                <div className={Styles.item}>item</div>
                                <div className={Styles.item}>item</div>
                                <div className={Styles.item}>item</div>
                                <div className={Styles.item}>item</div>
                                <div className={Styles.item}>item</div>
                                <div className={Styles.item}>item</div>
                                <div className={Styles.item}>item</div>
                                <div className={Styles.item}>item</div>
                                <div className={Styles.item}>item</div>
                                <div className={Styles.item}>item</div>
                                <div className={Styles.item}>item</div>
                                <div className={Styles.item}>item</div>
                                <div className={Styles.item}>item</div>
                                <div className={Styles.item}>item</div>
                            </div>
                        </div>
                        <div>
                            <div className={Styles.sticky3}>3</div>
                            <div>
                                <div className={Styles.item}>item</div>
                                <div className={Styles.item}>item</div>
                                <div className={Styles.item}>item</div>
                                <div className={Styles.item}>item</div>
                                <div className={Styles.item}>item</div>
                                <div className={Styles.item}>item</div>
                                <div className={Styles.item}>item</div>
                                <div className={Styles.item}>item</div>
                                <div className={Styles.item}>item</div>
                                <div className={Styles.item}>item</div>
                                <div className={Styles.item}>item</div>
                                <div className={Styles.item}>item</div>
                                <div className={Styles.item}>item</div>
                                <div className={Styles.item}>item</div>
                                <div className={Styles.item}>item</div>
                                <div className={Styles.item}>item</div>
                            </div>
                        </div>
                    </div>
                </div>
          */}
        </div>
    );
}
