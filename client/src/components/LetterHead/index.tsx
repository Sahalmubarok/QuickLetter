import { Box, TextField, Typography } from "@mui/material";
import React from "react";

const LetterHead = () => {
  return (
    <Box>
      
      <Box display={"flex"} marginTop={2}>
          <Box width={"100%"} border={"#d3d3d3 1px solid"} borderRadius={2} padding={2}>
            <Typography fontWeight={"bold"} marginBottom={1} fontSize={23}>
              LETTER HEAD
            </Typography>
            <Box>
              <Box>
                <Typography fontSize={16}>Company Name</Typography>
                <TextField size="small"></TextField>
              </Box>
              <Box marginTop={1}>
                <Typography fontSize={16}>Addres</Typography>
                <TextField size="small"></TextField>
              </Box>
              <Box marginTop={1}>
                <Typography fontSize={16}>Phone Number</Typography>
                <TextField size="small"></TextField>
              </Box>
              <Box marginTop={1}>
                <Typography fontSize={16}>Email</Typography>
                <TextField size="small"></TextField>
              </Box>
            </Box>
          </Box>
      </Box>
    </Box>
  );
};

export default LetterHead;