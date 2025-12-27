// // import { Box, IconButton } from "@mui/material";
// // import { ChevronLeft, ChevronRight } from "@mui/icons-material";
// // import { useEffect, useRef, useState } from "react";

// // const images = [
// //   "/assets/i1.jpg",
// //   "/assets/i2.jpg",
// //   "/assets/i3.jpg",
// //   "/assets/room1.png",
// //   "/assets/room2.png",
// //   "/assets/room3.png",
// // ];

// // const AUTO_SCROLL_DELAY = 4000;

// // export default function HeroCarousel() {
// //   // start from 1 (first real slide)
// //   const [index, setIndex] = useState(1);
// //   const [transition, setTransition] = useState(true);
// //   const timeoutRef = useRef(null);

// //   // clone first & last
// //   const slides = [images[images.length - 1], ...images, images[0]];

// //   useEffect(() => {
// //     timeoutRef.current = setTimeout(() => {
// //       setIndex((prev) => prev + 1);
// //     }, AUTO_SCROLL_DELAY);

// //     return () => clearTimeout(timeoutRef.current);
// //   }, [index]);

// //   const handleTransitionEnd = () => {
// //     // Jump instantly without animation
// //     if (index === slides.length - 1) {
// //       setTransition(false);
// //       setIndex(1);
// //     }

// //     if (index === 0) {
// //       setTransition(false);
// //       setIndex(slides.length - 2);
// //     }
// //   };

// //   // Re-enable animation after jump
// //   useEffect(() => {
// //     if (!transition) {
// //       requestAnimationFrame(() => setTransition(true));
// //     }
// //   }, [transition]);

// //   const prevSlide = () => setIndex((prev) => prev - 1);
// //   const nextSlide = () => setIndex((prev) => prev + 1);

// //   return (
// //     <Box
// //       sx={{
// //         position: "relative",
// //         height: "50vh",
// //         overflow: "hidden",
// //       }}
// //     >
// //       {/* Slides */}
// //       <Box
// //         onTransitionEnd={handleTransitionEnd}
// //         sx={{
// //           display: "flex",
// //           height: "100%",
// //           transform: `translateX(-${index * 100}%)`,
// //           transition: transition ? "transform 0.8s ease-in-out" : "none",
// //         }}
// //       >
// //         {slides.map((img, i) => (
// //           <Box
// //             key={i}
// //             sx={{
// //               minWidth: "100%",
// //               backgroundImage: `url(${img})`,
// //               backgroundSize: "cover",
// //               backgroundPosition: "center",
// //             }}
// //           />
// //         ))}
// //       </Box>

// //       {/* Left Arrow */}
// //       <IconButton
// //         onClick={prevSlide}
// //         sx={{
// //           position: "absolute",
// //           top: "50%",
// //           left: 16,
// //           transform: "translateY(-50%)",
// //           color: "#fff",
// //           opacity: 0,
// //           transition: "opacity 0.3s",
// //           "&:hover": { backgroundColor: "rgba(0,0,0,0.4)" },
// //         }}
// //         className="carousel-arrow"
// //       >
// //         <ChevronLeft fontSize="large" />
// //       </IconButton>

// //       {/* Right Arrow */}
// //       <IconButton
// //         onClick={nextSlide}
// //         sx={{
// //           position: "absolute",
// //           top: "50%",
// //           right: 16,
// //           transform: "translateY(-50%)",
// //           color: "#fff",
// //           opacity: 0,
// //           transition: "opacity 0.3s",
// //           "&:hover": { backgroundColor: "rgba(0,0,0,0.4)" },
// //         }}
// //         className="carousel-arrow"
// //       >
// //         <ChevronRight fontSize="large" />
// //       </IconButton>

// //       <style>
// //         {`
// //           .MuiBox-root:hover .carousel-arrow {
// //             opacity: 1;
// //           }
// //         `}
// //       </style>
// //     </Box>
// //   );
// // }
// import { Box, IconButton, Skeleton } from "@mui/material";
// import { ChevronLeft, ChevronRight } from "@mui/icons-material";
// import { useEffect, useRef, useState } from "react";



// const AUTO_SCROLL_DELAY = 4000;

// export default function HeroCarousel(id) {
//   const [index, setIndex] = useState(1);
//   const [transition, setTransition] = useState(true);
//   const [loaded, setLoaded] = useState({}); // 👈 track loaded images
//   const timeoutRef = useRef(null);

// const images = [
//  {id:0,
//   images:[ 
//     "/public/assets/stay/1.jpeg",
//     "/public/assets/stay/2.jpeg",
//     "/public/assets/stay/3.jpeg",
//     "/public/assets/stay/4.jpeg",
//     "/public/assets/stay/5.jpeg",
//     "/public/assets/stay/6.jpeg",
//     "/public/assets/stay/7.jpeg",
// ]},
//  {id:1,
//   images:[ 
//     "/public/assets/stay/BrassRoom/1.jpeg",
//     "/public/assets/stay/BrassRoom/2.jpeg",
//     "/public/assets/stay/BrassRoom/3.jpeg",
//     "/public/assets/stay/BrassRoom/4.jpeg",
//     "/public/assets/stay/BrassRoom/5.jpeg",
//     "/public/assets/stay/BrassRoom/6.jpeg",
//     "/public/assets/stay/BrassRoom/7.jpeg",
// ]},
//  {id:2,
//   images:[ "/assets/i1.jpg",
//   "/assets/i2.jpg",
//   "/assets/i3.jpg",
//   "/assets/room1.png",
//   "/assets/room2.png",
//   "/assets/room3.png",]},
//  {id:3,
//   images:[ "/assets/i1.jpg",
//   "/assets/i2.jpg",
//   "/assets/i3.jpg",
//   "/assets/room1.png",
//   "/assets/room2.png",
//   "/assets/room3.png",]},
//  {id:4,
//   images:[ "/assets/i1.jpg",
//   "/assets/i2.jpg",
//   "/assets/i3.jpg",
//   "/assets/room1.png",
//   "/assets/room2.png",
//   "/assets/room3.png",]},
//  {id:5,
//   images:[ "/assets/i1.jpg",
//   "/assets/i2.jpg",
//   "/assets/i3.jpg",
//   "/assets/room1.png",
//   "/assets/room2.png",
//   "/assets/room3.png",]},
//  {id:6,
//   images:[ "/assets/i1.jpg",
//   "/assets/i2.jpg",
//   "/assets/i3.jpg",
//   "/assets/room1.png",
//   "/assets/room2.png",
//   "/assets/room3.png",]},
//  {id:7,
//   images:[ "/assets/i1.jpg",
//   "/assets/i2.jpg",
//   "/assets/i3.jpg",
//   "/assets/room1.png",
//   "/assets/room2.png",
//   "/assets/room3.png",]}
// ];
//   const slides = [images[images.length - 1], ...images, images[0]];

//   useEffect(() => {
//     timeoutRef.current = setTimeout(() => {
//       setIndex((prev) => prev + 1);
//     }, AUTO_SCROLL_DELAY);

//     return () => clearTimeout(timeoutRef.current);
//   }, [index]);

//   const handleTransitionEnd = () => {
//     if (index === slides.length - 1) {
//       setTransition(false);
//       setIndex(1);
//     }
//     if (index === 0) {
//       setTransition(false);
//       setIndex(slides.length - 2);
//     }
//   };

//   useEffect(() => {
//     if (!transition) {
//       requestAnimationFrame(() => setTransition(true));
//     }
//   }, [transition]);

//   const prevSlide = () => setIndex((prev) => prev - 1);
//   const nextSlide = () => setIndex((prev) => prev + 1);

//   return (
//     <Box sx={{ position: "relative", height: "50vh", overflow: "hidden" }}>
//       {/* Slides */}
//       <Box
//         onTransitionEnd={handleTransitionEnd}
//         sx={{
//           display: "flex",
//           height: "100%",
//           transform: `translateX(-${index * 100}%)`,
//           transition: transition ? "transform 0.8s ease-in-out" : "none",
//         }}
//       >
//         {slides.map((img, i) => (
//           <Box
//             key={i}
//             sx={{
//               minWidth: "100%",
//               height: "100%",
//               position: "relative",
//             }}
//           >
//             {/* Skeleton */}
//             {!loaded[i] && (
//               <Skeleton
//                 variant="rectangular"
//                 animation="wave"
//                 width="100%"
//                 height="100%"
//               />
//             )}

//             {/* Image */}
//             <Box
//               component="img"
//               src={img}
//               alt={`slide-${i}`}
//               loading="lazy"
//               onLoad={() =>
//                 setLoaded((prev) => ({ ...prev, [i]: true }))
//               }
//               sx={{
//                 width: "100%",
//                 height: "100%",
//                 objectFit: "cover",
//                 position: "absolute",
//                 top: 0,
//                 left: 0,
//                 opacity: loaded[i] ? 1 : 0,
//                 transition: "opacity 0.5s ease",
//               }}
//             />
//           </Box>
//         ))}
//       </Box>

//       {/* Left Arrow */}
//       <IconButton
//         onClick={prevSlide}
//         className="carousel-arrow"
//         sx={{
//           position: "absolute",
//           top: "50%",
//           left: 16,
//           transform: "translateY(-50%)",
//           color: "#fff",
//           opacity: 0,
//           transition: "opacity 0.3s",
//           "&:hover": { backgroundColor: "rgba(0,0,0,0.4)" },
//         }}
//       >
//         <ChevronLeft fontSize="large" />
//       </IconButton>

//       {/* Right Arrow */}
//       <IconButton
//         onClick={nextSlide}
//         className="carousel-arrow"
//         sx={{
//           position: "absolute",
//           top: "50%",
//           right: 16,
//           transform: "translateY(-50%)",
//           color: "#fff",
//           opacity: 0,
//           transition: "opacity 0.3s",
//           "&:hover": { backgroundColor: "rgba(0,0,0,0.4)" },
//         }}
//       >
//         <ChevronRight fontSize="large" />
//       </IconButton>

//       <style>
//         {`
//           .MuiBox-root:hover .carousel-arrow {
//             opacity: 1;
//           }
//         `}
//       </style>
//     </Box>
//   );
// }

import { Box, IconButton, Skeleton } from "@mui/material";
import { ChevronLeft, ChevronRight } from "@mui/icons-material";
import { useEffect, useMemo, useRef, useState } from "react";

const AUTO_SCROLL_DELAY = 4000;

const IMAGE_GROUPS = [
  {
    id: 0,
    images: [
      "/public/assets/stay/BrassRoom.jpeg",
      "/public/assets/stay/CopperRoom.jpeg",
      "/public/assets/stay/thevintageroom.jpeg",
      "/public/assets/stay/stonewoodfamilyretreat.jpeg",
      "/public/assets/stay/stoneandstoryroom.jpeg",
      "/public/assets/stay/IronRoom.jpeg",
      "/public/assets/stay/cedarroom.jpeg",
    ],
  },
  {
    id: 1,
    images: [
      "/assets/stay/BrassRoom/1.jpeg",
      "/assets/stay/BrassRoom/2.jpeg",
      "/assets/stay/BrassRoom/3.jpeg",
      "/assets/stay/BrassRoom/4.jpeg",
      "/assets/stay/BrassRoom/5.jpeg",
      "/assets/stay/BrassRoom/6.jpeg",
      "/assets/stay/BrassRoom/7.jpeg",
    ],
  },
  {
    id: 2,
    images: [
      "/assets/i1.jpg",
      "/assets/i2.jpg",
      "/assets/i3.jpg",
      "/assets/room1.png",
      "/assets/room2.png",
      "/assets/room3.png",
    ],
  },
];

export default function HeroCarousel({ id=0 }) {
  const [index, setIndex] = useState(1);
  const [transition, setTransition] = useState(true);
  const [loaded, setLoaded] = useState({});
  const timeoutRef = useRef(null);

  // ✅ get images based on id
  const activeImages = useMemo(() => {
    return IMAGE_GROUPS.find((group) => group.id === id)?.images || [];
  }, [id]);

  // clone first & last for infinite loop
  const slides = useMemo(() => {
    if (activeImages.length === 0) return [];
    return [
      activeImages[activeImages.length - 1],
      ...activeImages,
      activeImages[0],
    ];
  }, [activeImages]);

  // reset when id changes
  useEffect(() => {
    setIndex(1);
    setLoaded({});
  }, [id]);

  useEffect(() => {
    if (slides.length === 0) return;

    timeoutRef.current = setTimeout(() => {
      setIndex((prev) => prev + 1);
    }, AUTO_SCROLL_DELAY);

    return () => clearTimeout(timeoutRef.current);
  }, [index, slides.length]);

  const handleTransitionEnd = () => {
    if (index === slides.length - 1) {
      setTransition(false);
      setIndex(1);
    }
    if (index === 0) {
      setTransition(false);
      setIndex(slides.length - 2);
    }
  };

  useEffect(() => {
    if (!transition) {
      requestAnimationFrame(() => setTransition(true));
    }
  }, [transition]);

  if (!slides.length) return null;

  return (
    <Box sx={{ position: "relative", height: "50vh", overflow: "hidden" }}>
      <Box
        onTransitionEnd={handleTransitionEnd}
        sx={{
          display: "flex",
          height: "100%",
          transform: `translateX(-${index * 100}%)`,
          transition: transition ? "transform 0.8s ease-in-out" : "none",
        }}
      >
        {slides.map((src, i) => (
          <Box key={i} sx={{ minWidth: "100%", position: "relative" }}>
            {!loaded[i] && (
              <Skeleton
                variant="rectangular"
                width="100%"
                height="100%"
              />
            )}
            <Box
              component="img"
              src={src}
              alt={`slide-${i}`}
              onLoad={() =>
                setLoaded((prev) => ({ ...prev, [i]: true }))
              }
              sx={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
                position: "absolute",
                inset: 0,
                opacity: loaded[i] ? 1 : 0,
                transition: "opacity 0.5s ease",
              }}
            />
          </Box>
        ))}
      </Box>

      <IconButton
        onClick={() => setIndex((p) => p - 1)}
        className="carousel-arrow"
        sx={{
          position: "absolute",
          top: "50%",
          left: 16,
          transform: "translateY(-50%)",
          color: "#fff",
          opacity: 0,
        }}
      >
        <ChevronLeft fontSize="large" />
      </IconButton>

      <IconButton
        onClick={() => setIndex((p) => p + 1)}
        className="carousel-arrow"
        sx={{
          position: "absolute",
          top: "50%",
          right: 16,
          transform: "translateY(-50%)",
          color: "#fff",
          opacity: 0,
        }}
      >
        <ChevronRight fontSize="large" />
      </IconButton>

      <style>
        {`
          .MuiBox-root:hover .carousel-arrow {
            opacity: 1;
          }
        `}
      </style>
    </Box>
  );
}
