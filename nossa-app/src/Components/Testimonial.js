import React from 'react';

const Testimonial = ({ quote, delay, side }) => {
  return (
    <div className={`col-md-6 mb-5 aos-init aos-animate`} data-aos="fade-{side}" data-aos-delay={delay}>
      <div className="d-flex ms-md-3">
        <span><i className="fas fa-2x fa-quote-left"></i></span>
        <span className="m-2">{quote}</span>
      </div>
    </div>
  );
}

export default Testimonial;