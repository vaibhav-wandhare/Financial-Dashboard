import axios from "axios";

export const fetchFinancialData = () => async (dispatch, getState) => {
  try {
    const token = getState().auth.token || localStorage.getItem("token"); 

    if (!token || token === "null") {
      console.error("❌ No token found! User is not authenticated.");
      return;
    }

    console.log("🔹 Fetching Financial Data with Token:", token);

    const { data } = await axios.get("http://127.0.0.1:8000/api/dashboard/", {
      headers: { Authorization: `Bearer ${token}` },
    });

    console.log("✅ Fetched Data from API:", data);

    dispatch({ type: "FETCH_FINANCIAL_DATA", payload: data });
  } catch (error) {
    console.error("❌ Error fetching financial data:", error.response?.data || error);
  }
};
