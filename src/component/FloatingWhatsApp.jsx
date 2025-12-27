import { Box } from "@mui/material";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";

const FloatingWhatsApp = () => {
  return (
    <Box
      component="a"
      href="https://api.whatsapp.com/send/?phone=%2B917900200563&text&type=phone_number&app_absent=0"
      target="_blank"
      rel="noopener noreferrer"
      sx={{
        position: "fixed",
        bottom: { xs: 500, sm: 300 },
        right: { xs: 16, sm: 24 },
        zIndex: 2000,
        width: 56,
        height: 56,
        borderRadius: "50%",
        backgroundColor: "#25D366",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        color: "#fff",
        boxShadow: "0 10px 25px rgba(0,0,0,0.35)",
        textDecoration: "none",

        /* Floating animation */
        animation: "float 2.5s ease-in-out infinite",

        "&:hover": {
          transform: "scale(1.1)",
          boxShadow: "0 15px 35px rgba(0,0,0,0.45)",
        },
      }}
    >
      <WhatsAppIcon sx={{ fontSize: 32 }} />

      {/* keyframes */}
      <style>
        {`
          @keyframes float {
            0% { transform: translateY(0); }
            50% { transform: translateY(-8px); }
            100% { transform: translateY(0); }
          }
        `}
      </style>
    </Box>
  );
};

export default FloatingWhatsApp;
