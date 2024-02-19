import { EditMessage } from './components/organisms/EditMessage';
import { NavBar } from './components/molecules/NavBar';
import { Header } from './components/atoms/Header';
import { Canva } from './components/organisms/Canva';
import { useSelector } from 'react-redux';
import { RootState } from './lib/store';
import '@/styles/globals.scss';

function App() {
  const activeTab = useSelector((state: RootState) => state.statesNode.activeTab.tab)
  return (
    <main className='app-main'>
      <NavBar />
      <div className='dynamic-contents'>
        <Header title='Create a Campaign'/>
        <div className='main-contents'>
          <EditMessage />
          {activeTab === 'edit message' && (
            <Canva />
          )}
        </div>
      </div>
    </main>
  );
}

export default App;
