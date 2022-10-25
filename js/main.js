import Multiselect from "./combobox.js";
import Toast from "./toast.js";
import Validator from "./validator.js";
import {HtmlEditEmployeeDialog, HtmlAddEmployeeDialog} from "./data.js";

$(document).ready(function () {

    // togging sidebar
    $(".menu-toggle").click(function () {
        $(".header-logo").toggleClass("toggle");
        $(".menu-text").toggleClass("toggle");
        $(".left-container").toggleClass("toggle");
    });

    // validate => toast and close dialog after add success
    $(document).on("click", ".add__employee--dialog .btn__save", function (e) {

        let isValid = Validator('#add-employee-form')
        if (isValid) {

            $(".dialog").addClass("hide-dialog");
            $(".dialog__body .body__right").html('')

            Toast({
                title: "Thành công", message: "Thêm cán bộ, giáo viên thành công.", type: "success", duration: 3000,
            })
        }

    });

    // validate => toast and close dialog after edit success
    $(document).on("click", ".edit__employee--dialog .btn__save", function (e) {
        let isValid = Validator('#edit-employee-form')
        if (isValid) {
            $(".dialog").addClass("hide-dialog");
            $(".dialog__body .body__right").html('')

            Toast({
                title: "Thành công",
                message: "Chỉnh sửa cán bộ, giáo viên thành công.",
                type: "success",
                duration: 3000,
            })
        }
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
        $(".dialog__body .body__right").html(HtmlAddEmployeeDialog)
    });

    // show dialog edit employee
    $(".btn-edit").click(function () {
        $(".dialog").removeClass("hide-dialog");
        $(".dialog__body .body__right").html(HtmlEditEmployeeDialog)
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


    // show loading
    setTimeout(function () {
        $(".wrapper-loading").addClass('d-none')
    }, 0)

    var multi = new Multiselect("#subjects");
    var multi2 = new Multiselect("#rooms");


});

