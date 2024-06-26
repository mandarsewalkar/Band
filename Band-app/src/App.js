import React, { useState, useEffect, useCallback } from "react";
import { db } from "./Config/Firebase";
import { doc, getDoc, updateDoc } from "firebase/firestore";

function App() {
  const [state, setState] = useState(false);
  const ref = doc(db, "LED", "led1");

  const handleClick = useCallback(async () => {
    try {
      await updateDoc(ref, { Status: !state });
      setState(!state);
    } catch (error) {
      console.error("Error updating document: ", error);
    }
  }, [state]);

  useEffect(() => {
    const getStatus = async () => {
      try {
        const data = await getDoc(ref);
        setState(data.data().Status);
      } catch (error) {
        console.error("Error getting document: ", error);
      }
    };
    getStatus();
  }, [ref]);

  return (
    <div
      style={{
        height: "inherit",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <button
        style={{
          fontSize: "30px",
          height: "100px",
          width: "100px",
          borderRadius: "100px",
        }}
        onClick={handleClick}
      >
        {state ? "ON" : "OFF"}
      </button>
    </div>
  );
}

export default App;
