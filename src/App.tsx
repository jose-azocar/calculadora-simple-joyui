import { Button, ButtonGroup, Stack, Input } from "@mui/joy";
import { useState } from "react";

function App() {
  const [value, setValue] = useState("");

  const calc = () => {
    if (value.length >= 5 && value.slice(-1) !== " ") {
      setValue(eval(value).toString());
    }
  };

  const deleteValue = () => {
    if (value.slice(-1) === " ") {
      setValue(value.substring(0, value.length - 3));
    } else if (value.slice(-2) === "0.") {
      setValue(value.substring(0, value.length - 2));
    } else {
      setValue(value.substring(0, value.length - 1));
    }
  };

  const addSimbol = (simbol: string) => {
    if (value.slice(-1) !== " " && value.slice(-1) !== ".") {
      setValue(value + simbol);
    }
  };

  return (
    <>
      <Stack
        spacing={2}
        sx={{
          justifyContent:"center",
          alignItems:"center",
        }}
      >
        <h3>Calculadora en 5min</h3>
        <Input
          value={value}
          sx={{
            width: "295px",
            height: "50px",
            background: "#495057",
            color: "white",
          }}
        />
        <Stack sx={{ border: 2, padding: 0.4, borderRadius: 15, width: "300px", height:"300px" }}>
          <ButtonGroup
            sx={{ padding: 0.6, "& button": { width: "25%", height:"50px" } }}
            aria-label="outlined button group"
          >
            <Button onClick={() => setValue(value + "1")}>1</Button>
            <Button onClick={() => setValue(value + "2")}>2</Button>
            <Button onClick={() => setValue(value + "3")}>3</Button>
            <Button onClick={() => value.length >= 1 && deleteValue()}>
              DEL
            </Button>
          </ButtonGroup>
          <ButtonGroup
            sx={{ padding: 0.6, "& button": { width: "25%", height:"50px"} }}
            aria-label="outlined button group"
          >
            <Button onClick={() => setValue(value + "4")}>4</Button>
            <Button onClick={() => setValue(value + "5")}>5</Button>
            <Button onClick={() => setValue(value + "6")}>6</Button>
            <Button onClick={() => value.length >= 1 && addSimbol(" + ")}>
              +
            </Button>
          </ButtonGroup>
          <ButtonGroup
            sx={{ padding: 0.6, "& button": { width: "25%", height:"50px" } }}
            aria-label="outlined button group"
          >
            <Button onClick={() => setValue(value + "7")}>7</Button>
            <Button onClick={() => setValue(value + "8")}>8</Button>
            <Button onClick={() => setValue(value + "9")}>9</Button>
            <Button onClick={() => value.length >= 1 && addSimbol(" - ")}>
              -
            </Button>
          </ButtonGroup>
          <ButtonGroup
            sx={{ padding: 0.6, "& button": { width: "25%", height:"50px" } }}
            aria-label="solid button group"
          >
            <Button onClick={() => value.length >= 1 && addSimbol(" / ")}>
              /
            </Button>
            <Button onClick={() => setValue(value + "0")}>0</Button>
            <Button onClick={() => value.length >= 1 && addSimbol(".")}>
              .
            </Button>
            <Button onClick={() => value.length >= 1 && addSimbol(" * ")}>
              x
            </Button>
          </ButtonGroup>
          <ButtonGroup
            sx={{ padding: 0.6, "& button": { width: "50%", height:"50px" } }}
            variant="solid"
          >
            <Button onClick={() => setValue("")}>RESET</Button>
            <Button onClick={calc}>=</Button>
          </ButtonGroup>
        </Stack>
      </Stack>
    </>
  );
}

export default App;
