import './App.css';
import { useGetUsersQuery } from './services/users';

function App() {
  const { data, error, isLoading, isSuccess, isError} = useGetUsersQuery('');
// console.log(data,"hello");
  return (
    <div className="App">
      <h1>Wellcome to React Reduk Toolkit RTK Query.</h1>
      { isLoading && "loading.." }      
      { isError && error.message }
      { isSuccess && data && data.map((user, i) => <h1 key={user.id }>{user.name}</h1>)}
  
    </div>
  );
}

export default App;
