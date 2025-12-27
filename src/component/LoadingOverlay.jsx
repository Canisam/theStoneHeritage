// LoadingOverlay.jsx
import { Box } from "@mui/material";
import { keyframes } from "@mui/system";

const dots = keyframes`
  0% { content: ""; }
  33% { content: "."; }
  66% { content: ".."; }
  100% { content: "..."; }
`;

const spin = keyframes`
  to { transform: rotate(360deg); }
`;

export default function LoadingOverlay({ text = "Special Rooms " }) {
  return (
    <Box
      sx={{
        position: "absolute",
        inset: 0,
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        background: "#f4f1ec",
        zIndex: 2,
      }}
    >
      {/* Gear */}
      <Box
        sx={{
          width: 42,
          height: 42,
          border: "4px solid #c9b8a2",
          borderTopColor: "#6b4e2e",
          borderRadius: "50%",
          animation: `${spin} 1s linear infinite`,
          mb: 1.5,
        }}
      />

      {/* Text */}
      <Box
        sx={{
          fontSize: "1rem",
          fontWeight: 600,
          color: "#6b4e2e",
          "&::after": {
            content: '""',
            animation: `${dots} 1.5s infinite`,
          },
        }}
      >
        {text}
      </Box>
    </Box>
  );
}
