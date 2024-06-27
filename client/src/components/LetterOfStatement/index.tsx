import { Box, TextField, Typography } from "@mui/material";
import { useState } from "react";

const LetterOfStatement = () => {
  const [letterStatement, setLetterStatement] = useState({
    referenceNumber : "",
    attachment : "",
    subject : ""
  });
  console.log(letterStatement);
  
  return (
    <Box>
      <Box display={"flex"} marginTop={2}>
        <Box
          width={"100%"}
          border={"#d3d3d3 1px solid"}
          borderRadius={2}
          padding={4}
          bgcolor={"white"}
          boxShadow={"rgba(0, 0, 0, 0.5) 0px 3px 8px"}
        >
          <Typography
            fontWeight={"bold"}
            marginBottom={1}
            fontSize={23}
          >
            STATEMENT
          </Typography>
          <Box>
            <Box display={"flex"} width={"100%"}>
              <Box width={"50%"}>
                <Typography fontSize={16}>Reference Number</Typography>
                <TextField
                  size="small"
                  placeholder="ex: 001/A/Quick-L/VI/2024"
                  onChange={(e) => setLetterStatement({...letterStatement, referenceNumber: e.target.value})}
                  sx={{ width: "100%" }}
                ></TextField>
              </Box>
              <Box width={"50%"} ml={"15px"}>
                <Typography fontSize={16}>Attachment</Typography>
                <TextField
                  size="small"
                  placeholder="ex: 1 Berkas/-"
                onChange={(e) => setLetterStatement({...letterStatement, attachment: e.target.value})}
                  sx={{ width: "100%" }}
                ></TextField>
              </Box>
            </Box>
            <Box marginTop={1} width={"100%"}>
              <Typography fontSize={16}>Subject</Typography>
              <TextField
                size="small"
                placeholder="ex: Permohonan Izin Operasional"
                onChange={(e) => setLetterStatement({...letterStatement, subject: e.target.value})}
                sx={{ width: "100%" }}
              ></TextField>
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default LetterOfStatement;
