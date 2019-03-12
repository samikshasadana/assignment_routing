import React from 'react';
import '../App.css';

const Info = (props) => {
    const { infos, deleteInfo } = props; 

    const infoList = infos.map( info => {
      
      return (
        <div className='card'>
            <div className='card-content center a1' key={info.id}>
              <div> <b>Name:</b> { info.name } </div>
              <div> <b>Birthday:</b> { info.birthday } </div>
              <div> <b>About Me:</b> { info.aboutMe } </div><br />
               <button className='del' onClick={()=>{deleteInfo(info.id)}}> Delete </button>
            </div>
        </div>
      )
    });

    return(
      <div className='infos'>
        { infoList }
      </div>
    )
  }

export default Info;
