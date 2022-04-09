import React from 'react';
import { Route, Routes } from 'react-router-dom';

import './App.css';

import NavBar from './Components/navbar/navbar.component';
import Authentication from './Pages/authentication/authentication.component';
import HomePage from './Pages/homepage/homepage.component';
import ShopPage from './Pages/shop/shop.component';

//import { auth, createUserProfileDocument } from './Firebase/firebase.utils';

class App extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      currentUser: null
    }
  }

  unsubscribeFromAuth = null;

  /*componentDidMount() {
    this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth);

        userRef.onSnapshot(snapShot => {
          this.setState({
            currentUser: {
              id: snapShot.id,
              ...snapShot.data()
            }
          });

          console.log(this.state);
        });
      }
      this.setState({ currentUser: userAuth });
    });
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }*/

  render(){
    return (
      <Routes>
        <Route path='/' element={<NavBar currentUser={this.state.currentUser} />}>
          <Route exact index element={<HomePage />} />
          <Route path='/shop' element={<ShopPage />} />
          <Route path='/auth' element={<Authentication />} />
        </Route>
      </Routes>
    );
  }
}

export default App;
