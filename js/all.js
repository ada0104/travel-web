var travel = [];
var food = [
    {
        "name": "明輪蛋餅",
        "id": 10,
        "imgUrl": "photo/f01.jpg",
        "add": "台中市西屯區福星路546號",
        "money": 40
    },
    {
        "name": "好泰麫",
        "id": 11,
        "imgUrl": "photo/f02.jpg",
        "add": "台中市中區三民路二段3號",
        "money": 350
    },
    {
        "name": "鵝城",
        "id": 12,
        "imgUrl": "photo/f03.jpg",
        "add": "台中市中區中山路175巷4號",
        "money": 150
    },
    {
        "name": "謝氏早點",
        "id": 13,
        "imgUrl": "photo/f04.jpg",
        "add": "台中市繼光街136號",
        "money": 80
    },
    {
        "name": "台中肉圓",
        "id": 14,
        "imgUrl": "photo/f05.jpg",
        "add": "台中市南區復興路三段529號",
        "money": 50
    }
];
var hotel = [
    {
        "name": "逢甲文華道",
        "id": 15,
        "imgUrl": "photo/s01.jpg",
        "add": "台中市西屯區文華路138巷31號",
        "money": 50
    },
    {
        "name": "天韻精品旅館",
        "id": 16,
        "imgUrl": "photo/s02.jpg",
        "add": "台中市西屯區市政南一路307號",
        "money": 50
    },
    {
        "name": "綠宿行旅",
        "id": 17,
        "imgUrl": "photo/s03.jpg",
        "add": "台中市西區民生北路126號",
        "money": 50
    },
    {
        "name": "雲端商務旅館",
        "id": 18,
        "imgUrl": "photo/s04.jpg",
        "add": "台中市中區公園路36號",
        "money": 50
    },
    {
        "name": "台中麻吉住宿",
        "id": 19,
        "imgUrl": "photo/s05.jpg",
        "add": "台中市北區一中街179巷7號",
        "money": 50
    }
];
var view = [
    {
        "name": "審計新村",
        "id": 0,
        "imgUrl": "photo/v01.jpg",
        "add": "台中市西區民生路368巷2弄11號",
        "money": 300
    },
    {
        "name": "高美濕地",
        "id": 1,
        "imgUrl": "photo/v02.jpg",
        "add": "臺中市清水區大甲溪出海口",
        "money": 100
    },
    {
        "name": "中科落羽松",
        "id": 2,
        "imgUrl": "photo/v03.jpg",
        "add": "台中市西屯區光明路257號",
        "money": 0
    },
    {
        "name": "台中軟體園區",
        "id": 3,
        "imgUrl": "photo/v04.jpg",
        "add": "台中市大里區科技路1號",
        "money": 250
    },
    {
        "name": "彩虹眷村",
        "id": 4,
        "imgUrl": "photo/v05.jpg",
        "add": "台中市南屯區春安路56巷25號",
        "money": 100
    },
    {
        "name": "國家歌劇院",
        "id": 5,
        "imgUrl": "photo/v06.jpg",
        "add": "臺中市西屯區惠來路二段101號",
        "money": 200
    },
    {
        "name": "麗寶OUTLET MALL",
        "id": 6,
        "imgUrl": "photo/v07.jpg",
        "add": "台中市后里區福容路201號",
        "money": 3000
    },
    {
        "name": "旱溪夜市",
        "id": 7,
        "imgUrl": "photo/v08.jpg",
        "add": "台中市東區旱溪東路一段",
        "money": 1000
    },
    {
        "name": "粉紅情人橋",
        "id": 8,
        "imgUrl": "photo/v09.jpg",
        "add": "台中市北屯區部子路366號",
        "money": 0
    },
    {
        "name": "綠色瀑布",
        "id": 9,
        "imgUrl": "photo/v10.jpg",
        "add": "台中市龍井區龍新路18號",
        "money": 150
    }
];

$(document).ready(function () {
    $('.viewALL').html(loadData(view, '景點'));
    $('#view-tab').addClass('active');
    $('#view').addClass('show active');
});

// 按下景點nav
$('#view-tab').click(function (e) {
    e.preventDefault();
    console.log('view-tab');
    $('.viewALL').html(loadData(view, '景點'));
    $('#view-tab').addClass('active');
    $('#food-tab').removeClass('active');
    $('#hotel-tab').removeClass('active');
    $('#view').addClass('show active');
    $('#food').removeClass('show active');
    $('#hotel').removeClass('show active');
});

// 按下美食nav
$('#food-tab').click(function (e) {
    e.preventDefault();
    console.log('food-tab');
    $('.foodALL').html(loadData(food, '美食'));
    $('#view-tab').removeClass('active');
    $('#food-tab').addClass('active');
    $('#hotel-tab').removeClass('active');
    $('#view').removeClass('show active');
    $('#food').addClass('show active');
    $('#hotel').removeClass('show active');
});

// 按下住宿nav
$('#hotel-tab').click(function (e) {
    e.preventDefault();
    console.log('hotel-tab');
    $('.hotelALL').html(loadData(hotel, '住宿'));
    $('#view-tab').removeClass('active');
    $('#food-tab').removeClass('active');
    $('#hotel-tab').addClass('active');
    $('#view').removeClass('show active');
    $('#food').removeClass('show active');
    $('#hotel').addClass('show active');
});

// 加入行程按鈕
$(document).on('click', '.add', function (e) {
    e.preventDefault();
    addTravel(e);
    update();
});

// 全部清除按鈕
$('.delAll').click(function (e) {
    e.preventDefault();
    delAllTravel();
});

// 清除單一行程按鈕
$(document).on('click', '.delSingle', function (e) {
    e.preventDefault();
    console.log(1);
    delSingleTravel(e);
    update();
});

// 載入資料
function loadData(item, btnText) {
    let text = '';
    for (let i = 0; i < item.length; i++) {
        text += `<li>`;
        text += `<div class="uk-card uk-card-default">`;
        text += '<div class="uk-card-media-top">';
        text += `<img src="${item[i].imgUrl}" alt="${item[i].name}">`;
        text += '</div>';
        text += '<div class="uk-card-body">';
        text += `<h3 class="uk-card-title">${item[i].name}</h3>`;
        text += `<p style="font-size: 14px">地址 : ${item[i].add}</p>`;
        text += `<p style="font-size: 14px">金額 : ${item[i].money}</p>`;
        text += '<button type="button"';
        text += `data-name="${item[i].name}"`;
        text += `data-address="${item[i].add}"`;
        text += `data-money="${item[i].money}"`;
        text += `class="btn btn-info add">加入${btnText}</button>`;
        text += '</div>';
        text += '</div>';
        text += '</li>';
    }
    // $('.viewALL').html(text);
    $('.money').html('金額 : ' + sum());
    $('.travel').html('行程 : ' + showTravel());
    return text;
}

// 加入行程
function addTravel(e) {
    let viewName = e.target.dataset.name;
    let address = e.target.dataset.address;
    let money = e.target.dataset.money;
    travel.push({ viewName, address, money })
    console.log(travel);
}

// 更新畫面
function update() {
    $('.money').html('金額 : ' + sum());
    $('.travel').html('行程 : ' + showTravel());
}

// 金額加總
function sum() {
    if (travel == '') {
        return 0;
    }
    let sum = 0;
    for (let i = 0; i < travel.length; i++) {
        sum += parseInt(travel[i].money);
    }
    return sum;
}

// 顯示行程
function showTravel() {
    let text = '開始 <img src="photo/01.png" height="20" width="25">';
    for (let i = 0; i < travel.length; i++) {
        text += `${travel[i].viewName} `;
        text += `<button data-index="${i}" class="delSingle btn btn-outline-danger btn-sm">刪除</button>`
        text += ` <img src="photo/01.png" height="20" width="25">`;
    }
    text += '結束';
    return text;
}

// 清除行程
function delAllTravel() {
    travel.splice(0, travel.length);
    update();
}

// 清除單一行程
function delSingleTravel(e) {
    let viewId = e.target.dataset.index;
    console.log(viewId);
    travel.splice(viewId, 1);
}