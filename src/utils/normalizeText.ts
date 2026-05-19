const persianDigits = "۰۱۲۳۴۵۶۷۸۹";
const englishDigits = "0123456789";

function normalizeDigits(str: string) {
  return str.replace(/[۰-۹]/g, (d) => {
    return englishDigits[persianDigits.indexOf(d)];
  });
}

export function normalizeText(str: string) {
  return normalizeDigits(str)
    .toLowerCase()
    .trim()
    .replace(/\s+/g, " ");
}