import React from "react";

const Modal = () => {
  return (
    <div
      class="modal fade"
      id="exampleModal"
      tabindex="-1"
      role="dialog"
      aria-hidden="true"
    >
      <div class="modal-dialog modal-dialog-centered modal-xl" role="document">
        <div class="modal-content">
          <div class="modal-header">
            <h4 class="modal-title">Title</h4>
            <div>
              <a class="btn" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">&times;</span>
              </a>
            </div>
          </div>
          <div class="modal-body">
            <div>
              <object
                className="pdf-file"
                data="https://media.geeksforgeeks.org/wp-content/cdn-uploads/20210101201653/PDF.pdf"
              ></object>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
