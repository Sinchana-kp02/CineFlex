"use client";
import { useMemo } from "react";
import { cn } from "@/lib/utils";

interface SeatSelectionProps {
  selectedSeats: string[];
  onSeatSelect: (seatId: string) => void;
}

// Generate a consistent seating layout
const generateSeatingLayout = () => {
  const rows = ["A", "B", "C", "D", "E", "F", "G", "H", "J", "K"];
  const seatsPerRow = 14;
  const layout: {
    id: string;
    type: "regular" | "vip" | "taken" | "disabled";
  }[][] = [];

  // Predefined taken seats for consistency
  const takenSeats = new Set([
    "A3",
    "A12",
    "B5",
    "B9",
    "C2",
    "C13",
    "D7",
    "D10",
    "E1",
    "E14",
    "F3",
    "F8",
    "G5",
    "G12",
    "H2",
    "H9",
    "J6",
    "J13",
    "K4",
    "K10",
  ]);

  rows.forEach((row) => {
    const rowSeats: {
      id: string;
      type: "regular" | "vip" | "taken" | "disabled";
    }[] = [];

    for (let i = 1; i <= seatsPerRow; i++) {
      const seatId = `${row}${i}`;

      // Check if this seat is in our predefined taken seats
      const isTaken = takenSeats.has(seatId);

      // Make the last two rows VIP
      const isVip = row === "J" || row === "K";

      // Add gaps in the middle (aisles)
      const isDisabled = i === 4 || i === 11;

      const type = isDisabled
        ? "disabled"
        : isTaken
        ? "taken"
        : isVip
        ? "vip"
        : "regular";

      rowSeats.push({
        id: seatId,
        type,
      });
    }

    layout.push(rowSeats);
  });

  return layout;
};

export default function SeatSelection({
  selectedSeats,
  onSeatSelect,
}: SeatSelectionProps) {
  // Use useMemo to ensure the seating layout is generated only once and remains constant
  const seatingLayout = useMemo(() => generateSeatingLayout(), []);

  return (
    <div className="bg-zinc-900 border border-zinc-800 rounded-lg p-6">
      {/* Screen */}
      <div className="relative mb-10">
        <div className="h-8 bg-gradient-to-b from-[#FC174D]/30 to-transparent rounded-t-full mx-auto w-4/5"></div>
        <div className="text-center text-sm text-gray-400 mt-2">SCREEN</div>
      </div>

      {/* Seating Layout */}
      <div className="flex flex-col items-center gap-2 mb-8">
        {seatingLayout.map((row, rowIndex) => (
          <div key={rowIndex} className="flex gap-1 items-center">
            <div className="w-6 text-center text-sm text-gray-400 font-medium">
              {String.fromCharCode(65 + rowIndex)}
            </div>

            <div className="flex gap-1">
              {row.map((seat, seatIndex) => {
                const isSelected = selectedSeats.includes(seat.id);
                const isDisabled =
                  seat.type === "taken" || seat.type === "disabled";

                return (
                  <button
                    key={`${rowIndex}-${seatIndex}`}
                    disabled={isDisabled}
                    className={cn(
                      "seat w-7 h-7 flex items-center justify-center text-xs rounded transition-all duration-200",
                      seat.type === "disabled" && "opacity-0 cursor-default",
                      seat.type === "taken" &&
                        "seat-taken bg-zinc-700 text-zinc-500 cursor-not-allowed",
                      seat.type === "vip" &&
                        !isSelected &&
                        "seat-vip border-2 border-[#FC174D] bg-zinc-800 text-gray-300 hover:bg-zinc-700",
                      seat.type === "regular" &&
                        !isSelected &&
                        "bg-zinc-800 text-gray-300 hover:bg-zinc-700",
                      isSelected &&
                        "seat-selected bg-[#FC174D] text-white scale-110",
                      seat.type === "vip" &&
                        isSelected &&
                        "seat-selected bg-[#FC174D] text-white border-2 border-[#FC174D] scale-110"
                    )}
                    onClick={() => !isDisabled && onSeatSelect(seat.id)}
                  >
                    {seat.type !== "disabled" && seat.id.substring(1)}
                  </button>
                );
              })}
            </div>

            <div className="w-6 text-center text-sm text-gray-400 font-medium">
              {String.fromCharCode(65 + rowIndex)}
            </div>
          </div>
        ))}
      </div>

      {/* Seat Legend */}
      <div className="flex flex-wrap justify-center gap-6 mt-8">
        <div className="flex items-center">
          <div className="w-5 h-5 bg-zinc-800 rounded mr-2"></div>
          <span className="text-sm text-gray-400">Available</span>
        </div>
        <div className="flex items-center">
          <div className="w-5 h-5 bg-[#FC174D] rounded mr-2"></div>
          <span className="text-sm text-gray-400">Selected</span>
        </div>
        <div className="flex items-center">
          <div className="w-5 h-5 bg-zinc-700 rounded mr-2"></div>
          <span className="text-sm text-gray-400">Taken</span>
        </div>
        <div className="flex items-center">
          <div className="w-5 h-5 border-2 border-[#FC174D] rounded mr-2"></div>
          <span className="text-sm text-gray-400">VIP</span>
        </div>
      </div>
    </div>
  );
}
