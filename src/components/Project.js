import React from 'react';
import PropTypes from 'prop-types';

const Project = ({ title, description, image, video }) => (
  <div className="project">
    <h2>{title}</h2>
    <p>{description}</p>
    {image && <img src={image} alt={title} />}
    {video && <video controls>
      <source src={video} type="video/mp4" />
      Your browser does not support the video tag.
    </video>}
  </div>
);

Project.propTypes = {
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    image: PropTypes.string,
    video: PropTypes.string,
  };

export default Project;
