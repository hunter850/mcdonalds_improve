import { Provider } from "react-redux";
import store from "./app/store";
import { HashRouter, Routes, Route } from "react-router-dom";
import AllProvider from "./contexts/AllProviders";
// import Home from "./pages/Home";
import McDonaldHome from "./pages/McDonaldHome";
import SelectCombo from "./pages/SelectCombo";
import SelectOneOrder from "./pages/SelectOneOrder";
// styled
import GlobalStyles from "./styles/GlobalStyles";

function App() {
    return (
        <Provider store={store}>
            <HashRouter>
                <GlobalStyles />
                <AllProvider>
                    <Routes>
                        <Route path="/" element={<McDonaldHome />} />
                        <Route path="/select_combo" element={<SelectCombo />} />
                        <Route path="/select_one_order" element={<SelectOneOrder />} />
                    </Routes>
                </AllProvider>
            </HashRouter>
        </Provider>
    );
}

export default App;
