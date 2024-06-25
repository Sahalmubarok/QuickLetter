import { DatePicker } from "@mui/lab";
import { Box, TextField, Typography } from "@mui/material";
import  { useState } from "react";

const LetterSignature = () => {
    const [selectedDate, setSelectedDate] = useState<Date | null>(null); // Tipe state selectedDate disesuaikan dengan Date atau null

    const handleDateChange = (date: Date | null) => {
      setSelectedDate(date);
    };
  return (
    <Box>
      <Box mb={"20px"}  display={"flex"} marginTop={2}>
        <Box
          width={"100%"}
          bgcolor={"white"}
          border={"#d3d3d3 1px solid"}
          borderRadius={2}
          boxShadow={"rgba(0, 0, 0, 0.5) 0px 3px 8px"}
          padding={2}
        >
          <Typography
            fontWeight={"bold"}
            marginBottom={1}
            fontSize={23}
            marginTop={"15px"}
          >
            SIGNATURE
          </Typography>
          <Box>
            <Box marginBottom={1}>
              <Typography fontSize={16}>Date</Typography>
              <TextField type="date" />
              <DatePicker
                value={selectedDate}
                onChange={handleDateChange}
                renderInput={(params: any) => (
                  <TextField {...params} size="small" />
                )}
              />
            <Box>
              <Typography fontSize={16}>Name</Typography>
              <TextField size="small"></TextField>
            </Box>
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default LetterSignature;
