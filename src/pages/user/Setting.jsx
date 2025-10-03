import React from "react";
import {
  TextInput,
  Button,
  PasswordInput,
  Box,
  Switch,
  Text,
  Title,
} from "@mantine/core";
import { FaUserCircle, FaEye, FaEyeSlash, FaLock, FaExclamationTriangle } from "react-icons/fa";

const Setting = () => {
  return (
    <div className="h-[76vh] overflow-auto">
      {false ? (
        <div className="p-4 lg:p-8 rounded-2xl flex items-center justify-center min-h-[400px] bg-white">
          <div className="text-center">
            <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-cyan-500 mx-auto"></div>
            <Text size="sm" c="dimmed" mt="md">Loading profile...</Text>
          </div>
        </div>
      ) : (
        <div className="p-4 lg:p-8 rounded-2xl bg-white">
          <div className="flex justify-between mb-6">
            <Title
              order={2}
              fw={500}
              className="bg-gradient-to-r text-transparent bg-clip-text from-[#050505] to-[#767676]"
            >
              User Profile
            </Title>
            <Button
              size="md"
              radius="md"
              loading={false}
              onClick={() => {}}
              disabled={false}
            >
              Save Changes
            </Button>
          </div>

          <div className="mb-10">
            <div className="flex flex-col gap-6 mb-6">
              <div className="flex flex-row items-center gap-6">
                <div className="w-30 h-30 lg:w-[140px] lg:h-[140px] rounded-full overflow-hidden border-2 border-dashed border-slate-400">
                  <div className="flex items-center justify-center w-full h-full">
                    <FaUserCircle size={140} className="text-gray-400" />
                  </div>
                </div>
                <div className="flex flex-col gap-2">
                  <Button
                    radius="sm"
                    size="sm"
                    variant="filled"
                    bg="#282828"
                    color="dark"
                    onClick={() => {}}
                    w={160}
                    h={40}
                  >
                    Choose File
                  </Button>
                  <input
                    id="profileImage"
                    type="file"
                    accept="image/*"
                    className="hidden"
                    onChange={() => {}}
                  />
                  <Button
                    radius="sm"
                    size="sm"
                    className="!bg-[#DDDDDD] !text-[#888888]"
                    onClick={() => {}}
                    w={160}
                    h={40}
                  >
                    Remove
                  </Button>
                  {false && (
                    <Text color="red" size="sm" mt={5}>
                      <FaExclamationTriangle className="inline mr-1" />
                      Error
                    </Text>
                  )}
                </div>
              </div>
              <div className="flex-1 space-y-4">
                <TextInput
                  placeholder="Full Name"
                  className="w-full lg:w-[80%]"
                  disabled={false}
                  value=""
                  onChange={() => {}}
                />
                <TextInput
                  label=""
                  value=""
                  readOnly
                  rightSection={
                    <Box className="text-gray-500">
                      <FaLock size={16} />
                    </Box>
                  }
                  className="w-full lg:w-[80%]"
                />
              </div>
            </div>
          </div>

          <div className="border-1 border-gray-200 mb-10 w-full lg:w-[80%]"></div>

          <div className="mb-10 w-full lg:w-[80%]">
            <Title order={3} fw={600} mb="md">
              Password & Security
            </Title>
            <div className="p-5 bg-[#F7F7F7] mb-10 rounded-xl w-[90%]">
              <Text size="h1" c="dark">
                Your password must be at least 6 characters and should include a
                combination of numbers, letters and special characters (!$@%).
              </Text>
            </div>
            <div className="space-y-4">
              <PasswordInput
                placeholder="Current Password"
                visibilityToggleIcon={({ reveal }) =>
                  reveal ? <FaEyeSlash size={16} /> : <FaEye size={16} />
                }
                value=""
                onChange={() => {}}
              />
              <PasswordInput
                placeholder="New Password"
                visibilityToggleIcon={({ reveal }) =>
                  reveal ? <FaEyeSlash size={16} /> : <FaEye size={16} />
                }
                value=""
                onChange={() => {}}
              />
              <PasswordInput
                placeholder="Confirm New Password"
                visibilityToggleIcon={({ reveal }) =>
                  reveal ? <FaEyeSlash size={16} /> : <FaEye size={16} />
                }
                value=""
                onChange={() => {}}
              />
            </div>
          </div>

          <div className="border-1 border-gray-200 mb-10 w-full lg:w-[80%]"></div>

          <div className="w-full lg:w-[80%]">
            <Title order={3} fw={600} mb="md">
              Notifications
            </Title>
            <div className="space-y-6">
              <div className="flex items-center justify-between">
                <div>
                  <Text size="sm" c="#7184B4">
                    Transaction Alerts
                  </Text>
                  <Text fw={500}>Get notified when an achievement goals</Text>
                </div>
                <Switch defaultChecked size="md" color="#0391A5" />
              </div>
              <div className="flex items-center justify-between">
                <div>
                  <Text size="sm" c="#7184B4">
                    Subscription Updates
                  </Text>
                  <Text fw={500}>
                    Stay informed about upcoming renewals and cancellations.
                  </Text>
                </div>
                <Switch defaultChecked size="md" color="#0391A5" />
              </div>
              <div className="flex items-center justify-between">
                <div>
                  <Text size="sm" c="#7184B4">
                    Spending Insights
                  </Text>
                  <Text fw={500}>Receive alerts based on deadline goals</Text>
                </div>
                <Switch defaultChecked size="md" color="#0391A5" />
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Setting;
