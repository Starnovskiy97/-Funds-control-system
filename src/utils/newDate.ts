import moment from 'moment';

export const newDate = (format = 'D.MM.YY , kk:mm:ss') => {
  return moment(new Date()).format(format);
};
