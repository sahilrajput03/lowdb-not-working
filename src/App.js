import './App.css'
// https://github.com/typicode/lowdb/tree/main/examples#browser
import {LowSync, LocalStorage} from 'lowdb'

const adapter = new LocalStorage('db')
const db = new LowSync(adapter)

db.read()
db.data ||= {posts: []}

db.data.posts.push({title: 'lowdb'})

db.write()

function App() {
	return <div className='App'></div>
}

export default App
