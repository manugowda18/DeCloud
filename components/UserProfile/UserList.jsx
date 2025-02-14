import React from "react";

const UserList = () => {
  return (
    <div class="content-page">
      <div class="container-fluid">
        <div class="row">
          <div class="col-sm-12">
            <div class="card">
              <div class="card-header d-flex justify-content-between">
                <div class="header-title">
                  <h4 class="card-title">User List</h4>
                </div>
              </div>
              <div class="card-body">
                <div class="row justify-content-between">
                  <div class="col-sm-6 col-md-6">
                    <div
                      id="user_list_datatable_info"
                      class="dataTables_filter"
                    >
                      <form class="mr-3 position-relative">
                        <div class="form-group mb-0">
                          <input
                            type="search"
                            class="form-control"
                            id="exampleInputSearch"
                            placeholder="Search"
                            aria-controls="user-list-table"
                          />
                        </div>
                      </form>
                    </div>
                  </div>
                  <div class="col-sm-6 col-md-6">
                    <div class="user-list-files d-flex">
                      <a class="bg-primary" href="javascript:void();">
                        Print
                      </a>
                      <a class="bg-primary" href="javascript:void();">
                        Excel
                      </a>
                      <a class="bg-primary" href="javascript:void();">
                        Pdf
                      </a>
                    </div>
                  </div>
                </div>
                <div class="table-responsive">
                  <table
                    id="user-list-table"
                    class="table table-striped table-bordered mt-4 "
                    role="grid"
                    aria-describedby="user-list-page-info"
                  >
                    <thead>
                      <tr>
                        <th scope="col">Profile</th>
                        <th scope="col">Name</th>
                        <th scope="col">Contact</th>
                        <th scope="col">Email</th>
                        <th scope="col">Country</th>
                        <th scope="col">Status</th>
                        <th scope="col">Company</th>
                        <th scope="col">Join Date</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td class="text-center">
                          <img
                            class="rounded img-fluid avatar-40"
                            src="../assets/images/user/01.jpg"
                            alt="profile"
                          />
                        </td>
                        <td>Anna Sthesia</td>
                        <td>(760) 756 7568</td>
                        <td>annasthesia@gmail.com</td>
                        <td>USA</td>
                        <td>
                          <span class="badge iq-bg-primary">Active</span>
                        </td>
                        <td>Acme Corporation</td>
                        <td>2019/12/01</td>
                      </tr>
                      <tr>
                        <td class="text-center">
                          <img
                            class="rounded img-fluid avatar-40"
                            src="../assets/images/user/02.jpg"
                            alt="profile"
                          />
                        </td>
                        <td>Brock Lee</td>
                        <td>+62 5689 458 658</td>
                        <td>brocklee@gmail.com</td>
                        <td>Indonesia</td>
                        <td>
                          <span class="badge iq-bg-primary">Active</span>
                        </td>
                        <td>Soylent Corp</td>
                        <td>2019/12/01</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <div class="row justify-content-between mt-3">
                  <div id="user-list-page-info" class="col-md-6">
                    <span>Showing 1 to 5 of 5 entries</span>
                  </div>
                  <div class="col-md-6">
                    <nav aria-label="Page navigation example">
                      <ul class="pagination justify-content-end mb-0">
                        <li class="page-item disabled">
                          <a
                            class="page-link"
                            href="#"
                            tabindex="-1"
                            aria-disabled="true"
                          >
                            Previous
                          </a>
                        </li>
                        <li class="page-item active">
                          <a class="page-link" href="#">
                            1
                          </a>
                        </li>
                        <li class="page-item">
                          <a class="page-link" href="#">
                            2
                          </a>
                        </li>
                        <li class="page-item">
                          <a class="page-link" href="#">
                            3
                          </a>
                        </li>
                        <li class="page-item">
                          <a class="page-link" href="#">
                            Next
                          </a>
                        </li>
                      </ul>
                    </nav>
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

export default UserList;
