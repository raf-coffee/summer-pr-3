import { data } from "../data";

export const useSearch = (value: string) => {
  if (!value) {
    return data;
  }

  const lowerCaseValue = value.toLowerCase();
  return data.filter(
    (item) =>
      item.firstName.toLowerCase().includes(lowerCaseValue) ||
      item.lastName.toLowerCase().includes(lowerCaseValue) ||
      item.email.toLowerCase().includes(lowerCaseValue) ||
      item.jobTitle.toLowerCase().includes(lowerCaseValue)
  );
};
