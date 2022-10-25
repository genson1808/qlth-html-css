import Multiselect from "./combobox.js";
import Toast from "./toast.js";

$(document).ready(function () {

    let htmlAddEmployeeDialog = `
<div class="add__employee--dialog">
  <div class="title">Thêm hồ sơ cán bộ, giáo viên</div>
  <div class="form-wrapper">
    <div class="form-stack-1 input-stack">
      <div class="wrap-label">
        <label for="code-ip" class="required">Số hiệu cán bộ</label>
      </div>
      <input tabindex="0" type="text" class="input input--rounded medium--input" id="code-ip"/>
    </div>
    <div class="form-stack-2 input-stack">
      <div class="wrap-label">
        <label for="user-name-ip" class="required">Họ và tên</label>
      </div>
      <input type="text" class="input input--rounded medium--input" id="user-name-ip"/>
    </div>
    <div class="form-stack-3 input-stack">
      <div class="wrap-label">
        <label for="phone-ip">Số điện thoại</label>
      </div>
      <input type="text" class="input input--rounded medium--input" id="phone-ip"/>
    </div>
    <div class="form-stack-4 input-stack">
      <div class="wrap-label">
        <label for="email-ip">Email</label>
      </div>
      <input type="text" class="input input--rounded medium--input" id="email-ip"/>
    </div>
    <div class="form-stack-5 input-stack">
      <div class="wrap-label">
        <label title="Tổ bộ môn">Tổ bộ môn</label>
      </div>

      <div class="drop-down">
        <div class="selected">
          <a href="#"><span></span></a>
        </div>
        <div class="toggle-dropdown"></div>
        <div class="options">
          <ul>
            <li><a href="#">User1<span class="value">1</span></a></li>
            <li><a href="#">User2<span class="value">2</span></a></li>
            <li><a href="#">User3<span class="value">3</span></a></li>
            <li><a href="#">User3<span class="value">3</span></a></li>
            <li><a href="#">User3<span class="value">3</span></a></li>
            <li><a href="#">User3<span class="value">3</span></a></li>
            <li><a href="#">User3<span class="value">3</span></a></li>
            <li><a href="#">User3<span class="value">3</span></a></li>
            <li><a href="#">User3<span class="value">3</span></a></li>
          </ul>
        </div>
      </div>
    </div>
    <div class="form-stack-6 input-stack">
      <div class="wrap-label">
        <label title="Quản lý theo môn">QL theo môn</label>
      </div>
      <div  class="multiselect" id="subjects">
        <dl class="combobox">

          <dt>
            <div tabindex="0" class="selected-container">
              <!-- <span class="hida">Select</span> -->
              <p class="multiSel">
              <div class="toggle-combobox"></div>

              </p>
            </div>
          </dt>
          <!-- <div class="show"> show</div> -->
          <!-- <div class="toggle-combobox"></div> -->

          <dd>
            <div  class="mutliSelect">
              <ul>
                <li>
                  <div class="checkbox">
                    <input type="checkbox" value="Tất cả" name="checkbox_input"
                           id="checkbox_0"
                           class="checkbox__input"/>
                    <label for="checkbox_0" class="checkbox__label"></label>
                    <span class="cb-value">
                    Tất cả
                  </span>
                  </div>
                </li>
                <li>
                  <div class="checkbox">
                    <input type="checkbox" value="Toán" name="checkbox_input"
                           id="checkbox_1"
                           class="checkbox__input"/>
                    <label for="checkbox_1" class="checkbox__label"></label>
                    <span class="cb-value">
                    Toán
                  </span>
                  </div>
                </li>
                <li>
                  <div class="checkbox">
                    <input type="checkbox" value="Lý" name="checkbox_input" id="checkbox_2"
                           class="checkbox__input"/>
                    <label for="checkbox_2" class="checkbox__label"></label>
                    <span class="cb-value">
                    Lý
                  </span>
                  </div>
                </li>
                <li>
                  <div class="checkbox">
                    <input type="checkbox" value="Hoá" name="checkbox_input" id="checkbox_3"
                           class="checkbox__input"/>
                    <label for="checkbox_3" class="checkbox__label"></label>
                    <span class="cb-value">
                    Hoá
                  </span>
                  </div>
                </li>
                <li>
                  <div class="checkbox">
                    <input type="checkbox" value="Sinh" name="checkbox_input"
                           id="checkbox_4"
                           class="checkbox__input"/>
                    <label for="checkbox_4" class="checkbox__label"></label>
                    <span class="cb-value">
                    Sinh
                  </span>
                  </div>
                </li>

                <li>
                  <div class="checkbox">
                    <input type="checkbox" value="Sử" name="checkbox_input" id="checkbox_5"
                           class="checkbox__input"/>
                    <label for="checkbox_5" class="checkbox__label"></label>
                    <span class="cb-value">

                    Sử
                  </span>
                  </div>
                </li>
                <li>
                  <div class="checkbox">
                    <input type="checkbox" value="Địa" name="checkbox_input" id="checkbox_6"
                           class="checkbox__input"/>
                    <label for="checkbox_6" class="checkbox__label"></label>
                    <span class="cb-value">
                    Địa
                  </span>
                  </div>
                </li>
                <li>
                  <div class="checkbox">
                    <input type="checkbox" value="Ngữ văn" name="checkbox_input"
                           id="checkbox_7"
                           class="checkbox__input"/>
                    <label for="checkbox_7" class="checkbox__label"></label>
                    <span class="cb-value">
                    Ngữ văn
                  </span>
                  </div>
                </li>
              </ul>
            </div>
          </dd>
        </dl>
      </div>
    </div>
    <div class="form-stack-7 input-stack">
      <div class="wrap-label">
        <label title="Quản lý kho, phòng">QL kho, phòng</label>
      </div>
      <div tabindex="0" class="multiselect" id="rooms">
        <dl class="combobox">

          <dt>
            <div class="selected-container">
              <p class="multiSel">
              <div class="toggle-combobox"></div>

              </p>
            </div>
          </dt>

          <dd>
            <div class="mutliSelect">
              <ul>
                <li>
                  <div class="checkbox">
                    <input type="checkbox" value="Tất cả" name="checkbox_input"
                           id="checkbox_8"
                           class="checkbox__input"/>
                    <label for="checkbox_8" class="checkbox__label"></label>
                    <span class="cb-value">
                    Tất cả
                  </span>
                  </div>
                </li>
                <li>
                  <div class="checkbox">
                    <input type="checkbox" value="Thể dục" name="checkbox_input"
                           id="checkbox_9"
                           class="checkbox__input"/>
                    <label for="checkbox_9" class="checkbox__label"></label>
                    <span class="cb-value">
                    Thể dục
                  </span>
                  </div>
                </li>
                <li>
                  <div class="checkbox">
                    <input type="checkbox" value="Vật lý" name="checkbox_input"
                           id="checkbox_10"
                           class="checkbox__input"/>
                    <label for="checkbox_10" class="checkbox__label"></label>
                    <span class="cb-value">
                    Vật lý
                  </span>
                  </div>
                </li>
                <li>
                  <div class="checkbox">
                    <input type="checkbox" value="Hoá học" name="checkbox_input"
                           id="checkbox_11"
                           class="checkbox__input"/>
                    <label for="checkbox_11" class="checkbox__label"></label>
                    <span class="cb-value">
                    Hoá học
                  </span>
                  </div>
                </li>
              </ul>
            </div>
          </dd>
        </dl>
      </div>
    </div>
    <div class="form-stack-8 input-stack">
      <div class="checkbox">
        <input  type="checkbox" value="Trình độ nghiệp vụ QLTB" name="checkbox_input" id="checkbox_12"
               class="checkbox__input"/>
        <label tabindex="0" for="checkbox_12" title="Trình độ nghiệp vụ quản lý thiết bị"
               class="checkbox__label"></label>
        <span class="cb-value ml-8">
        Trình độ nghiệp vụ QLTB
      </span>
      </div>
      <div class="checkbox">
        <input  type="checkbox" value="Đang làm việc" name="checkbox_input" id="is-working"
               class="checkbox__input"/>
        <label tabindex="0" for="is-working" title="Đang làm việc" class="checkbox__label"></label>
        <span class="cb-value ml-8">
        Đang làm việc
      </span>
      </div>
      <div class="day-off">
        <div>
          <label for="day-off-cb" title="Ngày nghỉ việc" class="checkbox__label"></label>
          <span class="cb-value mr-8">
          Ngày nghỉ việc
        </span>
          <input type="date" id="day-off-cb">
        </div>
      </div>
    </div>
    <div class="form-stack-9 input-stack">
      <div class="btn__close--dialog btn btn--white mr-8 ">Đóng</div>
      <div class="btn__save btn btn--green mr-0">Lưu</div>
    </div>
  </div>
</div>
`

    let htmlEditEmployeeDialog = `
<div class="edit__employee--dialog">
  <div class="title">Chỉnh sửa hồ sơ cán bộ, giáo viên</div>
  <div class="form-wrapper">
    <div class="form-stack-1 input-stack">
      <div class="wrap-label">
        <label for="code-ip" class="required">Số hiệu cán bộ</label>
      </div>
      <input tabindex="0" type="text" class="input input--rounded medium--input" id="code-ip"/>
    </div>
    <div class="form-stack-2 input-stack">
      <div class="wrap-label">
        <label for="user-name-ip" class="required">Họ và tên</label>
      </div>
      <input type="text" class="input input--rounded medium--input" id="user-name-ip"/>
    </div>
    <div class="form-stack-3 input-stack">
      <div class="wrap-label">
        <label for="phone-ip">Số điện thoại</label>
      </div>
      <input type="text" class="input input--rounded medium--input" id="phone-ip"/>
    </div>
    <div class="form-stack-4 input-stack">
      <div class="wrap-label">
        <label for="email-ip">Email</label>
      </div>
      <input type="text" class="input input--rounded medium--input" id="email-ip"/>
    </div>
    <div class="form-stack-5 input-stack">
      <div class="wrap-label">
        <label title="Tổ bộ môn">Tổ bộ môn</label>
      </div>

      <div class="drop-down">
        <div class="selected">
          <a href="#"><span></span></a>
        </div>
        <div class="toggle-dropdown"></div>
        <div class="options">
          <ul>
            <li><a href="#">User1<span class="value">1</span></a></li>
            <li><a href="#">User2<span class="value">2</span></a></li>
            <li><a href="#">User3<span class="value">3</span></a></li>
            <li><a href="#">User3<span class="value">3</span></a></li>
            <li><a href="#">User3<span class="value">3</span></a></li>
            <li><a href="#">User3<span class="value">3</span></a></li>
            <li><a href="#">User3<span class="value">3</span></a></li>
            <li><a href="#">User3<span class="value">3</span></a></li>
            <li><a href="#">User3<span class="value">3</span></a></li>
          </ul>
        </div>
      </div>
    </div>
    <div class="form-stack-6 input-stack">
      <div class="wrap-label">
        <label title="Quản lý theo môn">QL theo môn</label>
      </div>
      <div  class="multiselect" id="subjects">
        <dl class="combobox">

          <dt>
            <div tabindex="0" class="selected-container">
              <!-- <span class="hida">Select</span> -->
              <p class="multiSel">
              <div class="toggle-combobox"></div>

              </p>
            </div>
          </dt>
          <!-- <div class="show"> show</div> -->
          <!-- <div class="toggle-combobox"></div> -->

          <dd>
            <div  class="mutliSelect">
              <ul>
                <li>
                  <div class="checkbox">
                    <input type="checkbox" value="Tất cả" name="checkbox_input"
                           id="checkbox_0"
                           class="checkbox__input"/>
                    <label for="checkbox_0" class="checkbox__label"></label>
                    <span class="cb-value">
                    Tất cả
                  </span>
                  </div>
                </li>
                <li>
                  <div class="checkbox">
                    <input type="checkbox" value="Toán" name="checkbox_input"
                           id="checkbox_1"
                           class="checkbox__input"/>
                    <label for="checkbox_1" class="checkbox__label"></label>
                    <span class="cb-value">
                    Toán
                  </span>
                  </div>
                </li>
                <li>
                  <div class="checkbox">
                    <input type="checkbox" value="Lý" name="checkbox_input" id="checkbox_2"
                           class="checkbox__input"/>
                    <label for="checkbox_2" class="checkbox__label"></label>
                    <span class="cb-value">
                    Lý
                  </span>
                  </div>
                </li>
                <li>
                  <div class="checkbox">
                    <input type="checkbox" value="Hoá" name="checkbox_input" id="checkbox_3"
                           class="checkbox__input"/>
                    <label for="checkbox_3" class="checkbox__label"></label>
                    <span class="cb-value">
                    Hoá
                  </span>
                  </div>
                </li>
                <li>
                  <div class="checkbox">
                    <input type="checkbox" value="Sinh" name="checkbox_input"
                           id="checkbox_4"
                           class="checkbox__input"/>
                    <label for="checkbox_4" class="checkbox__label"></label>
                    <span class="cb-value">
                    Sinh
                  </span>
                  </div>
                </li>

                <li>
                  <div class="checkbox">
                    <input type="checkbox" value="Sử" name="checkbox_input" id="checkbox_5"
                           class="checkbox__input"/>
                    <label for="checkbox_5" class="checkbox__label"></label>
                    <span class="cb-value">

                    Sử
                  </span>
                  </div>
                </li>
                <li>
                  <div class="checkbox">
                    <input type="checkbox" value="Địa" name="checkbox_input" id="checkbox_6"
                           class="checkbox__input"/>
                    <label for="checkbox_6" class="checkbox__label"></label>
                    <span class="cb-value">
                    Địa
                  </span>
                  </div>
                </li>
                <li>
                  <div class="checkbox">
                    <input type="checkbox" value="Ngữ văn" name="checkbox_input"
                           id="checkbox_7"
                           class="checkbox__input"/>
                    <label for="checkbox_7" class="checkbox__label"></label>
                    <span class="cb-value">
                    Ngữ văn
                  </span>
                  </div>
                </li>
              </ul>
            </div>
          </dd>
        </dl>
      </div>
    </div>
    <div class="form-stack-7 input-stack">
      <div class="wrap-label">
        <label title="Quản lý kho, phòng">QL kho, phòng</label>
      </div>
      <div tabindex="0" class="multiselect" id="rooms">
        <dl class="combobox">

          <dt>
            <div class="selected-container">
              <p class="multiSel">
              <div class="toggle-combobox"></div>

              </p>
            </div>
          </dt>

          <dd>
            <div class="mutliSelect">
              <ul>
                <li>
                  <div class="checkbox">
                    <input type="checkbox" value="Tất cả" name="checkbox_input"
                           id="checkbox_8"
                           class="checkbox__input"/>
                    <label for="checkbox_8" class="checkbox__label"></label>
                    <span class="cb-value">
                    Tất cả
                  </span>
                  </div>
                </li>
                <li>
                  <div class="checkbox">
                    <input type="checkbox" value="Thể dục" name="checkbox_input"
                           id="checkbox_9"
                           class="checkbox__input"/>
                    <label for="checkbox_9" class="checkbox__label"></label>
                    <span class="cb-value">
                    Thể dục
                  </span>
                  </div>
                </li>
                <li>
                  <div class="checkbox">
                    <input type="checkbox" value="Vật lý" name="checkbox_input"
                           id="checkbox_10"
                           class="checkbox__input"/>
                    <label for="checkbox_10" class="checkbox__label"></label>
                    <span class="cb-value">
                    Vật lý
                  </span>
                  </div>
                </li>
                <li>
                  <div class="checkbox">
                    <input type="checkbox" value="Hoá học" name="checkbox_input"
                           id="checkbox_11"
                           class="checkbox__input"/>
                    <label for="checkbox_11" class="checkbox__label"></label>
                    <span class="cb-value">
                    Hoá học
                  </span>
                  </div>
                </li>
              </ul>
            </div>
          </dd>
        </dl>
      </div>
    </div>
    <div class="form-stack-8 input-stack">
      <div class="checkbox">
        <input  type="checkbox" value="Trình độ nghiệp vụ QLTB" name="checkbox_input" id="checkbox_12"
               class="checkbox__input"/>
        <label tabindex="0" for="checkbox_12" title="Trình độ nghiệp vụ quản lý thiết bị"
               class="checkbox__label"></label>
        <span class="cb-value ml-8">
        Trình độ nghiệp vụ QLTB
      </span>
      </div>
      <div class="checkbox">
        <input  type="checkbox" value="Đang làm việc" name="checkbox_input" id="is-working"
               class="checkbox__input"/>
        <label tabindex="0" for="is-working" title="Đang làm việc" class="checkbox__label"></label>
        <span class="cb-value ml-8">
        Đang làm việc
      </span>
      </div>
      <div class="day-off">
        <div>
          <label for="day-off-cb" title="Ngày nghỉ việc" class="checkbox__label"></label>
          <span class="cb-value mr-8">
          Ngày nghỉ việc
        </span>
          <input type="date" id="day-off-cb">
        </div>
      </div>
    </div>
    <div class="form-stack-9 input-stack">
      <div class="btn__close--dialog btn btn--white mr-8 ">Đóng</div>
      <div class="btn__save btn btn--green mr-0">Lưu</div>
    </div>
  </div>
</div>
`


    // togging sidebar
    $(".menu-toggle").click(function () {
        $(".header-logo").toggleClass("toggle");
        $(".menu-text").toggleClass("toggle");
        $(".left-container").toggleClass("toggle");
    });

    // toast and close dialog after add success
    $(document).on("click", ".add__employee--dialog .btn__save", function (e) {
        $(".dialog").addClass("hide-dialog");
        $(".dialog__body .body__right").html('')

        Toast(
            {
                title: "Thành công",
                message: "Thêm cán bộ, giáo viên thành công.",
                type: "success",
                duration: 3000,
            })
    });

    // toast and close dialog after edit success
    $(document).on("click", ".edit__employee--dialog .btn__save", function (e) {
        $(".dialog").addClass("hide-dialog");
        $(".dialog__body .body__right").html('')

        Toast(
            {
                title: "Thành công",
                message: "Chỉnh sửa cán bộ, giáo viên thành công.",
                type: "success",
                duration: 3000,
            })
    });

    $(document).on("click", "#is-working", function (e) {
        if ($(this).is(":checked")) {
            console.log("checked")
            $(".day-off").addClass("hidden")
        } else {
            console.log($(".day-off"))
            $(".day-off").removeClass("hidden")
        }
    });




    // close dialog
    $(".close--dialog").click(function () {
        $(".dialog").addClass("hide-dialog");
        $(".dialog__body .body__right").html('')
    });

    // close dialog when click to button cancel
    $(document).on("click", ".btn__close--dialog", function (e) {
        $(".dialog").addClass("hide-dialog");
        $(".dialog__body .body__right").html('')
    });

    // show dialog add employee
    $(".btn-add").click(function () {
        $(".dialog").removeClass("hide-dialog");
        $(".dialog__body .body__right").html(htmlAddEmployeeDialog)
    });

    // show dialog edit employee
    $(".btn-edit").click(function () {
        $(".dialog").removeClass("hide-dialog");
        $(".dialog__body .body__right").html(htmlEditEmployeeDialog)
    });

    //togging dropdown
    $(document).on("click", ".drop-down .toggle-dropdown", function (e) {
        $(".drop-down .options ul").toggle();
    });

    //select options and hide options after selected
    $(document).on("click", ".drop-down .options ul li a", function (e) {
        var text = $(this).html();
        $(".drop-down .selected a span").html(text);
        $(".drop-down .options ul").hide();
    });

    //hide options if clicked anywhere else on page
    $(document).bind("click", function (e) {
        var $clicked = $(e.target);
        if (!$clicked.parents().hasClass("drop-down")) $(".drop-down .options ul").hide();
    });

    var multi = new Multiselect("#subjects");
    var multi2 = new Multiselect("#rooms");

});

