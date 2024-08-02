export const formatCurrency = (value: string | number): string => {
  const formatter = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    minimumFractionDigits: 0,
  });

  const numberValue =
    typeof value === 'string' ? parseFloat(value.replace('$', '')) : value;
  return formatter.format(numberValue);
};
