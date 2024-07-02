import { Box, TextField, TextareaAutosize, Typography } from "@mui/material";
import { ChangeEvent, useState } from "react";
// import { useForm, Controller } from "react-hook-form";
// import { yupResolver } from "@hookform/resolvers/yup";
// import * as yup from "yup";
import { ILetter } from "../../types/app";

// interface ILetterHead {
//   companyName: string;
// }

// const LetterHeadSchema = yup.object({
//   companyName: yup.string().required("harap disi").min(5, "minimal 5 huruf"),
// });

const LetterHead = () => {
  const [letter, setLetter] = useState<ILetter>({
    companyName: "",
    phoneNumber: "",
    email: "",
    addres: "",
    image: null,
    referenceNumber: "",
    attachment: "",
    subject: "",
    name: "",
    addresRecipient: "",
    opening: "",
    content: "",
    closing: "",
    cityName: "",
    date: "",
    nameSignature: "",
    imageSignature: null,
  });

  // const { control, handleSubmit, reset } = useForm<ILetterHead>({
  //   defaultValues: {
  //     companyName: "",
  //   },
  //   mode: "all",
  //   reValidateMode: "onBlur",
  //   resolver: yupResolver(LetterHeadSchema),
  // });

  // const handleChange = (
  //   e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  // ) => {
  //   const { name, value, files } = e.currentTarget as HTMLInputElement &
  //     HTMLTextAreaElement;

  //   setLetter((prevState) => ({
  //     ...prevState,
  //     [name]:
  //       name === "image" || name === "imageSignature"
  //         ? files && files.length > 0
  //           ? files[0]
  //           : null
  //         : value,
  //   }));
  // };

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.name === "image" && e.target.files) {
      setLetter({ ...letter, [e.target.name]: e.target.files[0] });
    }
    setLetter({ ...letter, [e.target.name]: e.target.value });
  };
  console.log(letter);

  // const handleChangeImg = (e: ChangeEvent<HTMLInputElement>) => {
  //   if (e.target.name === "imageSignature" && e.target.files) {
  //     setLetter({ ...letter, [e.target.name]: e.target.files[0] });
  //   }
  //   setLetter({ ...letter, [e.target.name]: e.target.value });
  // };

  // const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
  //   if (e.target.name === "image" && e.target.files) {
  //     setLetterSignature({
  //       ...letterSignature,
  //       [e.target.name]: e.target.files[0],
  //     });
  //   }
  //   setLetterSignature({
  //     ...letterSignature,
  //     [e.target.name]: e.target.value,
  //   });
  // };

  // console.log(letterSignature);

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
                  htmlFor="image"
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
                  {/* <Controller
                    control={control}
                    name="companyName"
                    render={({ field, fieldState }) => ( */}
                  <TextField
                    type="text"
                    size="small"
                    placeholder="ex: PT. QUICK LETTER "
                    name="companyName"
                    sx={{ width: "100%", fontSize: "5px" }}
                    // {...field}
                    // error={!!fieldState.error?.message}
                    // helperText={fieldState.error?.message}
                    onChange={handleChange}
                  ></TextField>
                  {/* )}
                  /> */}
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
                  placeholder="ex: Jl. Raya Jakarta KM. 01 Kel. Gedong Kec. Pasar Rebo Kota Jakarta Timur"
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
            <Typography fontWeight={"bold"} marginBottom={1} fontSize={23}>
              STATEMENT
            </Typography>
            <Box>
              <Box display={"flex"} width={"100%"}>
                <Box width={"50%"}>
                  <Typography fontSize={16}>Reference Number</Typography>
                  <TextField
                    size="small"
                    name="referenceNumber"
                    placeholder="ex: 001/A/Quick-L/VI/2024"
                    sx={{ width: "100%" }}
                    onChange={handleChange}
                  ></TextField>
                </Box>
                <Box width={"50%"} ml={"15px"}>
                  <Typography fontSize={16}>Attachment</Typography>
                  <TextField
                    size="small"
                    name="attachment"
                    placeholder="ex: 1 Berkas/-"
                    sx={{ width: "100%" }}
                    onChange={handleChange}
                  ></TextField>
                </Box>
              </Box>
              <Box marginTop={1} width={"100%"}>
                <Typography fontSize={16}>Subject</Typography>
                <TextField
                  size="small"
                  name="subject"
                  placeholder="ex: Permohonan Izin Operasional"
                  sx={{ width: "100%" }}
                  onChange={handleChange}
                ></TextField>
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>
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
            <Typography fontWeight={"bold"} marginBottom={1} fontSize={23}>
              RECIPIENT ADDRES
            </Typography>
            <Box width={"100%"} display={"flex"}>
              <Box width={"50%"}>
                <Typography fontSize={16}>Name</Typography>
                <TextField
                  size="small"
                  name="name"
                  placeholder="ex: Muhamad Zain Nafis"
                  sx={{ width: "100%" }}
                  onChange={handleChange}
                ></TextField>
              </Box>
              <Box width={"50%"} ml={"15px"}>
                <Typography fontSize={16}>Addres</Typography>
                <TextField
                  size="small"
                  name="addresRecipient"
                  placeholder="ex: Jakarta"
                  sx={{ width: "100%" }}
                  onChange={handleChange}
                ></TextField>
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>
      <Box>
        <Box bgcolor={"white"}>
          <Box display={"flex"} marginTop={2}>
            <Box
              width={"100%"}
              border={"#d3d3d3 1px solid"}
              borderRadius={2}
              padding={4}
              boxShadow={"rgba(0, 0, 0, 0.5) 0px 3px 8px"}
            >
              <Typography fontWeight={"bold"} marginBottom={1} fontSize={23}>
                CONTENT
              </Typography>
              <Box width={"100%"}>
                <Box>
                  <Typography fontSize={16}>Opening</Typography>
                  <TextField
                    size="small"
                    name="opening"
                    placeholder="ex: Seiring doa kami sampaikan semoga Bapak/Ibu senantiasa dalam lindungan-Nya, 
                    serta eksis dalam menjalankan aktivitas keseharian. Aamiin."
                    sx={{ width: "100%" }}
                    onChange={handleChange}
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
                    name="content"
                    // onChange={handleChange}
                  ></TextareaAutosize>
                </Box>
                <Box>
                  <Typography fontSize={16} mt={2}>
                    Closing
                  </Typography>
                  <TextField
                    size="small"
                    placeholder="ex: Demikian surat permohonan ini kami buat, atas perhatiannya kami sampaikanterimakasih"
                    sx={{ width: "100%" }}
                    name="closing"
                    onChange={handleChange}
                  ></TextField>
                </Box>
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>
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
                ></TextField>
              </Box>
              <Box width={"100%"} display={"flex"} mt={2}>
                <Box width={"20%"}>
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
                    >
                      <Typography variant="body2" color="textSecondary">
                        Upload TTD
                      </Typography>
                    </Box>
                    <input
                      id="imageSignature"
                      name="imageSignature"
                      type="file"
                      style={{ display: "none" }}
                      onChange={handleChange}
                    />
                  </Box>
                </Box>
                <Box width={"80%"} ml={3}>
                  <Box marginBottom={2}>
                    <Typography fontSize={16}>Date</Typography>
                    <TextField
                      type="date"
                      size="small"
                      name="date"
                      onChange={handleChange}
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
                      name="nameSignature"
                      placeholder="ex: Farhan Abbas"
                      onChange={handleChange}
                    ></TextField>
                  </Box>
                </Box>
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default LetterHead;
