import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { useLocalStorage } from "../../hooks/useLocalStorage";
import { Plus, Search, Trash2, FlaskConical, Calculator, Atom, Upload, Save, Lightbulb, BrainCircuit, Sigma, LayoutDashboard, Sparkles } from "lucide-react";
import { cn } from "../../lib/utils";
import { EXPERT_DATA } from "../../data/jeeExpertData";

const SUBJECTS = [
    {
        id: "Physics",
        icon: Atom,
        color: "text-blue-700 dark:text-blue-300",
        bg: "bg-blue-50 dark:bg-blue-950/30",
        border: "border-blue-200 dark:border-blue-800",
        accent: "bg-blue-600",
        pattern: "radial-gradient(circle, #2563eb1a 1px, transparent 1px)"
    },
    {
        id: "Chemistry",
        icon: FlaskConical,
        color: "text-teal-700 dark:text-teal-300",
        bg: "bg-teal-50 dark:bg-teal-950/30",
        border: "border-teal-200 dark:border-teal-800",
        accent: "bg-teal-600",
        pattern: "linear-gradient(30deg, #0d94881a 12%, transparent 12.5%, transparent 87%, #0d94881a 87.5%, #0d94881a), linear-gradient(150deg, #0d94881a 12%, transparent 12.5%, transparent 87%, #0d94881a 87.5%, #0d94881a), linear-gradient(30deg, #0d94881a 12%, transparent 12.5%, transparent 87%, #0d94881a 87.5%, #0d94881a), linear-gradient(150deg, #0d94881a 12%, transparent 12.5%, transparent 87%, #0d94881a 87.5%, #0d94881a), linear-gradient(60deg, #0d94881a 25%, transparent 25.5%, transparent 75%, #0d94881a 75%, #0d94881a), linear-gradient(60deg, #0d94881a 25%, transparent 25.5%, transparent 75%, #0d94881a 75%, #0d94881a)"
    },
    {
        id: "Maths",
        icon: Calculator,
        color: "text-rose-700 dark:text-rose-300",
        bg: "bg-rose-50 dark:bg-rose-950/30",
        border: "border-rose-200 dark:border-rose-800",
        accent: "bg-rose-600",
        pattern: "repeating-linear-gradient(45deg, #e11d480d 0, #e11d480d 1px, transparent 0, transparent 50%)"
    },
];

function NavButton({ to, icon: Icon, label }) {
    const location = useLocation();
    const isActive = location.pathname === to || (to !== "/" && location.pathname.startsWith(to));
    const actuallyActive = to === "/" ? location.pathname === "/" : isActive;

    return (
        <Link
            to={to}
            className={cn(
                "group relative flex items-center justify-center w-12 h-12 rounded-2xl border-2 transition-all duration-300",
                actuallyActive
                    ? "bg-primary border-primary text-primary-foreground shadow-lg scale-105"
                    : "bg-card border-border text-muted-foreground hover:bg-muted hover:scale-105"
            )}
        >
            <Icon size={22} className={cn("transition-transform", actuallyActive ? "" : "group-hover:text-foreground")} />
        </Link>
    )
}

function VaultCard({ item, onDelete }) {
    const subjectEntry = SUBJECTS.find(s => s.id === item.subject) || SUBJECTS[0];

    // Flattened Schema Consumption
    // Fallback for legacy data that might still be just strings (safeguard)
    const highlight = item.highlight || item.data?.main; // Access new flat field OR old nested
    const content = item.content || item.data?.explanation;
    const tip = item.tip || item.data?.mnemonic || item.data?.tip;

    return (
        <div
            className={cn(
                "group relative flex flex-col p-0 rounded-2xl border-2 overflow-hidden transition-all duration-300 hover:shadow-xl hover:-translate-y-1",
                subjectEntry.bg,
                subjectEntry.border
            )}
        >
            {/* Card Header: Subject Tab */}
            <div className="flex items-center justify-between p-3 border-b border-black/5 dark:border-white/5 bg-white/60 dark:bg-black/40 backdrop-blur-md">
                <div className="flex items-center gap-2">
                    <div className={cn("p-1.5 rounded-lg text-white shadow-sm", subjectEntry.accent)}>
                        <subjectEntry.icon size={14} />
                    </div>
                    <span className={cn("text-xs font-bold uppercase tracking-wider", subjectEntry.color)}>
                        {item.subject}
                    </span>
                </div>
                {/* Delete Button */}
                <button
                    onClick={() => onDelete(item.id)}
                    className="opacity-0 group-hover:opacity-100 p-1.5 text-rose-500 hover:bg-rose-100 rounded-lg transition-all"
                >
                    <Trash2 size={16} />
                </button>
            </div>

            {/* Main Content Area */}
            <div
                className="flex-1 p-5 relative flex flex-col gap-4"
                style={{ backgroundImage: subjectEntry.pattern, backgroundSize: "20px 20px" }}
            >
                <h3 className="text-lg font-black leading-tight text-foreground/90">{item.title}</h3>

                {/* The Big Highlight (Formula/Reaction) */}
                {highlight && (
                    <div className="bg-white/80 dark:bg-black/60 rounded-xl p-3 border border-black/5 shadow-sm backdrop-blur-sm">
                        <code className={cn("block text-lg md:text-xl font-bold text-center font-mono break-words", subjectEntry.color)}>
                            {highlight}
                        </code>
                    </div>
                )}

                {/* Explanation / Content */}
                {content && (
                    <div className="text-sm text-muted-foreground leading-relaxed whitespace-pre-wrap font-medium">
                        {content}
                    </div>
                )}

                {/* Mnemonic / Tip Section */}
                {tip && (
                    <div className={cn(
                        "mt-auto relative p-3 rounded-xl border-l-4 shadow-sm bg-amber-50 dark:bg-amber-900/10 border-amber-400 text-amber-800 dark:text-amber-200"
                    )}>
                        <div className="flex gap-2">
                            <Lightbulb size={16} className="shrink-0 text-amber-500 fill-amber-500" />
                            <p className="text-xs font-semibold italic">"{tip}"</p>
                        </div>
                    </div>
                )}
            </div>

            {/* Bottom Color Bar */}
            <div className={cn("h-1.5 w-full opacity-30", subjectEntry.accent)} />
        </div>
    );
}

export default function VaultPage() {
    const [items, setItems] = useLocalStorage("jee-vault-items", EXPERT_DATA);
    const [activeSubject, setActiveSubject] = useState("All");

    // Auto-load expert data if vault is empty
    useEffect(() => {
        if (!items || items.length === 0) {
            setItems(EXPERT_DATA);
        }
    }, [items, setItems]);

    const [searchQuery, setSearchQuery] = useState("");
    const [isFormOpen, setIsFormOpen] = useState(false);

    // Flattened Form State - Formula Only
    const [formData, setFormData] = useState({
        subject: "Physics",
        type: "Formula", // Hardcoded
        title: "",
        highlight: "",
        content: "",
        tip: ""
    });

    const exportData = () => {
        const data = {
            vaultItems: JSON.parse(localStorage.getItem("jee-vault-items") || "[]"),
            mistakes: JSON.parse(localStorage.getItem("jee-mistakes") || "[]"),
            userProfile: JSON.parse(localStorage.getItem("jee-user-profile") || '{"xp":0,"level":1}'),
            dailyTasks: JSON.parse(localStorage.getItem("jee-daily-tasks") || '{"date":"","completed":[]}'),
            syllabusStatus: JSON.parse(localStorage.getItem("jee-syllabus-status") || "{}"),
            timestamp: new Date().toISOString()
        };
        const blob = new Blob([JSON.stringify(data, null, 2)], { type: "application/json" });
        const a = document.createElement("a");
        a.href = URL.createObjectURL(blob);
        a.download = `jee-prep-formula-backup-${new Date().toISOString().split('T')[0]}.json`;
        a.click();
    };

    const importData = (event) => {
        const file = event.target.files[0];
        if (!file) return;
        const reader = new FileReader();
        reader.onload = (e) => {
            try {
                const data = JSON.parse(e.target.result);
                if (confirm(`Restore backup from ${data.timestamp}?`)) {
                    if (data.vaultItems) localStorage.setItem("jee-vault-items", JSON.stringify(data.vaultItems));
                    alert("Restored! Reloading...");
                    window.location.reload();
                }
            } catch (err) { alert("Invalid file"); }
        };
        reader.readAsText(file);
    };

    // Explicitly reset to Expert Data
    const forceResetExpert = () => {
        if (confirm("Reset to default Formula Pack?")) {
            setItems(EXPERT_DATA);
        }
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        const newItem = {
            id: Date.now(),
            ...formData,
            type: "Formula", // Ensure always Formula
            createdAt: new Date().toISOString(),
        };
        setItems((prev) => [newItem, ...prev]);
        setIsFormOpen(false);
        setFormData({ subject: "Physics", type: "Formula", title: "", highlight: "", content: "", tip: "" });
    };

    const handleDelete = (id) => {
        if (confirm("Remove this formula?")) {
            setItems((prev) => prev.filter((item) => item.id !== id));
        }
    };

    const filteredItems = (items || []).filter((item) => {
        const matchSubject = activeSubject === "All" || item.subject === activeSubject;
        // Search across all fields
        const textToSearch = (item.title + (item.highlight || "") + (item.content || "") + (item.tip || "")).toLowerCase();
        const matchSearch = textToSearch.includes(searchQuery.toLowerCase());
        return matchSubject && matchSearch;
    });

    return (
        <div className="space-y-6 animate-in fade-in duration-500 pb-20">
            {/* Top Navigation Bar */}
            <div className="flex gap-3 items-center">
                <NavButton to="/" icon={LayoutDashboard} label="Dashboard" />

                <div className="relative flex-1 group">
                    <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-muted-foreground group-focus-within:text-primary transition-colors" size={20} />
                    <input
                        type="text"
                        placeholder="Search formulas..."
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                        className="w-full pl-12 pr-4 h-12 rounded-2xl border-2 border-border bg-card focus:outline-none focus:border-primary/50 focus:ring-4 focus:ring-primary/10 transition-all font-medium"
                    />
                </div>
            </div>

            {/* Controls & Statistics */}
            <div className="flex flex-col md:flex-row items-center justify-between gap-4">
                <div>
                    <h1 className="text-3xl font-black tracking-tight text-foreground">Formula Vault <span className="text-primary">.</span></h1>
                    <p className="text-muted-foreground font-medium">Your math & science cheat sheet. (Live Updated)</p>
                </div>

                <div className="flex gap-2">
                    <button onClick={exportData} className="px-4 py-2 rounded-xl bg-secondary hover:bg-secondary/80 font-bold text-xs flex items-center gap-2 transition-transform active:scale-95">
                        <Save size={16} /> Backup
                    </button>
                    <label className="px-4 py-2 rounded-xl bg-secondary hover:bg-secondary/80 font-bold text-xs flex items-center gap-2 cursor-pointer transition-transform active:scale-95">
                        <Upload size={16} /> Restore
                        <input type="file" accept=".json" onChange={importData} className="hidden" />
                    </label>
                    <div className="w-px h-8 bg-border mx-1"></div>
                    <button onClick={forceResetExpert} className="px-4 py-2 rounded-xl bg-indigo-100 text-indigo-700 hover:bg-indigo-200 font-bold text-xs flex items-center gap-2 transition-transform active:scale-95" title="Reset to default pack">
                        <Sparkles size={16} /> Reset
                    </button>
                    <button onClick={() => setIsFormOpen(true)} className="px-4 py-2 rounded-xl bg-primary text-primary-foreground shadow-lg shadow-primary/25 hover:opacity-90 font-bold text-xs flex items-center gap-2 transition-transform active:scale-95">
                        <Plus size={16} /> Add Formula
                    </button>
                </div>
            </div>

            {/* Subject Filters (Pill shaped) */}
            <div className="flex flex-wrap items-center gap-2">
                <button
                    onClick={() => setActiveSubject("All")}
                    className={cn(
                        "px-4 py-2 rounded-full text-sm font-bold transition-all border-2",
                        activeSubject === "All" ? "bg-foreground text-background border-foreground" : "bg-transparent border-border hover:border-foreground/50"
                    )}
                >All</button>
                {SUBJECTS.map(s => (
                    <button
                        key={s.id}
                        onClick={() => setActiveSubject(s.id)}
                        className={cn(
                            "px-4 py-2 rounded-full text-sm font-bold transition-all border-2 flex items-center gap-2",
                            activeSubject === s.id
                                ? cn(s.bg, s.color, s.border)
                                : "bg-transparent border-border hover:border-foreground/20 text-muted-foreground"
                        )}
                    >
                        {activeSubject === s.id && <s.icon size={14} />} {s.id}
                    </button>
                ))}
            </div>

            {/* Masonry-ish Grid */}
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 items-start">
                {filteredItems.length === 0 ? (
                    <div className="col-span-full py-20 text-center space-y-4 opacity-50">
                        <BrainCircuit size={64} className="mx-auto text-muted-foreground/30" />
                        <p className="text-xl font-bold text-muted-foreground">Empty Vault</p>
                        <p className="text-sm text-muted-foreground">Start adding formulas!</p>
                    </div>
                ) : (
                    filteredItems.map((item) => <VaultCard key={item.id} item={item} onDelete={handleDelete} />)
                )}
            </div>

            {/* Form Modal with Flattened Schema */}
            {isFormOpen && (
                <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm p-4 animate-in fade-in duration-200">
                    <div className="bg-card w-full max-w-lg rounded-3xl shadow-2xl border border-white/10 p-6 animate-in zoom-in-95 duration-200 max-h-[90vh] overflow-y-auto">
                        <h2 className="text-2xl font-black mb-6">Add Formula</h2>
                        <form onSubmit={handleSubmit} className="space-y-4">
                            {/* Subject Selector */}
                            <div>
                                <label className="text-xs font-bold uppercase text-muted-foreground mb-1 block">Subject</label>
                                <select className="w-full p-3 rounded-xl border bg-secondary font-medium" value={formData.subject} onChange={e => setFormData({ ...formData, subject: e.target.value })}>
                                    {SUBJECTS.map(s => <option key={s.id} value={s.id}>{s.id}</option>)}
                                </select>
                            </div>

                            {/* Title */}
                            <div>
                                <label className="text-xs font-bold uppercase text-muted-foreground mb-1 block">Title</label>
                                <input required className="w-full p-3 rounded-xl border bg-secondary font-bold" placeholder="e.g. Photoelectric Effect" value={formData.title} onChange={e => setFormData({ ...formData, title: e.target.value })} />
                            </div>

                            {/* Highlight (Required for formula) */}
                            <div>
                                <label className="text-xs font-bold uppercase text-blue-500 mb-1 flex items-center gap-1">
                                    <Sigma size={12} /> The Formula
                                </label>
                                <input required className="w-full p-3 rounded-xl border bg-secondary font-mono text-lg font-semibold" placeholder="e.g. E = mc^2" value={formData.highlight} onChange={e => setFormData({ ...formData, highlight: e.target.value })} />
                            </div>

                            {/* Content */}
                            <div>
                                <label className="text-xs font-bold uppercase text-muted-foreground mb-1 block">Explanation / Variables</label>
                                <textarea required rows={3} className="w-full p-3 rounded-xl border bg-secondary text-sm" placeholder="e.g. E is energy, m is mass..." value={formData.content} onChange={e => setFormData({ ...formData, content: e.target.value })} />
                            </div>

                            {/* Tip (Optional) */}
                            <div>
                                <label className="text-xs font-bold uppercase text-amber-500 mb-1 flex items-center gap-1">
                                    <Lightbulb size={12} /> Mnemonic / Tip (Optional)
                                </label>
                                <input className="w-full p-3 rounded-xl border bg-secondary text-sm italic" placeholder="e.g. Remember to check units!" value={formData.tip} onChange={e => setFormData({ ...formData, tip: e.target.value })} />
                            </div>

                            <div className="pt-4 flex justify-end gap-3">
                                <button type="button" onClick={() => setIsFormOpen(false)} className="px-6 py-3 rounded-xl font-bold hover:bg-muted">Cancel</button>
                                <button type="submit" className="px-6 py-3 rounded-xl bg-primary text-primary-foreground font-bold shadow-lg shadow-primary/25">Add to Vault</button>
                            </div>
                        </form>
                    </div>
                </div>
            )}
        </div>
    );
}
