import React from 'react';

const ServiceCard = ({ imgSrc, imgAlt, title, delay }) => {
  return (
    <div className="col-md-3 text-center aos-init aos-animate" data-aos="fade-up" data-aos-delay={delay}>
      <img className="mb-2" src={imgSrc} width="96" height="96" alt={imgAlt} />
      <div className="h5">{title}</div>
    </div>
  );
}

export default ServiceCard;