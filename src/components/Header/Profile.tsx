import { Avatar, Box, Flex, Text } from "@chakra-ui/react";

export function Profile() {
    return (
        <Flex align="center">
            <Box mr="4" textAlign="right">
                <Text>Leonardo Ramos de Sousa</Text>
                <Text color="gray.300" fontSize="small">
                    leoramosdsousa@gmail.com
                </Text>
            </Box>

            <Avatar size="md" name="Leonardo Ramos" />
        </Flex>
    )
}