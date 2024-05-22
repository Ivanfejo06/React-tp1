import React from 'react';

const EducationCard = ({ title, institution, date, description, delay }) => {
  return (
    <div className="col-md-6">
      <div className="cardd mb-3 aos-init aos-animate" data-aos="fade-right" data-aos-delay={delay}>
        <div className="cardd-header px-3 py-2">
          <div className="d-flex justify-content-between">
            <div>
              <h3 className="h5 mb-1">{title}</h3>
              <div className="text-muted text-small">{institution} <small>({date})</small></div>
            </div>
          </div>
        </div>
        <div className="cardd-body px-3 py-2">
          <p>{description}</p>
        </div>
      </div>
    </div>
  );
}

export default EducationCard;