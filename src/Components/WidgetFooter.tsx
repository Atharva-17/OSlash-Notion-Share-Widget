import { Button, HStack, Icon, Text, useClipboard } from "@chakra-ui/react";
import React from "react";
import { FaLink, FaRegQuestionCircle } from "react-icons/fa";

interface WidgetFooterProps {
    showCopyButton: boolean;
}

const WidgetFooter: React.FC<WidgetFooterProps> = (props) => {
    const { showCopyButton } = props;
    const { hasCopied, onCopy } = useClipboard("https://www.oslash.com/");
    return (
        <HStack w="full" justify="space-between">
            <HStack w="full" spacing={1}>
                <Icon as={FaRegQuestionCircle} textColor="gray.600" fontSize="sm" fontWeight="bold" />
                <Text textColor="gray.500" fontSize="sm">
                    learn about sharing
                </Text>
            </HStack>
            {showCopyButton ? (
                <Button leftIcon={<FaLink />} variant="ghost" size="sm" onClick={onCopy}>
                    {hasCopied ? "Copied link" : "Copy link"}
                </Button>
            ) : null}
        </HStack>
    );
};

export default WidgetFooter;
