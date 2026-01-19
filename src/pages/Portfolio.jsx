import { useEffect, useState } from "react";
import axios from "axios";
import "../assets/Portfolio.css";


export default function Portfolio() {
  const [folders, setFolders] = useState([]);
  const [projects, setProjects] = useState([]);
  const [openFolder, setOpenFolder] = useState(null);
  const [selected, setSelected] = useState(null);

  useEffect(() => {
    fetchFolders();
    fetchPortfolio();
  }, []);

  const fetchFolders = async () => {
    const res = await axios.get("http://localhost:5000/api/folders");
    setFolders(res.data);
  };

  const fetchPortfolio = async () => {
    const res = await axios.get("http://localhost:5000/api/portfolio");
    setProjects(res.data);
  };

  const getFolderProjects = (folderId) =>
    projects.filter(p => p.folderId === folderId);

  useEffect(() => {
    if (selected) document.body.classList.add("modal-open");
    else document.body.classList.remove("modal-open");
  }, [selected]);

  return (
    <div className="portfolio-page">

      <p className="section-tag center">RECENT WORK</p>
      <h2 className="section-title center">
        Portfolio <span>Gallery</span>
      </h2>

      {/* ===== FOLDER VIEW ===== */}
      {!openFolder && (
        <div className="folder-grid">
          {folders.map(folder => (
            <div
              key={folder._id}
              className="folder-card"
              onClick={() => setOpenFolder(folder)}
            >
              <div className="folder-thumb">
                <img src={folder.coverImage} alt={folder.name} />
                <div className="folder-overlay">📁</div>
              </div>

              <h4>{folder.name}</h4>
              <p>{getFolderProjects(folder._id).length} Projects</p>
            </div>
          ))}
        </div>
      )}

      {/* ===== FOLDER CONTENT ===== */}
      {openFolder && (
        <>
          <button className="back-btn" onClick={() => setOpenFolder(null)}>
            ← Back to folders
          </button>

          <div className="portfolio-grid">
            {getFolderProjects(openFolder._id).map(item => (
              <div
                className="portfolio-item"
                key={item._id}
                onClick={() => setSelected(item)}
              >
                <img src={item.image} alt={item.title} />

                <div className="portfolio-overlay">
                  <h4>{item.title}</h4>
                </div>
              </div>
            ))}
          </div>
        </>
      )}

      {/* MODAL */}
      {selected && (
        <div className="portfolio-modal-bg" onClick={() => setSelected(null)}>
          <div className="portfolio-modal" onClick={(e) => e.stopPropagation()}>
            <span className="close-btn" onClick={() => setSelected(null)}>✖</span>

            <img src={selected.image} alt={selected.title} />

            <div className="modal-content">
              <h3>{selected.title}</h3>
              <p>{selected.description}</p>
            </div>
          </div>
        </div>
      )}

    </div>
  );
}
