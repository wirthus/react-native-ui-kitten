/**
 * @license
 * Copyright Akveo. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */

import {
  NativeDateService,
  NativeDateServiceOptions,
} from '@wirthus/ui-kitten-components';
import { parse as dateParse, format as dateFormat } from 'date-fns';

export interface DateFnsOptions extends NativeDateServiceOptions {
  parseOptions?: {
    useAdditionalDayOfYearTokens: boolean;
    useAdditionalWeekYearTokens: boolean;
  };
  formatOptions?: {
    useAdditionalDayOfYearTokens: boolean;
    useAdditionalWeekYearTokens: boolean;
  };
}

const DEFAULT_OPTIONS: DateFnsOptions = {
  format: 'dd/MM/yyyy',
  parseOptions: {
    useAdditionalDayOfYearTokens: true,
    useAdditionalWeekYearTokens: true,
  },
  formatOptions: {
    useAdditionalDayOfYearTokens: true,
    useAdditionalWeekYearTokens: true,
  },
};

export class DateFnsService extends NativeDateService {

  constructor(locale = 'en', options?: DateFnsOptions) {
    super(locale, { ...DEFAULT_OPTIONS, ...options });
  }

  public format(date: Date, format: string): string {
    if (date) {
      return dateFormat(date, format || this.options.format, (this.options as DateFnsOptions).formatOptions);
    }

    return '';
  }

  public parse(date: string, format: string): Date {
    return dateParse(date, format || this.options.format, new Date(), (this.options as DateFnsOptions).parseOptions);
  }

  public getId(): string {
    return 'date-fns';
  }
}
