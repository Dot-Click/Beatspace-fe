// // // import React, { useState } from 'react';
// // // import { Box, Text, Image, TextInput, Button } from '@mantine/core';
// // // import { heartIcon } from '../../customIcons';

// // // const SupportArtistModal = ({ isOpen, onClose, beatName, artistName, imageSrc = '/assets/artist.png' }) => {
// // //   const [donationAmount, setDonationAmount] = useState('');

// // //   console.log('Modal props:', { isOpen, beatName, artistName });

// // //   if (!isOpen) return null;

// // //   const handleCheckout = () => {
// // //     console.log('Checkout:', donationAmount);
// // //     onClose();
// // //   };

// // //   return (
// // //     <Box
// // //       style={{
// // //         position: "fixed",
// // //         top: 0,
// // //         left: 0,
// // //         right: 0,
// // //         bottom: 0,
// // //         backgroundColor: "rgba(0, 0, 0, 0.8)",
// // //         display: "flex",
// // //         alignItems: "center",
// // //         justifyContent: "center",
// // //         zIndex: 1000,
// // //       }}
// // //       onClick={onClose}
// // //     >
// // //       <Box
// // //         style={{
// // //           backgroundColor: "#242730",
// // //           borderRadius: "12px",
// // //           padding: "2rem",
// // //           maxWidth: "400px",
// // //           width: "90%",
// // //           position: "relative",
// // //           border: "2px solid blue",
// // //         }}
// // //         onClick={(e) => e.stopPropagation()}
// // //       >
// // //         {/* Close Button */}
// // //         <Box
// // //           style={{
// // //             position: "absolute",
// // //             top: "1rem",
// // //             left: "1rem",
// // //             cursor: "pointer",
// // //             fontSize: "1.5rem",
// // //             color: "#F6F4D3",
// // //             fontWeight: "bold",
// // //           }}
// // //           onClick={onClose}
// // //         >
// // //           ✕
// // //         </Box>

// // //         {/* Album Art */}
// // //         <Box
// // //           style={{
// // //             display: "flex",
// // //             justifyContent: "center",
// // //             marginBottom: "1.5rem",
// // //           }}
// // //         >
// // //           <Box
// // //             style={{
// // //               width: "120px",
// // //               height: "120px",
// // //               borderRadius: "8px",
// // //               display: "flex",
// // //               alignItems: "center",
// // //               justifyContent: "center",
// // //               position: "relative",
// // //               overflow: "hidden",
// // //             }}
// // //           >
// // //             <Image
// // //               src={imageSrc}
// // //               alt="Artist"
// // //               style={{
// // //                 width: "100%",
// // //                 height: "100%",
// // //                 objectFit: "cover",
// // //                 borderRadius: "8px",
// // //               }}
// // //             />
// // //             <Text
// // //               style={{
// // //                 fontSize: "1.2rem",
// // //                 color: "#FFFFFF",
// // //                 fontWeight: "bold",
// // //                 letterSpacing: "2px",
// // //                 position: "absolute",
// // //                 bottom: "0.5rem",
// // //                 textShadow: "2px 2px 0px #000000",
// // //               }}
// // //             >
// // //               EFEKT
// // //             </Text>
// // //           </Box>
// // //         </Box>

// // //         {/* Title */}
// // //         <Text
// // //           className="font-modal"
// // //           style={{
// // //             color: "#F6F4D3",
// // //             textAlign: "center",
// // //             marginBottom: "1rem",
// // //             letterSpacing: "2px",
// // //           }}
// // //         >
// // //           SUPPORT ARTIST
// // //         </Text>

// // //         {/* Beat Details */}
// // //         <Box
// // //           style={{
// // //             textAlign: "center",
// // //             marginBottom: "1.5rem",
// // //           }}
// // //         >
// // //           <Text
// // //             className="font-xs"
// // //             style={{
// // //               color: "#F6F4D3",
// // //               marginBottom: "0.5rem",
// // //               letterSpacing: "1px",
// // //             }}
// // //           >
// // //             BEAT: {beatName}
// // //           </Text>
// // //           <Text
// // //             className="font-xs"
// // //             style={{
// // //               color: "#F6F4D3",
// // //               letterSpacing: "1px",
// // //             }}
// // //           >
// // //             BY: {artistName}
// // //           </Text>
// // //         </Box>

// // //         {/* Separator */}
// // //         <Box
// // //           style={{
// // //             height: "1px",
// // //             backgroundColor: "#F6F4D3",
// // //             marginBottom: "1.5rem",
// // //           }}
// // //         />

// // //         {/* Support Icon */}
// // //         <Box
// // //           style={{
// // //             display: "flex",
// // //             justifyContent: "center",
// // //             marginBottom: "1rem",
// // //           }}
// // //         >
// // //           {heartIcon()}
// // //         </Box>

// // //         {/* Message */}
// // //         <Box
// // //           style={{
// // //             textAlign: "center",
// // //             marginBottom: "1.5rem",
// // //           }}
// // //         >
// // //           <Text
// // //             className="font-xs"
// // //             style={{
// // //               color: "#F6F4D3",
// // //               marginBottom: "0.5rem",
// // //               letterSpacing: "1px",
// // //               lineHeight: 1.4,
// // //             }}
// // //           >
// // //             THIS BEAT IS FREE TO DOWNLOAD.
// // //           </Text>
// // //           <Text
// // //             className="font-xs"
// // //             style={{
// // //               color: "#F6F4D3",
// // //               letterSpacing: "1px",
// // //               lineHeight: 1.4,
// // //             }}
// // //           >
// // //             SUPPORT THE ARTIST IF YOU CAN.
// // //           </Text>
// // //         </Box>

// // //         {/* Donation Input */}
// // //         <Box
// // //           style={{
// // //             marginBottom: "1.5rem",
// // //           }}
// // //         >
// // //           <Text
// // //             className="font-xs"
// // //             style={{
// // //               color: "#F6F4D3",
// // //               marginBottom: "0.5rem",
// // //               letterSpacing: "1px",
// // //             }}
// // //           >
// // //             DONATION AMOUNT EUR:
// // //           </Text>
// // //           <TextInput
// // //             value={donationAmount}
// // //             className=""
// // //             onChange={(e) => setDonationAmount(e.target.value)}
// // //             placeholder="€ 00.0"
// // //             style={{
// // //               borderRadius: "20px",
// // //             }}
// // //             styles={{
// // //               input: {
// // //                 backgroundColor: "#181717",
// // //                 color: "#F6F4D3",
// // //                 fontFamily: "Press Start 2P",
// // //                 fontSize: "12px",
// // //                 letterSpacing: "1px",
// // //                 border: "none",
// // //                 borderRadius: "8px",
// // //               },
// // //             }}
// // //           />
// // //         </Box>

// // //         {/* Checkout Button */}
// // //         <Button
// // //           onClick={handleCheckout}
// // //           style={{
// // //             width: "100%",
// // //             backgroundColor: "#F6F4D3",
// // //             color: "#2D2D2D",
// // //             border: "none",
// // //             borderRadius: "6px",

// // //             fontSize: "14px",
// // //             fontWeight: "bold",
// // //             letterSpa: "2px",
// // //             fontFamily: "Press Start 2P",
// // //             cursor: "pointer",
// // //             transition: "all 0.3s ease",
// // //           }}
// // //           onMouseEnter={(e) => {
// // //             e.target.style.backgroundColor = "#FFD700";
// // //             e.target.style.transform = "scale(1.02)";
// // //           }}
// // //           onMouseLeave={(e) => {
// // //             e.target.style.backgroundColor = "#F6F4D3";
// // //             e.target.style.transform = "scale(1)";
// // //           }}
// // //         >
// // //           CHECKOUT
// // //         </Button>
// // //       </Box>
// // //     </Box>
// // //   );
// // // };

// // // export default SupportArtistModal;



// // import React, { useState } from "react";
// // import { Box, Text, Image, TextInput, Button } from "@mantine/core";
// // import { heartIcon } from "../../customIcons";

// // const SupportArtistModal = ({
// //   isOpen,
// //   onClose,
// //   beatName,
// //   artistName,
// //   imageSrc = "/assets/artist.png",
// // }) => {
// //   const [donationAmount, setDonationAmount] = useState("");

// //   if (!isOpen) return null;

// //   const handleCheckout = () => {
// //     console.log("Checkout:", donationAmount);
// //     onClose();
// //   };

// //   return (
// //     <Box
// //       style={{
// //         position: "fixed",
// //         top: 0,
// //         left: 0,
// //         right: 0,
// //         bottom: 0,
// //         backgroundColor: "rgba(0, 0, 0, 0.8)",
// //         display: "flex",
// //         alignItems: "center",
// //         justifyContent: "center",
// //         zIndex: 1000,
// //       }}
// //       onClick={onClose}
// //     >
// //       <Box
// //         style={{
// //           backgroundColor: "#242730",
// //           borderRadius: "12px",
// //           padding: "2rem",
// //           width: "90%",
// //           position: "relative",
// //           border: "2px solid blue",
// //           margin: "auto",
// //           transform: "translateY(0)",
// //           boxShadow: "0 0 25px rgba(0,0,0,0.6)",
// //           transition: "all 0.3s ease-in-out",
// //         }}
// //         className="
// //           sm:!mt-0
// //           md:!mt-0
// //           max-sm:!max-w-[400px] min-md:!max-w-[400px]
// //           min-lg:!max-w-[550px]
// //           min-lg-:!h-[75%]
// //         "
// //         onClick={(e) => e.stopPropagation()}
// //       >
// //         {/* Close Button */}
// //         <Box
// //           style={{
// //             position: "absolute",
// //             top: "1rem",
// //             left: "1rem",
// //             cursor: "pointer",
// //             fontSize: "1.5rem",
// //             color: "#F6F4D3",
// //             fontWeight: "bold",
// //           }}
// //           onClick={onClose}
// //         >
// //           ✕
// //         </Box>

// //         {/* Album Art */}
// //         <Box
// //           style={{
// //             display: "flex",
// //             justifyContent: "center",
// //             marginBottom: "1.5rem",
// //           }}
// //         >
// //           <Box
// //             style={{
// //               width: "120px",
// //               height: "120px",
// //               borderRadius: "8px",
// //               display: "flex",
// //               alignItems: "center",
// //               justifyContent: "center",
// //               position: "relative",
// //               overflow: "hidden",
// //             }}
// //           >
// //             <Image
// //               src={imageSrc}
// //               alt="Artist"
// //               style={{
// //                 width: "100%",
// //                 height: "100%",
// //                 objectFit: "cover",
// //                 borderRadius: "8px",
// //               }}
// //             />
// //             <Text
// //               style={{
// //                 fontSize: "1.2rem",
// //                 color: "#FFFFFF",
// //                 fontWeight: "bold",
// //                 letterSpacing: "2px",
// //                 position: "absolute",
// //                 bottom: "0.5rem",
// //                 textShadow: "2px 2px 0px #000000",
// //               }}
// //             >
// //               EFEKT
// //             </Text>
// //           </Box>
// //         </Box>

// //         {/* Title */}
// //         <Text
// //           className="font-modal"
// //           style={{
// //             color: "#F6F4D3",
// //             textAlign: "center",
// //             marginBottom: "1rem",
// //             letterSpacing: "2px",
// //           }}
// //         >
// //           SUPPORT ARTIST
// //         </Text>

// //         {/* Beat Details */}
// //         <Box
// //           style={{
// //             textAlign: "center",
// //             marginBottom: "1.5rem",
// //           }}
// //         >
// //           <Text
// //             className="font-xs"
// //             style={{
// //               color: "#F6F4D3",
// //               marginBottom: "0.5rem",
// //               letterSpacing: "1px",
// //             }}
// //           >
// //             BEAT: {beatName}
// //           </Text>
// //           <Text
// //             className="font-xs"
// //             style={{
// //               color: "#F6F4D3",
// //               letterSpacing: "1px",
// //             }}
// //           >
// //             BY: {artistName}
// //           </Text>
// //         </Box>

// //         {/* Separator */}
// //         <Box
// //           style={{
// //             height: "1px",
// //             backgroundColor: "#F6F4D3",
// //             marginBottom: "1.5rem",
// //           }}
// //         />

// //         {/* Support Icon */}
// //         <Box
// //           style={{
// //             display: "flex",
// //             justifyContent: "center",
// //             marginBottom: "1rem",
// //           }}
// //         >
// //           {heartIcon()}
// //         </Box>

// //         {/* Message */}
// //         <Box
// //           style={{
// //             textAlign: "center",
// //             marginBottom: "1.5rem",
// //           }}
// //         >
// //           <Text
// //             className="font-xs"
// //             style={{
// //               color: "#F6F4D3",
// //               marginBottom: "0.5rem",
// //               letterSpacing: "1px",
// //               lineHeight: 1.4,
// //             }}
// //           >
// //             THIS BEAT IS FREE TO DOWNLOAD.
// //           </Text>
// //           <Text
// //             className="font-xs"
// //             style={{
// //               color: "#F6F4D3",
// //               letterSpacing: "1px",
// //               lineHeight: 1.4,
// //             }}
// //           >
// //             SUPPORT THE ARTIST IF YOU CAN.
// //           </Text>
// //         </Box>

// //         {/* Donation Input */}
// //         <Box
// //           style={{
// //             marginBottom: "1.5rem",
// //           }}
// //         >
// //           <Text
// //             className="font-xs"
// //             style={{
// //               color: "#F6F4D3",
// //               marginBottom: "0.5rem",
// //               letterSpacing: "1px",
// //             }}
// //           >
// //             DONATION AMOUNT EUR:
// //           </Text>
// //           <TextInput
// //             value={donationAmount}
// //             onChange={(e) => setDonationAmount(e.target.value)}
// //             placeholder="€ 00.0"
// //             style={{
// //               borderRadius: "20px",
// //             }}
// //             styles={{
// //               input: {
// //                 backgroundColor: "#181717",
// //                 color: "#F6F4D3",
// //                 fontFamily: "Press Start 2P",
// //                 fontSize: "12px",
// //                 letterSpacing: "1px",
// //                 border: "none",
// //                 borderRadius: "8px",
// //               },
// //             }}
// //           />
// //         </Box>

// //         {/* Checkout Button */}
// //         <Button
// //           onClick={handleCheckout}
// //           style={{
// //             width: "100%",
// //             backgroundColor: "#F6F4D3",
// //             color: "#2D2D2D",
// //             border: "none",
// //             borderRadius: "6px",
// //             fontSize: "14px",
// //             fontWeight: "bold",
// //             fontFamily: "Press Start 2P",
// //             cursor: "pointer",
// //             transition: "all 0.3s ease",
// //           }}
// //           onMouseEnter={(e) => {
// //             e.target.style.backgroundColor = "#FFD700";
// //             e.target.style.transform = "scale(1.02)";
// //           }}
// //           onMouseLeave={(e) => {
// //             e.target.style.backgroundColor = "#F6F4D3";
// //             e.target.style.transform = "scale(1)";
// //           }}
// //         >
// //           CHECKOUT
// //         </Button>
// //       </Box>
// //     </Box>
// //   );
// // };

// // export default SupportArtistModal;



// import React, { useState } from "react";
// import { Box, Text, Image, TextInput, Button } from "@mantine/core";
// import { heartIcon } from "../../customIcons";

// const SupportArtistModal = ({
//   isOpen,
//   onClose,
//   beatName,
//   artistName,
//   imageSrc = "/assets/artist.png",
// }) => {
//   const [donationAmount, setDonationAmount] = useState("");

//   if (!isOpen) return null;

//   const handleCheckout = () => {
//     console.log("Checkout:", donationAmount);
//     onClose();
//   };

//   return (
//     <Box
//       style={{
//         position: "fixed",
//         inset: 0,
//         backgroundColor: "rgba(0, 0, 0, 0.8)",
//         display: "flex",
//         alignItems: "center",
//         justifyContent: "center",
//         zIndex: 1000,
//       }}
//       onClick={onClose}
//     >
//       <Box
//         style={{
//           backgroundColor: "#242730",
//           borderRadius: "12px",
//           padding: "2rem 1.6rem",
//           width: "90%",
//           maxWidth: "420px",
//           position: "relative",
//           border: "2px solid #d1c676",
//           boxShadow: "0 0 25px rgba(0,0,0,0.6)",
//           display: "flex",
//           flexDirection: "column",
//           justifyContent: "space-between",
//           alignItems: "center",
//           overflow: "hidden",
//           height: "auto",
//           maxHeight: "85vh",
//         }}
//         className="
//           lg:!max-w-[480px]
//           xl:!max-w-[500px]
//           lg:!h-[60vh]
//           xl:!h-[58vh]
//         "
//         onClick={(e) => e.stopPropagation()}
//       >
//         {/* Close Button */}
//         <Box
//           style={{
//             position: "absolute",
//             top: "1rem",
//             left: "1rem",
//             cursor: "pointer",
//             fontSize: "1.4rem",
//             color: "#F6F4D3",
//             fontWeight: "bold",
//           }}
//           onClick={onClose}
//         >
//           ✕
//         </Box>

//         {/* Top Section */}
//         <Box
//           style={{
//             display: "flex",
//             flexDirection: "column",
//             alignItems: "center",
//             justifyContent: "center",
//             flexGrow: 1,
//             textAlign: "center",
//           }}
//         >
//           {/* Artist Image */}
//           <Box
//             style={{
//               width: "110px",
//               height: "110px",
//               borderRadius: "8px",
//               overflow: "hidden",
//               marginBottom: "1rem",
//             }}
//           >
//             <Image
//               src={imageSrc}
//               alt="Artist"
//               style={{
//                 width: "100%",
//                 height: "100%",
//                 objectFit: "cover",
//               }}
//             />
//           </Box>

//           {/* Title */}
//           <Text
//             className="font-modal"
//             style={{
//               color: "#F6F4D3",
//               marginBottom: "1rem",
//               letterSpacing: "2px",
//               fontSize: "1rem",
//             }}
//           >
//             SUPPORT ARTIST
//           </Text>

//           {/* Beat Info */}
//           <Text
//             className="font-xs"
//             style={{
//               color: "#F6F4D3",
//               fontSize: "0.75rem",
//               lineHeight: 1.3,
//               marginBottom: "1.2rem",
//             }}
//           >
//             BEAT: {beatName}
//             <br />
//             BY: {artistName}
//           </Text>

//           {/* Divider */}
//           <Box
//             style={{
//               height: "1px",
//               width: "100%",
//               backgroundColor: "#F6F4D3",
//               marginBottom: "1rem",
//             }}
//           />

//           {/* Heart Icon */}
//           <Box style={{ marginBottom: "1rem" }}>{heartIcon()}</Box>

//           {/* Message */}
//           <Text
//             className="font-xs"
//             style={{
//               color: "#F6F4D3",
//               fontSize: "0.7rem",
//               lineHeight: 1.4,
//               marginBottom: "1.2rem",
//             }}
//           >
//             THIS BEAT IS FREE TO DOWNLOAD. <br />
//             SUPPORT THE ARTIST IF YOU CAN.
//           </Text>

//           {/* Donation Section */}
//           <Box style={{ width: "100%", marginBottom: "1rem" }}>
//             <Text
//               className="font-xs"
//               style={{
//                 color: "#F6F4D3",
//                 marginBottom: "0.5rem",
//                 fontSize: "0.75rem",
//                 letterSpacing: "1px",
//               }}
//             >
//               DONATION AMOUNT €:
//             </Text>
//             <TextInput
//               value={donationAmount}
//               onChange={(e) => setDonationAmount(e.target.value)}
//               placeholder="€ 00.0"
//               styles={{
//                 input: {
//                   backgroundColor: "#181717",
//                   color: "#F6F4D3",
//                   fontFamily: "Press Start 2P",
//                   fontSize: "11px",
//                   letterSpacing: "1px",
//                   border: "none",
//                   borderRadius: "6px",
//                   height: "36px",
//                   textAlign: "center",
//                 },
//               }}
//             />
//           </Box>
//         </Box>

//         {/* Checkout Button */}
//         <Button
//           onClick={handleCheckout}
//           style={{
//             width: "100%",
//             backgroundColor: "#F6F4D3",
//             color: "#2D2D2D",
//             border: "none",
//             borderRadius: "6px",
//             fontSize: "14px",
//             fontWeight: "bold",
//             fontFamily: "Press Start 2P",
//             height: "40px",
//             cursor: "pointer",
//             transition: "all 0.3s ease",
//             marginTop: "0.5rem",
//           }}
//           onMouseEnter={(e) => {
//             e.target.style.backgroundColor = "#FFD700";
//             e.target.style.transform = "scale(1.02)";
//           }}
//           onMouseLeave={(e) => {
//             e.target.style.backgroundColor = "#F6F4D3";
//             e.target.style.transform = "scale(1)";
//           }}
//         >
//           CHECKOUT
//         </Button>
//       </Box>
//     </Box>
//   );
// };

// export default SupportArtistModal;


import React, { useState } from "react";
import { Box, Text, Image, TextInput, Button } from "@mantine/core";
import { heartIcon } from "../../customIcons";

const SupportArtistModal = ({
  isOpen,
  onClose,
  beatName,
  artistName,
  imageSrc = "/assets/artist.png",
}) => {
  const [donationAmount, setDonationAmount] = useState("");

  if (!isOpen) return null;

  const handleCheckout = () => {
    console.log("Checkout:", donationAmount);
    onClose();
  };

  return (
    <Box
      style={{
        position: "fixed",
        inset: 0,
        backgroundColor: "rgba(0, 0, 0, 0.8)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        zIndex: 1000,
        overflowY: "auto",
      }}
      onClick={onClose}
    >
      <Box
        style={{
          backgroundColor: "#242730",
          borderRadius: "12px",
          padding: "2rem 1.6rem",
          width: "90%",
          maxWidth: "420px",
          position: "relative",
          border: "2px solid #d1c676",
          boxShadow: "0 0 25px rgba(0,0,0,0.6)",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          overflow: "hidden",
          height: "auto", // 👈 Fit to content
        }}
        className="
        min-sm:!h-[80%] 
        !overflow-y-auto
        custom-scrollbar
       
          lg:!max-w-[460px]
          xl:!max-w-[480px]
        "
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <Box
          style={{
            position: "absolute",
            top: "1rem",
            left: "1rem",
            cursor: "pointer",
            fontSize: "1.4rem",
            color: "#F6F4D3",
            fontWeight: "bold",
          }}
          onClick={onClose}
        >
          ✕
        </Box>

        {/* Top Section */}
        <Box
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            textAlign: "center",
            width: "100%",
          }}
          className="pt-40 min-lg:!pt-10 min-xl:!pt-10"
        >
          {/* Artist Image */}
          <Box
            style={{
              width: "110px",
              height: "110px",
              borderRadius: "8px",
              marginBottom: "1rem",
            }}
            className="min-sm:!h-[80px] max-sm:!h-[70px] "
          >
            <Image
              src={imageSrc}
              alt="Artist"
              style={{
                width: "100%",
                height: "100%",
                objectFit: "fill",
              }}
            />
          </Box>

          {/* Title */}
          <Text
            className="max-sm:!font-modal pixel-font  min-md:!text-3xl min-lg:text-4xl"
            style={{
              color: "#F6F4D3",
              marginBottom: "1rem",
              letterSpacing: "2px",
            }}
          >
            SUPPORT ARTIST
          </Text>

          {/* Beat Info */}
          <Text
            className="max-sm:!font-xs min-md:!text-lg min-lg:!text-xl pixel-font"
            style={{
              color: "#F6F4D3",
              lineHeight: 1.3,
              marginBottom: "1.2rem",
            }}
          >
            BEAT: {beatName}
            <br />
            BY: {artistName}
          </Text>

          {/* Divider */}
          <Box
            style={{
              height: "1px",
              width: "100%",
              backgroundColor: "#F6F4D3",
              marginBottom: "1rem",
            }}
          />

          {/* Heart Icon */}
          <Box style={{ marginBottom: "1rem" }}>{heartIcon()}</Box>

          {/* Message */}
          <Text
            className="font-xs pixel-font max-sm:scale-[0.7] min-md:scale-[0.8]"
            style={{
              color: "#F6F4D3",
              fontSize: "0.7rem",
              lineHeight: 1.4,
              marginBottom: "1.2rem",
            }}
          > 


            THIS BEAT IS FREE TO DOWNLOAD. <br />
            SUPPORT THE ARTIST IF YOU CAN.
          </Text>

          {/* Donation Section */}
          <Box style={{ width: "100%", marginBottom: "1rem" }}>
            <Text
              className="max-sm:font-xs pixel-font min-md:!text-2xl min-lg:!text-3xl"
              style={{
                color: "#F6F4D3",
                marginBottom: "0.5rem",
                letterSpacing: "1px",
              }}
            >
              DONATION AMOUNT €:
            </Text>
            <TextInput
              value={donationAmount}
              onChange={(e) => setDonationAmount(e.target.value)}
              placeholder="€ 00.0"
              styles={{
                input: {
                  backgroundColor: "#181717",
                  color: "#F6F4D3",
                  fontFamily: "Press Start 2P",
                  fontSize: "11px",
                  letterSpacing: "1px",
                  border: "none",
                  borderRadius: "6px",
                  height: "36px",
                },
              }}
            />
          </Box>
        </Box>

        {/* Checkout Button */}
        <Button
          className=" pixel-font "
          onClick={handleCheckout}
          style={{
            width: "100%",
            backgroundColor: "#F6F993",
            color: "#2D2D2D",
            border: "none",
            borderRadius: "6px",
            fontWeight: "bold",
            fontFamily: "Press Start 2P",
            height: "40px",
            cursor: "pointer",
            transition: "all 0.3s ease",
            marginTop: "0.5rem",
          }}
          // onMouseEnter={(e) => {
          //   e.target.style.backgroundColor = "#FFD700";
          //   e.target.style.transform = "scale(1.02)";
          // }}
          // onMouseLeave={(e) => {
          //   e.target.style.backgroundColor = "#F6F4D3";
          //   e.target.style.transform = "scale(1)";
          // }}
        >
          <span className="min-lg:!text-xl max-sm:!text-sm min-md:!text-lg"> CHECKOUT</span>
        </Button>
      </Box>
    </Box>
  );
};

export default SupportArtistModal;
