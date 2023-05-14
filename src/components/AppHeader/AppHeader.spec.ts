// import globalJsdom from "global-jsdom";
// import * as sinon from "sinon";
import { expect } from "@esm-bundle/chai";

import { AppHeader } from "@/components/AppHeader";

describe("AppHeader component", () => {
  // let cleanup: { (): void };

  // before(() => {
  //   cleanup = globalJsdom();
  // });

  // after(() => {
  //   cleanup();
  // });

  // beforeEach(async () => {});

  // afterEach(async () => {});

  it("First helloApp tste test", () => {
    expect(AppHeader()).to.have.all.keys(["template", "styles"]);
  });
});
