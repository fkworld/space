export function parseUrlSimple(
  urlSearch = window.location.search,
): Record<string, string> {
  const urlObject: Record<string, string> = {};
  [...new URLSearchParams(urlSearch).entries()].forEach(([key, value]) => {
    urlObject[key] = value;
  });
  return urlObject;
}

export function stringifyUrlSimple(urlObject: Record<string, string>): string {
  const searchParams = new URLSearchParams();
  Object.entries(urlObject).forEach(([key, value]) => {
    searchParams.set(key, value);
  });
  return searchParams.toString();
}

export function syncUrlSimple(urlObjet: Record<string, string>) {
  syncUrl(stringifyUrlSimple(urlObjet));
}

export function parseUrlComplex(
  urlSearch = window.location.search,
): Record<string, unknown> {
  try {
    return JSON.parse(
      decodeURIComponent(new URLSearchParams(urlSearch).get("query") ?? ""),
    );
  } catch (error) {
    return {};
  }
}

export function stringifyUrlComplex(
  urlObject: Record<string, unknown>,
): string {
  try {
    return "query=" + encodeURIComponent(JSON.stringify(urlObject));
  } catch (error) {
    return "";
  }
}

export function syncUrlComplex(urlObject: Record<string, unknown>) {
  syncUrl(stringifyUrlComplex(urlObject));
}

export function clearUrl(): void {
  syncUrl("");
}

function syncUrl(urlSearch: string): void {
  const newUrl = new URL(window.location.href);
  newUrl.search = urlSearch;
  window.history.replaceState(undefined, "", newUrl.href);
}
