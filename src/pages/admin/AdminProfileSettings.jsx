import React from "react";
import {
  TextInput,
  PasswordInput,
  Button,
  Text,
  Title,
  Divider,
  Avatar,
  Loader,
} from "@mantine/core";
import { FaUser, FaEnvelope, FaLock, FaCamera } from "react-icons/fa";

const AdminProfileSettings = () => {
  return (
    <div className="p-4 lg:p-8  rounded-2xl  border border-slate-200 bg-white">
      <div className="flex justify-end mb-0">
        <Button size="md" radius="md" type="button">
          Save Changes
        </Button>
      </div>

      <div className="mb-10 w-full lg:w-[80%] -mt-10">
        <Title order={3} fw={600} mb="md">
          Profile Picture
        </Title>

        <div className="flex items-start gap-4 mb-6">
          <div className="flex flex-col gap-3">
            <div className="relative cursor-pointer">
              <div className="relative">
                <Avatar
                  src={""}
                  alt="Profile"
                  size={180}
                  radius={999}
                />
              </div>
              <input
                type="file"
                className="hidden"
              />
            </div>
            <div className="text-red-500 text-sm mt-1"></div>
          </div>
          <div className="flex flex-col gap-2 self-start mt-[50px]">
            <Button
              variant="Filled"
              className="!bg-gray-800"
            >
              Change
            </Button>
            <Button
              variant="Filled"
              className="!bg-red-500"
            >
              Remove
            </Button>
          </div>
        </div>

        <Divider className="my-6" />

        <div>
          <Title order={3} fw={600} mb="md">
            Account Information
          </Title>

          <div className="space-y-4">
            <div>
              <Text fw={500} mb="xs">
                Full Name
              </Text>
              <TextInput
                placeholder="Enter your full name"
                size="md"
                radius="md"
                icon={<FaUser />}
              />
            </div>

            <div>
              <Text fw={500} mb="xs">
                Email Address
              </Text>
              <TextInput
                placeholder="Enter your email"
                size="md"
                radius="md"
                icon={<FaEnvelope />}
                disabled
              />
            </div>
          </div>

          <Divider className="my-6" />

          <Title order={3} fw={600} mb="md">
            Change Password
          </Title>

          <div className="space-y-4">
            <div>
              <Text fw={500} mb="xs">
                Current Password
              </Text>
              <PasswordInput
                placeholder="Enter current password"
                size="md"
                radius="md"
                icon={<FaLock />}
              />
            </div>

            <div>
              <Text fw={500} mb="xs">
                New Password
              </Text>
              <PasswordInput
                placeholder="Enter new password"
                size="md"
                radius="md"
                icon={<FaLock />}
              />
            </div>

            <div>
              <Text fw={500} mb="xs">
                Confirm New Password
              </Text>
              <PasswordInput
                placeholder="Confirm new password"
                size="md"
                radius="md"
                icon={<FaLock />}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminProfileSettings;
