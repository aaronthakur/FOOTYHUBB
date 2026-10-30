/* FOOTYHUB – shared script: layout, products, cart, forms */

/* ================= DATA ================= */
const PRODUCTS = [
    { id: 'rm-home', name: 'Real Madrid Home Jersey', cat: 'jerseys', tag: 'real-madrid', price: 2499, mrp: 2999, rating: 5, reviews: 124, featured: 1,
      img: 'https://assets.adidas.com/images/w_1880,f_auto,q_auto/78b62417f1e042aeb25e3353d278de3b_9366/IX8095_HM1.jpg' },
    { id: 'fcb-home', name: 'FC Barcelona Home Jersey', cat: 'jerseys', tag: 'barcelona', price: 2299, mrp: 2999, rating: 5, reviews: 98, featured: 1,
      img: 'https://static.nike.com/a/images/t_PDP_1280_v1/f_auto,q_auto:eco/a86b647d-09b1-407b-859b-3ea00c34f2ee/fc-barcelona-2023-24-stadium-home-mens-dri-fit-soccer-jersey-bX1HWL.png' },
    { id: 'mci-home', name: 'Manchester City Home Jersey', cat: 'jerseys', tag: 'man-city', price: 2599, mrp: 3099, rating: 4, reviews: 61, featured: 1,
      img: 'https://images.puma.com/image/upload/f_auto,q_auto,b_rgb:fafafa,w_750,h_750/global/784323/01/mod01/fnd/IND/fmt/png/Manchester-City-Mens-Home-Authentic-Jersey' },
    { id: 'lfc-home', name: 'Liverpool Home Jersey', cat: 'jerseys', tag: 'liverpool', price: 2399, mrp: 2899, rating: 5, reviews: 84,
      img: 'https://assets.adidas.com/images/h_2000,f_auto,q_auto,fl_lossy,c_fill,g_auto/7e083827b22844499db6244f9b547763_9366/Liverpool_FC_26-27_Home_Jersey_Burgundy_KA6852_21_model.jpg' },
    { id: 'fcb-bay', name: 'Bayern Munich Home Jersey', cat: 'jerseys', tag: 'bayern', price: 2449, mrp: 2999, rating: 4, reviews: 47,
      img: 'https://assets.adidas.com/images/h_2000,f_auto,q_auto,fl_lossy,c_fill,g_auto/9ed01db78013461c8fe9c18647c23c6f_9366/FC_Bayern_26-27_Home_Jersey_Red_KQ6513_21_model.jpg' },
    { id: 'psg-home', name: 'PSG Home Jersey', cat: 'jerseys', tag: 'psg', price: 2699, mrp: 3199, rating: 4, reviews: 53,
      img: 'https://adn-static1.nykaa.com/nykdesignstudio-images/pub/media/catalog/product/a/d/ad22b92Nike-II1885-417_1.jpg?rnd=20200526195200&tr=w-720' },

    { id: 'ad-boot', name: 'Adidas Football Boots', cat: 'boots', tag: 'fg', price: 4999, mrp: 6299, rating: 5, reviews: 76, featured: 1,
      img: 'https://assets.adidas.com/images/w_1880,f_auto,q_auto/1b9f186318804b37bc689379f2a7b096_9366/IE1805_HM1.jpg' },
    { id: 'pro-boot', name: 'Nike Training Boots', cat: 'boots', tag: 'tf', price: 3899, mrp: 4799, rating: 4, reviews: 52, featured: 1,
      img: 'https://adn-static1.nykaa.com/nykdesignstudio-images/pub/media/catalog/product/7/1/71f6d8eNike-IO8241-900_1.jpg?rnd=20200526195200&tr=w-720' },
    { id: 'speed-boot', name: 'Under Armour Firm Ground Boots', cat: 'boots', tag: 'fg', price: 5499, mrp: 6499, rating: 5, reviews: 39,
      img: 'https://underarmour.scene7.com/is/image/Underarmour/6006229-001_DEFAULT?rp=standard-30pad%7Cpdp&qlt=85&bgc=f0f0f0&wid=800&hei=1000&size=770%2C970&op_usm=1.75%2C0.3%2C2%2C0' },
    { id: 'ag-boot', name: 'Puma Artificial Grass Boots', cat: 'boots', tag: 'ag', price: 3499, mrp: 3999, rating: 4, reviews: 28,
      img: 'https://images.puma.com/image/upload/f_auto,q_auto,b_rgb:fafafa,w_750,h_750/global/108600/03/sv01/fnd/IND/fmt/png/FUTURE-8-MATCH-MG-Low-Football-Boots' },

    { id: 'ball', name: 'Official Match Football', cat: 'accessories', price: 1499, mrp: 1999, rating: 5, reviews: 210, featured: 1,
      img: 'https://images.unsplash.com/photo-1486286701208-1d58e9338013?auto=format&fit=crop&w=900&q=80' },
    { id: 'kit', name: 'Football Training Kit', cat: 'accessories', price: 1999, mrp: 2799, rating: 4, reviews: 44, featured: 1,
      img: 'https://images.unsplash.com/photo-1593085512500-5d55148d6f0d?auto=format&fit=crop&w=900&q=80' },
    { id: 'gloves', name: 'Matchday Football Gloves', cat: 'accessories', price: 1299, mrp: 1499, rating: 5, reviews: 37, featured: 1,
      img: 'https://images.unsplash.com/photo-1517466787929-bc90951d0974?auto=format&fit=crop&w=900&q=80' },
    { id: 'shin', name: 'Pro Shin Guards', cat: 'accessories', price: 899, mrp: 1199, rating: 4, reviews: 33,
      img: 'https://images.unsplash.com/photo-1553778263-73a83bab9b0c?auto=format&fit=crop&w=900&q=80' },
    { id: 'train-ball', name: 'Training Football', cat: 'accessories', price: 999, mrp: 1299, rating: 4, reviews: 71,
      img: 'https://images.unsplash.com/photo-1614632537190-23e4146777db?auto=format&fit=crop&w=900&q=80' }
];
const LABELS = { fg: 'Firm ground', ag: 'Artificial grass', tf: 'Turf', 'real-madrid': 'Real Madrid', barcelona: 'Barcelona', 'man-city': 'Man City', liverpool: 'Liverpool', bayern: 'Bayern', psg: 'PSG' };
const SIZES = { jerseys: ['S', 'M', 'L', 'XL', 'XXL'], boots: ['UK 6', 'UK 7', 'UK 8', 'UK 9', 'UK 10'] };
const DESC = {
    jerseys: 'Official-spec kit in breathable, moisture-wicking fabric with a true match-day fit.',
    boots: 'Built for grip and control, with a lightweight upper and studs matched to the surface.',
    accessories: 'Matchday essentials, tested on our own five-a-side pitch.'
};
const FILTERS = { all: () => true, deal20: p => off(p) >= 20, under2000: p => p.price < 2000 };
const FREE_SHIP = 2999, SHIP = 99, PROMOS = { FOOTY10: 0.1 };

/* ================= HELPERS ================= */
const $ = (s, r = document) => r.querySelector(s);
const $$ = (s, r = document) => [...r.querySelectorAll(s)];
const inr = n => '₹' + n.toLocaleString('en-IN');
const off = p => Math.round((1 - p.price / p.mrp) * 100);
const byId = id => PRODUCTS.find(p => p.id === id);
const store = {
    get(k, d) { try { return JSON.parse(localStorage.getItem(k)) ?? d; } catch { return d; } },
    set(k, v) { try { localStorage.setItem(k, JSON.stringify(v)); } catch {} }
};
const params = new URLSearchParams(location.search);

let toastTimer;
const toast = msg => {
    let t = $('.toast');
    if (!t) { t = document.createElement('div'); t.className = 'toast'; t.setAttribute('role', 'status'); document.body.append(t); }
    t.textContent = msg;
    t.classList.add('show');
    clearTimeout(toastTimer);
    toastTimer = setTimeout(() => t.classList.remove('show'), 1800);
};

/* any image that fails to load gets a neutral placeholder */
const FALLBACK = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'%3E%3Crect width='100' height='100' fill='%23edf2ee'/%3E%3Ctext x='50' y='62' font-size='36' text-anchor='middle'%3E%E2%9A%BD%3C/text%3E%3C/svg%3E";
document.addEventListener('error', e => {
    if (e.target.tagName === 'IMG' && !e.target.dataset.fb) { e.target.dataset.fb = 1; e.target.src = FALLBACK; }
}, true);

/* ================= CART STATE ================= */
/* cart = { "productId" or "productId:size": quantity } */
const getCart = () => store.get('fh-cart', {});
const saveCart = c => { store.set('fh-cart', c); updateCount(); };
const addToCart = (id, size, qty = 1) => {
    const c = getCart(), key = size ? `${id}:${size}` : id;
    c[key] = (c[key] || 0) + qty;
    saveCart(c);
    toast(`Added ${byId(id).name} to cart`);
};
const cartRows = () => Object.entries(getCart()).map(([key, qty]) => {
    const [id, size] = key.split(':');
    return { key, p: byId(id), size, qty };
}).filter(r => r.p);
const totals = () => {
    const sub = cartRows().reduce((s, r) => s + r.p.price * r.qty, 0);
    const code = store.get('fh-promo', null);
    const disc = Math.round(sub * (PROMOS[code] || 0));
    const ship = !sub || sub - disc >= FREE_SHIP ? 0 : SHIP;
    return { sub, disc, ship, total: sub - disc + ship, code };
};
const updateCount = () => {
    const n = Object.values(getCart()).reduce((a, b) => a + b, 0);
    $$('.cart-count').forEach(el => el.textContent = n || '');
};
const fillTotals = (t, p) => {
    $(`#${p}-sub`).textContent = inr(t.sub);
    $(`#${p}-off`).textContent = t.disc ? '−' + inr(t.disc) : '—';
    $(`#${p}-ship`).textContent = t.ship ? inr(t.ship) : 'Free';
    $(`#${p}-total`).textContent = inr(t.total);
};

/* ================= PRODUCT CARDS ================= */
const wishlist = () => store.get('fh-wish', []);
const card = p => {
    const on = wishlist().includes(p.id), url = `product.html?id=${p.id}`;
    return `<article class="product-card">
        <div class="product-image">
            <span class="discount">-${off(p)}%</span>
            <button class="wishlist${on ? ' on' : ''}" data-wish="${p.id}" aria-label="Toggle wishlist">${on ? '♥' : '♡'}</button>
            <a href="${url}"><img src="${p.img}" alt="${p.name}" loading="lazy"></a>
        </div>
        <div class="product-info">
            <span class="product-category">${LABELS[p.tag] || p.cat}</span>
            <h3><a href="${url}">${p.name}</a></h3>
            <div class="rating">${'★'.repeat(p.rating)}${'☆'.repeat(5 - p.rating)}<span>(${p.reviews})</span></div>
            <div class="price"><strong>${inr(p.price)}</strong><del>${inr(p.mrp)}</del></div>
            ${SIZES[p.cat] ? `<a class="add-cart" href="${url}">SELECT SIZE</a>` : `<button class="add-cart" data-add="${p.id}">ADD TO CART</button>`}
        </div>
    </article>`;
};

/* ---------- listing pages: filter chips, live search, sort ---------- */
const SORTS = {
    featured: () => 0,
    'price-asc': (a, b) => a.price - b.price,
    'price-desc': (a, b) => b.price - a.price,
    discount: (a, b) => off(b) - off(a)
};
const grid = $('[data-products]');
if (grid) {
    const kind = grid.dataset.products;
    const state = { tag: params.get('club') || params.get('surface') || 'all', sort: params.get('sort') || (kind === 'sale' ? 'discount' : 'featured'), q: '' };
    const sortEl = $('#sort'), searchEl = $('#search');
    if (sortEl) sortEl.value = SORTS[state.sort] ? state.sort : 'featured';
    const draw = () => {
        const inKind = p => kind === 'featured' ? p.featured : kind === 'sale' || p.cat === kind;
        const inTag = FILTERS[state.tag] || (p => p.tag === state.tag);
        const list = PRODUCTS.filter(p => inKind(p) && inTag(p) && p.name.toLowerCase().includes(state.q)).sort(SORTS[state.sort] || SORTS.featured);
        grid.innerHTML = list.map(card).join('') || '<p class="empty">No products match your search.</p>';
        const count = $('#count');
        if (count) count.textContent = `${list.length} product${list.length === 1 ? '' : 's'}`;
        $$('.chip[data-filter]').forEach(c => c.classList.toggle('active', c.dataset.filter === state.tag));
    };
    $$('.chip[data-filter]').forEach(c => c.addEventListener('click', () => { state.tag = c.dataset.filter; draw(); }));
    if (sortEl) sortEl.addEventListener('change', () => { state.sort = sortEl.value; draw(); });
    if (searchEl) searchEl.addEventListener('input', () => { state.q = searchEl.value.trim().toLowerCase(); draw(); });
    draw();
}

/* ---------- product detail page ---------- */
const detail = $('#detail');
if (detail) {
    const p = byId(params.get('id'));
    if (!p) {
        detail.innerHTML = '<div class="cart-empty"><h3>Product not found</h3><p>That item doesn’t exist or was removed.</p><a href="jerseys.html" class="btn btn-primary">BACK TO SHOP</a></div>';
        $('#related-wrap').hidden = true;
    } else {
        document.title = `${p.name} | FOOTYHUB`;
        const sizes = SIZES[p.cat], on = wishlist().includes(p.id);
        let size = null, qty = 1;
        detail.innerHTML = `<div class="detail">
            <div class="detail-img"><img src="${p.img}" alt="${p.name}"></div>
            <div class="detail-info">
                <span class="product-category">${LABELS[p.tag] || p.cat}</span>
                <h1>${p.name}</h1>
                <div class="rating">${'★'.repeat(p.rating)}${'☆'.repeat(5 - p.rating)}<span>(${p.reviews} reviews)</span></div>
                <div class="price"><strong>${inr(p.price)}</strong><del>${inr(p.mrp)}</del><span class="product-category">${off(p)}% off</span></div>
                <p>${DESC[p.cat]}</p>
                ${sizes ? `<div class="form-group" id="size-group">
                    <span class="label">Select size</span>
                    <div class="chips">${sizes.map(s => `<button type="button" class="chip" data-size="${s}">${s}</button>`).join('')}</div>
                    <small class="error" role="alert"></small>
                </div>` : ''}
                <div class="buy">
                    <div class="qty-control">
                        <button type="button" data-step="-1" aria-label="Decrease quantity">−</button><span id="qty">1</span><button type="button" data-step="1" aria-label="Increase quantity">+</button>
                    </div>
                    <button type="button" class="btn btn-primary" id="buy">ADD TO CART</button>
                    <button type="button" class="wishlist${on ? ' on' : ''}" data-wish="${p.id}" aria-label="Toggle wishlist">${on ? '♥' : '♡'}</button>
                </div>
            </div>
        </div>`;
        detail.addEventListener('click', e => {
            const s = e.target.closest('[data-size]'), st = e.target.closest('[data-step]');
            if (s) {
                size = s.dataset.size;
                $$('[data-size]', detail).forEach(b => b.classList.toggle('active', b === s));
                $('#size-group').classList.remove('invalid');
                $('#size-group .error').textContent = '';
            }
            if (st) { qty = Math.min(10, Math.max(1, qty + +st.dataset.step)); $('#qty').textContent = qty; }
            if (e.target.id === 'buy') {
                if (sizes && !size) {
                    $('#size-group').classList.add('invalid');
                    $('#size-group .error').textContent = 'Please select a size.';
                    return;
                }
                addToCart(p.id, size, qty);
            }
        });
        $('#related').innerHTML = PRODUCTS.filter(x => x.cat === p.cat && x.id !== p.id).slice(0, 4).map(card).join('');
    }
}

/* ---------- card buttons (add to cart, wishlist) ---------- */
document.addEventListener('click', e => {
    const add = e.target.closest('[data-add]');
    if (add) addToCart(add.dataset.add, null);
    const wish = e.target.closest('[data-wish]');
    if (wish) {
        const w = wishlist(), i = w.indexOf(wish.dataset.wish);
        i < 0 ? w.push(wish.dataset.wish) : w.splice(i, 1);
        store.set('fh-wish', w);
        wish.classList.toggle('on', i < 0);
        wish.textContent = i < 0 ? '♥' : '♡';
        toast(i < 0 ? 'Saved to wishlist' : 'Removed from wishlist');
    }
    if (e.target.closest('.menu-btn')) $('#nav-links').classList.toggle('open');
});

/* ================= FORM VALIDATION ================= */
const FORMATS = {
    card: v => v.replace(/\D/g, '').slice(0, 16).replace(/(.{4})(?=.)/g, '$1 '),
    expiry: v => v.replace(/\D/g, '').slice(0, 4).replace(/^(\d{2})(?=\d)/, '$1/')
};
const validateField = el => {
    if (el.disabled || ['radio', 'button', 'submit'].includes(el.type)) return true;
    const v = el.value.trim();
    let msg = '';
    if (el.type === 'checkbox') { if (el.required && !el.checked) msg = el.dataset.required || 'Please tick this box.'; }
    else if (el.required && !v) msg = el.dataset.required || 'This field is required.';
    else if (v) {
        if (el.minLength > 0 && v.length < el.minLength) msg = el.dataset.msg || `Enter at least ${el.minLength} characters.`;
        else if (!el.checkValidity()) msg = el.dataset.msg || 'Please check this value.';
        else if (el.dataset.match && v !== $(el.dataset.match).value) msg = 'Passwords do not match.';
        else if (el.dataset.format === 'expiry') {
            const [m, y] = v.split('/').map(Number), now = new Date();
            if (2000 + y < now.getFullYear() || (2000 + y === now.getFullYear() && m < now.getMonth() + 1)) msg = 'This card has expired.';
        }
    }
    const group = el.closest('.form-group');
    if (group) {
        let err = $('.error', group);
        if (!err) { err = document.createElement('small'); err.className = 'error'; err.setAttribute('role', 'alert'); group.append(err); }
        err.textContent = msg;
        group.classList.toggle('invalid', !!msg);
    }
    el.setAttribute('aria-invalid', !!msg);
    return !msg;
};
const initForm = (form, onValid) => {
    form.noValidate = true;
    form.addEventListener('submit', e => {
        e.preventDefault();
        const bad = $$('input, select, textarea', form).filter(el => !validateField(el));
        if (bad.length) bad[0].focus(); else onValid(form);
    });
    form.addEventListener('focusout', e => { if (e.target.matches('input, select, textarea')) validateField(e.target); });
    form.addEventListener('input', e => {
        const f = FORMATS[e.target.dataset.format];
        if (f) e.target.value = f(e.target.value);
        if (e.target.closest('.invalid')) validateField(e.target);
    });
};
const statusFor = form => {
    let s = form.nextElementSibling;
    if (!s || !s.classList.contains('form-status')) { s = document.createElement('p'); s.className = 'form-status'; s.setAttribute('role', 'status'); form.after(s); }
    return s;
};

/* contact + newsletter: validate, confirm, reset */
$$('form[data-success]').forEach(f => initForm(f, () => {
    statusFor(f).textContent = f.dataset.success;
    f.reset();
}));

/* ================= CART PAGE ================= */
const cartList = $('#cart-items');
if (cartList) {
    const drawCart = () => {
        const rows = cartRows(), t = totals();
        $('#cart-layout').hidden = !rows.length;
        $('#cart-empty').hidden = !!rows.length;
        cartList.innerHTML = rows.map(({ key, p, size, qty }) => `
            <div class="cart-row">
                <img src="${p.img}" alt="${p.name}">
                <div><h4><a href="product.html?id=${p.id}">${p.name}</a></h4><span class="meta">${size ? size + ' · ' : ''}${inr(p.price)} each</span></div>
                <div class="qty-control">
                    <button data-qty="${key}" data-d="-1" aria-label="Decrease quantity">−</button>
                    <span>${qty}</span>
                    <button data-qty="${key}" data-d="1" aria-label="Increase quantity">+</button>
                </div>
                <div class="line-price">${inr(p.price * qty)}</div>
                <button class="remove-btn" data-remove="${key}" aria-label="Remove ${p.name}">✕</button>
            </div>`).join('');
        fillTotals(t, 'sum');
        $('#ship-note').textContent = t.ship ? `Add ${inr(FREE_SHIP - (t.sub - t.disc))} more for free shipping.` : 'You get free shipping.';
        updateCount();
    };
    cartList.addEventListener('click', e => {
        const q = e.target.closest('[data-qty]'), r = e.target.closest('[data-remove]'), c = getCart();
        if (q) c[q.dataset.qty] = Math.min(10, Math.max(1, c[q.dataset.qty] + +q.dataset.d));
        else if (r) { delete c[r.dataset.remove]; toast('Item removed'); }
        else return;
        saveCart(c); drawCart();
    });
    $('#promo-form').addEventListener('submit', e => {
        e.preventDefault();
        const code = $('#promo').value.trim().toUpperCase(), ok = !!PROMOS[code];
        store.set('fh-promo', ok ? code : null);
        $('#promo-note').textContent = !code ? 'Enter a promo code.' : ok ? `${code} applied: 10% off.` : 'That code isn’t valid.';
        drawCart();
    });
    drawCart();
}

/* ================= CHECKOUT PAGE ================= */
const checkout = $('#checkout-form');
if (checkout) {
    const rows = cartRows(), t = totals();
    $('#co-layout').hidden = !rows.length;
    $('#co-empty').hidden = !!rows.length;
    $('#co-lines').innerHTML = rows.map(r => `<div class="summary-row"><span>${r.p.name}${r.size ? ` (${r.size})` : ''} × ${r.qty}</span><span>${inr(r.p.price * r.qty)}</span></div>`).join('');
    fillTotals(t, 'co');

    const showPay = () => {
        const v = $('input[name=pay]:checked', checkout).value;
        $$('[data-pay]', checkout).forEach(g => {
            g.hidden = g.dataset.pay !== v;
            $$('input', g).forEach(i => i.disabled = g.hidden);
        });
    };
    $$('input[name=pay]', checkout).forEach(r => r.addEventListener('change', showPay));
    showPay();

    initForm(checkout, () => {
        const id = 'FH' + Date.now().toString().slice(-7);
        saveCart({});
        store.set('fh-promo', null);
        $('#co-layout').hidden = true;
        $('#co-done').hidden = false;
        $('#order-id').textContent = id;
    });
}

updateCount();
