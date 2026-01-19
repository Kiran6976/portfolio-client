import { useEffect, useState } from "react";
import axios from "axios";
import "../assets/Admin.css";


export default function Messages(){

  const [data,setData] = useState([]);

  useEffect(()=>{
    fetchMessages();
  },[]);

  const fetchMessages = async () => {
    try {
      const token = localStorage.getItem("adminToken");

      const res = await axios.get(
        "http://localhost:5000/api/admin/messages",
        { headers: { Authorization: `Bearer ${token}` } }
      );

      setData(res.data);

    } catch (err) {
      console.log("ERROR:", err.response?.data || err.message);
    }
  };

  // 🔹 NEW: Mark as Read
  const markRead = async(id)=>{
    const token = localStorage.getItem("adminToken");
    await axios.put(
      `http://localhost:5000/api/admin/messages/read/${id}`,
      {},
      { headers:{ Authorization:`Bearer ${token}` } }
    );
    fetchMessages();
  };

  // 🔹 NEW: Delete Message
  const deleteMsg = async(id)=>{
    const token = localStorage.getItem("adminToken");
    if(!window.confirm("Delete this message?")) return;

    await axios.delete(
      `http://localhost:5000/api/admin/messages/${id}`,
      { headers:{ Authorization:`Bearer ${token}` } }
    );
    fetchMessages();
  };

  return (
    <div className="messages-page">
      <h2>Contact Messages</h2>

      {data.map(msg=>(

        <div 
          className={`message-card ${msg.isRead ? "read" : "unread"}`} 
          key={msg._id}
        >

          <div className="msg-top">
            <h4>{msg.name}</h4>
            <span className="msg-date">
              {new Date(msg.createdAt).toLocaleString()}
            </span>
          </div>

          <div className="msg-email">{msg.email}</div>

          <div className="msg-subject">{msg.subject}</div>

          <div className="msg-text">{msg.message}</div>

          {/* 🔹 NEW BUTTONS */}
          <div className="msg-actions">

            {!msg.isRead && (
            <label className="neon-checkbox">
  <input
    type="checkbox"
    onChange={() => markRead(msg._id)}
  />

  <div className="neon-checkbox__frame">

    <div className="neon-checkbox__box"></div>

    <div className="neon-checkbox__check-container">
      <svg className="neon-checkbox__check" viewBox="0 0 24 24">
        <path d="M9 16.2l-3.5-3.5L4 14.2l5 5 11-11-1.5-1.5z" />
      </svg>
    </div>

    <div className="neon-checkbox__glow"></div>

    <div className="neon-checkbox__borders">
      <span></span><span></span><span></span><span></span>
    </div>

    <div className="neon-checkbox__particles">
      {Array.from({ length: 12 }).map((_, i) => (
        <span key={i}></span>
      ))}
    </div>

    <div className="neon-checkbox__rings">
      <span className="ring"></span>
      <span className="ring"></span>
      <span className="ring"></span>
    </div>

    <div className="neon-checkbox__sparks">
      <span></span><span></span><span></span><span></span>
    </div>

  </div>
</label>
            )}


            
<button className="button" onClick ={() => deleteMsg(msg._id)}>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 69 14"
    className="svgIcon bin-top"
  >
    <g clip-path="url(#clip0_35_24)">
      <path
        fill="black"
        d="M20.8232 2.62734L19.9948 4.21304C19.8224 4.54309 19.4808 4.75 19.1085 4.75H4.92857C2.20246 4.75 0 6.87266 0 9.5C0 12.1273 2.20246 14.25 4.92857 14.25H64.0714C66.7975 14.25 69 12.1273 69 9.5C69 6.87266 66.7975 4.75 64.0714 4.75H49.8915C49.5192 4.75 49.1776 4.54309 49.0052 4.21305L48.1768 2.62734C47.3451 1.00938 45.6355 0 43.7719 0H25.2281C23.3645 0 21.6549 1.00938 20.8232 2.62734ZM64.0023 20.0648C64.0397 19.4882 63.5822 19 63.0044 19H5.99556C5.4178 19 4.96025 19.4882 4.99766 20.0648L8.19375 69.3203C8.44018 73.0758 11.6746 76 15.5712 76H53.4288C57.3254 76 60.5598 73.0758 60.8062 69.3203L64.0023 20.0648Z"
      ></path>
    </g>
    <defs>
      <clipPath id="clip0_35_24">
        <rect fill="white" height="14" width="69"></rect>
      </clipPath>
    </defs>
  </svg>

  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 69 57"
    className="svgIcon bin-bottom"
  >
    <g clip-path="url(#clip0_35_22)">
      <path
        fill="black"
        d="M20.8232 -16.3727L19.9948 -14.787C19.8224 -14.4569 19.4808 -14.25 19.1085 -14.25H4.92857C2.20246 -14.25 0 -12.1273 0 -9.5C0 -6.8727 2.20246 -4.75 4.92857 -4.75H64.0714C66.7975 -4.75 69 -6.8727 69 -9.5C69 -12.1273 66.7975 -14.25 64.0714 -14.25H49.8915C49.5192 -14.25 49.1776 -14.4569 49.0052 -14.787L48.1768 -16.3727C47.3451 -17.9906 45.6355 -19 43.7719 -19H25.2281C23.3645 -19 21.6549 -17.9906 20.8232 -16.3727ZM64.0023 1.0648C64.0397 0.4882 63.5822 0 63.0044 0H5.99556C5.4178 0 4.96025 0.4882 4.99766 1.0648L8.19375 50.3203C8.44018 54.0758 11.6746 57 15.5712 57H53.4288C57.3254 57 60.5598 54.0758 60.8062 50.3203L64.0023 1.0648Z"
      ></path>
    </g>
    <defs>
      <clipPath id="clip0_35_22">
        <rect fill="white" height="57" width="69"></rect>
      </clipPath>
    </defs>
  </svg>
</button>
      
          </div>

        </div>

      ))}
    </div>
  );
}
