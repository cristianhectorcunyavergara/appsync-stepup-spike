export function validateStepUp(ctx) {

    const rc = ctx.identity?.resolverContext || {};

    console.log(
        "STEPUP_CONTEXT",
        JSON.stringify(rc)
    );

    if (rc.requiresStepUp === "true") {

        return {
            token: null,
            requiresStepUp: "true",
            challengeId: `${rc.challengeId}-resolver`,
            stopExecution: true
        };
    }

    return {
        stopExecution: false
    };
}
