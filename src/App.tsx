import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import WaitingDetail from './pages/WaitingDetail';
import DraftDetail from './pages/DraftDetail';
import NewRequest from './pages/NewRequest';
import ConfirmDraft from './pages/ConfirmDraft';
import BlockedDetail from './pages/BlockedDetail';
import ConfirmedDetail from './pages/ConfirmedDetail';

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/waiting" element={<WaitingDetail />} />
        <Route path="/draft" element={<DraftDetail />} />
        <Route path="/new" element={<NewRequest />} />
        <Route path="/confirm" element={<ConfirmDraft />} />
        <Route path="/blocked" element={<BlockedDetail />} />
        <Route path="/confirmed" element={<ConfirmedDetail />} />
      </Routes>
    </Router>
  );
}
