import func from './firebaseConfig';

export default function delFromDatabase(id) {
  const data = {
    id: id,
  }
  const delProd = func.httpsCallable('delProd');
  delProd(data).then(function (result) {

    console.log(result);
    return result;

  }).catch(function (error) { 
    return error;
  });
};
