import { describe, expect, test } from "vitest";

import {
  parseUrlComplex,
  parseUrlSimple,
  stringifyUrlComplex,
  stringifyUrlSimple,
} from "./url";

describe("simple url", () => {
  const urlObject = { a: "1", b: "true", c: "2,3,4" };
  const url = "a=1&b=true&c=2%2C3%2C4";

  test("parse normal", () => {
    expect(parseUrlSimple(url)).toEqual(urlObject);
  });

  test("parse with ?", () => {
    expect(parseUrlSimple("?" + url)).toEqual(urlObject);
  });

  test("parse empty", () => {
    expect(parseUrlSimple("")).toEqual({});
  });

  test("stringify normal", () => {
    expect(stringifyUrlSimple(urlObject)).toEqual(url);
  });

  test("loop", () => {
    expect(parseUrlSimple(stringifyUrlSimple(urlObject))).toEqual(urlObject);
    expect(stringifyUrlSimple(parseUrlSimple(url))).toEqual(url);
  });
});

describe("complex url", () => {
  const urlObject = { a: 1, b: true, c: [2, 3, 4] };
  const url = "query=" + encodeURIComponent(JSON.stringify(urlObject));

  test("parse normal", () => {
    expect(parseUrlComplex(url)).toEqual(urlObject);
  });

  test("parse with ?", () => {
    expect(parseUrlComplex("?" + url)).toEqual(urlObject);
  });

  test("parse empty", () => {
    expect(parseUrlComplex("")).toEqual({});
  });

  test("stringify normal", () => {
    expect(stringifyUrlComplex(urlObject)).toEqual(url);
  });

  test("loop", () => {
    expect(parseUrlComplex(stringifyUrlComplex(urlObject))).toEqual(urlObject);
    expect(stringifyUrlComplex(parseUrlComplex(url))).toEqual(url);
  });

  test("json parse error", () => {
    expect(parseUrlComplex("?{]")).toEqual({});
  });
});
