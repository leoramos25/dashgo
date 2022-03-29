import { Avatar, Box, Flex, Text } from "@chakra-ui/react";

interface ProfileProps {
    showProfileData?: boolean;
}

export function Profile({ showProfileData }: ProfileProps) {
    return (
        <Flex align="center">
            { showProfileData && (
                <Box mr="4" textAlign="right">
                    <Text>Leonardo Ramos de Sousa</Text>
                    <Text color="gray.300" fontSize="small">
                        leoramosdsousa@gmail.com
                    </Text>
                </Box>
            )}

            <Avatar size="md" name="Leonardo Ramos" />
        </Flex>
    )
}