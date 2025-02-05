import React, { useEffect, useState } from "react";
import { Navigate, Outlet } from "react-router-dom";
import { auth } from "../components/fbConfig"
import { onAuthStateChanged } from "firebase/auth";

const PrivateRoute = () => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setLoading(false);
    });

    return () => unsubscribe(); // Cleanup subscription
  }, []);
  

  if (loading) {
    return <p>Loading...</p>;
  }

  return user ? <Outlet /> : <Navigate to="/signup" />;
};

export default PrivateRoute;