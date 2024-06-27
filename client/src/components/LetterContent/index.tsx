import { Box, TextField, TextareaAutosize, Typography } from "@mui/material";
import { useState } from "react";

const LetterContent = () => {
  const [letterContent, setLetterContent] = useState({
    opening: "",
    content: "",
    closing: ""
  });
  console.log(letterContent);

  return (
    <Box bgcolor={"white"}>
      <Box display={"flex"} marginTop={2}>
        <Box
          width={"100%"}
          border={"#d3d3d3 1px solid"}
          borderRadius={2}
          padding={4}
          boxShadow={"rgba(0, 0, 0, 0.5) 0px 3px 8px"}
        >
          <Typography
            fontWeight={"bold"}
            marginBottom={1}
            fontSize={23}
          >
            CONTENT
          </Typography>
          <Box width={"100%"}>
            <Box>
              <Typography fontSize={16}>Opening</Typography>
              <TextField
                size="small"
                placeholder="ex: Seiring doa kami sampaikan semoga Bapak/Ibu senantiasa dalam lindungan-Nya, 
                serta eksis dalam menjalankan aktivitas keseharian. Aamiin."
                onChange={(e) => setLetterContent({...letterContent, opening: e.target.value})}
                sx={{ width: "100%" }}
              ></TextField>
            </Box>
            <Box>
              <Typography fontSize={16} mt={2}>
                Content
              </Typography>
              <TextareaAutosize
                aria-label="minimum height"
                minRows={8}
                style={{ width: "99%" }}
                placeholder="Isi Surat"
                onChange={(e) => setLetterContent({...letterContent, content: e.target.value})}
              ></TextareaAutosize>
            </Box>
            <Box>
              <Typography fontSize={16} mt={2}>
                Closing
              </Typography>
              <TextField
                size="small"
                onChange={(e) => setLetterContent({...letterContent, closing: e.target.value})}
                placeholder="ex: Demikian surat permohonan ini kami buat, atas perhatiannya kami sampaikanterimakasih"
                sx={{ width: "100%" }}
              ></TextField>
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default LetterContent;
