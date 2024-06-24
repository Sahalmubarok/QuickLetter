import { Box, Button, Typography } from "@mui/material";
import Navbar from "../../components/Navbar";

const Home = () => {
  return (
    <>
      <Navbar />
      <Box px={"50px"}>
        <Box
          fontWeight={"bold"}
          color={"white"}
          display={"flex"}
          flexDirection={"column"}
          justifyContent={"center"}
          height={"90vh"}
        >
          <Typography variant="h4" pb={"20px"} fontWeight={"bold"}>
            Create Your Letter With Just One Click.
          </Typography>
          <Typography pb={"20px"}>
            Get the convenience of creating digital letters with various
            features flagship of Quick Latter. <br /> Free, Easy and Fast!
          </Typography>
          <Button
            sx={{
              backgroundColor: "orange",
              ":hover": { bgcolor: "rgb(0, 0, 0, 0.5)" },
              width: "200px",
              color: "black",
            }}
          >
            Start writing a letter
          </Button>
        </Box>
      </Box>
    </>
  );
};

export default Home;
