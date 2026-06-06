export const getErrorMessage = (error: any): string => {
  const response = error?.response?.data;

  if (response?.errors) {
    const [field, messages] = Object.entries(response.errors)[0] as [
      string,
      string[],
    ];

    return `${field} field : ${messages[0]}`;
  }

  return response?.message || error?.message || "Something went wrong";
};
