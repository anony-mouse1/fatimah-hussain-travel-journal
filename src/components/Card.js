export default function Card(props) {
    return (


        <div className="card">
            <img  className = "card--image" src={`./images/${props.eachCard.imageUrl}`} alt= "photo"/>
  
            <section>
                <img className= "card--location"src="../images/location.png" alt= ""/>
                <span>{props.eachCard.location}</span>
                <span><a href={props.eachCard.googleMapsUrl} target="_blank">View on Google Maps </a> </span>
                <h1>{props.eachCard.title}</h1>
                {props.eachCard.endDate ? <h3>{props.eachCard.startDate} - {props.eachCard.endDate}</h3> : <h3>{props.eachCard.startDate}</h3>}
                <p>{props.eachCard.description}</p>
                
            </section>
        </div>
    )
}

