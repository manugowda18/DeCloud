import React from "react";
import {
  IoIosArrowDown,
  IoIosArrowRoundForward,
  IoMdTime,
} from "react-icons/io";
import {
  MdAddToPhotos,
  MdDeleteSweep,
  MdOutlineAttachMoney,
  MdVerifiedUser,
  MdLogin,
  MdDateRange,
  MdOutlineTipsAndUpdates,
} from "react-icons/md";
import { FaClipboardList } from "react-icons/fa6";
import { RiFileCopyFill } from "react-icons/ri";
import {
  FaFileImage,
  FaFilePdf,
  FaFileAudio,
  FaFileVideo,
  FaFileLines,
  FaRegStar,
  FaRegUser,
  FaUserPlus,
  FaUsers,
  FaLock,
  FaCloud,
} from "react-icons/fa6";

const Home = () => {
  return (
    <div class="content-page">
      <div class="container-fluid">
        <div class="row">
          <div class="col-lg-12">
            <div class="card-transparent card-block card-stretch card-height mb-3">
              <div class="d-flex justify-content-between">
                <div class="select-dropdown input-prepend input-append">
                  <div class="btn-group">
                    <div data-toggle="dropdown">
                      <div
                        class="dropdown-toggle search-query"
                        onclick="myFunction()"
                      >
                        My Drive
                        <i class="las  ml-3">
                          <IoIosArrowDown />
                        </i>
                      </div>
                      <span class="search-replace"></span>
                      <span class="caret"></span>
                    </div>
                    <ul class="dropdown-menu">
                      <li>
                        <div class="item">
                          <i class=" pr-3">
                            <MdAddToPhotos />
                          </i>
                          New Folder
                        </div>
                      </li>
                      <li>
                        <div class="item">
                          <i class=" pr-3">
                            <MdAddToPhotos />
                          </i>
                          Upload Files
                        </div>
                      </li>
                      <li>
                        <div class="item">
                          <i class=" pr-3">
                            <MdAddToPhotos />
                          </i>
                          Upload Folders
                        </div>
                      </li>
                    </ul>
                  </div>
                </div>
                <div class="dashboard1-dropdown d-flex align-items-center">
                  <div class="dashboard1-info">
                    <a
                      href="#calander"
                      class="collapsed"
                      data-toggle="collapse"
                      aria-expanded="false"
                    >
                      <i class="las  ">
                        <IoIosArrowDown />
                      </i>
                    </a>
                    <ul
                      id="calander"
                      class="iq-dropdown collapse list-inline m-0 p-0 mt-2"
                    >
                      <li class="mb-2">
                        <a
                          href="#"
                          data-toggle="tooltip"
                          data-placement="right"
                          title="Calander"
                        >
                          <i class="las  iq-arrow-left">
                            <MdDateRange />
                          </i>
                        </a>
                      </li>
                      <li class="mb-2">
                        <a
                          href="#"
                          data-toggle="tooltip"
                          data-placement="right"
                          title="Keep"
                        >
                          <i class="las  iq-arrow-left">
                            <MdOutlineTipsAndUpdates />
                          </i>
                        </a>
                      </li>
                      <li>
                        <a
                          href="#"
                          data-toggle="tooltip"
                          data-placement="right"
                          title="Tasks"
                        >
                          <i class="las iq-arrow-left">
                            <FaClipboardList />
                          </i>
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="col-lg-8">
            <div
              class="card card-block card-stretch card-height iq-welcome"
              style={{
                background:
                  "url(../assets/images/layouts/mydrive/background.png) noRepeat scroll right center",
                backgroundColor: "#ffffff",
                backgroundSize: "contain",
              }}
            >
              <div class="card-body property2-content">
                <div class="d-flex flex-wrap align-items-center">
                  <div class="col-lg-6 col-sm-6 p-0">
                    <h3 class="mb-3">Welcome Penny</h3>
                    <p class="mb-5">
                      You have 32 new notifications and 23 unread messages to
                      reply
                    </p>
                    <a href="#">
                      Try Now
                      <i class="las  ml-2">
                        <IoIosArrowRoundForward />
                      </i>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="col-lg-4">
            <div class="card card-block card-stretch card-height">
              <div class="card-header d-flex justify-content-between">
                <div class="header-title">
                  <h4 class="card-title">Quick Access</h4>
                </div>
              </div>
              <div class="card-body">
                <ul class="list-inline p-0 mb-0 row align-items-center">
                  <li class="col-lg-6 col-sm-6 mb-3 mb-sm-0">
                    <div
                      data-load-file="file"
                      data-load-target="#resolte-contaniner"
                      data-url="../assets/vendor/doc-viewer/files/demo.pdf"
                      data-toggle="modal"
                      data-target="#exampleModal"
                      data-title="Product-planning.pdf"
                      style={{ cursor: "pointer" }}
                      class="p-2 text-center border rounded"
                    >
                      <div>
                        <img
                          src="../assets/images/layouts/mydrive/folder-1.png"
                          class="img-fluid mb-1"
                          alt="image1"
                        />
                      </div>
                      <p class="mb-0">Planning</p>
                    </div>
                  </li>
                  <li class="col-lg-6 col-sm-6">
                    <div
                      data-load-file="file"
                      data-load-target="#resolte-contaniner"
                      data-url="../assets/vendor/doc-viewer/files/demo.docx"
                      data-toggle="modal"
                      data-target="#exampleModal"
                      data-title="Wireframe.docx"
                      style={{ cursor: "pointer" }}
                      class="p-2 text-center border rounded"
                    >
                      <div>
                        <img
                          src="../assets/images/layouts/mydrive/folder-2.png"
                          class="img-fluid mb-1"
                          alt="image2"
                        />
                      </div>
                      <p class="mb-0">Wireframe</p>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div class="col-lg-12">
            <div class="card card-block card-stretch card-transparent">
              <div class="card-header d-flex justify-content-between pb-0">
                <div class="header-title">
                  <h4 class="card-title">Documents</h4>
                </div>
                <div class="card-header-toolbar d-flex align-items-center">
                  <a href="./page-folders.html" class="view-more">
                    View All
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div class="col-lg-3 col-md-6 col-sm-6">
            <div class="card card-block card-stretch card-height">
              <div class="card-body image-thumb">
                <a
                  href="#"
                  data-title="Terms.pdf"
                  data-load-file="file"
                  data-load-target="#resolte-contaniner"
                  data-url=""
                  data-toggle="modal"
                  data-target="#exampleModal"
                >
                  <div class="mb-4 text-center p-3 rounded iq-thumb">
                    <div class="iq-image-overlay"></div>
                    <img
                      src="../assets/images/layouts/page-1/pdf.png"
                      class="img-fluid"
                      alt="image1"
                    />
                  </div>
                  <h6>Terms.pdf</h6>
                </a>
              </div>
            </div>
          </div>
          <div class="col-lg-3 col-md-6 col-sm-6">
            <div class="card card-block card-stretch card-height">
              <div class="card-body image-thumb">
                <a
                  href="#"
                  data-title="Terms.pdf"
                  data-load-file="file"
                  data-load-target="#resolte-contaniner"
                  data-url=""
                  data-toggle="modal"
                  data-target="#exampleModal"
                >
                  <div class="mb-4 text-center p-3 rounded iq-thumb">
                    <div class="iq-image-overlay"></div>
                    <img
                      src="../assets/images/layouts/page-1/pdf.png"
                      class="img-fluid"
                      alt="image1"
                    />
                  </div>
                  <h6>Terms.pdf</h6>
                </a>
              </div>
            </div>
          </div>
          <div class="col-lg-3 col-md-6 col-sm-6">
            <div class="card card-block card-stretch card-height">
              <div class="card-body image-thumb">
                <a
                  href="#"
                  data-title="Terms.pdf"
                  data-load-file="file"
                  data-load-target="#resolte-contaniner"
                  data-url=""
                  data-toggle="modal"
                  data-target="#exampleModal"
                >
                  <div class="mb-4 text-center p-3 rounded iq-thumb">
                    <div class="iq-image-overlay"></div>
                    <img
                      src="../assets/images/layouts/page-1/pdf.png"
                      class="img-fluid"
                      alt="image1"
                    />
                  </div>
                  <h6>Terms.pdf</h6>
                </a>
              </div>
            </div>
          </div>
          <div class="col-lg-3 col-md-6 col-sm-6">
            <div class="card card-block card-stretch card-height">
              <div class="card-body image-thumb">
                <a
                  href="#"
                  data-title="Terms.pdf"
                  data-load-file="file"
                  data-load-target="#resolte-contaniner"
                  data-url=""
                  data-toggle="modal"
                  data-target="#exampleModal"
                >
                  <div class="mb-4 text-center p-3 rounded iq-thumb">
                    <div class="iq-image-overlay"></div>
                    <img
                      src="../assets/images/layouts/page-1/pdf.png"
                      class="img-fluid"
                      alt="image1"
                    />
                  </div>
                  <h6>Terms.pdf</h6>
                </a>
              </div>
            </div>
          </div>
          <div class="col-lg-12">
            <div class="card card-block card-stretch card-transparent">
              <div class="card-header d-flex justify-content-between pb-0">
                <div class="header-title">
                  <h4 class="card-title">Folders</h4>
                </div>
                <div class="card-header-toolbar d-flex align-items-center">
                  <div class="dropdown">
                    <span
                      class="dropdown-toggle dropdown-bg btn bg-white"
                      id="dropdownMenuButton1"
                      data-toggle="dropdown"
                    >
                      Name
                      <i class=" ml-1">
                        <IoIosArrowDown />
                      </i>
                    </span>
                    <div
                      class="dropdown-menu dropdown-menu-right shadow-none"
                      aria-labelledby="dropdownMenuButton1"
                    >
                      <a class="dropdown-item" href="#">
                        Last modified
                      </a>
                      <a class="dropdown-item" href="#">
                        Last modifiedby me
                      </a>
                      <a class="dropdown-item" href="#">
                        Last opened by me
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="col-md-6 col-sm-6 col-lg-3">
            <div class="card card-block card-stretch card-height">
              <div class="card-body">
                <div class="d-flex justify-content-between">
                  <a href="./page-alexa.html" class="folder">
                    <div class="icon-small bg-danger rounded mb-4">
                      <i class="">
                        <RiFileCopyFill />
                      </i>
                    </div>
                  </a>
                </div>
                <a class="folder">
                  <h5 class="mb-2">Alexa Workshop</h5>
                  <p class="mb-2">
                    <i class="lar  text-danger mr-2 font-size-20">
                      <IoMdTime />
                    </i>
                    10 Dec, 2020
                  </p>
                  <p class="mb-0">
                    <i class="las  text-danger mr-2 font-size-20">
                      <FaFileLines />
                    </i>
                    08 Files
                  </p>
                </a>
              </div>
            </div>
          </div>
          <div class="col-md-6 col-sm-6 col-lg-3">
            <div class="card card-block card-stretch card-height">
              <div class="card-body">
                <div class="d-flex justify-content-between">
                  <a href="./page-android.html" class="folder">
                    <div class="icon-small bg-primary rounded mb-4">
                      <i class="ri-file-copy-line"></i>
                    </div>
                  </a>
                </div>
                <a href="./page-android.html" class="folder">
                  <h5 class="mb-2">Android</h5>
                  <p class="mb-2">
                    <i class="lar la-clock text-primary mr-2 font-size-20"></i>
                    09 Dec, 2020
                  </p>
                  <p class="mb-0">
                    <i class="las la-file-alt text-primary mr-2 font-size-20"></i>
                    08 Files
                  </p>
                </a>
              </div>
            </div>
          </div>
          <div class="col-md-6 col-sm-6 col-lg-3">
            <div class="card card-block card-stretch card-height">
              <div class="card-body">
                <div class="d-flex justify-content-between">
                  <a href="./page-brightspot.html" class="folder">
                    <div class="icon-small bg-info rounded mb-4">
                      <i class="ri-file-copy-line"></i>
                    </div>
                  </a>
                </div>
                <a href="./page-brightspot.html" class="folder">
                  <h5 class="mb-2">Brightspot</h5>
                  <p class="mb-2">
                    <i class="lar la-clock text-info mr-2 font-size-20"></i>
                    07 Dec, 2020
                  </p>
                  <p class="mb-0">
                    <i class="las la-file-alt text-info mr-2 font-size-20"></i>
                    08 Files
                  </p>
                </a>
              </div>
            </div>
          </div>
          <div class="col-md-6 col-sm-6 col-lg-3">
            <div class="card card-block card-stretch card-height">
              <div class="card-body">
                <div class="d-flex justify-content-between">
                  <a href="./page-ionic.html" class="folder">
                    <div class="icon-small bg-success rounded mb-4">
                      <i class="ri-file-copy-line"></i>
                    </div>
                  </a>
                </div>
                <a href="./page-ionic.html" class="folder">
                  <h5 class="mb-2">Ionic Chat App</h5>
                  <p class="mb-2">
                    <i class="lar la-clock text-success mr-2 font-size-20"></i>
                    06 Dec, 2020
                  </p>
                  <p class="mb-0">
                    <i class="las la-file-alt text-success mr-2 font-size-20"></i>
                    08 Files
                  </p>
                </a>
              </div>
            </div>
          </div>
          <div class="col-lg-8 col-xl-8">
            <div class="card card-block card-stretch card-height files-table">
              <div class="card-header d-flex justify-content-between">
                <div class="header-title">
                  <h4 class="card-title">Files</h4>
                </div>
                <div class="card-header-toolbar d-flex align-items-center">
                  <a href="./page-files.html" class="view-more">
                    View All
                  </a>
                </div>
              </div>
              <div class="card-body pt-0">
                <div class="table-responsive">
                  <table class="table mb-0 table-borderless tbl-server-info">
                    <thead>
                      <tr>
                        <th scope="col">Name</th>
                        <th scope="col">Members</th>
                        <th scope="col">Last Edit</th>
                        <th scope="col">Size</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>
                          <div class="d-flex align-items-center">
                            <div class="icon-small bg-danger rounded mr-3">
                              <i>
                                <FaFileLines />
                              </i>
                            </div>
                            <div
                              data-load-file="file"
                              data-load-target="#resolte-contaniner"
                              data-url="../assets/vendor/doc-viewer/files/demo.pdf"
                              data-toggle="modal"
                              data-target="#exampleModal"
                              data-title="Weekly-report.pdf"
                              style={{ cursor: "pointer" }}
                            >
                              Weekly-report.pdf
                            </div>
                          </div>
                        </td>
                        <td>Me</td>
                        <td>jan 21, 2020 me</td>
                        <td>02 MB</td>
                      </tr>
                      <tr class="active">
                        <td>
                          <div class="d-flex align-items-center">
                            <div class="icon-small bg-primary rounded mr-3">
                              <i>
                                <FaFileLines />
                              </i>
                            </div>
                            <div
                              data-load-file="file"
                              data-load-target="#resolte-contaniner"
                              data-url="../assets/vendor/doc-viewer/files/demo.pdf"
                              data-toggle="modal"
                              data-target="#exampleModal"
                              data-title="VueJs.pdf"
                              style={{ cursor: "pointer" }}
                            >
                              VueJs.pdf
                            </div>
                          </div>
                        </td>
                        <td>Poul Molive</td>
                        <td>jan 25, 2020 Poul Molive</td>
                        <td>64 MB</td>
                      </tr>
                      <tr>
                        <td>
                          <div class="d-flex align-items-center">
                            <div class="icon-small bg-info rounded mr-3">
                              <i>
                                <FaFileLines />
                              </i>
                            </div>
                            <div
                              data-load-file="file"
                              data-load-target="#resolte-contaniner"
                              data-url="../assets/vendor/doc-viewer/files/demo.docx"
                              data-toggle="modal"
                              data-target="#exampleModal"
                              data-title="Milestone.docx"
                              style={{ cursor: "pointer" }}
                            >
                              Milestone.docx
                            </div>
                          </div>
                        </td>
                        <td>Me</td>
                        <td>Mar 30, 2020 Gail Forcewind</td>
                        <td>30 MB</td>
                      </tr>
                      <tr>
                        <td>
                          <div class="d-flex align-items-center">
                            <div class="icon-small bg-success rounded mr-3">
                              <i>
                                <FaFileLines />
                              </i>
                            </div>
                            <div
                              data-load-file="file"
                              data-load-target="#resolte-contaniner"
                              data-url="../assets/vendor/doc-viewer/files/demo.xlsx"
                              data-toggle="modal"
                              data-target="#exampleModal"
                              data-title="Training center.xlsx"
                              style={{ cursor: "pointer" }}
                            >
                              Training center.xlsx
                            </div>
                          </div>
                        </td>
                        <td>Me</td>
                        <td>Mar 30, 2020 Gail Forcewind</td>
                        <td>10 MB</td>
                      </tr>
                      <tr>
                        <td>
                          <div class="d-flex align-items-center">
                            <div class="icon-small bg-warning rounded mr-3">
                              <i>
                                <FaFileLines />
                              </i>
                            </div>
                            <div
                              data-load-file="file"
                              data-load-target="#resolte-contaniner"
                              data-url="../assets/vendor/doc-viewer/files/demo.pptx"
                              data-toggle="modal"
                              data-target="#exampleModal"
                              data-title="Flavour.pptx"
                              style={{ cursor: "pointer" }}
                            >
                              Flavour.pptx
                            </div>
                          </div>
                        </td>
                        <td>Me</td>
                        <td>Mar 30, 2020 Gail Forcewind</td>
                        <td>10 MB</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>

          <div class="col-lg-4">
            <div class="card card-block card-stretch card-height plan-bg">
              <div class="card-body">
                <h4 class="mb-3 text-white">Unlock Your plan</h4>
                <p>
                  Expanded Storage, Access To
                  <br />
                  More Features On CloudBOX
                </p>
                <div class="row align-items-center justify-content-between">
                  <div class="col-6 go-white">
                    <a href="#" class="btn d-inline-block mt-5">
                      Go Premium
                    </a>
                  </div>
                  <div class="col-6">
                    <img
                      src="../assets/images/layouts/mydrive/lock-bg.png"
                      class="img-fluid"
                      alt="image1"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
