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
        .switchAllScenes({
          hub: 'antd-sample',
          pathname: 'getListData',
          scene: 'default'
        })
        .openReporter(false)
        .quit();
    });

    it('server side success should be ok', () => {
      return driver
        .switchScene({
          hub: 'antd-sample',
          pathname: 'getListData',
          scene: 'default',
          dealy: '0'
        })
        .getUrl(BASE_URL)
        .sleep(500)
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

    it('server side error should be ok', () => {
      return driver
        .switchScene({
          hub: 'antd-sample',
          pathname: 'getListData',
          scene: 'error',
          dealy: '1'
        })
        .getUrl(BASE_URL)
        .sleep(500);
    });
  });
});
