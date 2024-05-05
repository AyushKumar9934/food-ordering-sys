let allburger;

function getMenu(){
    return fetch("https://raw.githubusercontent.com/saksham-accio/f2_contest_3/main/food.json").then(response=>response.json()).then(data=>{console.log(data)
     return data;
    });
    
   
}
window.onload = function() {
    getMenu().then(data=>TakeOrder(data)).then(orderPrep ).then(payOrder).then(thankyouFun);
  };
//getMenu().then(data=>TakeOrder(data));
 function TakeOrder(data){
    //console.log("data in take order",data);
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{

            const order = data.sort(()=>Math.random()-0.5).slice(0,3);
      console.log(order);
      resolve(order);
        },2500)

    })
 }
 function orderPrep() {
   return new Promise((resolve,reject)=>{
    setTimeout(()=>{
        console.log({order_status:true,paid:false})
        resolve(({order_status:true,paid:false}))
    },1500)
   })
 }
 function payOrder(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            console.log({order_status:true,paid:true})
            resolve(({order_status:true,paid:true}))
        },1000)
    })
 }
 function thankyouFun(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve(    alert("thankyou for eating with us today!"));
        })
    },0)
   
 }