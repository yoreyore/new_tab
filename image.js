//CSVファイルを読み込む関数getCSV()の定義
function getCSV(){
    var req = new XMLHttpRequest(); //HTTPでファイルを読み込むためのXMLHttpRrequestオブジェクトを生成
    req.open("get", "name.csv", true); //アクセスするファイルを指定
    req.send(null); //HTTPリクエストの発行
    
    //レスポンスが返ってきたらconvertCSVtoArray()を呼ぶ	
    req.onload = function(){
    select(convertCSVtoArray(req.responseText)); //読み込んだCSVデータを配列化しselect()に渡す
    }
}

//読み込んだCSVデータを二次元配列に変換する関数convertCSVtoArray()の定義
function convertCSVtoArray(str){ //読み込んだCSVデータが文字列として渡される
    var result = []; //最終的な二次元配列を入れるための配列
    var tmp = str.split("\n"); //改行を区切り文字として行を要素とした配列を生成

    //各行ごとにカンマで区切った文字列を要素とした二次元配列を生成
    for(var i=0;i<tmp.length;++i){
        result[i] = tmp[i].split(',');
    }
    return result; //変換して得られた配列を返す 
}

//配列から画像を選んでHTML要素を書き換える関数selectを定義
function select(arr) {
    var selectnum = Math.floor(Math.random() * arr.length); //ランダムに配列から画像を選ぶ
    document.getElementById("draw").innerHTML = "<img src=image/" + arr[selectnum] + ">"; //idがdrawのHTML要素を選んだ画像に差し替える
}

getCSV(); //最初に実行される