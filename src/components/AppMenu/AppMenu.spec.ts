// import globalJsdom from "global-jsdom";
// import * as sinon from "sinon";
import { expect } from "@esm-bundle/chai";

import { AppMenu } from "@/components/AppMenu";

describe("AppMenu component", () => {
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
    expect(AppMenu()).to.have.all.keys(["template", "styles"]);
  });
});
