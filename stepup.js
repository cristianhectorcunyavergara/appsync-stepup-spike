import { runtime } from "@aws-appsync/utils";

export function validateStepUp(ctx) {

    const rc = ctx.identity?.resolverContext || {};

    console.log(
        "STEPUP_CONTEXT",
        JSON.stringify(rc)
    );

    if (rc.requiresStepUp === "true") {

        runtime.earlyReturn({
            token: null,
            requiresStepUp: "true",
            challengeId: `${rc.challengeId}-resolver`
        });
    }
}
