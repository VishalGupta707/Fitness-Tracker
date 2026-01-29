import { Box, Button, Typography, Container, Paper } from "@mui/material";
import { useContext, useEffect } from "react";
import { AuthContext } from "react-oauth2-code-pkce";
import { useDispatch } from "react-redux";
import { BrowserRouter as Router, Navigate, Route, Routes } from "react-router";
import { setCredentials } from "./store/authSlice";

import ActivityForm from "./components/ActivityForm";
import ActivityList from "./components/ActivityList";
import ActivityDetail from "./components/ActivityDetail";

/* ---------------- Activities Page ---------------- */
const ActivitiesPage = () => {
  return (
    <Container maxWidth="md">
      <Paper elevation={3} sx={{ p: 3, borderRadius: 2 }}>
        <ActivityForm onActivityAdded={() => window.location.reload()} />
        <ActivityList />
      </Paper>
    </Container>
  );
};

/* ---------------- App ---------------- */
function App() {
  const { token, tokenData, logIn, logOut } = useContext(AuthContext);
  const dispatch = useDispatch();

  useEffect(() => {
    if (token && tokenData) {
      dispatch(setCredentials({ token, user: tokenData }));
    }
  }, [token, tokenData, dispatch]);

  return (
    <Router>
      {!token ? (
        /* ================= LOGIN SCREEN ================= */
        <Box
          sx={{
            minHeight: "100vh",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            background:
              "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
          }}
        >
          <Paper
            elevation={6}
            sx={{
              p: 5,
              width: 400,
              textAlign: "center",
              borderRadius: 3,
            }}
          >
            <Typography variant="h4" gutterBottom>
              Fitness Tracker 💪
            </Typography>

            <Typography color="text.secondary" sx={{ mb: 4 }}>
              Track workouts. Get AI insights. Stay consistent.
            </Typography>

            {/* 🔴 IMPORTANT FIX HERE */}
            <Button
              variant="contained"
              size="large"
              fullWidth
              onClick={() => logIn()}   // ✅ CORRECT
              sx={{ py: 1.3, borderRadius: 2 }}
            >
              Login with Keycloak
            </Button>
          </Paper>
        </Box>
      ) : (
        /* ================= AUTHENTICATED APP ================= */
        <Box sx={{ minHeight: "100vh", backgroundColor: "#f5f6fa" }}>
          {/* -------- Top Bar -------- */}
          <Box
            sx={{
              px: 3,
              py: 2,
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              backgroundColor: "#fff",
              boxShadow: 1,
            }}
          >
            <Typography variant="h6">🏃 Fitness Dashboard</Typography>

            <Button
              variant="outlined"
              color="error"
              onClick={() => logOut()} // ✅ SAFE
            >
              Logout
            </Button>
          </Box>

          {/* -------- Routes -------- */}
          <Box sx={{ mt: 3 }}>
            <Routes>
              <Route path="/activities" element={<ActivitiesPage />} />
              <Route path="/activities/:id" element={<ActivityDetail />} />
              <Route
                path="/"
                element={<Navigate to="/activities" replace />}
              />
            </Routes>
          </Box>
        </Box>
      )}
    </Router>
  );
}

export default App;
