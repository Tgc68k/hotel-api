
$(document).ready(function() {
    //アクセスするAPIの指定
    var url = "https://app.rakuten.co.jp/services/api/Travel/KeywordHotelSearch/20170426?applicationId=1084795862896551401&format=josn&keyword=西表島";
    $.getJSON(url, function(data) {

        /////////////////////////////////////////
        //都道府県名は resultの prefの中（データの後ろの方） Prefecture name is at the end of the data
  
        //htmlへ都道府県を追加   add prefecture name to the html
 

        /////////////////////////////////////////
        //観光地データのリストの取得   get attration data
        var attractionsData = data.hotels;

        //観光地データのリストの中から観光地データを一つずつ取得  get the attraction data one by one
        for (var i in attractionsData) {
            //リストへ追加する項目を生成  create an item to add the list
            $("#data").append('<div><a href="'+attractionsData[i].hotel[0].hotelBasicInfo.hotelInformationUrl+
            '">'+attractionsData[i].hotel[0].hotelBasicInfo.hotelName+
            '</a><br><p>'+ attractionsData[i].hotel[0].hotelBasicInfo.hotelSpecial +
            '</p><img src="'+attractionsData[i].hotel[0].hotelBasicInfo.hotelImageUrl +
            '"alt=""></img>'+
            '<img src="'+attractionsData[i].hotel[0].hotelBasicInfo.roomImageUrl + '"alt="" onerror="errorImg(this)"></img>'+
            '<br><p>'+attractionsData[i].hotel[0].hotelBasicInfo.address1+ attractionsData[i].hotel[0].hotelBasicInfo.address2 +
            '</p><p>アクセス:'+ attractionsData[i].hotel[0].hotelBasicInfo.access +
            '</p><p>TEL:'+ attractionsData[i].hotel[0].hotelBasicInfo.telephoneNo +'</p><br></div>')
           
        }

    });
});
