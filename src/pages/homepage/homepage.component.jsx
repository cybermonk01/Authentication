import React from "react";

import './homepage.styles.scss';
import { HomePageContainer } from "./homepage.styles";

import { auth} from "../../firebase/firebase.utils";

const HomePage = () => (
  <HomePageContainer>
    <h1>hiiiiii</h1>
    {/* {currentUser ? ( */}
      <button as="div" onclick={() => auth.signOut()}>
        {" "}
        Sign OUT{" "}
      </button>
   {/* //  ) : (
   //    <button to="/signin">Sign In</button>
   //  )} */}
  </HomePageContainer>
);
export default HomePage;