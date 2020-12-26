import React from "react";
import { Button, Row, Form } from "react-bootstrap";
import Image from "react-bootstrap/Image";
import userprofile from "../Images/user-profile.jpeg";
import $ from "jquery";

class Avatar extends React.Component {
  componentDidMount() {
    $(document).ready(function () {
      var readURL = function (input) {
        if (input.files && input.files[0]) {
          var reader = new FileReader();

          reader.onload = function (e) {
            $(".profile-pic").attr("src", e.target.result);
          };

          reader.readAsDataURL(input.files[0]);
        }
      };

      $(".file-upload").on("change", function () {
        readURL(this);
      });

      $(".upload-button").on("click", function () {
        $(".file-upload").click();
      });

      $(".trash-ico").on("click", function () {
        $('.circle img').attr('src', '');
      });
    });
  }
  render() {
    return (
      <div>
        <div className="update-profile-cell">
          <div className="circle">
            <Image src={userprofile} className="profile-pic" />
          </div>
          

          <div className="p-image">
            <i className="trash-ico fa fa-trash-o" aria-hidden="true"></i>
            <i className="fa fa-camera upload-button"></i>
            <input className="file-upload" type="file" accept="image/*" />
          </div>
        </div>
      </div>
    );
  }
}
export default Avatar;
