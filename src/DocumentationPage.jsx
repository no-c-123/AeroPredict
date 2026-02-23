import { useNavigate } from 'react-router-dom';
import { ArrowLeft, Book, Server, Code, Database, Brain, Terminal, Shield, Zap } from 'lucide-react';

export default function DocumentationPage() {
    const navigate = useNavigate();

    const sections = [
        {
            id: 'overview',
            title: 'Overview',
            icon: <Book className="w-6 h-6 text-cyan-400" />,
            content: (
                <div className="space-y-4">
                    <p className="text-slate-300 leading-relaxed">
                        AeroPredict AI is a sophisticated flight delay prediction system that leverages machine learning to analyze historical flight data, weather patterns, and airport traffic. By processing millions of data points, it provides travelers with accurate, real-time risk assessments for their upcoming flights.
                    </p>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
                        <div className="p-4 rounded-xl bg-slate-800/50 border border-slate-700/50">
                            <h4 className="font-bold text-white mb-2">Key Capabilities</h4>
                            <ul className="list-disc list-inside text-sm text-slate-400 space-y-1">
                                <li>Real-time delay probability calculation</li>
                                <li>Weather impact analysis</li>
                                <li>Historical performance tracking</li>
                                <li>Airport congestion monitoring</li>
                            </ul>
                        </div>
                        <div className="p-4 rounded-xl bg-slate-800/50 border border-slate-700/50">
                            <h4 className="font-bold text-white mb-2">Target Audience</h4>
                            <ul className="list-disc list-inside text-sm text-slate-400 space-y-1">
                                <li>Frequent Flyers</li>
                                <li>Travel Agencies</li>
                                <li>Airline Operations</li>
                                <li>Logistics Companies</li>
                            </ul>
                        </div>
                    </div>
                </div>
            )
        },
        {
            id: 'frontend',
            title: 'Frontend Architecture',
            icon: <Layout className="w-6 h-6 text-blue-400" />,
            content: (
                <div className="space-y-4">
                    <p className="text-slate-300 leading-relaxed">
                        The user interface is built with <strong>React</strong> and <strong>Vite</strong>, designed for performance and responsiveness. It features a modern, glassmorphic aesthetic using Tailwind CSS.
                    </p>
                    <div className="space-y-4 mt-4">
                        <div className="flex items-start gap-4">
                            <div className="p-2 rounded-lg bg-blue-500/10 text-blue-400">
                                <Code className="w-5 h-5" />
                            </div>
                            <div>
                                <h4 className="font-bold text-white">Component Structure</h4>
                                <p className="text-sm text-slate-400 mt-1">
                                    Modular architecture with reusable components like <code>Sidebar</code>, <code>MapComponent</code>, and <code>RightSidebar</code>. State is managed locally with React Hooks for a lightweight footprint.
                                </p>
                            </div>
                        </div>
                        <div className="flex items-start gap-4">
                            <div className="p-2 rounded-lg bg-purple-500/10 text-purple-400">
                                <Zap className="w-5 h-5" />
                            </div>
                            <div>
                                <h4 className="font-bold text-white">Visualizations</h4>
                                <p className="text-sm text-slate-400 mt-1">
                                    Interactive maps powered by <strong>Leaflet</strong> and <strong>React-Leaflet</strong> visualize flight paths and airport locations. Custom animations using CSS transitions provide a polished user experience.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            )
        },
        {
            id: 'backend',
            title: 'Backend & ML Model',
            icon: <Server className="w-6 h-6 text-green-400" />,
            content: (
                <div className="space-y-6">
                    <p className="text-slate-300 leading-relaxed">
                        The core intelligence resides in a Python-based backend powered by <strong>FastAPI</strong>. It exposes RESTful endpoints that interface with our trained Machine Learning models.
                    </p>
                    
                    <div className="bg-slate-900/50 rounded-xl p-6 border border-slate-700 font-mono text-sm">
                        <div className="flex items-center gap-2 text-slate-400 mb-4 border-b border-slate-700 pb-2">
                            <Terminal className="w-4 h-4" />
                            <span>API Endpoints</span>
                        </div>
                        <div className="space-y-4">
                            <div>
                                <span className="text-green-400 font-bold">POST</span> <span className="text-slate-200">/api/predict</span>
                                <p className="text-slate-500 mt-1 ml-4">
                                    Accepts flight parameters (airline, route, time) and returns a JSON object containing the risk level (Low/Medium/High) and exact delay probability.
                                </p>
                            </div>
                            <div>
                                <span className="text-blue-400 font-bold">GET</span> <span className="text-slate-200">/api/health</span>
                                <p className="text-slate-500 mt-1 ml-4">
                                    System health check to ensure the ML model is loaded and ready for inference.
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className="bg-slate-800/30 rounded-xl p-6 border border-slate-700/50">
                        <h4 className="font-bold text-white mb-4 flex items-center gap-2">
                            <Brain className="w-5 h-5 text-yellow-400" />
                            Machine Learning Pipeline
                        </h4>
                        <ul className="space-y-3 text-sm text-slate-300">
                            <li className="flex items-start gap-2">
                                <span className="w-1.5 h-1.5 rounded-full bg-yellow-400 mt-1.5"></span>
                                <span>
                                    <strong>Algorithm:</strong> Random Forest Classifier (Scikit-Learn). Chosen for its robustness against overfitting and ability to handle non-linear relationships in flight data.
                                </span>
                            </li>
                            <li className="flex items-start gap-2">
                                <span className="w-1.5 h-1.5 rounded-full bg-yellow-400 mt-1.5"></span>
                                <span>
                                    <strong>Training Data:</strong> Trained on the Bureau of Transportation Statistics (BTS) dataset, covering 5+ million domestic US flights from 2020-2024.
                                </span>
                            </li>
                            <li className="flex items-start gap-2">
                                <span className="w-1.5 h-1.5 rounded-full bg-yellow-400 mt-1.5"></span>
                                <span>
                                    <strong>Features:</strong> Departure Delay, Distance, Airline Carrier, Month, Day of Week, and normalized Weather Severity Index.
                                </span>
                            </li>
                        </ul>
                    </div>
                </div>
            )
        },
        {
            id: 'security',
            title: 'Security & Privacy',
            icon: <Shield className="w-6 h-6 text-red-400" />,
            content: (
                <div className="space-y-4">
                    <p className="text-slate-300 leading-relaxed">
                        AeroPredict AI is designed with privacy in mind. User queries are processed in real-time and are not persistently stored on our servers.
                    </p>
                    <ul className="list-disc list-inside text-sm text-slate-400 space-y-2 ml-4">
                        <li><strong>Ephemeral Processing:</strong> Flight details are discarded immediately after prediction.</li>
                        <li><strong>Local Storage:</strong> "Recent Predictions" history is stored only in your browser's local session.</li>
                        <li><strong>HTTPS Enforcement:</strong> All data transmission between frontend and backend is encrypted.</li>
                    </ul>
                </div>
            )
        }
    ];

    return (
        <div className="min-h-screen bg-slate-900 text-white selection:bg-cyan-500/30">
            {/* Navbar */}
            <nav className="fixed w-full z-50 bg-slate-900/95 backdrop-blur-md border-b border-slate-800">
                <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
                    <div className="flex items-center gap-3 cursor-pointer" onClick={() => navigate('/')}>
                        <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-cyan-500 to-blue-600 flex items-center justify-center overflow-hidden">
                            <img src="/Logo.png" alt="Logo" className="w-full h-full object-cover" />
                        </div>
                        <span className="text-lg font-bold tracking-widest">
                            AEROPREDICT <span className="text-cyan-500">DOCS</span>
                        </span>
                    </div>
                    <button 
                        onClick={() => navigate('/')}
                        className="flex items-center gap-2 px-4 py-2 text-sm text-slate-400 hover:text-white transition-colors"
                    >
                        <ArrowLeft className="w-4 h-4" />
                        Back to Home
                    </button>
                </div>
            </nav>

            <div className="pt-20 flex min-h-screen">
                {/* Sidebar Navigation */}
                <aside className="w-64 fixed h-full bg-slate-900 border-r border-slate-800 hidden md:block pt-8">
                    <div className="px-6 mb-8">
                        <h3 className="text-xs font-bold text-slate-500 uppercase tracking-widest mb-4">Contents</h3>
                        <nav className="space-y-1">
                            {sections.map((section) => (
                                <a 
                                    key={section.id}
                                    href={`#${section.id}`}
                                    className="block px-3 py-2 text-sm text-slate-400 hover:text-cyan-400 hover:bg-slate-800/50 rounded-lg transition-colors"
                                >
                                    {section.title}
                                </a>
                            ))}
                        </nav>
                    </div>
                </aside>

                {/* Main Content */}
                <main className="flex-1 md:ml-64 p-6 md:p-12 max-w-4xl mx-auto">
                    <div className="mb-12">
                        <h1 className="text-4xl md:text-5xl font-black mb-6 tracking-tight">
                            Documentation
                        </h1>
                        <p className="text-xl text-slate-400">
                            Comprehensive guide to the AeroPredict AI architecture, API reference, and machine learning methodology.
                        </p>
                    </div>

                    <div className="space-y-16">
                        {sections.map((section) => (
                            <section key={section.id} id={section.id} className="scroll-mt-32">
                                <div className="flex items-center gap-4 mb-6">
                                    <div className="p-3 rounded-xl bg-slate-800 border border-slate-700">
                                        {section.icon}
                                    </div>
                                    <h2 className="text-2xl font-bold">{section.title}</h2>
                                </div>
                                <div className="pl-0 md:pl-16 border-l-2 border-slate-800 ml-6 md:ml-6 py-2">
                                    <div className="pl-6 md:pl-8">
                                        {section.content}
                                    </div>
                                </div>
                            </section>
                        ))}
                    </div>

                    <footer className="mt-24 pt-8 border-t border-slate-800 text-center text-slate-500 text-sm">
                        <p>Last updated: February 2026 • AeroPredict AI Team</p>
                    </footer>
                </main>
            </div>
        </div>
    );
}

// Helper component for icon
function Layout({ className }) {
    return (
        <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <rect x="3" y="3" width="18" height="18" rx="2" ry="2" strokeWidth="2"/>
            <line x1="3" y1="9" x2="21" y2="9" strokeWidth="2"/>
            <line x1="9" y1="21" x2="9" y2="9" strokeWidth="2"/>
        </svg>
    );
}
