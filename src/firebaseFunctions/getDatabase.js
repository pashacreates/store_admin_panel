import func from './firebaseConfig'


export default function getDatabase(data) {
  //в parametrs указываем параметры запроса  
  let parametrs = {
    name: null, 
    maxPrice: null,
    minPrice: null, 
    pageNumber: data.pageNumber, 
    itemOnPage: 20, 
    sortByPrice: '' //'decrease' or 'increase' - ключевые слова
  }
  if(data.itemOnPage){
    parametrs.itemOnPage = data.itemOnPage;
  }
  const getProd = func.httpsCallable('getProd');
  return getProd(parametrs).then(
    function (result) {
      console.log(result);
      return result.data;
    }
  ).catch(function (error) { console.log(error) });
};

