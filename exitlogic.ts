`exitLogic.ts`

• Purpose: Define when to sell stocks (e.g., calculateExits).

• Content:
export const calculateExits = (entry: number, current: number, peak: number, entryDate: string) => {
  const daysHeld = Math.floor((new Date().getTime() - new Date(entryDate).getTime()) / (1000 * 60 * 60 * 24));
  const gain = ((current - entry) / entry) * 100;
  const rollingStop = peak * CONFIG.STOP_LOSS_PCT;

  return {
    rollingStop: rollingStop.toFixed(2),
    isStopViolated: current <= rollingStop,
    isStagnant: daysHeld >= 10 && gain < 3.0,
    isPowerMove: daysHeld <= 21 && gain >= 20.0,
    currentGain: gain.toFixed(2),
    daysHeld,
  };
};

