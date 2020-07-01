// функция возвращает текущую дату в формате гггг-мм-дд
function formatDateFull() {
  const date = new Date();
  const day = String(date.getDate()).padStart(2, '0');
  const month = String(date.getMonth() + 1).padStart(2, '0');
  const year = date.getFullYear();
  return `${year}-${month}-${day}`;
}

export { formatDateFull };
