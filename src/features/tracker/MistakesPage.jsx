import { useState } from "react";
import { useLocalStorage } from "../../hooks/useLocalStorage";
import { Plus, Trash2, AlertTriangle, CheckCircle2 } from "lucide-react";
import { cn } from "../../lib/utils";

const SUBJECTS = ["Physics", "Chemistry", "Maths"];

export default function MistakesPage() {
    const [mistakes, setMistakes] = useLocalStorage("jee-mistakes", []);
    const [isFormOpen, setIsFormOpen] = useState(false);
    const [formData, setFormData] = useState({
        subject: "Physics",
        topic: "",
        errorType: "Conceptual", // Conceptual, Calculation, Silly
        description: "",
        correction: ""
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        setMistakes(prev => [{ ...formData, id: Date.now(), date: new Date().toISOString() }, ...prev]);
        setIsFormOpen(false);
        setFormData({ subject: "Physics", topic: "", errorType: "Conceptual", description: "", correction: "" });
    };

    const handleDelete = (id) => {
        if (confirm("Remove this entry?")) {
            setMistakes(prev => prev.filter(m => m.id !== id));
        }
    };

    return (
        <div className="space-y-6">
            <div className="flex items-center justify-between">
                <div>
                    <h1 className="text-3xl font-bold tracking-tight">Mistake Log</h1>
                    <p className="text-muted-foreground">Turn your weaknesses into strengths.</p>
                </div>
                <button
                    onClick={() => setIsFormOpen(true)}
                    className="bg-destructive text-destructive-foreground hover:bg-destructive/90 px-4 py-2 rounded-lg font-medium flex items-center gap-2 shadow-lg shadow-destructive/20"
                >
                    <AlertTriangle size={18} /> Log Mistake
                </button>
            </div>

            <div className="grid gap-4">
                {(!mistakes || mistakes.length === 0) ? (
                    <div className="text-center py-20 bg-muted/20 rounded-xl border border-dashed">
                        <p className="text-muted-foreground">No mistakes logged yet. Good job! Or... are you not analysing?</p>
                    </div>
                ) : (
                    mistakes.map((m) => (
                        <div key={m.id} className="bg-card border rounded-xl p-5 shadow-sm hover:shadow-md transition-shadow relative group">
                            <div className="flex justify-between items-start mb-2">
                                <div className="flex gap-2">
                                    <span className={cn("px-2 py-0.5 text-xs font-bold rounded uppercase",
                                        m.subject === "Physics" ? "bg-blue-100 text-blue-700" :
                                            m.subject === "Chemistry" ? "bg-green-100 text-green-700" : "bg-red-100 text-red-700"
                                    )}>{m.subject}</span>
                                    <span className="px-2 py-0.5 text-xs font-medium bg-muted text-muted-foreground rounded">{m.topic}</span>
                                    <span className="px-2 py-0.5 text-xs font-medium border rounded">{m.errorType}</span>
                                </div>
                                <button onClick={() => handleDelete(m.id)} className="text-muted-foreground hover:text-destructive transition-colors opactiy-0 group-hover:opacity-100">
                                    <Trash2 size={16} />
                                </button>
                            </div>
                            <div className="grid md:grid-cols-2 gap-4 mt-3">
                                <div className="bg-red-500/5 p-3 rounded-lg border border-red-500/10">
                                    <p className="text-xs font-semibold text-red-600 mb-1 flex items-center gap-1"><AlertTriangle size={12} /> WRONG APPROACH</p>
                                    <p className="text-sm">{m.description}</p>
                                </div>
                                <div className="bg-green-500/5 p-3 rounded-lg border border-green-500/10">
                                    <p className="text-xs font-semibold text-green-600 mb-1 flex items-center gap-1"><CheckCircle2 size={12} /> CORRECTION</p>
                                    <p className="text-sm">{m.correction}</p>
                                </div>
                            </div>
                        </div>
                    ))
                )}
            </div>

            {isFormOpen && (
                <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm p-4">
                    <div className="bg-card w-full max-w-lg rounded-2xl shadow-xl border p-6">
                        <h2 className="text-xl font-bold mb-4">Log a Mistake</h2>
                        <form onSubmit={handleSubmit} className="space-y-4">
                            <div className="grid grid-cols-2 gap-4">
                                <div className="space-y-2">
                                    <label className="text-sm font-medium">Subject</label>
                                    <select className="w-full p-2 rounded border bg-background" value={formData.subject} onChange={e => setFormData({ ...formData, subject: e.target.value })}>
                                        {SUBJECTS.map(s => <option key={s}>{s}</option>)}
                                    </select>
                                </div>
                                <div className="space-y-2">
                                    <label className="text-sm font-medium">Error Type</label>
                                    <select className="w-full p-2 rounded border bg-background" value={formData.errorType} onChange={e => setFormData({ ...formData, errorType: e.target.value })}>
                                        <option>Conceptual</option>
                                        <option>Calculation</option>
                                        <option>Silly / Reading Error</option>
                                        <option>Time Management</option>
                                    </select>
                                </div>
                            </div>
                            <div className="space-y-2">
                                <label className="text-sm font-medium">Topic</label>
                                <input required className="w-full p-2 rounded border bg-background" placeholder="e.g. Electrostatics" value={formData.topic} onChange={e => setFormData({ ...formData, topic: e.target.value })} />
                            </div>
                            <div className="space-y-2">
                                <label className="text-sm font-medium text-red-500">What went wrong?</label>
                                <textarea required className="w-full p-2 rounded border bg-background" rows={3} value={formData.description} onChange={e => setFormData({ ...formData, description: e.target.value })} />
                            </div>
                            <div className="space-y-2">
                                <label className="text-sm font-medium text-green-600">Correction / Lesson</label>
                                <textarea required className="w-full p-2 rounded border bg-background" rows={3} value={formData.correction} onChange={e => setFormData({ ...formData, correction: e.target.value })} />
                            </div>
                            <div className="flex justify-end gap-2 pt-2">
                                <button type="button" onClick={() => setIsFormOpen(false)} className="px-4 py-2 hover:bg-muted rounded text-sm font-medium">Cancel</button>
                                <button type="submit" className="px-4 py-2 bg-primary text-primary-foreground rounded text-sm font-medium">Log It</button>
                            </div>
                        </form>
                    </div>
                </div>
            )}
        </div>
    );
}
