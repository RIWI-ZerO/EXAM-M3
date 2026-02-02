const user={name: 'Nail caffrey'}
localStorage.setItem('user', JSON.stringify);

const data=localStorage.getItem('user');
const obj=JSON.parse(data);

localStorage.removeItem('user');
