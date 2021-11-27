
function updateMap()
{
   fetch("/data.json")
   .then(response=> response.json())
   .then(rsp=>{
   
       rsp.data.forEach(element=>{
           latitude=element.latitude;
           longitude=element.longitude;
           cases = element.infected;
           if(cases>255){
            color ="rgb(232, 80, 70)";
           }
           else{
            color = `rgb( ${cases}, 0, 0)`;
           }
          ////
           new mapboxgl.Marker({
            draggable: false,
            color:color
            })
            .setLngLat([longitude, latitude])
            .addTo(map);

       })
   })

}
let interval =2000
setInterval(updateMap,interval);


