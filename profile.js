import React from 'react';
import "./profile.css";
import photo from "./3135823.png"

const Details =(props) =>{
  return(
    <>
    <h3 className='name'> Username : {props.username}</h3>
    <h2 className='conatct'> Contact Details</h2>
    <h3 className='no'>Number : {props.number}</h3>
    <h3 className='address'>Address : {props.address}</h3>
    </>
  )
}

const Profile =() => {
  return(
    <>
    <div className='headergoeshere'></div>
    <p>Account Details</p>
    <div className='container'>
    <div className='left_container'> 
      
      
      < Details username={'Kabita'} number={9827402730} address={'Greenland, Tokha'}/>
      <button type="submit" className="update">Update Profile</button>

      


    </div>
    <div className='right_container'>Right Side
    <div className='boook1'>Book1</div>
    <div className='boook2'>Book2</div>
    <button type="submit" className="edit">Edit posts</button>

    </div>
    <div className='photo'> 
    <img src={photo} alt="profilepic"/>
    
    </div>
    <div className='Uploads'>Uploads by Kubs</div>
    <div><button type="submit" className="addbook">Add new book</button></div>
    </div>

    </>
  );
}
 
export default Profile;
