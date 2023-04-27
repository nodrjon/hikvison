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
import DSK1T672T from './pages/DSK1T672T';
import V3232build210429 from './pages/V3232build210429';
import V3232build211029A from './pages/V3232build211029A';
import DSKC001 from './pages/DSKC001';
import V29build200714releasenotetxt from './pages/V29build200714releasenotetxt';
import HowtoPage2 from './pages/HowtoPage2';
import IVMS4200A from './pages/IVMS4200A';
import V32505 from './pages/V32505';
import HikCentralProfessional from './pages/HikCentralProfessional';
import SmartOnboardTempScreeningTerminal from './pages/SmartOnboardTempScreeningTerminal';
import Firmware2 from './pages/Firmware2';
import A20200901 from './pages/A20200901';
import Thermal from './pages/Thermal';
import Twoinone from './pages/Twoinone';
import HikCentral2 from './pages/HikCentral2';
import Download from './pages/Download';
import V160 from './pages/V160';
import Documentation from './pages/Documentation';
import HikCentral12 from './pages/HikCentral12';
import Howto from './pages/Howto';
import Blazer from './pages/Blazer';
import BlazerPro from './pages/BlazerPro';
import Download2 from './pages/Download2';
import BlazerPro21 from './pages/BlazerPro21';
import Documentation2 from './pages/Documentation2';
import BlazerPro21Doc from './pages/BlazerPro21Doc';
import BlazerExpress from './pages/BlazerExpress';
import BlazerExpress14 from './pages/BlazerExpress14';
import Download3 from './pages/Download3';
import Documentation3 from './pages/Documentation3';
import BlazerExpress14Doc from './pages/BlazerExpress14Doc';
import IPCamera from './pages/IPCamera';
import NVRIPregs from './pages/NVRIPregs';
import PTZ from './pages/PTZ';
import DVRTVIregs from './pages/DVRTVIregs';
import AccessControl2 from './pages/AccessControl2';
import Alarm from './pages/Alarm';
import Keyboards from './pages/Keyboards';
import Network from './pages/Network';
import Thermal2 from './pages/Thermal2';
import Storage2 from './pages/Storage';
import A2series2XXX from './pages/A2series2XXX';
import E3platform from './pages/E3platform';
import V55800210628safeversion from './pages/V55800210628safeversion';
import Readmetxt3 from './pages/Readmetxt3';
import E8platform from './pages/E8platform';
import A55800 from './pages/A55800';
import A571 from './pages/A571';
import A5712 from './pages/A5712';
import A572 from './pages/A572';
import A5720 from './pages/A5720';
import G0platform from './pages/G0platform';
import A5588200317 from './pages/A5588200317';
import A5588206010 from './pages/A5588206010';
import A5589210429 from './pages/A5589210429';
import G1fisheye29X5 from './pages/G1fisheye29X5';
import G1platform from './pages/G1platform';
import G1Mplatform from './pages/G1Mplatform';
import G3platform from './pages/G3platform';
import DS2CD2XX6G2 from './pages/DS2CD2XX6G2';
import A55800build211009 from './pages/A55800build211009';
import Modeltxt from './pages/Modeltxt';
import A55801build21105 from './pages/A55801build21105';
import G5platform from './pages/G5platform';
import V55801210727safeversion from './pages/V55801210727safeversion';
import V5710220830 from './pages/V5710220830';
import V5711220913 from './pages/V5711220913';
import V5711221009 from './pages/V5711221009';
import V5712221201 from './pages/V5712221201';
import V5712230131 from './pages/V5712230131';
import V5713230403 from './pages/V5713230403';
import V571211009 from './pages/V571211009';
import V572211109 from './pages/V572211109';
import Oldmodels from './pages/Oldmodels';
import R0Fisheye from './pages/R0Fisheye';
import R0platform from './pages/R0platform';
import R2platform from './pages/R2platform';
import R6platform from './pages/R6platform';
import TypeA6441 from './pages/TypeA6441';
import TypeB6446 from './pages/TypeB6446';
import TypeCplatformDS2CD7XXXDS2CD8XXX from './pages/TypeCplatformDS2CD7XXXDS2CD8XXX';
import WiFicamerawithUSB from './pages/WiFicamerawithUSB';
import DS2CD2U212Q21 from './pages/DS2CD2U212Q21';
import DS2CV2Q21FDIW28mmW from './pages/DS2CV2Q21FDIW28mmW';
import A3series3XXX from './pages/A3series3XXX';
import G1platform3XX5 from './pages/G1platform3XX5';
import G3platform3XX6G2 from './pages/G3platform3XX6G2';
import G5platform3xx6G2C from './pages/G5platform3xx6G2C';
import G5platform3xxG2P from './pages/G5platform3xxG2P';
import Aseries4XXX from './pages/Aseries4XXX';
import A5series5XXX from './pages/A5series5XXX';
import A6series6XXX from './pages/A6series6XXX';
import A7series7XXX from './pages/A7series7XXX';
import A8series8XXX from './pages/A8series8XXX';
import Other from './pages/Other';
import IVMS4200fullversion from './pages/IVMS4200fullversion';
import A3119 from './pages/A3119';
import A3705 from './pages/A3705';
import A3715 from './pages/A3715';
import A3804 from './pages/A3804';
import A3814 from './pages/A3814';
import A3904 from './pages/A3904';
import A3914 from './pages/A3914';
import IVMS4200AC from './pages/IVMS4200AC';
import B14010 from './pages/B14010';
import B1606 from './pages/B1606';
import B1613 from './pages/B1613';
import B1615 from './pages/B1615';
import B1616 from './pages/B1616';
import B1705 from './pages/B1705';
import B1715 from './pages/B1715';
import B1804 from './pages/B1804';
import B1814 from './pages/B1814';
import B1914 from './pages/B1914';
import IVMS4200formacosx from './pages/IVMS4200formacosx';
import V20010 from './pages/V20010';
import V20012 from './pages/V20012';
import V2009 from './pages/V2009';
import IVMS4200VideoWallclient from './pages/IVMS4200VideoWallclient';
import IVMS4200mobile from './pages/IVMS4200mobile';
import R7platform__3 from './pages/R7platform__3';
import V573220112 from './pages/V573220112';
import FirmwareIPCRaptorseriesEnV550170725 from './pages/FirmwareIPCRaptorseriesEnV550170725';
import FirmwareIPCRaptorseriesEnV555180111 from './pages/FirmwareIPCRaptorseriesEnV555180111';
import Firmware_IPC_Raptorseries_En_V5553180730 from './pages/Firmware_IPC_Raptorseries_En_V5553180730';
import Firmware_IPC_Raptorseries_En_V5582190220 from './pages/Firmware_IPC_Raptorseries_En_V5582190220';
import Firmware_IPC_Raptorseries_EnV5582190909 from './pages/Firmware_IPC_Raptorseries_EnV5582190909';
import G3platform3XX6G2_1 from './pages/G3platform3XX6G2_1';
import G3platform3XX6G2_2 from './pages/G3platform3XX6G2_2';
import G3platform3XX6G2_3 from './pages/G3platform3XX6G2_3';
import H0platform from './pages/H0platform';
import R1platform from './pages/R1platform';
import Камерывыпущенныедо201года from './pages/Камерывыпущенныедо201года';
import Камерывыпущенныепосле2012года from './pages/Камерывыпущенныепосле2012года';
import TyCText from './pages/TyCText';
import README_TyCTXT from './pages/README_TyCTXT';
import Html from './pages/Html';
import Model_wifi_txt from './pages/Model_wifi_txt';
import G3platform3XX6G2_text from './pages/G3platform3XX6G2_text';
import R1platform_r1 from './pages/R1platform_r1';
import R1platform_r2 from './pages/R1platform_r2';
import R1platform_r3 from './pages/R1platform_r3';
import R1platform_r4 from './pages/R1platform_r4';
import R3platform from './pages/R3platform';
import R3platform__1 from './pages/R3platform__1';
import R3platform__2 from './pages/R3platform__2';
import R4platform from './pages/R4platform';
import R4platform__1 from './pages/R4platform__1';
import R4platform__2 from './pages/R4platform__2';
import R7platform from './pages/R7platform';
import R7platform__1 from './pages/R7platform__1';
import R7platform__1_text from './pages/R7platform__1_text';
import R7platform__2 from './pages/R7platform__2';
import IPC_H0_ML_STD_545_170302 from './pages/IPC_H0_ML_STD_545_170302';
import ForWindows from './pages/ForWindows';
import Hikvisiontoolsmanager from './pages/Hikvisiontoolsmanager';
import BatchConfigTool from './pages/BatchConfigTool';
import SADP from './pages/SADP';
import LocalPlayback from './pages/LocalPlayback';
import RemoteBackup from './pages/RemoteBackup';
import ReleaseNotes from './pages/ReleaseNotes';
import C2006 from './pages/C2006';
import C3023 from './pages/C3023';
import C3038 from './pages/C3038';
import C3104 from './pages/C3104';
import C3122 from './pages/C3122';
import C3125 from './pages/C3125';
import C3005 from './pages/C3005';
import C3012 from './pages/C3012';
import V300301 from './pages/V300301';
import V3012 from './pages/V3012';
import VSPlayer from './pages/VSPlayer';
import V744 from './pages/V744';
import V7444 from './pages/V7444';
import Lensselection from './pages/Lensselection';
import C2041 from './pages/C2041';
import GUIemulator from './pages/GUIemulator';
import WebComponents from './pages/WebComponents';
import ForIPSpeaker from './pages/ForIPSpeaker';
import HikIPReceiverpro from './pages/HikIPReceiverpro';
import IseriesNVRfirmware from './pages/IseriesNVRfirmware';
import Speakerfirmware from './pages/Speakerfirmware';
import HikInforwebcams from './pages/HikInforwebcams';
import HikvisionCardDriver from './pages/HikvisionCardDriver';
import Driver_v25 from './pages/Driver_v25';
import DS4000Drv25x64 from './pages/DS4000Drv25x64';
import DS4000Drv25x86 from './pages/DS4000Drv25x86';
import Drivers_Old from './pages/Drivers_Old';
import HIKVISIONCardDriver2 from './pages/HIKVISIONCardDriver2';
import Vistax8632bitDriver from './pages/Vistax8632bitDriver';
import Win2000XP2003Driver from './pages/Win2000XP2003Driver';
import Hikvision4200CardDriver from './pages/Hikvision4200CardDriver';
import A32biWinOS from './pages/A32biWinOS';
import A64bitWinOS from './pages/A64bitWinOS';
import Hikvision4300CardDriver from './pages/Hikvision4300CardDriver';
import DS43xxDrvX64 from './pages/DS43xxDrvX64';
import DS43xxDrvX86 from './pages/DS43xxDrvX86';
import Driver_v23_x64_x86 from './pages/Driver_v23_x64_x86';
import DS4000Drv23x64 from './pages/DS4000Drv23x64';
import DS4000Drv23x86 from './pages/DS4000Drv23x86';
import Mib from './pages/Mib';
import Cameras from './pages/Cameras';
import ForMacosx from './pages/ForMacosx';
import SADP2 from './pages/SADP2';
import BatchConfigTool2 from './pages/BatchConfigTool2';
import VSPlayer2 from './pages/VSPlayer2';
import Storageandnetworkcalculator from './pages/Storageandnetworkcalculator';
import OnvifDeviceTestTool from './pages/OnvifDeviceTestTool';
import VisualC from './pages/VisualC';
import A2008 from './pages/A2008';
import A2013 from './pages/A2013';
import V2017 from './pages/V2017';
import Softwarepackage from './pages/Softwarepackage';
import A201 from './pages/A201';
import A221 from './pages/A221';
import A23 from './pages/A23';
import Kojuhi from './pages/Кожухи';

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
        <Route path='/Documents/Маркетинговые материалы/' element={<Marketing />} />
        <Route path='/Documents/ Материалы для проектирования/' element={<Materialsfordesign />} />
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
        <Route path='/Temperature Screening/Access Control/Firmware/DS-K1T672-T/' element={<DSK1T672T />} />
        <Route path='/Temperature Screening/Access Control/Firmware/DS-K1T672-T/V3.2.32_build210429/' element={<V3232build210429 />} />
        <Route path='/Temperature Screening/Access Control/Firmware/DS-K1T672-T/V3.2.32_build211029/' element={<V3232build211029A />} />
        <Route path='/Temperature Screening/Access Control/Firmware/DS-KC001/' element={<DSKC001 />} />
        <Route path='/Temperature Screening/Access Control/Firmware/DS-KC001/V2.1.9_build200714 release note.txt' element={<V29build200714releasenotetxt />} />
        <Route path='/Temperature Screening/Access Control/How to/' element={<HowtoPage2 />} />
        <Route path='/Temperature Screening/iVMS-4200/' element={<IVMS4200A />} />
        <Route path='/Temperature Screening/iVMS-4200/v3.2.50.5/' element={<V32505 />} />
        <Route path='/Temperature Screening/HikCentral Professional/' element={<HikCentralProfessional />} />
        <Route path='/Temperature Screening/Smart Onboard Temp Screening Terminal/' element={<SmartOnboardTempScreeningTerminal />} />
        <Route path='/Temperature Screening/Smart Onboard Temp Screening Terminal/Firmware/' element={<Firmware2 />} />
        <Route path='/Temperature Screening/Smart Onboard Temp Screening Terminal/Firmware/20200901/' element={<A20200901 />} />
        <Route path='/Temperature Screening/Smart Onboard Temp Screening Terminal/Firmware/20200901/Thermal/' element={<Thermal />} />
        <Route path='/Temperature Screening/Smart Onboard Temp Screening Terminal/Firmware/20200901/two in one/' element={<Twoinone />} />
        <Route path='/VMS/HikCentral/' element={<HikCentral2 />} />
        <Route path='/VMS/HikCentral/Download/' element={<Download />} />
        <Route path='/VMS/HikCentral/Download/V1.6.0/' element={<V160 />} />
        <Route path='/VMS/HikCentral/Documentation/' element={<Documentation />} />
        <Route path='/VMS/HikCentral/Documentation/HikCentral 1.2/' element={<HikCentral12 />} />
        <Route path='/VMS/HikCentral/How-to/' element={<Howto />} />
        <Route path='/VMS/Blazer/' element={<Blazer />} />
        <Route path='/VMS/Blazer/Blazer Pro/' element={<BlazerPro />} />
        <Route path='/VMS/Blazer/Blazer Pro/Download/' element={<Download2 />} />
        <Route path='/VMS/Blazer/Blazer Pro/Download/Blazer Pro 2.1/' element={<BlazerPro21 />} />
        <Route path='/VMS/Blazer/Blazer Pro/Documentation/' element={<Documentation2 />} />
        <Route path='/VMS/Blazer/Blazer Pro/Documentation/Blazer Pro 2.1/' element={<BlazerPro21Doc />} />
        <Route path='/VMS/Blazer/Blazer Express/' element={<BlazerExpress />} />
        <Route path='/VMS/Blazer/Blazer Express/Download/' element={<Download3 />} />
        <Route path='/VMS/Blazer/Blazer Express/Download/Blazer Express 1.4/' element={<BlazerExpress14 />} />
        <Route path='/VMS/Blazer/Blazer Express/Documentation/' element={<Documentation3 />} />
        <Route path='/VMS/Blazer/Blazer Express/Documentation/Blazer Express 1.4/' element={<BlazerExpress14Doc />} />
        <Route path='/Firmware/Hikvision/IP Camera/' element={<IPCamera />} />
        <Route path='/Firmware/Hikvision/NVR (IP regs)/' element={<NVRIPregs />} />
        <Route path='/Firmware/Hikvision/PTZ/' element={<PTZ />} />
        <Route path='/Firmware/Hikvision/DVR (TVI regs)/' element={<DVRTVIregs />} />
        <Route path='/Firmware/Hikvision/Video Intercom/' element={<DVRTVIregs />} />
        <Route path='/Firmware/Hikvision/Access Control/' element={<AccessControl2 />} />
        <Route path='/Firmware/Hikvision/Alarm/' element={<Alarm />} />
        <Route path='/Firmware/Hikvision/Keyboards/' element={<Keyboards />} />
        <Route path='/Firmware/Hikvision/Network/' element={<Network />} />
        <Route path='/Firmware/Hikvision/Thermal/' element={<Thermal2 />} />
        <Route path='/Firmware/Hikvision/Storage/' element={<Storage2 />} />
        <Route path='/Firmware/Hikvision/IP Camera/2 series - 2XXX/' element={<A2series2XXX />} />
        <Route path='/Firmware/Hikvision/IP Camera/2 series - 2XXX/E3 platform (2X23G0D-IW2 2X21G1-IDW12 2X21G0 2/' element={<E3platform />} />
        <Route path='/Firmware/Hikvision/IP Camera/2 series - 2XXX/E3 platform (2X23G0D-IW2 2X21G1-IDW12 2X21G0 2/V5.5.800 210628 safe version/' element={<V55800210628safeversion />} />
        <Route path='/Firmware/Hikvision/IP Camera/2 series - 2XXX/E3 platform (2X23G0D-IW2 2X21G1-IDW12 2X21G0 2/V5.5.800 210628 safe version/Readme.txt' element={<Readmetxt3 />} />
        <Route path='/Firmware/Hikvision/IP Camera/2 series - 2XXX/E8 platform (2CD2X23G0E(B))/' element={<E8platform />} />
        <Route path='/Firmware/Hikvision/IP Camera/2 series - 2XXX/E8 platform (2CD2X23G0E(B))/5.5.800/' element={<A55800 />} />
        <Route path='/Firmware/Hikvision/IP Camera/2 series - 2XXX/E8 platform (2CD2X23G0E(B))/5.7.1/' element={<A571 />} />
        <Route path='/Firmware/Hikvision/IP Camera/2 series - 2XXX/E8 platform (2CD2X23G0E(B))/5.7.12/' element={<A5712 />} />
        <Route path='/Firmware/Hikvision/IP Camera/2 series - 2XXX/E8 platform (2CD2X23G0E(B))/5.7.2/' element={<A572 />} />
        <Route path='/Firmware/Hikvision/IP Camera/2 series - 2XXX/E8 platform (2CD2X23G0E(B))/5.7.20/' element={<A5720 />} />
        <Route path='/Firmware/Hikvision/IP Camera/2 series - 2XXX/G0 platform (2X47G3E 2X451G1-IDW12)/' element={<G0platform />} />
        <Route path='/Firmware/Hikvision/IP Camera/2 series - 2XXX/G0 platform (2X47G3E 2X451G1-IDW12)/5.5.88 200317/' element={<A5588200317 />} />
        <Route path='/Firmware/Hikvision/IP Camera/2 series - 2XXX/G0 platform (2X47G3E 2X451G1-IDW12)/5.5.88 206010/' element={<A5588206010 />} />
        <Route path='/Firmware/Hikvision/IP Camera/2 series - 2XXX/G0 platform (2X47G3E 2X451G1-IDW12)/5.5.89 210429/' element={<A5589210429 />} />
        <Route path='/Firmware/Hikvision/IP Camera/2 series - 2XXX/G1 fisheye (29X5)/' element={<G1fisheye29X5 />} />
        <Route path='/Firmware/Hikvision/IP Camera/2 series - 2XXX/G1 platform (2XX5 2XX3 2XX7G1)/' element={<G1platform />} />
        <Route path='/Firmware/Hikvision/IP Camera/2 series - 2XXX/G1+M platform (2XX6G1)/' element={<G1Mplatform />} />
        <Route path='/Firmware/Hikvision/IP Camera/2 series - 2XXX/G3 platform (2XX6G2 2X41G2 2XX7G2 2XX6G0)/' element={<G3platform />} />
        <Route path='/Firmware/Hikvision/IP Camera/2 series - 2XXX/G3 platform (2XX6G2 2X41G2 2XX7G2 2XX6G0)/DS-2CD2XX6G2,2XX7G2 Models/' element={<DS2CD2XX6G2 />} />
        <Route path='/Firmware/Hikvision/IP Camera/2 series - 2XXX/G3 platform (2XX6G2 2X41G2 2XX7G2 2XX6G0)/DS-2CD2XX6G2,2XX7G2 Models/5.5.800 build 211009 safe version/' element={<A55800build211009 />} />
        <Route path='/Firmware/Hikvision/IP Camera/2 series - 2XXX/G3 platform (2XX6G2 2X41G2 2XX7G2 2XX6G0)/DS-2CD2XX6G2,2XX7G2 Models/5.5.800 build 211009 safe version/model.txt' element={<Modeltxt />} />
        <Route path='/Firmware/Hikvision/IP Camera/2 series - 2XXX/G3 platform (2XX6G2 2X41G2 2XX7G2 2XX6G0)/DS-2CD2XX6G2,2XX7G2 Models/5.5.801 build211105/' element={<A55801build21105 />} />
        <Route path='/Firmware/Hikvision/IP Camera/2 series - 2XXX/G5 platform (2xx3G2 2xx6G2(C) 2xx7G2(C)/' element={<G5platform />} />
        <Route path='/Firmware/Hikvision/IP Camera/2 series - 2XXX/G5 platform (2xx3G2 2xx6G2(C) 2xx7G2(C)/V5.5.801_210727 safe version/' element={<V55801210727safeversion />} />
        <Route path='/Firmware/Hikvision/IP Camera/2 series - 2XXX/G5 platform (2xx3G2 2xx6G2(C) 2xx7G2(C)/V5.7.10_220830/' element={<V5710220830 />} />
        <Route path='/Firmware/Hikvision/IP Camera/2 series - 2XXX/G5 platform (2xx3G2 2xx6G2(C) 2xx7G2(C)/V5.7.11_220913/' element={<V5711220913 />} />
        <Route path='/Firmware/Hikvision/IP Camera/2 series - 2XXX/G5 platform (2xx3G2 2xx6G2(C) 2xx7G2(C)/V5.7.11_221009/' element={<V5711221009 />} />
        <Route path='/Firmware/Hikvision/IP Camera/2 series - 2XXX/G5 platform (2xx3G2 2xx6G2(C) 2xx7G2(C)/V5.7.12_221201/' element={<V5712221201 />} />
        <Route path='/Firmware/Hikvision/IP Camera/2 series - 2XXX/G5 platform (2xx3G2 2xx6G2(C) 2xx7G2(C)/V5.7.12_230131/' element={<V5712230131 />} />
        <Route path='/Firmware/Hikvision/IP Camera/2 series - 2XXX/G5 platform (2xx3G2 2xx6G2(C) 2xx7G2(C)/V5.7.13_230403/' element={<V5713230403 />} />
        <Route path='/Firmware/Hikvision/IP Camera/2 series - 2XXX/G5 platform (2xx3G2 2xx6G2(C) 2xx7G2(C)/V5.7.1_211009 safe version/' element={<V571211009 />} />
        <Route path='/Firmware/Hikvision/IP Camera/2 series - 2XXX/G5 platform (2xx3G2 2xx6G2(C) 2xx7G2(C)/V5.7.2_211109/' element={<V572211109 />} />
        <Route path='/Firmware/Hikvision/IP Camera/2 series - 2XXX/G5 platform (2xx3G2 2xx6G2(C) 2xx7G2(C)/V5.7.3_220112/' element={<V573220112 />} />
        <Route path='/Firmware/Hikvision/IP Camera/2 series - 2XXX/Old models/' element={<Oldmodels />} />
        <Route path='/Firmware/Hikvision/IP Camera/2 series - 2XXX/Old models/R0 Fisheye(DS-2CD2942F-I(W)(S))/' element={<R0Fisheye />} />
        <Route path='/Firmware/Hikvision/IP Camera/2 series - 2XXX/Old models/R0 platform (2xx2)/' element={<R0platform />} />
        <Route path='/Firmware/Hikvision/IP Camera/2 series - 2XXX/Old models/R2 platform (2хх2 2mpx, 2xx0)/' element={<R2platform />} />
        <Route path='/Firmware/Hikvision/IP Camera/2 series - 2XXX/Old models/R6 platform (2X22FWD, 2X42FWD)/' element={<R6platform />} />
        {/* r6 ning ichki linklari */}
        <Route path='/Firmware/Hikvision/IP Camera/2 series - 2XXX/Old models/R6 platform (2X22FWD, 2X42FWD)/Firmware_IPC_Raptor series_En_V5.5.0 170725/' element={<FirmwareIPCRaptorseriesEnV550170725 />} />
        <Route path='/Firmware/Hikvision/IP Camera/2 series - 2XXX/Old models/R6 platform (2X22FWD, 2X42FWD)/Firmware_IPC_Raptor series_En_V5.5.5 180111/' element={<FirmwareIPCRaptorseriesEnV555180111 />} />
        <Route path='/Firmware/Hikvision/IP Camera/2 series - 2XXX/Old models/R6 platform (2X22FWD, 2X42FWD)/Firmware_IPC_Raptor series_En_V5.5.53 180730/' element={<Firmware_IPC_Raptorseries_En_V5553180730 />} />
        <Route path='/Firmware/Hikvision/IP Camera/2 series - 2XXX/Old models/R6 platform (2X22FWD, 2X42FWD)/Firmware_IPC_Raptor series_En_V5.5.82 190220/' element={<Firmware_IPC_Raptorseries_En_V5582190220 />} />
        <Route path='/Firmware/Hikvision/IP Camera/2 series - 2XXX/Old models/R6 platform (2X22FWD, 2X42FWD)/Firmware_IPC_Raptor series_En_V5.5.82 190909/' element={<Firmware_IPC_Raptorseries_EnV5582190909 />} />
        <Route path='/Firmware/Hikvision/IP Camera/2 series - 2XXX/Old models/TypeA(6441)/' element={<TypeA6441 />} />
        <Route path='/Firmware/Hikvision/IP Camera/2 series - 2XXX/Old models/TypeB(6446)/' element={<TypeB6446 />} />
        <Route path='/Firmware/Hikvision/IP Camera/2 series - 2XXX/Old models/TypeC platform - DS-2CD7XXX DS-2CD8XXX/' element={<TypeCplatformDS2CD7XXXDS2CD8XXX />} />
        {/* type c files */}
        <Route path='/Firmware/Hikvision/IP Camera/2 series - 2XXX/Old models/TypeC platform - DS-2CD7XXX DS-2CD8XXX/Камеры, выпущенные до 2012 года/' element={<Камерывыпущенныедо201года />} />
        <Route path='/Firmware/Hikvision/IP Camera/2 series - 2XXX/Old models/TypeC platform - DS-2CD7XXX DS-2CD8XXX/Камеры, выпущенные после 2012 года/' element={<Камерывыпущенныепосле2012года />} />
        <Route path='/Firmware/Hikvision/IP Camera/2 series - 2XXX/Old models/TypeC platform - DS-2CD7XXX DS-2CD8XXX/Камеры, выпущенные до 2012 года/text' element={<TyCText />} />
        <Route path='/Firmware/Hikvision/IP Camera/2 series - 2XXX/Old models/TypeC platform - DS-2CD7XXX DS-2CD8XXX/README.TXT/' element={<README_TyCTXT />} />
        <Route path='/Firmware/Hikvision/IP Camera/2 series - 2XXX/Old models/TypeC platform - DS-2CD7XXX DS-2CD8XXX/html' element={<Html />} />
        <Route path='/Firmware/Hikvision/IP Camera/2 series - 2XXX/WiFi camera with USB/' element={<WiFicamerawithUSB />} />
        <Route path='/Firmware/Hikvision/IP Camera/2 series - 2XXX/WiFi camera with USB/DS-2CD2U21_2Q21/' element={<DS2CD2U212Q21 />} />
        <Route path='/Firmware/Hikvision/IP Camera/2 series - 2XXX/WiFi camera with USB/DS-2CV2Q21FD-IW2.8mmW safe version/' element={<DS2CV2Q21FDIW28mmW />} />
        <Route path='/Firmware/Hikvision/IP Camera/2 series - 2XXX/WiFi camera with USB/DS-2CV2Q21FD-IW2.8mmW safe version/model_txt' element={<Model_wifi_txt />} />
        <Route path='/Firmware/Hikvision/IP Camera/3 series - 3XXX/' element={<A3series3XXX />} />
        <Route path='/Firmware/Hikvision/IP Camera/3 series - 3XXX/G1 platform (3XX5)/' element={<G1platform3XX5 />} />
        <Route path='/Firmware/Hikvision/IP Camera/3 series - 3XXX/G3 platform (3XX6G2)/' element={<G3platform3XX6G2 />} />
        <Route path='/Firmware/Hikvision/IP Camera/3 series - 3XXX/G3 platform (3XX6G2)/5.5.800 build210628 safe version/' element={<G3platform3XX6G2_1 />} />
        <Route path='/Firmware/Hikvision/IP Camera/3 series - 3XXX/G3 platform (3XX6G2)/5.5.800 build211009 safe version/' element={<G3platform3XX6G2_2 />} />
        <Route path='/Firmware/Hikvision/IP Camera/3 series - 3XXX/G3 platform (3XX6G2)/5.5.820 build220520 safe version/' element={<G3platform3XX6G2_3 />} />
        <Route path='/Firmware/Hikvision/IP Camera/3 series - 3XXX/G3 platform (3XX6G2)/5.5.800 build211009 safe version/text' element={<G3platform3XX6G2_text />} />
        <Route path='/Firmware/Hikvision/IP Camera/3 series - 3XXX/G5 platform (3xx6G2(C) 3xx7G2(C))/' element={<G5platform3xx6G2C />} />
        <Route path='/Firmware/Hikvision/IP Camera/3 series - 3XXX/G5 platform (3xxG2P)/' element={<G5platform3xxG2P />} />
        <Route path='/Firmware/Hikvision/IP Camera/4 series - 4XXX/' element={<Aseries4XXX />} />
        {/* ichki fayllar */}
        <Route path='/Firmware/Hikvision/IP Camera/4 series - 4XXX/H0 platform (40X5）/' element={<H0platform />} />
        <Route path='/Firmware/Hikvision/IP Camera/4 series - 4XXX/R1 platform (discontinued)/' element={<R1platform />} />
        {/* r1 uchun */}
        <Route path='/Firmware/Hikvision/IP Camera/4 series - 4XXX/H0 platform (40X5）/r1' element={<R1platform_r1 />} />
        <Route path='/Firmware/Hikvision/IP Camera/4 series - 4XXX/H0 platform (40X5）/r2' element={<R1platform_r2 />} />
        <Route path='/Firmware/Hikvision/IP Camera/4 series - 4XXX/H0 platform (40X5）/r3' element={<R1platform_r3 />} />
        <Route path='/Firmware/Hikvision/IP Camera/4 series - 4XXX/H0 platform (40X5）/r4' element={<R1platform_r4 />} />

        {/* r3 */}
        <Route path='/Firmware/Hikvision/IP Camera/4 series - 4XXX/R3 platform (4x26FWD)/' element={<R3platform />} />
        <Route path='/Firmware/Hikvision/IP Camera/4 series - 4XXX/H0 platform (40X5）/r3_1' element={<R3platform__1 />} />
        <Route path='/Firmware/Hikvision/IP Camera/4 series - 4XXX/H0 platform (40X5）/r3_2' element={<R3platform__2 />} />

        {/* r4 */}
        <Route path='/Firmware/Hikvision/IP Camera/4 series - 4XXX/R4 platform (4XX5 series)/' element={<R4platform />} />
        <Route path='/Firmware/Hikvision/IP Camera/4 series - 4XXX/H0 platform (40X5）/r4_1' element={<R4platform__1 />} />
        <Route path='/Firmware/Hikvision/IP Camera/4 series - 4XXX/H0 platform (40X5）/r4_2' element={<R4platform__2 />} />

        {/* r7 */}
        <Route path='/Firmware/Hikvision/IP Camera/4 series - 4XXX/>R7 platform (H.265 4X26EFWD, 4BX6, 4CX6, 4DX6, ..' element={<R7platform />} />
        <Route path='/Firmware/Hikvision/IP Camera/4 series - 4XXX/H0 platform (40X5）/r7_1' element={<R7platform__1 />} />
        <Route path='/Firmware/Hikvision/IP Camera/4 series - 4XXX/H0 platform (40X5）/r7_1_text' element={<R7platform__1_text />} />
        <Route path='/Firmware/Hikvision/IP Camera/4 series - 4XXX/H0 platform (40X5）/r7_2' element={<R7platform__2 />} />
        <Route path='/Firmware/Hikvision/IP Camera/4 series - 4XXX/H0 platform (40X5）/r7_3' element={<R7platform__3 />} />



        <Route path='/Firmware/Hikvision/IP Camera/4 series - 4XXX/H0 platform (40X5）/HBaseline' element={<IPC_H0_ML_STD_545_170302 />} />
        <Route path='/Firmware/Hikvision/IP Camera/5 series - 5XXX/' element={<A5series5XXX />} />
        <Route path='/Firmware/Hikvision/IP Camera/6 series - 6XXX/' element={<A6series6XXX />} />
        <Route path='/Firmware/Hikvision/IP Camera/7 series - 7XXX/' element={<A7series7XXX />} />
        <Route path='/Firmware/Hikvision/IP Camera/8 series - 8XXX/' element={<A8series8XXX />} />
        <Route path='/Firmware/Hikvision/IP Camera/Other/' element={<Other />} />
        <Route path='/Software/iVMS-4200/iVMS-4200 full version/' element={<IVMS4200fullversion />} />
        <Route path='/Software/iVMS-4200/iVMS-4200 full version/3.1.1.9/' element={<A3119 />} />
        <Route path='/Software/iVMS-4200/iVMS-4200 full version/3.7.0.5/' element={<A3705 />} />
        <Route path='/Software/iVMS-4200/iVMS-4200 full version/3.7.1.5/' element={<A3715 />} />
        <Route path='/Software/iVMS-4200/iVMS-4200 full version/3.8.0.4/' element={<A3804 />} />
        <Route path='/Software/iVMS-4200/iVMS-4200 full version/3.8.1.4/' element={<A3814 />} />
        <Route path='/Software/iVMS-4200/iVMS-4200 full version/3.9.0.4/' element={<A3904 />} />
        <Route path='/Software/iVMS-4200/iVMS-4200 full version/3.9.1.4/' element={<A3914 />} />
        <Route path='/Software/iVMS-4200/iVMS-4200 AC/' element={<IVMS4200AC />} />
        <Route path='/Software/iVMS-4200/iVMS-4200 AC/1.4.0.10/' element={<B14010 />} />
        <Route path='/Software/iVMS-4200/iVMS-4200 AC/1.6.0.6/' element={<B1606 />} />
        <Route path='/Software/iVMS-4200/iVMS-4200 AC/1.6.1.3/' element={<B1613 />} />
        <Route path='/Software/iVMS-4200/iVMS-4200 AC/1.6.1.5/' element={<B1615 />} />
        <Route path='/Software/iVMS-4200/iVMS-4200 AC/1.6.1.6/' element={<B1616 />} />
        <Route path='/Software/iVMS-4200/iVMS-4200 AC/1.7.0.5/' element={<B1705 />} />
        <Route path='/Software/iVMS-4200/iVMS-4200 AC/1.7.1.5/' element={<B1715 />} />
        <Route path='/Software/iVMS-4200/iVMS-4200 AC/1.8.0.4/' element={<B1804 />} />
        <Route path='/Software/iVMS-4200/iVMS-4200 AC/1.8.1.4/' element={<B1814 />} />
        <Route path='/Software/iVMS-4200/iVMS-4200 AC/1.9.1.4/' element={<B1914 />} />
        <Route path='/Software/iVMS-4200/iVMS-4200 for macosx/' element={<IVMS4200formacosx />} />
        <Route path='/Software/iVMS-4200/iVMS-4200 for macosx/V2.0.0.10/' element={<V20010 />} />
        <Route path='/Software/iVMS-4200/iVMS-4200 for macosx/V2.0.0.12/' element={<V20012 />} />
        <Route path='/Software/iVMS-4200/iVMS-4200 for macosx/V2.0.0.9/' element={<V2009 />} />
        <Route path='/Software/iVMS-4200/iVMS-4200 Video Wall client/' element={<IVMS4200VideoWallclient />} />
        <Route path='/Software/iVMS-4200/iVMS-4200 mobile/' element={<IVMS4200mobile />} />
        <Route path='/Software/Hikvision Tools/For Windows/' element={<ForWindows />} />
        <Route path='/Software/Hikvision Tools/For Windows/Hikvision tools manager/' element={<Hikvisiontoolsmanager />} />
        <Route path='/Software/Hikvision Tools/For Windows/BatchConfig Tool/' element={<BatchConfigTool />} />
        <Route path='/Software/Hikvision Tools/For Windows/SADP/' element={<SADP />} />
        <Route path='/Software/Hikvision Tools/For Windows/Local Playback/' element={<LocalPlayback />} />
        <Route path='/Software/Hikvision Tools/For Windows/Remote Backup/' element={<RemoteBackup />} />
        <Route path='/Software/Hikvision Tools/For Windows/SADP/Release Notes/' element={<ReleaseNotes />} />
        <Route path='/Software/Hikvision Tools/For Windows/BatchConfig Tool/2.0.0.6/' element={<C2006 />} />
        <Route path='/Software/Hikvision Tools/For Windows/BatchConfig Tool/3.0.2.3/' element={<C3023 />} />
        <Route path='/Software/Hikvision Tools/For Windows/BatchConfig Tool/3.0.3.8/' element={<C3038 />} />
        <Route path='/Software/Hikvision Tools/For Windows/BatchConfig Tool/3.1.0.4/' element={<C3104 />} />
        <Route path='/Software/Hikvision Tools/For Windows/BatchConfig Tool/3.1.2.2/' element={<C3122 />} />
        <Route path='/Software/Hikvision Tools/For Windows/BatchConfig Tool/3.1.2.5/' element={<C3125 />} />
        <Route path='/Software/Hikvision Tools/For Windows/Local Playback/3.0.0.5/' element={<C3005 />} />
        <Route path='/Software/Hikvision Tools/For Windows/Local Playback/3.0.1.2/' element={<C3012 />} />
        <Route path='/Software/Hikvision Tools/For Windows/Remote Backup/V3.0.0.301/' element={<V300301 />} />
        <Route path='/Software/Hikvision Tools/For Windows/Remote Backup/V3.0.1.2/' element={<V3012 />} />
        <Route path='/Software/Hikvision Tools/For Windows/VSPlayer/' element={<VSPlayer />} />
        <Route path='/Software/Hikvision Tools/For Windows/VSPlayer/v7.4.4/' element={<V744 />} />
        <Route path='/Software/Hikvision Tools/For Windows/VSPlayer/v7.4.4.4/' element={<V7444 />} />
        <Route path='/Software/Hikvision Tools/For Windows/Lens selection/' element={<Lensselection />} />
        <Route path='/Software/Hikvision Tools/For Windows/Lens selection/2.0.4.1/' element={<C2041 />} />
        <Route path='/Software/Hikvision Tools/For Windows/GUI emulator/' element={<GUIemulator />} />
        <Route path='/Software/Hikvision Tools/For Windows/WebComponents/' element={<WebComponents />} />
        <Route path='/Software/Hikvision Tools/For Windows/For IP Speaker/' element={<ForIPSpeaker />} />
        <Route path='/Software/Hikvision Tools/For Windows/Hik IP Receiver pro/' element={<HikIPReceiverpro />} />
        <Route path='/Software/Hikvision Tools/For Windows/For IP Speaker/I series NVR firmware/' element={<IseriesNVRfirmware />} />
        <Route path='/Software/Hikvision Tools/For Windows/For IP Speaker/Speaker firmware/' element={<Speakerfirmware />} />
        <Route path='/Software/Hikvision Tools/For Windows/Hik In - for webcams/' element={<HikInforwebcams />} />
        <Route path='/Software/Hikvision Tools/For Windows/Hikvision Card Driver/' element={<HikvisionCardDriver />} />
        <Route path='/Software/Hikvision Tools/For Windows/Hikvision Card Driver/Driver_v2.5/' element={<Driver_v25 />} />
        <Route path='/Software/Hikvision Tools/For Windows/Hikvision Card Driver/Driver_v2.5/DS4000Drv-2.5-x64/' element={<DS4000Drv25x64 />} />
        <Route path='/Software/Hikvision Tools/For Windows/Hikvision Card Driver/Driver_v2.5/DS4000Drv-2.5-x86/' element={<DS4000Drv25x86 />} />
        <Route path='/Software/Hikvision Tools/For Windows/Hikvision Card Driver/Drivers_Old/' element={<Drivers_Old />} />
        <Route path='/Software/Hikvision Tools/For Windows/Hikvision Card Driver/Drivers_Old/HIKVISION Card Driver/' element={<HIKVISIONCardDriver2 />} />
        <Route path='/Software/Hikvision Tools/For Windows/Hikvision Card Driver/Drivers_Old/HIKVISION Card Driver/Vista x86(32-bit) Driver/' element={<Vistax8632bitDriver />} />
        <Route path='/Software/Hikvision Tools/For Windows/Hikvision Card Driver/Drivers_Old/HIKVISION Card Driver/win2000XP2003 Driver/' element={<Win2000XP2003Driver />} />
        <Route path='/Software/Hikvision Tools/For Windows/Hikvision Card Driver/Drivers_Old/Hikvision 4200 Card Driver/' element={<Hikvision4200CardDriver />} />
        <Route path='/Software/Hikvision Tools/For Windows/Hikvision Card Driver/Drivers_Old/Hikvision 4200 Card Driver/32bit WinOS/' element={<A32biWinOS />} />
        <Route path='/Software/Hikvision Tools/For Windows/Hikvision Card Driver/Drivers_Old/Hikvision 4200 Card Driver/64bit WinOS/' element={<A64bitWinOS />} />
        <Route path='/Software/Hikvision Tools/For Windows/Hikvision Card Driver/Drivers_Old/Hikvision 4300 Card Driver/' element={<Hikvision4300CardDriver />} />
        <Route path='/Software/Hikvision Tools/For Windows/Hikvision Card Driver/Drivers_Old/Hikvision 4300 Card Driver/DS43xxDrv-X64/' element={<DS43xxDrvX64 />} />
        <Route path='/Software/Hikvision Tools/For Windows/Hikvision Card Driver/Drivers_Old/Hikvision 4300 Card Driver/DS43xxDrv-X86/' element={<DS43xxDrvX86 />} />
        <Route path='/Software/Hikvision Tools/For Windows/Hikvision Card Driver/Drivers_Old/driver_v2.3_x64_x86/' element={<Driver_v23_x64_x86 />} />
        <Route path='/Software/Hikvision Tools/For Windows/Hikvision Card Driver/Drivers_Old/driver_v2.3_x64_x86/DS4000Drv-2.3-x64/' element={<DS4000Drv23x64 />} />
        <Route path='/Software/Hikvision Tools/For Windows/Hikvision Card Driver/Drivers_Old/driver_v2.3_x64_x86/DS4000Drv-2.3-x86/' element={<DS4000Drv23x86 />} />
        <Route path='/Software/Hikvision Tools/For Windows/mib/' element={<Mib />} />
        <Route path='/Software/Hikvision Tools/For Windows/mib/Cameras/' element={<Cameras />} />
        <Route path='/Software/Hikvision Tools/For Macosx/' element={<ForMacosx />} />
        <Route path='/Software/Hikvision Tools/For Macosx/SADP/' element={<SADP2 />} />
        <Route path='/Software/Hikvision Tools/For Macosx/BatchConfig Tool/' element={<BatchConfigTool2 />} />
        <Route path='/Software/Hikvision Tools/For Macosx/VS Player/' element={<VSPlayer2 />} />
        <Route path='/Software/Hikvision Tools/For Macosx/Storage and network calculator/' element={<Storageandnetworkcalculator />} />
        <Route path='/Software/3rd party tools/Onvif Device Test Tool/' element={<OnvifDeviceTestTool />} />
        <Route path='/Software/3rd party tools/Visual C++/' element={<VisualC />} />
        <Route path='/Software/3rd party tools/Visual C++/2008/' element={<A2008 />} />
        <Route path='/Software/3rd party tools/Visual C++/2013/' element={<A2013 />} />
        <Route path='/Software/3rd party tools/Visual C++/2013/' element={<V2017 />} />
        <Route path='/Software/Hik-Central/Software package/' element={<Softwarepackage />} />
        <Route path='/Software/Hik-Central/Software package/2.0.1/' element={<A201 />} />
        <Route path='/Software/Hik-Central/Software package/2.2.1/' element={<A221 />} />
        <Route path='/Software/Hik-Central/Software package/2.3/' element={<A23 />} />
        <Route path='/Documents/Accessary/Кожухи/' element={<Kojuhi />} />
      </Routes>
    </div>
  );
}

export default App;
