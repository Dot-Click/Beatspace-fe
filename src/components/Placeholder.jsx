import { Container, Title, Text, Stack } from '@mantine/core';

const Placeholder = ({ title = "Page Coming Soon" }) => {
  return (
    <Container size="md" py="xl">
      <Stack align="center" gap="md">
        <Title order={2} ta="center">
          {title}
        </Title>
        <Text size="lg" ta="center" c="dimmed">
          This page is under development. Check back soon!
        </Text>
      </Stack>
    </Container>
  );
};

export default Placeholder;
