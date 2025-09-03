// ===============================
// Dados do FAQ
// ===============================
const dados = [
  { q: 'O preço estimado a partir das fotos é o preço final?', a: 'O valor passado a partir das fotos é apenas uma estimativa para que você tenha um norte a respeito da complexidade e do valor do tratamento. O preço definitivo vem com a análise da documentação e confecção do planejamento do caso.' },
  { q: 'Qual o prazo de entrega após aprovação?', a: 'O prazo é de 7 dias úteis de fabricação + prazo de entrega para sua cidade' }
  // (...) restante omitido por brevidade mas pode incluir tudo
];

// ===============================
// Utilidades
// ===============================
function highlight(text, term) {
  if (!term) return text;
  const re = new RegExp(`(${term})`, 'gi');
  return text.replace(re, '<mark>$1</mark>');
}

function htmlToPlainText(html) {
  const tmp = document.createElement('div');
  tmp.innerHTML = (html || '').replace(/<br\s*\/?>(gi)/, '\n');
  return tmp.textContent || tmp.innerText || '';
}

async function copyText(text) {
  try {
    if (navigator.clipboard && window.isSecureContext) {
      await navigator.clipboard.writeText(text);
    } else {
      const ta = document.createElement('textarea');
      ta.value = text;
      ta.style.position = 'fixed';
      ta.style.left = '-9999px';
      document.body.appendChild(ta);
      ta.select();
      document.execCommand('copy');
      document.body.removeChild(ta);
    }
    return true;
  } catch {
    return false;
  }
}

// ===============================
// Renderização
// ===============================
function render(lista, termo) {
  const root = document.getElementById('faqs');
  root.innerHTML = '';
  if (lista.length === 0) {
    root.innerHTML = '<p>Nenhum resultado encontrado.</p>';
    return;
  }

  lista.forEach((item) => {
    const d = document.createElement('details');

    const s = document.createElement('summary');
    s.innerHTML = highlight(item.q, termo);

    const p = document.createElement('p');
    p.innerHTML = highlight(item.a, termo);

    const actions = document.createElement('div');
    actions.style.display = 'flex';
    actions.style.gap = '8px';
    actions.style.marginTop = '8px';

    const btnCopy = document.createElement('button');
    btnCopy.textContent = 'Copiar';
    btnCopy.className = 'copy-btn';

    btnCopy.addEventListener('click', async (ev) => {
      ev.stopPropagation();
      const plain = htmlToPlainText(item.a);
      const ok = await copyText(plain);
      const old = btnCopy.textContent;
      btnCopy.textContent = ok ? 'Copiado!' : 'Falhou :(';
      setTimeout(() => (btnCopy.textContent = old), 1500);
    });

    actions.appendChild(btnCopy);

    d.appendChild(s);
    d.appendChild(p);
    d.appendChild(actions);

    root.appendChild(d);
  });
}

// ===============================
// Filtro
// ===============================
function filtrar() {
  const termo = (document.getElementById('busca').value || '').toLowerCase();
  const res = dados.filter((x) => (x.q + ' ' + x.a).toLowerCase().includes(termo));
  render(res, termo);
}

render(dados, '');