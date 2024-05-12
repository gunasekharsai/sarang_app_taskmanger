
import './App.css'
import { Task } from './components/CreateTodo';
//import { Task } from './components/CreateTodo'
import { Gettodos} from './components/Todo'
import {ApolloClient, InMemoryCache, ApolloProvider, HttpLink, from} from "@apollo/client"




const link = from([
  new HttpLink({uri:"http://localhost:3000/graphql"}),
]);
const client = new ApolloClient({
  cache:new InMemoryCache(),
  link: link
})
function App() {

  return (
   <ApolloProvider client={client}>
    <Task/>
    <Gettodos/>
   </ApolloProvider>
  )
}

export default App

//   