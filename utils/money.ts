export function moneyFormat(value: any) {
  const formatter = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
  });
  if (!value) return '$0';
  return formatter.format(value);
}
