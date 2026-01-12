import React from "react";
import '../Filters/Filters.scss'

export function Filters({ filters, onChange }) {
    return (
        <div className="filters">
            <select
                value={filters.category}
                onChange={(e) =>
                    onChange({ ...filters, category: e.target.value })
                }
            >
                <option value="all">All categories</option>
                <option value="bread">Bread</option>
                <option value="dessert">Dessert</option>
                <option value="pastry">Pastry</option>
            </select>

            <select
                value={filters.difficulty}
                onChange={(e) =>
                    onChange({ ...filters, difficulty: e.target.value })
                }
            >
                <option value="all">All difficulties</option>
                <option value="easy">Easy</option>
                <option value="medium">Medium</option>
                <option value="hard">Hard</option>
            </select>

            <select
                value={filters.time}
                onChange={(e) =>
                    onChange({ ...filters, time: e.target.value })
                }
            >
                <option value="all">All time</option>
                <option value="60">≤ 60 min</option>
                <option value="90">≤ 90 min</option>
                <option value="120">≤ 120 min</option>
            </select>
        </div>
    );
}