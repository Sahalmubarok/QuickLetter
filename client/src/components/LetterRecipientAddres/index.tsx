import { Box, TextField, Typography } from "@mui/material";
import { useState } from "react";

const LetterRecipientAddres = () => {
  const [letterRecipientAddres, setLetterRecipientAddres] = useState({
    name: "",
    addres: ""
  });
  console.log(letterRecipientAddres);
  
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
            RECIPIENT ADDRES
          </Typography>
          <Box width={"100%"} display={"flex"}>
            <Box width={"50%"}>
              <Typography fontSize={16}>Name</Typography>
              <TextField
                size="small"
                placeholder="ex: Muhamad Zain Nafis"
                onChange={(e) => setLetterRecipientAddres({...letterRecipientAddres, name: e.target.value})}
                sx={{ width: "100%" }}
              ></TextField>
            </Box>
            <Box width={"50%"} ml={"15px"}>
              <Typography fontSize={16}>Addres</Typography>
              <TextField
                size="small"
                placeholder="ex: Jakarta"
                onChange={(e) => setLetterRecipientAddres({...letterRecipientAddres, addres: e.target.value})}
                sx={{ width: "100%" }}
              ></TextField>
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default LetterRecipientAddres;
