"use client";

import Image from "next/image";
import { useState, useEffect } from "react";
import Link from "next/link";

interface Event {
  id: number;
  title: string;
  date: string;
  time: string;
  location: string;
  type: 'meeting' | 'review' | 'competition' | 'fundraising' | 'testing' | 'workshop';
  description?: string;
}

export default function Calendar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [currentDate, setCurrentDate] = useState(new Date());
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  // Close menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as Element;
      if (isMenuOpen && !target.closest('#mobile-menu') && !target.closest('button[aria-controls="mobile-menu"]')) {
        setIsMenuOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isMenuOpen]);

  // SAE Events for September - December 2025
  const generateEvents = (): Event[] => {
    const events: Event[] = [
      // September Events
      {
        id: 1,
        title: "SAE Meeting",
        date: "2025-09-02",
        time: "12:30 PM - 1:30 PM",
        location: "Shelby Hall Room 2216",
        type: "meeting",
        description: "Regular SAE team meeting to discuss progress and upcoming tasks"
      },
      {
        id: 2,
        title: "SAE Officer Meeting",
        date: "2025-09-10",
        time: "6:00 PM - 7:00 PM",
        location: "Shelby Hall Room 2214",
        type: "meeting",
        description: "Officer meeting to discuss team leadership and planning"
      },
      {
        id: 4,
        title: "SAE Officer Meeting",
        date: "2025-09-24",
        time: "6:00 PM - 7:00 PM",
        location: "Shelby Hall Room 2214",
        type: "meeting",
        description: "Officer meeting to discuss team leadership and planning"
      },
      // October Events
      {
        id: 5,
        title: "SAE Meeting",
        date: "2025-10-06",
        time: "12:30 PM - 1:30 PM",
        location: "Shelby Hall Room 2216",
        type: "meeting",
        description: "Regular SAE team meeting to discuss progress and upcoming tasks"
      },
      {
        id: 6,
        title: "SAE Officer Meeting",
        date: "2025-10-08",
        time: "6:00 PM - 7:00 PM",
        location: "Shelby Hall Room 2214",
        type: "meeting",
        description: "Officer meeting to discuss team leadership and planning"
      },
      {
        id: 7,
        title: "SAE Officer Meeting",
        date: "2025-10-22",
        time: "6:00 PM - 7:00 PM",
        location: "Shelby Hall Room 2214",
        type: "meeting",
        description: "Officer meeting to discuss team leadership and planning"
      },
      // November Events
      {
        id: 9,
        title: "SAE Meeting",
        date: "2025-11-03",
        time: "12:30 PM - 1:30 PM",
        location: "Shelby Hall Room 2216",
        type: "meeting",
        description: "Regular SAE team meeting to discuss progress and upcoming tasks"
      },
      {
        id: 10,
        title: "SAE Officer Meeting",
        date: "2025-11-05",
        time: "6:00 PM - 7:00 PM",
        location: "Shelby Hall Room 2214",
        type: "meeting",
        description: "Officer meeting to discuss team leadership and planning"
      },
      {
        id: 11,
        title: "Discover Engineering Day",
        date: "2025-11-06",
        time: "All Day",
        location: "TBA",
        type: "workshop",
        description: "Discover Engineering Day event"
      },
      {
        id: 12,
        title: "Fall Car Show",
        date: "2025-11-09",
        time: "12:00 PM - 3:00 PM",
        location: "Shelby Hall Parking Lot",
        type: "fundraising",
        description: "Annual fall car show in Shelby Hall parking lot"
      },
      {
        id: 13,
        title: "SAE Officer Meeting",
        date: "2025-11-19",
        time: "6:00 PM - 7:00 PM",
        location: "Shelby Hall Room 2214",
        type: "meeting",
        description: "Officer meeting to discuss team leadership and planning"
      },
      // December Events
      {
        id: 15,
        title: "SAE Meeting",
        date: "2025-12-02",
        time: "12:30 PM - 1:30 PM",
        location: "Shelby Hall Room 2216",
        type: "meeting",
        description: "Regular SAE team meeting to discuss progress and upcoming tasks"
      },
      {
        id: 16,
        title: "SAE Officer Meeting",
        date: "2025-12-03",
        time: "6:00 PM - 7:00 PM",
        location: "Shelby Hall Room 2214",
        type: "meeting",
        description: "Officer meeting to discuss team leadership and planning"
      }
    ];

    return events;
  };

  const events = generateEvents();

  const getEventTypeColor = (type: string) => {
    switch (type) {
      case "meeting":
        return "bg-blue-100 text-blue-800 border-blue-200";
      case "review":
        return "bg-yellow-100 text-yellow-800 border-yellow-200";
      case "competition":
        return "bg-red-100 text-red-800 border-red-200";
      case "fundraising":
        return "bg-green-100 text-green-800 border-green-200";
      case "testing":
        return "bg-purple-100 text-purple-800 border-purple-200";
      case "workshop":
        return "bg-indigo-100 text-indigo-800 border-indigo-200";
      default:
        return "bg-gray-100 text-gray-800 border-gray-200";
    }
  };

  const getEventsForDate = (date: Date) => {
    const dateString = date.toISOString().split('T')[0];
    return events.filter(event => event.date === dateString);
  };

  const navigateMonth = (direction: 'prev' | 'next') => {
    setCurrentDate(prev => {
      const newDate = new Date(prev);
      if (direction === 'prev') {
        newDate.setMonth(prev.getMonth() - 1);
      } else {
        newDate.setMonth(prev.getMonth() + 1);
      }
      return newDate;
    });
  };

  const goToToday = () => {
    setCurrentDate(new Date());
    setSelectedDate(null);
  };

  const getDaysInMonth = (date: Date) => {
    const year = date.getFullYear();
    const month = date.getMonth();
    const firstDay = new Date(year, month, 1);
    const lastDay = new Date(year, month + 1, 0);
    const daysInMonth = lastDay.getDate();
    const startingDayOfWeek = firstDay.getDay();
    
    const days = [];
    
    // Add empty cells for days before the first day of the month
    for (let i = 0; i < startingDayOfWeek; i++) {
      days.push(null);
    }
    
    // Add days of the month
    for (let day = 1; day <= daysInMonth; day++) {
      days.push(new Date(year, month, day));
    }
    
    return days;
  };

  const isToday = (date: Date) => {
    const today = new Date();
    return date.toDateString() === today.toDateString();
  };

  const isSelected = (date: Date) => {
    return selectedDate && date.toDateString() === selectedDate.toDateString();
  };

  const days = getDaysInMonth(currentDate);
  const monthNames = [
    "January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"
  ];
  const dayNames = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

  return (
    <div className="min-h-screen bg-gray-100">
      {/* Navigation Bar */}
      <nav className="bg-white shadow-lg border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center">
              <Link href="/" className="flex-shrink-0 flex items-center space-x-3 hover:opacity-80 transition-opacity">
                <Image
                  src="/Refine_the_Jag_Motor.png"
                  alt="Jag Racing Logo"
                  width={40}
                  height={40}
                  className="rounded-full"
                />
                <h1 className="text-gray-800 text-xl font-bold">Jag Racing</h1>
              </Link>
            </div>
            {/* Mobile menu button */}
            <div>
              <button
                onClick={toggleMenu}
                className="bg-gray-300 hover:bg-gray-400 inline-flex items-center justify-center p-3 rounded-lg text-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2 focus:ring-offset-white transition-all duration-200 min-h-[44px] min-w-[44px]"
                aria-controls="mobile-menu"
                aria-expanded={isMenuOpen}
              >
                <span className="sr-only">Open main menu</span>
                <svg
                  className={`h-6 w-6 transition-all duration-300 ${isMenuOpen ? 'rotate-45' : ''}`}
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2.5"
                    d={isMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
        {/* Mobile menu */}
        {isMenuOpen && (
          <div id="mobile-menu">
            <div className="px-4 pt-4 pb-6 space-y-2 bg-gray-200 border-t border-gray-300 shadow-lg">
              <a
                href="/resources"
                className="text-gray-600 hover:bg-gray-300 hover:text-gray-800 block px-4 py-4 rounded-lg text-lg font-medium transition-all duration-200 min-h-[56px] flex items-center active:bg-gray-400"
                onClick={() => setIsMenuOpen(false)}
              >
                <svg className="w-5 h-5 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                </svg>
                Resources
              </a>
              <a
                href="/contact"
                className="text-gray-600 hover:bg-gray-300 hover:text-gray-800 block px-4 py-4 rounded-lg text-lg font-medium transition-all duration-200 min-h-[56px] flex items-center active:bg-gray-400"
                onClick={() => setIsMenuOpen(false)}
              >
                <svg className="w-5 h-5 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                Contact Us
              </a>
              <a
                href="/sponsors"
                className="text-gray-600 hover:bg-gray-300 hover:text-gray-800 block px-4 py-4 rounded-lg text-lg font-medium transition-all duration-200 min-h-[56px] flex items-center active:bg-gray-400"
                onClick={() => setIsMenuOpen(false)}
              >
                <svg className="w-5 h-5 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1" />
                </svg>
                Sponsors
              </a>
              <a
                href="/calendar"
                className="bg-gray-400 text-gray-800 block px-4 py-4 rounded-lg text-lg font-medium transition-all duration-200 min-h-[56px] flex items-center active:bg-gray-500"
                onClick={() => setIsMenuOpen(false)}
              >
                <svg className="w-5 h-5 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
                Calendar
              </a>
            </div>
          </div>
        )}
      </nav>

      {/* Main Content */}
      <main className="flex-1">
        <div className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
          <div className="px-4 py-6 sm:px-0">
            <div className="bg-white rounded-lg shadow-lg p-8">
              <div className="flex flex-col lg:flex-row gap-8">
                {/* Calendar */}
                <div className="flex-1">
                  <div className="flex items-center justify-between mb-6">
                    <h1 className="text-3xl font-bold text-gray-900">
                      {monthNames[currentDate.getMonth()]} {currentDate.getFullYear()}
                    </h1>
                    <div className="flex items-center space-x-2">
                      <button
                        onClick={() => navigateMonth('prev')}
                        className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
                      >
                        <svg className="w-5 h-5 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" />
                        </svg>
                      </button>
                      <button
                        onClick={goToToday}
                        className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors text-sm font-medium"
                      >
                        Today
                      </button>
                      <button
                        onClick={() => navigateMonth('next')}
                        className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
                      >
                        <svg className="w-5 h-5 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                        </svg>
                      </button>
                    </div>
                  </div>

                  {/* Calendar Grid */}
                  <div className="grid grid-cols-7 gap-px bg-gray-200 rounded-lg overflow-hidden">
                    {/* Day headers */}
                    {dayNames.map(day => (
                      <div key={day} className="bg-gray-50 p-3 text-center text-sm font-medium text-gray-500">
                        {day}
                      </div>
                    ))}
                    
                    {/* Calendar days */}
                    {days.map((day, index) => {
                      if (!day) {
                        return <div key={index} className="bg-white h-24"></div>;
                      }
                      
                      const dayEvents = getEventsForDate(day);
                      const isCurrentDay = isToday(day);
                      const isSelectedDay = isSelected(day);
                      
                      return (
                        <div
                          key={day.toISOString()}
                          className={`bg-white h-24 p-1 cursor-pointer hover:bg-gray-50 transition-colors ${
                            isCurrentDay ? 'bg-blue-50 border-2 border-blue-500' : ''
                          } ${isSelectedDay ? 'bg-blue-100' : ''}`}
                          onClick={() => setSelectedDate(day)}
                        >
                          <div className={`text-sm font-medium mb-1 ${
                            isCurrentDay ? 'text-blue-600' : 'text-gray-900'
                          }`}>
                            {day.getDate()}
                          </div>
                          <div className="space-y-1">
                            {dayEvents.slice(0, 2).map(event => (
                              <div
                                key={event.id}
                                className={`text-xs px-1 py-0.5 rounded truncate ${getEventTypeColor(event.type)}`}
                                title={event.title}
                              >
                                {event.title}
                              </div>
                            ))}
                            {dayEvents.length > 2 && (
                              <div className="text-xs text-gray-500">
                                +{dayEvents.length - 2} more
                              </div>
                            )}
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>

                {/* Events Sidebar */}
                <div className="lg:w-80">
                  <h2 className="text-xl font-semibold text-gray-900 mb-4">
                    {selectedDate ? 
                      `Events for ${selectedDate.toLocaleDateString('en-US', { 
                        weekday: 'long', 
                        month: 'long', 
                        day: 'numeric' 
                      })}` : 
                      'Upcoming Events'
                    }
                  </h2>
                  
                  <div className="space-y-3 max-h-96 overflow-y-auto">
                    {(selectedDate ? getEventsForDate(selectedDate) : events.slice(0, 5)).map(event => (
                      <div key={event.id} className="border border-gray-200 rounded-lg p-3 hover:shadow-md transition-shadow">
                        <div className="flex items-start justify-between">
                          <div className="flex-1">
                            <h3 className="font-semibold text-gray-900 text-sm">{event.title}</h3>
                            <p className="text-xs text-gray-600 mt-1">
                              {new Date(event.date).toLocaleDateString('en-US', { 
                                month: 'short', 
                                day: 'numeric' 
                              })} • {event.time}
                            </p>
                            <p className="text-xs text-gray-500 mt-1">{event.location}</p>
                            {event.description && (
                              <p className="text-xs text-gray-600 mt-2">{event.description}</p>
                            )}
                          </div>
                          <span className={`inline-flex items-center px-2 py-1 rounded-full text-xs font-medium border ${getEventTypeColor(event.type)}`}>
                            {event.type.charAt(0).toUpperCase() + event.type.slice(1)}
                          </span>
                        </div>
                      </div>
                    ))}
                    
                    {(!selectedDate ? events : getEventsForDate(selectedDate)).length === 0 && (
                      <p className="text-gray-500 text-sm text-center py-4">
                        No events scheduled
                      </p>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}