import { Box, HStack, Text, VStack } from "@chakra-ui/react";
import React from "react";
import { AccessStateType } from "../types";
import AccessStateMenu from "./AccessStateMenu";

interface InfoCardProps {
    displayImage: React.ReactNode;
    heading: string;
    subHeading?: string;
    accessStateType?: AccessStateType;
}

const InfoCard: React.FC<InfoCardProps> = (props) => {
    const { displayImage, heading, subHeading, accessStateType } = props;
    return (
        <HStack w="full" justify="space-between">
            <HStack w="full" align="center">
                {displayImage}
                <VStack w="full" alignItems="flex-start" spacing="0">
                    <Text fontSize="md" fontWeight="medium">
                        {heading}
                    </Text>
                    {subHeading ? (
                        <Text fontSize="sm" textColor="gray.500" fontWeight="normal">
                            {subHeading}
                        </Text>
                    ) : null}
                </VStack>
            </HStack>
            <Box>
                <AccessStateMenu defaultAccessState={accessStateType} onAccessStateChange={(e) => console.log(e)} />
            </Box>
        </HStack>
    );
};

export default InfoCard;
