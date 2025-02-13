import React, { useState, useEffect } from "react";
import { Plus, Info, Edit, Trash } from "lucide-react";
import {
  getProjects,
  addProjects,
  updateProjects,
  deleteprojects,
} from "../services/projectServices";
import NavBar from "../components/NavBar";
import Sidebar from "../components/Sidebar";

const Project = () => {
  const [projects, setProjects] = useState([]);
  const [selectedProject, setSelectedProject] = useState(null);
  const [isAddingOrEditing, setIsAddingOrEditing] = useState(false);
  const [currentProject, setCurrentProject] = useState({
    title: "",
    description: "",
    techStack: "",
    imageUrl: "",
    link: "",
  });

  useEffect(() => {
    fetchProjects();
  }, []);

  const fetchProjects = async () => {
    try {
      const data = await getProjects();
      setProjects(data); // Add this line to update state
    } catch (error) {
      console.log("Error fetching projects:", error);
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setCurrentProject({ ...currentProject, [name]: value });
  };

  const handleAddProject = () => {
    setCurrentProject({
      title: "",
      description: "",
      techStack: "",
      imageUrl: "",
      link: "",
    });
    setIsAddingOrEditing(true);
  };

  const handleEditProject = (project) => {
    setCurrentProject(project);
    setIsAddingOrEditing(true);
  };

  const handleDeleteProject = async (id) => {
    try {
      await deleteprojects(id);
      fetchProjects();
    } catch (error) {
      console.error("Error deleting project:", error);
    }
  };

  const handleSaveProject = async (e) => {
    e.preventDefault();
    try {
      if (currentProject.projectId) {
        await updateProjects(currentProject.projectId, currentProject);
      } else {
        await addProjects(currentProject);
      }
      fetchProjects();
      setIsAddingOrEditing(false);
    } catch (error) {
      console.error("Error saving project:", error);
    }
  };

  const handleShowDetails = (project) => {
    setSelectedProject(project);
  };

  const resetView = () => {
    setIsAddingOrEditing(false);
    setSelectedProject(null);
  };

  const handleFileChange = (e, fieldName) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setCurrentProject((prev) => ({
          ...prev,
          [fieldName]: reader.result,
        }));
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div className="flex h-screen">
      <div className="w-64 bg-gray-800 text-white fixed top-0 left-0 h-full">
        <Sidebar />
      </div>

      <div className="flex-1 ml-64">
        <div className="fixed top-0 left-64 right-0 h-16 bg-gray-800 text-white flex items-center px-4">
          <NavBar />
        </div>

        <div className="mt-16 p-6">
          <h1 className="text-3xl font-bold mb-4">Projects</h1>

          {isAddingOrEditing ? (
            <form
              onSubmit={handleSaveProject}
              className="bg-gray-800 text-white p-4 rounded"
            >
              <h3 className="text-xl font-bold mb-4">
                {currentProject.projectId ? "Edit Project" : "Add New Project"}
              </h3>
              <div className="mb-4">
                <label className="block">Project Title:</label>
                <input
                  type="text"
                  name="title"
                  value={currentProject.title}
                  onChange={handleInputChange}
                  required
                  className="w-full p-2 rounded bg-gray-700 text-white"
                />
              </div>
              <div className="mb-4">
                <label className="block">Description:</label>
                <textarea
                  name="description"
                  value={currentProject.description}
                  onChange={handleInputChange}
                  required
                  className="w-full p-2 rounded bg-gray-700 text-white"
                />
              </div>
              <div className="mb-4">
                <label className="block">Tech Stack:</label>
                <input
                  type="text"
                  name="techStack"
                  value={currentProject.techStack}
                  onChange={handleInputChange}
                  className="w-full p-2 rounded bg-gray-700 text-white"
                />
              </div>
              <div className="mb-4">
                <label className="block">Image URL:</label>
                <input
                  type="file"
                  accept="image/*"
                  name="imageUrl"
                  // value={currentProject.imageUrl}
                  onChange={(e) => handleFileChange(e, "imageUrl")}
                  className="w-full p-2 rounded bg-gray-700 text-white"
                />
                {currentProject.imageUrl && (
                  <img
                    src={currentProject.imageUrl}
                    alt="Preview"
                    className="mt-2 h-32"
                  />
                )}
              </div>
              <div className="mb-4">
                <label className="block">Link:</label>
                <input
                  type="file"
                  name="link"
                  // value={currentProject.link}
                  onChange={(e) => handleFileChange(e, "link")}
                  className="w-full p-2 rounded bg-gray-700 text-white"
                />
                {currentProject.link && (
                  <p className="mt-2 text-blue-400">{currentProject.link}</p>
                )}
              </div>
              <button
                type="submit"
                className="bg-green-600 hover:bg-green-700 p-2 rounded"
              >
                Save Project
              </button>
              <button
                type="button"
                onClick={resetView}
                className="ml-4 bg-gray-600 hover:bg-gray-700 p-2 rounded"
              >
                Cancel
              </button>
            </form>
          ) : selectedProject ? (
            <div className="bg-gray-800 text-white p-4 rounded">
              <h3 className="text-xl font-bold mb-2">
                {selectedProject.title}
              </h3>
              <p className="mb-2">
                <strong>Description:</strong> {selectedProject.description}
              </p>
              <p className="mb-2">
                <strong>Tech Stack:</strong> {selectedProject.techStack}
              </p>
              <p className="mb-2">
                <strong>Link:</strong>{" "}
                <a
                  href={selectedProject.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-400"
                >
                  {selectedProject.link}
                </a>
              </p>
              <button
                onClick={resetView}
                className="mt-4 bg-gray-600 hover:bg-gray-700 p-2 rounded"
              >
                Back to List
              </button>
            </div>
          ) : (
            <div className="my-8 bg-gray-900 p-6 rounded shadow-lg">
              <button
                onClick={handleAddProject}
                className="mb-4 flex items-center bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded"
              >
                <Plus className="mr-2 w-5 h-5" />
                Add New Project
              </button>
              <table className="w-full bg-gray-800 text-gray-200 border border-gray-700 rounded-md overflow-hidden">
                <thead className="bg-gray-700">
                  <tr>
                    <th className="border-b border-gray-600 p-3 text-left">
                      Project Title
                    </th>
                    <th className="border-b border-gray-600 p-3 text-left">
                      Actions
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {projects.map((project) => (
                    <tr
                      key={project.projectId}
                      className="hover:bg-gray-700 transition-colors"
                    >
                      <td className="border-b border-gray-700 p-3">
                        {project.title}
                      </td>
                      <td className="border-b border-gray-700 p-3 flex space-x-2">
                        <button
                          onClick={() => handleShowDetails(project)}
                          className="flex items-center bg-green-500 hover:bg-green-600 text-white font-medium py-1 px-3 rounded"
                        >
                          <Info className="mr-1 w-4 h-4" />
                          Details
                        </button>
                        <button
                          onClick={() => handleEditProject(project)}
                          className="flex items-center bg-yellow-500 hover:bg-yellow-600 text-white font-medium py-1 px-3 rounded"
                        >
                          <Edit className="mr-1 w-4 h-4" />
                          Edit
                        </button>
                        <button
                          onClick={() => handleDeleteProject(project.projectId)}
                          className="flex items-center bg-red-500 hover:bg-red-600 text-white font-medium py-1 px-3 rounded"
                        >
                          <Trash className="mr-1 w-4 h-4" />
                          Delete
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Project;
