import moment from 'moment';

export const isDateNull = (date: Date) =>
  moment(date).isSame(moment(new Date(0)));

export const Capitalize = (str: string) => {
  return str.charAt(0).toUpperCase() + str.slice(1);
};

export const CalculateAge = (birthday: Date) => {
  // birthday is a date
  const birthDate = moment(birthday);
  const currentDate = moment(new Date());
  const age = currentDate.diff(birthDate, 'years');
  return age > 1 ? `${age} years` : `${age} year`;
};

export const removeExtraText = (
  text: string,
  limit: number,
  readMore: boolean,
): string => {
  if (readMore) {
    return text;
  } else {
    if (text.length <= limit) {
      return text;
    } else {
      return `${text.slice(0, limit)}...`;
    }
  }
};
