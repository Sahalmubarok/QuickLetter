import { Box, TextField, Typography } from "@mui/material";
import { ChangeEvent, FormEvent, useState } from "react";

const LetterSignature = () => {
  const [letterSignature, setLetterSignature] = useState<{
    cityName: string;
    date: string;
    name: string;
    image: File | null;
  }>({
    cityName: "",
    date: "",
    name: "",
    image: null,
  });

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.name === "image" && e.target.files) {
      setLetterSignature({
        ...letterSignature,
        [e.target.name]: e.target.files[0],
      });
    }
    setLetterSignature({
      ...letterSignature,
      [e.target.name]: e.target.value,
    });
  };

  console.log(letterSignature);

  // const handleImageChange = (e: ChangeEvent<HTMLInputElement>) => {
  //   if (e.target.files) {
  //     const file = e.target.files[0];

  //     console.log("cek djulu", file);
  //     setLetterSignature({ ...letterSignature, image: file || null });
  //   }
  // };

  // console.log(letterSignature);
  return (
    <Box>
      <Box mb={"50px"} display={"flex"} marginTop={2}>
        <Box
          width={"100%"}
          bgcolor={"white"}
          border={"#d3d3d3 1px solid"}
          borderRadius={2}
          boxShadow={"rgba(0, 0, 0, 0.5) 0px 3px 8px"}
          padding={4}
        >
          <Typography fontWeight={"bold"} marginBottom={2} fontSize={23}>
            SIGNATURE
          </Typography>
          <Box width={"100%"}>
            <Box>
              <Typography fontSize={16}>City Name</Typography>
              <TextField
                name="cityName"
                size="small"
                sx={{ width: "100%" }}
                placeholder="ex: Bogor"
                onChange={handleChange}
                // onChange={(e) =>
                //   setLetterSignature({
                //     ...letterSignature,
                //     cityName: e.target.value,
                //   })
                // }
              ></TextField>
            </Box>
            <Box width={"100%"} display={"flex"} mt={2}>
              <Box width={"25%"}>
                <Box>
                  <Typography fontSize={16}>Logo (png)</Typography>
                  <Box
                    component="label"
                    htmlFor="image"
                    display="flex"
                    alignItems="center"
                    width={"100%"}
                    justifyContent="center"
                    height="22vh"
                    border="1px solid #d3d3d3"
                    borderRadius="4px"
                    bgcolor="#f9f9f9"

                    // sx={{
                    //   cursor: "pointer",
                    //   ":hover": {
                    //     bgcolor: "#f0f0f0",
                    //   },
                    // }}
                  >
                    <Typography variant="body2" color="textSecondary">
                      Upload TTD
                    </Typography>
                  </Box>
                  <input
                    id="image"
                    name="image"
                    type="file"
                    style={{ display: "none" }}
                    onChange={handleChange}
                    // onChange={(e) =>
                    //   setLetterSignature({
                    //     ...letterSignature,
                    //     image: e.target.files[0] as string,
                    //   })
                    // }
                  />
                </Box>
              </Box>
              <Box width={"75%"} ml={3}>
                <Box marginBottom={2}>
                  <Typography fontSize={16}>Date</Typography>
                  <TextField
                    type="date"
                    size="small"
                    name="date"
                    onChange={handleChange}
                    // onChange={(e) =>
                    //   setLetterSignature({
                    //     ...letterSignature,
                    //     date: e.target.value,
                    //   })
                    // }
                    sx={{ width: "100%" }}
                  />
                </Box>
                <Box>
                  <Typography fontSize={16} mt={2}>
                    Name (Letter Writer)
                  </Typography>
                  <TextField
                    size="small"
                    sx={{ width: "100%" }}
                    name="name"
                    placeholder="ex: Farhan Abbas"
                    onChange={handleChange}
                    // onChange={(e) =>
                    //   setLetterSignature({
                    //     ...letterSignature,
                    //     name: e.target.value,
                    //   })
                    // }
                  ></TextField>
                </Box>
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default LetterSignature;
