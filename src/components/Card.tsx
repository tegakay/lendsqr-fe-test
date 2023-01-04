import React from 'react'
import "./Card.scss";
import userIcon from '../icon-user.png'
import userFriends from '../images/user-friends.png'
import userLoan from '../images/user-loan.png'
import userSave from '../images/user-save.png'


interface Props {
  title: string;
  count: string;
  image: string;

}

export const Card = ({title,count,image}:Props) => {
  var dict:any = { users : userIcon , 
    active : userFriends , 
    loans :userLoan,
    savings:userSave
  
  };
  return (
    <div className='card'>
        <div className='card-img'>
            <img src={dict[image]} alt='User Icon' />
        </div>
        <p className='card-img-text'>{title}</p>
        <p className='card-img-text_content'>{count}</p>
    </div>
  )
}
