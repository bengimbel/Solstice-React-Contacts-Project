import React from 'react';
import Star from 'react-icons/lib/fa/star';

const CardListItem = (props) => {
  const contact = props.contact;
  const onContactSelect = props.onContactSelect;
  console.log(contact);
  const largeImage = contact.largeImageURL;
  const smallImage = contact.smallImageURL;
  return (
    <li onClick={() => onContactSelect(contact)} className=" item-on-list list-group-item">
      <div className="contact-list media">
        <div className='media-left'>
          <img className='media-object img-rounded' src={smallImage} />
        </div>
        <div className="media-body">
          <div className="media-heading">
            <h6>{contact.name} <span className="icon-list"> {(contact.favorite ? <Star /> : console.log('noStar'))}</span></h6>
            <h6><small>{contact.phone.home}</small></h6>

          </div>
        </div>
      </div>
    </li>
  );
};

export default CardListItem;
