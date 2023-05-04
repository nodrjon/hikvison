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
import A5series5XXX_1 from './pages/A5series5XXX_1';
import A5series5XXX_1_3 from './pages/A5series5XXX_1_1';
import A5series5XXX_1_2 from './pages/A5series5XXX_1_2';
import A6series6XXX_1_1 from './pages/A6series6XXX_1_1';
import A6series6XXX_1_p1 from './pages/A6series6XXX_1_p1';
import A6series6XXX_1_p2 from './pages/A6series6XXX_1_p2';
import KRonshteyni from './pages/Кронштейны';
import Obektiv from './pages/Объективы';
import IVMS_4200 from './pages/IVMS_4200';
import P2pegionproblemsolution from './pages/P2pegionproblemsolution';
import Run_error_randomly_on_the_process_of_loading from './pages/Run_error_randomly_on_the_process_of_loading';
import Hik_Connect from './pages/Hik_Connect';
import Storage_2 from './pages/Storage2';
import VideoIntercom2 from './pages/VideoIntercom2';
import First_gen_devicesV151 from './pages/First_gen_devicesV151';
import HiWatch from './pages/HiWatch';
import Protocol10 from './pages/Protocol10';
import Protocol_20 from './pages/Protocol_20';
import AccessControl3 from './pages/AccessControl3';
import A1080Lite from './pages/A1080Lite';
import POS from './pages/POS';
import DobavleniepoRTSP from './pages/ДобавлениепоRTSP';
import Noviy_katalog from './pages/Новыйкаталог';
import Elementi_Firmenno from './pages/Элементыфирменногостиля';
import Materialidlyap from './pages/Материалыдляпроектирования';
import HikvisionnanoCAD from './pages/HikvisionnanoCAD';
import V5526build200507 from './pages/V5526build200507';
import V5526build200608 from './pages/V5526build200608';
import V5526build200708 from './pages/V5526build200708';
import V5526build200917 from './pages/V5526build200917';
import V5532build201028 from './pages/V5532build201028';
import V5532build201229WinterVersion from './pages/V5532build201229WinterVersion';
import V5534build210123 from './pages/V5534build210123';
import V5534build210402 from './pages/V5534build210402';
import V5534build210702safeversion from './pages/V5534build210702safeversion';
import V5534build211012 from './pages/V5534build211012';

// import V5534build211012 from './pages/V5534build211012';
import NVRIPregs_K from './pages/NVRIPregs_K';
import NVRIPregs_K_1 from './pages/NVRIPregs_K_1';
import NVRIPregs_K_2 from './pages/NVRIPregs_K_2';
import NVRIPregs_K_2_1 from './pages/NVRIPregs_K_2_1';
import NVRIPregs_K_2_2 from './pages/NVRIPregs_K_2_2';
import NVRIPregs_K_2_3 from './pages/NVRIPregs_K_2_3';
import NVRIPregs_K_2_4 from './pages/NVRIPregs_K_2_4';
import NVRIPregs_K_2_5 from './pages/NVRIPregs_K_2_5';
import NVRIPregs_K_2_6 from './pages/NVRIPregs_K_2_6';
import NVRIPregs_K_2_7 from './pages/NVRIPregs_K_2_7';
import NVRIPregs_K_3 from './pages/NVRIPregs_K_3';
import NVRIPregs_K_3_1 from './pages/NVRIPregs_K_3_1';
import NVRIPregs_K_3_2 from './pages/NVRIPregs_K_3_2';
import NVRIPregs_K_3_3 from './pages/NVRIPregs_K_3_3';
import NVRIPregs_K_3_4 from './pages/NVRIPregs_K_3_4';
import NVRIPregs_K_3_5 from './pages/NVRIPregs_K_3_5';
import NVRIPregs_K_3_6 from './pages/NVRIPregs_K_3_6';
import NVRIPregs_K_3_7 from './pages/NVRIPregs_K_3_7';
import NVRIPregs_K_4 from './pages/NVRIPregs_K_4';
import NVRIPregs_K_4_1 from './pages/NVRIPregs_K_4_1';
import NVRIPregs_K_4_2 from './pages/NVRIPregs_K_4_2';
import NVRIPregs_K_4_3 from './pages/NVRIPregs_K_4_3';
import NVRIPregs_K_4_4 from './pages/NVRIPregs_K_4_4';
import NVRIPregs_K_4_5 from './pages/NVRIPregs_K_4_5';
import NVRIPregs_K_4_6 from './pages/NVRIPregs_K_4_6';
import NVRIPregs_K_4_7 from './pages/NVRIPregs_K_4_7';
import NVRIPregs_K_4_8 from './pages/NVRIPregs_K_4_8';
import NVRIPregs_K_4_9 from './pages/NVRIPregs_K_4_9';
import NVRIPregs_K_4_10 from './pages/NVRIPregs_K_4_10';
import NVRIPregs_K_4_11 from './pages/NVRIPregs_K_4_11';
import NVRIPregs_K_5 from './pages/NVRIPregs_K_5';
import NVRIPregs_M from './pages/NVRIPregs_M';
import NVRIPregs_I from './pages/NVRIPregs_I';



import A6series6XXX_2_1 from './pages/A6series6XXX_2_1';
import A6series6XXX_2_1_1 from './pages/A6series6XXX_2_1_1';
import A6series6XXX_h7 from './pages/A6series6XXX_h7';
import A6series6XXX_h7_1 from './pages/A6series6XXX_h7_1';
import A6series6XXX_r4 from './pages/A6series6XXX_r4';
import A6series6XXX_r4_2 from './pages/A6series6XXX_r4_2';
import A7series7XXX_1 from './pages/A7series7XXX_1';
import A7series7XXX_h3_1 from './pages/A7series7XXX_h3_1';
import A7series7XXX_h3_2 from './pages/A7series7XXX_h3_2';
import A7series7XXX_2 from './pages/A7series7XXX_2';
import A7series7XXX_h7_1 from './pages/A7series7XXX_h7_1';
import A7series7XXX_h7_2 from './pages/A7series7XXX_h7_2';
import A7series7XXX_3 from './pages/A7series7XXX_3';
import A7series7XXX_h8_1 from './pages/A7series7XXX_h8_1';
import A7series7XXX_h8_2 from './pages/A7series7XXX_h8_2';
import A7series7XXX_h8_3 from './pages/A7series7XXX_h8_3';
import A8series8XXX_1 from './pages/A8series8XXX_1';
import A8series8XXX_1_1 from './pages/A8series8XXX_1_1';
import A8series8XXX_h3_1 from './pages/A8series8XXX_h3_1';
import Other_1 from './pages/Other_1';
import Other_2 from './pages/Other_2';
import Other_1_p1 from './pages/Other_1_p1';
import Other_1_p2 from './pages/Other_1_p2';
import Other_1_p3 from './pages/Other_1_p3';
import Other_1_p4 from './pages/Other_1_p4';
import Other_1_p1_1 from './pages/Other_1_p1_1';
import Other_1_p4_1 from './pages/Other_1_p4_1';
import Other_1_p4_2 from './pages/Other_1_p4_2';
import Other_1_p4_3 from './pages/Other_1_p4_3';
import Other_1_p4_4 from './pages/Other_1_p4_4';
import Other_1_p4_5 from './pages/Other_1_p4_5';
import Other_2_1 from './pages/Other_2_1';
import Other_2_2 from './pages/Other_2_2';
import Other_2_2_1 from './pages/Other_2_2_1';
import Other_2_2_2 from './pages/Other_2_2_2';
import Other_2_2_1_1 from './pages/Other_2_2_1_1';
import Other_2_2_1_2 from './pages/Other_2_2_1_2';
import Other_2_2_1_3 from './pages/Other_2_2_1_3';
import Other_2_2_2_1 from './pages/Other_2_2_2_1';
import Other_2_2_2_2 from './pages/Other_2_2_2_2';
import DS2CD2123G0EIB from './pages/DS2CD2123G0EIB';
import DSI200D from './pages/DSI200D';
import DSI205MBC0DSI405MBC0 from './pages/DSI205MBC0DSI405MBC0';
import DSI214WB from './pages/DSI214WB';
import DSI215CDSI225CDSI415 from './pages/DSI215CDSI225CDSI415';
import DSI250LDSI253L from './pages/DSI250LDSI253L';
import DSI250WBI252WB from './pages/DSI250WBI252WB';
import DSI250WC from './pages/DSI250WC';
import DSI259MC from './pages/DSI259MC';
import DSI400BDSI402B from './pages/DSI400BDSI402B';
import DSI400CDSI402CDSI403C from './pages/DSI400CDSI402CDSI403C';
import DSI450LDSI453L from './pages/DSI450LDSI453L';
import DSI450MDSI453M from './pages/DSI450MDSI453M';
import DSI450MBDSI453MBDSI250MBDSI253MB from './pages/DSI450MBDSI453MBDSI250MBDSI253MB';
import DSI653M from './pages/DSI653M';
import IPCT020B from './pages/IPCT020B';
import IPCXXXXG2 from './pages/IPCXXXXG2';
import IPTT012G2SIPTB012G2S from './pages/IPTT012G2SIPTB012G2S';
import NVRIPregs_Q from './pages/NVRIPregs_Q';
import NVRIPregs_Q_1 from './pages/NVRIPregs_Q_1';
import NVRIPregs_Q_2 from './pages/NVRIPregs_Q_2';
import NVRIPregs_Q_2_1 from './pages/NVRIPregs_Q_2_1';
import NVRIPregs_Q_2_2 from './pages/NVRIPregs_Q_2_2';
import NVRIPregs_Q_2_3 from './pages/NVRIPregs_Q_2_3';
import NVRIPregs_Q_2_4 from './pages/NVRIPregs_Q_2_4';
import NVRIPregs_Q_2_5 from './pages/NVRIPregs_Q_2_5';
import NVRIPregs_Q_2_6 from './pages/NVRIPregs_Q_2_6';
import NVRIPregs_Q_2_7 from './pages/NVRIPregs_Q_2_7';
import NVRIPregs_Q_2_8 from './pages/NVRIPregs_Q_2_8';
import NVRIPregs_E from './pages/NVRIPregs_E';
import NVRIPregs_E_1 from './pages/NVRIPregs_E_1';
import NVRIPregs_E_2 from './pages/NVRIPregs_E_2';
import NVRIPregs_ACU from './pages/NVRIPregs_ACU';
import NVRIPregs_ACU_1 from './pages/NVRIPregs_ACU_1';
import NVRIPregs_ACU_2 from './pages/NVRIPregs_ACU_2';
import NVRIPregs_ACU_3 from './pages/NVRIPregs_ACU_3';
import NVRIPregs_ACU_2_1 from './pages/NVRIPregs_ACU_2_1';
import NVRIPregs_ACU_2_2 from './pages/NVRIPregs_ACU_2_2';
import NVRIPregs_ACU_2_3 from './pages/NVRIPregs_ACU_2_3';
import NVRIPregs_ACU_2_4 from './pages/NVRIPregs_ACU_2_4';
import NVRIPregs_ACU_3_1 from './pages/NVRIPregs_ACU_3_1';
import NVRIPregs_ACU_3_2 from './pages/NVRIPregs_ACU_3_2';
import NVRIPregs_ACU_3_3 from './pages/NVRIPregs_ACU_3_3';
import NVRIPregs_DEEP from './pages/NVRIPregs_DEEP';
import NVRIPregs_DEEP_1 from './pages/NVRIPregs_DEEP_1';
import NVRIPregs_DEEP_2 from './pages/NVRIPregs_DEEP_2';
import NVRIPregs_DEEP_3 from './pages/NVRIPregs_DEEP_3';
import NVRIPregs_DEEP_4 from './pages/NVRIPregs_DEEP_4';
import NVRIPregs_DEEP_5 from './pages/NVRIPregs_DEEP_5';
import NVRIPregs_DEEP_1_1 from './pages/NVRIPregs_DEEP_1_1';
import NVRIPregs_DEEP_1_2 from './pages/NVRIPregs_DEEP_1_2';
import NVRIPregs_DEEP_1_1_1 from './pages/NVRIPregs_DEEP_1_1_1';
import NVRIPregs_DEEP_1_2_1 from './pages/NVRIPregs_DEEP_1_2_1';
import NVRIPregs_DEEP_2_1 from './pages/NVRIPregs_DEEP_2_1';
import NVRIPregs_DEEP_2_2 from './pages/NVRIPregs_DEEP_2_2';
import NVRIPregs_DEEP_2_2_1 from './pages/NVRIPregs_DEEP_2_2_1';
import NVRIPregs_DEEP_2_2_2 from './pages/NVRIPregs_DEEP_2_2_2';
import NVRIPregs_DEEP_3_1 from './pages/NVRIPregs_DEEP_3_1';
import NVRIPregs_DEEP_3_2 from './pages/NVRIPregs_DEEP_3_2';
import NVRIPregs_DEEP_4_1 from './pages/NVRIPregs_DEEP_4_1';
import NVRIPregs_DEEP_4_1_1 from './pages/NVRIPregs_DEEP_4_1_1';
import NVRIPregs_ISUPER from './pages/NVRIPregs_ISUPER';
import NVRIPregs_MODEL from './pages/NVRIPregs_MODEL';
import NVRIPregs_MODEL_1 from './pages/NVRIPregs_MODEL_1';
import NVRIPregs_MODEL_2 from './pages/NVRIPregs_MODEL_2';
import NVRIPregs_MODEL_3 from './pages/NVRIPregs_MODEL_3';
import NVRIPregs_MODEL_4 from './pages/NVRIPregs_MODEL_4';
import NVRIPregs_MODEL_6 from './pages/NVRIPregs_MODEL_6';
import NVRIPregs_MODEL_5 from './pages/NVRIPregs_MODEL_5';
import NVRIPregs_MODEL_7 from './pages/NVRIPregs_MODEL_7';
import NVRIPregs_MODEL_8 from './pages/NVRIPregs_MODEL_8';
import NVRIPregs_MODEL_9 from './pages/NVRIPregs_MODEL_9';
import NVRIPregs_MODEL_10 from './pages/NVRIPregs_MODEL_10';
import NVRIPregs_MODEL_11 from './pages/NVRIPregs_MODEL_11';
import NVRIPregs_MODEL_12 from './pages/NVRIPregs_MODEL_12';
import NVRIPregs_MODEL_13 from './pages/NVRIPregs_MODEL_13';
import NVRIPregs_MODEL_14 from './pages/NVRIPregs_MODEL_14';
import NVRIPregs_MODEL_15 from './pages/NVRIPregs_MODEL_15';
import NVRIPregs_MODEL_16 from './pages/NVRIPregs_MODEL_16';
import NVRIPregs_MODEL_15_1 from './pages/NVRIPregs_MODEL_15_1';
import NVRIPregs_MODEL_15_2 from './pages/NVRIPregs_MODEL_15_2';
import DSI20XL from './pages/DSI20XL';
import DSI25XZ from './pages/DSI25XZ';
import DSI25XZC from './pages/DSI25XZC';
import DSI45X from './pages/DSI45X';
import DSI45XZ from './pages/DSI45XZ';
import DSI45XZC from './pages/DSI45XZC';
import HiwatchEcolineIPC from './pages/HiwatchEcolineIPC';
import IPCB020IPCT020 from './pages/IPCB020IPCT020';
import IPCB020BIPCT020B from './pages/IPCB020BIPCT020B';
import StorageHybridSAN from './pages/StorageHybridSAN';
import HybridSAN1Firmware from './pages/HybridSAN1Firmware';
import HybridSAN2Howto from './pages/HybridSAN2Howto';
import DSA81016SDSA80624SDSA720XXR from './pages/DSA81016SDSA80624SDSA720XXR';
import DSMC001basedon2314MA2314MB from './pages/DSMC001basedon2314MA2314MB';
import DS2326basedon2314MC from './pages/DS2326basedon2314MC';
import DS2326basedon23242325 from './pages/DS2326basedon23242325';
import DS2343basedon2326 from './pages/DS2343basedon2326';
import DS234basedon2326 from './pages/DS234basedon2326';
import PTZ_R3 from './pages/PTZ_R3';
import PTZ_R3_1 from './pages/PTZ_R3_1';
import PTZ_R3_2 from './pages/PTZ_R3_2';
import PTZ_R3_3 from './pages/PTZ_R3_3';
import PTZ_R3_4 from './pages/PTZ_R3_4';
import PTZ_R3_5 from './pages/PTZ_R3_5';
import PTZ_R3_6 from './pages/PTZ_R3_6';
import PTZ_R3_7 from './pages/PTZ_R3_7';
import PTZ_R3_8 from './pages/PTZ_R3_8';
import PTZ_R3_8_1 from './pages/PTZ_R3_8_1';
import PTZ_R7 from './pages/PTZ_R7';
import PTZ_R7_1 from './pages/PTZ_R7_1';
import PTZ_R7_2 from './pages/PTZ_R7_2';
import PTZ_R7_3 from './pages/PTZ_R7_3';
import PTZ_R7_4 from './pages/PTZ_R7_4';
import PTZ_R7_5 from './pages/PTZ_R7_5';
import PTZ_R7_6 from './pages/PTZ_R7_6';
import PTZ_G3 from './pages/PTZ_G3';
import PTZ_G3_1 from './pages/PTZ_G3_1';
import PTZ_G3_2 from './pages/PTZ_G3_2';
import PTZ_G3_1_1 from './pages/PTZ_G3_1_1';
import PTZ_G3_1_2 from './pages/PTZ_G3_1_2';
import PTZ_GG3 from './pages/PTZ_GG3';
import PTZ_GG3_1 from './pages/PTZ_GG3_1';
import PTZ_H5 from './pages/PTZ_H5';
import PTZ_H5_1 from './pages/PTZ_H5_1';
import PTZ_H7 from './pages/PTZ_H7';
import PTZ_H7_1 from './pages/PTZ_H7_1';
import PTZ_H7_2 from './PTZ_H7_2';
import PTZ_E7 from './pages/PTZ_E7';
import PTZ_E7_1 from './pages/PTZ_E7_1';
import PTZ_E7_2 from './pages/PTZ_E7_2';
import PTZ_E7_3 from './pages/PTZ_E7_3';
import PTZ_H8 from './pages/PTZ_H8';
import PTZ_H8_1 from './pages/PTZ_H8_1';
import PTZ_H8_2 from './pages/PTZ_H8_2';
import PTZ_H8_3 from './pages/PTZ_H8_3';
import PTZ_H8_4 from './pages/PTZ_H8_4';
import PTZ_H8_5 from './pages/PTZ_H8_5';
import PTZ_HH8 from './pages/PTZ_HH8';
import PTZ_HH8_1 from './pages/PTZ_HH8_1';
import PTZ_HH8_1_1 from './pages/PTZ_HH8_1_1';
import PTZ_HH8_1_2 from './pages/PTZ_HH8_1_2';
import PTZ_Pano from './pages/PTZ_Pano';
import PTZ_Pano_1 from './pages/PTZ_Pano_1';
import PTZ_Pano_2 from './pages/PTZ_Pano_2';
import PTZ_Pano_3 from './pages/PTZ_Pano_3';
import PTZ_Pano_5 from './pages/PTZ_Pano_5';
import PTZ_Pano_4 from './pages/PTZ_Pano_4';
import PTZ_Pano_1_1 from './pages/PTZ_Pano_1_1';
import PTZ_Pano_2_1 from './pages/PTZ_Pano_2_1';
import PTZ_Pano_2_2 from './pages/PTZ_Pano_2_2';
import PTZ_Pano_3_1 from './pages/PTZ_Pano_3_1';
import PTZ_Pano_3_2 from './pages/PTZ_Pano_3_2';
import PTZ_Pano_3_3 from './pages/PTZ_Pano_3_3';
import PTZ_Pano_4_1 from './pages/PTZ_Pano_4_1';
import PTZ_Pano_4_2 from './pages/PTZ_Pano_4_2';
import PTZ_Pano_5_1 from './pages/PTZ_Pano_5_1';
import PTZ_Tandem from './pages/PTZ_Tandem';
import PTZ_Tandem_1 from './pages/PTZ_Tandem_1';
import PTZ_Tandem_2 from './pages/PTZ_Tandem_2';
import PTZ_Tandem_3 from './pages/PTZ_Tandem_3';
import PTZ_Tandem_4 from './pages/PTZ_Tandem_4';
import PTZ_Tandem_5 from './pages/PTZ_Tandem_5';
import DS2352basedon234or2343 from './pages/DS2352basedon234or2343';
import DS2362basedonor2343or2352 from './pages/DS2362basedonor2343or2352';
import DS2372 from './pages/DS2372';
import DS2388basedon2362andabove from './pages/DS2388basedon2362andabove';
import StorageDSA82024D from './pages/StorageDSA82024D';
import ST2314MCbasedon2314MA2314MB from './pages/ST2314MCbasedon2314MA2314MB';
import ST2326basedon2314MC from './pages/ST2326basedon2314MC';
import ST2326basedon23242325 from './pages/ST2326basedon23242325';
import ST234basedon2326 from './pages/ST234basedon2326';
import ST2343basedon2326 from './pages/ST2343basedon2326';
import ST2352basedon234or2343 from './pages/ST2352basedon234or2343';
import ST2362basedon234or2343or2352 from './pages/ST2362basedon234or2343or2352';
import ST2372basedon234or2343or2352or2362 from './pages/ST2372basedon234or2343or2352or2362';
import ST2384basedon234or2343or2352or2362or2372or2382 from './pages/ST2384basedon234or2343or2352or2362or2372or2382';
import ST2388basedon2362andabove from './pages/ST2388basedon2362andabove';
import STBasicconfiguration from './pages/STBasicconfiguration';
import STEmailalarm from './pages/STEmailalarm';
import STHybridsanbackupapplication from './pages/STHybridsanbackupapplication';
import STHybridsanstreamdirectstorageapplication from './pages/STHybridsanstreamdirectstorageapplication';
import STIpsanapplication from './pages/STIpsanapplication';
import PTZ_OldModel from './pages/PTZ_OldModel';
import PTZ_OldModel_1 from './pages/PTZ_OldModel_1';
import PTZ_OldModel_2 from './pages/PTZ_OldModel_2';
import PTZ_OldModel_2_1 from './pages/PTZ_OldModel_2_1';
import PTZ_OldModel_2_2 from './pages/PTZ_OldModel_2_2';
import PTZ_OldModel_2_3 from './pages/PTZ_OldModel_2_3';
import PTZ_OldModel_2_4 from './pages/PTZ_OldModel_2_4';
import PTZ_OldModel_2_5 from './pages/PTZ_OldModel_2_5';
import PTZ_OldModel_2_6 from './pages/PTZ_OldModel_2_6';
import PTZ_Positioning from './pages/PTZ_Positioning';
import PTZ_Positioning_1 from './pages/PTZ_Positioning_1';
import PTZ_Positioning_2 from './pages/PTZ_Positioning_2';
import PTZ_Positioning_3 from './pages/PTZ_Positioning_3';
import PTZ_Positioning_4 from './pages/PTZ_Positioning_4';
import PTZ_Positioning_1_1 from './pages/PTZ_Positioning_1_1';
import PTZ_Positioning_1_2 from './pages/PTZ_Positioning_1_2';
import PTZ_Positioning_2_1 from './pages/PTZ_Positioning_2_1';
import PTZ_Positioning_2_2 from './pages/PTZ_Positioning_2_2';
import PTZ_Positioning_2_3 from './pages/PTZ_Positioning_2_3';
import PTZ_Positioning_2_4 from './pages/PTZ_Positioning_2_4';
import PTZ_Positioning_2_5 from './pages/PTZ_Positioning_2_5';
import DVRTVIregs_SH from './pages/DVRTVIregs_SH';
import DVRTVIregs_SH_1 from './pages/DVRTVIregs_SH_1';
import DVRTVIregs_SH_2 from './pages/DVRTVIregs_SH_2';
import DVRTVIregs_SH_2_1 from './pages/DVRTVIregs_SH_2_1';
import DVRTVIregs_SH_2_2 from './pages/DVRTVIregs_SH_2_2';
import DVRTVIregs_SH_2_3 from './pages/DVRTVIregs_SH_2_3';
import DVRTVIregs_F from './pages/DVRTVIregs_F';

import AccessControl2_1 from './pages/AccessControl2_1';
import AccessControl2_1_1 from './pages/AccessControl2_1_1';
import AccessControl2_1_1_1 from './pages/AccessControl2_1_1_1';
import AccessControl2_1_1_2 from './pages/AccessControl2_1_1_2';
import AccessControl2_1_1_3 from './pages/AccessControl2_1_1_3';
import AccessControl2_1_2 from './pages/AccessControl2_1_2';
import AccessControl2_1_2_1 from './pages/AccessControl2_1_2_1';
import AccessControl2_1_2_2 from './pages/AccessControl2_1_2_2';
import AccessControl2_1_2_3 from './pages/AccessControl2_1_2_3';
import AccessControl2_1_2_4 from './pages/AccessControl2_1_2_4';
import AccessControl2_1_2_5 from './pages/AccessControl2_1_2_5';
import AccessControl2_1_3 from './pages/AccessControl2_1_3';
import AccessControl2_1_4 from './pages/AccessControl2_1_4';
import AccessControl2_1_4_1 from './pages/AccessControl2_1_4_1';
import AccessControl2_1_4_2 from './pages/AccessControl2_1_4_2';
import AccessControl2_1_4_3 from './pages/AccessControl2_1_4_3';
import AccessControl2_1_4_4 from './pages/AccessControl2_1_4_4';
import AccessControl2_1_4_5 from './pages/AccessControl2_1_4_5';
import CardReader from './pages/CardReader';
import CardReader_1 from './pages/CardReader_1';
import CardReader_2 from './pages/CardReader_2';
import CardReader_3 from './pages/CardReader_3';
import SecureModule from './pages/SecureModule';
import SecureModule_1 from './pages/SecureModule_1';
import Terminal from './pages/Terminal';
import Terminal_1 from './pages/Terminal_1';
import Terminal_2 from './pages/Terminal_2';
import Terminal_3 from './pages/Terminal_3';
import Terminal_4 from './pages/Terminal_4';
import Terminal_5 from './pages/Terminal_5';
import Terminal_6 from './pages/Terminal_6';
import Terminal_7 from './pages/Terminal_7';
import Terminal_8 from './pages/Terminal_8';
import Terminal_9 from './pages/Terminal_9';
import Terminal_10 from './pages/Terminal_10';
import Terminal_11 from './pages/Terminal_11';
import Terminal_12 from './pages/Terminal_12';
import Terminal_13 from './pages/Terminal_13';
import Terminal_14 from './pages/Terminal_14';
import Terminal_15 from './pages/Terminal_15';
import Terminal_16 from './pages/Terminal_16';
import Terminal_17 from './pages/Terminal_17';
import Terminal_18 from './pages/Terminal_18';
import Terminal_19 from './pages/Terminal_19';
import Terminal_20 from './pages/Terminal_20';
import Terminal_21 from './pages/Terminal_21';
import Terminal_22 from './pages/Terminal_22';
import Terminal_23 from './pages/Terminal_23';
import Terminal_24 from './pages/Terminal_24';
import Terminal_25 from './pages/Terminal_25';
import Terminal_26 from './pages/Terminal_26';
import Terminal_27 from './pages/Terminal_27';
import Terminal_28 from './pages/Terminal_28';
import Terminal_29 from './pages/Terminal_29';
import Terminal_30 from './pages/Terminal_30';
import Terminal_31 from './pages/Terminal_31';
import Terminal_2_1 from './pages/Terminal_2_1';
import Terminal_2_2 from './pages/Terminal_2_2';
import Terminal_2_3 from './pages/Terminal_2_3';
import Terminal_3_1 from './pages/Terminal_3_1';
import Terminal_4_1 from './pages/Terminal_4_1';
import Terminal_4_1_1 from './pages/Terminal_4_1_1';
import Terminal_4_1_2 from './pages/Terminal_4_1_2';

import DVRTVIregs_F_1 from './pages/DVRTVIregs_F_1';
import DVRTVIregs_F_2 from './pages/DVRTVIregs_F_2';
import DVRTVIregs_F_3 from './pages/DVRTVIregs_F_3';
import DVRTVIregs_F_1_1 from './pages/DVRTVIregs_F_1_1';
import DVRTVIregs_F_2_1 from './pages/DVRTVIregs_F_2_1';
import DVRTVIregs_F_2_2 from './pages/DVRTVIregs_F_2_2';
import DVRTVIregs_F_2_3 from './pages/DVRTVIregs_F_2_3';
import DVRTVIregs_F_2_4 from './pages/DVRTVIregs_F_2_4';
import DVRTVIregs_K from './pages/DVRTVIregs_K';
import DVRTVIregs_K_1 from './pages/DVRTVIregs_K_1';
import DVRTVIregs_K_3 from './pages/DVRTVIregs_K_3';
import DVRTVIregs_K_2 from './pages/DVRTVIregs_K_2';
import DVRTVIregs_K_4 from './pages/DVRTVIregs_K_4';
import DVRTVIregs_K_5 from './pages/DVRTVIregs_K_5';
import DVRTVIregs_K_6 from './pages/DVRTVIregs_K_6';
import DVRTVIregs_IDS from './pages/DVRTVIregs_IDS';
import DVRTVIregs_IDS_1 from './pages/DVRTVIregs_IDS_1';
import DVRTVIregs_IDS_2 from './pages/DVRTVIregs_IDS_2';
import DVRTVIregs_IDS_3 from './pages/DVRTVIregs_IDS_3';
import DVRTVIregs_IDS_4 from './pages/DVRTVIregs_IDS_4';
import DVRTVIregs_IDS_5 from './pages/DVRTVIregs_IDS_5';
import DVRTVIregs_IDS_6 from './pages/DVRTVIregs_IDS_6';
import DVRTVIregs_IDS_7 from './pages/DVRTVIregs_IDS_7';
import DVRTVIregs_IDS_8 from './pages/DVRTVIregs_IDS_8';
import DVRTVIregs_IDS_9 from './pages/DVRTVIregs_IDS_9';
import DVRTVIregs_IDS_10 from './pages/DVRTVIregs_IDS_10';
import DVRTVIregs_IDS_11 from './pages/DVRTVIregs_IDS_11';
import DVRTVIregs_IDS_12 from './pages/DVRTVIregs_IDS_12';
import DVRTVIregs_IDS_6_1 from './pages/DVRTVIregs_IDS_6_1';
import DVRTVIregs_IDS_6_2 from './pages/DVRTVIregs_IDS_6_2';
import Alarm_PEA from './pages/Alarm_PEA';
import Alarm_PEA_1 from './pages/Alarm_PEA_1';
import Alarm_PEA_2 from './pages/Alarm_PEA_2';
import Alarm_PEA_3 from './pages/Alarm_PEA_3';
import Alarm_PEA_4 from './pages/Alarm_PEA_4';
import Alarm_PEA_5 from './pages/Alarm_PEA_5';
import Alarm_PEA_6 from './pages/Alarm_PEA_6';
import Alarm_PEA_7 from './pages/Alarm_PEA_7';
import Alarm_PEA_7_1 from './pages/Alarm_PEA_7_1';
import Alarm_PEA_7_2 from './pages/Alarm_PEA_7_2';
import Alarm_PEA_7_3 from './pages/Alarm_PEA_7_3';
import Alarm_PEA_8 from './pages/Alarm_PEA_8';
import Alarm_PEA_9 from './pages/Alarm_PEA_9';
import Alarm_PHA from './pages/Alarm_PHA';
import Alarm_PHA_1 from './pages/Alarm_PHA_1';
import Alarm_PHA_2 from './pages/Alarm_PHA_2';
import Alarm_PHA_3 from './pages/Alarm_PHA_3';
import Alarm_PHA_3_1 from './pages/Alarm_PHA_3_1';
import Alarm_PHA_3_1_1 from './pages/Alarm_PHA_3_1_1';
import Alarm_PHA_3_1_2 from './pages/Alarm_PHA_3_1_2';
import Alarm_PHA_3_1_3 from './pages/Alarm_PHA_3_1_3';
import Alarm_PHA_3_1_4 from './pages/Alarm_PHA_3_1_4';
import Alarm_PHA_3_1_5 from './pages/Alarm_PHA_3_1_5';
import Alarm_PHA_3_1_1_1 from './pages/Alarm_PHA_3_1_1_1';
import Alarm_PHA1 from './pages/Alarm_PHA1';
import Alarm_PHA1_1 from './pages/Alarm_PHA1_1';
import Alarm_PHA1_1_1 from './pages/Alarm_PHA1_1_1';
import Alarm_PHA1_1_1_1 from './pages/Alarm_PHA1_1_1_1';
import Alarm_PHA1_1_2 from './pages/Alarm_PHA1_1_2';
import Alarm_PHA1_1_2_1 from './pages/Alarm_PHA1_1_2_1';
import Alarm_PHA1_1_2_2 from './pages/Alarm_PHA1_1_2_2';
import Alarm_PHA1_2 from './pages/Alarm_PHA1_2';
import Alarm_PHA1_3 from './pages/Alarm_PHA1_3';
import Alarm_PHA1_4 from './pages/Alarm_PHA1_4';
import Alarm_PR from './pages/Alarm_PR';
import Alarm_PR_1 from './pages/Alarm_PR_1';
import Alarm_PR_1_1 from './pages/Alarm_PR_1_1';
import Alarm_PR_1_2 from './pages/Alarm_PR_1_2';
import Alarm_PR_2 from './pages/Alarm_PR_2';
import Alarm_PR_2_1 from './pages/Alarm_PR_2_1';
import Alarm_PR_2_2 from './pages/Alarm_PR_2_2';
import Alarm_PWA32 from './pages/Alarm_PWA32';
import Alarm_PWA32_1 from './pages/Alarm_PWA32_1';
import Alarm_PWA48 from './pages/Alarm_PWA48';
import Alarm_PWA48_1 from './pages/Alarm_PWA48_1';
import Alarm_PWA48_1_1 from './pages/Alarm_PWA48_1_1';
import Alarm_PWA48_2 from './pages/Alarm_PWA48_2';
import Alarm_PWA48_2_1 from './pages/Alarm_PWA48_2_1';
import Alarm_PWA48_3 from './pages/Alarm_PWA48_3';
import Alarm_PWA48_4 from './pages/Alarm_PWA48_4';
import Alarm_PWA48_5 from './pages/Alarm_PWA48_5';
import Alarm_PWA48_6 from './pages/Alarm_PWA48_6';
import Alarm_PWA48_7 from './pages/Alarm_PWA48_7';
import Alarm_PWA48_8 from './pages/Alarm_PWA48_8';
import Alarm_PWA48_9 from './pages/Alarm_PWA48_9';
import Alarm_PWA48_10 from './pages/Alarm_PWA48_10';
import Alarm_PWA48_11 from './pages/Alarm_PWA48_11';
import Alarm_PWA48_12 from './pages/Alarm_PWA48_12';
import Alarm_PWA48_13 from './pages/Alarm_PWA48_13';
import Alarm_PWA48_14 from './pages/Alarm_PWA48_14';
import Alarm_PWA48_15 from './pages/Alarm_PWA48_15';
import VideInterCom from './pages/VideInterCom';
import VideInterCom_1 from './pages/VideInterCom_1';
import VideInterCom_2 from './pages/VideInterCom_2';
import VideInterCom_3 from './pages/VideInterCom_3';
import VideInterCom_4 from './pages/VideInterCom_4';
import VideInterCom_1_1 from './pages/VideInterCom_1_1';
import VideInterCom_1_2 from './pages/VideInterCom_1_2';
import VideInterCom_1_3 from './pages/VideInterCom_1_3';
import VideInterCom_1_4 from './pages/VideInterCom_1_4';
import VideInterCom_1_5 from './pages/VideInterCom_1_5';
import VideInterCom_1_2_1 from './pages/VideInterCom_1_2_1';
import VideInterCom_1_2_2 from './pages/VideInterCom_1_2_2';
import VideInterCom_1_2_3 from './pages/VideInterCom_1_2_3';
import VideInterCom_1_4_1 from './pages/VideInterCom_1_4_1';
import VideInterCom_1_4_2 from './pages/VideInterCom_1_4_2';
import VideInterCom_1_5_1 from './pages/VideInterCom_1_5_1';
import VideInterCom_1_5_2 from './pages/VideInterCom_1_5_2';
import VideInterCom_1_5_3 from './pages/VideInterCom_1_5_3';
import VideInterCom_2_1 from './pages/VideInterCom_2_1';
import VideInterCom_2_2 from './pages/VideInterCom_2_2';
import VideInterCom_2_3 from './pages/VideInterCom_2_3';
import VideInterCom_2_1_1 from './pages/VideInterCom_2_1_1';
import VideInterCom_2_1_2 from './pages/VideInterCom_2_1_2';
import VideInterCom_2_1_3 from './pages/VideInterCom_2_1_3';
import VideInterCom_2_1_4 from './pages/VideInterCom_2_1_4';
import VideInterCom_2_2_1 from './pages/VideInterCom_2_2_1';
import VideInterCom_2_2_2 from './pages/VideInterCom_2_2_2';
import VideInterCom_2_2_3 from './pages/VideInterCom_2_2_3';
import VideInterCom_2_2_4 from './pages/VideInterCom_2_2_4';
import VideInterCom_2_2_5 from './pages/VideInterCom_2_2_5';
import VideInterCom_2_2_6 from './pages/VideInterCom_2_2_6';
import VideInterCom_2_2_7 from './pages/VideInterCom_2_2_7';
import VideInterCom_2_2_2_1 from './pages/VideInterCom_2_2_2_1';
import VideInterCom_2_2_2_2 from './pages/VideInterCom_2_2_2_2';
import VideInterCom_2_2_2_3 from './pages/VideInterCom_2_2_2_3';
import VideInterCom_2_2_2_4 from './pages/VideInterCom_2_2_2_4';
import VideInterCom_2_2_2_5 from './pages/VideInterCom_2_2_2_5';
import VideInterCom_2_2_6_1 from './pages/VideInterCom_2_2_6_1';
import VideInterCom_2_3_1 from './pages/VideInterCom_2_3_1';
import VideInterCom_2_3_2 from './pages/VideInterCom_2_3_2';
import VideInterCom_2_3_3 from './pages/VideInterCom_2_3_3';
import VideInterCom_3_1 from './pages/VideInterCom_3_1';
import VideInterCom_3_1_1 from './pages/VideInterCom_3_1_1';
import VideInterCom_3_1_2 from './pages/VideInterCom_3_1_2';
import VideInterCom_3_1_3 from './pages/VideInterCom_3_1_3';
import VideInterCom_3_1_4 from './pages/VideInterCom_3_1_4';
import VideInterCom_4_1 from './pages/VideInterCom_4_1';
import VideInterCom_4_2 from './pages/VideInterCom_4_2';
import VideInterCom_4_1_1 from './pages/VideInterCom_4_1_1';
import VideInterCom_4_1_2 from './pages/VideInterCom_4_1_2';
import VideInterCom_4_1_3 from './pages/VideInterCom_4_1_3';
import VideInterCom_4_2_1 from './pages/VideInterCom_4_2_1';
import VideInterCom_4_2_2 from './pages/VideInterCom_4_2_2';
import VideInterCom_4_2_2_1 from './pages/VideInterCom_4_2_2_1.JSX';
import VideInterCom_4_2_2_2 from './pages/VideInterCom_4_2_2_2';
import VideInterCom_4_2_2_3 from './pages/VideInterCom_4_2_2_3';
import Network_Switch from './pages/Network_Switch';
import Network_Wire from './pages/Network_Wire';
import Network_Switch_1 from './pages/Network_Switch_1';
import Network_Switch_2 from './pages/Network_Switch_2';
import Network_Switch_3 from './pages/Network_Switch_3';
import Network_Switch_4 from './pages/Network_Switch_4';
import Network_Switch_5 from './pages/Network_Switch_5';
import Network_Switch_6 from './pages/Network_Switch_6';
import Network_Switch_7 from './pages/Network_Switch_7';
import Network_Switch_8 from './pages/Network_Switch_8';
import Network_Switch_9 from './pages/Network_Switch_9';
import Network_Switch_10 from './pages/Network_Switch_10';
import Network_Switch_11 from './pages/Network_Switch_11';
import Network_Switch_12 from './pages/Network_Switch_12';
import Network_Switch_13 from './pages/Network_Switch_13';
import Network_Switch_14 from './pages/Network_Switch_14';
import Network_Switch_15 from './pages/Network_Switch_15';
import Network_Switch_16 from './pages/Network_Switch_16';



function App() {
  return (
    <div className='main_div'>
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
        <Route path='/Firmware/Hiwatch Ecoline/IPC/' element={<HiwatchEcolineIPC />} />
        <Route path='/Firmware/Hiwatch Ecoline/IPC/IPC-B020 IPC-T020/' element={<IPCB020IPCT020 />} />
        <Route path='/Firmware/Hiwatch Ecoline/IPC/IPC-B020(B)  IPC-T020(B)/' element={<IPCB020BIPCT020B />} />
        <Route path='/Firmware/HiWatch-CATC/' element={<HiWatchCATC />} />
        <Route path='/Firmware/HiWatch-CATC/DS-I20X-L/' element={<DSI20XL />} />
        <Route path='/Firmware/HiWatch-CATC/DS-I25XZ/' element={<DSI25XZ />} />
        <Route path='/Firmware/HiWatch-CATC/DS-I25XZ (C)/' element={<DSI25XZC />} />
        <Route path='/Firmware/HiWatch-CATC/DS-I45X/' element={<DSI45X />} />
        <Route path='/Firmware/HiWatch-CATC/DS-I45XZ/' element={<DSI45XZ />} />
        <Route path='/Firmware/HiWatch-CATC/DS-I45XZ (C)/' element={<DSI45XZC />} />
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
        <Route path='/Temperature Screening/Thermal Camera/Firmware/Firmware for 12XXB, 26XXB/V5.5.26build200507/' element={<V5526build200507 />} />
        <Route path='/Temperature Screening/Thermal Camera/Firmware/Firmware for 12XXB, 26XXB/V5.5.26build200608/' element={<V5526build200608 />} />
        <Route path='/Temperature Screening/Thermal Camera/Firmware/Firmware for 12XXB, 26XXB/V5.5.26build200708/' element={<V5526build200708 />} />
        <Route path='/Temperature Screening/Thermal Camera/Firmware/Firmware for 12XXB, 26XXB/V5.5.26build200917/' element={<V5526build200917 />} />
        <Route path='/Temperature Screening/Thermal Camera/Firmware/Firmware for 12XXB, 26XXB/V5.5.32build201028/' element={<V5532build201028 />} />
        <Route path='/Temperature Screening/Thermal Camera/Firmware/Firmware for 12XXB, 26XXB/V5.5.32build201229_Winter Version/' element={<V5532build201229WinterVersion />} />
        <Route path='/Temperature Screening/Thermal Camera/Firmware/Firmware for 12XXB, 26XXB/V5.5.34build210123/' element={<V5534build210123 />} />
        <Route path='/Temperature Screening/Thermal Camera/Firmware/Firmware for 12XXB, 26XXB/V5.5.34build210402/' element={<V5534build210402 />} />
        <Route path='/Temperature Screening/Thermal Camera/Firmware/Firmware for 12XXB, 26XXB/V5.5.34build210702 safe version/' element={<V5534build210702safeversion />} />
        <Route path='/Temperature Screening/Thermal Camera/Firmware/Firmware for 12XXB, 26XXB/V5.5.34build211012/' element={<V5534build211012 />} />
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

        {/* /Firmware/K/seria */}
        <Route path='/Firmware/Hikvision/NVR (IP regs)/k/seria' element={<NVRIPregs_K />} />
        {/* Firmware/K/seria pages */}
        <Route path='/Firmware/Hikvision/NVR (IP regs)/k/seria/1' element={<NVRIPregs_K_1 />} />
        <Route path='/Firmware/Hikvision/NVR (IP regs)/k/seria/2' element={<NVRIPregs_K_2 />} />

        {/* /Firmware/Hikvision/NVR (IP regs)/k/seria/2 pages */}
        <Route path='/Firmware/Hikvision/NVR (IP regs)/k/seria/2/1' element={<NVRIPregs_K_2_1 />} />
        <Route path='/Firmware/Hikvision/NVR (IP regs)/k/seria/2/2' element={<NVRIPregs_K_2_2 />} />
        <Route path='/Firmware/Hikvision/NVR (IP regs)/k/seria/2/3' element={<NVRIPregs_K_2_3 />} />
        <Route path='/Firmware/Hikvision/NVR (IP regs)/k/seria/2/4' element={<NVRIPregs_K_2_4 />} />
        <Route path='/Firmware/Hikvision/NVR (IP regs)/k/seria/2/5' element={<NVRIPregs_K_2_5 />} />
        <Route path='/Firmware/Hikvision/NVR (IP regs)/k/seria/2/6' element={<NVRIPregs_K_2_6 />} />
        <Route path='/Firmware/Hikvision/NVR (IP regs)/k/seria/2/7' element={<NVRIPregs_K_2_7 />} />



        <Route path='/Firmware/Hikvision/NVR (IP regs)/k/seria/3' element={<NVRIPregs_K_3 />} />
        {/* /Firmware/Hikvision/NVR (IP regs)/k/seria/3/ pages */}


        <Route path='/Firmware/Hikvision/NVR (IP regs)/k/seria/3/1' element={<NVRIPregs_K_3_1 />} />
        <Route path='/Firmware/Hikvision/NVR (IP regs)/k/seria/3/2' element={<NVRIPregs_K_3_2 />} />
        <Route path='/Firmware/Hikvision/NVR (IP regs)/k/seria/3/3' element={<NVRIPregs_K_3_3 />} />
        <Route path='/Firmware/Hikvision/NVR (IP regs)/k/seria/3/4' element={<NVRIPregs_K_3_4 />} />
        <Route path='/Firmware/Hikvision/NVR (IP regs)/k/seria/3/5' element={<NVRIPregs_K_3_5 />} />
        <Route path='/Firmware/Hikvision/NVR (IP regs)/k/seria/3/6' element={<NVRIPregs_K_3_6 />} />
        <Route path='/Firmware/Hikvision/NVR (IP regs)/k/seria/3/7' element={<NVRIPregs_K_3_7 />} />



        <Route path='/Firmware/Hikvision/NVR (IP regs)/k/seria/4' element={<NVRIPregs_K_4 />} />
        {/* /Firmware/Hikvision/NVR (IP regs)/k/seria/4 pages */}
        <Route path='/Firmware/Hikvision/NVR (IP regs)/k/seria/4/1' element={<NVRIPregs_K_4_1 />} />
        <Route path='/Firmware/Hikvision/NVR (IP regs)/k/seria/4/2' element={<NVRIPregs_K_4_2 />} />
        <Route path='/Firmware/Hikvision/NVR (IP regs)/k/seria/4/3' element={<NVRIPregs_K_4_3 />} />
        <Route path='/Firmware/Hikvision/NVR (IP regs)/k/seria/4/4' element={<NVRIPregs_K_4_4 />} />
        <Route path='/Firmware/Hikvision/NVR (IP regs)/k/seria/4/5' element={<NVRIPregs_K_4_5 />} />
        <Route path='/Firmware/Hikvision/NVR (IP regs)/k/seria/4/6' element={<NVRIPregs_K_4_6 />} />
        <Route path='/Firmware/Hikvision/NVR (IP regs)/k/seria/4/7' element={<NVRIPregs_K_4_7 />} />
        <Route path='/Firmware/Hikvision/NVR (IP regs)/k/seria/4/8' element={<NVRIPregs_K_4_8 />} />
        <Route path='/Firmware/Hikvision/NVR (IP regs)/k/seria/4/9' element={<NVRIPregs_K_4_9 />} />
        <Route path='/Firmware/Hikvision/NVR (IP regs)/k/seria/4/10' element={<NVRIPregs_K_4_10 />} />
        <Route path='/Firmware/Hikvision/NVR (IP regs)/k/seria/4/11' element={<NVRIPregs_K_4_11 />} />
        {/* <Route path='/Firmware/Hikvision/NVR (IP regs)/k/seria/4/12' element={<NVRIPregs_K_4_12 />} /> */}



        <Route path='/Firmware/Hikvision/NVR (IP regs)/k/seria/5' element={<NVRIPregs_K_5 />} />


        {/* /Firmware/Hikvision/NVR (IP regs)/m  seria*/}


        <Route path='/Firmware/Hikvision/NVR (IP regs)/m' element={<NVRIPregs_M />} />
        {/* /Firmware/Hikvision/NVR (IP regs)/i */}

        <Route path='/Firmware/Hikvision/NVR (IP regs)/i' element={<NVRIPregs_I />} />

        {/* /Firmware/Hikvision/NVR (IP regs)/q */}
        <Route path='/Firmware/Hikvision/NVR (IP regs)/q' element={<NVRIPregs_Q />} />

        {/* /Firmware/Hikvision/NVR (IP regs)/q pages */}
        <Route path='/Firmware/Hikvision/NVR (IP regs)/q_1' element={<NVRIPregs_Q_1 />} />

        <Route path='/Firmware/Hikvision/NVR (IP regs)/q_2' element={<NVRIPregs_Q_2 />} />
        {/* /Firmware/Hikvision/NVR (IP regs)/q_2 pages */}
        <Route path='/Firmware/Hikvision/NVR (IP regs)/q_2/1' element={<NVRIPregs_Q_2_1 />} />
        <Route path='/Firmware/Hikvision/NVR (IP regs)/q_2/2' element={<NVRIPregs_Q_2_2 />} />
        <Route path='/Firmware/Hikvision/NVR (IP regs)/q_2/3' element={<NVRIPregs_Q_2_3 />} />
        <Route path='/Firmware/Hikvision/NVR (IP regs)/q_2/4' element={<NVRIPregs_Q_2_4 />} />
        <Route path='/Firmware/Hikvision/NVR (IP regs)/q_2/5' element={<NVRIPregs_Q_2_5 />} />
        <Route path='/Firmware/Hikvision/NVR (IP regs)/q_2/6' element={<NVRIPregs_Q_2_6 />} />
        <Route path='/Firmware/Hikvision/NVR (IP regs)/q_2/7' element={<NVRIPregs_Q_2_7 />} />
        <Route path='/Firmware/Hikvision/NVR (IP regs)/q_2/8' element={<NVRIPregs_Q_2_8 />} />


        {/* /Firmware/Hikvision/NVR (IP regs)/e */}

        <Route path='/Firmware/Hikvision/NVR (IP regs)/e' element={<NVRIPregs_E />} />
        {/* /Firmware/Hikvision/NVR (IP regs)/e pages */}
        <Route path='/Firmware/Hikvision/NVR (IP regs)/e/1' element={<NVRIPregs_E_1 />} />
        <Route path='/Firmware/Hikvision/NVR (IP regs)/e/2' element={<NVRIPregs_E_2 />} />

        {/* /Firmware/Hikvision/NVR (IP regs)/acu */}

        <Route path='/Firmware/Hikvision/NVR (IP regs)/acu' element={<NVRIPregs_ACU />} />

        {/* /Firmware/Hikvision/NVR (IP regs)/acu pages */}
        <Route path='/Firmware/Hikvision/NVR (IP regs)/acu/1' element={<NVRIPregs_ACU_1 />} />
        <Route path='/Firmware/Hikvision/NVR (IP regs)/acu/2' element={<NVRIPregs_ACU_2 />} />

        {/* /Firmware/Hikvision/NVR (IP regs)/acu/2 pages */}
        <Route path='/Firmware/Hikvision/NVR (IP regs)/acu/2/1' element={<NVRIPregs_ACU_2_1 />} />
        <Route path='/Firmware/Hikvision/NVR (IP regs)/acu/2/2' element={<NVRIPregs_ACU_2_2 />} />
        <Route path='/Firmware/Hikvision/NVR (IP regs)/acu/2/3' element={<NVRIPregs_ACU_2_3 />} />
        <Route path='/Firmware/Hikvision/NVR (IP regs)/acu/2/4' element={<NVRIPregs_ACU_2_4 />} />





        <Route path='/Firmware/Hikvision/NVR (IP regs)/acu/3' element={<NVRIPregs_ACU_3 />} />
        {/* /Firmware/Hikvision/NVR (IP regs)/acu/3  pages*/}

        <Route path='/Firmware/Hikvision/NVR (IP regs)/acu/3/1' element={<NVRIPregs_ACU_3_1 />} />
        <Route path='/Firmware/Hikvision/NVR (IP regs)/acu/3/2' element={<NVRIPregs_ACU_3_2 />} />
        <Route path='/Firmware/Hikvision/NVR (IP regs)/acu/3/3' element={<NVRIPregs_ACU_3_3 />} />

        {/* /Firmware/Hikvision/NVR (IP regs)/deep */}


        <Route path='/Firmware/Hikvision/NVR (IP regs)/deep' element={<NVRIPregs_DEEP />} />
        {/* /Firmware/Hikvision/NVR (IP regs)/deep pages */}

        <Route path='/Firmware/Hikvision/NVR (IP regs)/deep/1' element={<NVRIPregs_DEEP_1 />} />
        {/* /Firmware/Hikvision/NVR (IP regs)/deep/1 pages */}
        <Route path='/Firmware/Hikvision/NVR (IP regs)/deep/1/1' element={<NVRIPregs_DEEP_1_1 />} />
        <Route path='/Firmware/Hikvision/NVR (IP regs)/deep/1/1_1' element={<NVRIPregs_DEEP_1_1_1 />} />


        <Route path='/Firmware/Hikvision/NVR (IP regs)/deep/1/2' element={<NVRIPregs_DEEP_1_2 />} />
        <Route path='/Firmware/Hikvision/NVR (IP regs)/deep/1/2_1' element={<NVRIPregs_DEEP_1_2_1 />} />




        <Route path='/Firmware/Hikvision/NVR (IP regs)/deep/2' element={<NVRIPregs_DEEP_2 />} />
        {/* /Firmware/Hikvision/NVR (IP regs)/deep/2 pages */}
        <Route path='/Firmware/Hikvision/NVR (IP regs)/deep/2/1' element={<NVRIPregs_DEEP_2_1 />} />
        <Route path='/Firmware/Hikvision/NVR (IP regs)/deep/2/2' element={<NVRIPregs_DEEP_2_2 />} />
        {/* /Firmware/Hikvision/NVR (IP regs)/deep/2/2' pages */}
        <Route path='/Firmware/Hikvision/NVR (IP regs)/deep/2/2_1' element={<NVRIPregs_DEEP_2_2_1 />} />
        <Route path='/Firmware/Hikvision/NVR (IP regs)/deep/2/2_2' element={<NVRIPregs_DEEP_2_2_2 />} />



        <Route path='/Firmware/Hikvision/NVR (IP regs)/deep/3' element={<NVRIPregs_DEEP_3 />} />
        {/* /Firmware/Hikvision/NVR (IP regs)/deep/3 pages */}
        <Route path='/Firmware/Hikvision/NVR (IP regs)/deep/3/1' element={<NVRIPregs_DEEP_3_1 />} />
        <Route path='/Firmware/Hikvision/NVR (IP regs)/deep/3/2' element={<NVRIPregs_DEEP_3_2 />} />



        <Route path='/Firmware/Hikvision/NVR (IP regs)/deep/4' element={<NVRIPregs_DEEP_4 />} />
        {/* /Firmware/Hikvision/NVR (IP regs)/deep/4/ pages */}
        <Route path='/Firmware/Hikvision/NVR (IP regs)/deep/4/1' element={<NVRIPregs_DEEP_4_1 />} />
        {/* /Firmware/Hikvision/NVR (IP regs)/deep/4/1 pages */}
        <Route path='/Firmware/Hikvision/NVR (IP regs)/deep/4/1_1' element={<NVRIPregs_DEEP_4_1_1 />} />


        <Route path='/Firmware/Hikvision/NVR (IP regs)/deep/5' element={<NVRIPregs_DEEP_5 />} />

        {/* /Firmware/Hikvision/NVR (IP regs)/isuper */}

        <Route path='/Firmware/Hikvision/NVR (IP regs)/isuper' element={<NVRIPregs_ISUPER />} />


        {/* /Firmware/Hikvision/NVR (IP regs)/models */}

        <Route path='/Firmware/Hikvision/NVR (IP regs)/models' element={<NVRIPregs_MODEL />} />

        <Route path='/Firmware/Hikvision/NVR (IP regs)/models/1' element={<NVRIPregs_MODEL_1 />} />
        <Route path='/Firmware/Hikvision/NVR (IP regs)/models/2' element={<NVRIPregs_MODEL_2 />} />
        <Route path='/Firmware/Hikvision/NVR (IP regs)/models/3' element={<NVRIPregs_MODEL_3 />} />
        <Route path='/Firmware/Hikvision/NVR (IP regs)/models/4' element={<NVRIPregs_MODEL_4 />} />
        <Route path='/Firmware/Hikvision/NVR (IP regs)/models/5' element={<NVRIPregs_MODEL_5 />} />
        <Route path='/Firmware/Hikvision/NVR (IP regs)/models/6' element={<NVRIPregs_MODEL_6 />} />
        <Route path='/Firmware/Hikvision/NVR (IP regs)/models/7' element={<NVRIPregs_MODEL_7 />} />
        <Route path='/Firmware/Hikvision/NVR (IP regs)/models/8' element={<NVRIPregs_MODEL_8 />} />
        <Route path='/Firmware/Hikvision/NVR (IP regs)/models/9' element={<NVRIPregs_MODEL_9 />} />
        <Route path='/Firmware/Hikvision/NVR (IP regs)/models/17' element={<NVRIPregs_MODEL_10 />} />
        <Route path='/Firmware/Hikvision/NVR (IP regs)/models/11' element={<NVRIPregs_MODEL_11 />} />
        <Route path='/Firmware/Hikvision/NVR (IP regs)/models/12' element={<NVRIPregs_MODEL_12 />} />
        <Route path='/Firmware/Hikvision/NVR (IP regs)/models/13' element={<NVRIPregs_MODEL_13 />} />
        <Route path='/Firmware/Hikvision/NVR (IP regs)/models/14' element={<NVRIPregs_MODEL_14 />} />
        <Route path='/Firmware/Hikvision/NVR (IP regs)/models/15' element={<NVRIPregs_MODEL_15 />} />
        {/* /Firmware/Hikvision/NVR (IP regs)/models/15 pages */}
        <Route path='/Firmware/Hikvision/NVR (IP regs)/models/15' element={<NVRIPregs_MODEL_15_1 />} />
        <Route path='/Firmware/Hikvision/NVR (IP regs)/models/15' element={<NVRIPregs_MODEL_15_2 />} />



        <Route path='/Firmware/Hikvision/NVR (IP regs)/models/16' element={<NVRIPregs_MODEL_16 />} />



        <Route path='/Firmware/Hikvision/PTZ/' element={<PTZ />} />
        {/* /Firmware/Hikvision/PTZ/ pages */}

        <Route path='/Firmware/Hikvision/PTZ/R3 - DS-2DFXXXX/' element={<PTZ_R3 />} />

        {/* /Firmware/Hikvision/PTZ/R3 - DS-2DFXXXX/ pages */}

        <Route path='/Firmware/Hikvision/PTZ/R3 - DS-2DFXXXX/1' element={<PTZ_R3_1 />} />
        <Route path='/Firmware/Hikvision/PTZ/R3 - DS-2DFXXXX/2' element={<PTZ_R3_2 />} />
        <Route path='/Firmware/Hikvision/PTZ/R3 - DS-2DFXXXX/3' element={<PTZ_R3_3 />} />
        <Route path='/Firmware/Hikvision/PTZ/R3 - DS-2DFXXXX/4' element={<PTZ_R3_4 />} />
        <Route path='/Firmware/Hikvision/PTZ/R3 - DS-2DFXXXX/5' element={<PTZ_R3_5 />} />
        <Route path='/Firmware/Hikvision/PTZ/R3 - DS-2DFXXXX/6' element={<PTZ_R3_6 />} />
        <Route path='/Firmware/Hikvision/PTZ/R3 - DS-2DFXXXX/7' element={<PTZ_R3_7 />} />
        <Route path='/Firmware/Hikvision/PTZ/R3 - DS-2DFXXXX/8' element={<PTZ_R3_8 />} />
        {/*  */}
        <Route path='/Firmware/Hikvision/PTZ/R3 - DS-2DFXXXX/8_1' element={<PTZ_R3_8_1 />} />

        {/*   /Firmware/Hikvision/PTZ/R7 - DS-2DExxxxW, DS-2DFxxxxW/ pages */}
        <Route path='/Firmware/Hikvision/PTZ/R7 - DS-2DExxxxW, DS-2DFxxxxW/' element={<PTZ_R7 />} />
        {/* /Firmware/Hikvision/PTZ/R7 - DS-2DExxxxW, DS-2DFxxxxW/1 */}
        <Route path='/Firmware/Hikvision/PTZ/R7 - DS-2DExxxxW, DS-2DFxxxxW/1' element={<PTZ_R7_1 />} />
        <Route path='/Firmware/Hikvision/PTZ/R7 - DS-2DExxxxW, DS-2DFxxxxW/2' element={<PTZ_R7_2 />} />
        <Route path='/Firmware/Hikvision/PTZ/R7 - DS-2DExxxxW, DS-2DFxxxxW/3' element={<PTZ_R7_3 />} />
        <Route path='/Firmware/Hikvision/PTZ/R7 - DS-2DExxxxW, DS-2DFxxxxW/4' element={<PTZ_R7_4 />} />
        <Route path='/Firmware/Hikvision/PTZ/R7 - DS-2DExxxxW, DS-2DFxxxxW/5' element={<PTZ_R7_5 />} />
        <Route path='/Firmware/Hikvision/PTZ/R7 - DS-2DExxxxW, DS-2DFxxxxW/6' element={<PTZ_R7_6 />} />


        {/* /Firmware/Hikvision/PTZ/G3 - DS-2DExxxx(S5),DS-2SE7Cxxxx(S5)/ */}


        <Route path='/Firmware/Hikvision/PTZ/G3 - DS-2DExxxx(S5),DS-2SE7Cxxxx(S5)/' element={<PTZ_G3 />} />

        <Route path='/Firmware/Hikvision/PTZ/G3 - DS-2DExxxx(S5),DS-2SE7Cxxxx(S5)/1' element={<PTZ_G3_1 />} />
        {/* /Firmware/Hikvision/PTZ/G3 - DS-2DExxxx(S5),DS-2SE7Cxxxx(S5)/1/1 pages */}

        <Route path='/Firmware/Hikvision/PTZ/G3 - DS-2DExxxx(S5),DS-2SE7Cxxxx(S5)/1/1' element={<PTZ_G3_1_1 />} />
        <Route path='/Firmware/Hikvision/PTZ/G3 - DS-2DExxxx(S5),DS-2SE7Cxxxx(S5)/1/2' element={<PTZ_G3_1_2 />} />

        <Route path='/Firmware/Hikvision/PTZ/G3 - DS-2DExxxx(S5),DS-2SE7Cxxxx(S5)/2' element={<PTZ_G3_2 />} />

        {/* /Firmware/Hikvision/PTZ/G3 - DS-2DFxxxx(S5)/ */}

        <Route path='/Firmware/Hikvision/PTZ/G3 - DS-2DFxxxx(S5)/' element={<PTZ_GG3 />} />
        {/* /Firmware/Hikvision/PTZ/G3 - DS-2DFxxxx(S5)/ pages */}
        <Route path='/Firmware/Hikvision/PTZ/G3 - DS-2DFxxxx(S5)/1' element={<PTZ_GG3_1 />} />


        {/* /Firmware/Hikvision/PTZ/H5 - DS-2DFxxxxX(T2)/ */}
        <Route path='/Firmware/Hikvision/PTZ/H5 - DS-2DFxxxxX(T2)/' element={<PTZ_H5 />} />
        {/* /Firmware/Hikvision/PTZ/H5 - DS-2DFxxxxX(T2)/ pages */}
        <Route path='/Firmware/Hikvision/PTZ/H5 - DS-2DFxxxxX(T2)/1' element={<PTZ_H5_1 />} />

        {/* /Firmware/Hikvision/PTZ/H7 - DS-2DFxxxxX(T3),DS-2DYxxxx(T3)/ */}
        <Route path='/Firmware/Hikvision/PTZ/H7 - DS-2DFxxxxX(T3),DS-2DYxxxx(T3)/' element={<PTZ_H7 />} />
        {/* /Firmware/Hikvision/PTZ/H7 - DS-2DFxxxxX(T3),DS-2DYxxxx(T3)/ pages */}

        <Route path='/Firmware/Hikvision/PTZ/H7 - DS-2DFxxxxX(T3),DS-2DYxxxx(T3)/1' element={<PTZ_H7_1 />} />
        <Route path='/Firmware/Hikvision/PTZ/H7 - DS-2DFxxxxX(T3),DS-2DYxxxx(T3)/2' element={<PTZ_H7_2 />} />


        {/* /Firmware/Hikvision/PTZ/E7 - DS-2DExxxx(S6)) */}
        <Route path='/Firmware/Hikvision/PTZ/E7 - DS-2DExxxx(S6))/' element={<PTZ_E7 />} />
        {/* /Firmware/Hikvision/PTZ/E7 - DS-2DExxxx(S6))/ pages */}
        <Route path='/Firmware/Hikvision/PTZ/E7 - DS-2DExxxx(S6))/1' element={<PTZ_E7_1 />} />
        <Route path='/Firmware/Hikvision/PTZ/E7 - DS-2DExxxx(S6))/2' element={<PTZ_E7_2 />} />
        <Route path='/Firmware/Hikvision/PTZ/E7 - DS-2DExxxx(S6))/3' element={<PTZ_E7_3 />} />

        {/* /Firmware/Hikvision/PTZ/H8 - DS-2DExxxx(T5)/ */}
        <Route path='/Firmware/Hikvision/PTZ/H8 - DS-2DExxxx(T5)/' element={<PTZ_H8 />} />
        {/* /Firmware/Hikvision/PTZ/H8 - DS-2DExxxx(T5)/ */}
        <Route path='/Firmware/Hikvision/PTZ/H8 - DS-2DExxxx(T5)/1' element={<PTZ_H8_1 />} />
        <Route path='/Firmware/Hikvision/PTZ/H8 - DS-2DExxxx(T5)/2' element={<PTZ_H8_2 />} />
        <Route path='/Firmware/Hikvision/PTZ/H8 - DS-2DExxxx(T5)/3' element={<PTZ_H8_3 />} />
        <Route path='/Firmware/Hikvision/PTZ/H8 - DS-2DExxxx(T5)/4' element={<PTZ_H8_4 />} />
        <Route path='/Firmware/Hikvision/PTZ/H8 - DS-2DExxxx(T5)/5' element={<PTZ_H8_5 />} />


        <Route path='/Firmware/Hikvision/PTZ/H8 - DS-2DFxxxx(T5)/' element={<PTZ_HH8 />} />
        {/* /Firmware/Hikvision/PTZ/H8 - DS-2DFxxxx(T5) pages */}
        <Route path='/Firmware/Hikvision/PTZ/H8 - DS-2DFxxxx(T5)/1' element={<PTZ_HH8_1 />} />
        {/* /Firmware/Hikvision/PTZ/H8 - DS-2DFxxxx(T5)/1 pages */}
        <Route path='/Firmware/Hikvision/PTZ/H8 - DS-2DFxxxx(T5)/1/1' element={<PTZ_HH8_1_1 />} />
        <Route path='/Firmware/Hikvision/PTZ/H8 - DS-2DFxxxx(T5)/1/2' element={<PTZ_HH8_1_2 />} />

        {/* /Firmware/Hikvision/PTZ/PanoVu/ */}

        <Route path='/Firmware/Hikvision/PTZ/PanoVu/' element={<PTZ_Pano />} />
        {/* Firmware/Hikvision/PTZ/PanoVu/ pages */}
        <Route path='/Firmware/Hikvision/PTZ/PanoVu/1' element={<PTZ_Pano_1 />} />
        <Route path='/Firmware/Hikvision/PTZ/PanoVu/1/1' element={<PTZ_Pano_1_1 />} />


        <Route path='/Firmware/Hikvision/PTZ/PanoVu/2' element={<PTZ_Pano_2 />} />
        <Route path='/Firmware/Hikvision/PTZ/PanoVu/2/1' element={<PTZ_Pano_2_1 />} />
        <Route path='/Firmware/Hikvision/PTZ/PanoVu/2/2' element={<PTZ_Pano_2_2 />} />


        <Route path='/Firmware/Hikvision/PTZ/PanoVu/3' element={<PTZ_Pano_3 />} />
        <Route path='/Firmware/Hikvision/PTZ/PanoVu/3/1' element={<PTZ_Pano_3_1 />} />
        <Route path='/Firmware/Hikvision/PTZ/PanoVu/3/1' element={<PTZ_Pano_3_2 />} />
        <Route path='/Firmware/Hikvision/PTZ/PanoVu/3/3' element={<PTZ_Pano_3_3 />} />


        <Route path='/Firmware/Hikvision/PTZ/PanoVu/4' element={<PTZ_Pano_4 />} />
        <Route path='/Firmware/Hikvision/PTZ/PanoVu/4/1' element={<PTZ_Pano_4_1 />} />
        <Route path='/Firmware/Hikvision/PTZ/PanoVu/4/2' element={<PTZ_Pano_4_2 />} />


        <Route path='/Firmware/Hikvision/PTZ/PanoVu/5' element={<PTZ_Pano_5 />} />
        <Route path='/Firmware/Hikvision/PTZ/PanoVu/5/1' element={<PTZ_Pano_5_1 />} />


        {/* /Firmware/Hikvision/PTZ/TandemVu/ */}
        <Route path='/Firmware/Hikvision/PTZ/TandemVu/' element={<PTZ_Tandem />} />
        {/* /Firmware/Hikvision/PTZ/TandemVu/ pages */}
        <Route path='/Firmware/Hikvision/PTZ/TandemVu/1' element={<PTZ_Tandem_1 />} />
        <Route path='/Firmware/Hikvision/PTZ/TandemVu/2' element={<PTZ_Tandem_2 />} />
        <Route path='/Firmware/Hikvision/PTZ/TandemVu/3' element={<PTZ_Tandem_3 />} />
        <Route path='/Firmware/Hikvision/PTZ/TandemVu/4' element={<PTZ_Tandem_4 />} />
        <Route path='/Firmware/Hikvision/PTZ/TandemVu/5' element={<PTZ_Tandem_5 />} />

        <Route path='/Firmware/Hikvision/PTZ/Old models/' element={<PTZ_OldModel />} />
        {/* /Firmware/Hikvision/PTZ/Old models/ pages */}
        <Route path='/Firmware/Hikvision/PTZ/Old models/1' element={<PTZ_OldModel_1 />} />
        <Route path='/Firmware/Hikvision/PTZ/Old models/2' element={<PTZ_OldModel_2 />} />
        {/* /Firmware/Hikvision/PTZ/Old models/2/1 */}
        <Route path='/Firmware/Hikvision/PTZ/Old models/2/1' element={<PTZ_OldModel_2_1 />} />
        <Route path='/Firmware/Hikvision/PTZ/Old models/2/2' element={<PTZ_OldModel_2_2 />} />
        <Route path='/Firmware/Hikvision/PTZ/Old models/2/3' element={<PTZ_OldModel_2_3 />} />
        <Route path='/Firmware/Hikvision/PTZ/Old models/2/4' element={<PTZ_OldModel_2_4 />} />
        <Route path='/Firmware/Hikvision/PTZ/Old models/2/5' element={<PTZ_OldModel_2_5 />} />
        <Route path='/Firmware/Hikvision/PTZ/Old models/2/6' element={<PTZ_OldModel_2_6 />} />


        <Route path='/Firmware/Hikvision/PTZ/Positioning System Firmware/' element={<PTZ_Positioning />} />
        {/* /Firmware/Hikvision/PTZ/Positioning System Firmware pages */}

        <Route path='/Firmware/Hikvision/PTZ/Positioning System Firmware/1' element={<PTZ_Positioning_1 />} />
        <Route path='/Firmware/Hikvision/PTZ/Positioning System Firmware/1/1' element={<PTZ_Positioning_1_1 />} />
        <Route path='/Firmware/Hikvision/PTZ/Positioning System Firmware/1/2' element={<PTZ_Positioning_1_2 />} />


        <Route path='/Firmware/Hikvision/PTZ/Positioning System Firmware/2' element={<PTZ_Positioning_2 />} />
        {/* /Firmware/Hikvision/PTZ/Positioning System Firmware/2/1 */}
        <Route path='/Firmware/Hikvision/PTZ/Positioning System Firmware/2/1' element={<PTZ_Positioning_2_1 />} />
        <Route path='/Firmware/Hikvision/PTZ/Positioning System Firmware/2/2' element={<PTZ_Positioning_2_2 />} />
        <Route path='/Firmware/Hikvision/PTZ/Positioning System Firmware/2/3' element={<PTZ_Positioning_2_3 />} />
        <Route path='/Firmware/Hikvision/PTZ/Positioning System Firmware/2/4' element={<PTZ_Positioning_2_4 />} />
        <Route path='/Firmware/Hikvision/PTZ/Positioning System Firmware/2/5' element={<PTZ_Positioning_2_5 />} />



        <Route path='/Firmware/Hikvision/PTZ/Positioning System Firmware/3' element={<PTZ_Positioning_3 />} />
        <Route path='/Firmware/Hikvision/PTZ/Positioning System Firmware/4' element={<PTZ_Positioning_4 />} />


        <Route path='/Firmware/Hikvision/DVR (TVI regs)/' element={<DVRTVIregs />} />
        {/* /Firmware/Hikvision/DVR (TVI regs)/TVI 1.0 SH(E) series/ */}
        <Route path='/Firmware/Hikvision/DVR (TVI regs)/TVI 1.0 SH(E) series/' element={<DVRTVIregs_SH />} />
        {/*/Firmware/Hikvision/DVR (TVI regs)/TVI 1.0 SH(E) series/ pages   */}
        <Route path='/Firmware/Hikvision/DVR (TVI regs)/TVI 1.0 SH(E) series/1' element={<DVRTVIregs_SH_1 />} />
        <Route path='/Firmware/Hikvision/DVR (TVI regs)/TVI 1.0 SH(E) series/2' element={<DVRTVIregs_SH_2 />} />
        <Route path='/Firmware/Hikvision/DVR (TVI regs)/TVI 1.0 SH(E) series/2/1' element={<DVRTVIregs_SH_2_1 />} />
        <Route path='/Firmware/Hikvision/DVR (TVI regs)/TVI 1.0 SH(E) series/2/2' element={<DVRTVIregs_SH_2_2 />} />
        <Route path='/Firmware/Hikvision/DVR (TVI regs)/TVI 1.0 SH(E) series/2/3' element={<DVRTVIregs_SH_2_3 />} />

        <Route path='/Firmware/Hikvision/DVR (TVI regs)/TVI 3.0 F series/' element={<DVRTVIregs_F />} />
        {/* /Firmware/Hikvision/DVR (TVI regs)/TVI 3.0 F series pages */}
        <Route path='/Firmware/Hikvision/DVR (TVI regs)/TVI 3.0 F series/1' element={<DVRTVIregs_F_1 />} />
        <Route path='/Firmware/Hikvision/DVR (TVI regs)/TVI 3.0 F series/1/1' element={<DVRTVIregs_F_1_1 />} />


        <Route path='/Firmware/Hikvision/DVR (TVI regs)/TVI 3.0 F series/2' element={<DVRTVIregs_F_2 />} />
        <Route path='/Firmware/Hikvision/DVR (TVI regs)/TVI 3.0 F series/2/1' element={<DVRTVIregs_F_2_1 />} />
        <Route path='/Firmware/Hikvision/DVR (TVI regs)/TVI 3.0 F series/2/2' element={<DVRTVIregs_F_2_2 />} />
        <Route path='/Firmware/Hikvision/DVR (TVI regs)/TVI 3.0 F series/2/3' element={<DVRTVIregs_F_2_3 />} />
        <Route path='/Firmware/Hikvision/DVR (TVI regs)/TVI 3.0 F series/2/4' element={<DVRTVIregs_F_2_4 />} />


        <Route path='/Firmware/Hikvision/DVR (TVI regs)/TVI 3.0 F series/3' element={<DVRTVIregs_F_3 />} />



        <Route path='/Firmware/Hikvision/DVR (TVI regs)/TVI 4.0 K series/' element={<DVRTVIregs_K />} />
        {/* /Firmware/Hikvision/DVR (TVI regs) pages */}
        <Route path='/Firmware/Hikvision/DVR (TVI regs)/1' element={<DVRTVIregs_K_1 />} />
        <Route path='/Firmware/Hikvision/DVR (TVI regs)/2' element={<DVRTVIregs_K_2 />} />
        <Route path='/Firmware/Hikvision/DVR (TVI regs)/3' element={<DVRTVIregs_K_3 />} />
        <Route path='/Firmware/Hikvision/DVR (TVI regs)/4' element={<DVRTVIregs_K_4 />} />
        <Route path='/Firmware/Hikvision/DVR (TVI regs)/5' element={<DVRTVIregs_K_5 />} />
        <Route path='/Firmware/Hikvision/DVR (TVI regs)/6' element={<DVRTVIregs_K_6 />} />



        <Route path='/Firmware/Hikvision/DVR (TVI regs)/TVI 5.0 iDS series/' element={<DVRTVIregs_IDS />} />
        {/* /Firmware/Hikvision/DVR (TVI regs)/TVI 5.0 iDS series/ pages */}
        <Route path='/Firmware/Hikvision/DVR (TVI regs)/TVI 5.0 iDS series/1' element={<DVRTVIregs_IDS_1 />} />
        <Route path='/Firmware/Hikvision/DVR (TVI regs)/TVI 5.0 iDS series/2' element={<DVRTVIregs_IDS_2 />} />
        <Route path='/Firmware/Hikvision/DVR (TVI regs)/TVI 5.0 iDS series/3' element={<DVRTVIregs_IDS_3 />} />
        <Route path='/Firmware/Hikvision/DVR (TVI regs)/TVI 5.0 iDS series/4' element={<DVRTVIregs_IDS_4 />} />
        <Route path='/Firmware/Hikvision/DVR (TVI regs)/TVI 5.0 iDS series/5' element={<DVRTVIregs_IDS_5 />} />
        <Route path='/Firmware/Hikvision/DVR (TVI regs)/TVI 5.0 iDS series/6' element={<DVRTVIregs_IDS_6 />} />
        <Route path='/Firmware/Hikvision/DVR (TVI regs)/TVI 5.0 iDS series/6/1' element={<DVRTVIregs_IDS_6_1 />} />
        <Route path='/Firmware/Hikvision/DVR (TVI regs)/TVI 5.0 iDS series/6/2' element={<DVRTVIregs_IDS_6_2 />} />


        <Route path='/Firmware/Hikvision/DVR (TVI regs)/TVI 5.0 iDS series/7' element={<DVRTVIregs_IDS_7 />} />
        <Route path='/Firmware/Hikvision/DVR (TVI regs)/TVI 5.0 iDS series/8' element={<DVRTVIregs_IDS_8 />} />
        <Route path='/Firmware/Hikvision/DVR (TVI regs)/TVI 5.0 iDS series/9' element={<DVRTVIregs_IDS_9 />} />
        <Route path='/Firmware/Hikvision/DVR (TVI regs)/TVI 5.0 iDS series/10' element={<DVRTVIregs_IDS_10 />} />
        <Route path='/Firmware/Hikvision/DVR (TVI regs)/TVI 5.0 iDS series/11' element={<DVRTVIregs_IDS_11 />} />
        <Route path='/Firmware/Hikvision/DVR (TVI regs)/TVI 5.0 iDS series/12' element={<DVRTVIregs_IDS_12 />} />



        <Route path='/Firmware/Hikvision/Video Intercom/' element={<VideInterCom />} />
        {/* /Firmware/Hikvision/Video Intercom pages */}
        <Route path='/Firmware/Hikvision/Video Intercom/1' element={<VideInterCom_1 />} />
        <Route path='/Firmware/Hikvision/Video Intercom/1/1' element={<VideInterCom_1_1 />} />
        <Route path='/Firmware/Hikvision/Video Intercom/1/2' element={<VideInterCom_1_2 />} />
        <Route path='/Firmware/Hikvision/Video Intercom/1/2/1' element={<VideInterCom_1_2_1 />} />
        <Route path='/Firmware/Hikvision/Video Intercom/1/2/2' element={<VideInterCom_1_2_2 />} />
        <Route path='/Firmware/Hikvision/Video Intercom/1/2/3' element={<VideInterCom_1_2_3 />} />


        <Route path='/Firmware/Hikvision/Video Intercom/1/3' element={<VideInterCom_1_3 />} />
        <Route path='/Firmware/Hikvision/Video Intercom/1/4' element={<VideInterCom_1_4 />} />
        <Route path='/Firmware/Hikvision/Video Intercom/1/4/1' element={<VideInterCom_1_4_1 />} />
        <Route path='/Firmware/Hikvision/Video Intercom/1/4/2' element={<VideInterCom_1_4_2 />} />


        <Route path='/Firmware/Hikvision/Video Intercom/1/5' element={<VideInterCom_1_5 />} />
        <Route path='/Firmware/Hikvision/Video Intercom/1/5/1' element={<VideInterCom_1_5_1 />} />
        <Route path='/Firmware/Hikvision/Video Intercom/1/5/2' element={<VideInterCom_1_5_2 />} />
        <Route path='/Firmware/Hikvision/Video Intercom/1/5/3' element={<VideInterCom_1_5_3 />} />


        <Route path='/Firmware/Hikvision/Video Intercom/2' element={<VideInterCom_2 />} />
        <Route path='/Firmware/Hikvision/Video Intercom/2/1' element={<VideInterCom_2_1 />} />
        <Route path='/Firmware/Hikvision/Video Intercom/2/1/1' element={<VideInterCom_2_1_1 />} />
        <Route path='/Firmware/Hikvision/Video Intercom/2/1/2' element={<VideInterCom_2_1_2 />} />
        <Route path='/Firmware/Hikvision/Video Intercom/2/1/3' element={<VideInterCom_2_1_3 />} />
        <Route path='/Firmware/Hikvision/Video Intercom/2/1/4' element={<VideInterCom_2_1_4 />} />



        <Route path='/Firmware/Hikvision/Video Intercom/2/2' element={<VideInterCom_2_2 />} />
        <Route path='/Firmware/Hikvision/Video Intercom/2/2/1' element={<VideInterCom_2_2_1 />} />
        <Route path='/Firmware/Hikvision/Video Intercom/2/2/2' element={<VideInterCom_2_2_2 />} />
        {/* /Firmware/Hikvision/Video Intercom/2/2/2 pages */}
        <Route path='/Firmware/Hikvision/Video Intercom/2/2/2/1' element={<VideInterCom_2_2_2_1 />} />
        <Route path='/Firmware/Hikvision/Video Intercom/2/2/2/2' element={<VideInterCom_2_2_2_2 />} />
        <Route path='/Firmware/Hikvision/Video Intercom/2/2/2/3' element={<VideInterCom_2_2_2_3 />} />
        <Route path='/Firmware/Hikvision/Video Intercom/2/2/2/4' element={<VideInterCom_2_2_2_4 />} />
        <Route path='/Firmware/Hikvision/Video Intercom/2/2/2/5' element={<VideInterCom_2_2_2_5 />} />



        <Route path='/Firmware/Hikvision/Video Intercom/2/2/3' element={<VideInterCom_2_2_3 />} />
        <Route path='/Firmware/Hikvision/Video Intercom/2/2/4' element={<VideInterCom_2_2_4 />} />
        <Route path='/Firmware/Hikvision/Video Intercom/2/2/5' element={<VideInterCom_2_2_5 />} />
        <Route path='/Firmware/Hikvision/Video Intercom/2/2/6' element={<VideInterCom_2_2_6 />} />
        <Route path='/Firmware/Hikvision/Video Intercom/2/2/6/1' element={<VideInterCom_2_2_6_1 />} />

        <Route path='/Firmware/Hikvision/Video Intercom/2/2/7' element={<VideInterCom_2_2_7 />} />


        <Route path='/Firmware/Hikvision/Video Intercom/2/3' element={<VideInterCom_2_3 />} />
        {/* /Firmware/Hikvision/Video Intercom/2/3 pages */}
        <Route path='/Firmware/Hikvision/Video Intercom/2/3/1' element={<VideInterCom_2_3_1 />} />
        <Route path='/Firmware/Hikvision/Video Intercom/2/3/2' element={<VideInterCom_2_3_2 />} />
        <Route path='/Firmware/Hikvision/Video Intercom/2/3/3' element={<VideInterCom_2_3_3 />} />


        <Route path='/Firmware/Hikvision/Video Intercom/3' element={<VideInterCom_3 />} />
        <Route path='/Firmware/Hikvision/Video Intercom/3/1' element={<VideInterCom_3_1 />} />
        <Route path='/Firmware/Hikvision/Video Intercom/3/1/1' element={<VideInterCom_3_1_1 />} />
        <Route path='/Firmware/Hikvision/Video Intercom/3/1/2' element={<VideInterCom_3_1_2 />} />
        <Route path='/Firmware/Hikvision/Video Intercom/3/1/3' element={<VideInterCom_3_1_3 />} />
        <Route path='/Firmware/Hikvision/Video Intercom/3/1/4' element={<VideInterCom_3_1_4 />} />
        
        <Route path='/Firmware/Hikvision/Video Intercom/4' element={<VideInterCom_4 />} />
        {/* /Firmware/Hikvision/Video Intercom/4 pages */}
        <Route path='/Firmware/Hikvision/Video Intercom/4/1' element={<VideInterCom_4_1 />} />
        <Route path='/Firmware/Hikvision/Video Intercom/4/1/1' element={<VideInterCom_4_1_1 />} />
        <Route path='/Firmware/Hikvision/Video Intercom/4/1/2' element={<VideInterCom_4_1_2 />} />
        <Route path='/Firmware/Hikvision/Video Intercom/4/1/3' element={<VideInterCom_4_1_3 />} />


        <Route path='/Firmware/Hikvision/Video Intercom/4/2' element={<VideInterCom_4_2 />} />
        <Route path='/Firmware/Hikvision/Video Intercom/4/2/1' element={<VideInterCom_4_2_1 />} />
        <Route path='/Firmware/Hikvision/Video Intercom/4/2/2' element={<VideInterCom_4_2_2 />} />
        <Route path='/Firmware/Hikvision/Video Intercom/4/2/2/1' element={<VideInterCom_4_2_2_1 />} />
        <Route path='/Firmware/Hikvision/Video Intercom/4/2/2/2' element={<VideInterCom_4_2_2_2 />} />
        <Route path='/Firmware/Hikvision/Video Intercom/4/2/2/3' element={<VideInterCom_4_2_2_3 />} />



        <Route path='/Firmware/Hikvision/Access Control/' element={<AccessControl2 />} />

        <Route path='/Firmware/Hikvision/Access Control/Terminal' element={<Terminal />} />
        <Route path='/Firmware/Hikvision/Access Control/Terminal/1' element={<Terminal_1 />} />
        <Route path='/Firmware/Hikvision/Access Control/Terminal/2' element={<Terminal_2 />} />
        <Route path='/Firmware/Hikvision/Access Control/Terminal/2/1' element={<Terminal_2_1 />} />
        <Route path='/Firmware/Hikvision/Access Control/Terminal/2/2' element={<Terminal_2_2 />} />
        <Route path='/Firmware/Hikvision/Access Control/Terminal/2/3' element={<Terminal_2_3 />} />


        <Route path='/Firmware/Hikvision/Access Control/Terminal/3' element={<Terminal_3 />} />
        <Route path='/Firmware/Hikvision/Access Control/Terminal/3/1' element={<Terminal_3_1 />} />
        

        <Route path='/Firmware/Hikvision/Access Control/Terminal/4' element={<Terminal_4 />} />
        <Route path='/Firmware/Hikvision/Access Control/Terminal/4/1' element={<Terminal_4_1 />} />
        <Route path='/Firmware/Hikvision/Access Control/Terminal/4/1/1' element={<Terminal_4_1_1 />} />
        <Route path='/Firmware/Hikvision/Access Control/Terminal/4/1/2' element={<Terminal_4_1_2 />} />


        <Route path='/Firmware/Hikvision/Access Control/Terminal/5' element={<Terminal_5 />} />
        <Route path='/Firmware/Hikvision/Access Control/Terminal/6' element={<Terminal_6 />} />
        

        <Route path='/Firmware/Hikvision/Access Control/Terminal/7' element={<Terminal_7 />} />
        <Route path='/Firmware/Hikvision/Access Control/Terminal/8' element={<Terminal_8 />} />
        <Route path='/Firmware/Hikvision/Access Control/Terminal/9' element={<Terminal_9 />} />
        <Route path='/Firmware/Hikvision/Access Control/Terminal/10' element={<Terminal_10 />} />
        <Route path='/Firmware/Hikvision/Access Control/Terminal/11' element={<Terminal_11 />} />
        <Route path='/Firmware/Hikvision/Access Control/Terminal/12' element={<Terminal_12 />} />
        <Route path='/Firmware/Hikvision/Access Control/Terminal/13' element={<Terminal_13 />} />
        <Route path='/Firmware/Hikvision/Access Control/Terminal/14' element={<Terminal_14 />} />
        <Route path='/Firmware/Hikvision/Access Control/Terminal/15' element={<Terminal_15 />} />
        <Route path='/Firmware/Hikvision/Access Control/Terminal/16' element={<Terminal_16 />} />
        <Route path='/Firmware/Hikvision/Access Control/Terminal/17' element={<Terminal_17 />} />
        <Route path='/Firmware/Hikvision/Access Control/Terminal/18' element={<Terminal_18 />} />
        <Route path='/Firmware/Hikvision/Access Control/Terminal/19' element={<Terminal_19 />} />
        <Route path='/Firmware/Hikvision/Access Control/Terminal/20' element={<Terminal_20 />} />
        <Route path='/Firmware/Hikvision/Access Control/Terminal/21' element={<Terminal_21 />} />
        <Route path='/Firmware/Hikvision/Access Control/Terminal/22' element={<Terminal_22 />} />
        <Route path='/Firmware/Hikvision/Access Control/Terminal/23' element={<Terminal_23 />} />
        <Route path='/Firmware/Hikvision/Access Control/Terminal/24' element={<Terminal_24 />} />
        <Route path='/Firmware/Hikvision/Access Control/Terminal/25' element={<Terminal_25 />} />
        <Route path='/Firmware/Hikvision/Access Control/Terminal/26' element={<Terminal_26 />} />
        <Route path='/Firmware/Hikvision/Access Control/Terminal/27' element={<Terminal_27 />} />
        <Route path='/Firmware/Hikvision/Access Control/Terminal/28' element={<Terminal_28 />} />
        <Route path='/Firmware/Hikvision/Access Control/Terminal/29' element={<Terminal_29 />} />
        <Route path='/Firmware/Hikvision/Access Control/Terminal/30' element={<Terminal_30 />} />
        <Route path='/Firmware/Hikvision/Access Control/Terminal/31' element={<Terminal_31 />} />

        <Route path='/Firmware/Hikvision/Access Control/Secure Module/' element={<SecureModule />} />
        <Route path='/Firmware/Hikvision/Access Control/Secure Module/1' element={<SecureModule_1 />} />

        <Route path='/Firmware/Hikvision/Access Control/Card Reader/' element={<CardReader />} />
        <Route path='/Firmware/Hikvision/Access Control/Card Reader/1/' element={<CardReader_1/>} />
        <Route path='/Firmware/Hikvision/Access Control/Card Reader/2/' element={<CardReader_2/>} />
        <Route path='/Firmware/Hikvision/Access Control/Card Reader/3/' element={<CardReader_3/>} />

        <Route path='/Firmware/Hikvision/Access Control/Access Controller/' element={<AccessControl2_1 />} />
        <Route path='/Firmware/Hikvision/Access Control/Access Controller/1/' element={<AccessControl2_1_1 />} />
        <Route path='/Firmware/Hikvision/Access Control/Access Controller/2/' element={<AccessControl2_1_2 />} />
        <Route path='/Firmware/Hikvision/Access Control/Access Controller/3/' element={<AccessControl2_1_3 />} />
        <Route path='/Firmware/Hikvision/Access Control/Access Controller/4/' element={<AccessControl2_1_4 />} />
        <Route path='/Firmware/Hikvision/Access Control/Access Controller/4/1' element={<AccessControl2_1_4_1 />} />
        <Route path='/Firmware/Hikvision/Access Control/Access Controller/4/2' element={<AccessControl2_1_4_2 />} />
        <Route path='/Firmware/Hikvision/Access Control/Access Controller/4/3' element={<AccessControl2_1_4_3 />} />
        <Route path='/Firmware/Hikvision/Access Control/Access Controller/4/4' element={<AccessControl2_1_4_4 />} />
        <Route path='/Firmware/Hikvision/Access Control/Access Controller/4/5' element={<AccessControl2_1_4_5 />} />
        <Route path='/Firmware/Hikvision/Access Control/Access Controller/2/1' element={<AccessControl2_1_2_1 />} />
        <Route path='/Firmware/Hikvision/Access Control/Access Controller/2/2' element={<AccessControl2_1_2_2 />} />
        <Route path='/Firmware/Hikvision/Access Control/Access Controller/2/3' element={<AccessControl2_1_2_3 />} />
        <Route path='/Firmware/Hikvision/Access Control/Access Controller/2/4' element={<AccessControl2_1_2_4 />} />
        <Route path='/Firmware/Hikvision/Access Control/Access Controller/2/5' element={<AccessControl2_1_2_5 />} />
        <Route path='/Firmware/Hikvision/Access Control/Access Controller/1/1' element={<AccessControl2_1_1_1 />} />
        <Route path='/Firmware/Hikvision/Access Control/Access Controller/1/2' element={<AccessControl2_1_1_2 />} />
        <Route path='/Firmware/Hikvision/Access Control/Access Controller/1/3' element={<AccessControl2_1_1_3 />} />



        <Route path='/Firmware/Hikvision/Alarm/' element={<Alarm />} />
        {/* /Firmware/Hikvision/Alarm/DS-PEA Emergency Alarm/ pages */}
        <Route path='/Firmware/Hikvision/Alarm/DS-PEA Emergency Alarm/' element={<Alarm_PEA />} />
        <Route path='/Firmware/Hikvision/Alarm/DS-PEA Emergency Alarm/1' element={<Alarm_PEA_1 />} />
        <Route path='/Firmware/Hikvision/Alarm/DS-PEA Emergency Alarm/2' element={<Alarm_PEA_2 />} />
        <Route path='/Firmware/Hikvision/Alarm/DS-PEA Emergency Alarm/3' element={<Alarm_PEA_3 />} />
        <Route path='/Firmware/Hikvision/Alarm/DS-PEA Emergency Alarm/4' element={<Alarm_PEA_4 />} />
        <Route path='/Firmware/Hikvision/Alarm/DS-PEA Emergency Alarm/5' element={<Alarm_PEA_5 />} />
        <Route path='/Firmware/Hikvision/Alarm/DS-PEA Emergency Alarm/6' element={<Alarm_PEA_6 />} />
        <Route path='/Firmware/Hikvision/Alarm/DS-PEA Emergency Alarm/7' element={<Alarm_PEA_7 />} />
        <Route path='/Firmware/Hikvision/Alarm/DS-PEA Emergency Alarm/7/1' element={<Alarm_PEA_7_1 />} />
        <Route path='/Firmware/Hikvision/Alarm/DS-PEA Emergency Alarm/7/2' element={<Alarm_PEA_7_2 />} />
        <Route path='/Firmware/Hikvision/Alarm/DS-PEA Emergency Alarm/7/3' element={<Alarm_PEA_7_3 />} />
        <Route path='/Firmware/Hikvision/Alarm/DS-PEA Emergency Alarm/8' element={<Alarm_PEA_8 />} />
        <Route path='/Firmware/Hikvision/Alarm/DS-PEA Emergency Alarm/9' element={<Alarm_PEA_9 />} />


        {/* /Firmware/Hikvision/Alarm/DS-PHA Hybrid Pro Security Control Panel/ pages */}
        <Route path='/Firmware/Hikvision/Alarm/DS-PHA Hybrid Pro Security Control Panel/' element={<Alarm_PHA />} />
        <Route path='/Firmware/Hikvision/Alarm/DS-PHA Hybrid Pro Security Control Panel/1' element={<Alarm_PHA_1 />} />
        <Route path='/Firmware/Hikvision/Alarm/DS-PHA Hybrid Pro Security Control Panel/2' element={<Alarm_PHA_2 />} />
        <Route path='/Firmware/Hikvision/Alarm/DS-PHA Hybrid Pro Security Control Panel/3' element={<Alarm_PHA_3 />} />
        <Route path='/Firmware/Hikvision/Alarm/DS-PHA Hybrid Pro Security Control Panel/3/1' element={<Alarm_PHA_3_1 />} />
        <Route path='/Firmware/Hikvision/Alarm/DS-PHA Hybrid Pro Security Control Panel/3/1/1' element={<Alarm_PHA_3_1_1 />} />
        <Route path='/Firmware/Hikvision/Alarm/DS-PHA Hybrid Pro Security Control Panel/3/1/1/1' element={<Alarm_PHA_3_1_1_1 />} />
        <Route path='/Firmware/Hikvision/Alarm/DS-PHA Hybrid Pro Security Control Panel/3/1/2' element={<Alarm_PHA_3_1_2 />} />
        <Route path='/Firmware/Hikvision/Alarm/DS-PHA Hybrid Pro Security Control Panel/3/1/3' element={<Alarm_PHA_3_1_3 />} />
        <Route path='/Firmware/Hikvision/Alarm/DS-PHA Hybrid Pro Security Control Panel/3/1/4' element={<Alarm_PHA_3_1_4 />} />
        <Route path='/Firmware/Hikvision/Alarm/DS-PHA Hybrid Pro Security Control Panel/3/1/5' element={<Alarm_PHA_3_1_5 />} />


        {/* /Firmware/Hikvision/Alarm/DS-PHA Hybrid Security Control Panel/ pages */}
        <Route path='/Firmware/Hikvision/Alarm/DS-PHA Hybrid Security Control Panel/' element={<Alarm_PHA1 />} /> 
        <Route path='/Firmware/Hikvision/Alarm/DS-PHA Hybrid Security Control Panel/1' element={<Alarm_PHA1_1 />} /> 
        <Route path='/Firmware/Hikvision/Alarm/DS-PHA Hybrid Security Control Panel/1/1' element={<Alarm_PHA1_1_1 />} /> 
        <Route path='/Firmware/Hikvision/Alarm/DS-PHA Hybrid Security Control Panel/1/1/1' element={<Alarm_PHA1_1_1_1 />} /> 
        <Route path='/Firmware/Hikvision/Alarm/DS-PHA Hybrid Security Control Panel/1/2' element={<Alarm_PHA1_1_2 />} /> 
        <Route path='/Firmware/Hikvision/Alarm/DS-PHA Hybrid Security Control Panel/1/2/1' element={<Alarm_PHA1_1_2_1 />} /> 
        <Route path='/Firmware/Hikvision/Alarm/DS-PHA Hybrid Security Control Panel/1/2/2' element={<Alarm_PHA1_1_2_2 />} /> 
        <Route path='/Firmware/Hikvision/Alarm/DS-PHA Hybrid Security Control Panel/2' element={<Alarm_PHA1_2 />} /> 
        <Route path='/Firmware/Hikvision/Alarm/DS-PHA Hybrid Security Control Panel/3' element={<Alarm_PHA1_3 />} /> 
        <Route path='/Firmware/Hikvision/Alarm/DS-PHA Hybrid Security Control Panel/4' element={<Alarm_PHA1_4 />} />


        {/* /Firmware/Hikvision/Alarm/DS-PR Security Rader/ pages  */}
        <Route path='/Firmware/Hikvision/Alarm/DS-PR Security Rader/' element={<Alarm_PR />} />
        <Route path='/Firmware/Hikvision/Alarm/DS-PR Security Rader/1' element={<Alarm_PR_1 />} />
        <Route path='/Firmware/Hikvision/Alarm/DS-PR Security Rader/1/1' element={<Alarm_PR_1_1 />} />
        <Route path='/Firmware/Hikvision/Alarm/DS-PR Security Rader/1/2' element={<Alarm_PR_1_2 />} />
        <Route path='/Firmware/Hikvision/Alarm/DS-PR Security Rader/2' element={<Alarm_PR_2/>} />
        <Route path='/Firmware/Hikvision/Alarm/DS-PR Security Rader/2/1' element={<Alarm_PR_2_1 />} />
        <Route path='/Firmware/Hikvision/Alarm/DS-PR Security Rader/2/2' element={<Alarm_PR_2_2 />} />


        {/* /Firmware/Hikvision/Alarm/DS-PWA32 Wireless Hub/ */}
        <Route path='/Firmware/Hikvision/Alarm/DS-PWA32 Wireless Hub/' element={<Alarm_PWA32 />} />
        <Route path='/Firmware/Hikvision/Alarm/DS-PWA32 Wireless Hub/1' element={<Alarm_PWA32_1 />} />


        {/* /Firmware/Hikvision/Alarm/DS-PWA48-64-96 AX PRO Wireless Control Panel/ */}
        <Route path='/Firmware/Hikvision/Alarm/DS-PWA48-64-96 AX PRO Wireless Control Panel/' element={<Alarm_PWA48 />} />
        <Route path='/Firmware/Hikvision/Alarm/DS-PWA48-64-96 AX PRO Wireless Control Panel/1' element={<Alarm_PWA48_1 />} />
        <Route path='/Firmware/Hikvision/Alarm/DS-PWA48-64-96 AX PRO Wireless Control Panel/1/1' element={<Alarm_PWA48_1_1 />} />
        <Route path='/Firmware/Hikvision/Alarm/DS-PWA48-64-96 AX PRO Wireless Control Panel/2' element={<Alarm_PWA48_2 />} />
        <Route path='/Firmware/Hikvision/Alarm/DS-PWA48-64-96 AX PRO Wireless Control Panel/2/1' element={<Alarm_PWA48_2_1 />} />
        <Route path='/Firmware/Hikvision/Alarm/DS-PWA48-64-96 AX PRO Wireless Control Panel/3' element={<Alarm_PWA48_3 />} />
        <Route path='/Firmware/Hikvision/Alarm/DS-PWA48-64-96 AX PRO Wireless Control Panel/4' element={<Alarm_PWA48_4 />} />
        <Route path='/Firmware/Hikvision/Alarm/DS-PWA48-64-96 AX PRO Wireless Control Panel/5' element={<Alarm_PWA48_5 />} />
        <Route path='/Firmware/Hikvision/Alarm/DS-PWA48-64-96 AX PRO Wireless Control Panel/6' element={<Alarm_PWA48_6 />} />
        <Route path='/Firmware/Hikvision/Alarm/DS-PWA48-64-96 AX PRO Wireless Control Panel/7' element={<Alarm_PWA48_7 />} />
        <Route path='/Firmware/Hikvision/Alarm/DS-PWA48-64-96 AX PRO Wireless Control Panel/8' element={<Alarm_PWA48_8 />} />
        <Route path='/Firmware/Hikvision/Alarm/DS-PWA48-64-96 AX PRO Wireless Control Panel/9' element={<Alarm_PWA48_9 />} />
        <Route path='/Firmware/Hikvision/Alarm/DS-PWA48-64-96 AX PRO Wireless Control Panel/10' element={<Alarm_PWA48_10 />} />
        <Route path='/Firmware/Hikvision/Alarm/DS-PWA48-64-96 AX PRO Wireless Control Panel/11' element={<Alarm_PWA48_11 />} />
        <Route path='/Firmware/Hikvision/Alarm/DS-PWA48-64-96 AX PRO Wireless Control Panel/12' element={<Alarm_PWA48_12 />} />
        <Route path='/Firmware/Hikvision/Alarm/DS-PWA48-64-96 AX PRO Wireless Control Panel/13' element={<Alarm_PWA48_13 />} />
        <Route path='/Firmware/Hikvision/Alarm/DS-PWA48-64-96 AX PRO Wireless Control Panel/14' element={<Alarm_PWA48_14 />} />
        <Route path='/Firmware/Hikvision/Alarm/DS-PWA48-64-96 AX PRO Wireless Control Panel/15' element={<Alarm_PWA48_15 />} />







        <Route path='/Firmware/Hikvision/Keyboards/' element={<Keyboards />} />


        <Route path='/Firmware/Hikvision/Network/' element={<Network />} />
        {/* /Firmware/Hikvision/Network/Network Switch/ */}
        <Route path='/Firmware/Hikvision/Network/Network Switch/' element={<Network_Switch />} />
        {/* /Firmware/Hikvision/Network/Network Switch/ pages */}
        <Route path='/Firmware/Hikvision/Network/Network Switch/1' element={<Network_Switch_1 />} />
        <Route path='/Firmware/Hikvision/Network/Network Switch/2' element={<Network_Switch_2 />} />
        <Route path='/Firmware/Hikvision/Network/Network Switch/3' element={<Network_Switch_3 />} />
        <Route path='/Firmware/Hikvision/Network/Network Switch/4' element={<Network_Switch_4 />} />
        <Route path='/Firmware/Hikvision/Network/Network Switch/5' element={<Network_Switch_5 />} />
        <Route path='/Firmware/Hikvision/Network/Network Switch/6' element={<Network_Switch_6 />} />
        <Route path='/Firmware/Hikvision/Network/Network Switch/7' element={<Network_Switch_7 />} />
        <Route path='/Firmware/Hikvision/Network/Network Switch/8' element={<Network_Switch_8 />} />
        <Route path='/Firmware/Hikvision/Network/Network Switch/9' element={<Network_Switch_9 />} />
        <Route path='/Firmware/Hikvision/Network/Network Switch/10' element={<Network_Switch_10 />} />
        <Route path='/Firmware/Hikvision/Network/Network Switch/11' element={<Network_Switch_11 />} />
        <Route path='/Firmware/Hikvision/Network/Network Switch/12' element={<Network_Switch_12 />} />
        <Route path='/Firmware/Hikvision/Network/Network Switch/13' element={<Network_Switch_13 />} />
        <Route path='/Firmware/Hikvision/Network/Network Switch/14' element={<Network_Switch_14 />} />
        <Route path='/Firmware/Hikvision/Network/Network Switch/15' element={<Network_Switch_15 />} />
        <Route path='/Firmware/Hikvision/Network/Network Switch/16' element={<Network_Switch_16 />} />


        <Route path='/Firmware/Hikvision/Network/Wireless Bridge/' element={<Network_Wire />} />



        <Route path='/Firmware/Hikvision/Thermal/' element={<Thermal2 />} />
        <Route path='/Firmware/Hikvision/Storage/' element={<Storage2 />} />
        <Route path='/Firmware/Hikvision/Storage/Hybrid SAN/' element={<StorageHybridSAN />} />
        <Route path='/Firmware/Hikvision/Storage/Hybrid SAN/1. Firmware/' element={<HybridSAN1Firmware />} />
        <Route path='/Firmware/Hikvision/Storage/Hybrid SAN/1. Firmware/DS-A81016S DS-A80624S DS-A720XXR/' element={<DSA81016SDSA80624SDSA720XXR />} />
        <Route path='/Firmware/Hikvision/Storage/Hybrid SAN/1. Firmware/DS-A81016S DS-A80624S DS-A720XXR/231-4MC001(based on 231-4MA&231-4MB）/' element={<DSMC001basedon2314MA2314MB />} />
        <Route path='/Firmware/Hikvision/Storage/Hybrid SAN/1. Firmware/DS-A81016S DS-A80624S DS-A720XXR/232-6 (based on 231-4MC）/' element={<DS2326basedon2314MC />} />
        <Route path='/Firmware/Hikvision/Storage/Hybrid SAN/1. Firmware/DS-A81016S DS-A80624S DS-A720XXR/232-6 （based on 232-4&232-5)/' element={<DS2326basedon23242325 />} />
        <Route path='/Firmware/Hikvision/Storage/Hybrid SAN/1. Firmware/DS-A81016S DS-A80624S DS-A720XXR/234-3（based on 232-6）/' element={<DS2343basedon2326 />} />
        <Route path='/Firmware/Hikvision/Storage/Hybrid SAN/1. Firmware/DS-A81016S DS-A80624S DS-A720XXR/234（based on 232-6）/' element={<DS234basedon2326 />} />
        <Route path='/Firmware/Hikvision/Storage/Hybrid SAN/1. Firmware/DS-A81016S DS-A80624S DS-A720XXR/235-2（based on 234 or 234-3）/' element={<DS2352basedon234or2343 />} />
        <Route path='/Firmware/Hikvision/Storage/Hybrid SAN/1. Firmware/DS-A81016S DS-A80624S DS-A720XXR/236-2（based on 234 or 234-3 or 235-2）/' element={<DS2362basedonor2343or2352 />} />
        <Route path='/Firmware/Hikvision/Storage/Hybrid SAN/1. Firmware/DS-A81016S DS-A80624S DS-A720XXR/237-2/' element={<DS2372 />} />
        <Route path='/Firmware/Hikvision/Storage/Hybrid SAN/1. Firmware/DS-A81016S DS-A80624S DS-A720XXR/238-8(based on 236-2 and above)/' element={<DS2388basedon2362andabove />} />
        <Route path='/Firmware/Hikvision/Storage/Hybrid SAN/1. Firmware/DS-A82024D/' element={<StorageDSA82024D />} />
        <Route path='/Firmware/Hikvision/Storage/Hybrid SAN/1. Firmware/DS-A82024D/231-4MC(based on 231-4MA&231-4MB）' element={<ST2314MCbasedon2314MA2314MB />} />
        <Route path='/Firmware/Hikvision/Storage/Hybrid SAN/1. Firmware/DS-A82024D/232-6 (based on 231-4MC）' element={<ST2326basedon2314MC />} />
        <Route path='/Firmware/Hikvision/Storage/Hybrid SAN/1. Firmware/DS-A82024D/232-6 （based on 232-4&232-5)' element={<ST2326basedon23242325 />} />
        <Route path='/Firmware/Hikvision/Storage/Hybrid SAN/1. Firmware/DS-A82024D/234 (based on 232-6)' element={<ST234basedon2326 />} />
        <Route path='/Firmware/Hikvision/Storage/Hybrid SAN/1. Firmware/DS-A82024D/234-3 (based on 232-6)' element={<ST2343basedon2326 />} />
        <Route path='/Firmware/Hikvision/Storage/Hybrid SAN/1. Firmware/DS-A82024D/235-2（based on 234 or 234-3）' element={<ST2352basedon234or2343 />} />
        <Route path='/Firmware/Hikvision/Storage/Hybrid SAN/1. Firmware/DS-A82024D/236-2（based on 234 or 234-3 or 235-2）' element={<ST2362basedon234or2343or2352 />} />
        <Route path='/Firmware/Hikvision/Storage/Hybrid SAN/1. Firmware/DS-A82024D/237-2（based on 234 or 234-3 or 235-2 or 236-2）' element={<ST2372basedon234or2343or2352or2362 />} />
        <Route path='/Firmware/Hikvision/Storage/Hybrid SAN/1. Firmware/DS-A82024D/238-4 (based on 234 or 234-3 or 235-2 or 236-2 or 237-2 or 238-2) ' element={<ST2384basedon234or2343or2352or2362or2372or2382 />} />
        <Route path='/Firmware/Hikvision/Storage/Hybrid SAN/1. Firmware/DS-A82024D/238-8(based on 236-2 and above)' element={<ST2388basedon2362andabove />} />
        <Route path='/Firmware/Hikvision/Storage/Hybrid SAN/2. How to/' element={<HybridSAN2Howto />} />
        <Route path='/Firmware/Hikvision/Storage/Hybrid SAN/2. How to/Basic configuration/' element={<STBasicconfiguration />} />
        <Route path='/Firmware/Hikvision/Storage/Hybrid SAN/2. How to/Email alarm/' element={<STEmailalarm />} />
        <Route path='/Firmware/Hikvision/Storage/Hybrid SAN/2. How to/Hybrid san back up application/' element={<STHybridsanbackupapplication />} />
        <Route path='/Firmware/Hikvision/Storage/Hybrid SAN/2. How to/Hybrid san stream direct storage application/' element={<STHybridsanstreamdirectstorageapplication />} />
        <Route path='/Firmware/Hikvision/Storage/Hybrid SAN/2. How to/Ipsan application/' element={<STIpsanapplication />} />
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
        {/* a seria */}
        <Route path='/Firmware/Hikvision/IP Camera/5 series - 5XXX/1' element={<A5series5XXX_1 />} />
        <Route path='/Firmware/Hikvision/IP Camera/5 series - 5XXX/1_1' element={<A5series5XXX_1_3 />} />
        <Route path='/Firmware/Hikvision/IP Camera/5 series - 5XXX/1_2' element={<A5series5XXX_1_2 />} />


        <Route path='/Firmware/Hikvision/IP Camera/6 series - 6XXX/' element={<A6series6XXX />} />

        {/* a6 series */}
        <Route path='/Firmware/Hikvision/IP Camera/6 series - 6XXX/H3 platform (DS-2CD6DX4_6924)/' element={<A6series6XXX_1_1 />} />
        <Route path='/Firmware/Hikvision/IP Camera/6 series - 6XXX/H3 platform (DS-2CD6DX4_6924)/p1' element={<A6series6XXX_1_p1 />} />
        <Route path='/Firmware/Hikvision/IP Camera/6 series - 6XXX/H3 platform (DS-2CD6DX4_6924)/p2' element={<A6series6XXX_1_p2 />} />
        {/* a6 2 */}

        <Route path='/Firmware/Hikvision/IP Camera/6 series - 6XXX/H3+M platform (6425G0F63X5)/' element={<A6series6XXX_2_1 />} />
        <Route path='/Firmware/Hikvision/IP Camera/6 series - 6XXX/H3 platform (DS-2CD6DX4_6924)/p1_1' element={<A6series6XXX_2_1_1 />} />

        <Route path='/Firmware/Hikvision/IP Camera/6 series - 6XXX/H7 platform (DS-2CDXM6825,DS-2CD6DX2,DS-2XE68X5)/' element={<A6series6XXX_h7 />} />
        <Route path='/Firmware/Hikvision/IP Camera/6 series - 6XXX/H3 platform (DS-2CD6DX4_6924)/h7_1' element={<A6series6XXX_h7_1 />} />


        <Route path='/Firmware/Hikvision/IP Camera/6 series - 6XXX/R4 DS-2CD6986F/' element={<A6series6XXX_r4 />} />
        <Route path='/Firmware/Hikvision/IP Camera/6 series - 6XXX/R4 Fisheye (DS-2CD63X2)/' element={<A6series6XXX_r4_2 />} />


        {/* 7 seria */}
        <Route path='/Firmware/Hikvision/IP Camera/7 series - 7XXX/' element={<A7series7XXX />} />
        {/* 7 seria pages */}

        <Route path='/Firmware/Hikvision/IP Camera/7 series - 7XXX/H3 platform (DS-2CD7XXX)/' element={<A7series7XXX_1 />} />
        {/* 7s h3 pages */}
        <Route path='/Firmware/Hikvision/IP Camera/7 series - 7XXX/H3 platform (DS-2CD7XXX)/h3_1' element={<A7series7XXX_h3_1 />} />
        <Route path='/Firmware/Hikvision/IP Camera/7 series - 7XXX/H7 platform (iDS-2CD7XXX)/h3_2' element={<A7series7XXX_h3_2 />} />


        <Route path='/Firmware/Hikvision/IP Camera/7 series - 7XXX/H7 platform (iDS-2CD7XXX)/' element={<A7series7XXX_2 />} />
        {/* 7s h7 pages */}
        <Route path='/Firmware/Hikvision/IP Camera/7 series - 7XXX/H3 platform (DS-2CD7XXX)/h7_1' element={<A7series7XXX_h7_1 />} />
        <Route path='/Firmware/Hikvision/IP Camera/7 series - 7XXX/H7 platform (iDS-2CD7XXX)/h7_2' element={<A7series7XXX_h7_2 />} />


        <Route path='/Firmware/Hikvision/IP Camera/7 series - 7XXX/H8 platform (iDS-2CD7XXX(C), iDS-2CD71XX(D))/' element={<A7series7XXX_3 />} />
        {/* 7s h8 pages */}
        <Route path='/Firmware/Hikvision/IP Camera/7 series - 7XXX/H3 platform (DS-2CD7XXX)/h8_1' element={<A7series7XXX_h8_1 />} />
        <Route path='/Firmware/Hikvision/IP Camera/7 series - 7XXX/H7 platform (iDS-2CD7XXX)/h8_2' element={<A7series7XXX_h8_2 />} />
        <Route path='/Firmware/Hikvision/IP Camera/7 series - 7XXX/H8 platform (iDS-2CD7XXX(C), iDS-2CD71XX(D))/h8_3' element={<A7series7XXX_h8_3 />} />



        <Route path='/Firmware/Hikvision/IP Camera/8 series - 8XXX/' element={<A8series8XXX />} />
        {/* 8 seria pages */}
        <Route path='/Firmware/Hikvision/IP Camera/8 series - 8XXX/H3 platform/' element={<A8series8XXX_1 />} />
        <Route path='/Firmware/Hikvision/IP Camera/8 series - 8XXX/H3 platform/1' element={<A8series8XXX_1_1 />} />
        <Route path='/Firmware/Hikvision/IP Camera/8 series - 8XXX/H3 platform/1_1' element={<A8series8XXX_h3_1 />} />



        <Route path='/Firmware/Hikvision/IP Camera/Other/' element={<Other />} />

        {/* others pages */}
        <Route path='/Firmware/Hikvision/IP Camera/Other/p' element={<Other_1 />} />
        {/* others p ser 1 */}
        <Route path='/Firmware/Hikvision/IP Camera/Other/p' element={<Other_1 />} />

        {/* others p ser 1_1 */}
        <Route path='/Firmware/Hikvision/IP Camera/Other/p_1' element={<Other_1_p1 />} />
        <Route path='/Firmware/Hikvision/IP Camera/Other/p_1_1' element={<Other_1_p1_1 />} />


        <Route path='/Firmware/Hikvision/IP Camera/Other/p_2' element={<Other_1_p2 />} />

        <Route path='/Firmware/Hikvision/IP Camera/Other/p_3' element={<Other_1_p3 />} />



        <Route path='/Firmware/Hikvision/IP Camera/Other/p_4' element={<Other_1_p4 />} />
        <Route path='Firmware/Hikvision/IP Camera/Other/ids(c)_1' element={<Other_1_p4_1 />} />
        <Route path='Firmware/Hikvision/IP Camera/Other/ids(c)_2' element={<Other_1_p4_2 />} />
        <Route path='Firmware/Hikvision/IP Camera/Other/ids(c)_3' element={<Other_1_p4_3 />} />
        <Route path='Firmware/Hikvision/IP Camera/Other/ids(c)_4' element={<Other_1_p4_4 />} />
        <Route path='Firmware/Hikvision/IP Camera/Other/ids(c)_5' element={<Other_1_p4_5 />} />





        <Route path='/Firmware/Hikvision/IP Camera/Other/imds' element={<Other_2 />} />
        {/* ids pages */}
        <Route path='/Firmware/Hikvision/IP Camera/Other/pids_1' element={<Other_2_1 />} />



        <Route path='/Firmware/Hikvision/IP Camera/Other/pids_2' element={<Other_2_2 />} />

        <Route path='/Firmware/Hikvision/IP Camera/Other/pids_2_1' element={<Other_2_2_1 />} />
        <Route path='/Firmware/Hikvision/IP Camera/Other/pids_2_1_1' element={<Other_2_2_1_1 />} />
        <Route path='/Firmware/Hikvision/IP Camera/Other/pids_2_1_2' element={<Other_2_2_1_2 />} />
        <Route path='/Firmware/Hikvision/IP Camera/Other/pids_2_1_3' element={<Other_2_2_1_3 />} />


        <Route path='/Firmware/Hikvision/IP Camera/Other/pids_2_2' element={<Other_2_2_2 />} />
        {/* ids_2_2 pages */}
        <Route path='/Firmware/Hikvision/IP Camera/Other/pids_2_2_1' element={<Other_2_2_2_1 />} />
        <Route path='/Firmware/Hikvision/IP Camera/Other/pids_2_2_2' element={<Other_2_2_2_2 />} />



        {/* Firmware/Only for Warehouse/ */}
        <Route path='/Firmware/Only for Warehouse/DS-2CD2123G0E-I(B)/' element={<DS2CD2123G0EIB />} />
        <Route path='/Firmware/Only for Warehouse/DS-I200(D)/' element={<DSI200D />} />
        <Route path='/Firmware/Only for Warehouse/DS-I205M(B)(C0)DS-I405M(B)(C0)/' element={<DSI205MBC0DSI405MBC0 />} />
        <Route path='/Firmware/Only for Warehouse/DS-I214(W)(B)/' element={<DSI214WB />} />
        <Route path='/Firmware/Only for Warehouse/DS-I215(C)DS-I225(C)DS-I415/' element={<DSI215CDSI225CDSI415 />} />
        <Route path='/Firmware/Only for Warehouse/DS-I250LDS-I253L/' element={<DSI250LDSI253L />} />
        <Route path='/Firmware/Only for Warehouse/DS-I250W(B)I252W(B)/' element={<DSI250WBI252WB />} />
        <Route path='/Firmware/Only for Warehouse/DS-I250W(C)/' element={<DSI250WC />} />
        <Route path='/Firmware/Only for Warehouse/DS-I259M(C)/' element={<DSI259MC />} />
        <Route path='/Firmware/Only for Warehouse/DS-I400(B) DS-I402(B)/' element={<DSI400BDSI402B />} />
        <Route path='/Firmware/Only for Warehouse/DS-I400(C)DS-I402(C)DS-I403(C)/' element={<DSI400CDSI402CDSI403C />} />
        <Route path='/Firmware/Only for Warehouse/DS-I450L DS-I453L/' element={<DSI450LDSI453L />} />
        <Route path='/Firmware/Only for Warehouse/DS-I450M DS-I453M/' element={<DSI450MDSI453M />} />
        <Route path='/Firmware/Only for Warehouse/DS-I450M(B) DS-I453M(B) DS-I250M(B) DS-I253M(B)/' element={<DSI450MBDSI453MBDSI250MBDSI253MB />} />
        <Route path='/Firmware/Only for Warehouse/DS-I653M/' element={<DSI653M />} />
        <Route path='/Firmware/Only for Warehouse/IPC-T020(B)/' element={<IPCT020B />} />
        <Route path='/Firmware/Only for Warehouse/IPC-XXXX-G2/' element={<IPCXXXXG2 />} />
        <Route path='/Firmware/Only for Warehouse/IPT-T012-G2_S    IPT-B012-G2_S/' element={<IPTT012G2SIPTB012G2S />} />


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
        <Route path='/Documents/Accessary/Кронштейны/' element={<KRonshteyni />} />
        <Route path='/Documents/Accessary/Объективы/' element={<Obektiv />} />
        <Route path='/Documents/How to documents/IVMS-4200/' element={<IVMS_4200 />} />
        <Route path='/Documents/How to documents/IVMS-4200/p2p region problem solution/' element={<P2pegionproblemsolution />} />
        <Route path='/Documents/How to documents/IVMS-4200/run error randomly on the process of loading/' element={<Run_error_randomly_on_the_process_of_loading />} />
        <Route path='/Documents/How to documents/Hik-Connect/' element={<Hik_Connect />} />
        <Route path='/Documents/How to documents/Storage/' element={<Storage_2 />} />
        <Route path='/Documents/How to documents/Video Intercom/' element={<VideoIntercom2 />} />
        <Route path='/Documents/How to documents/Video Intercom/First gen devices V1.5.1/' element={<First_gen_devicesV151 />} />
        <Route path='/Documents/How to documents/Video Intercom/HiWatch/' element={<HiWatch />} />
        <Route path='/Documents/How to documents/Video Intercom/Protocol 1.0/' element={<Protocol10 />} />
        <Route path='/Documents/How to documents/Video Intercom/Protocol 2.0/' element={<Protocol_20 />} />
        <Route path='/Documents/How to documents/Access Control/' element={<AccessControl3 />} />
        <Route path='/Documents/How to documents/1080Lite/' element={<A1080Lite />} />
        <Route path='/Documents/How to documents/POS/' element={<POS />} />
        <Route path='/Documents/How to documents/Добавление по RTSP/' element={<DobavleniepoRTSP />} />
        <Route path='/Documents/Маркетинговые материалы/Новый каталог/' element={<Noviy_katalog />} />
        <Route path='/Documents/Маркетинговые материалы/Элементы фирменного стиля/' element={<Elementi_Firmenno />} />
        <Route path='/Documents/Материалы для проектирования/' element={<Materialidlyap />} />
        <Route path='/Documents/Материалы для проектирования/Hikvision и nanoCAD/' element={<HikvisionnanoCAD />} />
      </Routes>
    </div>
  );
}

export default App;
