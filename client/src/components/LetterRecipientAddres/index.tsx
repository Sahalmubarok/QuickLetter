import { Box, TextField, Typography } from "@mui/material";
import React from "react";

const LetterRecipientAddres = () => {
  return (
    <Box>
      <Box display={"flex"} marginTop={2}>
        <Box
          width={"100%"}
          border={"#d3d3d3 1px solid"}
          borderRadius={2}
          padding={2}
          bgcolor={"white"}
          boxShadow={"rgba(0, 0, 0, 0.5) 0px 3px 8px"}
        >
          <Typography
            fontWeight={"bold"}
            marginBottom={1}
            fontSize={23}
            marginTop={"15px"}
          >
            RECIPIENT ADDRES
          </Typography>
          <Box>
            <Box>
              <Typography fontSize={16}>Name</Typography>
              <TextField size="small"></TextField>
            </Box>
            <Box marginTop={1}>
              <Typography fontSize={16}>Addres</Typography>
              <TextField size="small"></TextField>
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default LetterRecipientAddres;
