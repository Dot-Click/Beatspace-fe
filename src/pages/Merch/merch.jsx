import React, { useEffect } from "react";
import {
  Box,
  Text,
  Button,
  Image,
  Flex,
  ActionIcon,
  Menu,
  Divider,
} from "@mantine/core";
import { useNavigate } from "react-router-dom";
import UserHeader from "../../components/common/UserHeader";
import { useDispatch, useSelector } from "react-redux";
import { getMerchs } from "../../store/actions/adminActions";
import { logoutAction } from "../../store/actions/authActions";
import { cartIcon } from "../../customIcons";
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

  return (
    <>
      <UserHeader
        title="MERCH"
        suffix={
          <Flex gap="md" align="center">
            {isAuthenticated && (
              <Menu shadow="md" width={200} position="bottom-end">
                <Menu.Target>
                  <ActionIcon variant="transparent" size="xl" title="Account">
                    <FaUserCircle size={32} color="#F6F4D3" />
                  </ActionIcon>
                </Menu.Target>

                <Menu.Dropdown
                  bg="#1a1b1e"
                  style={{ border: "1px solid #C1BE91" }}
                >
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
        }
      />

      <Box
        style={{
          height: "90%",
          display: "flex",
          justifyContent: "center",
          zIndex: 5,
          marginTop: "4rem",
          position: "relative",
          paddingTop: "15vh", // Space for header
          paddingBottom: "5vh",
        }}
      >
        <Box
          className="custom-scrollbar w-full"
          style={{
            maxWidth: "1200px",
            height: "100%",
            overflowY: "auto",
            padding: "0 2rem",
          }}
        >
          {isLoadingMerchs ? (
            <Flex
              justify="center"
              align="center"
              style={{ minHeight: "200px" }}
            >
              <Text color="#F6F4D3" className="vision-font">
                LOADING...
              </Text>
            </Flex>
          ) : merchs.length > 0 ? (
            <Flex direction="column" gap={80} align="center">
              {merchs.map((item) => (
                <Flex
                  key={item._id}
                  direction="column"
                  align="center"
                  justify="center"
                  className="w-full"
                >
                  <Box
                    style={{
                      cursor: "pointer",
                      transition: "transform 1s ease",
                    }}
                    className="hover:scale-105  "
                    onClick={() => navigate("/buyshirt", { state: { item } })}
                  >
                    <Image
                      src={item.prod_image || item.image}
                      alt={item.name}
                      style={{
                        filter:
                          "brightness(1.1) drop-shadow(0 15px 30px rgba(0,0,0,0.5))",
                        objectFit: "contain",
                        maxHeight: "250px",
                      }}
                      className="w-[200px] md:w-[250px] lg:w-[320px] xl:w-[400px]"
                    />
                  </Box>

                  <Box className="flex flex-col items-center gap-4 mt-6">
                    <Text
                      style={{
                        color: "#F6F4D3",
                        letterSpacing: "4px",
                        textAlign: "center",
                        fontWeight: 900,
                      }}
                      className="text-2xl vision-font lg:text-3xl"
                    >
                      {item.name.toUpperCase()}
                    </Text>

                    <Button
                      className="p-2 hover:scale-110 transition-all duration-300 vision-font !text-lg"
                      onClick={() => navigate("/buyshirt", { state: { item } })}
                      bg={"#000"}
                      c={"#FFF"}
                      style={{
                        height: "auto",
                        border: "2px solid #F6F4D3",
                        borderRadius: "10px",
                        boxShadow: "0 10px 20px rgba(0,0,0,0.3)",
                      }}
                    >
                      BUY | € {item.price}
                    </Button>
                  </Box>
                </Flex>
              ))}
            </Flex>
          ) : (
            <Flex
              justify="center"
              align="center"
              style={{ minHeight: "200px" }}
            >
              <Text color="#F6F4D3" className="vision-font">
                NO ITEMS FOUND
              </Text>
            </Flex>
          )}
        </Box>
      </Box>
    </>
  );
};

export default Merch;
