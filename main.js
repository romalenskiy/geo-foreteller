const firebaseConfig = {
  apiKey: "AIzaSyB4mAUgJXztihM0IF-DZTufAJZG__BZkKM",
  authDomain: "geo-foreteller.firebaseapp.com",
  databaseURL: "https://geo-foreteller.firebaseio.com",
  projectId: "geo-foreteller",
  storageBucket: "geo-foreteller.appspot.com",
  messagingSenderId: "703068286849",
  appId: "1:703068286849:web:c1053633bc613363250280"
};

firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();

const predictions = [
  'Проблема не там, где Вам кажется.',
  'Вы — на верном пути!',
  'Пришло время закончить старое и начать новое.',
  'Размышляйте и не спешите с действиями.',
  'Хорошие новости придут к вам по почте.',
  'Природа, время и терпение - три великих врача.',
  'Предложение, которое Вам сделают, Вас не устроит.',
  'Будьте внимательны к подсказкам судьбы.',
  'Пришло время действовать!',
  'То, к чему Вы стремитесь, не стоит ваших усилий.',
  'Делайте то, чего просит душа и тело.',
  'Готовьтесь к романтическим приключениям.'
]

const getFormData = () => ({
  name: document.querySelector('#geo_form_name').value,
  city: document.querySelector('#geo_form_city').value,
  street: document.querySelector('#geo_form_street').value,
  house: document.querySelector('#geo_form_house').value,
  building: document.querySelector('#geo_form_building').value,
  apartment: document.querySelector('#geo_form_apartment').value,
});

const geoForm = document.querySelector('.GeoForm');
geoForm.addEventListener('submit', (event) => {
  event.preventDefault();

  const prediction = predictions[Math.floor(Math.random() * predictions.length)]
  alert(prediction)

  db.collection('data').add(getFormData())
});