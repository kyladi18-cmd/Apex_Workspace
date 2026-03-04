export type Stock = {
  symbol: string;
  epsGrowth: number;
  volume: number;
  dailyAvgVol: number;
  high: number;
  low: number;
  close: number;
  rsi: number;
};

export type AnalysisResult = {
  score: number;
  status: string;
  triggers: string[];
  liquidity: { isLiquid: boolean, impact: string };
};
