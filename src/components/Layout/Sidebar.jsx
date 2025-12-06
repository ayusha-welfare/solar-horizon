import { NavLink } from "react-router-dom";
import { LayoutDashboard, BookOpen, AlertTriangle, BookCheck, Menu, X } from "lucide-react";
import { useState } from "react";
import { cn } from "../../lib/utils";

const navItems = [
    { icon: LayoutDashboard, label: "Dashboard", path: "/" },
    { icon: BookOpen, label: "Vault", path: "/vault" },
    { icon: AlertTriangle, label: "Mistakes", path: "/mistakes" },
    { icon: BookCheck, label: "Syllabus", path: "/syllabus" },
];

export function Sidebar() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <>
            {/* Mobile Menu Button */}
            <button
                className="md:hidden fixed top-4 right-4 z-50 p-2 bg-card rounded-md shadow-lg border"
                onClick={() => setIsOpen(!isOpen)}
            >
                {isOpen ? <X /> : <Menu />}
            </button>

            {/* Sidebar Container */}
            <aside className={cn(
                "fixed inset-y-0 left-0 z-40 w-64 bg-card border-r transition-transform duration-300 ease-in-out md:translate-x-0",
                isOpen ? "translate-x-0" : "-translate-x-full"
            )}>
                <div className="h-full flex flex-col p-6">
                    <div className="flex items-center gap-2 mb-10">
                        <div className="w-8 h-8 rounded-lg bg-primary flex items-center justify-center">
                            <span className="text-primary-foreground font-bold">J</span>
                        </div>
                        <h1 className="text-xl font-bold bg-gradient-to-r from-primary to-blue-600 bg-clip-text text-transparent">
                            JEE Prep
                        </h1>
                    </div>

                    <nav className="space-y-2 flex-1">
                        {navItems.map((item) => (
                            <NavLink
                                key={item.path}
                                to={item.path}
                                className={({ isActive }) => cn(
                                    "flex items-center gap-3 px-4 py-3 rounded-xl transition-all duration-200 group",
                                    isActive
                                        ? "bg-primary text-primary-foreground shadow-md shadow-primary/20"
                                        : "hover:bg-muted text-muted-foreground hover:text-foreground"
                                )}
                                onClick={() => setIsOpen(false)}
                            >
                                <item.icon size={20} className={cn("transition-transform group-hover:scale-110")} />
                                <span className="font-medium">{item.label}</span>
                            </NavLink>
                        ))}
                    </nav>

                    <div className="border-t pt-6">
                        <div className="p-4 rounded-xl bg-gradient-to-br from-indigo-500/10 to-purple-500/10 border border-indigo-500/20">
                            <p className="text-xs text-muted-foreground font-semibold mb-1">DAYS LEFT</p>
                            <p className="text-2xl font-bold text-indigo-600">45 Days</p>
                            <p className="text-[10px] text-muted-foreground mt-1">Make every second count.</p>
                        </div>
                    </div>
                </div>
            </aside>

            {/* Overlay for mobile */}
            {isOpen && (
                <div
                    className="fixed inset-0 bg-background/80 backdrop-blur-sm z-30 md:hidden"
                    onClick={() => setIsOpen(false)}
                />
            )}
        </>
    );
}
