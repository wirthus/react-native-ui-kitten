import React from 'react';
import { CheckBox } from '@wirthus/ui-kitten-components';

export const CheckboxSimpleUsageShowcase = (): React.ReactElement => {

  const [checked, setChecked] = React.useState(false);

  return (
    <CheckBox
      checked={checked}
      onChange={nextChecked => setChecked(nextChecked)}
    >
      {`Checked: ${checked}`}
    </CheckBox>
  );
};
