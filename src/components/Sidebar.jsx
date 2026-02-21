import { useState } from 'react';

export default function Sidebar() {
    const [formData, setFormData] = useState({
        departureAirport: '',
        destinationAirport: '',
        departureTime: '',
        airline: '',
        dayOfWeek: '',
        month: ''
    });

    // Sample data
    const airports = ['JFK', 'LAX', 'ORD', 'DFW', 'DEN', 'SFO', 'SEA', 'LAS', 'MCO', 'EWR', 'ATL', 'CLT', 'MIA', 'PHX'];
    const airlines = ['American Airlines', 'Delta', 'United', 'Southwest', 'JetBlue', 'Alaska', 'Spirit', 'Frontier'];
    const days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
    const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Predicting delay risk for:', formData);
    };

    const handleClear = () => {
        setFormData({
            departureAirport: '',
            destinationAirport: '',
            departureTime: '',
            airline: '',
            dayOfWeek: '',
            month: ''
        });
    };

    const inputClasses = "w-full bg-slate-900/50 backdrop-blur-sm text-gray-100 border border-slate-700/50 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-cyan-500/50 focus:border-cyan-500/50 transition-all duration-300 appearance-none cursor-pointer hover:border-slate-600 hover:bg-slate-900/80 placeholder-gray-500 text-sm font-light tracking-wide shadow-inner";
    const labelClasses = "text-cyan-400/80 text-xs font-bold uppercase tracking-widest ml-1 mb-1";
    const iconClasses = "pointer-events-none absolute inset-y-0 right-0 flex items-center px-4 text-cyan-500/50";

    return (
        <div className="w-96 h-full rounded-3xl p-1 shadow-[0_0_50px_-12px_rgba(0,0,0,0.5)] overflow-y-auto border border-slate-700/30 bg-slate-900/95 backdrop-blur-2xl relative">
            {/* Ambient Background Glow */}
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none rounded-3xl z-0">
                <div className="absolute top-[-20%] left-[-20%] w-[50%] h-[30%] bg-cyan-500/10 blur-[100px] rounded-full"></div>
                <div className="absolute bottom-[-20%] right-[-20%] w-[50%] h-[30%] bg-blue-600/10 blur-[100px] rounded-full"></div>
            </div>

            <div className="relative z-10 h-full flex flex-col p-5">
                <h2 className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500 tracking-[0.1em] text-xl font-bold mb-6 text-center uppercase drop-shadow-md border-b border-slate-800 pb-4">
                    Flight Parameters
                </h2>
                
                <form onSubmit={handleSubmit} className="flex flex-col gap-5 pb-4 flex-1">
                    {/* Departure Airport */}
                    <div className="group">
                        <label className={labelClasses}>Departure Airport</label>
                        <div className="relative">
                            <select 
                                name="departureAirport" 
                                value={formData.departureAirport}
                                onChange={handleChange}
                                className={inputClasses}
                            >
                                <option value="" disabled className="bg-slate-900 text-gray-500">Select departure (e.g., JFK)</option>
                                {airports.map(airport => (
                                    <option key={airport} value={airport} className="bg-slate-900 text-gray-200">{airport}</option>
                                ))}
                            </select>
                            <div className={iconClasses}>
                                <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                                    <path d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"/>
                                </svg>
                            </div>
                        </div>
                    </div>

                    {/* Destination Airport */}
                    <div className="group">
                        <label className={labelClasses}>Destination Airport</label>
                        <div className="relative">
                            <select 
                                name="destinationAirport" 
                                value={formData.destinationAirport}
                                onChange={handleChange}
                                className={inputClasses}
                            >
                                <option value="" disabled className="bg-slate-900 text-gray-500">Select destination (e.g., LAX)</option>
                                {airports.map(airport => (
                                    <option key={airport} value={airport} className="bg-slate-900 text-gray-200">{airport}</option>
                                ))}
                            </select>
                            <div className={iconClasses}>
                                <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                                    <path d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"/>
                                </svg>
                            </div>
                        </div>
                    </div>

                    {/* Departure Time */}
                    <div className="group">
                        <label className={labelClasses}>Departure Time</label>
                        <input 
                            type="time" 
                            name="departureTime"
                            value={formData.departureTime}
                            onChange={handleChange}
                            className={inputClasses}
                        />
                    </div>

                    {/* Airline */}
                    <div className="group">
                        <label className={labelClasses}>Airline</label>
                        <div className="relative">
                            <select 
                                name="airline" 
                                value={formData.airline}
                                onChange={handleChange}
                                className={inputClasses}
                            >
                                <option value="" disabled className="bg-slate-900 text-gray-500">Select airline</option>
                                {airlines.map(airline => (
                                    <option key={airline} value={airline} className="bg-slate-900 text-gray-200">{airline}</option>
                                ))}
                            </select>
                            <div className={iconClasses}>
                                <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                                    <path d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"/>
                                </svg>
                            </div>
                        </div>
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                        {/* Day of Week */}
                        <div className="group">
                            <label className={labelClasses}>Day</label>
                            <div className="relative">
                                <select 
                                    name="dayOfWeek" 
                                    value={formData.dayOfWeek}
                                    onChange={handleChange}
                                    className={inputClasses}
                                >
                                    <option value="" disabled className="bg-slate-900 text-gray-500">Select</option>
                                    {days.map(day => (
                                        <option key={day} value={day} className="bg-slate-900 text-gray-200">{day}</option>
                                    ))}
                                </select>
                                <div className={iconClasses}>
                                    <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                                        <path d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"/>
                                    </svg>
                                </div>
                            </div>
                        </div>

                        {/* Month */}
                        <div className="group">
                            <label className={labelClasses}>Month</label>
                            <div className="relative">
                                <select 
                                    name="month" 
                                    value={formData.month}
                                    onChange={handleChange}
                                    className={inputClasses}
                                >
                                    <option value="" disabled className="bg-slate-900 text-gray-500">Select</option>
                                    {months.map(month => (
                                        <option key={month} value={month} className="bg-slate-900 text-gray-200">{month}</option>
                                    ))}
                                </select>
                                <div className={iconClasses}>
                                    <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                                        <path d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"/>
                                    </svg>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Buttons Section */}
                    <div className="flex flex-col gap-4 mt-auto pt-6 border-t border-slate-700/30">
                        <button 
                            type="submit"
                            className="group relative w-full bg-gradient-to-r from-cyan-600 to-blue-600 hover:from-cyan-500 hover:to-blue-500 text-white font-bold py-4 px-4 rounded-xl shadow-[0_0_20px_rgba(6,182,212,0.3)] hover:shadow-[0_0_30px_rgba(6,182,212,0.5)] transition-all duration-300 transform hover:-translate-y-0.5 overflow-hidden"
                        >
                            <div className="absolute inset-0 bg-white/20 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700 skew-x-[-20deg]"></div>
                            <span className="relative tracking-wider uppercase text-sm">Predict Delay Risk</span>
                        </button>
                        
                        <button 
                            type="button"
                            onClick={handleClear}
                            className="w-full bg-transparent hover:bg-slate-800/50 text-slate-400 hover:text-cyan-400 font-medium py-3 px-4 rounded-xl border border-slate-700/50 hover:border-cyan-500/30 transition-all duration-300 text-sm tracking-wide"
                        >
                            Clear Parameters
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
}
