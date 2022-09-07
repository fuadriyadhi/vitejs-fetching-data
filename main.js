import axios from 'axios';

//buat sebuah function untuk mendapatkan data dengan fetch

async function getUserData() {
  let res = await fetch('https://jsonplaceholder.typicode.com/users', {
    method: 'GET',
    headers: {
      'Content-Type': 'aplication/json',
    },
  });

  let data = await res.json();
  let user_tbody = document.getElementById('user_tbody');

  data.forEach((e) => {
    user_tbody.innerHTML += `
    <tr>
    <td> ${e.id} </td>
    <td> ${e.username} </td>
    <td> ${e.email} </td>
    <td> ${e.address.city} </td>
    <td> <button>Detail</button> </td>
    </tr>
    `;
  });

  console.info(data);
}

// getUserData();

//get data dengan axios
async function getUserData2() {
  let res = await axios.get('https://jsonplaceholder.typicode.com/users');
  let data = await res.data;

  let user_tbody = document.getElementById('user_tbody');

  data.forEach((e) => {
    user_tbody.innerHTML += `
    <tr>
    <td> ${e.id} </td>
    <td> ${e.username} </td>
    <td> ${e.email} </td>
    <td> ${e.address.city} </td>
    <td> <button onclick="handleDetail(${e.id})">Detail</button> </td>
    </tr>
    `;
  });
}

getUserData2();

// window.handleDetail = function (id) {
//   axios.get(`https://jsonplaceholder.typicode.com/users/${id}`).then((res) => {
//     console.info(res.data);
//     let data = res.data;
//     alert(`
//     username : ${data.username}
//     email : ${data.email}
//     city : ${data.address.city} `);
//   });
// };

window.handleDetail = async function (id) {
  let res = await axios.get(`https://jsonplaceholder.typicode.com/users/${id}`);
  let data = await res.data;
  alert(`
Username  : ${data.username}
Email     : ${data.email}
Address   : ${data.address.city}
  `);
};
