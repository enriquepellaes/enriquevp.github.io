(function () {
  const STORAGE_KEYS = {
    favoritos: 'mealflowfavoritos',
    estoque: 'mealflowestoqueV2',
    plan: 'mealflowPlanEntries'
  };

  const SWAPS = {
    macarrao: [
      { ingredient: 'Macarrão', alternativas: ['Macarrão integral', 'Penne'] },
      { ingredient: 'Carne moída', alternativas: ['Frango desfiado', 'Linguiça'] },
      { ingredient: 'Molho de tomate', alternativas: ['Molho branco', 'Molho de queijo'] }
    ],
    poke: [
      { ingredient: 'Salmão', alternativas: ['Atum'] },
      { ingredient: 'Salada de grãos', alternativas: ['Quinoa', 'Arroz integral'] },
      { ingredient: 'Manga', alternativas: ['Abacate'] }
    ],
    omelete: [
      { ingredient: 'Presunto', alternativas: ['Frango desfiado', 'Peito de peru'] },
      { ingredient: 'Queijo', alternativas: ['Queijo minas', 'Muçarela light'] }
    ],
    paodequeijo: [
      { ingredient: 'Queijo parmesão', alternativas: ['Queijo minas padrão'] },
      { ingredient: 'Leite integral', alternativas: ['Leite semidesnatado'] }
    ],
    salada: [
      { ingredient: 'Alface', alternativas: ['Rúcula', 'Agrião'] },
      { ingredient: 'Cenoura', alternativas: ['Abobrinha'] },
      { ingredient: 'Beterraba', alternativas: ['Pepino'] }
    ],
    escondidinho: [
      { ingredient: 'Carne moída', alternativas: ['Frango desfiado', 'Carne de soja'] },
      { ingredient: 'Batata', alternativas: ['Mandioquinha', 'Mandioca'] },
      { ingredient: 'Queijo mussarela', alternativas: ['Queijo prato', 'Queijo minas'] }
    ]
  };

  const receitaS = [
    { id: 'macarrao', name: 'Macarrão simples', href: 'macarrao.html' },
    { id: 'poke', name: 'Poke de salmão', href: 'poke.html' },
    { id: 'omelete', name: 'Omelete rápido', href: 'omelete.html' },
    { id: 'paodequeijo', name: 'Pão de queijo fácil', href: 'paodequeijo.html' },
    { id: 'salada', name: 'Salada simples', href: 'salada.html' },
    { id: 'escondidinho', name: 'Escondidinho de carne moída', href: 'escondidinho.html' }
  ];

  const INGREDIENTS = [
    { id: 'macarrao', name: 'Macarrão', unit: 'g', defaultQty: 500 },
    { id: 'macarrao-integral', name: 'Macarrão integral', unit: 'g', defaultQty: 500 },
    { id: 'penne', name: 'Penne', unit: 'g', defaultQty: 500 },
    { id: 'carne-moida', name: 'Carne moída', unit: 'g', defaultQty: 500 },
    { id: 'frango-desfiado', name: 'Frango desfiado', unit: 'g', defaultQty: 400 },
    { id: 'linguica', name: 'Linguiça', unit: 'g', defaultQty: 400 },
    { id: 'molho-de-tomate', name: 'Molho de tomate', unit: 'ml', defaultQty: 500 },
    { id: 'molho-branco', name: 'Molho branco', unit: 'ml', defaultQty: 500 },
    { id: 'molho-de-queijo', name: 'Molho de queijo', unit: 'ml', defaultQty: 500 },

    { id: 'salmao', name: 'Salmão', unit: 'g', defaultQty: 300 },
    { id: 'atum', name: 'Atum', unit: 'g', defaultQty: 300 },
    { id: 'salada-de-graos', name: 'Salada de grãos', unit: 'g', defaultQty: 200 },
    { id: 'quinoa', name: 'Quinoa', unit: 'g', defaultQty: 200 },
    { id: 'arroz-integral', name: 'Arroz integral', unit: 'g', defaultQty: 200 },
    { id: 'manga', name: 'Manga', unit: 'g', defaultQty: 200 },
    { id: 'abacate', name: 'Abacate', unit: 'g', defaultQty: 200 },

    { id: 'presunto', name: 'Presunto', unit: 'g', defaultQty: 200 },
    { id: 'peito-de-peru', name: 'Peito de peru', unit: 'g', defaultQty: 200 },
    { id: 'queijo', name: 'Queijo', unit: 'g', defaultQty: 200 },
    { id: 'queijo-minas', name: 'Queijo minas', unit: 'g', defaultQty: 200 },
    { id: 'muçarela-light', name: 'Muçarela light', unit: 'g', defaultQty: 200 },
    { id: 'ovos', name: 'Ovos', unit: 'un.', defaultQty: 12 },

    { id: 'polvilho-doce', name: 'Polvilho doce', unit: 'g', defaultQty: 1000 },
    { id: 'leite-integral', name: 'Leite integral', unit: 'ml', defaultQty: 1000 },
    { id: 'leite-semidesnatado', name: 'Leite semidesnatado', unit: 'ml', defaultQty: 1000 },
    { id: 'queijo-parmesao', name: 'Queijo parmesão', unit: 'g', defaultQty: 200 },

    { id: 'alface', name: 'Alface', unit: 'g', defaultQty: 300 },
    { id: 'rucula', name: 'Rúcula', unit: 'g', defaultQty: 300 },
    { id: 'agriao', name: 'Agrião', unit: 'g', defaultQty: 300 },
    { id: 'cenoura', name: 'Cenoura', unit: 'g', defaultQty: 300 },
    { id: 'abobrinha', name: 'Abobrinha', unit: 'g', defaultQty: 300 },
    { id: 'beterraba', name: 'Beterraba', unit: 'g', defaultQty: 300 },
    { id: 'pepino', name: 'Pepino', unit: 'g', defaultQty: 300 },

    { id: 'carne-de-soja', name: 'Carne de soja', unit: 'g', defaultQty: 400 },
    { id: 'batata', name: 'Batata', unit: 'g', defaultQty: 1000 },
    { id: 'mandioquinha', name: 'Mandioquinha', unit: 'g', defaultQty: 1000 },
    { id: 'mandioca', name: 'Mandioca', unit: 'g', defaultQty: 1000 },
    { id: 'queijo-mussarela', name: 'Queijo mussarela', unit: 'g', defaultQty: 300 },
    { id: 'queijo-prato', name: 'Queijo prato', unit: 'g', defaultQty: 300 },
    { id: 'queijo-minas-2', name: 'Queijo minas', unit: 'g', defaultQty: 300 }
  ];

  function load(key, defaultValue) {
    try {
      const raw = localStorage.getItem(key);
      if (!raw) return defaultValue;
      const value = JSON.parse(raw);
      return value == null ? defaultValue : value;
    } catch (e) {
      console.error('Erro ao ler', key, e);
      return defaultValue;
    }
  }

  function save(key, value) {
    try {
      localStorage.setItem(key, JSON.stringify(value));
    } catch (e) {
      console.error('Erro ao salvar', key, e);
    }
  }

  function slugify(text) {
    return text
      .toLowerCase()
      .normalize('NFD')
      .replace(/[\u0300-\u036f]/g, '')
      .replace(/[^a-z0-9]+/g, '-')
      .replace(/(^-|-$)/g, '');
  }

  function todiaISO() {
    const d = new Date();
    const y = d.getFullYear();
    const m = String(d.getMonth() + 1).padStart(2, '0');
    const dia = String(d.getDate()).padStart(2, '0');
    return `${y}-${m}-${dia}`;
  }

  function diadasemana(dateStr) {
    const [y, m, d] = dateStr.split('-').map(Number);
    const dt = new Date(y, m - 1, d);
    return dt.getDay();
  }


  function initHomePage() {
    const favoritosContainer = document.getElementById('favoritos-list');
    if (!favoritosContainer) return;

    const emptyMessage = document.getElementById('favoritos-empty');
    const favoritos = load(STORAGE_KEYS.favoritos, {});
    const ids = Object.keys(favoritos);

    if (!ids.length) {
      if (emptyMessage) emptyMessage.style.display = 'block';
      return;
    }

    if (emptyMessage) emptyMessage.style.display = 'none';
    favoritosContainer.innerHTML = '';

    ids.forEach(id => {
      const fav = favoritos[id];
      const link = document.createElement('a');
      link.href = fav.href || (id + '.html');
      link.className = 'receita-home';

      const img = document.createElement('img');
      img.alt = fav.name || '';
      if (fav.image) img.src = fav.image;

      const caption = document.createElement('span');
      caption.textContent = fav.name || '';

      link.appendChild(img);
      link.appendChild(caption);
      favoritosContainer.appendChild(link);
    });
  }


  function initreceitaDetailPage() {
    const receitaSection = document.querySelector('[data-receita-id]');
    if (!receitaSection) return;

    const id = receitaSection.dataset.receitaId;
    const name = receitaSection.dataset.receitaName;
    const time = receitaSection.dataset.receitaTime;
    const servings = receitaSection.dataset.receitaServings;
    const image = receitaSection.dataset.receitaImage;

    const favoritos = load(STORAGE_KEYS.favoritos, {});
    const favBtn = document.getElementById('favorite-btn');

    function getCurrentHref() {
      const path = window.location.pathname;
      const file = path.split('/').pop();
      return file || (id + '.html');
    }

    function updateFavoriteButtonText() {
      if (!favBtn) return;
      if (favoritos[id]) {
        favBtn.textContent = 'Remover dos favoritos';
      } else {
        favBtn.textContent = 'Salvar nos favoritos';
      }
    }

    if (favBtn) {
      updateFavoriteButtonText();

      favBtn.addEventListener('click', function () {
        if (favoritos[id]) {
          delete favoritos[id];
        } else {
          favoritos[id] = {
            id,
            name,
            time,
            servings,
            image,
            href: getCurrentHref()
          };
        }
        save(STORAGE_KEYS.favoritos, favoritos);
        updateFavoriteButtonText();
      });
    }

    initSwapModal(id);
  }

  function initSwapModal(receitaId) {
    const swapBtn = document.getElementById('swap-btn');
    const modal = document.getElementById('swap-modal');
    if (!swapBtn || !modal) return;

    const config = SWAPS[receitaId];
    if (!config) {
      swapBtn.style.display = 'none';
      return;
    }

    const backdrop = modal.querySelector('.modal-backdrop');
    const closeBtn = document.getElementById('swap-close');
    const listEl = document.getElementById('swap-ingredient-list');
    const resultEl = document.getElementById('swap-result');
    const messageEl = document.getElementById('swap-message');

    function openModal() {
      renderIngredientButtons();
      if (resultEl) resultEl.textContent = '';
      modal.classList.add('open');
    }

    function closeModal() {
      modal.classList.remove('open');
    }

    function renderIngredientButtons() {
      const estoque = load(STORAGE_KEYS.estoque, {});
      listEl.innerHTML = '';

      let any = false;

      config.forEach(entry => {
        const disponivelAlts = entry.alternativas.filter(name => {
          const itemId = slugify(name);
          const item = estoque[itemId];
          if (!item) return false;
          if (typeof item.qty === 'number') return item.qty > 0;
          return true;
        });

        if (!disponivelAlts.length) return;

        any = true;

        const btn = document.createElement('button');
        btn.type = 'button';
        btn.className = 'btn-outline';
        btn.textContent = entry.ingredient;

        btn.addEventListener('click', function () {
          if (!resultEl) return;
          resultEl.textContent =
            'Você pode trocar ' +
            entry.ingredient +
            ' por: ' +
            disponivelAlts.join(', ') +
            '.';
        });

        listEl.appendChild(btn);
      });

      if (!any) {
        if (messageEl) {
          messageEl.textContent =
            'Nenhuma troca disponível com os ingredientes em estoque.';
        }
      } else {
        if (messageEl) {
          messageEl.textContent =
            'Escolha um ingrediente para ver as opções de troca disponíveis.';
        }
      }
    }

    swapBtn.addEventListener('click', openModal);
    if (closeBtn) closeBtn.addEventListener('click', closeModal);
    if (backdrop) backdrop.addEventListener('click', closeModal);
  }


  function initPlanPage() {
    const diaFilter = document.getElementById('dia-filter');
    const listEl = document.getElementById('plan-list');
    const openModalBtn = document.getElementById('open-plan-modal');
    const modal = document.getElementById('plan-modal');

    if (!diaFilter || !listEl || !openModalBtn || !modal) return;

    const receitaSelect = document.getElementById('plan-receita');
    const dateInput = document.getElementById('plan-date');
    const timeInput = document.getElementById('plan-time');
    const form = document.getElementById('plan-form');
    const cancelBtn = document.getElementById('plan-cancel');
    const backdrop = modal.querySelector('.modal-backdrop');

    let entries = load(STORAGE_KEYS.plan, []);

    function saveEntries() {
      save(STORAGE_KEYS.plan, entries);
    }

    function openModal() {
      receitaSelect.innerHTML = '';
      receitaS.forEach(r => {
        const opt = document.createElement('option');
        opt.value = r.id;
        opt.textContent = r.name;
        receitaSelect.appendChild(opt);
      });

      dateInput.value = todiaISO();
      timeInput.value = '';
      modal.classList.add('open');
    }

    function closeModal() {
      modal.classList.remove('open');
    }

    function renderList() {
      listEl.innerHTML = '';
      const filter = diaFilter.value;
      const sorted = entries.slice().sort((a, b) => {
        if (a.date === b.date) return a.time.localeCompare(b.time);
        return a.date.localeCompare(b.date);
      });

      sorted.forEach(entry => {
        const dw = diadasemana(entry.date);
        if (filter !== 'all' && String(dw) !== filter) return;

        const li = document.createElement('li');
        li.dataset.entryId = entry.id;

        const receita = receitaS.find(r => r.id === entry.receitaId) || {
          name: entry.receitaId,
          href: '#'
        };

        const nameLink = document.createElement('a');
        nameLink.href = receita.href;
        nameLink.textContent = receita.name;
        nameLink.className = 'block-link';

        const rightBox = document.createElement('div');
        rightBox.style.display = 'flex';
        rightBox.style.alignItems = 'center';
        rightBox.style.gap = '.5rem';

        const timeSpan = document.createElement('span');
        timeSpan.className = 'time-badge';
        timeSpan.textContent = entry.time;

        const dateSpan = document.createElement('span');
        dateSpan.className = 'muted';
        const [y, m, d] = entry.date.split('-');
        dateSpan.textContent = `${d}/${m}`;

        const removeBtn = document.createElement('button');
        removeBtn.type = 'button';
        removeBtn.className = 'btn-link';
        removeBtn.dataset.action = 'remove-plan';
        removeBtn.textContent = 'Remover';

        rightBox.appendChild(dateSpan);
        rightBox.appendChild(timeSpan);
        rightBox.appendChild(removeBtn);

        li.appendChild(nameLink);
        li.appendChild(rightBox);
        listEl.appendChild(li);
      });

      if (!listEl.children.length) {
        const empty = document.createElement('p');
        empty.className = 'muted';
        empty.textContent = 'Nenhuma receita agendada para este dia.';
        listEl.appendChild(empty);
      }
    }

    openModalBtn.addEventListener('click', openModal);
    cancelBtn.addEventListener('click', closeModal);
    if (backdrop) backdrop.addEventListener('click', closeModal);

    form.addEventListener('submit', function (event) {
      event.preventDefault();
      if (!receitaSelect.value || !dateInput.value || !timeInput.value) return;

      const newEntry = {
        id: Date.now().toString(16) + Math.random().toString(16).slice(2),
        receitaId: receitaSelect.value,
        date: dateInput.value,
        time: timeInput.value
      };

      entries.push(newEntry);
      saveEntries();
      closeModal();
      renderList();
    });

    listEl.addEventListener('click', function (event) {
      const btn = event.target.closest('[data-action="remove-plan"]');
      if (!btn) return;

      const li = btn.closest('li[data-entry-id]');
      if (!li) return;
      const id = li.dataset.entryId;
      entries = entries.filter(e => e.id !== id);
      saveEntries();
      renderList();
    });

    diaFilter.addEventListener('change', renderList);

    renderList();
  }


  function buildInitialestoque() {
    const inv = {};
    INGREDIENTS.forEach(ing => {
      inv[ing.id] = {
        id: ing.id,
        name: ing.name,
        unit: ing.unit,
        qty: ing.defaultQty
      };
    });
    return inv;
  }

  function normalizeestoque(raw) {
    if (!raw || typeof raw !== 'object' || Array.isArray(raw)) {
      return buildInitialestoque();
    }

    const inv = {};
    const byId = {};
    INGREDIENTS.forEach(ing => {
      byId[ing.id] = ing;
    });

    Object.keys(raw).forEach(id => {
      const item = raw[id];
      const base = byId[id];
      if (!base) return;
      inv[id] = {
        id,
        name: item.name || base.name,
        unit: item.unit || base.unit,
        qty:
          typeof item.qty === 'number'
            ? item.qty
            : typeof item.qty === 'string'
            ? Number(item.qty) || base.defaultQty
            : base.defaultQty
      };
    });

    INGREDIENTS.forEach(ing => {
      if (!inv[ing.id]) {
        inv[ing.id] = {
          id: ing.id,
          name: ing.name,
          unit: ing.unit,
          qty: ing.defaultQty
        };
      }
    });

    return inv;
  }

  function initStockPage() {
    const listEl = document.getElementById('estoque-list');
    const openModalBtn = document.getElementById('open-add-ingredient');
    const modal = document.getElementById('add-ingredient-modal');
    if (!listEl || !openModalBtn || !modal) return;

    const availContainer = document.getElementById('disponivel-ingredients');
    const closeBtn = document.getElementById('add-ingredient-close');
    const backdrop = modal.querySelector('.modal-backdrop');

    let estoque = normalizeestoque(load(STORAGE_KEYS.estoque, null));

    function saveestoque() {
      save(STORAGE_KEYS.estoque, estoque);
    }

    function renderestoqueList() {
      listEl.innerHTML = '';

      const ids = Object.keys(estoque).sort((a, b) =>
        estoque[a].name.localeCompare(estoque[b].name, 'pt-BR')
      );

      ids.forEach(id => {
        const item = estoque[id];

        const li = document.createElement('li');
        li.className = 'estoque-item';
        li.dataset.itemId = id;

        const nameSpan = document.createElement('span');
        nameSpan.className = 'item-name';
        nameSpan.textContent = item.name;

        const qtyBox = document.createElement('div');
        qtyBox.className = 'estoque-qty';

        const input = document.createElement('input');
        input.type = 'number';
        input.min = '0';
        input.step = '0.01';
        input.value = typeof item.qty === 'number' ? item.qty : 0;
        input.dataset.role = 'qty-input';

        const unitSpan = document.createElement('span');
        unitSpan.className = 'unit-label';
        unitSpan.textContent = item.unit;

        qtyBox.appendChild(input);
        qtyBox.appendChild(unitSpan);

        li.appendChild(nameSpan);
        li.appendChild(qtyBox);
        listEl.appendChild(li);
      });
    }

    function openModal() {
      availContainer.innerHTML = '';

      const existingIds = new Set(Object.keys(estoque));

      INGREDIENTS.forEach(ing => {
        if (existingIds.has(ing.id) && estoque[ing.id].qty > 0) {
          return;
        }

        const btn = document.createElement('button');
        btn.type = 'button';
        btn.className = 'btn-outline';
        btn.textContent = `${ing.name} (${ing.unit})`;
        btn.dataset.ingId = ing.id;

        btn.addEventListener('click', function () {
          estoque[ing.id] = {
            id: ing.id,
            name: ing.name,
            unit: ing.unit,
            qty: ing.defaultQty
          };
          saveestoque();
          renderestoqueList();
          closeModal();
        });

        availContainer.appendChild(btn);
      });

      if (!availContainer.children.length) {
        const msg = document.createElement('p');
        msg.className = 'muted';
        msg.textContent =
          'Todos os ingredientes das receitas já estão no seu estoque.';
        availContainer.appendChild(msg);
      }

      modal.classList.add('open');
    }

    function closeModal() {
      modal.classList.remove('open');
    }

    listEl.addEventListener('input', function (event) {
      const input = event.target.closest('input[data-role="qty-input"]');
      if (!input) return;

      const li = input.closest('li[data-item-id]');
      if (!li) return;
      const id = li.dataset.itemId;
      const val = Number(input.value);
      estoque[id].qty = isNaN(val) ? 0 : val;
      saveestoque();
    });

    openModalBtn.addEventListener('click', openModal);
    closeBtn.addEventListener('click', closeModal);
    if (backdrop) backdrop.addEventListener('click', closeModal);

    renderestoqueList();
  }


  document.addEventListener('DOMContentLoaded', function () {
    const page = document.body.dataset.page;

    if (page === 'home') {
      initHomePage();
    } else if (page === 'receita-detail') {
      initreceitaDetailPage();
    } else if (page === 'plan') {
      initPlanPage();
    } else if (page === 'stock') {
      initStockPage();
    }
  });
})();