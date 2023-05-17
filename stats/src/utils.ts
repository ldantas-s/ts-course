export const dateStringToDate = (dateString: string): Date => {
  const [day, month, year] = dateString
    .split('/')
    .map((value: string): number => parseInt(value));

  return new Date(year, month - 1, day);
};
