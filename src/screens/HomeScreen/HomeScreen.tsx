import React from 'react';
import {Text} from 'react-native';

import {CarouselView} from '@components';
import {Container} from './style';

export const HomeScreen: React.FC = () => {
  return (
    <Container>
      <Text>Hello From HomeScreen</Text>
      <CarouselView />
    </Container>
  );
};
