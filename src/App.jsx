import { css } from "../styled-system/css";

function App() {
  return (
    <div
      className={css({
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "gray.100",
        color: "gray.800",
      })}
    >
      <h1
        className={css({
          fontSize: "2xl",
          fontWeight: "bold",
          marginBottom: "4",
        })}
      >
        Bible Reading Plan
      </h1>
      <p
        className={css({
          fontSize: "lg",
          color: "gray.600",
        })}
      >
        Welcome to your daily scripture companion
      </p>
    </div>
  );
}

export default App;
