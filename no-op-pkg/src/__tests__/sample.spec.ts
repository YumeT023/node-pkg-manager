import {checkProject} from "../index";

describe("no-op-pkg", () => {
  test("no op pkg for tesing purpose", () => {
    expect("no-op-pkg works").toBe(checkProject());
  });
});
