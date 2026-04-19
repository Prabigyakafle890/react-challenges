
import PwInput from './components/pw_input'
import './index.css'
import GithubProfileFetcher from './components/github_profile_fetcher/GithubProfileFetcher'
import { useLocalStorage } from './components/useLocalStorageHook/hooks/useLocalStorage';
import { SearchableDropdown } from './components/SearchableDropdown';

function App() {
 
const [LSValue, setLSValue] = useLocalStorage("ls", "");
  return (
    <>

     <PwInput/>
     <GithubProfileFetcher/>
     <SearchableDropdown />
     <input placeholder="Enter something here" onChange={(e)=> setLSValue(e.target.value) } className='border p-5'/>
     <p>{LSValue}</p>
    </>
  )
}

export default App
