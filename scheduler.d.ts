import { Promise } from 'rsvp';
import Router from '@ember/routing/router';
export declare const SIMPLE_CALLBACK: (callback: Function) => any;
export declare function beginScheduledWork(): void;
export declare function beginTransition(): void;
export declare function endTransition(): void;
export declare function setupRouter(router: Router): void;
export declare function reset(): void;
/**
 * Top level promise that represents the entry point for deferred work.
 * Subsequent promises are chained off this promise, successively composing
 * them together to approximate when painting has occurred.
 *
 * @public
 */
export declare function didTransition(): Promise<any>;
/**
 * This promise, when resolved, approximates after the route is first painted.
 * This can be used to schedule work to occur that is lower priority than initial
 * work (content outside of the viewport, rendering non-critical content).
 *
 * @public
 */
export declare function whenRoutePainted(): Promise<any>;
/**
 * This promise, when resolved, approximates after content is painted.
 *
 * @public
 */
export declare function whenRouteIdle(): Promise<any>;
/**
 * Used for testing
 */
export declare function routeSettled(): Promise<any>;
