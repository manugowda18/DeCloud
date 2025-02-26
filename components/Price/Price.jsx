import React from "react";
import { FaRegStar } from "react-icons/fa";

const Price = () => {
  return (
    <div class="content-page">
      <div class="container-fluid">
        <div class="row">
          <div class="pricing-custom-tab w-100">
            <div class="tab-title-info position-relative">
              <div class="col-sm-12 p-0">
                <ul
                  class="d-flex nav nav-pills mb-5 align-items-center justify-content-center"
                  id="pricing-pills-tab"
                  role="tablist"
                >
                  <li class="nav-item">
                    {" "}
                    <a
                      class="nav-link active show"
                      data-toggle="pill"
                      href="#pricing-data1"
                      role="tab"
                      aria-selected="true"
                    >
                      Daily
                    </a>
                  </li>
                  <li class="nav-item">
                    <div class="avatar-30 star-circle">
                      <i class="">
                        <FaRegStar />
                      </i>
                    </div>
                  </li>
                  <li class="nav-item">
                    {" "}
                    <a
                      class="nav-link"
                      data-toggle="pill"
                      href="#pricing-data2"
                      role="tab"
                      aria-selected="false"
                    >
                      Monthly
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div class="pricing-content">
              <div id="pricing-data1" class="tab-pane fade active show">
                <div class="row m-0">
                  <div class="col-lg-4 col-sm-6">
                    <div class="card card-block card-stretch card-height blog pricing-details">
                      <div class="card-body border text-center rounded">
                        <div class="pricing-header">
                          <div class="icon-data">
                            <i class="">
                              <FaRegStar />
                            </i>
                          </div>
                          <h2 class="mb-4 display-5 font-weight-bolder">
                            $26
                            <small class="font-size-14 text-muted">
                              / Month
                            </small>
                          </h2>
                        </div>
                        <h4 class="mb-3">Max Usage</h4>
                        <ul class="list-unstyled mb-0 pricing-list">
                          <li>
                            <i class="lar la-check-circle text-primary mr-2 font-size-20"></i>
                            Lorem ipsum dolor sit amet.
                          </li>
                          <li>
                            <i class="lar la-check-circle text-primary mr-2 font-size-20"></i>
                            Consectetur adipiscing elit.
                          </li>
                          <li>
                            <i class="lar la-check-circle text-primary mr-2 font-size-20"></i>
                            Integer molestie at massa.
                          </li>
                          <li>
                            <i class="lar la-check-circle text-primary mr-2 font-size-20"></i>
                            Facilisis in pretium nisl aliquet.
                          </li>
                          <li>
                            <i class="lar la-check-circle text-primary mr-2 font-size-20"></i>
                            Nulla volutpat aliquam velit.
                          </li>
                        </ul>{" "}
                        <a href="#" class="btn btn-primary mt-5">
                          Start Starter
                        </a>
                      </div>
                    </div>
                  </div>
                  <div class="col-lg-4 col-sm-6">
                    <div class="card card-block card-stretch card-height blog pricing-details">
                      <div class="card-body border text-center rounded">
                        <div class="pricing-header">
                          <div class="icon-data">
                            <i class="">
                              <FaRegStar />
                            </i>
                          </div>
                          <h2 class="mb-4 display-5 font-weight-bolder">
                            $39
                            <small class="font-size-14 text-muted">
                              / Month
                            </small>
                          </h2>
                        </div>
                        <h4 class="mb-3">Average Usage</h4>
                        <ul class="list-unstyled mb-0 pricing-list">
                          <li>
                            <i class="lar la-check-circle text-primary mr-2 font-size-20"></i>
                            Lorem ipsum dolor sit amet.
                          </li>
                          <li>
                            <i class="lar la-check-circle text-primary mr-2 font-size-20"></i>
                            Consectetur adipiscing elit.
                          </li>
                          <li>
                            <i class="lar la-check-circle text-primary mr-2 font-size-20"></i>
                            Integer molestie at massa.
                          </li>
                          <li>
                            <i class="lar la-check-circle text-primary mr-2 font-size-20"></i>
                            Facilisis in pretium nisl aliquet.
                          </li>
                          <li>
                            <i class="lar la-check-circle text-primary mr-2 font-size-20"></i>
                            Nulla volutpat aliquam velit.
                          </li>
                        </ul>{" "}
                        <a href="#" class="btn btn-primary mt-5">
                          Start Starter
                        </a>
                      </div>
                    </div>
                  </div>
                  <div class="col-lg-4 col-sm-6">
                    <div class="card card-block card-stretch card-height blog pricing-details">
                      <div class="card-body border text-center rounded">
                        <div class="pricing-header">
                          <div class="icon-data">
                            <i class="">
                              <FaRegStar />
                            </i>
                          </div>
                          <h2 class="mb-4 display-5 font-weight-bolder">
                            $48
                            <small class="font-size-14 text-muted">
                              / Month
                            </small>
                          </h2>
                        </div>
                        <h4 class="mb-3">Minimum Usage</h4>
                        <ul class="list-unstyled mb-0 pricing-list">
                          <li>
                            <i class="lar la-check-circle text-primary mr-2 font-size-20"></i>
                            Lorem ipsum dolor sit amet.
                          </li>
                          <li>
                            <i class="lar la-check-circle text-primary mr-2 font-size-20"></i>
                            Consectetur adipiscing elit.
                          </li>
                          <li>
                            <i class="lar la-check-circle text-primary mr-2 font-size-20"></i>
                            Integer molestie at massa.
                          </li>
                          <li>
                            <i class="lar la-check-circle text-primary mr-2 font-size-20"></i>
                            Facilisis in pretium nisl aliquet.
                          </li>
                          <li>
                            <i class="lar la-check-circle text-primary mr-2 font-size-20"></i>
                            Nulla volutpat aliquam velit.
                          </li>
                        </ul>{" "}
                        <a href="#" class="btn btn-primary mt-5">
                          Start Starter
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div id="pricing-data2" class="tab-pane fade">
                <div class="d-flex align-items-center">
                  <div class="col-lg-4 col-sm-6">
                    <div class="card card-block card-stretch card-height blog pricing-details">
                      <div class="card-body border text-center rounded">
                        <div class="pricing-header bg-primary text-white">
                          <div class="icon-data">
                            <i class="">
                              <FaRegStar />
                            </i>
                          </div>
                          <h2 class="mb-4 display-5 font-weight-bolder text-white">
                            $26<small class="font-size-14">/ Month</small>
                          </h2>
                        </div>
                        <h4 class="mb-3">Max Usage</h4>
                        <ul class="list-unstyled mb-0 pricing-list">
                          <li>
                            <i class="lar la-check-circle text-primary mr-2 font-size-20"></i>
                            Lorem ipsum dolor sit amet.
                          </li>
                          <li>
                            <i class="lar la-check-circle text-primary mr-2 font-size-20"></i>
                            Consectetur adipiscing elit.
                          </li>
                          <li>
                            <i class="lar la-check-circle text-primary mr-2 font-size-20"></i>
                            Integer molestie at massa.
                          </li>
                          <li>
                            <i class="lar la-check-circle text-primary mr-2 font-size-20"></i>
                            Facilisis in pretium nisl aliquet.
                          </li>
                          <li>
                            <i class="lar la-check-circle text-primary mr-2 font-size-20"></i>
                            Nulla volutpat aliquam velit.
                          </li>
                        </ul>{" "}
                        <a href="#" class="btn btn-primary mt-5">
                          Start Starter
                        </a>
                      </div>
                    </div>
                  </div>
                  <div class="col-lg-4 col-sm-6">
                    <div class="card card-block card-stretch card-height blog pricing-details">
                      <div class="card-body border text-center rounded">
                        <div class="pricing-header bg-success text-white">
                          <div class="icon-data">
                            <i class="">
                              <FaRegStar />
                            </i>
                          </div>
                          <h2 class="mb-4 display-5 font-weight-bolder text-white">
                            $26<small class="font-size-14">/ Month</small>
                          </h2>
                        </div>
                        <h4 class="mb-3">Max Usage</h4>
                        <ul class="list-unstyled mb-0 pricing-list">
                          <li>
                            <i class="lar la-check-circle text-primary mr-2 font-size-20"></i>
                            Lorem ipsum dolor sit amet.
                          </li>
                          <li>
                            <i class="lar la-check-circle text-primary mr-2 font-size-20"></i>
                            Consectetur adipiscing elit.
                          </li>
                          <li>
                            <i class="lar la-check-circle text-primary mr-2 font-size-20"></i>
                            Integer molestie at massa.
                          </li>
                          <li>
                            <i class="lar la-check-circle text-primary mr-2 font-size-20"></i>
                            Facilisis in pretium nisl aliquet.
                          </li>
                          <li>
                            <i class="lar la-check-circle text-primary mr-2 font-size-20"></i>
                            Nulla volutpat aliquam velit.
                          </li>
                        </ul>{" "}
                        <a href="#" class="btn btn-success mt-5">
                          Start Starter
                        </a>
                      </div>
                    </div>
                  </div>
                  <div class="col-lg-4 col-sm-6">
                    <div class="card card-block card-stretch card-height blog pricing-details">
                      <div class="card-body border text-center rounded">
                        <div class="pricing-header bg-danger text-white">
                          <div class="icon-data">
                            <i class="">
                              <FaRegStar />
                            </i>
                          </div>
                          <h2 class="mb-4 display-5 font-weight-bolder text-white">
                            $26<small class="font-size-14">/ Month</small>
                          </h2>
                        </div>
                        <h4 class="mb-3">Max Usage</h4>
                        <ul class="list-unstyled mb-0 pricing-list">
                          <li>
                            <i class="lar la-check-circle text-primary mr-2 font-size-20"></i>
                            Lorem ipsum dolor sit amet.
                          </li>
                          <li>
                            <i class="lar la-check-circle text-primary mr-2 font-size-20"></i>
                            Consectetur adipiscing elit.
                          </li>
                          <li>
                            <i class="lar la-check-circle text-primary mr-2 font-size-20"></i>
                            Integer molestie at massa.
                          </li>
                          <li>
                            <i class="lar la-check-circle text-primary mr-2 font-size-20"></i>
                            Facilisis in pretium nisl aliquet.
                          </li>
                          <li>
                            <i class="lar la-check-circle text-primary mr-2 font-size-20"></i>
                            Nulla volutpat aliquam velit.
                          </li>
                        </ul>{" "}
                        <a href="#" class="btn btn-danger mt-5">
                          Start Starter
                        </a>
                      </div>
                    </div>
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

export default Price;
