
$(this).ready(function () {
   var long;
   var lati;
   navigator.geolocation.getCurrentPosition(pose=>{
    long = pose.coords.longitude;
    lati = pose.coords.latitude;
    const proxy = 'https://cors-anywhere.herokuapp.com/'

     const api =`${proxy}https://api.darksky.net/forecast/9d36f2b7a5292cf4d3d125088075f40c/${lati},${long}`;
     fetch(api).then(resp=>{
         return resp.json();
     }).then(data=>{
         console.log(data);
         var da  = new Date();
         $("#fc").click(function() {
            if ($(this).html()=="C") {
                $(this).html("F");
                $(".degre").html((temperature).toFixed(0));
            }else{
                $(".degre").html(((temperature-32)*5/9).toFixed(0));
                $(this).html("C");
            }

        });
         const {temperature,summary,icon} = data.currently;
         $(".degre").html(((temperature-32)*5/9).toFixed(0));
         $(".discription").html(summary);
         iconset(icon,document.getElementById("icon1"));
        $(".loc-timezon").html(da.getHours()+" : "+da.getMinutes());
     })
   });
   function iconset (icon,iconId) {
    const Skycon = new Skycons({"color": "aliceblue"});
    const iconnow =  icon.replace(/-/g,"_").toUpperCase();
    Skycon.play();
    return Skycon.set(iconId,Skycons[iconnow]);
     }
});
