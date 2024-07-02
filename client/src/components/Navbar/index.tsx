import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Button from "@mui/material/Button";
import { useNavigate } from "react-router-dom";
import Logo from "../../assets/logo.png";

export default function Navbar() {
  const navigate = useNavigate();
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="fixed">
        <Toolbar
          sx={{ display: "flex", justifyContent: "space-between", mx: "50px" }}
        >
          <Box
            component={"img"}
            src={Logo}
            width={"120px"}
            onClick={() => navigate("/")}
          ></Box>

          <Button
            sx={{
              backgroundColor: "black",
            }}
            color="inherit"
          >
            Donasi
          </Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
