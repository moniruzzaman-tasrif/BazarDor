// src/utils/formatNumber.ts
export function convertToBanglaNumber(input: string | number): string {
  const banglaNumbers = ["০", "১", "২", "৩", "৪", "৫", "৬", "৭", "৮", "৯"];
  const stringValue = String(input);

  return stringValue.replace(/[0-9]/g, match => {
    return banglaNumbers[parseInt(match, 10)];
  });
}
