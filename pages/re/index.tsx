import { memo, useState , useEffect, useCallback} from 'react'




 const Apps = memo(function Apps() {
    const [State, setState] = useState([

        { name: 'ali' },
        { name: 'omid' },
        { name: 'hassan' },

    ])


    const [Test, setTest] = useState(false)


    const Additem = () => {
        setState((prev: any) => {
            return [...prev, { name: `you${Math.floor(Math.random() * 434)}` }]
        })
    }


    console.log('parent re-render');
    

  useEffect(() => {
console.log('effect render');

  }, [Test])



  const renderCard = useCallback((name: any) => {
    return (
      <Greeting name={name}  />
      )
  }, [Test])
  




    return (

        <div>


            <button onClick={() => Additem()}>
                Add item
            </button>

            {
                State.map((value: any, index) => {
                    return (
                        // <Items name={value.name} />
              <>
              {renderCard(value.name)}
              </>

                    )
                })
            }

        </div>


    )
  });
  




const Greeting = memo(function Greeting({ name , }:any) {


    const [Randoms, setRandoms] = useState<any>()

    console.log('re-render child');



    const RandomGenrator = ()=>{
        return Math.floor(Math.random() * 4342)

    }

    const RandomM = useCallback(() => {
        setRandoms(Math.floor(Math.random() * 4342))
        // return Math.floor(Math.random() * 4342)
// RandomGenrator()
    }, [])
      

    useEffect(() => {
   
        RandomM()

    }, [])
    


    
    return (
      <h3>Hello, {name}! is random  {Randoms} </h3>
    );
  });
  


export function Items({ name }: any) {

    console.log('re-render');
    
    return (

        <div>
            {name}
        </div>

    )
}


export default Apps