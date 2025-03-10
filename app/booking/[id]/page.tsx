"use client"

import { useState } from "react"
import { Calendar, Clock, MapPin } from "lucide-react"
import SeatSelection from "@/components/seat-selection"
import BookingSummary from "@/components/booking-summary"
import { cn } from "@/lib/utils"

// Mock data for theaters
const theaters = [
  {
    id: "theater-1",
    name: "CineFlex Metropolis",
    location: "Downtown, 123 Main St",
    distance: "2.5 miles away",
  },
  {
    id: "theater-2",
    name: "CineFlex IMAX Plaza",
    location: "Westside Mall, 456 Plaza Ave",
    distance: "4.1 miles away",
  },
  {
    id: "theater-3",
    name: "CineFlex Luxury Cinema",
    location: "Eastside, 789 Luxury Blvd",
    distance: "5.8 miles away",
  },
]

// Mock data for dates
const generateDates = () => {
  const dates = []
  const today = new Date()

  for (let i = 0; i < 10; i++) {
    const date = new Date(today)
    date.setDate(today.getDate() + i)

    dates.push({
      date: date,
      day: date.toLocaleDateString("en-US", { weekday: "short" }),
      dayNum: date.getDate(),
      month: date.toLocaleDateString("en-US", { month: "short" }),
    })
  }

  return dates
}

// Mock data for showtimes
const showtimes = [
  { time: "10:30 AM", format: "2D" },
  { time: "1:15 PM", format: "2D" },
  { time: "4:00 PM", format: "3D" },
  { time: "7:30 PM", format: "IMAX" },
  { time: "10:45 PM", format: "2D" },
]

// Get movie details
const getMovieDetails = (id: string) => {
  return {
    id,
    title: id === "dune-part-two" ? "Dune: Part Two" : "Movie Title",
    image: `/placeholder.svg?height=600&width=400&query=${id} movie poster`,
    rating: 8.7,
    duration: "166 min",
    releaseDate: "March 1, 2024",
  }
}

export default function BookingPage({ params }: { params: { id: string } }) {
  const movie = getMovieDetails(params.id)
  const dates = generateDates()

  const [selectedTheater, setSelectedTheater] = useState(theaters[0].id)
  const [selectedDate, setSelectedDate] = useState(dates[0].date.toISOString())
  const [selectedShowtime, setSelectedShowtime] = useState(showtimes[3].time)
  const [selectedSeats, setSelectedSeats] = useState<string[]>([])
  const [step, setStep] = useState(1)

  const handleSeatSelection = (seatId: string) => {
    if (selectedSeats.includes(seatId)) {
      setSelectedSeats(selectedSeats.filter((id) => id !== seatId))
    } else {
      if (selectedSeats.length < 10) {
        setSelectedSeats([...selectedSeats, seatId])
      }
    }
  }

  const getFormattedDate = () => {
    const date = new Date(selectedDate)
    return date.toLocaleDateString("en-US", { weekday: "long", month: "long", day: "numeric" })
  }

  const getSelectedTheaterName = () => {
    const theater = theaters.find((t) => t.id === selectedTheater)
    return theater ? theater.name : ""
  }

  const handleContinue = () => {
    if (step === 1) {
      setStep(2)
    }
  }

  const handleBack = () => {
    if (step === 2) {
      setStep(1)
    }
  }

  return (
    <main className="flex-1 bg-black">
      {/* Booking Header */}
      <div className="bg-zinc-900 border-b border-zinc-800">
        <div className="container px-4 md:px-6 py-4">
          <div className="flex items-center gap-4">
            <div className="w-16 h-24 rounded overflow-hidden hidden sm:block">
              <img src={movie.image || "/placeholder.svg"} alt={movie.title} className="w-full h-full object-cover" />
            </div>

            <div>
              <h1 className="text-xl md:text-2xl font-bold text-white">{movie.title}</h1>
              <div className="flex items-center gap-3 text-sm text-gray-400 mt-1">
                <div className="flex items-center">
                  <Clock className="h-4 w-4 mr-1" />
                  <span>{movie.duration}</span>
                </div>
                <div className="flex items-center">
                  <Calendar className="h-4 w-4 mr-1" />
                  <span>{movie.releaseDate}</span>
                </div>
              </div>
            </div>
          </div>

          {/* Booking Steps */}
          <div className="flex items-center mt-6">
            <div className="flex items-center">
              <div
                className={cn(
                  "w-8 h-8 rounded-full flex items-center justify-center text-sm font-medium",
                  step >= 1 ? "bg-[#FC174D] text-white" : "bg-zinc-800 text-gray-400",
                )}
              >
                1
              </div>
              <span
                className={cn("ml-2 text-sm font-medium hidden sm:inline", step >= 1 ? "text-white" : "text-gray-400")}
              >
                Select Seats
              </span>
            </div>

            <div className="w-12 sm:w-24 h-px bg-zinc-700 mx-2 sm:mx-4"></div>

            <div className="flex items-center">
              <div
                className={cn(
                  "w-8 h-8 rounded-full flex items-center justify-center text-sm font-medium",
                  step >= 2 ? "bg-[#FC174D] text-white" : "bg-zinc-800 text-gray-400",
                )}
              >
                2
              </div>
              <span
                className={cn("ml-2 text-sm font-medium hidden sm:inline", step >= 2 ? "text-white" : "text-gray-400")}
              >
                Payment
              </span>
            </div>

            <div className="w-12 sm:w-24 h-px bg-zinc-700 mx-2 sm:mx-4"></div>

            <div className="flex items-center">
              <div
                className={cn(
                  "w-8 h-8 rounded-full flex items-center justify-center text-sm font-medium",
                  step >= 3 ? "bg-[#FC174D] text-white" : "bg-zinc-800 text-gray-400",
                )}
              >
                3
              </div>
              <span
                className={cn("ml-2 text-sm font-medium hidden sm:inline", step >= 3 ? "text-white" : "text-gray-400")}
              >
                Confirmation
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Booking Content */}
      <div className="container px-4 md:px-6 py-8">
        <div className="grid lg:grid-cols-[1fr_350px] gap-8">
          {/* Main Booking Area */}
          <div>
            {step === 1 && (
              <>
                {/* Theater Selection */}
                <div className="mb-8">
                  <h2 className="text-xl font-semibold text-white mb-4">Select Theater</h2>
                  <div className="grid gap-3">
                    {theaters.map((theater) => (
                      <div
                        key={theater.id}
                        className={cn(
                          "border rounded-lg p-4 cursor-pointer transition-all",
                          selectedTheater === theater.id
                            ? "border-[#FC174D] bg-zinc-900"
                            : "border-zinc-800 bg-zinc-900/50 hover:border-zinc-700",
                        )}
                        onClick={() => setSelectedTheater(theater.id)}
                      >
                        <div className="flex items-start justify-between">
                          <div>
                            <h3 className="font-medium text-white">{theater.name}</h3>
                            <div className="flex items-center text-sm text-gray-400 mt-1">
                              <MapPin className="h-4 w-4 mr-1" />
                              <span>{theater.location}</span>
                            </div>
                          </div>
                          <span className="text-sm text-gray-400">{theater.distance}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Date Selection */}
                <div className="mb-8">
                  <h2 className="text-xl font-semibold text-white mb-4">Select Date</h2>
                  <div className="flex overflow-x-auto pb-2 scrollbar-hide -mx-2 px-2">
                    <div className="flex gap-3">
                      {dates.map((date, index) => (
                        <div
                          key={index}
                          className={cn(
                            "flex-shrink-0 w-20 h-24 border rounded-lg flex flex-col items-center justify-center cursor-pointer transition-all",
                            selectedDate === date.date.toISOString()
                              ? "border-[#FC174D] bg-zinc-900"
                              : "border-zinc-800 bg-zinc-900/50 hover:border-zinc-700",
                          )}
                          onClick={() => setSelectedDate(date.date.toISOString())}
                        >
                          <span className="text-sm text-gray-400">{date.day}</span>
                          <span className="text-xl font-bold text-white mt-1">{date.dayNum}</span>
                          <span className="text-sm text-gray-400 mt-1">{date.month}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Showtime Selection */}
                <div className="mb-8">
                  <h2 className="text-xl font-semibold text-white mb-4">Select Showtime</h2>
                  <div className="flex flex-wrap gap-3">
                    {showtimes.map((showtime, index) => (
                      <div
                        key={index}
                        className={cn(
                          "border rounded-lg px-4 py-3 cursor-pointer transition-all",
                          selectedShowtime === showtime.time
                            ? "border-[#FC174D] bg-zinc-900"
                            : "border-zinc-800 bg-zinc-900/50 hover:border-zinc-700",
                        )}
                        onClick={() => setSelectedShowtime(showtime.time)}
                      >
                        <div className="text-center">
                          <span className="font-medium text-white">{showtime.time}</span>
                          <div className="text-xs text-gray-400 mt-1">{showtime.format}</div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Seat Selection */}
                <div>
                  <h2 className="text-xl font-semibold text-white mb-4">Select Seats</h2>
                  <SeatSelection selectedSeats={selectedSeats} onSeatSelect={handleSeatSelection} />
                </div>
              </>
            )}

            {step === 2 && (
              <div>
                <h2 className="text-xl font-semibold text-white mb-4">Payment</h2>
                <div className="bg-zinc-900 border border-zinc-800 rounded-lg p-6">
                  <div className="mb-6">
                    <h3 className="text-lg font-medium text-white mb-4">Booking Details</h3>
                    <div className="space-y-3">
                      <div className="flex justify-between">
                        <span className="text-gray-400">Movie:</span>
                        <span className="text-white font-medium">{movie.title}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-400">Theater:</span>
                        <span className="text-white">{getSelectedTheaterName()}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-400">Date:</span>
                        <span className="text-white">{getFormattedDate()}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-400">Time:</span>
                        <span className="text-white">{selectedShowtime}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-400">Seats:</span>
                        <span className="text-white">{selectedSeats.join(", ")}</span>
                      </div>
                    </div>
                  </div>

                  <div className="border-t border-zinc-800 pt-6 mb-6">
                    <h3 className="text-lg font-medium text-white mb-4">Payment Method</h3>
                    <div className="space-y-4">
                      <div className="border border-zinc-700 rounded-lg p-4 flex items-center cursor-pointer">
                        <div className="w-6 h-6 rounded-full border-2 border-[#FC174D] flex items-center justify-center mr-3">
                          <div className="w-3 h-3 rounded-full bg-[#FC174D]"></div>
                        </div>
                        <div className="flex-1">
                          <div className="flex items-center">
                            <img
                              src="/placeholder.svg?height=30&width=40&query=credit card icon"
                              alt="Credit Card"
                              className="h-6 mr-2"
                            />
                            <span className="text-white">Credit/Debit Card</span>
                          </div>
                        </div>
                      </div>

                      <div className="border border-zinc-800 rounded-lg p-4 flex items-center cursor-pointer">
                        <div className="w-6 h-6 rounded-full border-2 border-zinc-700 flex items-center justify-center mr-3">
                          <div className="w-3 h-3 rounded-full bg-transparent"></div>
                        </div>
                        <div className="flex-1">
                          <div className="flex items-center">
                            <img
                              src="/placeholder.svg?height=30&width=40&query=paypal icon"
                              alt="PayPal"
                              className="h-6 mr-2"
                            />
                            <span className="text-white">PayPal</span>
                          </div>
                        </div>
                      </div>

                      <div className="border border-zinc-800 rounded-lg p-4 flex items-center cursor-pointer">
                        <div className="w-6 h-6 rounded-full border-2 border-zinc-700 flex items-center justify-center mr-3">
                          <div className="w-3 h-3 rounded-full bg-transparent"></div>
                        </div>
                        <div className="flex-1">
                          <div className="flex items-center">
                            <img
                              src="/placeholder.svg?height=30&width=40&query=apple pay icon"
                              alt="Apple Pay"
                              className="h-6 mr-2"
                            />
                            <span className="text-white">Apple Pay</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="border-t border-zinc-800 pt-6">
                    <h3 className="text-lg font-medium text-white mb-4">Card Details</h3>
                    <div className="space-y-4">
                      <div>
                        <label className="block text-sm text-gray-400 mb-2">Card Number</label>
                        <input
                          type="text"
                          placeholder="1234 5678 9012 3456"
                          className="w-full bg-zinc-800 border border-zinc-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-[#FC174D] focus:border-transparent"
                        />
                      </div>

                      <div className="grid grid-cols-2 gap-4">
                        <div>
                          <label className="block text-sm text-gray-400 mb-2">Expiry Date</label>
                          <input
                            type="text"
                            placeholder="MM/YY"
                            className="w-full bg-zinc-800 border border-zinc-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-[#FC174D] focus:border-transparent"
                          />
                        </div>
                        <div>
                          <label className="block text-sm text-gray-400 mb-2">CVV</label>
                          <input
                            type="text"
                            placeholder="123"
                            className="w-full bg-zinc-800 border border-zinc-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-[#FC174D] focus:border-transparent"
                          />
                        </div>
                      </div>

                      <div>
                        <label className="block text-sm text-gray-400 mb-2">Name on Card</label>
                        <input
                          type="text"
                          placeholder="John Doe"
                          className="w-full bg-zinc-800 border border-zinc-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-[#FC174D] focus:border-transparent"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Booking Summary */}
          <div>
            <BookingSummary
              movie={movie}
              theater={getSelectedTheaterName()}
              date={getFormattedDate()}
              time={selectedShowtime}
              seats={selectedSeats}
              step={step}
              onContinue={handleContinue}
              onBack={handleBack}
            />
          </div>
        </div>
      </div>
    </main>
  )
}
