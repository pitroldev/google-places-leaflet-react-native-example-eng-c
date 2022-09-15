import React from 'react';
import {TouchableOpacity} from 'react-native';

import {Container, Text} from './Navbar.styles';

type NavbarProps = {
  onPress: (s: string) => void;
};

const Navbar = ({onPress}: NavbarProps) => (
  <Container>
    <TouchableOpacity onPress={() => onPress('detail')}>
      <Text>Detalhes</Text>
    </TouchableOpacity>
    <TouchableOpacity onPress={() => onPress('map')}>
      <Text>Mapa</Text>
    </TouchableOpacity>
  </Container>
);

export default Navbar;
