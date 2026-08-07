import { executeMiddleware } from "./middleware.js";

export function request(ctx) {

    executeMiddleware(ctx);

    return {
        payload: {}
    };
}

export function response(ctx) {
    return ctx.result;
}
