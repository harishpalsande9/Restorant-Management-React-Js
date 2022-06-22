import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import "./custom.css";

import LoginPage from "./pages/auth/LoginPage";
import RegistrationPage from "./pages/auth/RegistrationPage";
import BusinessRegistrationPage from "./pages/auth/BusinessRegistrationPage";
import AddMenuFormPage from "./pages/master/AddMenuFormPage";
import AddTableFormPage from "./pages/master/AddTableFormPage";
import AddBankFormPage from "./pages/master/AddBankFormPage";
import AddEmployeeFormPage from "./pages/master/AddEmployeeFormPage";
import CrmPage from "./pages/crm/CrmPage";
import AddExpensesPage from "./pages/inventory/AddExpensesPage";
import AddPurchasePage from "./pages/inventory/AddPurchasePage";

import PurchaseReportPage from "./pages/Reports/PurchaseReportPage";
import Dashboard from "./pages/Dashboard/Dashboard";
import TransactionReportPage from "./pages/Reports/TransactionReportPage";
import OTP from "./component/auth/OTP";
import TableOrders from "./pages/Dashboard/tableOrders";
import ExpressOrders from "./pages/Dashboard/expressOrders";
import ProfilePage from "./pages/profile/profilePage";
function App() {
  return (
    <>
      <Routes>
        <Route path="/table-orders" element={<TableOrders />} exact />
        <Route path="/express" element={<ExpressOrders />} exact />
        <Route path="/" element={<RegistrationPage />} exact />
        <Route path="/LoginPage" element={<LoginPage />} exact />
        <Route
          path="/BusinessRegistrationPage"
          element={<BusinessRegistrationPage />}
          exact
        />
        <Route path="/AddMenuFormPage" element={<AddMenuFormPage />} exact />
        <Route path="/Dashboard" element={<Dashboard />} exact />
        <Route
          path="/TransactionReportPage"
          element={<TransactionReportPage />}
          exact
        />
        <Route path="/OTP" element={<OTP />} exact />
        <Route path="/AddTableFormPage" element={<AddTableFormPage />} exact />
        <Route path="/AddBankFormPage" element={<AddBankFormPage />} exact />
        <Route
          path="/AddEmployeeFormPage"
          element={<AddEmployeeFormPage />}
          exact
        />
        <Route path="/CrmPage" element={<CrmPage />} exact />
        <Route path="/AddPurchasePage" element={<AddPurchasePage />} exact />
        <Route path="/AddExpensesPage" element={<AddExpensesPage />} exact />
        <Route
          path="/PurchaseReportPage"
          element={<PurchaseReportPage />}
          exact
        />
        <Route path="/ProfilePage" element={<ProfilePage />} exact />
      </Routes>
    </>
  );
}

export default App;
