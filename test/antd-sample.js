'use strict';

import {
  webpackHelper,
} from 'macaca-wd';

import {
  assert,
} from 'chai';

const {
  driver,
  BASE_URL,
} = webpackHelper;

describe('test/antd-sample.test.js', () => {
  describe('page func testing', () => {
    before(() => {
      return driver
        .initWindow({
          width: 800,
          height: 600,
          deviceScaleFactor: 2,
        });
    });

    afterEach(function () {
      return driver
        .coverage()
        .saveScreenshots(this);
    });

    after(() => {
      return driver
        .openReporter(false)
        .quit();
    });

    it('page render should be ok', () => {
      return driver
        .getUrl(BASE_URL)
        .sleep(3000)
        .elementByCss('#app > div > div.ant-layout-content > div')
        .click()
        .sleep(1000)
        .elementByCss('#app > div > div.ant-layout-content > div > div > div > div')
        .text()
        .then(d => {
          console.log(`-------- ${d} ---------`);
          assert.equal(d, 'Lucy');
        });
    });
  });
});
