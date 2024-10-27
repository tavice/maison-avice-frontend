import React, { useEffect, useState, useCallback } from "react";
import axios from "axios";
import "./stylesPortfolio.css";

//import loading spinner component
import LoadingSpinner from "../../components/loadingSpinner";

const Portfolio = (props) => {
  const [projects, setProjects] = useState([]);
  const [selectedProject, setSelectedProject] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  //fetch images from database
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

  // Check if all project images are loaded

  useEffect(() => {
    // Check if all project images are loaded
    const imagePromises = projects.map((project) => {
      const image = new Image();
      image.src = project.imageUrl;
      return new Promise((resolve) => {
        image.onload = resolve;
        image.onerror = resolve; // Handle image loading errors
      });
    });

    Promise.all(imagePromises)
      .then(() => {
        setIsLoading(false); // All images are loaded
      })
      .catch(() => {
        setIsLoading(false); // In case of loading errors
      });
  }, [projects]);

  //handle click on project
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
      {isLoading ? ( // Render loading spinner if images are still loading
        <LoadingSpinner />
      ) : (
        <>
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
                    <strong>Description:</strong>{" "}
                    <p style={{ fontFamily: "serif" }}>
                      {selectedProject.description}{" "}
                    </p>
                  </p>
                  <p>
                    <strong>Address:</strong>{" "}
                    <p style={{ fontFamily: "serif" }}>
                      {" "}
                      {selectedProject.address}
                    </p>
                  </p>
                  <p>
                    <strong>Year of Construction:</strong>{" "}
                    <p style={{ fontFamily: "serif" }}>
                      {" "}
                      {selectedProject.year}{" "}
                    </p>
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
                  backgroundSize: "contain",
                  backgroundPosition: "center",
                }}
              >
                <div className="title-overlay">
                  <h3>{project.name}</h3>
                </div>
              </div>
            ))}
          </div>
        </>
      )}
    </div>
  );
};

export default Portfolio;
