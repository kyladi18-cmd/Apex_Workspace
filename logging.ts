export const auditLog = (event: { type: string; payload: any }) => {
  console.log(JSON.stringify({ ts: Date.now(), ...event }));
};
