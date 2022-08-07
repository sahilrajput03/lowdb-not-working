import './App.css'
// https://github.com/typicode/lowdb/tree/main/examples#browser
import {LowSync, LocalStorage} from 'lowdb'

const adapter = new LocalStorage('db')
const db = new LowSync(adapter)

db.read()
db.data ||= {posts: []}

db.data.posts.push({title: 'lowdb'})

db.write()

// Works now!
console.log('got data:', db.data)

function App() {
	return (
		<div className='App'>
			Lorem ipsum dolor sit, amet consectetur adipisicing elit. Explicabo itaque quidem mollitia. Et iusto animi corporis, illo at ducimus dolor quos ipsam voluptatibus. Exercitationem ipsa quae nihil dolor. Earum nostrum blanditiis enim amet. Iure, aspernatur ipsa reprehenderit voluptas fuga possimus nobis voluptatibus a placeat nisi ducimus, temporibus vitae error soluta numquam atque ex nulla obcaecati tenetur doloribus illo natus! Culpa qui ducimus maiores quod illo sed animi doloremque saepe quasi recusandae veniam, illum mollitia eos assumenda. Doloribus possimus exercitationem enim, veniam repellendus impedit deserunt similique et harum doloremque vero dignissimos esse est quibusdam voluptates nihil, omnis rem maiores. Cupiditate quibusdam perferendis iusto, beatae repellendus voluptatem aut minima fuga officia veritatis? Ea, eaque quibusdam. Minus sed saepe qui quae consectetur totam odio distinctio maxime suscipit explicabo corporis consequuntur velit quod rerum ex hic harum
			perferendis eos provident, laborum mollitia! Maiores voluptas, nemo officia deserunt, dignissimos dolorem autem inventore ut nisi exercitationem qui. Laborum atque esse repudiandae illo sit at doloribus, nulla placeat deleniti recusandae fugiat omnis doloremque quia mollitia inventore voluptatibus a sequi! A sunt saepe, sapiente voluptatibus rerum error assumenda tenetur fugit, ipsum veritatis dignissimos autem obcaecati optio necessitatibus neque iste deleniti? Unde error dolore officiis ea perspiciatis ipsam quas!
		</div>
	)
}

export default App
