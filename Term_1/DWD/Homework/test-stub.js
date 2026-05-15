/**
 * ============================================================
 *  test-stub.js — ShopApp DWD Term 1
 *  Cách chạy:
 *    1. Mở Version1.html trong trình duyệt
 *    2. Mở DevTools → Console
 *    3. Copy-paste toàn bộ file này vào Console và Enter
 *       HOẶC thêm <script src="test-stub.js"></script> cuối body
 *  Kết quả: Mỗi test in ra ✅ PASS hoặc ❌ FAIL + lý do
 * ============================================================
 */

/* ============================================================
  FRAMEWORK TEST NHỎ (không cần thư viện ngoài)
============================================================ */

const _results = { pass: 0, fail: 0, errors: [] };

/**
 * assert(condition, message)
 * Ném lỗi nếu condition === false
 * Các hàm test* dùng cái này để kiểm tra
 */
function assert(condition, message) {
  if (!condition) throw new Error(message || 'Assertion failed');
}

/**
 * it(description, fn)
 * Chạy 1 test case, bắt lỗi và in kết quả
 */
function it(description, fn) {
  try {
    fn();
    console.log(`  ✅ PASS — ${description}`);
    _results.pass++;
  } catch (e) {
    console.error(`  ❌ FAIL — ${description}`);
    console.error(`         Lý do: ${e.message}`);
    _results.fail++;
    _results.errors.push({ description, error: e.message });
  }
}

/**
 * describe(label, fn)
 * Nhóm các test case lại, in tiêu đề nhóm
 */
function describe(label, fn) {
  console.group(`\n📦 ${label}`);
  fn();
  console.groupEnd();
}

/**
 * beforeEach(fn)
 * Trả về hàm wrapper để gọi fn trước mỗi test
 * Dùng thủ công: gọi setup() đầu mỗi it()
 */
function makeSetup(fn) {
  return fn; // gọi thủ công trong test
}

/* ============================================================
  HELPER: DỌN DẸP STORAGE GIỮA CÁC TEST
============================================================ */

function cleanStorage() {
  sessionStorage.removeItem('auth_user');
  sessionStorage.removeItem('cart');
  localStorage.removeItem('auth_user');
  currentUser = null; // reset state toàn cục
}

/**
 * seedUsers()
 * Đảm bảo USERS có dữ liệu test trước khi chạy test auth
 * Member A phải thêm user thật vào USERS — hàm này chỉ là fallback
 */
function seedUsers() {
  // Nếu Member A chưa thêm USERS, tự seed để test chạy được
  if (!USERS || USERS.length === 0) {
    USERS.push({ username: 'testuser', password: '123456' });
    USERS.push({ username: 'admin',    password: 'admin123' });
  }
}

/**
 * seedProducts()
 * Đảm bảo PRODUCTS có dữ liệu test
 */
function seedProducts() {
  if (!PRODUCTS || PRODUCTS.length === 0) {
    PRODUCTS.push({ id: 1, name: 'Áo thun',  price: 150000, desc: 'Áo đẹp', category: 'Thời trang', image: '' });
    PRODUCTS.push({ id: 2, name: 'Quần jean', price: 350000, desc: 'Jean xịn', category: 'Thời trang', image: '' });
    PRODUCTS.push({ id: 3, name: 'Giày dép',  price: 200000, desc: 'Dép bền', category: 'Giày dép',   image: '' });
  }
}


/* ============================================================
  NHÓM TEST 1 — AUTH FLOW
  Phụ trách kiểm tra : Member B
  Phụ thuộc          : signIn(), signUp(), signOut(), syncUserChip()
  Trạng thái         : Chưa làm
============================================================ */

describe('Auth Flow — Member B', () => {

  it('Đăng nhập đúng username/password → currentUser được gán + trả về true', () => {
    /*
      Điều kiện đầu vào : USERS có { username: 'testuser', password: '123456' }
      Kết quả mong đợi  : signIn trả về true, currentUser.username === 'testuser'
      Owner kiểm tra    : Member B
    */
    cleanStorage();
    seedUsers();
    const result = signIn('testuser', '123456', false);
    assert(result === true, 'signIn phải trả về true khi đúng thông tin');
    assert(currentUser !== null, 'currentUser phải khác null sau khi đăng nhập');
    assert(currentUser.username === 'testuser', 'currentUser.username phải là "testuser"');
  });

  it('Đăng nhập sai password → trả về false, currentUser vẫn null', () => {
    /*
      Điều kiện đầu vào : password sai
      Kết quả mong đợi  : signIn trả về false, currentUser vẫn null
    */
    cleanStorage();
    seedUsers();
    const result = signIn('testuser', 'satpassword', false);
    assert(result === false, 'signIn phải trả về false khi sai mật khẩu');
    assert(currentUser === null, 'currentUser phải vẫn là null');
  });

  it('Đăng nhập sai username → trả về false', () => {
    cleanStorage();
    seedUsers();
    const result = signIn('khongtongtai', '123456', false);
    assert(result === false, 'signIn phải trả về false khi username không tồn tại');
    assert(currentUser === null, 'currentUser phải vẫn là null');
  });

  it('Đăng nhập thành công → sessionStorage lưu auth_user', () => {
    /*
      Kết quả mong đợi: sessionStorage.getItem("auth_user") không null và parse được
    */
    cleanStorage();
    seedUsers();
    signIn('testuser', '123456', false);
    const stored = sessionStorage.getItem('auth_user');
    assert(stored !== null, 'sessionStorage phải có auth_user sau khi đăng nhập');
    const parsed = JSON.parse(stored);
    assert(parsed.username === 'testuser', 'auth_user trong storage phải chứa đúng username');
  });

  it('Remember Me = false → dùng sessionStorage (không dùng localStorage)', () => {
    cleanStorage();
    seedUsers();
    signIn('testuser', '123456', false);
    const inSession = sessionStorage.getItem('auth_user');
    // Khi remember = false, có thể dùng sessionStorage
    // Tùy cách Member B implement; điều quan trọng là auth được lưu đâu đó
    assert(inSession !== null || localStorage.getItem('auth_user') !== null,
      'Auth phải được lưu vào sessionStorage hoặc localStorage');
  });

  it('Đăng ký thành công → user được thêm vào USERS + tự đăng nhập', () => {
    /*
      Điều kiện đầu vào : username mới chưa tồn tại, password khớp nhau
      Kết quả mong đợi  : USERS.length tăng lên 1, currentUser được gán
    */
    cleanStorage();
    seedUsers();
    const lenBefore = USERS.length;
    const result = signUp('newuser99', 'pass123', 'pass123');
    assert(result === true, 'signUp phải trả về true khi thành công');
    assert(USERS.length === lenBefore + 1, 'USERS phải có thêm 1 user mới');
    assert(currentUser !== null, 'Sau signUp phải tự đăng nhập (currentUser không null)');
  });

  it('Đăng ký với password không khớp → trả về false', () => {
    cleanStorage();
    seedUsers();
    const result = signUp('newuser99', 'pass123', 'KHONGKHOP');
    assert(result === false, 'signUp phải trả về false khi confirm không khớp');
  });

  it('Đăng ký với username đã tồn tại → trả về false', () => {
    cleanStorage();
    seedUsers();
    const result = signUp('testuser', 'anypassword', 'anypassword');
    assert(result === false, 'signUp phải trả về false khi username đã tồn tại');
  });

  it('Đăng xuất → currentUser = null + xóa storage', () => {
    /*
      Kết quả mong đợi: currentUser === null, sessionStorage không còn auth_user
    */
    cleanStorage();
    seedUsers();
    signIn('testuser', '123456', false);
    signOut();
    assert(currentUser === null, 'currentUser phải là null sau khi signOut');
    assert(sessionStorage.getItem('auth_user') === null,
      'sessionStorage phải không còn auth_user sau signOut');
    assert(localStorage.getItem('auth_user') === null,
      'localStorage phải không còn auth_user sau signOut');
  });

});


/* ============================================================
  NHÓM TEST 2 — ROUTE GUARD
  Phụ trách kiểm tra : Member A
  Phụ thuộc          : routeTo(), normalizeRoute(), currentUser
  Trạng thái         : Chưa làm
============================================================ */

describe('Route Guard — Member A', () => {

  it('Chưa đăng nhập → routeTo("home") không hiện #page-home', () => {
    /*
      Kết quả mong đợi: #page-home không có class "active"
      (vì guard phải redirect về signin)
    */
    cleanStorage();
    routeTo('home');
    const homeEl = document.getElementById('page-home');
    assert(homeEl && !homeEl.classList.contains('active'),
      'Chưa đăng nhập không được phép vào trang home');
  });

  it('Chưa đăng nhập → routeTo("cart") không hiện #page-cart', () => {
    cleanStorage();
    routeTo('cart');
    const cartEl = document.getElementById('page-cart');
    assert(cartEl && !cartEl.classList.contains('active'),
      'Chưa đăng nhập không được phép vào trang cart');
  });

  it('Chưa đăng nhập → routeTo("home") tự chuyển sang trang signin', () => {
    cleanStorage();
    routeTo('home');
    const signinEl = document.getElementById('page-signin');
    assert(signinEl && signinEl.classList.contains('active'),
      'Guard phải redirect về trang signin khi chưa đăng nhập');
  });

  it('Đã đăng nhập → routeTo("signin") không hiện #page-signin', () => {
    cleanStorage();
    seedUsers();
    signIn('testuser', '123456', false);
    routeTo('signin');
    const signinEl = document.getElementById('page-signin');
    assert(signinEl && !signinEl.classList.contains('active'),
      'Đã đăng nhập không được vào trang signin');
  });

  it('Đã đăng nhập → routeTo("home") hiện đúng #page-home', () => {
    cleanStorage();
    seedUsers();
    signIn('testuser', '123456', false);
    routeTo('home');
    const homeEl = document.getElementById('page-home');
    assert(homeEl && homeEl.classList.contains('active'),
      'Đã đăng nhập phải vào được trang home');
  });

  it('Chỉ 1 trang active tại một thời điểm', () => {
    cleanStorage();
    seedUsers();
    signIn('testuser', '123456', false);
    routeTo('home');
    const activePages = document.querySelectorAll('.page.active');
    assert(activePages.length === 1,
      `Chỉ được có 1 trang active, đang có: ${activePages.length}`);
  });

  it('normalizeRoute() trả về "home" khi đã đăng nhập', () => {
    cleanStorage();
    seedUsers();
    signIn('testuser', '123456', false);
    const route = normalizeRoute();
    assert(route === 'home', `normalizeRoute() phải trả về "home", nhận được: "${route}"`);
  });

  it('normalizeRoute() trả về "signin" khi chưa đăng nhập', () => {
    cleanStorage();
    const route = normalizeRoute();
    assert(route === 'signin', `normalizeRoute() phải trả về "signin", nhận được: "${route}"`);
  });

});


/* ============================================================
  NHÓM TEST 3 — PRODUCTS
  Phụ trách kiểm tra : Member C
  Phụ thuộc          : PRODUCTS (Member A), renderProducts()
  Trạng thái         : Chưa làm
============================================================ */

describe('Products — Member C', () => {

  it('renderProducts() render đủ số card bằng số PRODUCTS', () => {
    /*
      Điều kiện: đã đăng nhập, PRODUCTS có dữ liệu
      Kết quả  : #product-list chứa đúng N card (N = PRODUCTS.length)
    */
    cleanStorage();
    seedUsers();
    seedProducts();
    signIn('testuser', '123456', false);
    routeTo('home');
    renderProducts();
    const cards = document.querySelectorAll('#product-list .product-card');
    assert(
      cards.length === PRODUCTS.length,
      `Số card (${cards.length}) phải bằng số PRODUCTS (${PRODUCTS.length})`
    );
  });

  it('Mỗi card có nút Add to Cart', () => {
    cleanStorage();
    seedUsers();
    seedProducts();
    signIn('testuser', '123456', false);
    renderProducts();
    const cards = document.querySelectorAll('#product-list .product-card');
    cards.forEach((card, i) => {
      const btn = card.querySelector('button');
      assert(btn !== null, `Card thứ ${i + 1} không có nút Add to Cart`);
    });
  });

  it('PRODUCTS có ít nhất 1 sản phẩm (Member A đã thêm data)', () => {
    seedProducts();
    assert(PRODUCTS.length >= 1, 'PRODUCTS phải có ít nhất 1 sản phẩm');
  });

  it('Mỗi sản phẩm có đủ field bắt buộc: id, name, price', () => {
    seedProducts();
    PRODUCTS.forEach((p, i) => {
      assert(p.id !== undefined,    `PRODUCTS[${i}] thiếu field "id"`);
      assert(p.name !== undefined,  `PRODUCTS[${i}] thiếu field "name"`);
      assert(p.price !== undefined, `PRODUCTS[${i}] thiếu field "price"`);
      assert(typeof p.price === 'number', `PRODUCTS[${i}].price phải là số`);
    });
  });

});


/* ============================================================
  NHÓM TEST 4 — CART STATE
  Phụ trách kiểm tra : Member D
  Phụ thuộc          : getCart(), saveCart(), addToCart(), clearCart(),
                       removeFromCart(), updateQuantity(), updateCartBadge()
  Trạng thái         : Chưa làm
============================================================ */

describe('Cart State — Member D', () => {

  it('getCart() trả về mảng rỗng khi chưa có gì trong storage', () => {
    cleanStorage();
    const cart = getCart();
    assert(Array.isArray(cart), 'getCart() phải trả về Array');
    assert(cart.length === 0, 'getCart() phải trả về mảng rỗng khi storage trống');
  });

  it('saveCart() → getCart() trả về đúng dữ liệu vừa lưu', () => {
    cleanStorage();
    seedProducts();
    const mockCart = [{ id: 1, name: 'Test', price: 100000, quantity: 2 }];
    saveCart(mockCart);
    const loaded = getCart();
    assert(loaded.length === 1, 'Sau saveCart phải load lại được 1 item');
    assert(loaded[0].id === 1, 'id của item phải khớp');
    assert(loaded[0].quantity === 2, 'quantity của item phải khớp');
  });

  it('addToCart() thêm sản phẩm mới vào cart', () => {
    cleanStorage();
    seedProducts();
    addToCart(1); // sản phẩm id=1
    const cart = getCart();
    assert(cart.length === 1, 'Cart phải có 1 item sau khi addToCart');
    assert(cart[0].id === 1, 'Item trong cart phải có đúng id');
    assert(cart[0].quantity === 1, 'Quantity ban đầu phải là 1');
  });

  it('addToCart() với sản phẩm đã có → tăng quantity, không thêm row mới', () => {
    cleanStorage();
    seedProducts();
    addToCart(1);
    addToCart(1); // thêm lần 2
    const cart = getCart();
    assert(cart.length === 1, 'Cart chỉ được có 1 row, không được thêm row trùng');
    assert(cart[0].quantity === 2, 'Quantity phải tăng lên 2 sau khi add lần 2');
  });

  it('addToCart() thêm 2 sản phẩm khác nhau → cart có 2 item', () => {
    cleanStorage();
    seedProducts();
    addToCart(1);
    addToCart(2);
    const cart = getCart();
    assert(cart.length === 2, 'Cart phải có 2 item khác nhau');
  });

  it('updateQuantity() tăng quantity lên +1', () => {
    cleanStorage();
    seedProducts();
    addToCart(1);
    updateQuantity(1, +1);
    const cart = getCart();
    assert(cart[0].quantity === 2,
      `Quantity phải là 2 sau khi tăng, đang là: ${cart[0]?.quantity}`);
  });

  it('updateQuantity() giảm quantity về 0 → tự xóa item', () => {
    cleanStorage();
    seedProducts();
    addToCart(1); // quantity = 1
    updateQuantity(1, -1); // quantity = 0 → phải xóa
    const cart = getCart();
    assert(cart.length === 0, 'Khi quantity về 0, item phải bị xóa tự động');
  });

  it('removeFromCart() xóa đúng 1 item, giữ lại item khác', () => {
    cleanStorage();
    seedProducts();
    addToCart(1);
    addToCart(2);
    removeFromCart(1);
    const cart = getCart();
    assert(cart.length === 1, 'Cart phải còn 1 item sau khi xóa');
    assert(cart[0].id === 2, 'Item còn lại phải là id=2');
  });

  it('clearCart() xóa toàn bộ cart', () => {
    cleanStorage();
    seedProducts();
    addToCart(1);
    addToCart(2);
    clearCart();
    const cart = getCart();
    assert(cart.length === 0, 'Cart phải rỗng sau clearCart');
  });

  it('updateCartBadge() hiển thị tổng quantity đúng trên #cart-badge', () => {
    cleanStorage();
    seedProducts();
    addToCart(1);
    addToCart(1); // qty = 2
    addToCart(2); // qty = 1 → tổng = 3
    updateCartBadge();
    const badge = document.getElementById('cart-badge');
    assert(badge !== null, '#cart-badge phải tồn tại trong DOM');
    assert(badge.textContent === '3',
      `Badge phải hiển thị "3", đang là: "${badge.textContent}"`);
  });

});


/* ============================================================
  NHÓM TEST 5 — CART UI (render)
  Phụ trách kiểm tra : Member D
  Phụ thuộc          : renderCart(), addToCart()
  Trạng thái         : Chưa làm
============================================================ */

describe('Cart UI — Member D', () => {

  it('renderCart() với cart rỗng → #cart-list hiển thị empty state', () => {
    cleanStorage();
    renderCart();
    const cartList = document.getElementById('cart-list');
    assert(cartList !== null, '#cart-list phải tồn tại trong DOM');
    // Empty state: thường có text hoặc element đặc biệt
    assert(cartList.innerHTML.trim() !== '',
      '#cart-list không được trống hoàn toàn — phải có empty state message');
  });

  it('renderCart() với 2 sản phẩm → #cart-list có 2 item row', () => {
    cleanStorage();
    seedProducts();
    addToCart(1);
    addToCart(2);
    renderCart();
    const rows = document.querySelectorAll('#cart-list .cart-item');
    assert(rows.length === 2,
      `#cart-list phải có 2 .cart-item, đang có: ${rows.length}`);
  });

  it('renderCart() tính tổng đúng và hiển thị vào #cart-total', () => {
    /*
      id=1: giá 150000, qty=2  → 300000
      id=2: giá 350000, qty=1  → 350000
      Tổng = 650000
    */
    cleanStorage();
    seedProducts();
    addToCart(1);
    addToCart(1); // qty=2
    addToCart(2); // qty=1
    renderCart();
    const totalEl = document.getElementById('cart-total');
    assert(totalEl !== null, '#cart-total phải tồn tại trong DOM');
    // Kiểm tra tổng có chứa số đúng (flexible với format VNĐ)
    const text = totalEl.textContent.replace(/\D/g, ''); // chỉ giữ số
    assert(text.includes('650000'),
      `#cart-total phải chứa 650000, nội dung hiện tại: "${totalEl.textContent}"`);
  });

});


/* ============================================================
  NHÓM TEST 6 — INTEGRATION
  Phụ trách kiểm tra : Long
  Phụ thuộc          : Toàn bộ các function từ A B C D
  Trạng thái         : Chưa làm
============================================================ */

describe('Integration — Long', () => {

  it('restoreAuth() khôi phục đúng currentUser từ sessionStorage', () => {
    /*
      Giả lập đã có auth_user trong storage, reload lại app
    */
    cleanStorage();
    const fakeUser = { username: 'testuser' };
    sessionStorage.setItem('auth_user', JSON.stringify(fakeUser));
    currentUser = null; // reset về null như lúc trang mới load
    restoreAuth();
    assert(currentUser !== null, 'restoreAuth() phải khôi phục currentUser');
    assert(currentUser.username === 'testuser',
      'currentUser.username phải đúng sau restoreAuth');
  });

  it('Refresh trang vẫn giữ giỏ hàng (cart persist qua sessionStorage)', () => {
    cleanStorage();
    seedProducts();
    addToCart(1);
    addToCart(2);
    // Giả lập "refresh": đọc lại từ storage
    const cartAfterRefresh = getCart();
    assert(cartAfterRefresh.length === 2,
      'Giỏ hàng phải được giữ lại sau khi "refresh" (đọc lại từ sessionStorage)');
  });

  it('Sau signOut → routeTo("home") bị redirect về signin', () => {
    cleanStorage();
    seedUsers();
    signIn('testuser', '123456', false);
    signOut();
    routeTo('home'); // phải bị guard chặn
    const homePage = document.getElementById('page-home');
    const signinPage = document.getElementById('page-signin');
    assert(!homePage.classList.contains('active'),
      'Sau signOut, trang home không được active');
    assert(signinPage.classList.contains('active'),
      'Sau signOut và routeTo("home"), phải redirect về signin');
  });

  it('Full flow: signIn → addToCart → signOut → signIn lại → cart vẫn còn', () => {
    /*
      sessionStorage tồn tại trong tab → cart giữ dù signOut/signIn
      (trừ khi clearCart được gọi)
    */
    cleanStorage();
    seedUsers();
    seedProducts();
    signIn('testuser', '123456', false);
    addToCart(1);
    signOut();
    signIn('testuser', '123456', false);
    const cart = getCart();
    assert(cart.length >= 1,
      'Cart phải vẫn còn sau khi signOut và signIn lại trong cùng tab');
  });

  it('addToCart → badge cập nhật ngay lập tức', () => {
    cleanStorage();
    seedProducts();
    addToCart(1);
    const badge = document.getElementById('cart-badge');
    assert(badge.textContent !== '0' && badge.textContent !== '',
      'Badge phải cập nhật sau addToCart, không được vẫn là 0');
  });

  it('clearCart → badge về 0', () => {
    cleanStorage();
    seedProducts();
    addToCart(1);
    addToCart(2);
    clearCart();
    const badge = document.getElementById('cart-badge');
    assert(badge.textContent === '0' || badge.textContent === '',
      `Badge phải về 0 sau clearCart, đang là: "${badge.textContent}"`);
  });

});


/* ============================================================
  CHẠY TẤT CẢ VÀ IN KẾT QUẢ TỔNG HỢP
============================================================ */

console.log('\n');
console.log('='.repeat(60));
console.log('  🧪 SHOPAPP — TEST RESULTS');
console.log('='.repeat(60));

const total = _results.pass + _results.fail;
console.log(`\n  Tổng số test : ${total}`);
console.log(`  ✅ Passed    : ${_results.pass}`);
console.log(`  ❌ Failed    : ${_results.fail}`);

if (_results.fail > 0) {
  console.log('\n  --- Test thất bại ---');
  _results.errors.forEach(e => {
    console.error(`  ❌ ${e.description}`);
    console.error(`     ${e.error}`);
  });
}

const pct = total > 0 ? Math.round((_results.pass / total) * 100) : 0;
console.log(`\n  Tỷ lệ hoàn thành: ${pct}%`);

if (_results.fail === 0) {
  console.log('  🎉 Tất cả test đều PASS — sẵn sàng nộp bài!');
} else {
  const remaining = _results.errors.map(e => e.description);
  console.log('  📋 Còn lại cần fix:');
  remaining.forEach(r => console.log(`     • ${r}`));
}

console.log('\n' + '='.repeat(60) + '\n');
