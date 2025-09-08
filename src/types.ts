// src/types.ts
export type ClickRecord = {
  ts: string;
  referrer: string;
  geo: string;
};

export type UrlEntry = {
  longUrl: string;
  shortcode: string;
  createdAt: string;
  expiresAt: string;
  clicks: ClickRecord[];
};

export type LogEntry = {
  ts: string;
  action: string;
  payload: Record<string, unknown>;
};

export type StoreShape = {
  urls: Record<string, UrlEntry>;
  logs: LogEntry[];
};
