import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { fadeInUp, staggerContainer } from '../lib/animations';
import { financialToolsData, type FinancialToolItem } from '../lib/constants';
import FinaAITerminal from './FinaAITerminal';


function ToolIcon({ type }: { type: FinancialToolItem['iconType'] }) {
  switch (type) {
    case 'sigma':
      return (
        <div className="w-10 h-10 rounded-lg bg-[#0F3720] text-white flex items-center justify-center font-bold text-lg shadow-md">
          <span>Σ</span>
        </div>
      );
    case 'barchart':
      return (
        <div className="w-10 h-10 rounded-lg bg-[#0F3720] text-white flex items-center justify-center shadow-md">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-5 h-5">
            <line x1="18" y1="20" x2="18" y2="10" strokeLinecap="round" />
            <line x1="12" y1="20" x2="12" y2="4" strokeLinecap="round" />
            <line x1="6" y1="20" x2="6" y2="14" strokeLinecap="round" />
          </svg>
        </div>
      );
    case 'hourglass':
      return (
        <div className="w-10 h-10 rounded-lg bg-[#0F3720] text-white flex items-center justify-center shadow-md">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-5 h-5">
            <path d="M5 22h14M5 2h14M17 22v-4.172a2 2 0 0 0-.586-1.414L12 12l-4.414 4.414A2 2 0 0 0 7 17.828V22M7 2v4.172a2 2 0 0 0 .586 1.414L12 12l4.414-4.414A2 2 0 0 0 17 6.172V2" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </div>
      );
    case 'trend':
      return (
        <div className="w-10 h-10 rounded-lg bg-[#0F3720] text-white flex items-center justify-center shadow-md">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-5 h-5">
            <polyline points="22 7 13.5 15.5 8.5 10.5 2 17" strokeLinecap="round" strokeLinejoin="round" />
            <polyline points="16 7 22 7 22 13" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </div>
      );
    case 'folder':
      return (
        <div className="w-10 h-10 rounded-lg bg-[#0F3720] text-white flex items-center justify-center shadow-md">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-5 h-5">
            <path d="M4 20h16a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.93a2 2 0 0 1-1.66-.9l-.82-1.2A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13c0 1.1.9 2 2 2Z" />
            <line x1="8" y1="13" x2="16" y2="13" strokeLinecap="round" />
          </svg>
        </div>
      );
    case 'sparkle':
      return (
        <div className="w-10 h-10 rounded-lg bg-[#0F3720] text-[#79B669] flex items-center justify-center shadow-md">
          <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
            <path d="M12 2l2.4 7.2L22 12l-7.6 2.8L12 22l-2.4-7.2L2 12l7.6-2.8L12 2z" />
          </svg>
        </div>
      );
  }
}


function SlovinsModal({ onClose }: { onClose: () => void }) {
  const [pop, setPop] = useState<number>(5000);
  const [errorRate, setErrorRate] = useState<number>(5);

  const e = errorRate / 100;
  const sampleSize = pop > 0 ? Math.ceil(pop / (1 + pop * (e * e))) : 0;

  return (
    <div className="space-y-6">
      <div className="bg-[#FAF8F5] p-4 rounded-xl border border-emerald-900/10">
        <p className="text-xs text-slate-600 font-mono mb-2">Formula: n = N / (1 + N · e²)</p>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label className="block text-xs font-bold text-[#0F3720] mb-1.5">Target Population (N)</label>
            <input
              type="number"
              min="1"
              value={pop}
              onChange={(e) => setPop(Math.max(1, Number(e.target.value)))}
              className="w-full bg-white border border-slate-200 rounded-lg px-3.5 py-2.5 text-sm text-[#0F3720] font-semibold focus:outline-none focus:ring-2 focus:ring-emerald-500"
            />
          </div>
          <div>
            <label className="block text-xs font-bold text-[#0F3720] mb-1.5">Margin of Error (e%)</label>
            <div className="flex gap-2 mb-2">
              {[1, 5, 10].map((rate) => (
                <button
                  key={rate}
                  type="button"
                  onClick={() => setErrorRate(rate)}
                  className={`text-xs px-2.5 py-1 rounded-md font-bold transition-all ${
                    errorRate === rate
                      ? 'bg-[#0F3720] text-white'
                      : 'bg-white border border-slate-200 text-slate-600 hover:bg-slate-50'
                  }`}
                >
                  {rate}%
                </button>
              ))}
            </div>
            <input
              type="number"
              min="0.1"
              max="50"
              step="0.1"
              value={errorRate}
              onChange={(e) => setErrorRate(Math.max(0.1, Number(e.target.value)))}
              className="w-full bg-white border border-slate-200 rounded-lg px-3.5 py-2 text-sm text-[#0F3720] font-semibold focus:outline-none focus:ring-2 focus:ring-emerald-500"
            />
          </div>
        </div>
      </div>

      <div className="bg-[#0F3720] text-white p-6 rounded-2xl flex items-center justify-between shadow-xl">
        <div>
          <span className="text-[11px] uppercase tracking-wider text-emerald-300 font-bold block mb-1">
            Recommended Sample Size
          </span>
          <h4 className="text-3xl sm:text-4xl font-black">{sampleSize.toLocaleString()} Respondents</h4>
        </div>
        <div className="text-right text-xs text-emerald-200/80 max-w-[150px] leading-snug">
          Statistically valid with {100 - errorRate}% confidence level.
        </div>
      </div>

      <div className="flex justify-end">
        <button
          onClick={onClose}
          className="bg-[#0F3720] hover:bg-[#154c2d] text-white px-5 py-2.5 rounded-xl font-bold text-xs transition-colors"
        >
          Apply to Study
        </button>
      </div>
    </div>
  );
}

function SupplyDemandModal({ onClose }: { onClose: () => void }) {
  const [demand, setDemand] = useState<number>(120000);
  const [supply, setSupply] = useState<number>(85000);
  const [marketShare, setMarketShare] = useState<number>(15);

  const gap = Math.max(0, demand - supply);
  const proposedCap = Math.round(gap * (marketShare / 100));

  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        <div>
          <label className="block text-xs font-bold text-[#0F3720] mb-1">Total Market Demand (units/yr)</label>
          <input
            type="number"
            value={demand}
            onChange={(e) => setDemand(Number(e.target.value))}
            className="w-full bg-[#FAF8F5] border border-slate-200 rounded-lg px-3.5 py-2 text-sm text-[#0F3720] font-semibold focus:ring-2 focus:ring-emerald-500 outline-none"
          />
        </div>
        <div>
          <label className="block text-xs font-bold text-[#0F3720] mb-1">Existing Market Supply (units/yr)</label>
          <input
            type="number"
            value={supply}
            onChange={(e) => setSupply(Number(e.target.value))}
            className="w-full bg-[#FAF8F5] border border-slate-200 rounded-lg px-3.5 py-2 text-sm text-[#0F3720] font-semibold focus:ring-2 focus:ring-emerald-500 outline-none"
          />
        </div>
        <div>
          <label className="block text-xs font-bold text-[#0F3720] mb-1">Target Market Share (%)</label>
          <input
            type="number"
            value={marketShare}
            onChange={(e) => setMarketShare(Number(e.target.value))}
            className="w-full bg-[#FAF8F5] border border-slate-200 rounded-lg px-3.5 py-2 text-sm text-[#0F3720] font-semibold focus:ring-2 focus:ring-emerald-500 outline-none"
          />
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div className="bg-[#EBF5EE] border border-emerald-900/10 p-5 rounded-2xl">
          <span className="text-xs font-bold text-emerald-800 uppercase tracking-wider block mb-1">
            Unsatisfied Demand Gap
          </span>
          <h4 className="text-2xl font-black text-[#0F3720]">{gap.toLocaleString()} units</h4>
          <p className="text-xs text-slate-600 mt-1">Available market capacity to capture.</p>
        </div>
        <div className="bg-[#0F3720] text-white p-5 rounded-2xl">
          <span className="text-xs font-bold text-emerald-300 uppercase tracking-wider block mb-1">
            Recommended Proposed Capacity
          </span>
          <h4 className="text-2xl font-black text-white">{proposedCap.toLocaleString()} units/yr</h4>
          <p className="text-xs text-emerald-200/80 mt-1">Based on {marketShare}% market penetration.</p>
        </div>
      </div>

      <div className="flex justify-end">
        <button
          onClick={onClose}
          className="bg-[#0F3720] hover:bg-[#154c2d] text-white px-5 py-2.5 rounded-xl font-bold text-xs transition-colors"
        >
          Save Assumptions
        </button>
      </div>
    </div>
  );
}

function PaybackModal({ onClose }: { onClose: () => void }) {
  const [initialInv, setInitialInv] = useState<number>(500000);
  const [annualCash, setAnnualCash] = useState<number>(180000);

  const years = annualCash > 0 ? initialInv / annualCash : 0;
  const fullYears = Math.floor(years);
  const months = Math.round((years - fullYears) * 12);

  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label className="block text-xs font-bold text-[#0F3720] mb-1">Initial Capital Requirement (₱)</label>
          <input
            type="number"
            value={initialInv}
            onChange={(e) => setInitialInv(Number(e.target.value))}
            className="w-full bg-[#FAF8F5] border border-slate-200 rounded-lg px-3.5 py-2 text-sm text-[#0F3720] font-semibold focus:ring-2 focus:ring-emerald-500 outline-none"
          />
        </div>
        <div>
          <label className="block text-xs font-bold text-[#0F3720] mb-1">Est. Annual Net Cash Inflow (₱)</label>
          <input
            type="number"
            value={annualCash}
            onChange={(e) => setAnnualCash(Number(e.target.value))}
            className="w-full bg-[#FAF8F5] border border-slate-200 rounded-lg px-3.5 py-2 text-sm text-[#0F3720] font-semibold focus:ring-2 focus:ring-emerald-500 outline-none"
          />
        </div>
      </div>

      <div className="bg-[#0F3720] text-white p-6 rounded-2xl flex items-center justify-between shadow-xl">
        <div>
          <span className="text-[11px] uppercase tracking-wider text-emerald-300 font-bold block mb-1">
            Undiscounted Payback Period
          </span>
          <h4 className="text-3xl font-black">
            {fullYears} Years & {months} Months
          </h4>
          <p className="text-xs text-emerald-200/80 mt-1">({years.toFixed(2)} total operational years)</p>
        </div>
        <div className="bg-white/10 px-4 py-2 rounded-xl text-center">
          <span className="text-[10px] text-emerald-300 uppercase font-bold block">Feasibility Status</span>
          <span className="text-sm font-black text-white">{years <= 5 ? '✓ Highly Viable' : '⚠ Caution'}</span>
        </div>
      </div>

      <div className="flex justify-end">
        <button
          onClick={onClose}
          className="bg-[#0F3720] hover:bg-[#154c2d] text-white px-5 py-2.5 rounded-xl font-bold text-xs transition-colors"
        >
          Close Calculator
        </button>
      </div>
    </div>
  );
}

function BreakEvenModal({ onClose }: { onClose: () => void }) {
  const [fixedCosts, setFixedCosts] = useState<number>(300000);
  const [price, setPrice] = useState<number>(250);
  const [variableCost, setVariableCost] = useState<number>(100);

  const margin = Math.max(0.01, price - variableCost);
  const bepUnits = Math.ceil(fixedCosts / margin);
  const bepRevenue = bepUnits * price;
  const cmRatio = ((margin / price) * 100).toFixed(1);

  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        <div>
          <label className="block text-xs font-bold text-[#0F3720] mb-1">Total Fixed Costs (₱/yr)</label>
          <input
            type="number"
            value={fixedCosts}
            onChange={(e) => setFixedCosts(Number(e.target.value))}
            className="w-full bg-[#FAF8F5] border border-slate-200 rounded-lg px-3.5 py-2 text-sm text-[#0F3720] font-semibold focus:ring-2 focus:ring-emerald-500 outline-none"
          />
        </div>
        <div>
          <label className="block text-xs font-bold text-[#0F3720] mb-1">Unit Selling Price (₱)</label>
          <input
            type="number"
            value={price}
            onChange={(e) => setPrice(Number(e.target.value))}
            className="w-full bg-[#FAF8F5] border border-slate-200 rounded-lg px-3.5 py-2 text-sm text-[#0F3720] font-semibold focus:ring-2 focus:ring-emerald-500 outline-none"
          />
        </div>
        <div>
          <label className="block text-xs font-bold text-[#0F3720] mb-1">Unit Variable Cost (₱)</label>
          <input
            type="number"
            value={variableCost}
            onChange={(e) => setVariableCost(Number(e.target.value))}
            className="w-full bg-[#FAF8F5] border border-slate-200 rounded-lg px-3.5 py-2 text-sm text-[#0F3720] font-semibold focus:ring-2 focus:ring-emerald-500 outline-none"
          />
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        <div className="bg-[#EBF5EE] p-4 rounded-2xl">
          <span className="text-[11px] font-bold text-emerald-900 block mb-1">Contribution Margin</span>
          <h4 className="text-xl font-black text-[#0F3720]">₱{margin.toFixed(2)} / unit</h4>
          <span className="text-[10px] text-slate-500">CM Ratio: {cmRatio}%</span>
        </div>
        <div className="bg-[#0F3720] text-white p-4 rounded-2xl">
          <span className="text-[11px] font-bold text-emerald-300 block mb-1">Break-Even Units</span>
          <h4 className="text-xl font-black text-white">{bepUnits.toLocaleString()} units</h4>
          <span className="text-[10px] text-emerald-200/80">To cover all fixed overhead</span>
        </div>
        <div className="bg-[#0F3720] text-white p-4 rounded-2xl">
          <span className="text-[11px] font-bold text-emerald-300 block mb-1">Break-Even Sales</span>
          <h4 className="text-xl font-black text-white">₱{bepRevenue.toLocaleString()}</h4>
          <span className="text-[10px] text-emerald-200/80">Zero profit / loss threshold</span>
        </div>
      </div>

      <div className="flex justify-end">
        <button
          onClick={onClose}
          className="bg-[#0F3720] hover:bg-[#154c2d] text-white px-5 py-2.5 rounded-xl font-bold text-xs transition-colors"
        >
          Save to Financial Model
        </button>
      </div>
    </div>
  );
}

function FinancialRatiosModal({ onClose }: { onClose: () => void }) {
  const [ca, setCa] = useState<number>(450000);
  const [cl, setCl] = useState<number>(200000);
  const [rev, setRev] = useState<number>(1200000);
  const [netInc, setNetInc] = useState<number>(240000);
  const [equity, setEquity] = useState<number>(600000);
  const [debt, setDebt] = useState<number>(300000);

  const currentRatio = cl > 0 ? (ca / cl).toFixed(2) : '0';
  const netMargin = rev > 0 ? ((netInc / rev) * 100).toFixed(1) : '0';
  const deRatio = equity > 0 ? (debt / equity).toFixed(2) : '0';
  const roe = equity > 0 ? ((netInc / equity) * 100).toFixed(1) : '0';

  return (
    <div className="space-y-6">
      <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
        <div>
          <label className="block text-[11px] font-bold text-[#0F3720] mb-1">Current Assets (₱)</label>
          <input
            type="number"
            value={ca}
            onChange={(e) => setCa(Number(e.target.value))}
            className="w-full bg-[#FAF8F5] border border-slate-200 rounded-lg px-3 py-1.5 text-xs text-[#0F3720] font-semibold outline-none"
          />
        </div>
        <div>
          <label className="block text-[11px] font-bold text-[#0F3720] mb-1">Current Liabilities (₱)</label>
          <input
            type="number"
            value={cl}
            onChange={(e) => setCl(Number(e.target.value))}
            className="w-full bg-[#FAF8F5] border border-slate-200 rounded-lg px-3 py-1.5 text-xs text-[#0F3720] font-semibold outline-none"
          />
        </div>
        <div>
          <label className="block text-[11px] font-bold text-[#0F3720] mb-1">Annual Revenue (₱)</label>
          <input
            type="number"
            value={rev}
            onChange={(e) => setRev(Number(e.target.value))}
            className="w-full bg-[#FAF8F5] border border-slate-200 rounded-lg px-3 py-1.5 text-xs text-[#0F3720] font-semibold outline-none"
          />
        </div>
        <div>
          <label className="block text-[11px] font-bold text-[#0F3720] mb-1">Net Income (₱)</label>
          <input
            type="number"
            value={netInc}
            onChange={(e) => setNetInc(Number(e.target.value))}
            className="w-full bg-[#FAF8F5] border border-slate-200 rounded-lg px-3 py-1.5 text-xs text-[#0F3720] font-semibold outline-none"
          />
        </div>
        <div>
          <label className="block text-[11px] font-bold text-[#0F3720] mb-1">Total Equity (₱)</label>
          <input
            type="number"
            value={equity}
            onChange={(e) => setEquity(Number(e.target.value))}
            className="w-full bg-[#FAF8F5] border border-slate-200 rounded-lg px-3 py-1.5 text-xs text-[#0F3720] font-semibold outline-none"
          />
        </div>
        <div>
          <label className="block text-[11px] font-bold text-[#0F3720] mb-1">Total Debt (₱)</label>
          <input
            type="number"
            value={debt}
            onChange={(e) => setDebt(Number(e.target.value))}
            className="w-full bg-[#FAF8F5] border border-slate-200 rounded-lg px-3 py-1.5 text-xs text-[#0F3720] font-semibold outline-none"
          />
        </div>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
        <div className="bg-[#FAF8F5] p-3.5 rounded-xl border border-slate-200">
          <span className="text-[10px] uppercase font-bold text-slate-500 block">Current Ratio</span>
          <h5 className="text-lg font-black text-[#0F3720]">{currentRatio}x</h5>
          <span className="text-[10px] text-emerald-700 font-bold">{Number(currentRatio) >= 1.5 ? '✓ Strong' : '⚠ Low'}</span>
        </div>
        <div className="bg-[#FAF8F5] p-3.5 rounded-xl border border-slate-200">
          <span className="text-[10px] uppercase font-bold text-slate-500 block">Net Profit Margin</span>
          <h5 className="text-lg font-black text-[#0F3720]">{netMargin}%</h5>
          <span className="text-[10px] text-emerald-700 font-bold">{Number(netMargin) >= 10 ? '✓ High' : 'Average'}</span>
        </div>
        <div className="bg-[#FAF8F5] p-3.5 rounded-xl border border-slate-200">
          <span className="text-[10px] uppercase font-bold text-slate-500 block">Debt-to-Equity</span>
          <h5 className="text-lg font-black text-[#0F3720]">{deRatio}x</h5>
          <span className="text-[10px] text-emerald-700 font-bold">{Number(deRatio) <= 1.0 ? '✓ Balanced' : 'Leveraged'}</span>
        </div>
        <div className="bg-[#FAF8F5] p-3.5 rounded-xl border border-slate-200">
          <span className="text-[10px] uppercase font-bold text-slate-500 block">Return on Equity</span>
          <h5 className="text-lg font-black text-[#0F3720]">{roe}%</h5>
          <span className="text-[10px] text-emerald-700 font-bold">Annual ROE</span>
        </div>
      </div>

      <div className="flex justify-end">
        <button
          onClick={onClose}
          className="bg-[#0F3720] hover:bg-[#154c2d] text-white px-5 py-2.5 rounded-xl font-bold text-xs transition-colors"
        >
          Export Ratios
        </button>
      </div>
    </div>
  );
}




export default function FinancialTools() {
  const [activeTool, setActiveTool] = useState<string | null>(null);

  const selectedTool = financialToolsData.find((t) => t.id === activeTool);

  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0, x: -20 }}>
      
      <section className="relative w-full bg-gradient-to-b from-[#D4E8D7] via-[#E4EFE6] to-[#EEF5F0] text-[#0F3720] pt-20 pb-28 px-6 md:px-12 lg:px-16 overflow-hidden">
        
        <div className="absolute top-12 right-8 md:right-16 w-12 h-12 rounded-full bg-[#0F3720] text-emerald-300 flex items-center justify-center shadow-2xl">
          <svg viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
            <path d="M12 2l2.4 7.2L22 12l-7.6 2.8L12 22l-2.4-7.2L2 12l7.6-2.8L12 2z" />
          </svg>
        </div>

        <div className="max-w-7xl mx-auto">
          
          <motion.div variants={fadeInUp} initial="hidden" animate="visible" className="max-w-3xl mb-16">
            <h1 className="text-4xl md:text-6xl font-black text-[#0F3720] tracking-tight leading-[1.1] mb-6">
              Financial Tools <br />
              Ecosystem
            </h1>
            <p className="text-sm md:text-base text-[#2E543A] leading-relaxed max-w-2xl font-medium">
              Precision-engineered modules for automated feasibility synthesis. Transform raw data into strategic intelligence with our proprietary analytical engine.
            </p>
          </motion.div>

          
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            animate="visible"
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {financialToolsData.map((tool) => (
              <motion.div
                key={tool.id}
                variants={fadeInUp}
                whileHover={{ y: -6, transition: { duration: 0.2 } }}
                className={`rounded-2xl p-7 flex flex-col justify-between shadow-lg transition-all ${
                  tool.isMaster
                    ? 'bg-[#DCEDE1] border-2 border-[#79B669]/40 hover:border-[#79B669]'
                    : 'bg-white border border-slate-200/80 hover:border-[#0F3720]/30 hover:shadow-xl'
                }`}
              >
                <div>
                  <div className="flex justify-between items-start mb-5">
                    <ToolIcon type={tool.iconType} />
                    {tool.badge && (
                      <span className="bg-[#0F3720] text-emerald-300 text-[10px] font-black tracking-widest px-2.5 py-1 rounded-md">
                        {tool.badge}
                      </span>
                    )}
                  </div>

                  <h3 className="text-lg font-bold text-[#0F3720] tracking-tight mb-2.5">
                    {tool.title}
                  </h3>
                  <p className="text-xs text-[#3E5C47] leading-relaxed mb-8">
                    {tool.description}
                  </p>
                </div>

                <button
                  onClick={() => setActiveTool(tool.id)}
                  className="w-full bg-[#0F3720] hover:bg-[#184d2f] text-white text-xs font-bold py-3 px-4 rounded-xl shadow-md transition-all flex items-center justify-center gap-2 group cursor-pointer"
                >
                  <span>Launch Tool</span>
                  <span className="group-hover:translate-x-1 transition-transform">→</span>
                </button>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      
      <section className="w-full bg-white text-[#0F3720] py-24 px-6 md:px-12 lg:px-16 border-t border-slate-200/60">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            <motion.div
              variants={fadeInUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: false, amount: 0.2 }}
              className="lg:col-span-6 relative"
            >
              <div className="rounded-3xl overflow-hidden shadow-2xl border border-slate-200 aspect-[4/3] bg-slate-100">
                <img
                  src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=1200"
                  alt="Financial Consultant"
                  className="w-full h-full object-cover"
                />
              </div>
            </motion.div>

            
            <motion.div
              variants={fadeInUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: false, amount: 0.2 }}
              className="lg:col-span-6 flex flex-col justify-center space-y-6"
            >
              <h2 className="text-3xl md:text-5xl font-black text-[#0F3720] tracking-tight leading-[1.15]">
                The Power of <br />
                Unified Logic
              </h2>

              <div className="space-y-6 pt-2">
                <div className="flex gap-4 items-start">
                  <div className="w-6 h-6 rounded-full bg-[#EBF5EE] text-[#0F3720] flex items-center justify-center font-bold text-xs shrink-0 mt-0.5">
                    ✓
                  </div>
                  <div>
                    <h4 className="font-bold text-[#0F3720] text-sm">Dynamic Data Synchronization</h4>
                    <p className="text-xs text-slate-600 leading-relaxed mt-1">
                      Inputs from one module instantly propagate across the entire ecosystem, eliminating redundant entry and errors.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4 items-start">
                  <div className="w-6 h-6 rounded-full bg-[#EBF5EE] text-[#0F3720] flex items-center justify-center font-bold text-xs shrink-0 mt-0.5">
                    ✓
                  </div>
                  <div>
                    <h4 className="font-bold text-[#0F3720] text-sm">Automated Financial Statements Linkage</h4>
                    <p className="text-xs text-slate-600 leading-relaxed mt-1">
                      Ratios, break-even thresholds, and capital recoveries dynamically harmonize into IFRS/PFRS compliant statements.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4 items-start">
                  <div className="w-6 h-6 rounded-full bg-[#EBF5EE] text-[#0F3720] flex items-center justify-center font-bold text-xs shrink-0 mt-0.5">
                    ✓
                  </div>
                  <div>
                    <h4 className="font-bold text-[#0F3720] text-sm">Defense-Ready Feasibility Output</h4>
                    <p className="text-xs text-slate-600 leading-relaxed mt-1">
                      Generate audit-grade charts, sensitivity matrixes, and panel-ready justification notes in seconds.
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      
      <AnimatePresence>
        {activeTool && selectedTool && (
          activeTool === 'fina-ai' ? (
            <FinaAITerminal onClose={() => setActiveTool(null)} />
          ) : (
            <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
             
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={() => setActiveTool(null)}
                className="fixed inset-0 bg-black/60 backdrop-blur-sm"
              />

              
              <motion.div
                initial={{ scale: 0.95, opacity: 0, y: 20 }}
                animate={{ scale: 1, opacity: 1, y: 0 }}
                exit={{ scale: 0.95, opacity: 0, y: 20 }}
                className="relative w-full max-w-2xl bg-white rounded-3xl p-6 sm:p-8 shadow-2xl z-10 border border-slate-100 max-h-[90vh] overflow-y-auto"
              >
                
                <div className="flex justify-between items-start mb-6">
                  <div className="flex items-center gap-3">
                    <ToolIcon type={selectedTool.iconType} />
                    <div>
                      <h3 className="text-xl font-bold text-[#0F3720]">{selectedTool.title}</h3>
                      <p className="text-xs text-slate-500">{selectedTool.description}</p>
                    </div>
                  </div>
                  <button
                    onClick={() => setActiveTool(null)}
                    className="text-slate-400 hover:text-slate-600 p-1.5 rounded-lg hover:bg-slate-100 transition-colors cursor-pointer"
                  >
                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </button>
                </div>

                
                {activeTool === 'slovins' && <SlovinsModal onClose={() => setActiveTool(null)} />}
                {activeTool === 'supply-demand' && <SupplyDemandModal onClose={() => setActiveTool(null)} />}
                {activeTool === 'payback-period' && <PaybackModal onClose={() => setActiveTool(null)} />}
                {activeTool === 'break-even' && <BreakEvenModal onClose={() => setActiveTool(null)} />}
                {activeTool === 'financial-ratios' && <FinancialRatiosModal onClose={() => setActiveTool(null)} />}
              </motion.div>
            </div>
          )
        )}
      </AnimatePresence>
    </motion.div>
  );
}

