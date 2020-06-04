import func from './firebaseConfig';

export default function writeDatabase(data) {
  const item = {
    name: data.name,
    price: data.price,
    img_url: data.img_url,
    desc: data.desc,
    colors: data.colors,
  }
  const writeItem = func.httpsCallable('writeProd');
  writeItem(item).then(function (result) {

    console.log(result.data);

  }).catch(function (error) {
    console.log(error)
  });
};

// export default function addProductItem() {
// db.collection('products').add({

//   name: document.getElementById('prodName').value,
//   price: document.getElementById('prodPrice').value,
//   img_url: document.getElementById('prodImg').value,
//   desc: document.getElementById('prodDesc').value,
  
// }).then(function(){
//   console.log('Item successfully added to collection');
// }).catch(function(error){
//   console.log('Error', error)
//   });
// };
