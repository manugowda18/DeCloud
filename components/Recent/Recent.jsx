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

const Recent = () => {
  return (
    <div class="content-page">
      <div class="container-fluid">
        <div class="row">
          <div class="col-lg-12">
            <div class="card card-block card-stretch card-transparent">
              <div class="card-header d-flex justify-content-between pb-0">
                <div class="header-title">
                  <h4 class="card-title">Files</h4>
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
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>
                          <div class="d-flex align-items-center">
                            <div class="icon-small bg-danger rounded mr-3">
                              <i class="ri-file-excel-line"></i>
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
                              Weekly Report.pdf
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
        </div>
      </div>
    </div>
  );
};

export default Recent;
