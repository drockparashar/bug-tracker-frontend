import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useCookies } from "react-cookie";

const CreateBug = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [image, setImage] = useState("");
  const [priority, setPriority] = useState("");
  const [status, setStatus] = useState("");
  const [assignedTo, setAssignedTo] = useState("");
  const [assignedBy, setAssignedBy] = useState("");
  const [users, setUsers] = useState([]);
  const navigate = useNavigate();
  const [cookies, setCookies] = useCookies("access_token");

  const submit = async (e) => {
    e.preventDefault();
    try {
      console.log(
        title,
        description,
        image,
        assignedBy,
        assignedTo,
        priority,
        status
      );
      await axios.post(
        "http://localhost:3002/bug/create",
        {
          title,
          description,
          image,
          assignedBy: window.localStorage.getItem("userID"),
          assignedTo,
          priority,
          status,
        },
        {
          headers: {
            authorization: cookies.access_token,
          },
        }
      );
      alert("Bug created Succesful");
      navigate("/adminhome");
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    const getUsers = async () => {
      try {
        const response = await axios.get("http://localhost:3002/bug/getUsers");
        setUsers(response.data);
        console.log(response.data);
      } catch (err) {
        console.log(err);
      }
    };
    getUsers();
  }, []);

  return (
    <>
      <div className="parent">
        <div className="container">
          <div className="heading">Create New Issue</div>
          <form className="form">
            <input
              className="input"
              type="text"
              placeholder="Title"
              onChange={(e) => {
                setTitle(e.target.value);
              }}
            />

            <textarea
              className="input"
              cols="50"
              rows="4"
              placeholder="Description"
              onChange={(e) => {
                setDescription(e.target.value);
              }}
            ></textarea>
            <input
              className="input"
              type="text"
              placeholder="Enter image url"
              onChange={(e) => {
                setImage(e.target.value);
              }}
            />
            <label htmlFor="priority" className="label">
              Priority
            </label>
            <select
              className="select"
              name="priority"
              onChange={(e) => {
                setPriority(e.target.value);
              }}
            >
              <option value="">Select Priority</option>
              <option value="Low">Low</option>
              <option value="Normal">Normal</option>
              <option value="High">High</option>
              <option value="Critical">Critical</option>
            </select>
            <br></br>
            <label htmlFor="status" className="label">
              Status
            </label>
            <select
              className="select"
              name="status"
              onChange={(e) => {
                setStatus(e.target.value);
              }}
            >
              <option value="">Select Status</option>
              <option value="New">New</option>
              <option value="In Progress">In Progress</option>
              <option value="Testing">Testing</option>
              <option value="Closed">Closed</option>
            </select>
            <br></br>
            <label htmlFor="assign" className="label">
              Assign To
            </label>
            <select
              className="select"
              name="assign"
              id="assign"
              onChange={(e) => {
                setAssignedTo(e.target.value);
              }}
            >
              <option value="">Select User</option>
              {users.map((user) => (
                <option value={user._id}>{user.name}</option>
              ))}
            </select>

            <div className="button_container">
              <button type="submit" className="login-button" onClick={submit}>
                Create
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default CreateBug;
