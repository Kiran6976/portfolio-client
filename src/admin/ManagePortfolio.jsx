import { useEffect, useState } from "react";
import api from "../services/api";   // 👈 adjust path if needed
import "../assets/Admin.css";

export default function ManagePortfolio() {
  const [data, setData] = useState([]);
  const [folders, setFolders] = useState([]);
  const [openFolder, setOpenFolder] = useState(null);

  const fetchPortfolio = async () => {
    try {
      const res = await api.get("/portfolio");
      setData(res.data);
    } catch (err) {
      console.error("Error fetching portfolio:", err);
    }
  };

  const fetchFolders = async () => {
    try {
      const res = await api.get("/folders");
      setFolders(res.data);
    } catch (err) {
      console.error("Error fetching folders:", err);
    }
  };

  useEffect(() => {
    fetchPortfolio();
    fetchFolders();
  }, []);

  const getFolderProjects = (folderId) =>
    data.filter(p => p.folderId === folderId);

  const deleteItem = async (id) => {
    if (!window.confirm("Delete this project?")) return;

    try {
      await api.delete(`/admin/portfolio/${id}`, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("adminToken")}`,
        },
      });

      fetchPortfolio();
    } catch (err) {
      console.error("Delete project failed:", err);
    }
  };

  const deleteFolder = async (id) => {
    if (!window.confirm("Delete this folder and all projects?")) return;

    try {
      await api.delete(`/admin/folder/${id}`, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("adminToken")}`,
        },
      });

      fetchFolders();
      fetchPortfolio();
      setOpenFolder(null);
    } catch (err) {
      console.error("Delete folder failed:", err);
    }
  };

  return (
    <div className="manage-portfolio">

      <h2>Manage Folders</h2>

      {/* ===== FOLDER LIST ===== */}
      {!openFolder && (
        <div className="admin-folder-grid">
          {folders.map((f) => (
            <div
              className="admin-folder-card"
              key={f._id}
              onClick={() => setOpenFolder(f)}
            >
              <div className="admin-folder-thumb">
                <img src={f.coverImage} alt={f.name} />
              </div>

              <h4 className="admin-folder-title">{f.name}</h4>
              <p>{getFolderProjects(f._id).length} Projects</p>

              <button
                className="admin-folder-delete"
                onClick={(e) => {
                  e.stopPropagation();
                  deleteFolder(f._id);
                }}
              >
                Delete Folder
              </button>
            </div>
          ))}
        </div>
      )}

      {/* ===== FOLDER PROJECTS ===== */}
      {openFolder && (
        <>
          <button className="back-btn" onClick={() => setOpenFolder(null)}>
            ← Back to folders
          </button>

          <h2>{openFolder.name} Projects</h2>

          <div className="admin-portfolio-grid">
            {getFolderProjects(openFolder._id).map(item => (
              <div className="admin-portfolio-card" key={item._id}>

                <div className="admin-portfolio-img">
                  <img src={item.image} alt={item.title} />
                </div>

                <div className="admin-portfolio-body">
                  <h4>{item.title}</h4>
                </div>

                <button
                  className="admin-delete-btn"
                  onClick={() => deleteItem(item._id)}
                >
                  Delete Project
                </button>

              </div>
            ))}

            {getFolderProjects(openFolder._id).length === 0 && (
              <p style={{ color: "#777" }}>No projects in this folder</p>
            )}
          </div>
        </>
      )}

    </div>
  );
}
