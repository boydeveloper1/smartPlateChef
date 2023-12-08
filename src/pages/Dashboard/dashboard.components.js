import React, { useContext, useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { AuthContext } from "../../components/context/auth-context";
import { useHttpClient } from "../../Hooks/http-hook";
import ErrorModal from "../../components/Error-Modal/error-modal";
import LoadingSpinner from "../../components/Loading-Spinner/loading-spinner.components";

const Dashboard = () => {
  const { isLoading, error, sendRequest, clearError } = useHttpClient();
  const auth = useContext(AuthContext);
  const [loadedUser, setLoadedUser] = useState({});

  const { userId } = useParams();

  const navigate = useNavigate();

  // find thr user immediately from the backend based off the userid in params
  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const responseData = await sendRequest(
          `${process.env.REACT_APP_BACKEND_URL}/users/${userId}`
        );

        setLoadedUser(responseData.user);
      } catch (error) {}
    };
    fetchUsers();
  }, [sendRequest, userId]);

  return (
    <>
      <ErrorModal error={error} onClear={clearError} />
      {isLoading && (
        <div className="center">
          <LoadingSpinner />
        </div>
      )}
      <div>Dashboard</div>
    </>
  );
};

export default Dashboard;
