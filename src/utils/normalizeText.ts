const persianDigits = "۰۱۲۳۴۵۶۷۸۹";
const englishDigits = "0123456789";

function normalizeDigits(str: string) { // normalizing digits to match both Farsi and English numbers
  return str.replace(/[۰-۹]/g, (d) => {
    return englishDigits[persianDigits.indexOf(d)];
  });
}

export function normalizeText(str: string) { // normalize text to match both upper and lower case, and ignoring multiple spaces
  return normalizeDigits(str)
    .toLowerCase()
    .trim()
    .replace(/\s+/g, " ");
}