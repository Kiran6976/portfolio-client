import { useState, useEffect } from "react";
import api from "../services/api";   // 👈 adjust path if needed
import "../assets/Admin.css";

export default function AddPortfolio() {
  const [title, setTitle] = useState("");
  const [folderId, setFolderId] = useState("");
  const [folders, setFolders] = useState([]);
  const [description, setDescription] = useState("");
  const [image, setImage] = useState(null);
  const [preview, setPreview] = useState(null);
  const [msg, setMsg] = useState("");
  const [loading, setLoading] = useState(false);

  // NEW FOLDER STATES
  const [showFolderForm, setShowFolderForm] = useState(false);
  const [newFolderName, setNewFolderName] = useState("");
  const [newFolderImage, setNewFolderImage] = useState(null);

  useEffect(() => {
    fetchFolders();
  }, []);

  const fetchFolders = async () => {
    try {
      const res = await api.get("/folders");
      setFolders(res.data);
    } catch (err) {
      console.error("Error fetching folders:", err);
    }
  };

  const handleImage = (e) => {
    const file = e.target.files[0];
    setImage(file);
    setPreview(URL.createObjectURL(file));
  };

  // CREATE FOLDER FUNCTION
  const createFolder = async () => {
    if (!newFolderName || !newFolderImage) return;

    const fd = new FormData();
    fd.append("name", newFolderName);
    fd.append("image", newFolderImage);

    try {
      await api.post("/admin/add-folder", fd, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("adminToken")}`,
        },
      });

      await fetchFolders();

      setNewFolderName("");
      setNewFolderImage(null);
      setShowFolderForm(false);
    } catch (err) {
      console.error(err);
      alert("Failed to create folder");
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    const formData = new FormData();
    formData.append("title", title);
    formData.append("folderId", folderId);
    formData.append("description", description);
    formData.append("image", image);

    try {
      await api.post("/admin/add-portfolio", formData, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("adminToken")}`,
        },
      });

      setMsg("Portfolio uploaded successfully!");
      setTitle("");
      setFolderId("");
      setDescription("");
      setImage(null);
      setPreview(null);
    } catch (err) {
      console.error(err);
      setMsg("Upload failed");
    }

    setLoading(false);
  };

  return (
    <div className="admin-form-box">

      <h2>Add Portfolio</h2>

      {msg && <p className="admin-msg">{msg}</p>}

      <form onSubmit={handleSubmit} className="admin-form">

        <input
          type="text"
          placeholder="Project Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
        />

        {/* Folder Select */}
        <select
          value={folderId}
          onChange={(e) => setFolderId(e.target.value)}
          required
        >
          <option value="">Select Folder</option>
          {folders.map(f => (
            <option key={f._id} value={f._id}>
              {f.name}
            </option>
          ))}
        </select>

        {/* Create Folder Toggle */}
        <p
          style={{ color:"#00ff88", cursor:"pointer", marginTop:"6px" }}
          onClick={() => setShowFolderForm(!showFolderForm)}
        >
          + Create New Folder
        </p>

        {/* Create Folder Form */}
        {showFolderForm && (
          <div className="folder-create-box">

            <input
              type="text"
              placeholder="Folder Name"
              value={newFolderName}
              onChange={(e)=>setNewFolderName(e.target.value)}
            />

            <input
              type="file"
              onChange={(e)=>setNewFolderImage(e.target.files[0])}
            />

            <button
              type="button"
              onClick={createFolder}
              className="cv-btn"
            >
              Create Folder
            </button>

          </div>
        )}

        <textarea
          placeholder="Project Description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          required
        ></textarea>

        <label className="file-box">
          Upload Image
          <input type="file" onChange={handleImage} hidden />
        </label>

        {preview && (
          <img src={preview} className="image-preview" alt="preview" />
        )}

        <button type="submit" disabled={loading}>
          {loading ? "Uploading..." : "Upload Portfolio"}
        </button>

      </form>

    </div>
  );
}
