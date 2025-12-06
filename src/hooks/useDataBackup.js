import { useState } from 'react';

export function useDataBackup() {
    const exportData = () => {
        try {
            const data = {
                vaultItems: JSON.parse(localStorage.getItem("jee-vault-items") || "[]"),
                mistakes: JSON.parse(localStorage.getItem("jee-mistakes") || "[]"),
                userProfile: JSON.parse(localStorage.getItem("jee-user-profile") || '{"xp":0,"level":1}'),
                dailyTasks: JSON.parse(localStorage.getItem("jee-daily-tasks") || '{"date":"","completed":[]}'),
                syllabusStatus: JSON.parse(localStorage.getItem("jee-syllabus-status") || "{}"),
                timestamp: new Date().toISOString()
            };

            const blob = new Blob([JSON.stringify(data, null, 2)], { type: "application/json" });
            const url = URL.createObjectURL(blob);
            const a = document.createElement("a");
            a.href = url;
            a.download = `jee-prep-backup-${new Date().toISOString().split('T')[0]}.json`;
            document.body.appendChild(a);
            a.click();
            document.body.removeChild(a);
            URL.revokeObjectURL(url);
            return true;
        } catch (error) {
            console.error("Export failed:", error);
            alert("Export failed: " + error.message);
            return false;
        }
    };

    const importData = (file) => {
        if (!file) return;

        const reader = new FileReader();
        reader.onload = (e) => {
            try {
                const data = JSON.parse(e.target.result);

                // Simple validation
                if (!data.vaultItems && !data.userProfile && !data.mistakes) throw new Error("Invalid backup file: Missing key data");

                if (confirm(`Restore backup from ${data.timestamp || 'Unknown Date'}? Current data will be replaced.`)) {
                    if (data.vaultItems) localStorage.setItem("jee-vault-items", JSON.stringify(data.vaultItems));
                    if (data.mistakes) localStorage.setItem("jee-mistakes", JSON.stringify(data.mistakes));
                    if (data.userProfile) localStorage.setItem("jee-user-profile", JSON.stringify(data.userProfile));
                    if (data.dailyTasks) localStorage.setItem("jee-daily-tasks", JSON.stringify(data.dailyTasks));
                    if (data.syllabusStatus) localStorage.setItem("jee-syllabus-status", JSON.stringify(data.syllabusStatus));

                    alert("Restored successfully! App will reload.");
                    window.location.reload();
                }
            } catch (err) {
                console.error("Import failed:", err);
                alert("Failed to import: " + err.message);
            }
        };
        reader.readAsText(file);
    };

    return { exportData, importData };
}
