Array.prototype.search = function(elem) {
  for (var i = 0; i < this.length; i++) {
    if (this[i] == elem) return i;
  }
  return -1;
};

var Multiselect = function(selector) {
  if (!$(selector)) {
    console.error("ERROR: Element %s does not exist.", selector);
    return;
  }

  this.selector = selector;
  this.selections = [];

  (function(that) {
    that.events();
  })(this);
};

Multiselect.prototype = {
  all: "Tất cả",
  events: function() {
    var that = this;

    $(document).bind("click", function(e) {
      var $clicked = $(e.target);
      if (!$clicked.parents().hasClass("dropdown")) $(".dropdown dd ul").hide();
    });

    // toggle dropdown
    $(document).on(
      "click",
      that.selector +
      ".multiselect > .dropdown > dt > .selected-container .toggle-dropdown",
      function(e) {
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
      function(e) {
        var selection = $(this).attr("value");

        // check va lay index cua option trong selections array
        var io = that.selections.search(selection);
        console.log("io: ", io);

        if ($(this).is(":checked")) {
          if (selection == that.all) {
            that.updateCheckedAll();
          } else {
            if (io < 0) that.selections.push(selection);
            // that.update();
          }
        } else {
          if (selection == that.all) {
            that.updateUnCheckedAll();
          } else {
            if ((io) => 0) that.selections.splice(io, 1);
            // that.update();
          }
        }

        that.observe();
      }
    );

    // handle remove tag
    $(document).on(
      "click",
      that.selector + ".multiselect .selected-item .remove-item",
      function(e) {
        let pr = $(this).closest(".selected-item");
        var val = pr.attr("title");

        that.removeTag(val);
        that.update();
        that.observe();
      }
    );
  },

  update: function() {
    var multiSel = $(
      this.selector +
      ".multiselect > .dropdown > dt > .selected-container > .multiSel"
    );

    multiSel.html("");

    this.selections.forEach((val) => {
      multiSel.append(this.genTag(val));
    });
  },

  updateCheckedAll: function() {
    this.tagCheckedAll();
    this.addAll();

    var allCheckbox = $(
      this.selector +
      '.multiselect > .dropdown > dd > .mutliSelect .checkbox input[type="checkbox"]'
    );

    allCheckbox.each(function() {
      $(this).prop("checked", true);
    });
  },

  updateUnCheckedAll: function() {
    this.unTagCheckedAll();
    this.removeAll();

    var allCheckbox = $(
      this.selector +
      '.multiselect > .dropdown > dd > .mutliSelect .checkbox input[type="checkbox"]'
    );
    allCheckbox.each(function() {
      $(this).prop("checked", false);
    });
  },

  observe: function() {
    var that = this;
    var allCheckbox = $(
      this.selector +
      '.multiselect > .dropdown > dd > .mutliSelect .checkbox input[type="checkbox"]'
    );

    allCheckbox.each(function() {
      var val = $(this).val();
      if (that.selections.includes(val)) {
        $(this).prop("checked", true);
      } else {
        $(this).prop("checked", false);
      }
    });

    if (
      this.selections.length == allCheckbox.length - 1 &&
      !this.selections.includes(this.all)
    ) {
      this.selections.splice(0, this.selections.length);
      this.updateCheckedAll();
    } else {
      that.update();
    }
  },

  addAll: function() {
    var that = this;
    var allCheckbox = $(
      that.selector +
      '.multiselect > .dropdown > dd > .mutliSelect .checkbox input[type="checkbox"]'
    );

    // clear
    that.selections.splice(0, that.selections.length);
    allCheckbox.each(function(e) {
      var val = $(this).attr("value");
      if (that.all != val) {
        that.selections.push(val);
      }
    });
  },

  removeAll: function() {
    this.selections.splice(0, this.selections.length);
  },

  genTag: function(title) {
    var html =
      '<span class="wrap-item"><span class="selected-item" title="' +
      title +
      '">' +
      title +
      ' <span class="remove-item"></span> ' +
      "</span></span>";
    return html;
  },

  tagCheckedAll: function() {
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

  unTagCheckedAll: function() {
    var multiSel = $(
      this.selector +
      ".multiselect > .dropdown > dt > .selected-container > .multiSel"
    );
    multiSel.html("");
  },

  removeTag: function(val) {
    var io = this.selections.findIndex((e) => e == val);
    if (io >= 0) {
      this.selections.splice(io, 1);
    } else {
      if (val == this.all) {
        this.updateUnCheckedAll();
      }
    }
  },
};

export default Multiselect;
// $(document).ready(function() {
//   console.log("test");
//   var multi = new Multiselect("#subjects");
//   multi.update();
// });
