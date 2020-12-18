export const formatDate = (date: Date) => {
  const jsDate = new Date(date);

  const formatedDate = jsDate.toLocaleDateString('de-DE', {
    day: 'numeric',
    month: 'short',
    year: 'numeric',
    hour: 'numeric',
    minute: 'numeric'
  });

  return `${formatedDate} Uhr`;
};
