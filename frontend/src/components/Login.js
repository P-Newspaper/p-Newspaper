import React, { useContext } from "react";
import "../styles/login.css";
import { useNavigate } from "react-router-dom";
import { useGoogleLogin } from "@react-oauth/google";
import axios from "axios";
import LoginButton from "./LoginButton";
import MyAccount from "./MyAccount";
import { UserContext } from "./UserProvider";

// function Login() {
//   const { user, setUser } = useContext(UserContext);
//   const [profile, setProfile] = useState(null);
//   const navigate = useNavigate();

//   const login = useGoogleLogin({
//     onSuccess: (codeResponse) => {
//       console.log('Login Successful:', codeResponse);
//       setUser(codeResponse);
//       navigate("/userlanding")
//     },
//     onError: (error) => console.log("Login Failed:", error),
//   });

//   useEffect(() => {
//     if (user) {
//       axios.get(`https://www.googleapis.com/oauth2/v1/userinfo`, {
//           headers: {
//             Authorization: `Bearer ${user.access_token}`,
//             Accept: "application/json",
//           },
//         })
//         .then((res) => {
//           setProfile(res.data);
//           if (!localStorage.getItem("hasLoggedIn")) {
//             navigate("/interestselection");
//             localStorage.setItem("hasLoggedIn", true);
//           }
//         })
//         .catch((err) => console.log("Error fetching user data:", err));
//     }
//   }, [user, navigate]);

//   const logOut = () => {
//     googleLogout();
//     setProfile(null);
//     setUser(null);
//     localStorage.removeItem("hasLoggedIn");
//   };

//   return (
//     <div className="login-container">
//       {profile ? (
//         <MyAccount profile={profile} onLogout={logOut} />
//       ) : (
//         <LoginButton onLogin={login} />
//       )}
//     </div>
//   );
// }

// export default Login;

function Login() {
  const { user, setUser } = useContext(UserContext);
  const navigate = useNavigate();

  const login = useGoogleLogin({
    onSuccess: async (codeResponse) => {
      const profileData = await fetchUserProfile(codeResponse.access_token);
      setUser({ ...codeResponse, ...profileData });
      navigate("/onboarding");
      localStorage.setItem("hasLoggedIn", true);
      postUserToBackend(profileData);
    },
    onError: (error) => console.log("Login Failed:", error),
  });

  async function postUserToBackend(profileData) {
    try {
      const response = await axios.post("http://127.0.0.1:5000/user/add", {
        google_id: profileData.id,
        interests: [],
      });
      console.log("Backend responded:", response.data);
    } catch (error) {
      console.error("Failed to post user data to backend:", error);
    }
  }

  async function fetchUserProfile(token) {
    try {
      const response = await axios.get(
        `https://www.googleapis.com/oauth2/v1/userinfo`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
            Accept: "application/json",
          },
        }
      );
      console.log(response.data);

      return response.data;
    } catch (err) {
      console.log("Error fetching user data:", err);
      throw err;
    }
  }

  return (
    <div className="login-container">
      {user ? <MyAccount /> : <LoginButton onLogin={login} />}
    </div>
  );
}

export default Login;
