export const HtmlAddEmployeeDialog = `
<div class="add__employee--dialog">
    <div class="title">Thêm hồ sơ cán bộ, giáo viên</div>

    <form id="add-employee-form">
        <div class="form-wrapper">
            <div class="form-stack-1 input-stack">
                <div class="wrap-label">
                    <label for="code-ip" class="required">Số hiệu cán bộ</label>
                </div>
                <div class="wrap-input">
                    <input tabindex="0" name="employee-code" rules="required" type="text"
                           class="input input--rounded medium--input" id="code-ip"/>
                </div>

            </div>
            <div class="form-stack-2 input-stack">
                <div class="wrap-label">
                    <label for="user-name-ip" class="required">Họ và tên</label>
                </div>
                <div class="wrap-input">
                    <input type="text" name="username" rules="required" class="input input--rounded medium--input"
                           id="user-name-ip"/>
                </div>
            </div>
            <div class="form-stack-3 input-stack">
                <div class="wrap-label">
                    <label for="phone-ip">Số điện thoại</label>
                </div>
                <div class="wrap-input">
                    <input type="text" rules="phone" name="phone" class="input input--rounded medium--input"
                           id="phone-ip"/>
                </div>
            </div>
            <div class="form-stack-4 input-stack">
                <div class="wrap-label">
                    <label for="email-ip">Email</label>
                </div>
                <div class="wrap-input">
                    <input type="text" rules="email" name="email" class="input input--rounded medium--input"
                           id="email-ip"/>
                </div>
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
                            <li><a href="#">Tổ Anh-Văn<span class="value">Tổ Anh-Văn1</span></a></li>
                            <li><a href="#">Tổ chuyên môn<span class="value">Tổ chuyên môn</span></a></li>
                            <li><a href="#">Tổ Hóa - Sinh<span class="value">Tổ Hóa - Sinh</span></a></li>
                            <li><a href="#">Tổ Lý - Công nghệ<span class="value">Tổ Lý - Công nghệ</span></a></li>
                            <li><a href="#">Tổ Ngữ văn<span class="value">Tổ Ngữ văn</span></a></li>
                            <li><a href="#">Tổ Sử - Địa - GDCD<span class="value">Tổ Sử - Địa - GDCD</span></a></li>
                            <li><a href="#">Tổ Thể dục - Âm nhạc - Mĩ thuật<span class="value">Tổ Thể dục - Âm nhạc - Mĩ thuật</span></a>
                            </li>
                            <li><a href="#">Tổ Toán - Tin<span class="value">Tổ Toán - Tin</span></a></li>
                        </ul>
                    </div>
                </div>
            </div>
            <div class="form-stack-6 input-stack">
                <div class="wrap-label">
                    <label title="Quản lý theo môn">QL theo môn</label>
                </div>
                <div class="multiselect" id="subjects">
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
                            <div class="mutliSelect">
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
                    <input type="checkbox" value="Trình độ nghiệp vụ QLTB" name="checkbox_input" id="checkbox_12"
                           class="checkbox__input"/>
                    <label tabindex="0" for="checkbox_12" title="Trình độ nghiệp vụ quản lý thiết bị"
                           class="checkbox__label"></label>
                    <span class="cb-value ml-8">
                                                 Trình độ nghiệp vụ QLTB
                                                 </span>
                </div>
                <div class="checkbox">
                    <input type="checkbox" value="Đang làm việc" name="checkbox_input" id="is-working"
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
    </form>
</div>
`

export const HtmlEditEmployeeDialog = `
<div class="edit__employee--dialog">
    <div class="title">Chỉnh sửa hồ sơ cán bộ, giáo viên</div>

    <form id="edit-employee-form">
        <div class="form-wrapper">
            <div class="form-stack-1 input-stack">
                <div class="wrap-label">
                    <label for="code-ip" class="required">Số hiệu cán bộ</label>
                </div>
                <div class="wrap-input">
                    <input tabindex="0" name="employee-code" rules="required" type="text"
                           class="input input--rounded medium--input" id="code-ip"/>
                </div>

            </div>
            <div class="form-stack-2 input-stack">
                <div class="wrap-label">
                    <label for="user-name-ip" class="required">Họ và tên</label>
                </div>
                <div class="wrap-input">
                    <input type="text" name="username" rules="required" class="input input--rounded medium--input"
                           id="user-name-ip"/>
                </div>
            </div>
            <div class="form-stack-3 input-stack">
                <div class="wrap-label">
                    <label for="phone-ip">Số điện thoại</label>
                </div>
                <div class="wrap-input">
                    <input type="text" rules="phone" name="phone" class="input input--rounded medium--input"
                           id="phone-ip"/>
                </div>
            </div>
            <div class="form-stack-4 input-stack">
                <div class="wrap-label">
                    <label for="email-ip">Email</label>
                </div>
                <div class="wrap-input">
                    <input type="text" rules="email" name="email" class="input input--rounded medium--input"
                           id="email-ip"/>
                </div>
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
                            <li><a href="#">Tổ Anh-Văn<span class="value">Tổ Anh-Văn1</span></a></li>
                            <li><a href="#">Tổ chuyên môn<span class="value">Tổ chuyên môn</span></a></li>
                            <li><a href="#">Tổ Hóa - Sinh<span class="value">Tổ Hóa - Sinh</span></a></li>
                            <li><a href="#">Tổ Lý - Công nghệ<span class="value">Tổ Lý - Công nghệ</span></a></li>
                            <li><a href="#">Tổ Ngữ văn<span class="value">Tổ Ngữ văn</span></a></li>
                            <li><a href="#">Tổ Sử - Địa - GDCD<span class="value">Tổ Sử - Địa - GDCD</span></a></li>
                            <li><a href="#">Tổ Thể dục - Âm nhạc - Mĩ thuật<span class="value">Tổ Thể dục - Âm nhạc - Mĩ thuật</span></a>
                            </li>
                            <li><a href="#">Tổ Toán - Tin<span class="value">Tổ Toán - Tin</span></a></li>
                        </ul>
                    </div>
                </div>
            </div>
            <div class="form-stack-6 input-stack">
                <div class="wrap-label">
                    <label title="Quản lý theo môn">QL theo môn</label>
                </div>
                <div class="multiselect" id="subjects">
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
                            <div class="mutliSelect">
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
                    <input type="checkbox" value="Trình độ nghiệp vụ QLTB" name="checkbox_input" id="checkbox_12"
                           class="checkbox__input"/>
                    <label tabindex="0" for="checkbox_12" title="Trình độ nghiệp vụ quản lý thiết bị"
                           class="checkbox__label"></label>
                    <span class="cb-value ml-8">
                                                 Trình độ nghiệp vụ QLTB
                                                 </span>
                </div>
                <div class="checkbox">
                    <input type="checkbox" value="Đang làm việc" name="checkbox_input" id="is-working"
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
    </form>
</div>
`