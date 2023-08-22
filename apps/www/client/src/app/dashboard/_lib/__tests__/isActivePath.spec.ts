import { isActivePath } from "..";

describe("isActivePath", () => {
  it("should return true when target path matches current path", () => {
    const currentPath = "/about";
    const targetPath = "/about";

    expect(isActivePath(currentPath, targetPath)).toBeTruthy();
  });

  it("should return false when target path doesn't matches current path", () => {
    const currentPath = "/pricing";
    const targetPath = "/about";

    expect(isActivePath(currentPath, targetPath)).toBeFalsy();
  });
});
