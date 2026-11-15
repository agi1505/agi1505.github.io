// Ortak davranışlar: her bölüm yalnızca ilgili öğe varsa çalışır.
(function () {
  'use strict';
  document.body.classList.add('enhanced');
  const theme = document.querySelector('#tema');
  theme.hidden = false;
  function setTheme(dark) {
    document.body.classList.toggle('dark', dark);
    theme.setAttribute('aria-pressed', String(dark));
    theme.textContent = dark ? 'Açık tema' : 'Koyu tema';
  }
  // Depolama kapalı olsa da tema düğmesi çalışmaya devam eder.
  try { setTheme(localStorage.getItem('portfolio-tema') === 'dark'); } catch (_) {}
  theme.addEventListener('click', function () {
    const dark = !document.body.classList.contains('dark');
    setTheme(dark);
    try { localStorage.setItem('portfolio-tema', dark ? 'dark' : 'light'); } catch (_) {}
  });
  const menu = document.querySelector('.menu');
  const nav = document.querySelector('#gezinti');
  menu.hidden = false;
  function closeMenu() { nav.classList.remove('open'); menu.setAttribute('aria-expanded', 'false'); }
  menu.addEventListener('click', function () {
    const open = nav.classList.toggle('open');
    menu.setAttribute('aria-expanded', String(open));
  });
  document.addEventListener('keydown', function (event) {
    if (event.key === 'Escape' && nav.classList.contains('open')) { closeMenu(); menu.focus(); }
  });
  // Masaüstünden mobile geçerken gizlenecek bir bağlantıda odağı bırakma.
  const mobile = window.matchMedia('(max-width: 650px)');
  mobile.addEventListener('change', function () {
    if (mobile.matches && nav.contains(document.activeElement)) menu.focus();
    closeMenu();
  });
  const filters = document.querySelector('.filters');
  if (filters) {
    filters.hidden = false;
    filters.addEventListener('click', function (event) {
      const button = event.target.closest('[data-filter]');
      if (!button) return;
      let count = 0;
      document.querySelectorAll('.card').forEach(function (card) {
        const visible = button.dataset.filter === 'all' || card.dataset.kind === button.dataset.filter;
        card.hidden = !visible;
        if (visible) count += 1;
      });
      filters.querySelectorAll('button').forEach(function (item) { item.setAttribute('aria-pressed', String(item === button)); });
      document.querySelector('#sonuc').textContent = count + ' proje gösteriliyor.';
    });
  }
  const form = document.querySelector('#ornek-form');
  if (form) {
    form.querySelector('button').disabled = false;
    form.addEventListener('submit', function (event) {
      event.preventDefault(); // Örnek form: hiçbir ağ isteği yapılmaz.
      const subject = document.querySelector('#konu');
      const message = document.querySelector('#mesaj');
      const length = message.value.trim().length;
      const subjectError = ['Proje hakkında', 'Genel geri bildirim'].includes(subject.value) ? '' : 'Bir konu seçin.';
      const messageError = length < 10 || length > 500 ? 'Mesaj, başındaki ve sonundaki boşluklar çıkarıldıktan sonra 10–500 karakter olmalıdır.' : '';
      document.querySelector('#konu-hata').textContent = subjectError;
      document.querySelector('#mesaj-hata').textContent = messageError;
      subject.setAttribute('aria-invalid', String(Boolean(subjectError)));
      message.setAttribute('aria-invalid', String(Boolean(messageError)));
      document.querySelector('#form-durum').textContent = subjectError || messageError ? 'Alanları kontrol edin. Mesaj gönderilmedi.' : 'Doğrulama başarılı. Bu bir örnek formdur; mesaj gönderilmedi veya kaydedilmedi.';
      if (subjectError) subject.focus(); else if (messageError) message.focus();
    });
  }
})();
