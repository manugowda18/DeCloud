import React from "react";
import {
  IoIosArrowDown,
  IoIosArrowRoundForward,
  IoMdTime,
  IoIosArrowBack,
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
import { FaClipboardList, FaPlay } from "react-icons/fa6";
import { CiBoxList } from "react-icons/ci";
import { FaBox } from "react-icons/fa";

const Favourite = () => {
  return (
    <div class="content-page">
      <div class="container-fluid">
        <div class="row">
          <div class="col-lg-12">
            <div class="d-flex align-items-center justify-content-between welcome-content mb-3">
              <div class="navbar-breadcrumb">
                <nav aria-label="breadcrumb">
                  <ul class="breadcrumb mb-0">
                    <li class="breadcrumb-item">
                      <a>My Drive</a>
                    </li>
                    <li class="breadcrumb-item active" aria-current="page">
                      Alexa Workshop
                    </li>
                  </ul>
                </nav>
              </div>
              <div class="d-flex align-items-center">
                <div class="list-grid-toggle mr-4">
                  <span class="icon icon-grid i-grid">
                    <i class=" font-size-20">
                      <FaBox />
                    </i>
                  </span>
                  <span class="icon icon-grid i-list">
                    <i class=" font-size-20">
                      <CiBoxList />
                    </i>
                  </span>
                  <span class="label label-list">List</span>
                </div>
                <div class="dashboard1-dropdown d-flex align-items-center">
                  <div class="dashboard1-info rounded">
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
        </div>
        <div class="icon icon-grid i-grid">
          <div class="row">
            <div class="col-lg-12">
              <div class="card card-block card-stretch card-transparent">
                <div class="card-header d-flex justify-content-between pb-0">
                  <div class="header-title">
                    <h4 class="card-title">Images</h4>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-lg-3 col-md-6 col-sm-6">
              <div class="card card-block card-stretch card-height">
                <div class="card-body image-thumb">
                  <div class="mb-4 text-center p-3 rounded iq-thumb">
                    <a
                      class="image-popup-vertical-fit"
                      href="../assets/images/layouts/page-1/01.png"
                    >
                      <img
                        src="../assets/images/layouts/page-1/01.png"
                        class="img-fluid"
                        alt="images"
                      />
                      <div class="iq-image-overlay"></div>
                    </a>
                  </div>
                  <h6>Alexa.jpeg</h6>
                </div>
              </div>
            </div>
            <div class="col-lg-3 col-md-6 col-sm-6">
              <div class="card card-block card-stretch card-height">
                <div class="card-body image-thumb">
                  <div class="mb-4 text-center p-3 rounded iq-thumb">
                    <a
                      class="image-popup-vertical-fit"
                      href="../assets/images/layouts/page-1/02.png"
                    >
                      <img
                        src="../assets/images/layouts/page-1/02.png"
                        class="img-fluid"
                        alt="images"
                      />
                      <div class="iq-image-overlay"></div>
                    </a>
                  </div>
                  <h6>Eliminator.png</h6>
                </div>
              </div>
            </div>
            <div class="col-lg-3 col-md-6 col-sm-6">
              <div class="card card-block card-stretch card-height">
                <div class="card-body image-thumb">
                  <div class="mb-4 text-center p-3 rounded iq-thumb">
                    <a
                      class="image-popup-vertical-fit"
                      href="../assets/images/layouts/page-1/03.png"
                    >
                      <img
                        src="../assets/images/layouts/page-1/03.png"
                        class="img-fluid"
                        alt="images"
                      />
                      <div class="iq-image-overlay"></div>
                    </a>
                  </div>
                  <h6>Screenshot.svg</h6>
                </div>
              </div>
            </div>
            <div class="col-lg-3 col-md-6 col-sm-6">
              <div class="card card-block card-stretch card-height">
                <div class="card-body image-thumb">
                  <div class="mb-4 text-center p-3 rounded iq-thumb">
                    <a
                      class="image-popup-vertical-fit"
                      href="../assets/images/layouts/page-1/04.png"
                    >
                      <img
                        src="../assets/images/layouts/page-1/04.png"
                        class="img-fluid"
                        alt="images"
                      />
                      <div class="iq-image-overlay"></div>
                      <div class="overlay-img-icon">
                        <i class="las ">
                          <FaPlay />
                        </i>
                      </div>
                    </a>
                  </div>
                  <h6>Video.mp4</h6>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="icon icon-grid i-list">
          <div class="row">
            <div class="col-lg-12">
              <div class="card card-block card-stretch card-transparent">
                <div class="card-header d-flex justify-content-between pb-0">
                  <div class="header-title">
                    <h4 class="card-title">list View</h4>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-lg-12">
              <div class="card card-block card-stretch card-height">
                <div class="card-body">
                  <div class="table-responsive">
                    <table class="table mb-0 table-borderless tbl-server-info">
                      <thead>
                        <tr>
                          <th scope="col">Name</th>
                          <th scope="col">Owner</th>
                          <th scope="col">Last Edit</th>
                          <th scope="col">File Size</th>
                          <th scope="col"></th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td>
                            <div class="d-flex align-items-center">
                              <div class="mr-3">
                                <a href="#">
                                  <img
                                    src="../assets/images/layouts/page-1/01.png"
                                    class="img-fluid avatar-30"
                                    alt="image1"
                                  />
                                </a>
                              </div>
                              Alexa.jpeg
                            </div>
                          </td>
                          <td>Me</td>
                          <td>jan 21, 2020 me</td>
                          <td>02 MB</td>
                        </tr>
                        <tr>
                          <td>
                            <div class="d-flex align-items-center">
                              <div class="mr-3">
                                <a href="#">
                                  <img
                                    src="../assets/images/layouts/page-1/02.png"
                                    class="img-fluid avatar-30"
                                    alt="image1"
                                  />
                                </a>
                              </div>
                              Alexa2.png
                            </div>
                          </td>
                          <td>Poul Molive</td>
                          <td>jan 25, 2020 Poul Molive</td>
                          <td>64 MB</td>
                          <td>
                            <div class="dropdown">
                              <span
                                class="dropdown-toggle"
                                id="dropdownMenuButton7"
                                data-toggle="dropdown"
                              >
                                <i class="ri-more-fill"></i>
                              </span>
                              <div
                                class="dropdown-menu dropdown-menu-right"
                                aria-labelledby="dropdownMenuButton7"
                              >
                                <a class="dropdown-item" href="#">
                                  <i class="ri-eye-fill mr-2"></i>View
                                </a>
                                <a class="dropdown-item" href="#">
                                  <i class="ri-delete-bin-6-fill mr-2"></i>
                                  Delete
                                </a>
                                <a class="dropdown-item" href="#">
                                  <i class="ri-pencil-fill mr-2"></i>Edit
                                </a>
                                <a class="dropdown-item" href="#">
                                  <i class="ri-printer-fill mr-2"></i>Print
                                </a>
                                <a class="dropdown-item" href="#">
                                  <i class="ri-file-download-fill mr-2"></i>
                                  Download
                                </a>
                              </div>
                            </div>
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <div class="d-flex align-items-center">
                              <div class="mr-3">
                                <a href="#">
                                  <img
                                    src="../assets/images/layouts/page-1/03.png"
                                    class="img-fluid avatar-30"
                                    alt="image1"
                                  />
                                </a>
                              </div>
                              Alexa3.svg
                            </div>
                          </td>
                          <td>Me</td>
                          <td>Mar 30, 2020 Gail Forcewind</td>
                          <td>30 MB</td>
                          <td>
                            <div class="dropdown">
                              <span
                                class="dropdown-toggle"
                                id="dropdownMenuButton8"
                                data-toggle="dropdown"
                              >
                                <i class="ri-more-fill"></i>
                              </span>
                              <div
                                class="dropdown-menu dropdown-menu-right"
                                aria-labelledby="dropdownMenuButton8"
                              >
                                <a class="dropdown-item" href="#">
                                  <i class="ri-eye-fill mr-2"></i>View
                                </a>
                                <a class="dropdown-item" href="#">
                                  <i class="ri-delete-bin-6-fill mr-2"></i>
                                  Delete
                                </a>
                                <a class="dropdown-item" href="#">
                                  <i class="ri-pencil-fill mr-2"></i>Edit
                                </a>
                                <a class="dropdown-item" href="#">
                                  <i class="ri-printer-fill mr-2"></i>Print
                                </a>
                                <a class="dropdown-item" href="#">
                                  <i class="ri-file-download-fill mr-2"></i>
                                  Download
                                </a>
                              </div>
                            </div>
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <div class="d-flex align-items-center">
                              <div class="mr-3">
                                <a href="#">
                                  <img
                                    src="../assets/images/layouts/page-1/04.png"
                                    class="img-fluid avatar-30"
                                    alt="image1"
                                  />
                                </a>
                              </div>
                              Alexa Video.mp4
                            </div>
                          </td>
                          <td>Me</td>
                          <td>Mar 30, 2020 Gail Forcewind</td>
                          <td>10 MB</td>
                          <td>
                            <div class="dropdown">
                              <span
                                class="dropdown-toggle"
                                id="dropdownMenuButton9"
                                data-toggle="dropdown"
                              >
                                <i class="ri-more-fill"></i>
                              </span>
                              <div
                                class="dropdown-menu dropdown-menu-right"
                                aria-labelledby="dropdownMenuButton9"
                              >
                                <a class="dropdown-item" href="#">
                                  <i class="ri-eye-fill mr-2"></i>View
                                </a>
                                <a class="dropdown-item" href="#">
                                  <i class="ri-delete-bin-6-fill mr-2"></i>
                                  Delete
                                </a>
                                <a class="dropdown-item" href="#">
                                  <i class="ri-pencil-fill mr-2"></i>Edit
                                </a>
                                <a class="dropdown-item" href="#">
                                  <i class="ri-printer-fill mr-2"></i>Print
                                </a>
                                <a class="dropdown-item" href="#">
                                  <i class="ri-file-download-fill mr-2"></i>
                                  Download
                                </a>
                              </div>
                            </div>
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <div class="d-flex align-items-center">
                              <div class="mr-3">
                                <a href="#">
                                  <img
                                    src="../assets/images/layouts/page-4/pdf.png"
                                    class="img-fluid avatar-30"
                                    alt="image1"
                                  />
                                </a>
                              </div>
                              <div
                                data-load-file="file"
                                data-load-target="#resolte-contaniner"
                                data-url="../assets/vendor/doc-viewer/files/demo.pdf"
                                data-toggle="modal"
                                data-target="#exampleModal"
                                data-title="alexa5.pdf"
                                style={{ cursor: "pointer" }}
                              >
                                Alexa5.pdf
                              </div>
                            </div>
                          </td>
                          <td>Me</td>
                          <td>Mar 30, 2020 Gail Forcewind</td>
                          <td>10 MB</td>
                          <td>
                            <div class="dropdown">
                              <span
                                class="dropdown-toggle"
                                id="dropdownMenuButton10"
                                data-toggle="dropdown"
                              >
                                <i class="ri-more-fill"></i>
                              </span>
                              <div
                                class="dropdown-menu dropdown-menu-right"
                                aria-labelledby="dropdownMenuButton10"
                              >
                                <a class="dropdown-item" href="#">
                                  <i class="ri-eye-fill mr-2"></i>View
                                </a>
                                <a class="dropdown-item" href="#">
                                  <i class="ri-delete-bin-6-fill mr-2"></i>
                                  Delete
                                </a>
                                <a class="dropdown-item" href="#">
                                  <i class="ri-pencil-fill mr-2"></i>Edit
                                </a>
                                <a class="dropdown-item" href="#">
                                  <i class="ri-printer-fill mr-2"></i>Print
                                </a>
                                <a class="dropdown-item" href="#">
                                  <i class="ri-file-download-fill mr-2"></i>
                                  Download
                                </a>
                              </div>
                            </div>
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <div class="d-flex align-items-center">
                              <div class="mr-3">
                                <a href="#">
                                  <img
                                    src="../assets/images/layouts/page-4/doc.png"
                                    class="img-fluid avatar-30"
                                    alt="image1"
                                  />
                                </a>
                              </div>
                              <div
                                data-load-file="file"
                                data-load-target="#resolte-contaniner"
                                data-url="../assets/vendor/doc-viewer/files/demo.docx"
                                data-toggle="modal"
                                data-target="#exampleModal"
                                data-title="alexa6.docx"
                                style={{ cursor: "pointer" }}
                              >
                                Alexa6.docx
                              </div>
                            </div>
                          </td>
                          <td>Penny</td>
                          <td>Mar 31, 2020 Penny</td>
                          <td>65 MB</td>
                          <td>
                            <div class="dropdown">
                              <span
                                class="dropdown-toggle"
                                id="dropdownMenuButton11"
                                data-toggle="dropdown"
                              >
                                <i class="ri-more-fill"></i>
                              </span>
                              <div
                                class="dropdown-menu dropdown-menu-right"
                                aria-labelledby="dropdownMenuButton11"
                              >
                                <a class="dropdown-item" href="#">
                                  <i class="ri-eye-fill mr-2"></i>View
                                </a>
                                <a class="dropdown-item" href="#">
                                  <i class="ri-delete-bin-6-fill mr-2"></i>
                                  Delete
                                </a>
                                <a class="dropdown-item" href="#">
                                  <i class="ri-pencil-fill mr-2"></i>Edit
                                </a>
                                <a class="dropdown-item" href="#">
                                  <i class="ri-printer-fill mr-2"></i>Print
                                </a>
                                <a class="dropdown-item" href="#">
                                  <i class="ri-file-download-fill mr-2"></i>
                                  Download
                                </a>
                              </div>
                            </div>
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <div class="d-flex align-items-center">
                              <div class="mr-3">
                                <a href="#">
                                  <img
                                    src="../assets/images/layouts/page-4/xlsx.png"
                                    class="img-fluid avatar-30"
                                    alt="image1"
                                  />
                                </a>
                              </div>
                              <div
                                data-title="Alexa8.xlsx"
                                data-load-file="file"
                                data-load-target="#resolte-contaniner"
                                data-url="../assets/vendor/doc-viewer/files/demo.xlsx"
                                data-toggle="modal"
                                data-target="#exampleModal"
                                style={{ cursor: "pointer" }}
                              >
                                Alexa8.xlsx
                              </div>
                            </div>
                          </td>
                          <td>Banny</td>
                          <td>Mar 30, 2020 Banny</td>
                          <td>90 MB</td>
                          <td>
                            <div class="dropdown">
                              <span
                                class="dropdown-toggle"
                                id="dropdownMenuButton13"
                                data-toggle="dropdown"
                              >
                                <i class="ri-more-fill"></i>
                              </span>
                              <div
                                class="dropdown-menu dropdown-menu-right"
                                aria-labelledby="dropdownMenuButton13"
                              >
                                <a class="dropdown-item" href="#">
                                  <i class="ri-eye-fill mr-2"></i>View
                                </a>
                                <a class="dropdown-item" href="#">
                                  <i class="ri-delete-bin-6-fill mr-2"></i>
                                  Delete
                                </a>
                                <a class="dropdown-item" href="#">
                                  <i class="ri-pencil-fill mr-2"></i>Edit
                                </a>
                                <a class="dropdown-item" href="#">
                                  <i class="ri-printer-fill mr-2"></i>Print
                                </a>
                                <a class="dropdown-item" href="#">
                                  <i class="ri-file-download-fill mr-2"></i>
                                  Download
                                </a>
                              </div>
                            </div>
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <div class="d-flex align-items-center">
                              <div class="mr-3">
                                <a href="#">
                                  <img
                                    src="../assets/images/layouts/page-4/ppt.png"
                                    class="img-fluid avatar-30"
                                    alt="image1"
                                  />
                                </a>
                              </div>
                              <div
                                data-load-file="file"
                                data-load-target="#resolte-contaniner"
                                data-url="../assets/vendor/doc-viewer/files/demo.docx"
                                data-toggle="modal"
                                data-target="#exampleModal"
                                data-title="alexa7.pptx"
                                style={{ cursor: "pointer" }}
                              >
                                Alexa7.pptx
                              </div>
                            </div>
                          </td>
                          <td>Me</td>
                          <td>Apr 04, 2020 me</td>
                          <td>10 MB</td>
                          <td>
                            <div class="dropdown">
                              <span
                                class="dropdown-toggle"
                                id="dropdownMenuButton12"
                                data-toggle="dropdown"
                              >
                                <i class="ri-more-fill"></i>
                              </span>
                              <div
                                class="dropdown-menu dropdown-menu-right"
                                aria-labelledby="dropdownMenuButton12"
                              >
                                <a class="dropdown-item" href="#">
                                  <i class="ri-eye-fill mr-2"></i>View
                                </a>
                                <a class="dropdown-item" href="#">
                                  <i class="ri-delete-bin-6-fill mr-2"></i>
                                  Delete
                                </a>
                                <a class="dropdown-item" href="#">
                                  <i class="ri-pencil-fill mr-2"></i>Edit
                                </a>
                                <a class="dropdown-item" href="#">
                                  <i class="ri-printer-fill mr-2"></i>Print
                                </a>
                                <a class="dropdown-item" href="#">
                                  <i class="ri-file-download-fill mr-2"></i>
                                  Download
                                </a>
                              </div>
                            </div>
                          </td>
                        </tr>
                      </tbody>
                    </table>
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

export default Favourite;
