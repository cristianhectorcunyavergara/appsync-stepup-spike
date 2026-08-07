import { validateStepUp } from "./stepup.js";

export function executeMiddleware(ctx) {

    return validateStepUp(ctx);
}
