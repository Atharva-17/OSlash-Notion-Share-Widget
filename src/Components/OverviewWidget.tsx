import {
    Avatar,
    Button,
    HStack,
    Icon,
    Input,
    InputGroup,
    InputRightElement,
    PopoverBody,
    PopoverFooter,
    PopoverHeader,
    Switch,
    VStack,
} from "@chakra-ui/react";
import { FC } from "react";
import { HiGlobe } from "react-icons/hi";
import OSlashLogo from "../Assets/oslashLogo.svg";
import { InputViewState, SampleData } from "../types";
import InfoCard from "./InfoCard";
import WidgetFooter from "./WidgetFooter";

interface OverviewWidgetProps {
    invitedUsers?: SampleData[];
    onInputViewChange: (value: InputViewState) => void;
}

const OverviewWidget: FC<OverviewWidgetProps> = (props) => {
    const { onInputViewChange, invitedUsers } = props;

    const defaultSelectedUser: SampleData = {
        name: "Everyone at OSlash",
        imgSrc: OSlashLogo,
        type: "user",
        details: "25 workspace members",
    };

    return (
        <>
            <PopoverHeader p={4} fontWeight="bold" border="5">
                <HStack w="full" justify="space-between">
                    <InfoCard
                        displayImage={<Icon as={HiGlobe} textColor="gray.500" fontSize="40" />}
                        heading="Share to web"
                        subHeading="Publish and share link with anyone" 
                    />
                    <Switch id="share" />
                </HStack>
            </PopoverHeader>
            <PopoverBody>
                <VStack w="full" alignItems="flex-start" spacing="4">
                    <InputGroup
                        w="full"
                        onFocus={() => onInputViewChange("focused")}
                        onBlur={() => onInputViewChange("blur")}
                    >
                        <Input borderWidth={1} pr="4.5rem" type="text" placeholder="People, emails, groups" />
                        <InputRightElement width="4.5rem" cursor="pointer">
                            <Button variant="outline" fontWeight="medium" borderLeftRadius="0">
                                Invite
                            </Button>
                        </InputRightElement>
                    </InputGroup>
                    <InfoCard
                        displayImage={<Avatar boxSize="40px" src={defaultSelectedUser.imgSrc} />}
                        heading={defaultSelectedUser.name}
                        subHeading={defaultSelectedUser.details}
                    />
                    {invitedUsers?.map((user) => {
                        return (
                            <InfoCard
                                displayImage={
                                    <Avatar
                                        boxSize="40px"
                                        src={user.imgSrc}
                                        name={user.name}
                                        bgColor="gray.400"
                                        textColor="white"
                                    />
                                }
                                heading={user.name}
                                subHeading={user?.details}
                                accessStateType={user?.permission}
                            />
                        );
                    })}
                </VStack>
            </PopoverBody>
            <PopoverFooter border="1" display="flex" alignItems="center" justifyContent="space-between">
                <WidgetFooter showCopyButton={true} />
            </PopoverFooter>
        </>
    );
};

export default OverviewWidget;
