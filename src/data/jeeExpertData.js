export const EXPERT_DATA = [
    // PHYSICS
    {
        id: "phys-001",
        subject: "Physics",
        type: "Formula",
        title: "Photoelectric Effect",
        highlight: "K_{max} = h\\nu - \\Phi",
        content: "Einstein's Equation: Maximum kinetic energy depends on incident photon energy (hν) minus work function (Φ).",
        tip: "Input Energy = Tax (Work Function) + Profit (Kinetic Energy)",
        createdAt: new Date().toISOString()
    },
    {
        id: "phys-002",
        subject: "Physics",
        type: "Formula",
        title: "Young's Double Slit (YDSE)",
        highlight: "\\beta = \\frac{\\lambda D}{d}",
        content: "Fringe Width Formula. Distance between maxima increases with wavelength (λ) and screen distance (D).",
        tip: "Big D is always on top (Screen distance >> slit separation)",
        createdAt: new Date().toISOString()
    },
    {
        id: "phys-003",
        subject: "Physics",
        type: "Formula",
        title: "Moment of Inertia",
        highlight: "I = \\sum mr^2",
        content: "Resistance to rotational change.\n• Ring: MR²\n• Disc: MR²/2\n• Sphere: 2/5 MR²",
        tip: "Hollow bodies always have HIGHER Inertia than solid ones.",
        createdAt: new Date().toISOString()
    },
    {
        id: "phys-004",
        subject: "Physics",
        type: "Formula",
        title: "Damped Oscillation",
        highlight: "A = A_0 e^{-\\frac{bt}{2m}}",
        content: "Amplitude decays exponentially over time. 'b' is the damping constant.",
        tip: "Amplitude halves in time T -> Becomes A/4 in time 2T.",
        createdAt: new Date().toISOString()
    },

    // CHEMISTRY
    {
        id: "chem-002",
        subject: "Chemistry",
        type: "Formula",
        title: "First Order Kinetics",
        highlight: "k = \\frac{2.303}{t} \\log \\frac{[A]_0}{[A]_t}",
        content: "Integrated Rate Law. Half life is constant and independent of concentration.",
        tip: "t½ = 0.693 / k",
        createdAt: new Date().toISOString()
    },
    // Removed Non-Formula Notes (Trends, Cannizzaro etc)

    // MATHS
    {
        id: "math-001",
        subject: "Maths",
        type: "Formula",
        title: "Integration by Parts",
        highlight: "\\int u v = u \\int v - \\int (u' \\int v)",
        content: "ILATE Rule for priority: Inverse, Log, Algebraic, Trig, Exponential.",
        tip: "∫ e^x [f(x) + f'(x)] dx = e^x f(x)",
        createdAt: new Date().toISOString()
    },
    {
        id: "math-002",
        subject: "Maths",
        type: "Formula",
        title: "Tangency to Ellipse",
        highlight: "c^2 = a^2 m^2 + b^2",
        content: "Condition for line y = mx + c to be tangent to standard Ellipse.",
        tip: "Hyperbola: Replace +b² with -b²",
        createdAt: new Date().toISOString()
    },
    {
        id: "math-003",
        subject: "Maths",
        type: "Formula",
        title: "Vector Triple Product",
        highlight: "\\vec{a} \\times (\\vec{b} \\times \\vec{c})",
        content: "result is coplanar with b and c. Use BAC - CAB rule.",
        tip: "(a.c)b - (a.b)c",
        createdAt: new Date().toISOString()
    }
];
