import { Box, TextField, Typography } from "@mui/material";
import React from "react";

const LetterContent = () => {
  return (
    <Box>
      <Box display={"flex"} marginTop={2}>
        <Box
          width={"100%"}
          border={"#d3d3d3 1px solid"}
          borderRadius={2}
          padding={2}
        >
          <Typography
            fontWeight={"bold"}
            marginBottom={1}
            fontSize={23}
            marginTop={"15px"}
          >
            CONTENT
          </Typography>
          <Box>
            <Box>
              <Typography fontSize={16}>Content</Typography>
              <TextField size="small"></TextField>
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default LetterContent;