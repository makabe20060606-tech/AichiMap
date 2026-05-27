// 地図生成
const map = L.map('map').setView(
    [35.1802,136.9066],
    9
);

// 地図表示
L.tileLayer(
'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
{
    attribution:
    '&copy; OpenStreetMap contributors'
}).addTo(map);

// 観光地データ
const spots = [

{
name:"名古屋城",
lat:35.1856,
lng:136.8991,
genre:"歴史"
},

{
name:"熱田神宮",
lat:35.1256,
lng:136.9086,
genre:"歴史"
},

{
name:"犬山城",
lat:35.3886,
lng:136.9391,
genre:"歴史"
},

{
name:"清洲城",
lat:35.2233,
lng:136.8527,
genre:"歴史"
},

{
name:"小牧山城",
lat:35.2923,
lng:136.9121,
genre:"歴史"
},

{
name:"岡崎城",
lat:34.9565,
lng:137.1584,
genre:"歴史"
},

{
name:"豊川稲荷",
lat:34.8268,
lng:137.3764,
genre:"歴史"
},

{
name:"ジブリパーク",
lat:35.1734,
lng:137.0907,
genre:"サブカル"
},

{
name:"名古屋港水族館",
lat:35.0909,
lng:136.8783,
genre:"ファミリー"
},

{
name:"東山動植物園",
lat:35.1562,
lng:136.9919,
genre:"自然"
},

{
name:"レゴランド",
lat:35.0487,
lng:136.8810,
genre:"レジャー"
},

{
name:"ラグーナテンボス",
lat:34.8075,
lng:137.2735,
genre:"レジャー"
},

{
name:"竹島",
lat:34.8154,
lng:137.2277,
genre:"自然"
},

{
name:"香嵐渓",
lat:35.1349,
lng:137.3081,
genre:"自然"
},

{
name:"茶臼山高原",
lat:35.2533,
lng:137.6627,
genre:"自然"
},

{
name:"乳岩峡",
lat:35.0017,
lng:137.5766,
genre:"自然"
},

{
name:"阿寺の七滝",
lat:34.9977,
lng:137.6058,
genre:"自然"
},

{
name:"伊良湖岬",
lat:34.5806,
lng:137.0178,
genre:"景観"
},

{
name:"恋路ヶ浜",
lat:34.5801,
lng:137.0201,
genre:"景観"
},

{
name:"佐久島",
lat:34.7178,
lng:137.0317,
genre:"アート"
},

{
name:"日間賀島",
lat:34.7100,
lng:136.9984,
genre:"自然"
},

{
name:"常滑やきもの散歩道",
lat:34.8854,
lng:136.8324,
genre:"文化"
},

{
name:"明治村",
lat:35.3647,
lng:136.9957,
genre:"文化"
},

{
name:"リトルワールド",
lat:35.3594,
lng:136.9864,
genre:"文化"
},

{
name:"日本モンキーパーク",
lat:35.3828,
lng:136.9455,
genre:"レジャー"
},

{
name:"大須商店街",
lat:35.1585,
lng:136.9066,
genre:"買い物"
},

{
name:"オアシス21",
lat:35.1709,
lng:136.9087,
genre:"買い物"
},

{
name:"JRセントラルタワーズ",
lat:35.1707,
lng:136.8816,
genre:"買い物"
},

{
name:"トヨタ産業技術記念館",
lat:35.1829,
lng:136.8766,
genre:"博物館"
},

{
name:"名古屋市科学館",
lat:35.1642,
lng:136.8990,
genre:"博物館"
},

{
name:"徳川美術館",
lat:35.1837,
lng:136.9307,
genre:"博物館"
},

{
name:"ミツカンミュージアム",
lat:34.8950,
lng:136.9340,
genre:"博物館"
},

{
name:"真清田神社",
lat:35.3030,
lng:136.8028,
genre:"歴史"
},

{
name:"138タワーパーク",
lat:35.3447,
lng:136.7938,
genre:"自然"
},

{
name:"一宮モーニング街",
lat:35.3039,
lng:136.8029,
genre:"グルメ"
},

{
name:"国府宮神社",
lat:35.2485,
lng:136.7807,
genre:"歴史"
},

{
name:"祖父江イチョウ並木",
lat:35.2708,
lng:136.7056,
genre:"自然"
},

{
name:"津島神社",
lat:35.1777,
lng:136.7417,
genre:"歴史"
},

{
name:"天王川公園",
lat:35.1770,
lng:136.7366,
genre:"自然"
},

{
name:"瀬戸蔵",
lat:35.2236,
lng:137.0847,
genre:"文化"
},

{
name:"招き猫ミュージアム",
lat:35.2232,
lng:137.0855,
genre:"文化"
},

{
name:"半田赤レンガ建物",
lat:34.8915,
lng:136.9298,
genre:"文化"
},

{
name:"MIZKAN MUSEUM",
lat:34.8950,
lng:136.9340,
genre:"博物館"
},

{
name:"西尾城",
lat:34.8638,
lng:137.0618,
genre:"歴史"
},

{
name:"西尾の抹茶体験",
lat:34.8615,
lng:137.0610,
genre:"グルメ"
},

{
name:"竹島水族館",
lat:34.8150,
lng:137.2263,
genre:"ファミリー"
},

{
name:"鳳来寺山",
lat:34.9990,
lng:137.5680,
genre:"自然"
},

{
name:"湯谷温泉",
lat:34.9894,
lng:137.5816,
genre:"温泉"
},

{
name:"鞍ヶ池公園",
lat:35.1165,
lng:137.1710,
genre:"自然"
},

{
name:"足助の町並み",
lat:35.1337,
lng:137.3122,
genre:"文化"
},

{
name:"菜の花ガーデン",
lat:34.6684,
lng:137.2671,
genre:"自然"
},

// さらに追加すると愛知全体かなり埋まる

{
name:"モリコロパーク",
lat:35.1746,
lng:137.0877,
genre:"自然"
},

{
name:"刈谷ハイウェイオアシス",
lat:35.0397,
lng:137.0045,
genre:"レジャー"
},

{
name:"デンパーク",
lat:34.9587,
lng:137.0833,
genre:"自然"
},

{
name:"安城産業文化公園",
lat:34.9585,
lng:137.0820,
genre:"文化"
},

{
name:"豊橋総合動植物公園",
lat:34.7415,
lng:137.3913,
genre:"ファミリー"
},

{
name:"のんほいパーク",
lat:34.7412,
lng:137.3910,
genre:"ファミリー"
},

{
name:"豊橋公園",
lat:34.7692,
lng:137.3915,
genre:"自然"
},

{
name:"豊橋カレーうどん",
lat:34.7690,
lng:137.3910,
genre:"グルメ"
},

{
name:"岡崎サービスエリア",
lat:34.9910,
lng:137.1737,
genre:"グルメ"
},

{
name:"えびせんべいの里",
lat:34.8072,
lng:136.9150,
genre:"グルメ"
},

{
name:"南知多温泉郷",
lat:34.7152,
lng:136.9360,
genre:"温泉"
},

{
name:"師崎港",
lat:34.7023,
lng:136.9388,
genre:"景観"
},

{
name:"恋人の聖地 野間灯台",
lat:34.7301,
lng:136.8760,
genre:"景観"
},

{
name:"蒲郡オレンジパーク",
lat:34.8222,
lng:137.2191,
genre:"グルメ"
},

{
name:"形原温泉",
lat:34.8315,
lng:137.1880,
genre:"温泉"
},

{
name:"三河工芸ガラス美術館",
lat:34.8617,
lng:137.0535,
genre:"文化"
},

{
name:"トヨタ会館",
lat:35.0824,
lng:137.1560,
genre:"博物館"
},

{
name:"四谷の千枚田",
lat:35.0320,
lng:137.6555,
genre:"自然"
},

{
name:"道の駅どんぐりの里いなぶ",
lat:35.2177,
lng:137.5032,
genre:"グルメ"
},

{
name:"設楽ダム周辺展望",
lat:35.1002,
lng:137.5638,
genre:"景観"
},

{
name:"渥美半島菜の花まつり",
lat:34.6688,
lng:137.2660,
genre:"自然"
},

{
name:"豊浜魚ひろば",
lat:34.7110,
lng:136.9328,
genre:"グルメ"
},

{
name:"セントレア スカイデッキ",
lat:34.8584,
lng:136.8054,
genre:"景観"
},

{
name:"Flight of Dreams",
lat:34.8598,
lng:136.8085,
genre:"レジャー"
},

{
name:"中部電力MIRAI TOWER",
lat:35.1708,
lng:136.9084,
genre:"景観"
},

{
name:"円頓寺商店街",
lat:35.1755,
lng:136.8870,
genre:"買い物"
},

{
name:"ノリタケの森",
lat:35.1798,
lng:136.8822,
genre:"文化"
},

{
name:"覚王山日泰寺",
lat:35.1672,
lng:136.9587,
genre:"歴史"
},

{
name:"別小江神社",
lat:35.2165,
lng:136.9141,
genre:"歴史"
},

{
name:"岡崎公園",
lat:34.9568,
lng:137.1582,
genre:"自然"
},

{
name:"豊田スタジアム",
lat:35.0843,
lng:137.1701,
genre:"レジャー"
},

{
name:"イオンモール常滑",
lat:34.8837,
lng:136.8413,
genre:"買い物"
},

]

let markers = [];

// マーカー表示
function displaySpots(data){

    markers.forEach(marker => {
        map.removeLayer(marker);
    });

    markers = [];

    // 表示範囲自動調整用
    const bounds = [];

    data.forEach(spot => {

        const marker = L.marker(
            [spot.lat, spot.lng]
        )

        .addTo(map)

        .bindPopup(`
            <div class="popup">
                <h3>${spot.name}</h3>
                <p>${spot.genre}</p>
            </div>
        `);

        markers.push(marker);

        bounds.push([spot.lat, spot.lng]);

    });

    // 検索後やジャンル選択後に自動ズーム
    if(bounds.length > 0){
        map.fitBounds(bounds, {
            padding:[50,50]
        });
    }
}

// ジャンル検索
function filterGenre(genre){

    const filtered = spots.filter(
        spot => spot.genre === genre
    );

    displaySpots(filtered);
}

// 検索機能
function searchSpot(){

    const keyword = document
    .getElementById('searchInput')
    .value
    .toLowerCase();

    const filtered = spots.filter(spot =>
        spot.name
        .toLowerCase()
        .includes(keyword)
    );

    displaySpots(filtered);
}

// 全表示
function showAll(){
    displaySpots(spots);
}

// スマホメニュー
function toggleMenu(){

    const info =
    document.querySelector('.info');

    info.classList.toggle('active');
}

// 初期表示
showAll();