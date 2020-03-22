import { roundTo } from "../utils";

describe("roundTo different places works", () => {
  test("default", () => expect(roundTo(15.2387981)).toBe(15.24));
  test("thousandths place", () => expect(roundTo(0.5678912, 3)).toBe(0.568));
  it("rounds down", () => expect(roundTo(1.123)).toBe(1.12));
  it("rounds up on middle", () => expect(roundTo(1.5, 0)).toBe(2));
});
