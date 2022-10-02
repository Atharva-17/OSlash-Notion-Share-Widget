import { Popover, PopoverContent } from "@chakra-ui/react";
import React from "react";
import { AccessStateType, InputViewState as InputViewStateType, SampleData } from "../types";
import InviteList from "./InviteList";
import OverviewWidget from "./OverviewWidget";
import ShareButton from "./ShareButton";

const ShareWidget: React.FC = () => {
    const [inputViewState, setInputViewState] = React.useState<InputViewStateType>("blur");
    const [invitedUsers, setInvitedUsers] = React.useState<SampleData[]>();
    return (
        <Popover
            placement="bottom-start"
            closeOnBlur={false}
            isLazy={false}
            lazyBehavior="unmount"
            onClose={() => setInputViewState("blur")}
        >
            <ShareButton />
            <PopoverContent w="xl" boxShadow="xl">
                {inputViewState !== "focused" ? (
                    <OverviewWidget onInputViewChange={setInputViewState} invitedUsers={invitedUsers} />
                ) : (
                    <InviteList onInputViewChange={setInputViewState} onInvite={setInvitedUsers} />
                )}
            </PopoverContent>
        </Popover>
    );
};

export default ShareWidget;
