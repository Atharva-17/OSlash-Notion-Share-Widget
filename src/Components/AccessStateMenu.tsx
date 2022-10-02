import { Button, Menu, MenuButton, MenuButtonProps, MenuItem, MenuList } from "@chakra-ui/react";
import React, { FC } from "react";
import { BsChevronDown } from "react-icons/bs";
import { AccessStateType } from "../types";

interface AccessStateMenuProps {
    menuButtonProps?: MenuButtonProps;
    defaultAccessState?: AccessStateType;
    onAccessStateChange: (value: AccessStateType) => void;
}

const AccessStateMenu: FC<AccessStateMenuProps> = (props) => {
    const { onAccessStateChange, defaultAccessState = "Full access", menuButtonProps } = props;
    const [accessState, setAccessState] = React.useState<AccessStateType>(defaultAccessState);
    const onMenuListSelect = (value: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
        const accessValue = (value.target as any).value as AccessStateType;
        setAccessState(accessValue);
        onAccessStateChange(accessValue);
    };

    return (
        <Menu>
            <MenuButton
                as={Button}
                variant="ghost"
                fontWeight="sm"
                size="sm"
                rightIcon={<BsChevronDown />}
                {...menuButtonProps}
            >
                {accessState}
            </MenuButton>
            <MenuList p="2" w="max-content" onClick={onMenuListSelect} zIndex="popover">
                <MenuItem borderRadius="md" value="Full access">
                    Full access
                </MenuItem>
                <MenuItem borderRadius="md" value="Can edit">
                    Can edit
                </MenuItem>
                <MenuItem borderRadius="md" value="Can view">
                    Can view
                </MenuItem>
                <MenuItem textColor="red.500" borderRadius="md" value="No access">
                    No access
                </MenuItem>
            </MenuList>
        </Menu>
    );
};

export default AccessStateMenu;
