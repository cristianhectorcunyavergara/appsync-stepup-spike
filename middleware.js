import { validateStepUp } from "./stepup.js";

export function executeMiddleware(ctx) {
    validateStepUp(ctx);
}
