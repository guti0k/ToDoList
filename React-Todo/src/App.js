import React, { useCallback, useEffect, useState } from "react";
import ToDoList from "./components/ToDoList";
import TextField from "@atlaskit/textfield";
import Button from "@atlaskit/button";
import { v4 } from "uuid";
import axios from "axios";

function App() {
  const [toDoList, setToDoList] = useState([]);
  const [textInput, setTextInput] = useState("");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  function refreshPage() {
    window.location.reload(false);
  }

  useEffect(() => {
    const fetchData = async () => {
      try {
        const resposne = await axios.get("/api");

        setToDoList(resposne.data);
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  const postData = useCallback((toDo) => {
    const url = "/api";
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };

    axios
      .post(url, toDo, config)
      .then((response) => {
        console.log("Response:", response);
      })
      .catch((error) => {
        setError(error);
      });
  }, []);

  const onTextInputChange = useCallback((event) => {
    setTextInput(event.target.value);
  }, []);

  const btnAddInput = useCallback(
    (event) => {
      const toDo = { id: v4(), title: textInput, completed: false };
      postData(toDo);

      setToDoList([toDo, ...toDoList]);
      setTextInput("");
    },

    [textInput, toDoList]
  );

  const onCheckBtnClick = useCallback((id) => {
    setToDoList((prevState) =>
      prevState.map((toDo) =>
        toDo.id === id ? { ...toDo, completed: true } : toDo
      )
    );
  }, []);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;
  if (toDoList.length === 0) return null;

  return (
    <>
      <h1 onClick={refreshPage} style={{ textAlign: "center" }}>
        TO DO LIST
      </h1>

      <TextField
        name="add-todo"
        placeholder="Thêm công việc mới ...."
        elemAfterInput={
          <Button
            isDisabled={!textInput}
            appearance="primary"
            onClick={btnAddInput}
          >
            Thêm
          </Button>
        }
        style={{ padding: "4px" }}
        value={textInput}
        onChange={onTextInputChange}
      ></TextField>

      <ToDoList toDoList={toDoList} onCheckBtnClick={onCheckBtnClick} />
    </>
  );
}

export default App;
