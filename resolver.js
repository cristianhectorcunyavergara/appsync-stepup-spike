import { executeMiddleware } from "./middleware.js";

export function request(ctx) {

    executeMiddleware(ctx);

    return {};
}

export function response(ctx) {

    return {
        token: "CONTINUA",
        requiresStepUp: "false",
        challengeId: ""
    };
}
