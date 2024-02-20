import React from 'react';
import { CircularProgressBar } from '@wirthus/ui-kitten-components';
import { useProgress } from '../../helpers/progress.hook';

export const CircularProgressBarSimpleUsageShowcase = (): React.ReactElement => {
  const progress = useProgress();
  return (
    <CircularProgressBar progress={progress} />
  );
};
