import { BrowserRouter, Routes, Route } from "react-router-dom";
import Router from "./Router";
import Flight from "./Flight";
import Hotel from './Hotel';
import Homestay from './Homestay';
import Holiday from './Holiday';
import Train from './Train';
import Bus from './Buses';
import Cab from './Cab';
import Forex from './Forex';
import Charterflight from './Charterflight';
import Activities from './Activities';


export default function Pack() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Router />}>
          <Route path="flight" element={<Flight />} />
          <Route path="hotel" element={<Hotel />} />
          <Route path="homestay" element={<Homestay />} />
          <Route path="holiday" element={<Holiday />} />
          <Route path="train" element={<Train />} />
          <Route path="buses" element={<Bus />} />
          <Route path="cab" element={<Cab />} />
          <Route path="forex" element={<Forex />} />
          <Route path="charterflight" element={<Charterflight />} />
          <Route path="activities" element={<Activities />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
