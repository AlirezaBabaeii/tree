import { ActionButton, Item, Menu, MenuTrigger } from '@adobe/react-spectrum'
import React, { useRef, useState } from 'react'
import { ArrowRight, Threepoint } from '../../components/icons/Icons'
import Styles from '../../styles/order.module.css'
export default function Index() {

  const [Workspace, setWorkspace] = useState<any>([
    { text: 'jim benson', project: [{ name: 'aspaz', instans: [{ id: 'e3274ef' }], isReadOnly: true }, { name: 'salam', instans: [{ id: 'e3274ef' }], isReadOnly: true }], isReadOnly: true }
  ])

  const [ShowInput, setShowInput] = useState<boolean>(false)

  const [ShowInputSub2, setShowInputSub2] = useState<boolean>(false)

  const refrename = useRef<any>([])
  refrename.current = []

  const AddWorkSpace = (event: any) => {
    if (event.key === "Enter") {
      const InputValue = event.target.value
      if (InputValue.length >= 3) {
        setWorkspace((prev: any) => {
          return [
            ...prev,
            { text: InputValue, project: [], isReadOnly: true }
          ]
        })
        setShowInput(false)
      }
    }

  }

  const AddSub2WorkSpace = (event: any, indexArray: number) => {
    if (event.key === "Enter") {
      const InputValue = event.target.value
      if (InputValue.length >= 3) {
        setWorkspace((prev: any) => {
          return prev.map((w: any, index: number) =>
            index === indexArray
              ? {
                ...w,
                project: w.project.concat({
                  name: InputValue,
                  instans: [{ id: Math.floor(Math.random() * 999) }],
                  isReadOnly: true
                }),
              }
              : w,
          );
        });
        setShowInputSub2(false)
        console.log(Workspace);

      }
    }
  }

  const ChnageReadOnly = (index: number, ActionType: string) => {
    if (ActionType === 'edit') {
      let newArr = Workspace.map((item: any, i: number) => {
        if (i === index) {
          return { ...item, isReadOnly: false };
        } else {
          return item;
        }
      });
      setWorkspace(newArr);
      console.log(Workspace);
    } if (ActionType === 'delete') {

      DeletedProject(index)

    } else {
      console.log('default');

    }
  };

  const Renameproject = (event: any, index: number) => {
    const InputValue = event.target.value
    if (event.key === "Enter" && InputValue.length >= 1) {
      let newArr = Workspace.map((item: any, i: number) => {
        if (i === index) {
          return { ...item, name: InputValue, isReadOnly: true };
        } else {
          return item;
        }
      });
      setWorkspace(newArr);
    } else return

  }


  const DeletedProject = (index: number) => {
    setWorkspace((prev: any) => {
      return [
        ...prev.filter((item: any, i: number) => i !== index)
      ]
    })
  }

  const DeletSub2andReadOnlyFalse = (Acctiontype: string, indexarray: number, indexsub2: number) => {

    if (Acctiontype === 'delete') {
      setWorkspace((prev: any) => {
        return prev.map((value: any, index: number) => {
          if (index == indexarray) {
            return {
              ...value,
              project: value.project.filter((item: any, i: number) => {
                return i !== indexsub2
              })
            }
          } else {
            return value
          }
        })
      })
    }

    else if (Acctiontype === 'edit') {
      setWorkspace((prev: any) => {
        return prev.map((value: any, index: number) => {
          if (index == indexarray) {
            const project = value.project.map((x: any, i: number) => i === indexsub2 ? { ...x, isReadOnly: false } : x)
            return {
              ...value,
              project
            };
          } else {
            return value
          }
        });
      });

    }
  }


  const ReanemSub2 = (event: any, indexarray: number, indexsub2: number) => {

    if (event.key === "Enter") {
      const InputValue = event.target.value
      if (InputValue.length >= 1) {

        setWorkspace((prev: any) => {
          return prev.map((value: any, index: number) => {
            if (index == indexarray) {
              const project = value.project.map((x: any, i: number) => i === indexsub2 ? { ...x, name: InputValue, isReadOnly: true } : x)
              return {
                ...value,
                project
              };
            } else {
              return value
            }
          });
        });
      }

    }


  }


  const CreateRef = (refs: any) => {
    if (refs && refrename.current) {
      refrename.current.push(refs)
    }
  }

  const CanceleRef = () => {
    for (let index = 0; index < refrename.current.length; index++) {

      refrename.current[index].readOnly = true

    }
  }

  React.useEffect(() => {
    const handleEsc = (event: any) => {
      if (event.keyCode === 27) {
        console.log('Close')
      }
    };
    window.addEventListener('keydown', handleEsc);

    return () => {
      window.removeEventListener('keydown', handleEsc);
    };
  }, []);

  return (
    <>
      <button onClick={CanceleRef}>Test</button>
      <div role="banner" className={Styles.divs}>
        <nav className={Styles.nav} role="navigation">
          <ul className={Styles.nav__list}>


            <li key={1} className={Styles.Wrapperitem}>
              <input id={`group-${1}`} type="checkbox" hidden />
              <label htmlFor={`group-${1}`} className={Styles.label3}>
                <div className={Styles.text_icon_container}>
                  <span className={Styles.icon}>
                    <ArrowRight />
                  </span>
                  <input className={Styles.Inputnameproject} type="text" ref={CreateRef} defaultValue={'dffdf'} readOnly={true} />
                </div>



              </label>


              <ul className={Styles.group_list}>

                <li key={2}>
                  <input id={`sub-group-${2 + 3 * 210 / 2}`} type="checkbox" hidden />
                  <label htmlFor={`sub-group-${2 + 3 * 210 / 2}`} className={Styles.Sub2item}>
                    <div>
                      <span className={Styles.icon}>
                        <ArrowRight />
                      </span>

                      <input className={Styles.Inputnameproject} type="text" ref={CreateRef} defaultValue={'dffdf'} readOnly={true} />
                    </div>

                  </label>
                  <ul className={Styles.sub_group_list}>
                    <li key={4}><a className={Styles.TagA} href="#">ides</a></li>
                  </ul>
                </li>

              </ul>


              <ul className={Styles.group_list}>

                <li key={4}>
                  <input id={`sub-group-${2 + 4 * 210 / 2}`} type="checkbox" hidden />
                  <label htmlFor={`sub-group-${2 + 4 * 210 / 2}`} className={Styles.Sub2item}>
                    <div>
                      <span className={Styles.icon}>
                        <ArrowRight />
                      </span>

                      <input className={Styles.Inputnameproject} type="text" ref={CreateRef} defaultValue={'dffdf'} readOnly={true} />
                    </div>

                  </label>
                  <ul className={Styles.sub_group_list}>
                    <li key={5}><a className={Styles.TagA} href="#">ides</a></li>
                  </ul>
                </li>

              </ul>

            </li>





            {
              ShowInput ? <div className={Styles.InputWrapper}> <input style={{}} autoFocus placeholder="enter project name" onKeyDown={AddWorkSpace} /></div> : ''
            }
            <div className={Styles.Wrapperadditem}>
              <h4 style={{ color: 'white', width: '20px', height: '32px' }} onClick={() => setShowInput(true)}>+</h4>
            </div>

          </ul>
        </nav>

      </div>

    </>
  )
}
