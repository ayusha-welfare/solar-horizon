import { useState } from "react";
import { useLocalStorage } from "../../hooks/useLocalStorage";
import { ChevronDown, ChevronRight, CheckCircle } from "lucide-react";
import { cn } from "../../lib/utils";

const INITIAL_SYLLABUS = {
    Physics: [
        { category: "Mechanics", topics: ["Kinematics", "Laws of Motion", "Work Power Energy", "Rotational Motion", "Gravitation"] },
        { category: "Electrodynamics", topics: ["Electrostatics", "Current Electricity", "Magnetism", "EMI & AC"] },
        { category: "Modern Physics", topics: ["Dual Nature", "Atoms & Nuclei", "Semiconductors"] },
    ],
    Chemistry: [
        { category: "Physical", topics: ["Mole Concept", "Atomic Structure", "Equilibrium", "Kinetics", "Electrochemistry"] },
        { category: "Inorganic", topics: ["Periodic Table", "Chemical Bonding", "Coordination Compounds", "d-block"] },
        { category: "Organic", topics: ["GOC", "Hydrocarbons", "Haloalkanes", "Aldehydes Ketones", "Amines"] },
    ],
    Maths: [
        { category: "Algebra", topics: ["Quadratic Eq", "Sequence Series", "Complex Numbers", "Binomial", "Matrices"] },
        { category: "Calculus", topics: ["Functions", "Limits", "Derivatives", "Integration", "Differential Eq"] },
        { category: "Coordinate", topics: ["Straight Lines", "Circles", "Conics"] },
        { category: "Vectors & 3D", topics: ["Vectors", "3D Geometry"] },
    ]
};

export default function SyllabusPage() {
    // Store status: { "Physics-Kinematics": "green", ... }
    const [statusMap, setStatusMap] = useLocalStorage("jee-syllabus-status", {});
    const [openCategories, setOpenCategories] = useState({});

    const toggleStatus = (key) => {
        setStatusMap(prev => {
            const current = prev[key];
            const next = current === "green" ? "red" : current === "yellow" ? "green" : "yellow";
            // Cycle: undefined -> yellow -> green -> red -> yellow ...
            // Actually let's do: undefined/red (weak) -> yellow (moderate) -> green (strong)
            const nextState = !current ? "yellow" : current === "yellow" ? "green" : "red";
            return { ...prev, [key]: nextState };
        });
    };

    const toggleCategory = (cat) => {
        setOpenCategories(prev => ({ ...prev, [cat]: !prev[cat] }));
    };

    return (
        <div className="space-y-6">
            <header>
                <h1 className="text-3xl font-bold tracking-tight">Syllabus Tracker</h1>
                <p className="text-muted-foreground">Identify your weak spots. Turn Red into Green.</p>
            </header>

            <div className="grid md:grid-cols-3 gap-6">
                {Object.entries(INITIAL_SYLLABUS).map(([subject, categories]) => (
                    <div key={subject} className="space-y-4">
                        <div className="flex items-center gap-2 mb-2">
                            <h2 className="text-xl font-bold">{subject}</h2>
                            <div className="h-px bg-border flex-1" />
                        </div>

                        {categories.map((cat) => (
                            <div key={cat.category} className="border rounded-xl bg-card overflow-hidden">
                                <button
                                    onClick={() => toggleCategory(subject + cat.category)}
                                    className="w-full flex items-center justify-between p-3 bg-muted/30 hover:bg-muted/50 transition-colors"
                                >
                                    <span className="font-medium">{cat.category}</span>
                                    {openCategories[subject + cat.category] ? <ChevronDown size={16} /> : <ChevronRight size={16} />}
                                </button>

                                {openCategories[subject + cat.category] && (
                                    <div className="p-2 space-y-1">
                                        {cat.topics.map(topic => {
                                            const key = `${subject}-${topic}`;
                                            const status = statusMap?.[key] || "red"; // Default to red
                                            return (
                                                <div key={topic} className="flex items-center justify-between p-2 rounded hover:bg-muted/30">
                                                    <span className="text-sm">{topic}</span>
                                                    <button
                                                        onClick={() => toggleStatus(key)}
                                                        className={cn(
                                                            "w-6 h-6 rounded-full border-2 flex items-center justify-center transition-all",
                                                            status === "green" ? "bg-green-500 border-green-600 text-white" :
                                                                status === "yellow" ? "bg-amber-400 border-amber-500" :
                                                                    "bg-red-500 border-red-600"
                                                        )}
                                                    >
                                                        {status === "green" && <CheckCircle size={14} />}
                                                    </button>
                                                </div>
                                            );
                                        })}
                                    </div>
                                )}
                            </div>
                        ))}
                    </div>
                ))}
            </div>
        </div>
    );
}
