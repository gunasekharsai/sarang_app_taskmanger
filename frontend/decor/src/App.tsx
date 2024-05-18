
import './App.css'
import { Task } from './components/CreateTodo';
//import { Task } from './components/CreateTodo'
import { Gettodos} from './components/deleteTodo'
import {ApolloClient, InMemoryCache, ApolloProvider, HttpLink, from} from "@apollo/client"
import ChatBot from 'react-simple-chatbot'

const steps = [
  {
    id: '0',
    message: 'Hey, may I know your name?',
    trigger: '1',
  },
  {
    id: '1',
    user: true,
    trigger: '2',
  },
  {
    id: '2',
    message: 'Hi {previousValue}, how can I help you?',
    trigger: '3',
  },
  {
    id: '3',
    options: [
      { value: 'add', label: 'How to add todos', trigger: '4' },
      { value: 'delete', label: 'How to delete todos', trigger: '5' },
    ],
  },
  {
    id: '4',
    message: 'Click on the input that is under the title.',
    end: 0,
  },
  {
    id: '5',
    message: 'Click on the delete button next to the todo.',
    end: 0,
  },
];


const link = from([
  new HttpLink({uri:"http://localhost:3000/graphql"}),
]);
const client = new ApolloClient({
  link: link,
  cache:new InMemoryCache(),
  
})
function App() {

  return (
   <ApolloProvider client={client}>
    <Task/>
    <Gettodos/>
    <ChatBot  steps = {steps} floating = {true}/>
   </ApolloProvider>
  )
}

export default App

//   