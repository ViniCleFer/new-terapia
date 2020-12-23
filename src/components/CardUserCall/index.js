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

import { MdCheck, MdClose } from "react-icons/md";

import {Container} from './styles'

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
    <Container>
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
            <MenuList bg="#fff">
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
      <Flex mt="5px" mr="-10px" flexDirection="flex-end" align="flex-end" alignSelf="flex-end">
        <Button onClick={handleUpdateProfessional} bg="#6E8BC6" variant="solid" color="#fff">
          Editar
        </Button>
        
      </Flex>
    </Container>
  );
}

export default CardUserCall;
