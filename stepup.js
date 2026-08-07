export function validateStepUp(ctx) {

    const rc = ctx.identity?.resolverContext || {};

    console.log(
        "STEPUP_CONTEXT",
        JSON.stringify(rc)
    );

    if (rc.requiresStepUp === "true") {

        return {
            stopExecution: true,
            token: null,
            requiresStepUp: "true",
            challengeId: `${rc.challengeId}-resolver`
        };
    }

    return {
        stopExecution: false
    };
}
