import {
    Avatar,
    Button,
    HStack,
    Input,
    List,
    ListItem,
    PopoverBody,
    PopoverFooter,
    PopoverHeader,
    Tag,
    TagCloseButton,
    TagLabel,
    Text,
    VStack,
} from "@chakra-ui/react";
import React from "react";
import useDebounce from "../Hooks/UseDebounce";
import { AccessStateType, InputViewState, SampleData } from "../types";
import { sampleUsers } from "../util";
import AccessStateMenu from "./AccessStateMenu";
import WidgetFooter from "./WidgetFooter";

interface InviteListProps {
    onInputViewChange: (value: InputViewState) => void;
    onInvite: (value: SampleData[]) => void;
}
const InviteList: React.FC<InviteListProps> = (props) => {
    const { onInputViewChange, onInvite } = props;
    const initialFocusRef = React.useRef<HTMLInputElement>(null);
    const [permission, setPermission] = React.useState<AccessStateType>("Full access");
    const [selectedMembers, setSelectedMembers] = React.useState<SampleData[]>([]);
    const [searchTerm, setSearchTeam] = React.useState<string>("");
    const debouncedValue = useDebounce<string>(searchTerm, 500).toLowerCase();

    const userData = sampleUsers.filter((d) => d.type === "user" && d.name.toLowerCase().includes(debouncedValue));
    const groupData = sampleUsers.filter((d) => d.type === "group" && d.name.toLowerCase().includes(debouncedValue));

    const focusInput = () => {
        initialFocusRef.current?.focus();
    };

    const onUserSelect = (value: SampleData) => {
        const isUserAlreadySelected = selectedMembers.find((member) => member.name === value.name);
        if (selectedMembers.length > 2 || isUserAlreadySelected) return;
        focusInput();
        setSelectedMembers((prev) => [...prev, value]);
    };

    const onRemoveUser = (value: string) => {
        setSearchTeam("");
        const selectedUsers = selectedMembers.filter((member) => member.name !== value);
        focusInput();
        setSelectedMembers([...selectedUsers]);
    };

    const handleInvite = () => {
        const modifiedSelectedMembers = selectedMembers.map((member) => {
            return { ...member, permission };
        });
        onInvite(modifiedSelectedMembers);
        onInputViewChange("blur");
    };

    React.useEffect(() => {
        focusInput();
    }, []);

    return (
        <>
            <PopoverHeader bgColor="gray.100">
                <HStack w="full" justify="space-between">
                    {selectedMembers.map(({ name }, index) => {
                        return (
                            <Tag minW="max-content" borderRadius="sm" key={index} variant="subtle" bgColor="gray.200">
                                <TagLabel>{name}</TagLabel>
                                <TagCloseButton onClick={() => onRemoveUser(name)} />
                            </Tag>
                        );
                    })}
                    <Input
                        placeholder="Search emails, names or groups"
                        border="0"
                        fontSize="sm"
                        _focusVisible={{ outline: "none" }}
                        zIndex="popover"
                        value={searchTerm}
                        onChange={(e) => setSearchTeam(e.target.value)}
                        ref={initialFocusRef}
                    />
                    <HStack spacing="0">
                        <AccessStateMenu
                            onAccessStateChange={setPermission}
                            menuButtonProps={{ textColor: "gray.500", fontSize: "xs" }}
                        />
                        <Button
                            variant="outline"
                            fontWeight="medium"
                            size="sm"
                            bgColor="white"
                            onClick={handleInvite}
                            isDisabled={!Boolean(selectedMembers.length)}
                        >
                            Invite
                        </Button>
                    </HStack>
                </HStack>
            </PopoverHeader>
            <PopoverBody>
                <VStack w="full" align="flex-start" spacing="2" p="2">
                    <Text fontWeight="semibold" fontSize="md" textColor="gray.600">
                        Select a person
                    </Text>
                    {userData.length ? (
                        <List w="full">
                            {userData.map((data, index) => {
                                const { name, imgSrc } = data;
                                return (
                                    <ListItem
                                        key={index}
                                        _hover={{ bgColor: "gray.100" }}
                                        w="full"
                                        p="2"
                                        borderRadius="md"
                                        onClick={() => onUserSelect(data)}
                                    >
                                        <HStack spacing="3">
                                            <Avatar src={imgSrc} size="xs" />
                                            <Text fontSize="sm" fontWeight="semibold" textColor="gray.700">
                                                {name}
                                            </Text>
                                        </HStack>
                                    </ListItem>
                                );
                            })}
                        </List>
                    ) : (
                        <Text fontSize="sm" alignSelf="center" fontWeight="semibold" textColor="gray.700">
                            No person found
                        </Text>
                    )}
                    <Text fontWeight="semibold" fontSize="md" textColor="gray.600">
                        Select a group
                    </Text>
                    {groupData.length ? (
                        <List w="full">
                            {groupData.map((data, index) => {
                                const { name } = data;
                                return (
                                    <ListItem
                                        key={index}
                                        _hover={{ bgColor: "gray.100" }}
                                        w="full"
                                        p="2"
                                        borderRadius="md"
                                        onClick={() => onUserSelect(data)}
                                    >
                                        <HStack spacing="3">
                                            <Avatar
                                                name={name}
                                                borderRadius="md"
                                                bgColor="gray.400"
                                                textColor="white"
                                                size="xs"
                                            />
                                            <Text fontSize="sm" fontWeight="semibold" textColor="gray.700">
                                                {name}
                                            </Text>
                                        </HStack>
                                    </ListItem>
                                );
                            })}
                        </List>
                    ) : (
                        <Text alignSelf="center" fontSize="sm" fontWeight="semibold" textColor="gray.700">
                            No group found
                        </Text>
                    )}
                </VStack>
            </PopoverBody>
            <PopoverFooter
                bgColor="gray.100"
                border="1"
                display="flex"
                alignItems="center"
                justifyContent="space-between"
            >
                <WidgetFooter showCopyButton={false} />
            </PopoverFooter>
        </>
    );
};

export default InviteList;
