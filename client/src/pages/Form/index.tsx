import { Box, TextField, Typography } from "@mui/material";
import React from "react";
import LetterHead from "../../components/LetterHead";
import LetterOfStatement from "../../components/LetterOfStatement";
import LetterRecipientAddres from "../../components/LetterRecipientAddres";
import LetterContent from "../../components/LetterContent";
import LetterSignature from "../../components/LetterSignature";

const Form = () => {
  return (
    <Box display={"flex"} flexDirection={"column"} height={"100vh"}>
      <Box
        display={"flex"}
        justifyContent={"center"}
        width={"100%"}
        height={"10vh"}
        sx={{ backgroundColor: "gray" }}
      >
        <Typography color={"white"}>ISI SURAT</Typography>
      </Box>
      <Box display={"flex"}>
        <Box width={"50%"}>
          <Box>
            <LetterHead />
          </Box>
          <Box>
            <LetterOfStatement />
          </Box>
          <Box>
            <LetterRecipientAddres />
          </Box>
          <Box>
            <LetterContent />
          </Box>
          <Box>
            <LetterSignature />
          </Box>
        </Box>
        <Box width={"50%"}>
          <Typography></Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default Form;