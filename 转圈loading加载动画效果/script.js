// テキストを１文字ずつspanで区切る
(() => {
  const targets = document.querySelectorAll('.js-split-text');

  targets.forEach((el) => {
    if (el.dataset.splitDone === '1') return;
    el.dataset.splitDone = '1';

    const text = (el.textContent ?? '').trim();
    el.textContent = '';

    const frag = document.createDocumentFragment();

    Array.from(text).forEach((ch) => {
      const span = document.createElement('span');
      span.textContent = ch === ' ' ? '\u00A0' : ch;
      frag.appendChild(span);
    });

    el.appendChild(frag);
  });
})();

// 各アニメーションのタイミング調整
const loadingEl = document.querySelector('.js-loading');
const WASH_MS = 2600;       // 白化(wash)
const FADE_MAIN_MS = 450;   // loading__main フェード
const NEXT_IN_MS = 900;     // next ワイプ時間
const HOLD_MS = 800;        // 1拍（必要なら）

setTimeout(() => {
  // 1) ローダー側をフェードアウト
  loadingEl.classList.add('is-fadeout');

  setTimeout(() => {
    // 2) ローダー側を display:none
    loadingEl.classList.add('is-hide-main');

    // 3) next を表示（左→右ワイプ）
    requestAnimationFrame(() => {
      loadingEl.classList.add('is-show-next');
    });
  }, FADE_MAIN_MS);

}, WASH_MS);