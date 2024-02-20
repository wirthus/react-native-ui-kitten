import React from 'react';
import { Icon, IconElement, TopNavigation, TopNavigationAction } from '@wirthus/ui-kitten-components';

const BackIcon = (props): IconElement => (
  <Icon
    {...props}
    name='arrow-back'
  />
);

const BackAction = (): React.ReactElement => (
  <TopNavigationAction icon={BackIcon} />
);

export const TopNavigationSimpleUsageShowcase = (): React.ReactElement => (
  <TopNavigation
    accessoryLeft={BackAction}
    title='Eva Application'
  />
);
