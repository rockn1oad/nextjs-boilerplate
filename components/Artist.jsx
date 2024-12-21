import classes from './Artist.module.css'
import Image from 'next/image'

function Artist(props ) {
  return (
    <div className={classes.card}>

      <Image
        src="/artists/`{props.img}`"
        width={500}
        height={500}
        alt="{props.name}"
      />

      <h2>{props.name}</h2>
    </div>
  );
}

export default Artist;