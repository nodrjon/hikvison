import logo from './logo.svg';
import './App.css';
import { Routes, Route } from "react-router-dom"
import Home from './pages/Home';
import Firmware from './pages/Firmware';
import Software from './pages/Software';
import Navbar from './components/Navbar';
import Dokuments from './pages/Dokuments';
import TemperatureScreening from './pages/TemperatureScreening';
import Vms from './pages/Vms';
import Hikvision from './pages/Hikvision';
import HiWatchValue from './pages/HiWatchValue';
import HiWatchPro from './pages/HiWatchPro';
import HiwatchEcoline from './pages/HiwatchEcoline';
import HiWatchCATC from './pages/HiWatchCATC';
import OnlyforWarehouse from './pages/OnlyforWarehouse';
import IVMS4200 from './pages/IVMS4200';
import HikvisionTools from './pages/HikvisionTools';
import Rdpartytools from './pages/Rdpartytools';
import HikCentral from './pages/HikCentral';
import SDK from './pages/SDK';
import Documentsdb from './pages/Documentsdb';
import Txt from './pages/Txt';
import Howtodocuments from './pages/Howtodocuments';
import Datasheets from './pages/Datasheets';
import Accessary from './pages/Accessary';
import Marketing from './pages/Маркетинговыематериалы';
import Materialsfordesign from './pages/Materialsfordesign';
import ThermalCamera from './pages/ThermalCamera';
import InstallationHowVideo from './pages/InstallationHowVideo';
import QuickInstallation from './pages/QuickInstallation';
import FirmwarePage from './pages/FirmwarePage';

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/Firmware/' element={<Firmware />} />
        <Route path='/Software/' element={<Software />} />
        <Route path='/Documents/' element={<Dokuments />} />
        <Route path='/Temperature Screening/' element={<TemperatureScreening />} />
        <Route path='/VMS/' element={<Vms />} />
        <Route path='/Firmware/Hikvision/' element={<Hikvision />} />
        <Route path='/Firmware/HiWatch Value/' element={<HiWatchValue />} />
        <Route path='/Firmware/HiWatch Pro/' element={<HiWatchPro />} />
        <Route path='/Firmware/Hiwatch Ecoline/' element={<HiwatchEcoline />} />
        <Route path='/Firmware/HiWatch-CATC/' element={<HiWatchCATC />} />
        <Route path='/Firmware/Only for Warehouse/' element={<OnlyforWarehouse />} />
        <Route path='/Software/iVMS-4200/' element={<IVMS4200 />} />
        <Route path='/Software/Hikvision Tools/' element={<HikvisionTools />} />
        <Route path='/Software/3rd party tools/' element={<Rdpartytools />} />
        <Route path='/Software/Hik-Central/' element={<HikCentral />} />
        <Route path='/Software/SDK/' element={<SDK />} />
        <Route path='/Documents/Documents db/' element={<Documentsdb />} />
        <Route path='/Documents/Documents db/txt' element={<Txt />} />
        <Route path='/Documents/How to documents/' element={<Howtodocuments />} />
        <Route path='/Documents/Datasheets/' element={<Datasheets />} />
        <Route path='/Documents/Accessary/' element={<Accessary />} />
        <Route path='/Documents/Маркетинговые материалы/' element={<Marketing/>} />
        <Route path='/Documents/ Материалы для проектирования/' element={<Materialsfordesign/>} />
        <Route path='/Temperature Screening/Thermal Camera/' element={<ThermalCamera />} />
        <Route path='/Temperature Screening/Thermal Camera/Installation&How to Video/' element={<InstallationHowVideo />} />
        <Route path='/Temperature Screening/Thermal Camera/Quick Installation&Configuration Guide/' element={<QuickInstallation />} />
        <Route path='/Temperature Screening/Thermal Camera/Firmware/' element={<FirmwarePage />} />
      </Routes>
    </div>
  );
}

export default App;
