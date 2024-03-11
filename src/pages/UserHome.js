import React, { useEffect, useState } from "react";
import Navigation from "../components/Navigation";
import axios from "axios";
import { useCookies } from "react-cookie";
import { useNavigate } from "react-router-dom";
import "../styles/dashboard.css";
import {
  Card,
  CardBody,
  Select,
  Image,
  Stack,
  Heading,
  Text,
  Button,
  Divider,
} from "@chakra-ui/react";
import logo from "../assets/logo.png";
import { NavLink } from "react-router-dom";

const UserHome = () => {
  const [bugs, setBugs] = useState([]);
  const [status, setStatus] = useState("");
  const [cookies, setCookies] = useCookies("access_token");
  const [id, setId] = useState("");
  const navigate = useNavigate();

  const update = async (e) => {
    console.log(e, status);
    try {
      await axios.put(
        "http://localhost:3002/bug/update",
        {
          _id: e,
          status,
        },
        {
          headers: {
            authorization: cookies.access_token,
          },
        }
      );
      const response = await axios.get("http://localhost:3002/bug/get");
      console.log(response.data);
      setBugs(response.data);
    } catch (err) {
      console.log(err);
    }
  };

  const logout = async (e) => {
    setCookies("access_token", "");
    window.localStorage.removeItem("userID");
    navigate("/userLogin");
    console.log("hello");
  };

  useEffect(() => {
    const getBugs = async () => {
      try {
        const response = await axios.get("http://localhost:3002/bug/get", {
          headers: {
            authorization: cookies.access_token,
          },
        });
        console.log(cookies.access_token);
        setBugs(response.data);
      } catch (err) {
        console.log(err);
      }
    };
    getBugs();
    setId(window.localStorage.getItem("userID"));
    console.log("userId=", id);
  }, []);

  return (
    <>
      <nav>
        <div className="left">
        <NavLink to="/"><img src={logo} className="logo-img"/></NavLink>
        </div>
        <div className="right">
          <Button
            variant="solid"
            size="md"
            colorScheme="blue"
            onClick={logout}
          >LogOut</Button>
        </div>
      </nav>
      <div className="parent">
        {bugs
          .filter((bug) => bug.assignedTo == id)
          .map((bug) => (
            <Card maxW="l" key={bug.id}>
              <CardBody>
                <Image src={bug.image} alt="Bug Image" borderRadius="lg" />
                <Stack mt="6" spacing="3">
                  <Heading size="md">{bug.title}</Heading>
                  <Text>{bug.description}</Text>
                  <Stack spacing="48" direction="row">
                    <Text color="blue.600" fontSize="l">
                      Priority: {bug.priority}
                    </Text>
                    <Text color="blue.600" fontSize="l">
                      Status
                      <Select
                        placeholder={bug.status}
                        onChange={(e) => {
                          setStatus(e.target.value);
                        }}
                      >
                        <option value="New">New</option>
                        <option value="In Progress">In Progress</option>
                        <option value="Testing">Testing</option>
                        <option value="Closed">Closed</option>
                      </Select>
                    </Text>
                  </Stack>
                  <Button
                    variant="solid"
                    size="md"
                    colorScheme="blue"
                    onClick={() => update(bug._id)}
                  >
                    Update
                  </Button>
                </Stack>
              </CardBody>
            </Card>
          ))}
      </div>
    </>
  );
};

export default UserHome;
