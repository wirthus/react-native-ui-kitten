/**
 * IMPORTANT: To use Moment make sure to install Moment Date Service
 * npm i @wirthus/ui-kitten-moment
 */

import React from 'react';
import { Calendar } from '@wirthus/ui-kitten-components';
import { MomentDateService } from '@wirthus/ui-kitten-moment';
import moment from 'moment';

const dateService = new MomentDateService();

export const CalendarMomentShowcase = (): React.ReactElement => {

  const [date, setDate] = React.useState(moment());

  return (
    <Calendar
      dateService={dateService}
      date={date}
      onSelect={nextDate => setDate(nextDate)}
    />
  );
};
