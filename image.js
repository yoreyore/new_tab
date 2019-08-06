// 読み込み完了時に次の関数を呼び出す
window.onload = function() {
    // 画像を配列化し, 乱数で要素を抜き出す
    var imglist = new Array(
        "せい.jpg",
        "そら.jpg",
        "せいinかまくら.jpg",
        "そらonかまくら.jpg",
        "ラブラブ.png",
        "ラブラブBB.png"
    );
    var selectnum = Math.floor(Math.random() * imglist.length);
    // 抜き出した要素を HTML に渡す
    document.getElementById("draw").innerHTML = "<img src=" + imglist[selectnum] + ">";
}