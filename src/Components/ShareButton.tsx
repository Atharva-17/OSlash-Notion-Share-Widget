import { Button, PopoverTrigger } from "@chakra-ui/react";
import React from "react";
import { BsFillShareFill } from "react-icons/bs";

const ShareButton: React.FC = () => {
    return (
        <PopoverTrigger>
            <Button
                variant="solid"
                bgColor="black"
                textColor="white"
                _hover={{ bgColor: "black" }}
                rightIcon={<BsFillShareFill />}
            >
                Share
            </Button>
        </PopoverTrigger>
    );
};

export default ShareButton;
