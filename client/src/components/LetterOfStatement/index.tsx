import { Box, TextField, Typography } from "@mui/material";

const LetterOfStatement = () => {
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
            STATEMENT
          </Typography>
          <Box>
            <Box>
              <Typography fontSize={16}>Reference Number</Typography>
              <TextField size="small"></TextField>
            </Box>
            <Box marginTop={1}>
              <Typography fontSize={16}>Attachment</Typography>
              <TextField size="small"></TextField>
            </Box>
            <Box marginTop={1}>
              <Typography fontSize={16}>Subject</Typography>
              <TextField size="small"></TextField>
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default LetterOfStatement;
