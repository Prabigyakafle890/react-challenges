
import PwInput from './components/pw_input'
import './index.css'
import GithubProfileFetcher from './components/github_profile_fetcher/GithubProfileFetcher'
import { useLocalStorage } from './components/useLocalStorageHook/hooks/useLocalStorage';
import { SearchableDropdown } from './components/SearchableDropdown';
import { UseReducerTodo } from './components/UseReducerTodo';
import { DragAndDropList } from './components/DragAndDropList';
import { Notes } from './components/Notes/Notes';
import { Users } from './components/UseFetch/Users';
import { CommandPalette } from './components/CommandPallete';

function App() {
 
const [LSValue, setLSValue] = useLocalStorage("ls", "");
  return (
    <>
      <Users/>
     <PwInput/>
     <GithubProfileFetcher/>
     <SearchableDropdown />
     <input placeholder="Enter something here" onChange={(e)=> setLSValue(e.target.value) } className='border p-5'/>
     <p>{LSValue}</p>
     <UseReducerTodo />
     <DragAndDropList/>
     <Notes/>
     <CommandPalette />
    
    </>
  )
}

export default App
