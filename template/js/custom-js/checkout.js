// Add your custom JavaScript for checkout here.
// No servidor (Functions/SSR), antes de criar o pedido:
const sanitizeData = (data) => {
  const malicioso = /<script|xss\.report|getScript|["><]/gi;
  if (JSON.stringify(data).match(malicioso)) {
    throw new Error("Tentativa de fraude bloqueada no servidor.");
  }
};
