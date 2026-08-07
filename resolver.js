import { executeMiddleware } from "./middleware.js";

export function request(ctx) {

    const result =
        executeMiddleware(ctx);

    if (result.stopExecution) {

        return result;
    }

    return {
        payload: {}
    };
}

export function response(ctx) {

    return ctx.result;
}
