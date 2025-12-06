import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { useLocalStorage } from "../../hooks/useLocalStorage";
import { useDataBackup } from "../../hooks/useDataBackup";
import { AlertTriangle, BookOpen, CheckCircle2, ChevronRight, Zap, Target, Trophy, Flame, LayoutDashboard, BookCheck, Sparkles, Download, Upload } from "lucide-react";
import { differenceInDays, differenceInHours, differenceInMinutes, format } from "date-fns";
import { cn } from "../../lib/utils";

const DAILY_TASKS = [
    { id: "task-01", label: "Formula Revision (30m)", xp: 50 },
    { id: "task-02", label: "Solve 20 PYQs", xp: 50 },
    { id: "task-03", label: "Review Mistakes", xp: 50 },
    { id: "task-04", label: "1 Mock Section", xp: 50 },
];

export default function DashboardPage() {
    const [mistakes] = useLocalStorage("jee-mistakes", []);
    const [vaultItems] = useLocalStorage("jee-vault-items", []);
    const [syllabusData] = useLocalStorage("jee-syllabus-status", {});

    // Gamification State
    const [userProfile, setUserProfile] = useLocalStorage("jee-user-profile", { xp: 0, level: 1 });
    const [dailyState, setDailyState] = useLocalStorage("jee-daily-tasks", { date: format(new Date(), 'yyyy-MM-dd'), completed: [] });

    // Backup Hook
    const { exportData, importData } = useDataBackup();

    // Daily Reset Logic
    useEffect(() => {
        const today = format(new Date(), 'yyyy-MM-dd');
        if (dailyState.date !== today) {
            setDailyState({ date: today, completed: [] });
        }
    }, [dailyState.date, setDailyState]);

    const toggleTask = (taskId, xpReward) => {
        const isCompleted = dailyState.completed.includes(taskId);
        let newCompleted = [];
        let newXp = userProfile.xp;

        if (isCompleted) {
            newCompleted = dailyState.completed.filter(id => id !== taskId);
            newXp -= xpReward;
        } else {
            newCompleted = [...dailyState.completed, taskId];
            newXp += xpReward;
        }

        setDailyState({ ...dailyState, completed: newCompleted });

        // Level Up Logic: 200 XP per level
        // Use Math.ceil so 200 XP = Level 1 (100%), 201 XP = Level 2 (0%)
        const newLevel = Math.max(1, Math.ceil(newXp / 200));
        setUserProfile({ xp: newXp, level: newLevel });
    };

    // Stats
    const mistakeCount = mistakes.length;
    const vaultCount = vaultItems.length;
    // XP Progress
    const currentLevelBaseXp = (userProfile.level - 1) * 200;
    const xpInCurrentLevel = userProfile.xp - currentLevelBaseXp;
    const levelProgress = Math.min(100, (xpInCurrentLevel / 200) * 100);

    // Dynamic Color Logic: "Tiered Identity" -> "Green Success"
    // Mental Effect: Turn your current tier's energy into Green (Completion)

    const getTierHue = (level) => {
        if (level <= 3) return 20;  // Levels 1-3: Ignition (Red-Orange)
        if (level <= 6) return 45;  // Levels 4-6: Traction (Gold)
        if (level <= 9) return 200; // Levels 7-9: Momentum (Blue)
        return 270;                 // Levels 10+: Mastery (Purple)
    };

    const tierHue = getTierHue(userProfile.level);
    const successHue = 120; // Pure Green

    // Interpolate: 0% = Tier Color, 100% = Green
    // We use a weighted mix to ensure 100% is always distinct green
    const interpolation = levelProgress / 100;

    // Shortest path interpolation hack for Hue (simple weighted average works for these ranges)
    // Note: Blue(200) -> Green(120) goes down. Orange(20) -> Green(120) goes up.
    const currentHue = tierHue + (successHue - tierHue) * interpolation;

    const dynamicColor = `hsl(${currentHue}, 90%, 40%)`;

    return (
        <div className="space-y-4 animate-in fade-in duration-500">

            {/* Combined Mission Control: Readiness + Daily Ops */}
            <div className="rounded-2xl bg-card border shadow-sm relative overflow-hidden">
                {/* Section 1: Readiness Level */}
                <div className="p-4 flex items-center justify-between bg-gradient-to-r from-background to-muted/20">
                    <div>
                        <div className="flex items-center gap-2 mb-1">
                            <Flame size={18} style={{ color: dynamicColor }} />
                            <span className="text-sm font-bold text-muted-foreground uppercase tracking-wider">Readiness Level {userProfile.level}</span>
                        </div>
                        <p className="text-xs text-muted-foreground">{xpInCurrentLevel} / 200 XP to Level {userProfile.level + 1}</p>
                    </div>

                    <div className="w-1/3 flex flex-col items-end gap-1">
                        <span className="text-2xl font-black text-transparent bg-clip-text transition-colors duration-500"
                            style={{ backgroundImage: `linear-gradient(to right, ${dynamicColor}, ${dynamicColor})` }}>
                            {Math.round(levelProgress)}%
                        </span>
                        <div className="h-2 w-full bg-secondary rounded-full overflow-hidden">
                            <div
                                className="h-full transition-all duration-1000 ease-out"
                                style={{
                                    width: `${levelProgress}%`,
                                    backgroundColor: dynamicColor,
                                    boxShadow: `0 0 10px ${dynamicColor}`
                                }}
                            />
                        </div>
                    </div>
                </div>

                {/* Divider with Label */}
                <div className="h-px bg-border w-full flex items-center justify-center relative my-0">
                    <span className="bg-card px-2 text-[10px] font-medium text-muted-foreground uppercase absolute">Daily Tasks</span>
                </div>

                {/* Section 2: Daily Ops Grid */}
                <div className="p-4 grid grid-cols-2 md:grid-cols-4 gap-3 bg-muted/5">
                    {DAILY_TASKS.map(task => {
                        const isDone = dailyState.completed.includes(task.id);
                        return (
                            <div
                                key={task.id}
                                onClick={() => toggleTask(task.id, task.xp)}
                                className={cn(
                                    "cursor-pointer relative flex flex-col items-center justify-center gap-2 p-3 rounded-xl border-2 transition-all duration-200 hover:scale-105 active:scale-95 text-center h-full",
                                    isDone
                                        ? "bg-green-500/10 border-green-500/50 shadow-[0_0_10px_rgba(34,197,94,0.1)]"
                                        : "bg-card border-dashed border-muted-foreground/20 hover:border-primary/50 hover:bg-primary/5"
                                )}
                            >
                                {isDone ? (
                                    <div className="w-8 h-8 rounded-full bg-green-500 text-white flex items-center justify-center shadow-sm">
                                        <CheckCircle2 size={16} className="animate-in zoom-in spin-in-90 duration-300" />
                                    </div>
                                ) : (
                                    <div className="w-8 h-8 rounded-full bg-muted text-muted-foreground flex items-center justify-center">
                                        <Target size={16} />
                                    </div>
                                )}

                                <div className="flex flex-col gap-0.5">
                                    <span className={cn("text-xs font-bold leading-tight", isDone ? "text-green-700 dark:text-green-400" : "text-foreground")}>
                                        {task.label}
                                    </span>
                                    {!isDone && <span className="text-[10px] text-primary font-medium">+{task.xp} XP</span>}
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>

            {/* Quick Stats Row */}
            <div className="grid grid-cols-2 gap-3">
                <div className="p-2.5 rounded-xl border bg-card flex items-center gap-3">
                    <div className="w-8 h-8 rounded-lg bg-blue-100 dark:bg-blue-900/20 text-blue-600 flex items-center justify-center">
                        <BookOpen size={16} />
                    </div>
                    <div>
                        <p className="text-lg font-bold leading-none">{vaultCount}</p>
                        <p className="text-[10px] text-muted-foreground">Formulas</p>
                    </div>
                </div>
                <div className="p-2.5 rounded-xl border bg-card flex items-center gap-3">
                    <div className="w-8 h-8 rounded-lg bg-rose-100 dark:bg-rose-900/20 text-rose-600 flex items-center justify-center">
                        <AlertTriangle size={16} />
                    </div>
                    <div>
                        <p className="text-lg font-bold leading-none">{mistakeCount}</p>
                        <p className="text-[10px] text-muted-foreground">Mistakes</p>
                    </div>
                </div>
            </div>

            {/* Data Management Card */}
            <div className="rounded-2xl border bg-card p-4">
                <h3 className="text-xs font-semibold uppercase text-muted-foreground mb-3 tracking-wider">Data Management</h3>
                <div className="grid grid-cols-2 gap-3">
                    <button
                        onClick={exportData}
                        className="flex flex-col items-center justify-center gap-2 p-4 rounded-xl bg-secondary/50 hover:bg-secondary cursor-pointer border border-transparent hover:border-primary/20 transition-all"
                    >
                        <Download size={20} className="text-primary" />
                        <span className="text-xs font-bold">Backup Data</span>
                    </button>

                    <label className="flex flex-col items-center justify-center gap-2 p-4 rounded-xl bg-secondary/50 hover:bg-secondary cursor-pointer border border-transparent hover:border-primary/20 transition-all">
                        <Upload size={20} className="text-primary" />
                        <span className="text-xs font-bold">Restore Data</span>
                        <input type="file" accept=".json" onChange={(e) => importData(e.target.files[0])} className="hidden" />
                    </label>
                </div>
            </div>
        </div>
    );
}
