$(function() {
    // チャートの枠組み
    var radarChartData = {
        // 項目
        labels: ["道具へのこだわり", "アルコール耐性", "情報収集", "甘党", "proCon"],
        datasets: [
            {
                // 透明を使いたいのでRGBAで色を再現→rgba(xxx,xxx,xxx,0.5):透過度50%
                fillColor: "rgba(52,152,219,0.7)",  // チャート内の色
                strokeColor: "#eff1f5",             // チャートを囲む線の色
                pointColor: "#eff1f5",              // チャートの点の色
                pointStrokeColor: "#eff1f5",        // 点を囲む線の色
                // 各項目の値
                data: [10,2,7,10,5]
            }
        ]
    };
    // レーダーチャートの目盛とかの設定
    var canvas = document.getElementById("myChart");
    var context = canvas.getContext("2d");
    var chart = new Chart(context);
    var rader = chart.Radar(radarChartData, {
        scaleShowLabels: true,   // 目盛を表示（true/false）
        pointLabelFontSize : 10, // ラベルのフォントサイズ
        scaleOverride : true,    // 目盛の最大値を手動設定（true/false）
        scaleSteps : 10,         // 目盛の数
        scaleStartValue : 0,     // 目盛の最初の数
        scaleStepWidth : 1       // 目盛の間隔
        // 目盛の最大値の計算：scaleSteps（目盛の数）→5
        //                     scaleStepWidth（目盛の間隔）→2
        // だと5×2で最大値は10
    });
});
