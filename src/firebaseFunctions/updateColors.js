import func from "./firebaseConfig";

export default function updateColors(data) {
  const updateColors = func.httpsCallable("updateColors");
  updateColors(data)
    .then(function (result) {
      console.log(result.data);
    })
    .catch(function (error) {
      console.log(error);
    });
}
