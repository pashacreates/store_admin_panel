import func from './firebaseConfig';

export default function editProduct(data) {
  const newData = {
    id: data.id,
    name: data.name,
    price: data.price,
    img_url: data.img_url,
    desc: data.desc,
  }
  const editProd = func.httpsCallable('editProd');
  editProd(newData).then(function (result) {
    console.log(result.data)
    return result.data;

  }).catch(function (error) {
    console.log(error)
  });
};
