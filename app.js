const form =document.querySelector('#form1');
const res =document.querySelector('#tbres');
var update;
form.addEventListener('submit',(e)=>{
    
    e.preventDefault();
    if(update){
        clearTimeout(update);
    }
     const ctype= form.elements.cointype.value;
     
     fetchPrice(ctype);
});
const fetchPrice= async(ctype) =>{
    const r = await axios.get(`https://api.coinstats.app/public/v1/coins/${ctype}?currency=USD`);
    const price = r.data.coin.price;
    const volumn = r.data.coin.volume;
    const change = r.data.coin.priceChange1d;
    const base = r.data.coin.name;
    const target = 'USD';

    res.innerHTML=`<tr style ="background-color:orange; color:white; font-weight;700">
    <td>
        <b>Property</b>
    </td>
    <td>
        <b>Value</b>
    </td>
</tr>
<tr>
    <td>
        ${base}
    </td>
    <td>
        ${price} 
    </td>
</tr>
<tr>
    <td>
        volume
    </td>
    <td >
        ${volumn}
    </td>
</tr>
<tr>
    <td>
        change
    </td>
    <td >
        ${change}
    </td>
</tr>`

   update= setTimeout(()=>fetchPrice(ctype),10000);
}
