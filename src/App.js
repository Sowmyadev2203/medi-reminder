import React, { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route, Navigate, useLocation } from 'react-router-dom';
import { getAuth, onAuthStateChanged } from 'firebase/auth';
import { app } from '../src/components/fbConfig';
import NavigationBar from './components/navbar/navbar';
import Login from './components/login/Login';
import Signup from './components/signup/signup';
import HomePage from './components/Home/Home';
import Signout from './components/signout/signout';
import Medication from './components/medication';
import Profile from './components/profile';
import ResultPage from './components/medication/result';
import ContactPage from './components/contact/contact';
import Popup from './components/popup/index';
import PrivateRoute from './components/protectedroute';
import dayjs from 'dayjs';
import { Backdrop, CircularProgress } from '@mui/material';

const auth = getAuth(app);

const MainApp = () => {
  const [user, setUser] = useState(null);
  const [guest, setGuest] = useState(() => localStorage.getItem('guest') === 'true');
  const [modalShow, setModalShow] = useState(false);
  const [selectedMedication, setSelectedMedication] = useState(null);
  const [selectedTime, setSelectedTime] = useState(null);
  const [selectedType, setSelectedType] = useState(null);
  const [loading, setLoading] = useState(true);

  const location = useLocation();
  const hideNavbarRoutes = ['/', '/signup'];

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setUser(user);
      if (user) {
        setGuest(false);
        localStorage.removeItem('guest');
      }
      setLoading(false);
    });

    return () => unsubscribe();
  }, []);

  useEffect(() => {
    if (guest) {
      localStorage.setItem('guest', 'true');
    } else {
      localStorage.removeItem('guest');
    }
  }, [guest]);

  useEffect(() => {
    const storedMedications = JSON.parse(localStorage.getItem('medications')) || [];
    const timers = [];

    storedMedications.forEach((medication) => {
      const medTime = dayjs(medication.medicationTime);
      const timeDifference = medTime.diff(dayjs(), 'millisecond');

      if (timeDifference > 0) {
        const timer = setTimeout(() => {
          setSelectedMedication(medication.medicineName);
          setSelectedTime(medTime.format('DD MMM YYYY, hh:mm A'));
          setSelectedType(medication.type);
          setModalShow(true);
        }, timeDifference);
        timers.push(timer);
      }
    });

    return () => timers.forEach((timer) => clearTimeout(timer));
  }, []);

  if (loading) {
    return (
      <Backdrop sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }} open={true}>
        <CircularProgress color="inherit" />
      </Backdrop>
    );
  }

  return (
    <>
      {!hideNavbarRoutes.includes(location.pathname) && <NavigationBar />}

      <Popup
        show={modalShow}
        onHide={() => setModalShow(false)}
        medicationName={selectedMedication}
        medicationTime={selectedTime}
        medicationType={selectedType}
      />

      <Routes>
        <Route path="/" element={!user ? <Login /> : <Navigate to="/home" />} />
        <Route path="/signup" element={!user ? <Signup /> : <Navigate to="/home" />} />
        <Route element={<PrivateRoute user={user} guest={guest} />}>
          <Route path="/home" element={<HomePage />} />
          <Route path="/medication" element={<Medication />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/history" element={<ResultPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/signout" element={<Signout />} />
        </Route>
      </Routes>
    </>
  );
};

const App = () => {
  return (
    <BrowserRouter>
      <MainApp />
    </BrowserRouter>
  );
};

export default App;
