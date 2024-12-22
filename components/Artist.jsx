import classes from './Artist.module.css'
import Image from 'next/image'

function Artist(props ) {
  return (
    <div className={classes.card}>

      {/* <Image
        src="/artists/kill-chicago.jpg"
        width={500}
        height={500}
        alt="{props.name}"
      /> */}

      <img src={props.img} />

      <h2>{props.name}</h2>

      <p>{props.body}</p>
    </div>
  );
}

export default Artist;