import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchFinancialData } from "../redux/actions/financeActions";
import { logout } from "../redux/actions/authActions";
import { useNavigate } from "react-router-dom";
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  Container,
  Grid,
  Card,
  CardContent,
  List,
  ListItem,
  ListItemText,
} from "@mui/material";
import AccountBalanceIcon from "@mui/icons-material/AccountBalance";
import LogoutIcon from "@mui/icons-material/Logout";
import NotificationsActiveIcon from "@mui/icons-material/NotificationsActive";
import AttachMoneyIcon from "@mui/icons-material/AttachMoney";

const Dashboard = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  
  const financialState = useSelector((state) => state.finance);

  console.log("Redux Financial State:", financialState); 

  useEffect(() => {
    dispatch(fetchFinancialData()); 
  }, [dispatch]);

  const handleLogout = () => {
    dispatch(logout());
    navigate("/");
  };

  return (
    <div>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" sx={{ flexGrow: 1 }}>
            Financial Dashboard
          </Typography>
          <Button color="inherit" onClick={handleLogout} startIcon={<LogoutIcon />}>
            Logout
          </Button>
        </Toolbar>
      </AppBar>

      <Container sx={{ marginTop: 4 }}>
        <Grid container spacing={3}>
          <Grid item xs={12} md={4}>
            <Card sx={{ textAlign: "center", backgroundColor: "#1976D2", color: "#fff" }}>
              <CardContent>
                <AccountBalanceIcon sx={{ fontSize: 50 }} />
                <Typography variant="h5">Account Balance</Typography>
                <Typography variant="h4">${financialState.accountBalance}</Typography>
              </CardContent>
            </Card>
          </Grid>

          <Grid item xs={12} md={4}>
            <Card>
              <CardContent>
                <Typography variant="h6">Recent Transactions</Typography>
                <List>
                  {financialState.transactions.length > 0 ? (
                    financialState.transactions.map((tx, index) => (
                      <ListItem key={index}>
                        <AttachMoneyIcon color={tx.amount < 0 ? "error" : "success"} sx={{ marginRight: 2 }} />
                        <ListItemText primary={`$${tx.amount}`} secondary={tx.type} />
                      </ListItem>
                    ))
                  ) : (
                    <Typography variant="body2" color="textSecondary">
                      No transactions found.
                    </Typography>
                  )}
                </List>
              </CardContent>
            </Card>
          </Grid>

          <Grid item xs={12} md={4}>
            <Card>
              <CardContent>
                <Typography variant="h6">Notifications</Typography>
                <List>
                  {financialState.notifications.length > 0 ? (
                    financialState.notifications.map((note, index) => (
                      <ListItem key={index}>
                        <NotificationsActiveIcon color="warning" sx={{ marginRight: 2 }} />
                        <ListItemText primary={note.message} />
                      </ListItem>
                    ))
                  ) : (
                    <Typography variant="body2" color="textSecondary">
                      No notifications available.
                    </Typography>
                  )}
                </List>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
};

export default Dashboard;
