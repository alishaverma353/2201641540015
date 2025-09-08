const CHARS = "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";

export function generateShortcode(length = 6): string {
  return Array.from({ length }, () => CHARS.charAt(Math.floor(Math.random() * CHARS.length))).join("");
}

export function isAlphanumeric(s: string): boolean {
  return /^[a-zA-Z0-9]+$/.test(s);
}

export function validateUrlFormat(u: string): boolean {
  try {
    const parsed = new URL(u);
    return parsed.protocol === "http:" || parsed.protocol === "https:";
  } catch {
    return false;
  }
}
