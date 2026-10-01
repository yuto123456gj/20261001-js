$(function() {
  // ブラウザをスクロールした時
  $(window).scroll(function() {
    // 現在のスクロール位置に応じてメニューのハイライトを変更
    // 1〜4のセクションを順番にチェック
    for (let i = 1; i <= 4; i++) {
      // スクロール位置がセクションの位置を超えたら
      if ($("section:nth-child(" + i + ")").offset().top < $(window).scrollTop() + 100) {
        // 現在のセクションに対応するメニュー項目をハイライト
        $("nav li").removeClass("current");  // 既存のハイライトを削除

        $("nav li:nth-child(" + i + ")").addClass("current"); // 新しいハイライトを追加
      }
    }
  });
});