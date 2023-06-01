import { sum } from "./mylib";
describe("test", () => {
  it("should pass", () => {
    expect(1).toBe(1);
  });
  it("should sum", () => {
    expect(sum(1, 2)).toBe(3);
  });
});
