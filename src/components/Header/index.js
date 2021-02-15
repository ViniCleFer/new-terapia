import React from "react";
import { useDispatch, useSelector } from "react-redux";

import {
  Flex,
  Heading,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  Button,
  Image,
  Icon,
} from "@chakra-ui/core";

import { MdExitToApp } from "react-icons/md";
import { signOut } from "../../store/modules/auth/actions";

export default function Header() {
  const dispatch = useDispatch();

  const avatar = useSelector((state) => state.auth.profile.photoUrl);
  const name = useSelector((state) => state.auth.profile.name);

  function handleSignOut() {
    dispatch(signOut());
  }

  return (
    <Flex
      gridArea="header"
      backgroundColor="purple.600"
      alignItems="center"
      justifyContent="flex-end"
      maxW="1920px"
      width="100%"
    >
      <Menu>
        <MenuButton
          as={Button}
          variantColor="purple.600"
          border="0px"
          _hover={{ bg: "purple.500" }}
          height="47px"
          rounded="0px"
        >
          <Image src={avatar} alt={name} rounded="full" size="40px" />
        </MenuButton>
        <MenuList backgroundColor="white">
          <MenuItem onClick={() => handleSignOut()}>
            <Icon as={MdExitToApp} size="20px" color="gray.700" mr="10px" />
            <Heading fontSize="16px" color="black" fontWeight="normal">
              Sair
            </Heading>
          </MenuItem>
        </MenuList>
      </Menu>
    </Flex>
  );
}
