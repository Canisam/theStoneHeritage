import { Typography, Box } from "@mui/material";
import { motion } from "framer-motion";

export default function GalleryTitle({
  title = "Discover Our Gallery",
  subtitle = "Moments. Architecture. Mountain Views.",
}) {
  return (
    <Box
      sx={{
        textAlign: "center",
        py: { xs: 6, md: 10 },
        px: 2,
        background: "linear-gradient(to bottom, #ffffff, #f7f7f7)",
      }}
    >
      {/* Animated Main Title */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <Typography
          variant="h3"
          sx={{
            fontWeight: 600,
            letterSpacing: "0.5px",
             color: "#984216",
          }}
        >
          {title}
        </Typography>
      </motion.div>

      {/* Animated Subtitle */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.4, duration: 0.8 }}
        viewport={{ once: true }}
      >
        <Typography
          sx={{
            mt: 2,
            color: "text.secondary",
            maxWidth: 600,
            mx: "auto",
             color: "#984216",
          }}
        >
          {subtitle}
        </Typography>
      </motion.div>

      {/* Elegant underline animation */}
      <motion.div
        initial={{ width: 0 }}
        whileInView={{ width: "80px" }}
        transition={{ delay: 0.8, duration: 0.6 }}
        viewport={{ once: true }}
        style={{
          height: "3px",
          background: "#984216",
          margin: "20px auto 0",
          borderRadius: "2px",
        }}
      />
    </Box>
  );
}
