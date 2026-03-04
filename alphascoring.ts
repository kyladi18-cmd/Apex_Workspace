export const evaluateAlpha = (stock: Stock): AnalysisResult => {
  let score = 0;
  let triggers: string[] = [];

  if (stock.epsGrowth > 25) { score += 2; triggers.push("C: Growth"); }

  const volSpike = stock.volume > (stock.dailyAvgVol * 1.5);
  const priceSpread = (stock.high - stock.low) / stock.close;
  const isTight = priceSpread < 0.02;

  if (volSpike && isTight) {
    score += 4;
    triggers.push("SHADOW: Inst. Accumulation");
  }

  if  (stock.rsi > 70) {
    score -= 3;
    triggers.push("WARNING: Overbought RSI > 70");
  } else if (stock.rsi < 40) {
    score += 1;
    triggers.push("RSI: Deep Value/Recovery");
  }

  const dailyDollarVol = stock.close * stock.dailyAvgVol;
  const impact = (CONFIG.POSITION_SIZE_USD / dailyDollarVol) * 100;
  const isLiquid = impact < 1.0;

  return { 
    score, 
    status: score >= 7 ? "APEX STRIKE" : "WATCH", 
    triggers, 
    liquidity: { isLiquid, impact: impact.toFixed(2) }
  };
};
