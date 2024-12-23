import classes from './Artist.module.css'

function Artist(props ) {
  return (
    <div className={classes.card}>

      <img src={props.img} alt="{props.name}"/>

      <h2>{props.name}</h2>

      <p>{props.body}</p>
    </div>
  );
}

export default Artist;