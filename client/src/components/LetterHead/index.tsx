import { Box, TextField, Typography } from "@mui/material";
import { ChangeEvent, useState } from "react";

const LetterHead = () => {
  const [letterHead, setLetterHead] = useState<{
    companyName: string;
    phoneNumber: string;
    email: string;
    addres: string;
    image: File | null;
  }>({
    companyName: "",
    phoneNumber: "",
    email: "",
    addres: "",
    image: null,
  });

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.name === "image" && e.target.files) {
      setLetterHead({ ...letterHead, [e.target.name]: e.target.files[0] });
    }
    setLetterHead({ ...letterHead, [e.target.name]: e.target.value });
  };
  console.log(letterHead);

  return (
    <Box>
      <Box display={"flex"} marginTop={2}>
        <Box
          width={"100%"}
          bgcolor={"white"}
          border={"#d3d3d3 1px solid"}
          borderRadius={2}
          boxShadow={"rgba(0, 0, 0, 0.5) 0px 3px 8px"}
          padding={4}
        >
          <Typography fontWeight={"bold"} marginBottom={1} fontSize={23}>
            LETTER HEAD
          </Typography>
          <Box display={"flex"} flexDirection={"column"}>
            <Box display={"flex"}>
              <Box width={"20%"}>
                <Typography fontSize={16}>Logo (png)</Typography>
                <Box
                  component="label"
                  display="flex"
                  alignItems="center"
                  justifyContent="center"
                  width="100%"
                  height="22vh"
                  border="1px solid #d3d3d3"
                  borderRadius="4px"
                  bgcolor="#f9f9f9"
                  // boxShadow="rgba(0, 0, 0, 0.1) 0px 2px 4px"
                  htmlFor="image"
                  // sx={{
                  //   cursor: "pointer",
                  //   ":hover": {
                  //     bgcolor: "#f0f0f0",
                  //   },
                  // }}
                >
                  <Typography variant="body2" color="textSecondary">
                    Upload Logo
                  </Typography>
                </Box>
                <input
                  id="image"
                  name="image"
                  type="file"
                  style={{ display: "none" }}
                  onChange={handleChange}
                />
              </Box>
              <Box ml={"15px"} width={"80%"}>
                <Box>
                  <Typography fontSize={16}>Company Name</Typography>
                  <TextField
                    type="text"
                    size="small"
                    placeholder="ex: PT. QUICK LETTER "
                    name="companyName"
                    sx={{ width: "100%", fontSize: "5px" }}
                    onChange={handleChange}
                  ></TextField>
                </Box>
                <Box marginTop={1}>
                  <Typography fontSize={16}>Phone Number</Typography>
                  <TextField
                    type="number"
                    size="small"
                    placeholder="ex: 08*********"
                    name="phoneNumber"
                    sx={{ width: "100%" }}
                    onChange={handleChange}
                  ></TextField>
                </Box>
              </Box>
            </Box>
            <Box width={"100%"} display={"flex"} flexDirection={"column"}>
              <Box marginTop={1}>
                <Typography fontSize={16}>Email</Typography>
                <TextField
                  type="email"
                  size="small"
                  placeholder="ex: quickletter@gmail.com"
                  name="email"
                  sx={{ width: "100%" }}
                  onChange={handleChange}
                ></TextField>
              </Box>
              <Box marginTop={1}>
                <Typography fontSize={16}>Addres</Typography>
                <TextField
                  size="small"
                  placeholder="ex: Jl. Raya Jakarta KM. 01 Kel. Gedong Kec. Pasar Rebo"
                  name="addres"
                  sx={{
                    width: "100%",
                  }}
                  onChange={handleChange}
                ></TextField>
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default LetterHead;
