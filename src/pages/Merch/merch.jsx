import React, { useEffect } from "react";
import { Box, Text, Button, Image, Flex, ActionIcon, Menu, Divider } from "@mantine/core";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getMerchs } from "../../store/actions/adminActions";
import { logoutAction } from "../../store/actions/authActions";
import { planetIcon, cartIcon, BackButtonIcon } from "../../customIcons";
import { FaUserCircle, FaSignOutAlt } from "react-icons/fa";

const Merch = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { merchs, isLoadingMerchs } = useSelector((state) => state.admin);
  const { isAuthenticated, user } = useSelector((state) => state.auth);

  useEffect(() => {
    dispatch(getMerchs());
  }, [dispatch]);

  const handleLogout = async () => {
    const res = await dispatch(logoutAction());
    if (res) {
      navigate("/admin/login");
    }
  };

  const handleBack = () => {
    if (window.history.length > 1) navigate(-1);
    else navigate("/menu");
  };

  return (
    <Box
      style={{
        height: "100vh",
        backgroundColor: "#111827",
        overflow: "hidden",
        position: "relative",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <video
        autoPlay
        muted
        loop
        playsInline
        style={{
          position: "absolute",
          inset: 0,
          width: "100%",
          height: "100%",
          objectFit: "cover",
          zIndex: 0,
        }}
      >
        <source src="/assets/bgvideo.mp4" type="video/mp4" />
      </video>

      <Flex
        justify={"space-between"}
        align="center"
        className="max-w-6xl relative mt-10 md:mt-10 mx-auto px-4 w-full"
        style={{ zIndex: 5, flexShrink: 0 }}
      >
        <button onClick={handleBack} style={{ background: 'transparent', border: 'none', cursor: 'pointer' }}>
          <BackButtonIcon />
        </button>
        <Text
          style={{
            color: "#F6F4D3",
            textShadow: "0 0 10px #F6F4D3",
            letterSpacing: "6px",
          }}
          className="!text-2xl vision-font min-md:!text-3xl lg:!text-4xl"
        >
          SHOP
        </Text>

        <Flex gap="md" align="center">
          {isAuthenticated && (
            <Menu shadow="md" width={200} position="bottom-end">
              <Menu.Target>
                <ActionIcon variant="transparent" size="xl" title="Account">
                  <FaUserCircle size={32} color="#F6F4D3" />
                </ActionIcon>
              </Menu.Target>

              <Menu.Dropdown bg="#1a1b1e" style={{ border: '1px solid #C1BE91' }}>
                <Menu.Label color="#C1BE91">Account</Menu.Label>
                <Menu.Item disabled color="#fff">
                  {user?.email || "User"}
                </Menu.Item>
                <Divider my="xs" color="#333" />
                <Menu.Item 
                  leftSection={<FaSignOutAlt size={14} />} 
                  color="red"
                  onClick={handleLogout}
                >
                  Logout
                </Menu.Item>
              </Menu.Dropdown>
            </Menu>
          )}
          {cartIcon()}
        </Flex>
      </Flex>

      <Box 
        className="max-w-6xl w-full custom-scrollbar relative mx-auto px-4"
        style={{ 
          flex: 1, 
          overflowY: "auto", 
          zIndex: 5, 
          marginTop: "2rem", 
          marginBottom: "1rem",
          paddingBottom: "4rem" // Extra padding so the last item isn't touching the bottom
        }}
      >
        {isLoadingMerchs ? (
          <Flex justify="center" align="center" style={{ minHeight: '200px' }}>
            <Text color="#F6F4D3" className="vision-font">LOADING...</Text>
          </Flex>
        ) : merchs.length > 0 ? (
          <Flex direction="column" gap={50}>
            {merchs.map((item) => (
              <Flex key={item._id} direction="column" align="center" justify="center">
                <Image
                  src={item.prod_image || item.image}
                  alt={item.name}
                  style={{
                    filter: "brightness(1.1)",
                    objectFit: "contain",
                    maxHeight: "350px",
                  }}
                  className="w-[180px] md:w-[220px] lg:w-[280px]"
                />
                <Text
                  style={{
                    color: "#F6F4D3",
                    letterSpacing: "4px",
                    textAlign: "center"
                  }}
                  className="text-lg vision-font min-lg:text-2xl mt-4"
                >
                  {item.name.toUpperCase()}
                </Text>
                <Button
                  className="mt-4 p-2 px-8 hover:scale-105 transition-all duration-300 vision-font !text-base"
                  onClick={() => navigate("/buyshirt", { state: { item } })}
                  bg={"#000"}
                  c={"#FFF"}
                  style={{
                    border: "2px solid #F6F4D3",
                    borderRadius: "10px",
                    boxShadow: "0 0 10px rgba(255,255,255,0.2)",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.boxShadow =
                      "0 6px 20px rgba(246, 244, 211, 0.4)";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.boxShadow =
                      "0 4px 15px rgba(0, 0, 0, 0.5)";
                  }}
                >
                  BUY | € {item.price}
                </Button>
              </Flex>
            ))}
          </Flex>
        ) : (
          <Flex justify="center" align="center" style={{ minHeight: '200px' }}>
            <Text color="#F6F4D3" className="vision-font">NO ITEMS FOUND</Text>
          </Flex>
        )}
      </Box>
    </Box>
  );
};

export default Merch;
