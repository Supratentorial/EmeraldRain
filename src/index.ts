/// <reference path="../typings/index.d.ts" />

import * as angular from 'angular';

import 'angular-ui-router';
import routesConfig from './routes';

import './index.scss';

export const app: string = 'app';

angular
  .module(app, ['ui.router'])
  .config(routesConfig);
