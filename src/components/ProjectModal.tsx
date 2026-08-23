import React, { useState } from 'react';
import { ProjectItem } from '../types';
import { 
  X, 
  ExternalLink, 
  Github, 
  CheckCircle2, 
  Sparkles, 
  Calculator, 
  GraduationCap, 
  Layout, 
  FileCode,
  RotateCcw,
  Delete,
  Search,
  BookOpen,
  Calendar,
  Layers,
  Code
} from 'lucide-react';

interface ProjectModalProps {
  project: ProjectItem | null;
  onClose: () => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose }) => {
  // Active modal tab: 'interactive-demo' or 'code-overview'
  const [activeTab, setActiveTab] = useState<'demo' | 'details' | 'code'>('demo');
  
  // State for interactive Calculator Demo
  const [calcDisplay, setCalcDisplay] = useState('0');
  const [calcPrev, setCalcPrev] = useState<string | null>(null);
  const [calcOp, setCalcOp] = useState<string | null>(null);
  const [calcResetOnNext, setCalcResetOnNext] = useState(false);

  // State for interactive Student Information Portal Demo
  const [attendanceClasses, setAttendanceClasses] = useState(48);
  const [attendedClasses, setAttendedClasses] = useState(42);
  const [studentTab, setStudentTab] = useState<'subjects' | 'attendance' | 'schedule'>('subjects');
  const [searchSubject, setSearchSubject] = useState('');

  if (!project) return null;

  // Calculator Logic
  const handleNum = (num: string) => {
    if (calcDisplay === '0' || calcResetOnNext) {
      setCalcDisplay(num);
      setCalcResetOnNext(false);
    } else {
      setCalcDisplay(calcDisplay + num);
    }
  };

  const handleOp = (op: string) => {
    setCalcPrev(calcDisplay);
    setCalcOp(op);
    setCalcResetOnNext(true);
  };

  const handleEqual = () => {
    if (!calcPrev || !calcOp) return;
    const a = parseFloat(calcPrev);
    const b = parseFloat(calcDisplay);
    let res = 0;
    if (calcOp === '+') res = a + b;
    if (calcOp === '-') res = a - b;
    if (calcOp === '×' || calcOp === '*') res = a * b;
    if (calcOp === '÷' || calcOp === '/') res = b !== 0 ? a / b : 0;
    
    setCalcDisplay(String(Number(res.toFixed(4))));
    setCalcPrev(null);
    setCalcOp(null);
    setCalcResetOnNext(true);
  };

  const handleClear = () => {
    setCalcDisplay('0');
    setCalcPrev(null);
    setCalcOp(null);
  };

  const handleDelete = () => {
    if (calcDisplay.length <= 1) {
      setCalcDisplay('0');
    } else {
      setCalcDisplay(calcDisplay.slice(0, -1));
    }
  };

  // Student portal data
  const subjectsData = [
    { code: 'BCA-201', name: 'Data Structures & Algorithms', credits: 4, faculty: 'Prof. S. Banerjee', score: '88%' },
    { code: 'BCA-202', name: 'C Programming & Logic Building', credits: 4, faculty: 'Dr. M. Roy', score: '92%' },
    { code: 'BCA-203', name: 'Web Technology (HTML, CSS, JS)', credits: 3, faculty: 'Prof. A. Mukherjee', score: '95%' },
    { code: 'BCA-204', name: 'Computer Architecture', credits: 3, faculty: 'Dr. K. Sen', score: '85%' },
    { code: 'BCA-205', name: 'Database Management Systems', credits: 4, faculty: 'Prof. R. Dutta', score: '90%' },
  ];

  const filteredSubjects = subjectsData.filter(s => 
    s.name.toLowerCase().includes(searchSubject.toLowerCase()) || 
    s.code.toLowerCase().includes(searchSubject.toLowerCase())
  );

  const attendancePercent = attendanceClasses > 0 ? ((attendedClasses / attendanceClasses) * 100).toFixed(1) : '0';

  return (
    <div 
      id="project-modal-backdrop"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-slate-950/70 backdrop-blur-md overflow-y-auto animate-in fade-in duration-200"
      onClick={onClose}
    >
      <div 
        id="project-modal-card"
        className="relative w-full max-w-4xl bg-white/90 dark:bg-slate-900/90 backdrop-blur-2xl rounded-3xl shadow-2xl border border-white/40 dark:border-white/10 overflow-hidden my-8"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Header */}
        <div className={`p-6 sm:p-8 bg-gradient-to-r ${project.previewColor} text-white relative overflow-hidden`}>
          <div className="absolute -right-10 -bottom-10 w-40 h-40 bg-white/20 rounded-full blur-2xl" />
          <button
            id="close-project-modal-btn"
            onClick={onClose}
            aria-label="Close modal"
            className="absolute top-6 right-6 w-9 h-9 rounded-full bg-black/20 hover:bg-black/40 backdrop-blur-md text-white flex items-center justify-center transition-colors border border-white/20"
          >
            <X className="w-5 h-5" />
          </button>

          <div className="space-y-2 max-w-2xl relative z-10">
            <div className="flex items-center gap-2">
              <span className="px-3 py-0.5 rounded-full bg-black/20 backdrop-blur-md text-white text-xs font-bold tracking-wide border border-white/20">
                {project.category}
              </span>
              <span className="px-3 py-0.5 rounded-full bg-amber-400/95 text-slate-950 text-xs font-bold shadow-md">
                Student Learning Project
              </span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-white">
              {project.title}
            </h2>
            <p className="text-sm text-blue-100/90 font-medium">
              {project.subtitle}
            </p>
          </div>
        </div>

        {/* Modal Tabs */}
        <div className="flex items-center gap-2 px-6 sm:px-8 pt-4 border-b border-slate-200/60 dark:border-white/10 bg-white/40 dark:bg-white/[0.02] backdrop-blur-md">
          <button
            id="modal-tab-demo"
            onClick={() => setActiveTab('demo')}
            className={`pb-3 px-3 text-xs font-bold border-b-2 transition-all flex items-center gap-1.5 ${
              activeTab === 'demo'
                ? 'border-blue-500 text-blue-600 dark:text-blue-400'
                : 'border-transparent text-slate-500 hover:text-slate-700 dark:hover:text-slate-300'
            }`}
          >
            <Sparkles className="w-3.5 h-3.5" />
            <span>Interactive Live Demo</span>
          </button>
          
          <button
            id="modal-tab-details"
            onClick={() => setActiveTab('details')}
            className={`pb-3 px-3 text-xs font-bold border-b-2 transition-all flex items-center gap-1.5 ${
              activeTab === 'details'
                ? 'border-blue-500 text-blue-600 dark:text-blue-400'
                : 'border-transparent text-slate-500 hover:text-slate-700 dark:hover:text-slate-300'
            }`}
          >
            <Layout className="w-3.5 h-3.5" />
            <span>Overview & Features</span>
          </button>

          <button
            id="modal-tab-code"
            onClick={() => setActiveTab('code')}
            className={`pb-3 px-3 text-xs font-bold border-b-2 transition-all flex items-center gap-1.5 ${
              activeTab === 'code'
                ? 'border-blue-500 text-blue-600 dark:text-blue-400'
                : 'border-transparent text-slate-500 hover:text-slate-700 dark:hover:text-slate-300'
            }`}
          >
            <Code className="w-3.5 h-3.5" />
            <span>Source Code Explorer</span>
          </button>
        </div>

        {/* Modal Body Content */}
        <div className="p-6 sm:p-8 max-h-[60vh] overflow-y-auto">
          
          {/* TAB 1: INTERACTIVE DEMO */}
          {activeTab === 'demo' && (
            <div>
              {/* If project is Simple Calculator */}
              {project.demoType === 'calculator' && (
                <div className="space-y-6">
                  <div className="p-4 rounded-2xl bg-blue-500/10 dark:bg-white/[0.04] border border-blue-500/20 dark:border-white/10 text-xs text-blue-800 dark:text-blue-300 flex items-center justify-between backdrop-blur-md">
                    <span>💡 <strong>Live Interactive Test:</strong> Try pressing arithmetic buttons or calculate expressions below!</span>
                    <button onClick={handleClear} className="text-blue-600 dark:text-blue-400 font-bold underline">Reset</button>
                  </div>

                  {/* Calculator Widget */}
                  <div className="max-w-xs mx-auto bg-slate-900/90 dark:bg-[#080911]/90 rounded-3xl p-5 shadow-2xl border border-slate-700 dark:border-white/10 backdrop-blur-2xl">
                    {/* Display */}
                    <div className="bg-slate-950/80 rounded-2xl p-4 mb-4 text-right border border-slate-800 dark:border-white/10">
                      <div className="h-4 text-[11px] text-slate-400 font-mono">
                        {calcPrev ? `${calcPrev} ${calcOp || ''}` : ''}
                      </div>
                      <div className="text-3xl font-mono font-bold text-white tracking-wider truncate">
                        {calcDisplay}
                      </div>
                    </div>

                    {/* Keypad */}
                    <div className="grid grid-cols-4 gap-2.5">
                      <button onClick={handleClear} className="p-3.5 rounded-xl bg-slate-800/80 hover:bg-slate-700 text-rose-400 font-bold text-sm border border-white/5">C</button>
                      <button onClick={handleDelete} className="p-3.5 rounded-xl bg-slate-800/80 hover:bg-slate-700 text-amber-400 font-bold text-sm flex items-center justify-center border border-white/5"><Delete className="w-4 h-4" /></button>
                      <button onClick={() => handleOp('%')} className="p-3.5 rounded-xl bg-slate-800/80 hover:bg-slate-700 text-indigo-400 font-bold text-sm border border-white/5">%</button>
                      <button onClick={() => handleOp('÷')} className="p-3.5 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-bold text-base shadow-md">÷</button>

                      <button onClick={() => handleNum('7')} className="p-3.5 rounded-xl bg-slate-800/80 hover:bg-slate-700 text-white font-bold text-sm border border-white/5">7</button>
                      <button onClick={() => handleNum('8')} className="p-3.5 rounded-xl bg-slate-800/80 hover:bg-slate-700 text-white font-bold text-sm border border-white/5">8</button>
                      <button onClick={() => handleNum('9')} className="p-3.5 rounded-xl bg-slate-800/80 hover:bg-slate-700 text-white font-bold text-sm border border-white/5">9</button>
                      <button onClick={() => handleOp('×')} className="p-3.5 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-bold text-base shadow-md">×</button>

                      <button onClick={() => handleNum('4')} className="p-3.5 rounded-xl bg-slate-800/80 hover:bg-slate-700 text-white font-bold text-sm border border-white/5">4</button>
                      <button onClick={() => handleNum('5')} className="p-3.5 rounded-xl bg-slate-800/80 hover:bg-slate-700 text-white font-bold text-sm border border-white/5">5</button>
                      <button onClick={() => handleNum('6')} className="p-3.5 rounded-xl bg-slate-800/80 hover:bg-slate-700 text-white font-bold text-sm border border-white/5">6</button>
                      <button onClick={() => handleOp('-')} className="p-3.5 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-bold text-base shadow-md">-</button>

                      <button onClick={() => handleNum('1')} className="p-3.5 rounded-xl bg-slate-800/80 hover:bg-slate-700 text-white font-bold text-sm border border-white/5">1</button>
                      <button onClick={() => handleNum('2')} className="p-3.5 rounded-xl bg-slate-800/80 hover:bg-slate-700 text-white font-bold text-sm border border-white/5">2</button>
                      <button onClick={() => handleNum('3')} className="p-3.5 rounded-xl bg-slate-800/80 hover:bg-slate-700 text-white font-bold text-sm border border-white/5">3</button>
                      <button onClick={() => handleOp('+')} className="p-3.5 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-bold text-base shadow-md">+</button>

                      <button onClick={() => handleNum('0')} className="col-span-2 p-3.5 rounded-xl bg-slate-800/80 hover:bg-slate-700 text-white font-bold text-sm border border-white/5">0</button>
                      <button onClick={() => handleNum('.')} className="p-3.5 rounded-xl bg-slate-800/80 hover:bg-slate-700 text-white font-bold text-sm border border-white/5">.</button>
                      <button onClick={handleEqual} className="p-3.5 rounded-xl bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 text-white font-bold text-base shadow-lg">=</button>
                    </div>
                  </div>
                </div>
              )}

              {/* If project is Student Information Website */}
              {project.demoType === 'student-portal' && (
                <div className="space-y-6">
                  {/* Student Header */}
                  <div className="p-4 rounded-2xl bg-white/70 dark:bg-white/[0.05] backdrop-blur-xl border border-slate-200/80 dark:border-white/10 flex flex-col sm:flex-row sm:items-center justify-between gap-4 shadow-md">
                    <div className="flex items-center gap-3">
                      <div className="w-12 h-12 rounded-xl bg-blue-600 text-white flex items-center justify-center font-bold text-base shadow-md">
                        SVU
                      </div>
                      <div>
                        <h4 className="font-bold text-slate-900 dark:text-white">Swami Vivekananda University — BCA Portal</h4>
                        <p className="text-xs text-slate-500 dark:text-slate-400">Student: Etisha Hazra | Roll: SVU-BCA-2025-044</p>
                      </div>
                    </div>
                    
                    <div className="flex items-center gap-2">
                      <span className="text-xs font-semibold px-3 py-1 bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 rounded-full border border-emerald-500/20">
                        Status: Active 2nd Year
                      </span>
                    </div>
                  </div>

                  {/* Sub Nav */}
                  <div className="flex items-center gap-2 border-b border-slate-200/60 dark:border-white/10 pb-2 text-xs font-bold">
                    <button 
                      onClick={() => setStudentTab('subjects')} 
                      className={`px-3 py-1.5 rounded-lg transition-colors ${studentTab === 'subjects' ? 'bg-blue-600 text-white shadow-sm' : 'text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-white/5'}`}
                    >
                      Enrolled Subjects (5)
                    </button>
                    <button 
                      onClick={() => setStudentTab('attendance')} 
                      className={`px-3 py-1.5 rounded-lg transition-colors ${studentTab === 'attendance' ? 'bg-blue-600 text-white shadow-sm' : 'text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-white/5'}`}
                    >
                      Attendance Calculator
                    </button>
                  </div>

                  {studentTab === 'subjects' && (
                    <div className="space-y-3">
                      <div className="relative">
                        <Search className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
                        <input
                          type="text"
                          value={searchSubject}
                          onChange={(e) => setSearchSubject(e.target.value)}
                          placeholder="Search semester subjects..."
                          className="w-full pl-9 pr-4 py-2 text-xs rounded-xl bg-white/70 dark:bg-white/[0.04] border border-slate-200 dark:border-white/10 text-slate-900 dark:text-white focus:outline-none focus:ring-1 focus:ring-blue-500 backdrop-blur-md"
                        />
                      </div>

                      <div className="space-y-2">
                        {filteredSubjects.map((sub) => (
                          <div key={sub.code} className="p-3 rounded-xl bg-white/70 dark:bg-white/[0.05] border border-slate-200/80 dark:border-white/10 flex items-center justify-between backdrop-blur-md shadow-sm">
                            <div>
                              <span className="text-[10px] font-bold text-blue-600 dark:text-blue-400 block">{sub.code} • {sub.credits} Credits</span>
                              <h5 className="font-semibold text-xs text-slate-900 dark:text-white">{sub.name}</h5>
                              <span className="text-[11px] text-slate-500 dark:text-slate-400">{sub.faculty}</span>
                            </div>
                            <div className="text-right">
                              <span className="text-xs font-bold text-emerald-600 dark:text-emerald-400 bg-emerald-500/10 border border-emerald-500/20 px-2.5 py-1 rounded-lg">
                                {sub.score}
                              </span>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                  {studentTab === 'attendance' && (
                    <div className="p-5 rounded-2xl bg-white/70 dark:bg-white/[0.05] border border-slate-200 dark:border-white/10 backdrop-blur-xl space-y-4 shadow-sm">
                      <div className="flex items-center justify-between">
                        <div>
                          <h5 className="font-bold text-sm text-slate-900 dark:text-white">Live Attendance Calculator</h5>
                          <p className="text-xs text-slate-500 dark:text-slate-400">Calculate percentage to maintain 75%+ mandatory university criteria.</p>
                        </div>
                        <div className="text-right">
                          <span className={`text-2xl font-extrabold ${Number(attendancePercent) >= 75 ? 'text-emerald-600 dark:text-emerald-400' : 'text-rose-600'}`}>
                            {attendancePercent}%
                          </span>
                          <span className="block text-[10px] font-medium text-slate-400">Total Attendance</span>
                        </div>
                      </div>

                      <div className="grid grid-cols-2 gap-4 text-xs">
                        <div>
                          <label className="block text-slate-600 dark:text-slate-400 mb-1 font-semibold">Total Classes Held:</label>
                          <input 
                            type="number" 
                            value={attendanceClasses} 
                            onChange={(e) => setAttendanceClasses(Number(e.target.value))}
                            className="w-full p-2 rounded-lg bg-white/80 dark:bg-slate-900/80 border border-slate-200 dark:border-white/10" 
                          />
                        </div>
                        <div>
                          <label className="block text-slate-600 dark:text-slate-400 mb-1 font-semibold">Classes Attended:</label>
                          <input 
                            type="number" 
                            value={attendedClasses} 
                            onChange={(e) => setAttendedClasses(Number(e.target.value))}
                            className="w-full p-2 rounded-lg bg-white/80 dark:bg-slate-900/80 border border-slate-200 dark:border-white/10" 
                          />
                        </div>
                      </div>
                    </div>
                  )}

                </div>
              )}

              {/* If project is HTML & CSS Showcase */}
              {project.demoType === 'html-showcase' && (
                <div className="space-y-4">
                  <div className="p-3 bg-blue-500/10 border border-blue-500/20 rounded-xl text-xs text-blue-700 dark:text-blue-300 flex items-center gap-2 backdrop-blur-md">
                    <Layout className="w-4 h-4" />
                    <span>Demonstration of responsive card layout built using pure semantic HTML5 and modern CSS3 Flexbox.</span>
                  </div>

                  <div className="p-6 rounded-2xl bg-white/60 dark:bg-white/[0.04] border border-slate-200/80 dark:border-white/10 backdrop-blur-xl space-y-4">
                    <div className="text-center space-y-1">
                      <h4 className="text-base font-bold text-slate-900 dark:text-white">Sample Flexbox Card Grid</h4>
                      <p className="text-xs text-slate-500">Pure CSS Responsive Component</p>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                      <div className="p-4 bg-white/80 dark:bg-white/[0.06] rounded-xl shadow-sm border border-slate-200/80 dark:border-white/10 backdrop-blur-md">
                        <div className="w-8 h-8 rounded-lg bg-blue-500/10 text-blue-600 dark:text-blue-400 flex items-center justify-center font-bold text-xs mb-2">01</div>
                        <h5 className="font-bold text-xs text-slate-900 dark:text-white">Semantic Header</h5>
                        <p className="text-[11px] text-slate-500 mt-1">Structured document hierarchy with accessible HTML tags.</p>
                      </div>

                      <div className="p-4 bg-white/80 dark:bg-white/[0.06] rounded-xl shadow-sm border border-slate-200/80 dark:border-white/10 backdrop-blur-md">
                        <div className="w-8 h-8 rounded-lg bg-indigo-500/10 text-indigo-600 dark:text-indigo-400 flex items-center justify-center font-bold text-xs mb-2">02</div>
                        <h5 className="font-bold text-xs text-slate-900 dark:text-white">Flexbox Spacing</h5>
                        <p className="text-[11px] text-slate-500 mt-1">Fluid adaptive sizing across standard device breakpoints.</p>
                      </div>

                      <div className="p-4 bg-white/80 dark:bg-white/[0.06] rounded-xl shadow-sm border border-slate-200/80 dark:border-white/10 backdrop-blur-md">
                        <div className="w-8 h-8 rounded-lg bg-purple-500/10 text-purple-600 dark:text-purple-400 flex items-center justify-center font-bold text-xs mb-2">03</div>
                        <h5 className="font-bold text-xs text-slate-900 dark:text-white">CSS Variables</h5>
                        <p className="text-[11px] text-slate-500 mt-1">Maintainable theme tokens and high contrast palettes.</p>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {/* If project is Personal Portfolio */}
              {project.demoType === 'portfolio' && (
                <div className="space-y-4">
                  <div className="p-4 rounded-2xl bg-blue-500/10 dark:bg-white/[0.05] border border-blue-500/20 dark:border-white/10 text-xs text-slate-900 dark:text-white backdrop-blur-xl">
                    <p className="font-bold mb-1 text-blue-600 dark:text-blue-400">Portfolio Architecture Overview:</p>
                    <p className="text-slate-600 dark:text-slate-300">
                      This portfolio is built with modular components, smooth responsive navigation, interactive live previews, and a theme switcher designed specifically for a 2nd year BCA student.
                    </p>
                  </div>

                  <div className="grid grid-cols-2 gap-3 text-xs">
                    <div className="p-3 bg-white/60 dark:bg-white/[0.04] rounded-xl border border-slate-200/80 dark:border-white/10 backdrop-blur-md">
                      <span className="font-bold text-slate-900 dark:text-white block mb-1">Navigation & Structure</span>
                      <span className="text-slate-500 dark:text-slate-400">Sticky blurred navbar with active link highlight & mobile drawer.</span>
                    </div>
                    <div className="p-3 bg-white/60 dark:bg-white/[0.04] rounded-xl border border-slate-200/80 dark:border-white/10 backdrop-blur-md">
                      <span className="font-bold text-slate-900 dark:text-white block mb-1">Interactive Previews</span>
                      <span className="text-slate-500 dark:text-slate-400">Live calculator, student portal and code snippet explorer.</span>
                    </div>
                  </div>
                </div>
              )}

            </div>
          )}

          {/* TAB 2: OVERVIEW & FEATURES */}
          {activeTab === 'details' && (
            <div className="space-y-6">
              <div>
                <h4 className="font-bold text-sm text-slate-900 dark:text-white mb-2">Project Description</h4>
                <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed font-light">
                  {project.longDescription}
                </p>
              </div>

              <div>
                <h4 className="font-bold text-sm text-slate-900 dark:text-white mb-3">Key Functional Features</h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  {project.features.map((feat, idx) => (
                    <div key={idx} className="flex items-start gap-2 text-xs text-slate-700 dark:text-slate-300 p-3 rounded-xl bg-white/60 dark:bg-white/[0.04] border border-slate-200/60 dark:border-white/10 backdrop-blur-md">
                      <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <h4 className="font-bold text-sm text-slate-900 dark:text-white mb-2">Technologies Used</h4>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, idx) => (
                    <span key={idx} className="px-3 py-1 rounded-full bg-blue-500/10 dark:bg-blue-500/20 text-blue-700 dark:text-blue-300 text-xs font-semibold border border-blue-500/20">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* TAB 3: CODE EXPLORER */}
          {activeTab === 'code' && (
            <div className="space-y-4">
              <div className="flex items-center justify-between text-xs text-slate-500 dark:text-slate-400">
                <span>Repository: <strong>etishahazra/{project.id}</strong></span>
                <span className="text-emerald-600 dark:text-emerald-400 font-semibold">Verified Student Code</span>
              </div>

              <div className="rounded-2xl bg-slate-950/90 dark:bg-[#080911]/90 p-4 font-mono text-xs text-indigo-300 leading-relaxed overflow-x-auto border border-slate-800 dark:border-white/10 shadow-inner">
                <pre>
                  <code>
{project.demoType === 'calculator' ? `// Simple Calculator - Logic Sample
function calculate(n1, operator, n2) {
  const a = parseFloat(n1);
  const b = parseFloat(n2);
  switch (operator) {
    case '+': return a + b;
    case '-': return a - b;
    case '*': return a * b;
    case '/': return b !== 0 ? a / b : 'Error';
    default: return b;
  }
}` : project.demoType === 'student-portal' ? `// Student Attendance Percentage Function
function getAttendanceSummary(total, attended) {
  if (total <= 0) return 0;
  const percentage = (attended / total) * 100;
  return {
    percentage: percentage.toFixed(2),
    eligibleForExam: percentage >= 75
  };
}` : `<!-- Basic HTML5 Document Structure -->
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>${project.title}</title>
</head>
<body>
  <main class="container">
    <h1>${project.title}</h1>
    <p>Created by Etisha Hazra - BCA 2nd Year</p>
  </main>
</body>
</html>`}
                  </code>
                </pre>
              </div>
            </div>
          )}

        </div>

        {/* Modal Footer */}
        <div className="p-4 sm:p-6 bg-white/40 dark:bg-white/[0.02] backdrop-blur-md border-t border-slate-200/60 dark:border-white/10 flex flex-wrap items-center justify-between gap-3">
          <div className="flex items-center gap-2 text-xs text-slate-500 dark:text-slate-400">
            <Sparkles className="w-4 h-4 text-blue-500" />
            <span>Built by Etisha Hazra (BCA Student)</span>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={onClose}
              className="px-4 py-2 rounded-xl text-xs font-semibold text-slate-700 dark:text-slate-300 bg-white/80 dark:bg-white/10 border border-slate-200 dark:border-white/15 hover:bg-white dark:hover:bg-white/20 transition-all shadow-sm"
            >
              Close Preview
            </button>
            <a
              href={project.githubLink || 'https://github.com/etishahazra'}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs font-semibold text-white bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 transition-all shadow-md shadow-blue-500/20"
            >
              <Github className="w-3.5 h-3.5" />
              <span>GitHub Repo</span>
            </a>
          </div>
        </div>

      </div>
    </div>
  );
};
