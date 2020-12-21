import React from "react";
import { useDispatch } from "react-redux";
import {
  Flex,
  Heading,
  Avatar,
  Icon,
  AvatarBadge,
  Button,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
} from "@chakra-ui/core";

import {
  MdCheck,
  MdClose,
  MdSettings,
  MdMoreHoriz,
} from "react-icons/md";

import { getProfileById } from "../../store/modules/list/actions";

import { setChangeProfessionalStatus } from "../../store/modules/professionals/actions";

import theme from '../../styles/theme';

function CardUserCall({ data }) {
  const dispatch = useDispatch();

  function handleUpdateProfessional() {
    dispatch(getProfileById(data.userId));
  }

  function handleProfessionalStatus(professionalProfile) {
    dispatch(setChangeProfessionalStatus(
      professionalProfile.professional.id,
      !professionalProfile.professional.active
    ));
  }

  return (
    <Flex
      flexDirection="column"
      backgroundColor="white"
      height="140px"
      // width="276px"
      p="20px"
    >
      <Flex flexDirection="rows">
        <Avatar src={data.photoUrl} width="64px" height="64px" rounded="32px">
          <Menu>
            <AvatarBadge
              as={MenuButton}
              cursor="pointer"
              size="1.5em"
              mr="2px"
              mb="2px"
              bg={data.professional.active ? "#84bd4a" : theme.colors.gray[400]}
              borderWidth="1px"
            >
              <Icon as={data.professional.active ? MdCheck : MdClose} size="13px" color="white" />
            </AvatarBadge>
            <MenuList backgroundColor="white">
              <MenuItem 
                onClick={() => handleProfessionalStatus(data)}
              >
                <Icon as={data.professional.active ? MdClose : MdCheck} size="20px" color="gray.700" mr="10px" />
                <Heading fontSize="16px" color="black" fontWeight="normal">
                  {data.professional.active ? 'Inativar' : 'Ativar'}
                </Heading>
              </MenuItem>
            </MenuList>
          </Menu>
          
        </Avatar>

        <Flex flexDirection="column" ml="20px">
          <Heading fontSize="14px" fontWeight="bold" mt="8px" color="black">
            {data.name}
          </Heading>
        </Flex>
      </Flex>
      <Flex mt="20px">
        <Menu>
          <MenuButton
            as={Button}
            border="0px"
            _hover={{ bg: "gray.310" }}
            rounded="0px"
            backgroundColor="white"
            width="22px"
            height="22px"
          >
            <Icon as={MdMoreHoriz} size="22px" color="black" />
          </MenuButton>
          <MenuList backgroundColor="white">
            <MenuItem 
              onClick={handleUpdateProfessional}
            >
              <Icon as={MdSettings} size="20px" color="gray.700" mr="10px" />
              <Heading fontSize="16px" color="black" fontWeight="normal">
                Editar Profissional
              </Heading>
            </MenuItem>
          </MenuList>
        </Menu>
      </Flex>
    </Flex>
  );
}

export default CardUserCall;
