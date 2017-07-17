import React from 'react';
import Star from 'react-icons/lib/fa/star';


const CardDetail = (props) => {

const activeContact = props.activeContact;



  if(!activeContact){
    return <div>...Loading</div>
  }

  return(
    <div className="contact-detail col-md-8 col-md-push-4">
      <div className="list-group">
        <div className='list-group-item row1 row'>
          <div className="col-sm-5 img-div">
            <img className='img-rounded img-responsive' src={activeContact.largeImageURL} width="200px" height="200px" />
          </div>
          <div className="col-sm-6 top-info">
            <h2 className="name">{activeContact.name} <span className="icon"> {(activeContact.favorite ? <Star /> : console.log('noStar'))}</span></h2>
            <div className="company-detail">
              <h4><small>Company: </small></h4>
              <h4>{activeContact.company}</h4>
            </div>
          </div>
        </div>
        <div className='list-group-item row2 row'>
          <div className="col-sm-12">
            <h5><small>Phone: </small></h5>
          </div>
          <div className="col-sm-12">
            <h5>Mobile: {activeContact.phone.mobile}</h5>
            <h5>Home: {activeContact.phone.home}</h5>
            <h5>Work: {activeContact.phone.work}</h5>
          </div>
        </div>
        <div className='list-group-item row3 row'>
          <div className="col-sm-12">
            <h5><small>Address: </small></h5>
          </div>
          <div className="col-sm-12">
            <address>
              <h5>{activeContact.address.street}</h5>
              <h5>{activeContact.address.city}, {activeContact.address.state}</h5>
              <h5>{activeContact.address.zip}</h5>
            </address>
          </div>
        </div>
        <div className='list-group-item row4 row'>
          <div className="col-sm-12">
            <h5><small>Email: </small></h5>
          </div>
          <div className="col-sm-12">
            <h5><a href={"mailto:"+ activeContact.email}>{activeContact.email}</a></h5>
          </div>
        </div>
        <div className='list-group-item row5 row'>
          <div className="col-sm-12">
            <h5><small>Website: </small></h5>
          </div>
          <div className="col-sm-12">
            <h5><a href={activeContact.website}>{activeContact.website}</a></h5>
          </div>
        </div>
        <div className='list-group-item row4 row'>
          <div className="col-sm-12">
            <h5><small>Birthdate: </small></h5>
          </div>
          <div className="col-sm-12">
            <h5>{activeContact.birthdate}</h5>

          </div>
        </div>
      </div>
    </div>
  );
};


export default CardDetail;
