Version 9 of Highlight.js has reached EOL and is no longer supported.
Please upgrade or ask whatever dependency you are using to upgrade.
https://github.com/highlightjs/highlight.js/issues/2877

## v7.0.1 (2022-01-29)

#### :bug: Bug Fix
* [#1165](https://github.com/ember-app-scheduler/ember-app-scheduler/pull/1165) Use RouterService for transitionTo() fix deprecation ([@SergeAstapov](https://github.com/SergeAstapov))

#### :house: Internal
* [#1164](https://github.com/ember-app-scheduler/ember-app-scheduler/pull/1164) Cache dependencies in GitHub Actions CI workflow ([@SergeAstapov](https://github.com/SergeAstapov))
* [#1185](https://github.com/ember-app-scheduler/ember-app-scheduler/pull/1185) Add .d.ts files to eslint and prettier ignore files ([@scalvert](https://github.com/scalvert))
* [#1166](https://github.com/ember-app-scheduler/ember-app-scheduler/pull/1166) Replace use of htmlbars-inline-precompile with ember-cli-htmlbars ([@SergeAstapov](https://github.com/SergeAstapov))
* [#1168](https://github.com/ember-app-scheduler/ember-app-scheduler/pull/1168) Add eslint-plugin-qunit per latest addon blueprint ([@SergeAstapov](https://github.com/SergeAstapov))
* [#1169](https://github.com/ember-app-scheduler/ember-app-scheduler/pull/1169) Run ember-cli-update to v3.28.3 and enable embroider-safe scenario ([@SergeAstapov](https://github.com/SergeAstapov))
* [#1167](https://github.com/ember-app-scheduler/ember-app-scheduler/pull/1167) Update npmignore file ([@SergeAstapov](https://github.com/SergeAstapov))

#### Committers: 2
- Sergey Astapov ([@SergeAstapov](https://github.com/SergeAstapov))
- Steve Calvert ([@scalvert](https://github.com/scalvert))

## v7.0.0 (2021-10-19)

#### :boom: Breaking Change
* [#1162](https://github.com/ember-app-scheduler/ember-app-scheduler/pull/1162) Removes Router deprecation warning ([@scalvert](https://github.com/scalvert))
* [#1119](https://github.com/ember-app-scheduler/ember-app-scheduler/pull/1119) Drop Node.js 10 support ([@SergeAstapov](https://github.com/SergeAstapov))

#### :memo: Documentation
* [#1121](https://github.com/ember-app-scheduler/ember-app-scheduler/pull/1121) Fix few documentation typos and ensure examples use `this` ([@SergeAstapov](https://github.com/SergeAstapov))

#### :house: Internal
* [#1161](https://github.com/ember-app-scheduler/ember-app-scheduler/pull/1161) Upgrading ember-cli-addon-docs ([@scalvert](https://github.com/scalvert))

#### Committers: 3
- Bert De Block ([@bertdeblock](https://github.com/bertdeblock))
- Sergey Astapov ([@SergeAstapov](https://github.com/SergeAstapov))
- Steve Calvert ([@scalvert](https://github.com/scalvert))

## v6.0.0 (2021-05-20)

#### :boom: Breaking Change
* [#1101](https://github.com/ember-app-scheduler/ember-app-scheduler/pull/1101) Removes deprecated APIs (which were targeted for removal in 4.0.0) ([@scalvert](https://github.com/scalvert))

#### :memo: Documentation
* [#1116](https://github.com/ember-app-scheduler/ember-app-scheduler/pull/1116) Convert last few curlies to angle brackets ([@scalvert](https://github.com/scalvert))
* [#1097](https://github.com/ember-app-scheduler/ember-app-scheduler/pull/1097) Update setupRouter example to use RouterService ([@SergeAstapov](https://github.com/SergeAstapov))

#### Committers: 3
- Sergey Astapov ([@SergeAstapov](https://github.com/SergeAstapov))
- Steve Calvert ([@scalvert](https://github.com/scalvert))
- [@dependabot-preview[bot]](https://github.com/apps/dependabot-preview)

## v5.1.2 (2021-01-12)

#### :bug: Bug Fix
* [#962](https://github.com/ember-app-scheduler/ember-app-scheduler/pull/962) fix: invert `setupRouter` deprecation warning ([@buschtoens](https://github.com/buschtoens))

#### Committers: 2
- Jan Buschtöns ([@buschtoens](https://github.com/buschtoens))
- [@dependabot-preview[bot]](https://github.com/apps/dependabot-preview)

## v5.1.1 (2020-11-20)

#### :bug: Bug Fix
* [#899](https://github.com/ember-app-scheduler/ember-app-scheduler/pull/899) Recompute route-idle helper on transition change ([@nickeidler](https://github.com/nickeidler))

#### Committers: 2
- Nicholas Eidler ([@nickeidler](https://github.com/nickeidler))
- [@dependabot-preview[bot]](https://github.com/apps/dependabot-preview)

## v5.1.0 (2020-11-05)

#### :rocket: Enhancement
* [#773](https://github.com/ember-app-scheduler/ember-app-scheduler/pull/773) refactor: use `RouterService` and auto-destroy ([@buschtoens](https://github.com/buschtoens))

#### :house: Internal
* [#874](https://github.com/ember-app-scheduler/ember-app-scheduler/pull/874) Updating release-it ([@scalvert](https://github.com/scalvert))
* [#770](https://github.com/ember-app-scheduler/ember-app-scheduler/pull/770) Upgrades ember-test-waiters to ^2.3.0 ([@scalvert](https://github.com/scalvert))

#### Committers: 3
- Jan Buschtöns ([@buschtoens](https://github.com/buschtoens))
- Steve Calvert ([@scalvert](https://github.com/scalvert))
- [@dependabot-preview[bot]](https://github.com/apps/dependabot-preview)

## v5.0.1 (2020-06-09)

## v5.0.0 (2020-06-09)

#### :boom: Breaking Change
* [#726](https://github.com/ember-app-scheduler/ember-app-scheduler/pull/726) Updates code to use Octane idioms for tests and docs. ([@scalvert](https://github.com/scalvert))

#### Committers: 2
- Steve Calvert ([@scalvert](https://github.com/scalvert))
- [@dependabot-preview[bot]](https://github.com/apps/dependabot-preview)

## v4.1.0 (2020-06-08)

#### :rocket: Enhancement
* [#728](https://github.com/ember-app-scheduler/ember-app-scheduler/pull/728) Adding route-idle helper ([@scalvert](https://github.com/scalvert))

#### Committers: 2
- Steve Calvert ([@scalvert](https://github.com/scalvert))
- [@dependabot-preview[bot]](https://github.com/apps/dependabot-preview)

## v4.0.2 (2020-06-02)

#### :bug: Bug Fix
* [#719](https://github.com/ember-app-scheduler/ember-app-scheduler/pull/719) fix a painful typo ([@nlfurniss](https://github.com/nlfurniss))

#### Committers: 2
- Nathaniel Furniss ([@nlfurniss](https://github.com/nlfurniss))
- [@dependabot-preview[bot]](https://github.com/apps/dependabot-preview)

## v4.0.1 (2020-03-01)

#### :boom: Breaking Change
* [#537](https://github.com/ember-app-scheduler/ember-app-scheduler/pull/537) Dropping support for node 8 ([@scalvert](https://github.com/scalvert))

#### :bug: Bug Fix
* [#597](https://github.com/ember-app-scheduler/ember-app-scheduler/pull/597) task(deps): Upgrade ember-test-waiters to ^2.0.0 ([@scalvert](https://github.com/scalvert))

#### Committers: 2
- Steve Calvert ([@scalvert](https://github.com/scalvert))
- [@dependabot-preview[bot]](https://github.com/apps/dependabot-preview)

## v4.0.0 (2020-01-08)

#### :boom: Breaking Change
* task(node): Dropping support for node 8 (#537) (1780dc7)

#### :bug: Bug Fix
* task(release): Updating changelog to exclude merge commits and dependabot (29127a7)

#### :house: Internal
* Adding release-it configuration (#536) (70addef)
* Converting to github actions (#515) (e711ad8)

