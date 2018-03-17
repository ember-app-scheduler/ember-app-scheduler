import Application from '../app';
import config from '../config/environment';
import { setApplication } from '@ember/test-helpers';
import { start } from 'ember-cli-qunit';
import QUnit from 'qunit';

QUnit.extend(QUnit.assert, {
  isVisible: function(el, message) {
    let result = el !== null && !!(el.offsetWidth || el.offsetHeight || el.getClientRects().length);
    this.pushResult({ result, actual: result, expected: true, message });
  },
  isNotVisible: function(el, message) {
    let result = el === null || !(el.offsetWidth || el.offsetHeight || el.getClientRects().length);
    this.pushResult({ result, actual: result, expected: true, message });
  }
});

setApplication(Application.create(config.APP));
start();
