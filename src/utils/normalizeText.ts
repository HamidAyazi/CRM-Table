const persianDigits = "۰۱۲۳۴۵۶۷۸۹";
const englishDigits = "0123456789";

// normalizing digits to match both Farsi and English numbers
function normalizeDigits(str: string) {
  return str.replace(/[۰-۹]/g, (d) => {
    return englishDigits[persianDigits.indexOf(d)];
  });
}

// normalize text to match both upper and lower case, and ignoring multiple spaces
export function normalizeText(str: string) {
  return normalizeDigits(str).toLowerCase().trim().replace(/\s+/g, " ");
}
