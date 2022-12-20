import Styles from "../../styles/Test.module.css";
import React, { useState, useContext, useRef, createContext, useEffect, useReducer, useCallback } from "react";
import { Add, ArrowRight, Delete, Edite, Treepoint } from "../../components/icons/Icons";

import { ActionButton, Item, Menu, MenuTrigger, Text } from "@adobe/react-spectrum";
import axios from "axios";
export const DataContext = createContext<any>(null)
export const SeelectItem  = createContext<any>(null)


    function SendData(args:any) {

                const Data = {
                    data:args
                }
               
                // axios.put('http://10.10.1.191:5000/api/v1/agencies/639b10d63659e2f7d07ae426/projects/639b11b83659e2f7d07ae427',Data).then((res =>{
                //     console.log(res);
                    
                // }))
                
            }


    const UpdaterArray = (arg:any,value:any)=>{
        console.log(value);
        

        return [...arg , value]

    }



    function removeWithKey(arr: any, id: any) {
        return arr.filter((a: any) => a.id !== id).map((e: any) => {
            return { ...e, children: removeWithKey(e.children || [], id) }
        });
    }
    

    const reducer = (state:any , acction:any)=>{

        switch (acction.type) {
            case 'Addtoarray':

            const Result = UpdaterArray(state, acction.payload)
            SendData(Result)
            return Result

            case 'Delete': 
            
            const ResultDelate = removeWithKey(state,acction.payload)
            SendData(ResultDelate)
            return ResultDelate

            case 'Edite':

            const ResultUpdate = update(state,acction.payload.id,{label:acction.payload.label})
            SendData(ResultUpdate)
            return ResultUpdate
            case 'Addchilds':

            const ResultAddchilds = Additem(state,acction.payload.id,{label:acction.payload.label})
                  SendData(ResultAddchilds)
            return ResultAddchilds

            case 'getfirstdata':

            return [...acction.payload]

            default:
               return state
        }

    }



    var Data =
    [
        {
            id: 'Omid',
            label: "A",

            children: [
                {
                    id: 'testid2',
                    label: "AA",
                    children: [
                        {
                            id: 'testi3',
                            label: "AAA",
                            children: [
                                {
                                    id: 'testid4',
                                    label: "AAAA",
                                    children: [
                                        {
                                            id: 'testid54',
                                            label: "AAAAA",

                                            children: [{
                                                id: 'testid545',
                                                label: "childs aaaa",

                                                children: [
                                                    {
                                                        id: 'testid67',
                                                        label: "childs> a",

                                                        children: [],
                                                    },
                                                    {
                                                        id: 'testid778',
                                                        label: "childs  > aa",

                                                        children: [
                                                            {
                                                                id: 'testid221',
                                                                label: "childs> aaa",

                                                                children: [
                                                                    {
                                                                        id: 'testid5446',
                                                                        label: "childs > b",

                                                                        children: [
                                                                            {
                                                                                id: 'testid878',
                                                                                label: "bb > bb",

                                                                                children: [
                                                                                    {
                                                                                        id: 'testid354',
                                                                                        label: "bbb > bbb",

                                                                                        children: [
                                                                                            {
                                                                                                id: 'testid454',
                                                                                                label: "bbbb > bbbb",

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
                                                id: 'testid993',
                                                label: "childs 2 aaaaaa",
                                                children: [],
                                            },],
                                        },
                                        {
                                            id: 'testid633',
                                            label: "BBBBB",
                                            children: [],
                                        },
                                    ],
                                },
                                {
                                    id: 'testid5',
                                    label: "BBBB",
                                    children: [
                                        {
                                            id: 'testid6',
                                            label: "AAAAA",
                                            children: [],
                                        },
                                        {
                                            id: 'testid7',
                                            label: "BBBBB",
                                            children: [],
                                        },
                                    ],
                                },
                            ],
                        },
                        {
                            id: 'testid8',
                            label: "BBB",
                            children: [
                                {
                                    id: 'testid9',
                                    label: "AAAA",
                                    children: [
                                        {
                                            id: 'testid10',
                                            label: "AAAAA",
                                            children: [],
                                        },
                                        {
                                            id: 'testid11',
                                            label: "BBBBB",
                                            children: [],
                                        },
                                    ],
                                },
                                {
                                    id: 'testid12',
                                    label: "BBBB",
                                    children: [
                                        {
                                            id: 'testid13',
                                            label: "AAAAA",
                                            children: [],
                                        },
                                        {
                                            id: 'testid14',
                                            label: "BBBBB",
                                            children: [],
                                        },
                                    ],
                                },
                            ],
                        },
                    ],
                },
                {
                    id: 'testid15',
                    label: "BB",
                    children: [
                        {
                            id: 'testid16',
                            label: "AAA",
                            children: [
                                {
                                    id: 'testid17',
                                    label: "AAAA",
                                    children: [
                                        {
                                            id: 'testid18',
                                            label: "AAAAA",
                                            children: [],
                                        },
                                        {
                                            id: 'testid19',
                                            label: "BBBBB",
                                            children: [],
                                        },
                                    ],
                                },
                                {
                                    id: 'testid20',
                                    label: "BBBB",
                                    children: [
                                        {
                                            id: 'testid21',
                                            label: "AAAAA",
                                            children: [],
                                        },
                                        {
                                            id: 'testid22',
                                            label: "BBBBB",
                                            children: [],
                                        },
                                    ],
                                },
                            ],
                        },
                        {
                            id: 'testid23',
                            label: "BBB",
                            children: [
                                {
                                    id: 'testid24',
                                    label: "AAAA",
                                    children: [
                                        {
                                            id: 'testid25',
                                            label: "AAAAA",
                                            children: [],
                                        },
                                        {
                                            id: 'testid26',
                                            label: "BBBBB",
                                            children: [],
                                        },
                                    ],
                                },
                                {
                                    id: 'testid27',
                                    label: "BBBB",
                                    children: [
                                        {
                                            id: 'testid28',
                                            label: "AAAAA",
                                            children: [],
                                        },
                                        {
                                            id: 'testid29',
                                            label: "BBBBB",
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

    ]


export default function MapApp() {

    const [ItemAccardons, setItemAccardons] = useState([
        {name:'Tree',data:Data},
        {name:'Factor',data:[]},
        {name:'Door partion',data:Data},
    ])


    const [dataSelected, setdataSelected] = useState<any>()

    const GetTreeData = async ()=>{
       
       
       const {data} = await axios.get('http://10.10.1.191:5000/api/v1/agencies/639b10d63659e2f7d07ae426/projects/639b11b83659e2f7d07ae427')

         
       
        // dispatch({type:'getfirstdata',payload:data.data})
    }

    useEffect(() => {
        // GetTreeData()
        // if(dataSelected){
        //     console.log(dataSelected , 'this haved');
            
        // }
    }, [])
    


console.log('render parent');


    return (
        <>
           <SeelectItem.Provider value={[dataSelected,setdataSelected]}>
            <div className={Styles.main}>

                <div className={Styles.container}>
                    <div style={{ width: 'max-content', minWidth: '100%' }}>

                        {
                            ItemAccardons.map((value: any, index: number) => {
                                return (
                                    <div key={index}>
                                        <Accardonmenu title={value.name} data={value.data} />
                                    </div>
                                )
                            })
                        }

                    </div>
                </div>



                <div style={{ width: '100%', height: '100vh' }}>

{dataSelected?.id}
                </div>


            </div>
            </SeelectItem.Provider>
        </>

    );
}







export function Accardonmenu({ title, data }: any) {

    const [state, dispatch] = useReducer<React.Reducer<any, any>>(reducer, data)


    const [isOpen, setisOpen] = useState(false)

    const [isAdditemArray, setAdditemArray] = useState(false)

    const [isChecked, setisChecked] = useState(false)


    const [dataSelected,setdataSelected] = useContext(SeelectItem)!;


    const RefInputaddArray = useRef<any>()

    const RefInputLabel = useRef<any>()

    const AddnewItemArray = (event: React.KeyboardEvent<HTMLInputElement | EventTarget>) => {

        if (event.code != 'Enter') return;

        dispatch({ type: 'Addtoarray', payload: { label: RefInputaddArray.current.value, id: Math.floor(Math.random() * 7323).toString(), children: [] } })

        setAdditemArray(false)

    }



    const RandomidForlabe = Math.floor(Math.random() * 93223)



    const Handeleventopencloselabel = ()=>{
        setisOpen(!isOpen)
        
    }

    const Testhandelconflit = (e:any)=>{
    setisChecked(true)

        setAdditemArray(true)
    }




    function FindItem(data:any ,  id:any ) {    
        let FindItemd = false;
    
        const map = (item:any) => {
            if (FindItemd)
                return item;
    
            if (item.id === id) {
                FindItemd = true;
                setdataSelected(item)
                // console.log();
                
                // Results = item
            }
    
            if (item.children)
                return {
                    ...item,
                    children: item.children.map(map),
                };
    
        };
    
    
        return data.map(map);
    }


    

    const FindedId = useCallback((Data:any , id:any) => {

        FindItem(Data,id);
        // return Math.floor(Math.random() * 4342)
// RandomGenrator()
    }, [])
    


    const Finditemdata = (id:any)=>{
        
        console.log(id , 'this id');

        // FindedId(Data,id)
        
    }


    console.log('render accardon');


    useEffect(() => {
    
console.log(dataSelected , 'tgis se');

    }, [dataSelected])
    



    return (
        <DataContext.Provider value={[dispatch]}>
            <div className={Styles.WrapperTreeitem}>

                <label htmlFor={`input-${RandomidForlabe}`} className={Styles.labelwrapper} onClick={() => Handeleventopencloselabel()}>

                    <ArrowRight isOpen={isOpen} />

                    <div className={Styles.divs}>{title}</div>

                    <label className={Styles.Treepointcontainer} style={{right:'0px'}} onClick={(e) => Testhandelconflit(e)}>
                        <Add />
                    </label>

                </label>

                   </div>
           
                <input className={Styles.Accardonmenu} ref={RefInputLabel}  defaultChecked={isChecked} id={`input-${RandomidForlabe}`} type="checkbox" />


                <div>
                {isAdditemArray && <div className={Styles.item_wrapper}>

                    <Add />

                    <input autoFocus className={Styles.AdditemInput} placeholder="Enter project name" ref={RefInputaddArray} onKeyUp={(e) => AddnewItemArray(e)} />
                </div>}

                    {
                        state?.map((item: any) => {
                            
                            return (
                                <>
                                    <Items data={item} id key={Math.floor(Math.random() * 4342)} finddata={Finditemdata} />

                                </>
                            )

                        })
                    }
                </div>

         
        </DataContext.Provider>
    )
}





function Items({ data, level = 0, id , finddata }: ItemParam): JSX.Element {



    const [isOpen, setOpen] = useState<boolean>(false);

    const [isEdite, setEdite] = useState(false)
    const [isAdditem, setAdditem] = useState(false)

    const [Randoms, setRandoms] = useState<any>()



    const [Additemforemptitem, setAdditemforemptitem] = useState<any>(true)

    const RefInputReanem = useRef<any>()
    const RefInputAdditem = useRef<any>()


    const RefInputLabel = useRef<any>()

    const [dispatch] = useContext(DataContext)!;


    const RandomidForlabe = Math.floor(Math.random() * 93223)


    function handleToggle() 
    
    { 
    
        setOpen(!isOpen);
        finddata(id)
        if(data.children.length == 0){
            setAdditemforemptitem(!Additemforemptitem)
        }

    }

    const Listenerkeymenu = (evant: string | any) => {
        if (evant === "Edite") {
            setEdite(true)
        }
        if (evant === "Add") {
            setAdditem(true)
        }

        if (evant === "Delete") {

            dispatch({type:'Delete',payload:data.id})

        }

    }

    const RenameItem = (event: React.KeyboardEvent<HTMLInputElement | EventTarget>, id: string | any) => {
        if (event.code != 'Enter') return;

        dispatch({type:'Edite', payload:{id:id,label:String(RefInputReanem.current.value)} })

        setEdite(false)

    }


    const AddNewItem = (event: React.KeyboardEvent<HTMLInputElement | EventTarget>, id: string | any) => {

        if (event.code != 'Enter') return;

        false
        dispatch({type:'Addchilds',payload:{id:id,label:RefInputAdditem.current.value}})

        setAdditem(false)

    }




    console.log('render item');


    const RandomM = useCallback(() => {
        setRandoms(Math.floor(Math.random() * 4342))
        // return Math.floor(Math.random() * 4342)
// RandomGenrator()
    }, [])

    useEffect(() => {
        RandomM()
      if(data.children.length == 0){
        setAdditemforemptitem(false)
      }
    }, [])
    

const OpenAddChilds = ()=>{

    if(RefInputLabel.current.checked == false){
        RefInputLabel.current.checked = true
        setOpen(!isOpen)
        
    }
    setAdditem(true)

    
}


    return (
        <>

            <div className={Styles.Parent_wapper} style={{ height: data.children.length == 0 && isAdditem ? '4rem' : '' }}>

                <div className={Styles.item_wrapper} style={{ paddingLeft: level * 15, zIndex: 100 - level, top: data.children.length != 0 ? level * 32 : '', position: data.children.length != 0 ? 'sticky' : 'relative' }}>

                    <label htmlFor={`input-${Randoms}`} className={Styles.labelwrapper} onClick={handleToggle}>

                       <ArrowRight isOpen={isOpen} />

                        {isEdite ? <input defaultValue={data.label} autoFocus className={Styles.RenameInput} ref={RefInputReanem} onKeyUp={(e: React.KeyboardEvent<HTMLInputElement>) => RenameItem(e, data.id)} /> : <div className={Styles.divs}> {data.label} </div>}

                    </label>


                   <span className={Styles.Treepointcontainer} onClick={()=> OpenAddChilds()}>
                    <Add/>
                   </span>

                    <MenuTrigger >
                        <ActionButton aria-label="Actions"  UNSAFE_className={Styles.Treepointcontainer} position="sticky" right="0px" zIndex={100}   >


                            <Treepoint />


                        </ActionButton>

                        <Menu UNSAFE_className={Styles.MenuItems} onAction={(event: string | any) => Listenerkeymenu(event)}>
                            <Item key="Edite" textValue="Edite">
                                <Text UNSAFE_className={Styles.Itemmenu_Container}> <Edite />  Edite</Text>
                            </Item >
                            <Item key="Delete" textValue="Delete">
                                <Text UNSAFE_className={Styles.Itemmenu_Container} > <Delete />  Delete </Text>
                            </Item>
                            <Item key="Add" textValue="Add">
                                <Text UNSAFE_className={Styles.Itemmenu_Container} > <Add />  Add item</Text>
                            </Item>
                        </Menu>
                    </MenuTrigger>
                </div>

     
                    <input className={Styles.inputs} ref={RefInputLabel} id={`input-${Randoms}`} type="checkbox" />
         

                        {isAdditem &&  <div className={Styles.item_wrapper} style={{paddingLeft: (level + 1) * 15}}>
                                
                                 <Add/>              
            
                                  <input autoFocus className={Styles.AdditemInput} placeholder="Enter project name" ref={RefInputAdditem} onKeyUp={(e: React.KeyboardEvent<HTMLInputElement>) => AddNewItem(e, data.id)} />
                        </div>}
                
                {data.children.map((value: any, index: number) => (
                    <Items key={index} data={value} level={level + 1} id={data.id} finddata={finddata} />
                ))}




            </div>

        </>
    );
}




function update(data: any, id: any, value: { label: string; }) {    
    let updated = false;

    const map = (item: any) => {
        if (updated)
            return item;

        if (item.id === id) {
            updated = true;

            return { ...item, ...value }; //rename item

            // return { ...item, childs: [...item.childs, { name: "appel", id: "kive" }] }; // add new item
        }

        if (item.children)
            return {
                ...item,
                children: item.children.map(map),
            };

    };


    return data.map(map);
}


function Additem(data: any, id: any, value: { label: string; }) {
    let updated = false;

    const map = (item: any) => {
        if (updated)
            return item;

        if (item.id === id) {
            updated = true;
            return { ...item, children: [...item.children, { label: value.label, id: Math.floor(Math.random() * 7323).toString(), children: [] }] }; // add new item

        }

        if (item.children)
            return {
                ...item,
                children: item.children.map(map),
            };

    };


    return data.map(map);
}






type ItemParam = { data: DataType; level?: number; id: string | any , finddata:Function | any };
type DataType = { id?: string | any, label: string; children: Array<DataType & { id?: string }>; };


