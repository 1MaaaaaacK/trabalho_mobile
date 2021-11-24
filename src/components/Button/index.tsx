import React, { ReactNode } from 'react';
import { TouchableOpacity, TouchableOpacityProps } from 'react-native';

import { Container } from './styles';

interface ButtonProps extends TouchableOpacityProps {
  children: ReactNode;
}

export function Button({ children, ...rest }: ButtonProps) {
  return (
    <Container 
      activeOpacity={.7}
      {...rest}
    >
      {children}
    </Container>
  );
}