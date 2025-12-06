import { useState, useEffect } from "react";
import { Link, Outlet } from "react-router-dom";
import { differenceInDays, differenceInHours } from "date-fns";
import { Zap, BookOpen, AlertTriangle, BookCheck } from "lucide-react";

export function Layout() {
    // Countdown Logic
    const TARGET_DATE = new Date("2026-01-21T09:00:00");
    const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0 });

    useEffect(() => {
        const timer = setInterval(() => {
            const now = new Date();
            setTimeLeft({
                days: differenceInDays(TARGET_DATE, now),
                hours: differenceInHours(TARGET_DATE, now) % 24
            });
        }, 1000);
        return () => clearInterval(timer);
    }, []);

    return (
        <div className="min-h-screen bg-background text-foreground flex justify-center">
            <main className="w-full max-w-3xl p-4 md:p-6 min-h-screen transition-all duration-300 flex flex-col gap-6">

                {/* GLOBAL HEADER (Full Width) */}
                <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-indigo-600 to-purple-700 text-white p-4 shadow-lg flex items-center justify-between">
                    <div className="relative z-10">
                        <Link to="/" className="flex items-baseline gap-2 hover:opacity-80 transition-opacity">
                            <h1 className="text-3xl font-bold tracking-tight">{timeLeft.days}</h1>
                            <span className="text-sm font-medium opacity-80">Days Left</span>
                        </Link>
                        <p className="text-indigo-100 text-xs mt-1">Jan 21, 2026</p>
                    </div>
                    <div className="flex gap-3 relative z-10">
                        {/* Quick Actions in Header */}
                        <Link to="/vault" className="flex items-center gap-2 px-3 py-2 bg-white/10 hover:bg-white/20 rounded-lg text-white transition-all hover:scale-105 active:scale-95 group">
                            <BookOpen size={20} />
                            <span className="font-semibold text-sm">Vault</span>
                        </Link>
                        <Link to="/mistakes" className="flex items-center gap-2 px-3 py-2 bg-white/10 hover:bg-white/20 rounded-lg text-white transition-all hover:scale-105 active:scale-95 group">
                            <AlertTriangle size={20} />
                            <span className="font-semibold text-sm">Mistakes</span>
                        </Link>
                        <Link to="/syllabus" className="flex items-center gap-2 px-3 py-2 bg-white/10 hover:bg-white/20 rounded-lg text-white transition-all hover:scale-105 active:scale-95 group">
                            <BookCheck size={20} />
                            <span className="font-semibold text-sm">Syllabus</span>
                        </Link>
                    </div>
                    <div className="absolute right-0 bottom-0 opacity-10 pointer-events-none transform translate-x-4 translate-y-4">
                        <Zap size={100} />
                    </div>
                </div>

                {/* PAGE CONTENT */}
                <div className="animate-in fade-in slide-in-from-bottom-2 duration-500 flex-1">
                    <Outlet />
                </div>

            </main>
        </div>
    );
}
