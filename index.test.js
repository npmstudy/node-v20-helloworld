import { test } from "node:test";
import assert from "node:assert";

import { sayHi } from "./index.js";

test("test if works correctly", async function (t) {
  const log = t.mock.method(global.console, "log");

  assert.strictEqual(log.mock.callCount(), 0);
  // call hello world say method
  await sayHi("liangqi");

  assert.strictEqual(log.mock.callCount(), 1);
});

test("test if works incorrectly", async function () {
  assert.rejects(async () => await sayHi(), new Error("fail"));
});
