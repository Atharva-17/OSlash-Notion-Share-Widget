import { VStack } from "@chakra-ui/react";
import { FC } from "react";
import ShareWidget from "./Components/ShareWidget";

const App: FC = () => {
    return (
        <VStack w="full" align="flex-start" p={10}>
            <ShareWidget />
        </VStack>
    );
};

export default App;
