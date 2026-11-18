export function getReadingMinutes(content: string): number {
  const chineseCharacters = (content.match(/[\u3400-\u9fff]/g) ?? []).length;
  const latinWords = content
    .replace(/[\u3400-\u9fff]/g, " ")
    .trim()
    .split(/\s+/)
    .filter(Boolean).length;

  return Math.max(1, Math.ceil(chineseCharacters / 400 + latinWords / 220));
}
