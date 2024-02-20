import React from 'react';
import { Icon, IconElement, TopNavigationAction } from '@wirthus/ui-kitten-components';
import { TouchableWebElement } from '@wirthus/ui-kitten-components/devsupport';

const BackIcon = (props): IconElement => (
  <Icon
    {...props}
    name='arrow-back'
  />
);

export const TopNavigationActionSimpleUsageShowcase = (): TouchableWebElement => (
  <TopNavigationAction icon={BackIcon} />
);
