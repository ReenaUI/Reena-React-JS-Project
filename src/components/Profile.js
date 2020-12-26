import React, { useState, useEffect } from "react";
import Row from "react-bootstrap/Row";
import Tabs from "react-bootstrap/Tabs";
import Tab from "react-bootstrap/Tab";
import Col from "react-bootstrap/Col";
import Image from "react-bootstrap/Image";
import ChangePassword from "./ModalsView/ChangePassword.js";
import PirUpdate from "./ModalsView/PirUpdate.js";
import MobileNumber from "./ModalsView/MobileNumber.js";
import UpdateAddress from "./ModalsView/UpdateAddress.js";
import UpdateBankDetail from "./ModalsView/UpdateBankDetail.js";
import userprofile from "./Images/user-profile.jpeg";
import Avatar from "./Assets/Avatar.js";
import axios from "axios";
import Twofa from "./Assets/Twofa.js";

const Profile = () => {
  const [item, setItem] = useState({
    phoneNumber: [],
    beneficiary: [],
  });

  const [Audit, setAudit] = useState({
    auditHistory: [],
  });

  useEffect(() => {
    // loadUsers();
    loadItem();
    loadAudit();
  }, []);

  // const loadUsers = async () => {
  //     const result = await axios.get("https://jsonplaceholder.typicode.com/users");
  // setUser(result.data);
  // };
  const loadItem = async () => {
    const result1 = await axios.get(
      "https://ec3ll8cxti.execute-api.ap-southeast-2.amazonaws.com/prod/beneficiary-details?benId=32614"
    );
    setItem(result1.data);
    console.log(result1);
  };

  const loadAudit = async () => {
    const resultaudit = await axios.get(
      "https://ec3ll8cxti.execute-api.ap-southeast-2.amazonaws.com/prod//beneficiary-details/audit-history?benId=32721"
    );
    setAudit(resultaudit.data);
    console.log(resultaudit);
  };

  return (
    <div className="content-body">
      <div className="content-box">
        <p>Home / Profile</p>
      </div>

      <div className="custom-main-wrap-padding">
        <Row>
          <Col md="12">
            <div className="card">
              <Row className="profile-block">
                <Col md="4">
                    <Avatar />
                </Col>

                <Col md="8" className="profile-content">
                  <h1 className="text-left">Terence James HIBBITT</h1>

                  <Tabs defaultActiveKey="About" id="profile">
                    <Tab eventKey="About" title="About">
                      {item.beneficiary.map((userprofile, index) => (
                        <Row className="mb-2">
                          <Col sm="6">
                            <h2>Beneficary Id</h2>
                          </Col>

                          <Col sm="6">
                            <h3>{userprofile.beneficaryId}</h3>
                          </Col>

                          <Col sm="6">
                            <h2>Name</h2>
                          </Col>

                          <Col sm="6">
                            <h3>{userprofile.name}</h3>
                          </Col>

                          <Col sm="6">
                            <h2>Date Of Birth</h2>
                          </Col>

                          <Col sm="6">
                            <h3>{userprofile.dateOfBirth}</h3>
                          </Col>

                          <Col sm="6">
                            <h2>Pir Rate</h2>
                          </Col>

                          <Col sm="6" className="icon-detail-wrapper">
                            <h3>{userprofile.pirRate}</h3>
                            <span>
                              <PirUpdate />
                            </span>
                          </Col>

                          <Col sm="6">
                            <h2>Preferred Name</h2>
                          </Col>

                          <Col sm="6">
                            <h3>{userprofile.preferredName}</h3>
                          </Col>

                          <Col sm="6">
                            <h2>AML Entity Type User Id</h2>
                          </Col>

                          <Col sm="6">
                            <h3>{userprofile.aMLEntityType}</h3>
                          </Col>
                        </Row>
                     
                      ))}
                    </Tab>
                    <Tab eventKey="Address" title="Address">
                      {item.phoneNumber.map((userprofile, index) => (
                        <Row className="mb-2">
                          <Col sm="6">
                            <h2>User Id</h2>
                          </Col>

                          <Col sm="6">
                            <h3>{userprofile.UserId}</h3>
                          </Col>

                          <Col sm="6">
                            <h2>Tel Number</h2>
                          </Col>

                          <Col sm="6" className="icon-detail-wrapper">
                            <h3>{userprofile.TelMobile} </h3>
                            <span>
                              <MobileNumber />
                            </span>
                          </Col>

                          <Col sm="6">
                            <h2>Phone Id</h2>
                          </Col>

                          <Col sm="6">
                            <h3>{userprofile.phoneId}</h3>
                          </Col>

                          <Col sm="6">
                            <h2>Tel Business</h2>
                          </Col>

                          <Col sm="6">
                            <h3>0000</h3>
                          </Col>

                          <Col sm="6">
                            <h2>Type</h2>
                          </Col>

                          <Col sm="6">
                            <h3>{userprofile.Type}</h3>
                          </Col>

                          <Col sm="6">
                            <h2>Created at</h2>
                          </Col>

                          <Col sm="6">
                            <h3>{userprofile.created_ts}</h3>
                          </Col>

                          <Col sm="6">
                            <h2>Primary Member</h2>
                          </Col>

                          <Col sm="6">
                            <h3>{userprofile.IsPrimary}</h3>
                          </Col>

                          <Col sm="6">
                            <h2>Country</h2>
                          </Col>

                          <Col sm="6">
                            <h3>{userprofile.Country}</h3>
                          </Col>

                          <Col sm="6">
                            <h2>Country Code</h2>
                          </Col>

                          <Col sm="6">
                            <h3>{userprofile.CountryCode}</h3>
                          </Col>

                          <Col sm="12">
                            <UpdateAddress />
                          </Col>
                        </Row>
                      ))}
                    </Tab>
                    <Tab eventKey="Bank-details" title="Bank details">
                      {item.phoneNumber.map((userprofile, index) => (
                        <Row className="mb-2">
                          <Col sm="6">
                            <h2>Active</h2>
                          </Col>

                          <Col sm="6">
                            <h3>{userprofile.active}</h3>
                          </Col>

                          <Col sm="6">
                            <h2>Type</h2>
                          </Col>

                          <Col sm="6">
                            <h3>{userprofile.Type}</h3>
                          </Col>

                          <Col sm="6">
                            <h2>Created at</h2>
                          </Col>

                          <Col sm="6">
                            <h3>{userprofile.created_ts}</h3>
                          </Col>

                          <Col sm="6">
                            <h2>Member</h2>
                          </Col>

                          <Col sm="6">
                            <h3>{userprofile.created_ts}</h3>
                          </Col>

                          <Col sm="6">
                            <h2>Id</h2>
                          </Col>

                          <Col sm="6">
                            <h3>{userprofile.id}</h3>
                          </Col>

                          <Col sm="6">
                            <h2>Beneficiary Id</h2>
                          </Col>

                          <Col sm="6">
                            <h3>{userprofile.BeneficiaryId}</h3>
                          </Col>

                          <Col sm="12">
                            <UpdateBankDetail />
                          </Col>
                        </Row>
                      ))}
                    </Tab>
                  </Tabs>
                </Col>
              </Row>
            </div>
          </Col>
        </Row>

        <Row className="2fa mt-5 setting-block">
          <Col md={12}>
            <h4 className="sub-heading heading-below-main">Settings</h4>
          </Col>
          <Col md={6}>
            <div className="facard">
              <div className="head line-shape">
                <h6 className="pulse-main performance-fund twofa-pulse">
                  2FA Verification
                  <div className="popover__wrapper">
                    <h2 className="popover__title">
                      <div className="center pulse-wrap">
                        <div className="pulse"></div>
                      </div>
                    </h2>

                    <div className="popover__content popover__content-left">
                      <p>
                        This is a non-annualised return, after fees have been
                        deducted and before tax, since inception of the fund to
                        the latest valuation date.
                      </p>
                    </div>
                  </div>
                </h6>
              </div>

              <div>
                <Twofa />
              </div>
            </div>
          </Col>
          <Col md={6}>
            <div className="facard">
              <div className="head line-shape">
                <h6 className="performance-fund">
                  To change password click below :
                </h6>
              </div>
              <div className="fa-wrapper">
                <ChangePassword />
              </div>
            </div>
          </Col>
        </Row>
      </div>
    </div>
  );
};

export default Profile;
