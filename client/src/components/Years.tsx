export const yearsRange: number[] = [];

let year: number = new Date().getFullYear();
const yearsArray = () => {
  if (year === 1900) {
    yearsRange.push(1900);
    return;
  } else {
    yearsRange.push(year);
    year = year - 1;
    yearsArray();
  }
};

yearsArray();
