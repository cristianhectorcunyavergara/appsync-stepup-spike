export function validateStepUp(ctx) {

    const rc = {
        requiresStepUp: "true",
        challengeId: "POC123"
    };

    return {
        token: null,
        requiresStepUp: "true",
        challengeId: `${rc.challengeId}-resolver`,
        stopExecution: true
    };
}
