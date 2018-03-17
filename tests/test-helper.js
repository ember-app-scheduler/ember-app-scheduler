import Application from '../app';
import config from '../config/environment';
import { setApplication } from '@ember/test-helpers';
import { start } from 'ember-cli-qunit';
import QUnit from 'qunit';

function isVisible(el) {
  return el.offsetWidth !== 0 || el.offsetHeight !== 0 || el.getClientRects().length !== 0;
}

QUnit.extend(QUnit.assert, {
  isVisible: function(el, message) {
    let result = el !== null && isVisible(el);
    this.pushResult({ result, actual: result, expected: true, message });
  },
  isNotVisible: function(el, message) {
    let result = el === null || !isVisible(el);
    this.pushResult({ result, actual: result, expected: true, message });
  }
});

setApplication(Application.create(config.APP));
start();
