import { useState } from "react";
import { Box } from "@mui/material";
import { Button } from "@mui/material";

const styles = {
  countNumber: {
    fontSize: "20px",
    fontWeight: "800",
    marginRight: "5px",
    paddingBottom: "2px",
    borderBottom: "double 3px #222"
  },
  gMenu: {
    display: "flex",
    width: "100%",
    height: "40px",
    alignItems: "center",
    justifyContent: "space-around",
    backgroundColor: "#f3f3f3"
  },
  gButton: {
    // p: 2
  }
};

const GMenu1: React.VFC = () => {
  return (
    <Box>
      <p>制作物</p>
    </Box>
  );
};

const GMenu2: React.VFC = () => {
  return (
    <Box>
      <p>スキル</p>
    </Box>
  );
};

const GMenu3: React.VFC = () => {
  return <p>金額</p>;
};

const Contact: React.VFC = () => {
  return (
    <Box>
      <p>お問い合わせはこちらから</p>
    </Box>
  );
};

const Menu: React.VFC = () => {
  const [hButton, setHButton] = useState({
    activeButton: 0,
    text: ""
  });

  const handleClick = (index) => {
    setHButton({ ...hButton, activeButton: index });
  };

  return (
    <div>
      <Box sx={styles.gMenu}>
        <Box sx={styles.gButton} onClick={() => handleClick(0)}>
          制作物
        </Box>
        <Box sx={styles.gButton} onClick={() => handleClick(1)}>
          スキル
        </Box>
        <Box sx={styles.gButton} onClick={() => handleClick(2)}>
          金額
        </Box>
        <Box sx={styles.gButton} onClick={() => handleClick(3)}>
          お問い合わせ
        </Box>
      </Box>

      {hButton.activeButton === 0 ? <Menu /> : null}
    </div>
  );
};

// export default function Body(){
//   const [hButton, setHButton] = useState({
// activeButton: 0,
// text: ""
//   });

// const Body: React.VFC = () => {
//   const [count, setCount] = useState(9);
//   // console.log('count', count);

export default function Body() {
  const [count, setCount] = useState(1);

  const handleClick = () => {
    setCount(count + 1);
  };

  const clear = () => {
    setCount(0);
  };

  return (
    <Box>
      <Menu />
      {/* <GMenu1 />
      <GMenu2 />
      <GMenu3 />
      <Contact /> */}

      <h2>Penguin Counter</h2>
      <p>
        <span style={styles.countNumber}>{count}</span>
        羽のペンギン発見！！おめでとう！！
      </p>
      <Button variant="contained" onClick={handleClick} sx={{ m: 2 }}>
        penguin
      </Button>
      <Button variant="contained" onClick={clear} sx={{ m: 2 }}>
        reset
      </Button>
    </Box>
  );
}

// export default Body;
