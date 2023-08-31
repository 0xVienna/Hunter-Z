const body = document.body;

function smoothTransition(from, to) {
    const steps = 60;
    const interval = 1000 / steps;
    let currentStep = 0;

    const fromRgb = from.match(/\d+/g);
    const toRgb = to.match(/\d+/g);

    const rStep = (toRgb[0] - fromRgb[0]) / steps;
    const gStep = (toRgb[1] - fromRgb[1]) / steps;
    const bStep = (toRgb[2] - fromRgb[2]) / steps;

    const transitionInterval = setInterval(() => {
        if (currentStep >= steps) {
            clearInterval(transitionInterval);
        } else {
            const r = Math.round(parseInt(fromRgb[0]) + rStep * currentStep);
            const g = Math.round(parseInt(fromRgb[1]) + gStep * currentStep);
            const b = Math.round(parseInt(fromRgb[2]) + bStep * currentStep);
            const color = `rgb(${r}, ${g}, ${b})`;
            body.style.background = `linear-gradient(to bottom, ${color}, black)`;
            currentStep++;
        }
    }, interval);
}

// Smoothly transition from accent color to native color
smoothTransition("#220033", "0, 0, 0");
