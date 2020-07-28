import { Promise } from 'rsvp';
import Router from '@ember/routing/router';
export declare const SIMPLE_CALLBACK: (callback: Function) => any;
/**
 * Initializes the top level promise that initiates the post-render work.
 */
export declare function beginTransition(): void;
/**
 * Initiates the post-render work.
 */
export declare function endTransition(): void;
/**
 * Correct connects the router's transition events to
 * app scheduler's work.
 *
 * @param {Router} router An instance of an Ember router.
 */
export declare function setupRouter(router: Router): void;
/**
 * Resets the state of app scheduler's top-level scheduled work promise.
 */
export declare function reset(): void;
/**
 * Top level promise that represents the entry point for deferred work.
 * Subsequent promises are chained off this promise, successively composing
 * them together to approximate when painting has occurred.
 *
 * @public
 * @return {Promise} The top-level scheduled work promise.
 */
export declare function didTransition(): Promise<any>;
/**
 * This promise, when resolved, approximates after the route is first painted.
 * This can be used to schedule work to occur that is lower priority than initial
 * work (content outside of the viewport, rendering non-critical content).
 *
 * @public
 * @return {Promise} The scheduled work promise.
 */
export declare function whenRoutePainted(): Promise<any>;
/**
 * This promise, when resolved, approximates after content is painted.
 *
 * @public
 * @return {Promise} The scheduled work promise.
 */
export declare function whenRouteIdle(): Promise<any>;
/**
 * Allows for tests to pause until the scheduled work
 * promise is completed.
 *
 * @return {Promise} The scheduled work promise.
 */
export declare function routeSettled(): Promise<any>;
