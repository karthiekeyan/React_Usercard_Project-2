const userData = [
    {
        name: "jake Sully",
        city: "USA",
        description: "Front End Developer",
        skills: ["UI /UX","Front End Developer","Html","Css","JavaScript","React",],
        online: true,
        profile: "images/img 1.jpg"  
    },
    {
        name: "Neytri",
        city: "USA",
        description: "Back End Developer",
        skills: ["Back End Developer","Java","SQL","JavaScript","React",],
        online: false,
        profile: "images/img 2.jpg"  
    },
    {
        name: "Kiri",
        city: "USA",
        description: "React Developer",
        skills: ["Bootstrap","React Developer","Html","Css","JavaScript","React",],
        online: true,
        profile: "images/img 3.jpg"  
    },
];


function User(props) {
    return <div className="card-container">
        <span className= {props.online? "pro online" : "pro offline"}  
        >
        {props.online? "ONLINE" : "OFFLINE"}</span>
        <img src={props.profile} className="img" alt="user" />
        <h3>{props.name}</h3>
        <h4>{props.city}</h4>
        <p>{props.description}</p>
        <div className="buttons">
            <button className="primary">Message</button>
            <button className="primary outline">Following</button>
        </div>
        <div className="skills">
            <h6>Skills</h6>
            <ul>
                {props.skills.map((skill,index)=>(<li key={index}>{skill}</li>))}
            </ul>
        </div>
    </div>
}
const UserCard = () => {
  return (
    <>
    {userData.map((user,index)=>(
        <User key={index} 
        name={user.name}
        city={user.city} 
        description={user.description} 
        online={user.online}
        profile={user.profile} 
        skills={user.skills}/>
    ))}
    </>
  )
}

// <User name ="jack Sully" city="USA" description="Front End Developer" skills={["UI /UX",
// "Front End Developer","Html","Css","JavaScript","React",]} online={true} profile="images/img 1.jpg"/>  
//   )

export default UserCard
