import moment from 'moment';

import {
  DATE_OP, FIELDS_TO_MASK, MASKING_TEXT,
} from './constant';

export const getIsoDate = ({
  op, years = 0, months = 0, weeks = 0, days = 0, hours = 0, minutes = 0, seconds = 0,
} = {}) => {
  if (op === DATE_OP.ADD) {
    return moment().add({
      years, months, weeks, days, hours, minutes, seconds,
    }).toISOString();
  }

  if (op === DATE_OP.SUBSCTRACT) {
    return moment().subtract({
      years, months, weeks, days, hours, minutes, seconds,
    }).toISOString();
  }

  return moment().toISOString();
};

export const dateInPast = (dateToCheck) => moment(dateToCheck).diff(moment()) <= 0;

export const getInsertedId = (id) => {
  [[id]] = id;
  return Object.values(id)[0];
};

export const getRowCount = (rowCount) => {
  try {
    [[rowCount]] = rowCount;
  } catch (error) {
    [rowCount] = rowCount;
  }

  return Object.values(rowCount)[0];
};

export const regexReplace = (str, replacements = {}) => {
  Object.keys(replacements).forEach((key) => {
    str = str.replace(new RegExp(`{${key}}`, 'g'), replacements[key]);
  });
  return str;
};

export const maskFields = (key, val) => {
  if (FIELDS_TO_MASK.includes(key) && val) {
    return MASKING_TEXT;
  }
  return val;
};
