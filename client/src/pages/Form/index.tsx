import { Box, Typography } from "@mui/material";
import LetterOfStatement from "../../components/LetterOfStatement";
import LetterRecipientAddres from "../../components/LetterRecipientAddres";
import LetterContent from "../../components/LetterContent";
import LetterSignature from "../../components/LetterSignature";
import Navbar from "../../components/Navbar";
import LetterHead from "../../components/LetterHead";

const Form = () => {
  return (
    <>
      <Navbar />
      <Box
        mt={"90px"}
        mx={"20px"}
        display={"flex"}
        flexDirection={"column"}
        height={"100vh"}
      >
        <Box
          display={"flex"}
          justifyContent={"center"}
          width={"100%"}
          height={"10vh"}
        >
          <Typography color={"white"} fontSize={30} fontWeight={"bold"}>
            LETTER
          </Typography>
        </Box>
        <Box display={"flex"} justifyContent={"center"}>
          <Box width={"80%"} display={"flex"} flexDirection={"column"} gap={2}>
            <Box>
              <LetterHead/>
            </Box>
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default Form;
