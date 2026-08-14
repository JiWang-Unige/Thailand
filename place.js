document.addEventListener('DOMContentLoaded',()=>{
  const root=document.querySelector('#standalonePlace');
  const trip=window.THAILAND_TRIP;
  const id=new URLSearchParams(location.search).get('id');
  const place=trip?.p(id);
  if(!place){
    document.title='没有找到这个地点｜Thailand 2026';
    root.innerHTML='<div class="missing-place"><p class="eyebrow">PLACE NOT FOUND</p><h1>这个地点还没有准备好</h1><p>可能是链接少了一部分。我们先回地图，再从地点圆点打开。</p><a class="button primary" href="index.html#map-section">回到全部地点</a></div>';
    return;
  }
  document.title=`${place.name}｜Thailand 2026`;
  root.innerHTML=trip.detailMarkup(place,{standalone:true});
});
