"use client"

import { Button } from "@/components/ui/button"

interface PlayerFiltersProps {
  positions: string[]
  selectedPosition: string | null
  onPositionChange: (position: string | null) => void
  onClearAll: () => void
}

export function PlayerFilters({ positions, selectedPosition, onPositionChange, onClearAll }: PlayerFiltersProps) {
  return (
    <div className="bg-card rounded-lg p-6 shadow-md border border-border">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-lg font-semibold text-card-foreground">Filters</h3>
        {selectedPosition && (
          <Button variant="ghost" size="sm" onClick={onClearAll} className="text-xs">
            Clear All
          </Button>
        )}
      </div>

      <div>
        <h4 className="text-sm font-semibold text-card-foreground/80 mb-3">Position</h4>
        <div className="flex flex-wrap gap-2">
          {positions.map((position) => (
            <button
              key={position}
              onClick={() => onPositionChange(selectedPosition === position ? null : position)}
              className={`px-4 py-2 rounded-lg font-medium text-sm transition-all ${
                selectedPosition === position
                  ? "bg-primary text-primary-foreground"
                  : "bg-background border border-border text-foreground hover:bg-border/50"
              }`}
            >
              {position}
            </button>
          ))}
        </div>
      </div>
    </div>
  )
}
