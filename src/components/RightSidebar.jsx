import { useState } from 'react';
import { createPortal } from 'react-dom';
import './RightSidebar.css';

export default function RightSidebar() {

    const [isModalOpen, setIsModalOpen] = useState(false);

    // Mock data
    const predictionsOfDay = [
        { id: 1, flight: 'AA-123', route: 'JFK -> LHR', risk: 'Low', time: '10:00 AM' },
        { id: 2, flight: 'DL-456', route: 'LAX -> HND', risk: 'High', time: '11:30 AM' },
        { id: 3, flight: 'UA-789', route: 'SFO -> SIN', risk: 'Medium', time: '01:15 PM' },
    ];

    const recentPredictions = [
        { id: 1, flight: 'BA-101', risk: 'Low', date: 'Just now' },
        { id: 2, flight: 'AF-202', risk: 'High', date: '2 mins ago' },
    ];

    const riskFlights = [
        { id: 1, flight: 'NK-555', route: 'MCO -> EWR', risk: '92%', reason: 'Weather' },
        { id: 2, flight: 'F9-333', route: 'DEN -> ORD', risk: '88%', reason: 'Traffic' },
    ];

    const effectivityScore = 87;

    const cardClasses = "bg-slate-800/40 border border-slate-700/50 rounded-xl p-4 mb-4 backdrop-blur-sm";
    const titleClasses = "text-cyan-400/90 text-xs font-bold uppercase tracking-widest mb-3 flex items-center gap-2";
    
    return (
        <div className="w-80 h-full rounded-3xl p-1 shadow-[0_0_50px_-12px_rgba(0,0,0,0.5)] overflow-y-auto border border-slate-700/30 bg-slate-900/95 backdrop-blur-2xl relative flex flex-col">
            {/* Ambient Background Glow */}
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none rounded-3xl z-0">
                <div className="absolute top-[10%] right-[-50%] w-[70%] h-[40%] bg-blue-600/10 blur-[100px] rounded-full"></div>
                <div className="absolute bottom-[10%] left-[-50%] w-[70%] h-[40%] bg-cyan-500/10 blur-[100px] rounded-full"></div>
            </div>

            <div className="relative z-10 p-5 flex flex-col h-full">
                <h2 className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400 tracking-[0.1em] text-lg font-bold mb-6 text-center uppercase drop-shadow-md border-b border-slate-800 pb-4">
                    Dashboard
                </h2>

                <div className="flex-1 overflow-y-auto pr-1 custom-scrollbar space-y-5">
                    
                    {/* Effectivity Score */}
                    <div 
                        className="bg-slate-800/40 border border-slate-700/50 rounded-xl p-4 mb-4 backdrop-blur-sm overflow-hidden"
                        onClick={() => setIsModalOpen(true)}
                        style={{ cursor: 'pointer' }}
                    >
                        <h3 className={titleClasses}>
                            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" /></svg>
                            <span className="text-xs text-cyan-400/90 font-bold uppercase tracking-widest">Model Accuracy</span>
                        </h3>
                        <div className="flex items-center justify-between mb-2">
                            <span className="text-3xl font-bold text-white">{effectivityScore}%</span>
                            <span className="text-xs text-green-400 bg-green-400/10 px-2 py-1 rounded-full border border-green-400/20">+2.4% this week</span>
                        </div>
                        <div className="w-full bg-slate-700/50 rounded-full h-2">
                            <div className="bg-gradient-to-r from-cyan-500 to-blue-500 h-2 rounded-full" style={{ width: `${effectivityScore}%` }}></div>
                        </div>
                    </div>

                    {/* Predictions of the Day */}
                    <div className={cardClasses}>
                        <h3 className={titleClasses}>
                            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                            Today's Forecasts
                        </h3>
                        <div className="space-y-3">
                            {predictionsOfDay.map(p => (
                                <div key={p.id} className="flex items-center justify-between text-sm group cursor-pointer hover:bg-white/5 p-2 rounded-lg transition-colors">
                                    <div>
                                        <div className="font-bold text-slate-200">{p.flight}</div>
                                        <div className="text-xs text-slate-500">{p.route}</div>
                                    </div>
                                    <div className="text-right">
                                        <div className={`text-xs font-bold px-2 py-0.5 rounded ${
                                            p.risk === 'High' ? 'bg-red-500/20 text-red-400 border border-red-500/30' : 
                                            p.risk === 'Medium' ? 'bg-yellow-500/20 text-yellow-400 border border-yellow-500/30' : 
                                            'bg-green-500/20 text-green-400 border border-green-500/30'
                                        }`}>{p.risk} Risk</div>
                                        <div className="text-[10px] text-slate-500 mt-0.5">{p.time}</div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Recent Predictions */}
                    <div className={cardClasses}>
                        <h3 className={titleClasses}>
                            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                            Recent Checks
                        </h3>
                        <div className="space-y-2">
                            {recentPredictions.map(p => (
                                <div key={p.id} className="flex items-center justify-between text-sm p-2 bg-slate-900/50 rounded-lg border border-slate-700/30">
                                    <span className="font-mono text-slate-300">{p.flight}</span>
                                    <span className="text-xs text-slate-500">{p.date}</span>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* High Risk Flights */}
                    <div className={cardClasses}>
                        <h3 className={`${titleClasses} text-red-400/90`}>
                            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" /></svg>
                            High Risk Alerts
                        </h3>
                        <div className="space-y-3">
                            {riskFlights.map(p => (
                                <div key={p.id} className="relative overflow-hidden p-3 rounded-lg bg-red-500/5 border border-red-500/20 group hover:border-red-500/40 transition-all">
                                    <div className="flex justify-between items-start mb-1">
                                        <span className="font-bold text-red-200">{p.flight}</span>
                                        <span className="text-xs font-bold text-red-400">{p.risk}</span>
                                    </div>
                                    <div className="text-xs text-slate-400 flex justify-between">
                                        <span>{p.route}</span>
                                        <span className="text-red-400/70">{p.reason}</span>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Retrain Model Button */}
                <div className="mt-4 pt-4 border-t border-slate-700/50">
                    <button className="group w-full relative overflow-hidden bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white border border-slate-600 hover:border-cyan-500/50 rounded-xl py-3 transition-all duration-300">
                        <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 to-blue-500/10 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                        <div className="relative flex items-center justify-center gap-2 text-sm font-bold tracking-wider uppercase">
                            <svg className="w-4 h-4 group-hover:rotate-180 transition-transform duration-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                            </svg>
                            Retrain Model
                        </div>
                    </button>
                </div>
            </div>

            {isModalOpen && createPortal(
                    <div className='fixed inset-0 flex items-center justify-center z-[100] transition-all duration-300'>
                        <div 
                            className='fixed inset-0 bg-slate-900/80 backdrop-blur-sm transition-opacity duration-300'
                            onClick={() => setIsModalOpen(false)}
                        />
                        <div 
                            className='bg-slate-800 border border-slate-700 text-white p-6 rounded-2xl shadow-2xl max-w-lg w-full mx-4 relative z-10 overflow-hidden animate-model-open'
                            onClick={(e) => e.stopPropagation()}
                        >
                            <div className="flex justify-between items-center mb-6">
                                <h2 className='text-xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400'>
                                    Model Documentation
                                </h2>
                                <button onClick={() => setIsModalOpen(false)} className="text-slate-400 hover:text-white transition-colors p-1 hover:bg-slate-700 rounded-full">
                                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                    </svg>
                                </button>
                            </div>
                            
                            <div className="space-y-6">
                                {/* Model Description */}
                                <div className="bg-slate-700/30 p-4 rounded-xl">
                                    <h3 className="text-sm font-bold text-cyan-400 uppercase tracking-wider mb-2">Model Architecture</h3>
                                    <p className="text-slate-300 text-sm leading-relaxed">
                                        Random Forest Classifier trained to predict flight delays based on historical flight data, weather conditions, and airport traffic patterns.
                                    </p>
                                </div>

                                {/* Parameters & Datasets */}
                                <div className="grid grid-cols-2 gap-4">
                                    <div className="bg-slate-700/30 p-4 rounded-xl">
                                        <h3 className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-2">Training Data</h3>
                                        <ul className="text-sm text-slate-300 space-y-1">
                                            <li>• Bureau of Transportation Statistics (2020-2024)</li>
                                            <li>• NOAA Weather Data</li>
                                            <li>• 5M+ Flight Records</li>
                                        </ul>
                                    </div>
                                    <div className="bg-slate-700/30 p-4 rounded-xl">
                                        <h3 className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-2">Key Features</h3>
                                        <ul className="text-sm text-slate-300 space-y-1">
                                            <li>• Departure Delay</li>
                                            <li>• Carrier Code</li>
                                            <li>• Wind Speed/Precip</li>
                                            <li>• Temporal Features</li>
                                        </ul>
                                    </div>
                                </div>

                                {/* Version & Changelog */}
                                <div className="flex items-center justify-between bg-slate-700/30 p-4 rounded-xl border border-slate-600/50">
                                    <div>
                                        <p className="text-xs text-slate-400 uppercase tracking-wider">Current Version</p>
                                        <p className="text-xl font-bold text-white font-mono">v2.4.1</p>
                                    </div>
                                    <button className="px-4 py-2 bg-slate-600 hover:bg-slate-500 text-white text-sm font-medium rounded-lg transition-colors flex items-center gap-2">
                                        <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                                        </svg>
                                        View Changelog
                                    </button>
                                </div>
                            </div>

                            <div className="mt-6 pt-4 border-t border-slate-700/50 text-center">
                                <p className='text-xs text-slate-500'>Last evaluated on validation set: <span className="text-slate-300">Today, 09:45 AM</span></p>
                            </div>
                        </div>
                    </div>,
                    document.body)}
            </div>
    );
}
