import type { UrlEntry, ClickRecord, StoreShape, LogEntry } from "../types";

const STORAGE_KEY = "url_shortener_demo";

function readStore(): StoreShape {
  try {
    return JSON.parse(
      localStorage.getItem(STORAGE_KEY) || '{"urls":{},"logs":[]}'
    ) as StoreShape;
  } catch {
    return { urls: {}, logs: [] };
  }
}

function writeStore(store: StoreShape) {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(store));
}

export function appendLog(entry: LogEntry) {
  const s = readStore();
  s.logs.push(entry);
  writeStore(s);
}

export function getAllUrls(): UrlEntry[] {
  return Object.values(readStore().urls);
}

export function getUrl(shortcode: string): UrlEntry | null {
  return readStore().urls[shortcode] ?? null;
}

export function createShortUrl(params: {
  longUrl: string;
  shortcode: string;
  validityMinutes: number;
}): { success: boolean; entry?: UrlEntry; reason?: string } {
  const s = readStore();
  if (s.urls[params.shortcode]) {
    return { success: false, reason: "shortcode_exists" };
  }

  const now = new Date();
  const entry: UrlEntry = {
    longUrl: params.longUrl,
    shortcode: params.shortcode,
    createdAt: now.toISOString(),
    expiresAt: new Date(
      now.getTime() + params.validityMinutes * 60 * 1000
    ).toISOString(),
    clicks: [],
  };

  s.urls[params.shortcode] = entry;
  writeStore(s);
  return { success: true, entry };
}

export function recordClick(shortcode: string, click: ClickRecord) {
  const s = readStore();
  if (!s.urls[shortcode]) return false;
  s.urls[shortcode].clicks.push(click);
  writeStore(s);
  return true;
}
