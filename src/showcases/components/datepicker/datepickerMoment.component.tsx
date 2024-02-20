/**
 * IMPORTANT: To use Moment make sure to install Moment Date Service
 * npm i @wirthus/ui-kitten-moment
 */

import React from 'react';
import { StyleSheet } from 'react-native';
import moment from 'moment';
import { Datepicker, Layout } from '@wirthus/ui-kitten-components';
import { MomentDateService } from '@wirthus/ui-kitten-moment';

const dateService = new MomentDateService();

export const DatepickerMomentShowcase = (): React.ReactElement => {

  const [date, setDate] = React.useState(moment());

  return (
    <Layout
      style={styles.container}
      level='1'
    >

      <Datepicker
        placeholder='Pick Date'
        date={date}
        dateService={dateService}
        onSelect={nextDate => setDate(nextDate)}
      />

    </Layout>
  );
};

const styles = StyleSheet.create({
  container: {
    minHeight: 360,
  },
});
