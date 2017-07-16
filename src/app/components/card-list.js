import React from 'react';
import CardListItem from './card-list-item.js'

const CardList = (props) => {
  const contactItems = props.contactList.map((contact, i) => {
    return <CardListItem
            onContactSelect={props.onContactSelect}
            key={contact.name}
            id={i}
            contact={contact}
             />
  });

  return(
    <div className="list">
      <ul className="col-md-4 col-md-pull-8 list-group">
        {contactItems}
      </ul>
    </div>
  )
}


export default CardList;
