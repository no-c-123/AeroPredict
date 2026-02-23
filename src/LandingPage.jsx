import { useNavigate } from 'react-router-dom';
import { Plane, Brain, Database, Code, Users, ArrowRight, Github, Server, Layout } from 'lucide-react';

export default function LandingPage() {
    const navigate = useNavigate();

    const techStack = [
        { name: "React + Vite", icon: <Layout className="w-6 h-6" />, role: "Frontend Framework" },
        { name: "Python + Flask", icon: <Server className="w-6 h-6" />, role: "Backend API" },
        { name: "Scikit-Learn", icon: <Brain className="w-6 h-6" />, role: "ML Model" },
        { name: "Leaflet Maps", icon: <Plane className="w-6 h-6" />, role: "Visualization" },
    ];

    const team = [
        { name: "Matilda Cruz", role: "Backend Engineer", initial: "MC" },
        { name: "Hector Kuri", role: "Data Analyst", initial: "HK" },
        { name: "Hector Leal", role: "Frontend Developer", initial: "HL" },
    ];

    return (
        <div className="min-h-screen bg-slate-900 text-white overflow-x-hidden selection:bg-cyan-500/30">
            {/* Navbar */}
            <nav className="fixed w-full z-50 bg-slate-900/80 backdrop-blur-md border-b border-slate-800">
                <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
                    <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-cyan-500 to-blue-600 flex items-center justify-center shadow-lg shadow-cyan-500/20 overflow-hidden">
                            <img src="/Logo.png" alt="Logo" className="w-full h-full object-cover" />
                        </div>
                        <span className="text-xl font-black italic tracking-widest text-transparent bg-clip-text bg-gradient-to-r from-white to-slate-400">
                            AEROPREDICT <span className="text-cyan-500 not-italic">AI</span>
                        </span>
                    </div>
                    <button 
                        onClick={() => navigate('/app')}
                        className="px-6 py-2.5 bg-cyan-500/10 hover:bg-cyan-500/20 text-cyan-400 font-bold rounded-lg border border-cyan-500/20 transition-all hover:scale-105"
                    >
                        Launch App
                    </button>
                </div>
            </nav>

            {/* Hero Section */}
            <section className="relative pt-32 pb-20 px-6">
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[600px] bg-blue-600/20 blur-[120px] rounded-full opacity-20 pointer-events-none" />
                
                <div className="max-w-5xl mx-auto text-center relative z-10">
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-slate-800/50 border border-slate-700/50 mb-8 animate-fade-in-up">
                        <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                        <span className="text-sm font-medium text-slate-300">v2.4.1 Model Active</span>
                    </div>
                    
                    <h1 className="text-5xl md:text-7xl font-black mb-8 leading-tight tracking-tight">
                        Predict Flight Delays with <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500">
                            Artificial Intelligence
                        </span>
                    </h1>
                    
                    <p className="text-xl text-slate-400 mb-12 max-w-2xl mx-auto leading-relaxed">
                        Leveraging advanced Random Forest algorithms to analyze millions of flight records, weather patterns, and airport traffic data for accurate real-time predictions.
                    </p>
                    
                    <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                        <button 
                            onClick={() => navigate('/app')}
                            className="group relative px-8 py-4 bg-gradient-to-r from-cyan-600 to-blue-600 hover:from-cyan-500 hover:to-blue-500 rounded-xl font-bold text-lg shadow-lg shadow-cyan-500/25 transition-all hover:-translate-y-1"
                        >
                            <span className="flex items-center gap-2">
                                Start Predicting
                                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                            </span>
                        </button>
                        <button 
                            onClick={() => navigate('/docs')}
                            className="px-8 py-4 bg-slate-800 hover:bg-slate-700 rounded-xl font-bold text-lg border border-slate-700 transition-all hover:-translate-y-1"
                        >
                            View Documentation
                        </button>
                    </div>
                </div>
            </section>

            {/* Features Grid */}
            <section className="py-24 bg-slate-800/30 border-y border-slate-800">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="grid md:grid-cols-3 gap-8">
                        <div className="p-8 rounded-2xl bg-slate-900/50 border border-slate-800 hover:border-cyan-500/30 transition-colors group">
                            <div className="w-12 h-12 rounded-lg bg-cyan-500/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                                <Brain className="w-6 h-6 text-cyan-400" />
                            </div>
                            <h3 className="text-xl font-bold mb-4">Machine Learning</h3>
                            <p className="text-slate-400 leading-relaxed">
                                Powered by a robust Random Forest Classifier trained on 5+ million flight records from the Bureau of Transportation Statistics.
                            </p>
                        </div>
                        <div className="p-8 rounded-2xl bg-slate-900/50 border border-slate-800 hover:border-blue-500/30 transition-colors group">
                            <div className="w-12 h-12 rounded-lg bg-blue-500/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                                <Database className="w-6 h-6 text-blue-400" />
                            </div>
                            <h3 className="text-xl font-bold mb-4">Real-Time Data</h3>
                            <p className="text-slate-400 leading-relaxed">
                                Integrates live NOAA weather data and current airport traffic metrics to provide up-to-the-minute delay probability scores.
                            </p>
                        </div>
                        <div className="p-8 rounded-2xl bg-slate-900/50 border border-slate-800 hover:border-purple-500/30 transition-colors group">
                            <div className="w-12 h-12 rounded-lg bg-purple-500/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                                <Code className="w-6 h-6 text-purple-400" />
                            </div>
                            <h3 className="text-xl font-bold mb-4">Modern Stack</h3>
                            <p className="text-slate-400 leading-relaxed">
                                Built with React and Vite for a lightning-fast frontend, connected to a Python Flask backend for efficient data processing.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Tech Stack */}
            <section className="py-24 px-6">
                <div className="max-w-7xl mx-auto">
                    <h2 className="text-3xl font-black text-center mb-16 uppercase tracking-widest">Technology Stack</h2>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                        {techStack.map((tech, idx) => (
                            <div key={idx} className="flex flex-col items-center p-6 rounded-xl bg-slate-800/50 border border-slate-700/50 hover:bg-slate-800 transition-colors">
                                <div className="p-4 rounded-full bg-slate-700/50 mb-4 text-cyan-400">
                                    {tech.icon}
                                </div>
                                <h4 className="font-bold mb-1">{tech.name}</h4>
                                <p className="text-xs text-slate-500 uppercase tracking-wider">{tech.role}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Team Section */}
            <section className="py-24 px-6 bg-gradient-to-b from-slate-900 to-slate-800">
                <div className="max-w-7xl mx-auto">
                    <h2 className="text-3xl font-black text-center mb-16 uppercase tracking-widest">Engineering Team</h2>
                    <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
                        {team.map((member, idx) => (
                            <div key={idx} className="text-center group">
                                <div className="w-24 h-24 mx-auto rounded-full bg-gradient-to-br from-cyan-500 to-blue-600 p-1 mb-6 transform transition-transform group-hover:scale-105">
                                    <div className="w-full h-full rounded-full bg-slate-900 flex items-center justify-center text-2xl font-bold">
                                        {member.initial}
                                    </div>
                                </div>
                                <h3 className="text-xl font-bold mb-2">{member.name}</h3>
                                <p className="text-cyan-400 font-medium text-sm uppercase tracking-wider">{member.role}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Footer */}
            <footer className="py-8 border-t border-slate-800 text-center text-slate-500 text-sm">
                <p>&copy; 2024 AeroPredict AI. All rights reserved.</p>
            </footer>
        </div>
    );
}
