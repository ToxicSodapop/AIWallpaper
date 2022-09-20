import { imageData } from "./Images";
import styles from '../styles/Home.module.scss'
import Image from 'next/future/image'

export default function Images() {
  return (<>
    <div id={styles.images}>
      {imageData.map((data, key) => {
        return (
          <article style={{gridColumn: data.gridColumn, gridRow: data.gridRow}} key={key}>
            <Image src={data.img}/>
            <a href={data.img} download><img src="/media/download.svg" className={styles.imgDownload}/></a>
            <div>
              <h3>"{data.prompt}"</h3>
              <h4>{data.author} & {data.ai}</h4>
              {/* <p>{data.notes}</p> */}
            </div>
          </article>
        )
      })}
    </div>
  </>)
}