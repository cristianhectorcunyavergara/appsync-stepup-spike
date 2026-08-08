import { executeMiddleware } from "./middleware.js";

export function request(ctx) {

    const result = executeMiddleware(ctx);

    if (result) {
        return result;
    }

    return {
        token: "CONTINUA",
        requiresStepUp: "false",
        challengeId: ""
    };
}

export function response(ctx) {
    return ctx.result;
}
