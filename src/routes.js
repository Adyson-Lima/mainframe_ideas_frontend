import { BrowserRouter, Routes, Route } from "react-router-dom";
import Ideas from './pages/Ideas';
import NewUpdate from './pages/NewUpdate';

export default function IdeasRouter(){
  return(
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Ideas/>} />
        <Route path="/newupdate/:idea_id" element={<NewUpdate/>} />
      </Routes>
    </BrowserRouter>
  );
}