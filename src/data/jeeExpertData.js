export const EXPERT_DATA = [
    // PHYSICS
    {
        id: "phys-001",
        subject: "Physics",
        type: "Formula",
        title: "Kinematics Equations",
        highlight: "v = u + at  |  s = ut + ½at²  |  v² = u² + 2as",
        content: "Valid only for constant acceleration (a).",
        tip: "s is displacement, not distance.",
        createdAt: new Date().toISOString()
    },
    {
        id: "phys-002",
        subject: "Physics",
        type: "Formula",
        title: "Projectile Motion",
        highlight: "R = (u² sin 2θ) / g  |  H = (u² sin²θ) / 2g",
        content: "Range (R) is max at θ = 45°. Time of flight T = (2u sin θ) / g.",
        tip: "Complementary angles (θ and 90-θ) have the same Range.",
        createdAt: new Date().toISOString()
    },
    {
        id: "phys-003",
        subject: "Physics",
        type: "Formula",
        title: "Work-Energy Theorem",
        highlight: "W_all = ΔK = K_f - K_i",
        content: "Work done by all forces (conservative + non-conservative) equals change in Kinetic Energy.",
        tip: "Valid in all inertial frames.",
        createdAt: new Date().toISOString()
    },
    {
        id: "phys-004",
        subject: "Physics",
        type: "Formula",
        title: "Center of Mass",
        highlight: "R_cm = (m₁r₁ + m₂r₂ + ...) / (m₁ + m₂ + ...)",
        content: "Weighted average position of mass.",
        tip: "For continuous bodies, use ∫ r dm / ∫ dm.",
        createdAt: new Date().toISOString()
    },
    {
        id: "phys-005",
        subject: "Physics",
        type: "Formula",
        title: "Moment of Inertia",
        highlight: "Ring: MR² | Disc: MR²/2 | Solid Sphere: 2/5 MR²",
        content: "Resistance to rotational motion.",
        tip: "Hollow sphere = 2/3 MR² (Hollow > Solid).",
        createdAt: new Date().toISOString()
    },
    {
        id: "phys-006",
        subject: "Physics",
        type: "Formula",
        title: "Gravitational Potential Energy",
        highlight: "U = -GMm / r",
        content: "Potential energy at distance r from center.",
        tip: "At infinity, U = 0.",
        createdAt: new Date().toISOString()
    },
    {
        id: "phys-007",
        subject: "Physics",
        type: "Formula",
        title: "Escape Velocity",
        highlight: "v_e = √(2GM / R) = √(2gR)",
        content: "Minimum potential to escape gravitational field.",
        tip: "Independent of the mass of the projectile.",
        createdAt: new Date().toISOString()
    },
    {
        id: "phys-008",
        subject: "Physics",
        type: "Formula",
        title: "Simple Harmonic Motion (Energy)",
        highlight: "E = ½ mω²A²",
        content: "Total energy in SHM is constant.",
        tip: "K_max = U_max = Total Energy.",
        createdAt: new Date().toISOString()
    },
    {
        id: "phys-009",
        subject: "Physics",
        type: "Formula",
        title: "Doppler Effect",
        highlight: "f' = f (v ± v_o) / (v ∓ v_s)",
        content: "Observer moving towards source: numerator +",
        tip: "Think: Moving close increases frequency.",
        createdAt: new Date().toISOString()
    },
    {
        id: "phys-010",
        subject: "Physics",
        type: "Formula",
        title: "Young's Modulus",
        highlight: "Y = (F/A) / (ΔL/L)",
        content: "Stress / Strain within elastic limit.",
        tip: "Steel is more elastic than rubber.",
        createdAt: new Date().toISOString()
    },
    {
        id: "phys-011",
        subject: "Physics",
        type: "Formula",
        title: "Bernoulli's Principle",
        highlight: "P + ½ρv² + ρgh = Constant",
        content: "Conservation of energy for flowing fluids.",
        tip: "High speed = Low pressure.",
        createdAt: new Date().toISOString()
    },
    {
        id: "phys-012",
        subject: "Physics",
        type: "Formula",
        title: "Coulomb's Law",
        highlight: "F = k q₁q₂ / r²",
        content: "Force between two point charges. k = 9×10⁹.",
        tip: "Force is along the line joining centers.",
        createdAt: new Date().toISOString()
    },
    {
        id: "phys-013",
        subject: "Physics",
        type: "Formula",
        title: "Capacitance (Parallel Plate)",
        highlight: "C = ε₀A / d",
        content: "With dielectric K: C' = Kε₀A / d",
        tip: "Dielectric always increases capacitance.",
        createdAt: new Date().toISOString()
    },
    {
        id: "phys-014",
        subject: "Physics",
        type: "Formula",
        title: "Ohm's Law & Power",
        highlight: "V = IR  |  P = I²R = V²/R",
        content: "Voltage drop across resistor.",
        tip: "For series, P ∝ R. For parallel, P ∝ 1/R.",
        createdAt: new Date().toISOString()
    },
    {
        id: "phys-015",
        subject: "Physics",
        type: "Formula",
        title: "Magnetic Field (Circular Loop)",
        highlight: "B = (μ₀I) / (2R)",
        content: "Field at center of current carrying loop.",
        tip: "Use Right Hand Thumb Rule for direction.",
        createdAt: new Date().toISOString()
    },
    {
        id: "phys-016",
        subject: "Physics",
        type: "Formula",
        title: "Lorentz Force",
        highlight: "F = q(v × B)",
        content: "Force on moving charge in magnetic field.",
        tip: "Force is perpendicular to both v and B.",
        createdAt: new Date().toISOString()
    },
    {
        id: "phys-017",
        subject: "Physics",
        type: "Formula",
        title: "LCR Circuit Resonance",
        highlight: "ω₀ = 1 / √(LC)",
        content: "Condition where X_L = X_C (Inductive = Capacitive reactance).",
        tip: "Impedance Z is minimum (Z=R) at resonance.",
        createdAt: new Date().toISOString()
    },
    {
        id: "phys-018",
        subject: "Physics",
        type: "Formula",
        title: "Lens Maker's Formula",
        highlight: "1/f = (μ - 1)(1/R₁ - 1/R₂)",
        content: "Focal length of a lens depends on refractive index and curvature.",
        tip: "Sign convention is crucial.",
        createdAt: new Date().toISOString()
    },
    {
        id: "phys-019",
        subject: "Physics",
        type: "Formula",
        title: "Photoelectric Equation",
        highlight: "K_max = hν - Φ",
        content: "hν is photon energy, Φ is work function.",
        tip: "Slope of V_stopping vs frequency graph is h/e.",
        createdAt: new Date().toISOString()
    },
    {
        id: "phys-020",
        subject: "Physics",
        type: "Formula",
        title: "Bohr Model (Energy)",
        highlight: "E_n = -13.6 eV (Z²/n²)",
        content: "Energy levels of Hydrogen-like atoms.",
        tip: "Energy becomes less negative (increases) as n increases.",
        createdAt: new Date().toISOString()
    },

    // CHEMISTRY
    {
        id: "chem-001",
        subject: "Chemistry",
        type: "Formula",
        title: "Molarity (M)",
        highlight: "M = n / V(L)",
        content: "Moles of solute per Litre of solution.",
        tip: "Temperature dependent (Volume changes with T).",
        createdAt: new Date().toISOString()
    },
    {
        id: "chem-002",
        subject: "Chemistry",
        type: "Formula",
        title: "Bohr Radius",
        highlight: "r_n = 0.529 (n² / Z) Å",
        content: "Radius of nth orbit for H-like species.",
        tip: "Radius increases as n².",
        createdAt: new Date().toISOString()
    },
    {
        id: "chem-003",
        subject: "Chemistry",
        type: "Formula",
        title: "Bond Order",
        highlight: "B.O. = ½ (N_b - N_a)",
        content: "Bonding electrons - Antibonding electrons.",
        tip: "Higher B.O. = Higher Stability, Shorter Bond Length.",
        createdAt: new Date().toISOString()
    },
    {
        id: "chem-004",
        subject: "Chemistry",
        type: "Formula",
        title: "Ideal Gas Equation",
        highlight: "PV = nRT",
        content: "Universal Gas Law. R = 0.0821 L atm / mol K or 8.314 J / mol K.",
        tip: "Check units of Pressure and Volume.",
        createdAt: new Date().toISOString()
    },
    {
        id: "chem-005",
        subject: "Chemistry",
        type: "Formula",
        title: "Root Mean Square Speed",
        highlight: "v_rms = √(3RT / M)",
        content: "Speed of gas molecules. M is molar mass in kg.",
        tip: "v_rms > v_avg > v_mp",
        createdAt: new Date().toISOString()
    },
    {
        id: "chem-006",
        subject: "Chemistry",
        type: "Formula",
        title: "First Law of Thermodynamics",
        highlight: "ΔU = q + w",
        content: "Conservation of energy. Sign convention: q (heat given), w (work on system) is positive.",
        tip: "For adiabatic, q=0.",
        createdAt: new Date().toISOString()
    },
    {
        id: "chem-007",
        subject: "Chemistry",
        type: "Formula",
        title: "Gibbs Free Energy",
        highlight: "ΔG = ΔH - TΔS",
        content: "Spontaneity condition: ΔG < 0 is spontaneous.",
        tip: "At equilibrium, ΔG = 0.",
        createdAt: new Date().toISOString()
    },
    {
        id: "chem-008",
        subject: "Chemistry",
        type: "Formula",
        title: "pH of Buffer (Henderson)",
        highlight: "pH = pKa + log([Salt]/[Acid])",
        content: "For acidic buffer.",
        tip: "For basic buffer: pOH = pKb + log([Salt]/[Base]).",
        createdAt: new Date().toISOString()
    },
    {
        id: "chem-009",
        subject: "Chemistry",
        type: "Formula",
        title: "Work Done (Isothermal Rev)",
        highlight: "w = -2.303 nRT log(V₂/V₁)",
        content: "Maximum work done by gas in expansion.",
        tip: "Expansion work is negative.",
        createdAt: new Date().toISOString()
    },
    {
        id: "chem-010",
        subject: "Chemistry",
        type: "Formula",
        title: "Nernst Equation",
        highlight: "E = E° - (0.059/n) log Q",
        content: "Cell potential at non-standard conditions.",
        tip: "At equilibrium, E=0 and Q=K.",
        createdAt: new Date().toISOString()
    },
    {
        id: "chem-011",
        subject: "Chemistry",
        type: "Formula",
        title: "Faraday's First Law",
        highlight: "w = ZIt",
        content: "Mass deposited in electrolysis. Z = Equivalent Wt / 96500.",
        tip: "1 Faraday (96500 C) deposits 1 Gram Equivalent.",
        createdAt: new Date().toISOString()
    },
    {
        id: "chem-012",
        subject: "Chemistry",
        type: "Formula",
        title: "First Order Kinetics",
        highlight: "k = (2.303/t) log([A]₀/[A])",
        content: "Rate constant equation.",
        tip: "Half life t½ = 0.693/k (Independent of initial conc).",
        createdAt: new Date().toISOString()
    },
    {
        id: "chem-013",
        subject: "Chemistry",
        type: "Formula",
        title: "Arrhenius Equation",
        highlight: "k = Ae^(-Ea/RT)",
        content: "Temperature dependence of rate constant.",
        tip: "log k vs 1/T gives slope -Ea/2.303R.",
        createdAt: new Date().toISOString()
    },
    {
        id: "chem-014",
        subject: "Chemistry",
        type: "Formula",
        title: "Osmotic Pressure",
        highlight: "π = iCRT",
        content: "Colligative property. i is Van't Hoff factor.",
        tip: "Best for polymer molar mass determination.",
        createdAt: new Date().toISOString()
    },
    {
        id: "chem-015",
        subject: "Chemistry",
        type: "Formula",
        title: "Bragg's Law",
        highlight: "nλ = 2d sin θ",
        content: "X-ray diffraction in crystals.",
        tip: "d is interplanar distance.",
        createdAt: new Date().toISOString()
    },
    {
        id: "chem-016",
        subject: "Chemistry",
        type: "Formula",
        title: "Spin Magnetic Moment",
        highlight: "μ = √(n(n+2)) BM",
        content: "n is number of unpaired electrons.",
        tip: "Fe³⁺ (d5) -> n=5, μ ≈ 5.9 BM.",
        createdAt: new Date().toISOString()
    },
    {
        id: "chem-017",
        subject: "Chemistry",
        type: "Formula",
        title: "Effective Atomic Number",
        highlight: "EAN = Z - Ox.State + 2(CN)",
        content: "Stability of coordination compounds.",
        tip: "Stable if EAN = Next noble gas Z.",
        createdAt: new Date().toISOString()
    },
    {
        id: "chem-018",
        subject: "Chemistry",
        type: "Formula",
        title: "Aldol Condensation",
        highlight: "Requires α-Hydrogen",
        content: "Aldehydes/Ketones with dilute base form β-hydroxy aldehyde.",
        tip: "Cannizzaro happens if NO α-Hydrogen.",
        createdAt: new Date().toISOString()
    },
    {
        id: "chem-019",
        subject: "Chemistry",
        type: "Formula",
        title: "Test for Unsaturation",
        highlight: "Br₂/H₂O or Baeyer's Reagent",
        content: "Decolorizes Red-Brown Bromine or Pink KMnO4.",
        tip: "Alkenes and Alkynes give positive test.",
        createdAt: new Date().toISOString()
    },
    {
        id: "chem-020",
        subject: "Chemistry",
        type: "Formula",
        title: "Hinsberg Reagent",
        highlight: "Benzenesulfonyl chloride",
        content: "Distinguishes 1°, 2°, 3° amines.",
        tip: "1° soluble in alkali, 2° insoluble, 3° no reaction.",
        createdAt: new Date().toISOString()
    },

    // MATHS
    {
        id: "math-001",
        subject: "Maths",
        type: "Formula",
        title: "Quadratic Roots",
        highlight: "x = (-b ± √(b² - 4ac)) / 2a",
        content: "Sum α+β = -b/a, Product αβ = c/a.",
        tip: "Real roots if D ≥ 0.",
        createdAt: new Date().toISOString()
    },
    {
        id: "math-002",
        subject: "Maths",
        type: "Formula",
        title: "AP Sum",
        highlight: "S_n = n/2 [2a + (n-1)d]",
        content: "Sum of first n terms of AP.",
        tip: "Also S_n = n/2 (First + Last).",
        createdAt: new Date().toISOString()
    },
    {
        id: "math-003",
        subject: "Maths",
        type: "Formula",
        title: "GP Sum (Infinite)",
        highlight: "S_∞ = a / (1 - r)",
        content: "Valid only when |r| < 1.",
        tip: "If r > 1, sum diverges.",
        createdAt: new Date().toISOString()
    },
    {
        id: "math-004",
        subject: "Maths",
        type: "Formula",
        title: "Log Properties",
        highlight: "log(ab) = log a + log b",
        content: "log(a^b) = b log a.",
        tip: "Change of base: log_b(a) = log a / log b.",
        createdAt: new Date().toISOString()
    },
    {
        id: "math-005",
        subject: "Maths",
        type: "Formula",
        title: "Complex Cube Roots",
        highlight: "1 + ω + ω² = 0  |  ω³ = 1",
        content: "Roots of unity. ω = (-1 + i√3)/2.",
        tip: "Used frequently in series problems.",
        createdAt: new Date().toISOString()
    },
    {
        id: "math-006",
        subject: "Maths",
        type: "Formula",
        title: "Distance of Point to Line",
        highlight: "d = |ax₁ + by₁ + c| / √(a² + b²)",
        content: "Perpendicular distance from point (x₁, y₁) to ax+by+c=0.",
        tip: "For distance between parallel lines: |c₁-c₂|/√(a²+b²).",
        createdAt: new Date().toISOString()
    },
    {
        id: "math-007",
        subject: "Maths",
        type: "Formula",
        title: "Circle Tangent Condition",
        highlight: "c = ± a √(1 + m²)",
        content: "Line y = mx + c is tangent to x² + y² = a².",
        tip: "Point of contact is (-am/√(1+m²), a/√(1+m²)).",
        createdAt: new Date().toISOString()
    },
    {
        id: "math-008",
        subject: "Maths",
        type: "Formula",
        title: "Parabola Parametric",
        highlight: "(at², 2at)",
        content: "General point on y² = 4ax.",
        tip: "Tangent at 't' is ty = x + at².",
        createdAt: new Date().toISOString()
    },
    {
        id: "math-009",
        subject: "Maths",
        type: "Formula",
        title: "Ellipse Eccentricity",
        highlight: "b² = a² (1 - e²)",
        content: "For standard ellipse (a > b).",
        tip: "Hyperbola: b² = a² (e² - 1).",
        createdAt: new Date().toISOString()
    },
    {
        id: "math-010",
        subject: "Maths",
        type: "Formula",
        title: "Standard Limits",
        highlight: "lim(x→0) (sin x / x) = 1",
        content: "lim(x→0) (e^x - 1)/x = 1.",
        tip: "L'Hospital Rule: Differentiate num and den if 0/0 form.",
        createdAt: new Date().toISOString()
    },
    {
        id: "math-011",
        subject: "Maths",
        type: "Formula",
        title: "Chain Rule",
        highlight: "d/dx f(g(x)) = f'(g(x)) ⋅ g'(x)",
        content: "Derivative of composite functions.",
        tip: "Work from outside in.",
        createdAt: new Date().toISOString()
    },
    {
        id: "math-012",
        subject: "Maths",
        type: "Formula",
        title: "Integration by Parts",
        highlight: "∫ u v dx = u ∫ v dx - ∫ (u' ∫ v dx) dx",
        content: "Order of u choice: ILATE.",
        tip: "Inverse, Log, Algebra, Trig, Exponent.",
        createdAt: new Date().toISOString()
    },
    {
        id: "math-013",
        subject: "Maths",
        type: "Formula",
        title: "King's Property",
        highlight: "∫(a to b) f(x) = ∫(a to b) f(a+b-x)",
        content: "Most useful definite integral property.",
        tip: "Often 2I = sum of both forms.",
        createdAt: new Date().toISOString()
    },
    {
        id: "math-014",
        subject: "Maths",
        type: "Formula",
        title: "Area Under Curve",
        highlight: "A = ∫ |y| dx",
        content: "Area bounded by curve and x-axis.",
        tip: "Subtract lower curve area from upper curve.",
        createdAt: new Date().toISOString()
    },
    {
        id: "math-015",
        subject: "Maths",
        type: "Formula",
        title: "Vector Dot Product",
        highlight: "a ⋅ b = |a||b| cos θ",
        content: "Scalar product. Zero if vectors perpendicular.",
        tip: "Projection of a on b = (a⋅b)/|b|.",
        createdAt: new Date().toISOString()
    },
    {
        id: "math-016",
        subject: "Maths",
        type: "Formula",
        title: "Vector Cross Product",
        highlight: "|a × b| = |a||b| sin θ",
        content: "Vector perpendicular to both a and b.",
        tip: "Area of triangle = ½ |a × b|.",
        createdAt: new Date().toISOString()
    },
    {
        id: "math-017",
        subject: "Maths",
        type: "Formula",
        title: "3D Plane Equation",
        highlight: "ax + by + cz + d = 0",
        content: "Normal vector n = (a, b, c).",
        tip: "Distance from origin = |d|/√(a²+b²+c²).",
        createdAt: new Date().toISOString()
    },
    {
        id: "math-018",
        subject: "Maths",
        type: "Formula",
        title: "Bayes Theorem",
        highlight: "P(A|B) = P(B|A)P(A) / P(B)",
        content: "Probability of cause given effect.",
        tip: "Total Probability P(B) is sum of all cases.",
        createdAt: new Date().toISOString()
    },
    {
        id: "math-019",
        subject: "Maths",
        type: "Formula",
        title: "Variance",
        highlight: "σ² = (Σx² / n) - (Σx / n)²",
        content: "Variance = Mean of squares - Square of mean.",
        tip: "Standard Deviation σ = √Variance.",
        createdAt: new Date().toISOString()
    },
    {
        id: "math-020",
        subject: "Maths",
        type: "Formula",
        title: "Angle Between Lines",
        highlight: "tan θ = |(m₁ - m₂) / (1 + m₁m₂)|",
        content: "Angle between two straight lines.",
        tip: "If m₁m₂ = -1, lines are perpendicular (90°).",
        createdAt: new Date().toISOString()
    }
];
