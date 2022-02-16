import React from 'react';
import {connect} from 'react-redux'
import {addPost,updatePostText,setUserProfile} from '../../../redux/reducer/Profile_reducer'
import {usersAPI} from '../../../api/api'



import ProfileInfo from './ProfileInfo/ProfileInfo'
// import MyPosts from "./Myposts/MyPosts"

import classes from './Profile.module.css'



class UserProfileContainer extends React.Component {

  componentDidMount(){
    usersAPI.getProfile(this.props.fullprofilePage.gg).then(response => {this.props.setUserProfile(response)})
  }
  render(){ 
    return (
      <div className={classes.cal}>
          <ProfileInfo userState={this.props.profilePage}/>
          {/* <MyPosts posts={this.props.fullprofilePage}/>    */}
      </div>
    );
  }
};


let mapStateToProps = (state) => {
  return {
    profilePage : state.profilePage.profile,
    fullprofilePage : state.profilePage
  }
}
let mapDispatchToProps = (dispatch) => {
  return {
    onAddPost    : (name) => {dispatch(addPost(name))},
    onPostChange : (text) => {dispatch(updatePostText(text))},
    setUserProfile : (profile) => {dispatch(setUserProfile(profile))}
  }
}
const ProfileContainer = connect(mapStateToProps,mapDispatchToProps)(UserProfileContainer)

export default ProfileContainer;