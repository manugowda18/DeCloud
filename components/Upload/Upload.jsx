import React from "react";
import { FaRegEdit } from "react-icons/fa";

const Upload = () => {
  return (
    <div class="content-page">
      <div class="container-fluid">
        <div class="row">
          <div class="col-xl-3 col-lg-4">
            <div class="card">
              <div class="card-header d-flex justify-content-between">
                <div class="header-title">
                  <h4 class="card-title">Upload File</h4>
                </div>
              </div>
              <div class="card-body">
                <form>
                  <div class="form-group text-center">
                    <div class="d-flex justify-content-center">
                      <div class="crm-profile-img-edit position-relative">
                        <img
                          class="crm-profile-pic rounded-circle avatar-100"
                          src="../assets/images/user/11.png"
                          alt="profile-pic"
                        />
                        <div class="crm-p-image bg-primary">
                          <i class="  ">
                            <FaRegEdit />
                          </i>
                          <input
                            class="file-upload"
                            type="file"
                            accept="image/*"
                          />
                        </div>
                      </div>
                    </div>
                    <div class="img-extension mt-3">
                      <div class="d-inline-block align-items-center">
                        <span>Only</span>
                        <a href="javascript:void();">.jpg</a>
                        <a href="javascript:void();">.png</a>
                        <a href="javascript:void();">.jpeg</a>
                        <span>allowed</span>
                      </div>
                    </div>
                  </div>
                  <div class="form-group">
                    <label>Category:</label>
                    <select class="form-control" id="selectuserrole">
                      <option>Select</option>
                      <option>Image</option>
                      <option>Audio</option>
                      <option>Video</option>
                      <option>PDF</option>
                    </select>
                  </div>
                  <div class="form-group">
                    <label for="furl">Notic</label>
                    <p>
                      Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                      Alias consequatur inventore laudantium exercitationem
                      tempore amet error itaque!
                    </p>
                  </div>
                </form>
              </div>
            </div>
          </div>
          <div class="col-xl-9 col-lg-8">
            <div class="card">
              <div class="card-header d-flex justify-content-between">
                <div class="header-title">
                  <h4 class="card-title">Update All Details</h4>
                </div>
              </div>
              <div class="card-body">
                <div class="new-user-info">
                  {/* //VIDEO */}
                  {/* <video
                    className="video-width-new"
                    controls
                    src="https://movieapp.nyc3.digitaloceanspaces.com/Community"
                  ></video> */}
                  {/* //IMAGE */}
                  {/* <div className="image-width-new">
                    <img
                      className="image-width-new-img"
                      src="@theblockchaincoders.png"
                      alt=""
                    />
                  </div> */}
                  {/* // AUDIO */}
                  <audio src=""></audio>
                  {/* // PDF */}
                  <form>
                    <div class="row">
                      <div class="form-group col-md-6">
                        <label for="fname">Creator</label>
                        <input
                          type="text"
                          class="form-control"
                          id="fname"
                          placeholder="First Name"
                        />
                      </div>
                      <div class="form-group col-md-6">
                        <label for="lname">Address:</label>
                        <input
                          type="text"
                          class="form-control"
                          id="lname"
                          placeholder="Last Name"
                        />
                      </div>
                      <div class="form-group col-md-12">
                        <label for="cname">Title</label>
                        <input
                          type="text"
                          class="form-control"
                          id="cname"
                          placeholder="Company Name"
                        />
                      </div>
                      <div class="form-group col-md-12">
                        <label for="cname">Description</label>
                        <textarea
                          class="form-control"
                          name=""
                          rows="3"
                        ></textarea>
                      </div>
                      <div class="form-group col-sm-12">
                        <label>Visibility</label>
                        <select class="form-control" id="selectcountry">
                          <option>Select Country</option>
                          <option>True</option>
                          <option>False</option>
                        </select>
                      </div>
                    </div>

                    <button type="submit" class="btn btn-primary">
                      Add Document
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Upload;
