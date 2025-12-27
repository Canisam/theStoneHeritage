import { Box, Skeleton } from "@mui/material";

const HomeCardSkeleton = () => {
  return (
    <Box
      sx={{
        borderRadius: 2,
        overflow: "hidden",
        backgroundColor: "#f5f5f5",
      }}
    >
      <Skeleton
        variant="rectangular"
        height={200}
        animation="wave"
      />
      <Box sx={{ p: 2 }}>
        <Skeleton width="60%" height={28} />
      </Box>
    </Box>
  );
};

export default HomeCardSkeleton;
