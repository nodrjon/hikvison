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
import Firmwarefor12XXB26XXB from './pages/Firmwarefor12XXB26XXB';
import HandheldProducts from './pages/HandheldProducts';
import TP21B from './pages/TP21B';
import TP31B from './pages/TP31B';
import Readmetxt from './pages/Readmetxt';
import NVR from './pages/NVR';
import FirmwarePage2 from './pages/FirmwarePage2';
import DeepinMindNVR from './pages/DeepinMindNVR';
import Readmetxt2 from './pages/Readmetxt2';
import ISeriesNVR from './pages/ISeriesNVR';
import HowtoPage from './pages/HowtoPage';
import Video from './pages/Video';
import AccessControl from './pages/AccessControl';
import FirmwarePage3 from './pages/FirmwarePage3';
import DSK1T643T from './pages/DSK1T643T';
import V322build210331 from './pages/V322build210331';
import V3232build211029 from './pages/V3232build211029';
import V3235build220221 from './pages/V3235build220221';
import DSK1T671TM3XFDSK5604DSK5671DSK1TA70 from './pages/DSK1T671TM3XFDSK5604DSK5671DSK1TA70';
import V226build200629 from './pages/V226build200629';
import ARM from './pages/ARM';
import MCU from './pages/MCU';
import ThermalModule from './pages/ThermalModule';
import SupportedText from './pages/SupportedText';
import V226build200909 from './pages/V226build200909';
import ARM2 from './pages/ARM2';
import ThermalModule2 from './pages/ThermalModule2';
import V226build200927 from './pages/V226build200927';
import ARM3 from './pages/ARM3';
import ThermalModule3 from './pages/ThermalModule3';
import V226build201224 from './pages/V226build201224';
import ARM4 from './pages/ARM4';
import ThermalModule4 from './pages/ThermalModule4';
import ThermalModule4Text from './pages/ThermalModule4Text';
import V322build210207 from './pages/V322build210207';
import ARM5 from './pages/ARM5';
import MCU2 from './pages/MCU2';
import ThermalModule5 from './pages/ThermalModule5';
import ThermalModule5Text from './pages/ThermalModule5Text';
import V3232build210406 from './pages/V3232build210406';
import ARM6 from './pages/ARM6';
import MCU3 from './pages/MCU3';
import ThermalModule6 from './pages/ThermalModule6';
import ReleasenoteText from './pages/ReleasenoteText';
import V3232build210610 from './pages/V3232build210610';
import V3232build211101 from './pages/V3232build211101';
import V3232build220114 from './pages/V3232build220114';
import V3s235build220221 from './pages/V3s235build220221';
import V3235build220610 from './pages/V3235build220610';
import ExtensionModule from './pages/ExtensionModule';
import Text3 from './pages/Text3';

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
        <Route path='/Temperature Screening/Thermal Camera/Firmware/Firmware for 12XXB, 26XXB/' element={<Firmwarefor12XXB26XXB />} />
        <Route path='/Temperature Screening/Thermal Camera/Firmware/Firmware for Handheld Products/' element={<HandheldProducts />} />
        <Route path='/Temperature Screening/Thermal Camera/Firmware/Firmware for Handheld Products/TP21B/' element={<TP21B />} />
        <Route path='/Temperature Screening/Thermal Camera/Firmware/Firmware for Handheld Products/TP31B/' element={<TP31B />} />
        <Route path='/Temperature Screening/Thermal Camera/Firmware/Firmware for Handheld Products/TP31B/Read me.txt' element={<Readmetxt />} />
        <Route path='/Temperature Screening/NVR/' element={<NVR />} />
        <Route path='/Temperature Screening/NVR/Firmware/' element={<FirmwarePage2 />} />
        <Route path='/Temperature Screening/NVR/Firmware/DeepinMind NVR/' element={<DeepinMindNVR />} />
        <Route path='/Temperature Screening/NVR/Firmware/I Series NVR/' element={<ISeriesNVR />} />
        <Route path='/Temperature Screening/NVR/Firmware/DeepinMind NVR/Read me!!!!.txt' element={<Readmetxt2 />} />
        <Route path='/Temperature Screening/NVR/How to/' element={<HowtoPage />} />
        <Route path='/Temperature Screening/NVR/Video/' element={<Video />} />
        <Route path='/Temperature Screening/Access Control/' element={<AccessControl />} />
        <Route path='/Temperature Screening/Access Control/Firmware/' element={<FirmwarePage3 />} />
        <Route path='/Temperature Screening/Access Control/Firmware/DS-K1T643-T/' element={<DSK1T643T />} />
        <Route path='/Temperature Screening/Access Control/Firmware/DS-K1T643-T/V3.2.2_build210331/' element={<V322build210331 />} />
        <Route path='/Temperature Screening/Access Control/Firmware/DS-K1T643-T/V3.2.32_build211029/' element={<V3232build211029 />} />
        <Route path='/Temperature Screening/Access Control/Firmware/DS-K1T643-T/V3.2.35_build220221/' element={<V3235build220221 />} />
        <Route path='/Temperature Screening/Access Control/Firmware/DS-K1T671TM-3XF_DS-K5604_DS-K5671_DS-K1TA70/' element={<DSK1T671TM3XFDSK5604DSK5671DSK1TA70 />} />
        <Route path='/Temperature Screening/Access Control/Firmware/DS-K1T671TM-3XF_DS-K5604_DS-K5671_DS-K1TA70/V2.2.6_build200629/' element={<V226build200629 />} />
        <Route path='/Temperature Screening/Access Control/Firmware/DS-K1T671TM-3XF_DS-K5604_DS-K5671_DS-K1TA70/V2.2.6_build200629/ARM/' element={<ARM />} />
        <Route path='/Temperature Screening/Access Control/Firmware/DS-K1T671TM-3XF_DS-K5604_DS-K5671_DS-K1TA70/V2.2.6_build200629/MCU/' element={<MCU />} />
        <Route path='/Temperature Screening/Access Control/Firmware/DS-K1T671TM-3XF_DS-K5604_DS-K5671_DS-K1TA70/V2.2.6_build200629/Thermal Module/' element={<ThermalModule />} />
        <Route path='/Temperature Screening/Access Control/Firmware/DS-K1T671TM-3XF_DS-K5604_DS-K5671_DS-K1TA70/V2.2.6_build200629/Supported device models.txt' element={<SupportedText />} />
        <Route path='/Temperature Screening/Access Control/Firmware/DS-K1T671TM-3XF_DS-K5604_DS-K5671_DS-K1TA70/V2.2.6_build200909/' element={<V226build200909 />} />
        <Route path='/Temperature Screening/Access Control/Firmware/DS-K1T671TM-3XF_DS-K5604_DS-K5671_DS-K1TA70/V2.2.6_build200909/ARM/' element={<ARM2 />} />
        <Route path='/Temperature Screening/Access Control/Firmware/DS-K1T671TM-3XF_DS-K5604_DS-K5671_DS-K1TA70/V2.2.6_build200909/Thermal Module/' element={<ThermalModule2 />} />
        <Route path='/Temperature Screening/Access Control/Firmware/DS-K1T671TM-3XF_DS-K5604_DS-K5671_DS-K1TA70/V2.2.6_build200927/' element={<V226build200927 />} />
        <Route path='/Temperature Screening/Access Control/Firmware/DS-K1T671TM-3XF_DS-K5604_DS-K5671_DS-K1TA70/V2.2.6_build200927/ARM/' element={<ARM3 />} />
        <Route path='/Temperature Screening/Access Control/Firmware/DS-K1T671TM-3XF_DS-K5604_DS-K5671_DS-K1TA70/V2.2.6_build200927/Thermal Module/' element={<ThermalModule3 />} />
        <Route path='/Temperature Screening/Access Control/Firmware/DS-K1T671TM-3XF_DS-K5604_DS-K5671_DS-K1TA70/V2.2.6_build201224/' element={<V226build201224 />} />
        <Route path='/Temperature Screening/Access Control/Firmware/DS-K1T671TM-3XF_DS-K5604_DS-K5671_DS-K1TA70/V2.2.6_build201224/ARM/' element={<ARM4 />} />
        <Route path='/Temperature Screening/Access Control/Firmware/DS-K1T671TM-3XF_DS-K5604_DS-K5671_DS-K1TA70/V2.2.6_build201224/Thermal Module/' element={<ThermalModule4 />} />
        <Route path='/Temperature Screening/Access Control/Firmware/DS-K1T671TM-3XF_DS-K5604_DS-K5671_DS-K1TA70/V2.2.6_build201224/Thermal Module/Thermal Module Release Note_V5.5.4_build201107.txt' element={<ThermalModule4Text />} />
        <Route path='/Temperature Screening/Access Control/Firmware/DS-K1T671TM-3XF_DS-K5604_DS-K5671_DS-K1TA70/V3.2.2_build210207/' element={<V322build210207 />} />
        <Route path='/Temperature Screening/Access Control/Firmware/DS-K1T671TM-3XF_DS-K5604_DS-K5671_DS-K1TA70/V3.2.2_build210207/ARM/' element={<ARM5 />} />
        <Route path='/Temperature Screening/Access Control/Firmware/DS-K1T671TM-3XF_DS-K5604_DS-K5671_DS-K1TA70/V3.2.2_build210207/MCU/' element={<MCU2 />} />
        <Route path='/Temperature Screening/Access Control/Firmware/DS-K1T671TM-3XF_DS-K5604_DS-K5671_DS-K1TA70/V3.2.2_build210207/Thermal Module/' element={<ThermalModule5 />} />
        <Route path='/Temperature Screening/Access Control/Firmware/DS-K1T671TM-3XF_DS-K5604_DS-K5671_DS-K1TA70/V3.2.2_build210207/Thermal Module/Thermal Module Release Note_V5.5.4_ build201107.txt' element={<ThermalModule5Text />} />
        <Route path='/Temperature Screening/Access Control/Firmware/DS-K1T671TM-3XF_DS-K5604_DS-K5671_DS-K1TA70/V3.2.32_build210406/' element={<V3232build210406 />} />
        <Route path='/Temperature Screening/Access Control/Firmware/DS-K1T671TM-3XF_DS-K5604_DS-K5671_DS-K1TA70/V3.2.32_build210406/ARM(Controller)/' element={<ARM6 />} />
        <Route path='/Temperature Screening/Access Control/Firmware/DS-K1T671TM-3XF_DS-K5604_DS-K5671_DS-K1TA70/V3.2.32_build210406/MCU(Extension Module)/' element={<MCU3 />} />
        <Route path='/Temperature Screening/Access Control/Firmware/DS-K1T671TM-3XF_DS-K5604_DS-K5671_DS-K1TA70/V3.2.32_build210406/Thermal Module/' element={<ThermalModule6 />} />
        <Route path='/Temperature Screening/Access Control/Firmware/DS-K1T671TM-3XF_DS-K5604_DS-K5671_DS-K1TA70/V3.2.32_build210406/Release note.txt' element={<ReleasenoteText />} />
        <Route path='/Temperature Screening/Access Control/Firmware/DS-K1T671TM-3XF_DS-K5604_DS-K5671_DS-K1TA70/V3.2.32_build210610/' element={<V3232build210610 />} />
        <Route path='/Temperature Screening/Access Control/Firmware/DS-K1T671TM-3XF_DS-K5604_DS-K5671_DS-K1TA70/V3.2.32_build211101/' element={<V3232build211101 />} />
        <Route path='/Temperature Screening/Access Control/Firmware/DS-K1T671TM-3XF_DS-K5604_DS-K5671_DS-K1TA70/V3.2.32_build220114/' element={<V3232build220114 />} />
        <Route path='/Temperature Screening/Access Control/Firmware/DS-K1T671TM-3XF_DS-K5604_DS-K5671_DS-K1TA70/V3.2.35_build220221/' element={<V3s235build220221 />} />
        <Route path='/Temperature Screening/Access Control/Firmware/DS-K1T671TM-3XF_DS-K5604_DS-K5671_DS-K1TA70/V3.2.35_build220610/' element={<V3235build220610 />} />
        <Route path='/Temperature Screening/Access Control/Firmware/DS-K1T671TM-3XF_DS-K5604_DS-K5671_DS-K1TA70/V3.2.35_build220610/Extension Module/' element={<ExtensionModule />} />
        <Route path='/Temperature Screening/Access Control/Firmware/DS-K1T671TM-3XF_DS-K5604_DS-K5671_DS-K1TA70/V3.2.35_build220610/Extension Module/新建文本文档.txt' element={<Text3 />} />
      </Routes>
    </div>
  );
}

export default App;
