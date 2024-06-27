import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { useNavigate } from "react-router-dom";
import Logo from "../../assets/logo.png";
import { Avatar } from "@mui/material";

export default function Navbar() {
  const navigate = useNavigate();

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="fixed" sx={{ width: "100%" }}>
        <Toolbar sx={{ justifyContent: "space-between" }}>
          {/* <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton> */}
          <Box>
            <Avatar
              src={Logo}
              alt=""
              sx={{ width: "160px", height: "70px" }}
              onClick={() => navigate("/")}
            />
            {/* <Typography
              variant="h6"
              component="div"
              sx={{ flexGrow: 1 }}
              onClick={() => navigate("/")}
            >
              Quick Latter
            </Typography> */}
          </Box>
          <Button
            sx={{
              backgroundColor: "black",
              ":hover": { bgcolor: "rgb(0, 0, 0, 0.5)" },
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
