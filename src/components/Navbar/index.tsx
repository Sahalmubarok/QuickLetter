
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";

export default function Navbar() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar
        position="fixed"
        sx={{ top: "20px", left: "20px", right: "20px", width: "auto" }}
      >
        <Toolbar>
          {/* <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton> */}
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Quick Latter
          </Typography>
          <Button sx={{ backgroundColor: "black", ":hover": { bgcolor: "rgb(0, 0, 0, 0.5)" } }} color="inherit">
            Donasi
          </Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
