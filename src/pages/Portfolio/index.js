import React, { useEffect, useState, useCallback } from "react";
import axios from "axios";
import "./stylesPortfolio.css";

const Portfolio = (props) => {
  const [projects, setProjects] = useState([]);
  const [selectedProject, setSelectedProject] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const getProjects = useCallback(async () => {
    try {
      const res = await axios.get(`${props.URL}/projects`);
      setProjects(res.data);
    } catch (err) {
      console.error("Error fetching projects:", err);
    }
  }, [props.URL]);

  useEffect(() => {
    getProjects();
  }, [getProjects]);



  const handleProjectClick = (project) => {
    setSelectedProject(project);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedProject(null);
  };

  return (
    <div className="portfolio">
      <h1>Portfolio</h1>
      <h2> Explore some of our recent projects </h2>
      {isModalOpen && selectedProject && (
        <div className="modal" onClick={closeModal}>
          <div className="modal-content">
            <img
              src={selectedProject.imageUrl}
              alt={selectedProject.name}
              className="modal-image"
            />
            <div className="modal-details">
              <h3>{selectedProject.name}</h3>
              <p>
                <strong>Description:</strong> {selectedProject.description}
              </p>
              <p>
                <strong>Address:</strong> {selectedProject.address}
              </p>
              <p>
                <strong>Year of Construction:</strong> {selectedProject.year}
              </p>
            </div>
          </div>
        </div>
      )}
      <div className="grid">
        {projects.map((project) => (
          <div
            key={project._id} // Assuming each project has a unique _id field
            className="grid-item"
            onClick={() => handleProjectClick(project)}
            style={{
              backgroundImage: `url(${project.imageUrl})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          >
            <div className="title-overlay">
              <h3>{project.name}</h3>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Portfolio;
