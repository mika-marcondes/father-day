import React from 'react';

import {Container} from './style';
import {Text} from 'react-native';
import {CarouselView} from '@components';

export const HomeScreen: React.FC = () => {
  return (
    <Container>
      <Text>Hello From HomeScreen</Text>
      <CarouselView />
    </Container>
  );
};
