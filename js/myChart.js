$(function() {
    // チャートの枠組み
    var radarChartData = {
        // 項目
        labels: ["アニメ系", "アイドル系", "電車系", "メカ・PC系", "ゲーム系"],
        datasets: [
            {
                // 透明を使いたいのでRGBAで色を再現→rgba(xxx,xxx,xxx,0.5):透過度50%
                fillColor: "rgba(244,250,130,0.7)",  // チャート内の色
                strokeColor: "#111111",  // チャートを囲む線の色
                pointColor: "#111111",   // チャートの点の色
                pointStrokeColor: "#fff",    // 点を囲む線の色
                // 各項目の値
                data: [6,8,2,9,6]
            }
        ]
    };
    // レーダーチャートの目盛とかの設定
    var canvas = document.getElementById("canvas");
    var context = canvas.getContext("2d");
    var chart = new Chart(context);
    var rader = chart.Radar(radarChartData, {
        scaleShowLabels: true,  // 目盛を表示（true/false）
        pointLabelFontSize : 10, // ラベルのフォントサイズ
        scaleOverride : true, // 目盛の最大値を手動設定（true/false）
        scaleSteps : 10, // 目盛の数
        scaleStartValue : 0, // 目盛の最初の数
        scaleStepWidth : 1, // 目盛の間隔
        // 目盛の最大値の計算：scaleSteps（目盛の数）→5　scaleStepWidth（目盛の間隔）→2 だと5×2で最大値は10
    });
});
