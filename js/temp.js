Array.prototype.search = function (elem) {
  for (var i = 0; i < this.length; i++) {
    console.log(this[i], " - ", elem);
    if (this[i] == elem) return i;
  }

  return -1;
};

var Multiselect = function (selector) {
  if (!$(selector)) {
    console.error("ERROR: Element %s does not exist.", selector);
    return;
  }

  this.selector = selector;
  this.selections = [];

  (function (that) {
    that.events();
  })(this);
};

Multiselect.prototype = {
  all: "Tất cả",
  events: function () {
    var that = this;

    // toggle dropdown
    $(document).on(
      "click",
      that.selector +
        ".multiselect > .dropdown > dt > .selected-container .toggle-dropdown",
      function (e) {
        $(
          that.selector + ".multiselect > .dropdown > dd > .mutliSelect > ul"
        ).slideToggle("fast");
      }
    );

    // handle checked and unchecked
    $(document).on(
      "click",
      that.selector +
        '.multiselect > .dropdown > dd > .mutliSelect .checkbox input[type="checkbox"]',
      function (e) {
        var selection = $(this).attr("value");

        console.log($(this));

        // check va lay index cua option trong selections array
        var io = that.search(selection);
        if ($(this).is(":checked")) {
          if (selection === that.all) {
            that.updateCheckedAll();
          } else {
            that.checked(io, selection);

            console.log(that.selections);
          }
        } else {
          if (selection === that.all) {
            that.updateUnCheckedAll();
          } else {
            that.unchecked();
            console.log(that.selections);
          }
        }
      }
    );

    // handle remove tag
    $(document).on(
      "click",
      that.selector + ".multiselect .selected-item .remove-item",
      function (e) {
        let pr = $(this).closest(".selected-item");
        var val = pr.attr("title");

        var io = that.selections.findIndex((e) =>
          that.selections.includes(val)
        );

        if (io >= 0) {
          if (val === that.all) {
            that.updateUnCheckedAll();
          } else {
            that.selections.splice(io, 1);
            that.update();
          }
        }
      }
    );
  },

  update: function () {
    var multiSel = $(
      this.selector +
        ".multiselect > .dropdown > dt > .selected-container > .multiSel"
    );

    multiSel.html("");

    this.selections.forEach((val) => {
      multiSel.append(this.genTag(val));
    });
  },

  updateCheckedAll: function () {
    this.tagCheckedAll();
    this.addAll();

    var allCheckbox = $(
      this.selector +
        '.multiselect > .dropdown > dd > .mutliSelect .checkbox input[type="checkbox"]'
    );

    allCheckbox.each(function () {
      $(this).prop("checked", true);
    });
  },

  updateUnCheckedAll: function () {
    this.unTagCheckedAll();
    this.removeAll();

    var allCheckbox = $(
      this.selector +
        '.multiselect > .dropdown > dd > .mutliSelect .checkbox input[type="checkbox"]'
    );
    allCheckbox.each(function () {
      $(this).prop("checked", false);
    });
  },

  observe: function () {
    var allCheckbox = $(
      this.selector +
        '.multiselect > .dropdown > dd > .mutliSelect .checkbox input[type="checkbox"]'
    );

    if (
      this.selections.length == allCheckbox.length - 1 &&
      !this.selections.includes(this.all)
    ) {
      this.selections.splice(0, this.selections.length);
      this.selections.push(this.all);

      this.updateCheckedAll();
    }
  },

  addAll: function () {
    var that = this;
    var allCheckbox = $(
      this.selector +
        '.multiselect > .dropdown > dd > .mutliSelect .checkbox input[type="checkbox"]'
    );

    this.selections.splice(0, this.selections.length);
    allCheckbox.each(function (e) {
      var val = $(this).attr("value");

      if (val === that.all) {
        console.log("======", val, " -- ", that.all);
      } else {
        that.selections.push(val);
      }
    });
  },

  removeAll: function () {
    this.selections.splice(0, this.selections.length);
  },

  genTag: function (title) {
    var html =
      '<span class="wrap-item"><span class="selected-item" title="' +
      title +
      '">' +
      title +
      ' <span class="remove-item"></span> ' +
      "</span></span>";
    return html;
  },

  tagCheckedAll: function () {
    var multiSel = $(
      this.selector +
        ".multiselect > .dropdown > dt > .selected-container > .multiSel"
    );

    if (!multiSel) {
      console.error("ERROR: Element %s does not exist.", "multiSel");
      return;
    }

    multiSel.html("");

    multiSel.append(this.genTag(this.all));
  },

  unTagCheckedAll: function () {
    var multiSel = $(
      this.selector +
        ".multiselect > .dropdown > dt > .selected-container > .multiSel"
    );
    multiSel.html("");
  },

  clear: function () {
    var multiSel = $(
      this.selector +
        ".multiselect > .dropdown > dt > .selected-container > .multiSel"
    );

    multiSel.html("");
  },

  checked: function (io, selection) {
    if (io < 0) this.selections.push(selection);
    this.observe();
    this.update();
  },

  unchecked: function (io) {
    // if (this.isFull) {
    //   this.updateUnCheckedAll();
    // }
    console.log(io);
    if (io > 0) this.selections.splice(io, 1);
    this.observe();
    this.update();
  },

  isFull: function () {
    var allCheckbox = $(
      this.selector +
        '.multiselect > .dropdown > dd > .mutliSelect .checkbox input[type="checkbox"]'
    );

    return this.selections.length == allCheckbox.length;
  },

  search: function (elem) {
    for (var i = 0; i < this.selections.length; i++) {
      console.log(this.selections[i], "-->", elem);
      if (this.selections[i].replace(/\s/g, "") == elem.replace(/\s/g, ""))
        return i;
    }

    return -1;
  },
};

$(document).ready(function () {
  var multi = new Multiselect("#subjects");
});
