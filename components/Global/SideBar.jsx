import React from "react";
import { GoPlus, GoHome } from "react-icons/go";
import { LuMenu } from "react-icons/lu";
import { FiHardDrive } from "react-icons/fi";
import { IoIosArrowDown, IoIosArrowUp, IoMdTime } from "react-icons/io";
import { SiTextpattern } from "react-icons/si";
import {
  MdAddToPhotos,
  MdDeleteSweep,
  MdOutlineAttachMoney,
  MdVerifiedUser,
  MdLogin,
} from "react-icons/md";
import { RiFileUploadFill } from "react-icons/ri";
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
import { SiPowerpages } from "react-icons/si";
import { GrVmMaintenance } from "react-icons/gr";
import { BiSolidError } from "react-icons/bi";
import { RiAdminFill } from "react-icons/ri";

const SideBar = ({ setOpenComponent }) => {
  return (
    <div class="iq-sidebar sidebar-default sidebar-new">
      <div class="iq-sidebar-logo d-flex align-items-center justify-content-between">
        <a href="/" class="header-logo">
          <img
            src="../assets/images/logo.png"
            class="img-fluid rounded-normal light-logo"
            alt="logo"
          />
          <img
            src="../assets/images/logo-white.png"
            class="img-fluid rounded-normal darkmode-logo"
            alt="logo"
          />
        </a>
        <div class="iq-menu-bt-sidebar">
          <i class="las  wrapper-menu">
            <LuMenu />
          </i>
        </div>
      </div>
      <div>
        <div class="new-create select-dropdown input-prepend input-append">
          <div class="btn-group">
            <div>
              <div
                onClick={() => setOpenComponent("Upload")}
                class="search-query selet-caption"
              >
                <i class="  pr-2">
                  <GoPlus />
                </i>
                Create New
              </div>
            </div>
          </div>
        </div>
        <nav class="iq-sidebar-menu">
          <ul id="iq-sidebar-toggle" class="iq-menu">
            <li class="active">
              <a onClick={() => setOpenComponent("Home")} class="">
                <i class="las  ">
                  <GoHome />
                </i>
                <span>Dashboard</span>
              </a>
              <ul
                id="dashboard"
                class="iq-submenu collapse"
                data-parent="#iq-sidebar-toggle"
              ></ul>
            </li>
            <li class=" ">
              <a
                href="#mydrive"
                class="collapsed"
                data-toggle="collapse"
                aria-expanded="false"
              >
                <i class="las ">
                  <FiHardDrive />
                </i>
                <span>My Drive</span>
                <i class="las  iq-arrow-right arrow-active">
                  <IoIosArrowDown />
                </i>
                <i class="las  iq-arrow-right arrow-hover">
                  <IoIosArrowUp />
                </i>
              </a>
              <ul
                id="mydrive"
                class="iq-submenu collapse"
                data-parent="#iq-sidebar-toggle"
              >
                <li class=" ">
                  <a onClick={() => setOpenComponent("MyImage")}>
                    <i class="lab ">
                      <FaFileImage />
                    </i>
                    <span>Image</span>
                  </a>
                </li>
                <li class=" ">
                  <a onClick={() => setOpenComponent("MyPDF")}>
                    <i class="las ">
                      <FaFilePdf />
                    </i>
                    <span>PDF</span>
                  </a>
                </li>
                <li class=" ">
                  <a onClick={() => setOpenComponent("MyAudio")}>
                    <i class="las ">
                      <FaFileAudio />
                    </i>
                    <span>Audio</span>
                  </a>
                </li>
                <li class=" ">
                  <a onClick={() => setOpenComponent("MyVideo")}>
                    <i class="las ">
                      <FaFileVideo />
                    </i>
                    <span>Video</span>
                  </a>
                </li>
              </ul>
            </li>
            <li class=" ">
              <a onClick={() => setOpenComponent("Files")}>
                <i class="lar ">
                  <FaFileLines />
                </i>
                <span>Files</span>
              </a>
              <ul
                id="page-files"
                class="iq-submenu collapse"
                data-parent="#iq-sidebar-toggle"
              ></ul>
            </li>
            <li class=" ">
              <a onClick={() => setOpenComponent("Recent")}>
                <i class="las  iq-arrow-left">
                  <IoMdTime />
                </i>
                <span>Recent</span>
              </a>
              <ul
                id="page-folders"
                class="iq-submenu collapse"
                data-parent="#iq-sidebar-toggle"
              ></ul>
            </li>
            <li class=" ">
              <a onClick={() => setOpenComponent("Favourite")}>
                <i class="lar ">
                  <FaRegStar />
                </i>
                <span>Favourite</span>
              </a>
              <ul
                id="page-fevourite"
                class="iq-submenu collapse"
                data-parent="#iq-sidebar-toggle"
              ></ul>
            </li>
            <li class=" ">
              <a onClick={() => setOpenComponent("Trash")}>
                <i class="las  iq-arrow-left">
                  <MdDeleteSweep />
                </i>
                <span>Trash</span>
              </a>
              <ul
                id="page-delete"
                class="iq-submenu collapse"
                data-parent="#iq-sidebar-toggle"
              ></ul>
            </li>
            <li class=" ">
              <a
                href="#otherpage"
                class="collapsed"
                data-toggle="collapse"
                aria-expanded="false"
              >
                <i class="lab  iq-arrow-left">
                  <SiPowerpages />
                </i>
                <span>Setting</span>

                <i class="las  iq-arrow-right arrow-active">
                  <IoIosArrowDown />
                </i>
                <i class="las  iq-arrow-right arrow-hover">
                  <IoIosArrowUp />
                </i>
              </a>
              <ul
                id="otherpage"
                class="iq-submenu collapse"
                data-parent="#iq-sidebar-toggle"
              >
                <li class=" ">
                  <a
                    href="#user"
                    class="collapsed"
                    data-toggle="collapse"
                    aria-expanded="false"
                  >
                    <i class="las ">
                      <RiAdminFill />
                    </i>
                    <span>Admin</span>
                    <i class="las  iq-arrow-right arrow-active">
                      <IoIosArrowDown />
                    </i>
                    <i class="las  iq-arrow-right arrow-hover">
                      <IoIosArrowUp />
                    </i>
                  </a>
                  <ul
                    id="user"
                    class="iq-submenu collapse"
                    data-parent="#otherpage"
                  >
                    <li class=" ">
                      <a onClick={() => setOpenComponent("User")}>
                        <i class="las ">
                          <FaRegUser />
                        </i>
                        <span>User Profile</span>
                      </a>
                    </li>
                    <li class=" ">
                      <a onClick={() => setOpenComponent("AddUser")}>
                        <i class="las ">
                          <FaUserPlus />
                        </i>
                        <span>User Add</span>
                      </a>
                    </li>
                    <li class=" ">
                      <a onClick={() => setOpenComponent("UserList")}>
                        <i class="las ">
                          <FaUsers />
                        </i>
                        <span>User List</span>
                      </a>
                    </li>
                  </ul>
                </li>

                <li class=" ">
                  <a onClick={() => setOpenComponent("Price")}>
                    <i class="las ">
                      <MdOutlineAttachMoney />
                    </i>
                    <span>Pricing</span>
                  </a>
                </li>
                <li class=" ">
                  <a onClick={() => setOpenComponent("Error")}>
                    <i class="las ">
                      <BiSolidError />
                    </i>
                    <span>Error</span>
                  </a>
                </li>

                <li class=" ">
                  <a onClick={() => setOpenComponent("MyImage")}>
                    <i class="las ">
                      <SiTextpattern />
                    </i>
                    <span>Maintenance</span>
                  </a>
                </li>
              </ul>
            </li>
          </ul>
        </nav>
        <div class="sidebar-bottom">
          <h4 class="mb-3">
            <i class="las  mr-2">
              <FaCloud />
            </i>
            Storage
          </h4>
          <p>17.1 / 20 GB Used</p>
          <div class="iq-progress-bar mb-3">
            <span
              class="bg-primary iq-progress progress-1"
              data-percent="67"
            ></span>
          </div>
          <p>75% Full - 3.9 GB Free</p>
          <a href="#" class="btn btn-outline-primary view-more mt-4">
            Buy Storage
          </a>
        </div>
        <div class="p-3"></div>
      </div>
    </div>
  );
};

export default SideBar;
