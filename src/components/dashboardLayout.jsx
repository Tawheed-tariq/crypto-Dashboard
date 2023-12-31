import { Box, Container, Flex, useDisclosure } from "@chakra-ui/react";
import Sidenav from "./sidenav";
import Topnav from "./topnav";
import SideDrawer from "./SideDrawer";

export default function DashboardLayout({title, children}){
    const {isOpen, onClose, onOpen} = useDisclosure() //this is a hook that provides 3 properties as written
    return(
        <Box >
            <Flex>
                <Box
                    display={{
                        base: "none",
                        md: "flex"
                    }}
                >
                    <Sidenav/>
                </Box>
                <SideDrawer isOpen={isOpen} onClose={onClose}/>
                <Box minW={'320px'} flexGrow={'1'}>
                    <Topnav title={title} onOpen={onOpen}/>
                    <Container 
                    overflowX={'hidden'} 
                    overflowY={'auto'} 
                    h={'calc(100vh - 134px)'} 
                    mt={'6'} maxW={'70rem'} 
                    px={{
                        base: '1',
                        sm: '8',
                        md: '12'
                    }}>
                        {children}
                    </Container>
                </Box>
            </Flex>
        </Box>
    )
}