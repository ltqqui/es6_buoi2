// function getGlasses(){
//     let promise =axios({
//         url:'../data/data.txt',
//         method:'GET',
//         responseType:'text'
//     })
//     promise.then(function(result){
//         console.log(result.data);
//         renderGlasses(result.data);
//     })
//     promise.catch(function(err){
//         console.log('err');
//     })
// }
// getGlasses();

// function renderGlasses(arrGlasses){
//     let html="";
//     for(let i=0;i<arrGlasses.length;i++){
//         let glass=arrGlasses[i];
//         html=`
//         <img src="${glass.src}" alt="">
//         `
//     }
//     document.querySelector('#glassesList').innerHTML=html;
// }

