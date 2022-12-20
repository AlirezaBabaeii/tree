import Head from 'next/head'
import Image from 'next/image'
// import { ArrowRight } from '../components/icons/ArrowRight'
import Styles from '../styles/Dashbord.module.scss'

export default function Home() {
  const Arr = [1, 2, 3, 4, 5]
  return (
    <div className={Styles.Wrapper}>
      {/* <div className={Styles.Accarduion}>
        <div className={Styles.AccarduionContainer}>
          <div className={Styles.AccarduionInside}>
            <span><ArrowRight/></span> <div className={Styles.Text}>Workspace</div>
          </div>
        </div>
      </div>
      <div>main</div> */}
    </div>
  )
}
