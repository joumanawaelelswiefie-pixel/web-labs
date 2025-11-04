
(() => {
  const display = document.getElementById('display');
  const keys = document.querySelector('.buttons'); 

  const operators = ['+', '-', '*', '/'];
  let expr='';

  function updateDisplay() {
    display.value = expr || '0';
  }

  function appendToken(token) {
    if (!token) return;
    const last = expr.slice(-1);

    if (operators.includes(token)) {
      if (expr === '' && token !== '-') return;
      if (operators.includes(last)) {
        expr = expr.slice(0, -1) + token;
        updateDisplay();
        return;
      }
    }

    if (token === '.') {
      const parts = expr.split(/[\+\-\*\/\(\)]/);
      const lastNum = parts[parts.length - 1];
      if (lastNum.includes('.')) return;
      if (last === '' || operators.includes(last) || last === '(') {
        token = '0.';
      }
    }

    if (token === '%') {
      if (expr === '' || operators.includes(last) || last === '(') return;
    }

    if (token === '(' && /\d|\)/.test(last)) {
      expr += '*';
    }

    if (token === ')') {
      const open = (expr.match(/\(/g) || []).length;
      const close = (expr.match(/\)/g) || []).length;
      if (open <= close) return;
      if (operators.includes(last) || last === '(') return;
    }

    expr += token;
    updateDisplay();
  }

  function clearAll() {
    expr = '';
    updateDisplay();
  }

  function backspace() {
    expr = expr.slice(0, -1);
    updateDisplay();
  }

  function evaluateExpression() {
    if (!expr) return;
    if (/[^0-9+\-*/().% ]/.test(expr)) {
      display.value = 'Error';
      expr = '';
      return;
    }

    let sanitized = expr.replace(/(\d+(\.\d+)?|\([^\)]+\))%/g, '($1/100)');

    try {
      const result = Function('"use strict"; return (' + sanitized + ')')();
      if (result === Infinity || result === -Infinity || Number.isNaN(result)) {
        display.value = 'Error';
        expr = '';
        return;
      }
      expr = Number.isInteger(result)
        ? String(result)
        : String(Number.parseFloat(result.toFixed(12)));
      updateDisplay();
    } catch {
      display.value = 'Error';
      expr = '';
    }
  }

  keys.addEventListener('click', (e) => {
    const btn = e.target.closest('button');
    if (!btn) return;
    const val = btn.dataset.value;
    const action = btn.dataset.action;

    if (action === 'clear') clearAll();
    else if (action === 'back') backspace();
    else if (action === 'equals') evaluateExpression();
    else if (action === 'percent') appendToken('%');
    else if (val) appendToken(val);
  });

  updateDisplay();
})();
