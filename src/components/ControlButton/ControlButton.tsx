import React from 'react';
import {Image} from 'react-native';

import {ArrowRight} from '@assets';
import {Container} from './style';

export const ControlButton: React.FC = () => {
  return (
    <Container>
      <Image source={ArrowRight} />
    </Container>
  );
};
