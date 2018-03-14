import Application from '../app';
import config from '../config/environment';
import { setApplication } from '@ember/test-helpers';
import { start } from 'ember-cli-qunit';

setApplication(Application.create(config.APP));
start();
