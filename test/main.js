Array.prototype.search = function (elem) {
  for (var i = 0; i < this.length; i++) {
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
  // show dropdown
  open: function (that) {
    var target = $(that).parent().attr("data-target");

    // If we are not keeping track of this one's entries, then
    // start doing so.
    if (!this.selections) {
      this.selections = [];
    }

    $(this.selector + ".multiselect").toggleClass("active");
  },

  // close dropdown
  close: function () {
    $(this.selector + ".multiselect").removeClass("active");
  },

  events: function () {
    var that = this;

    $(document).on(
      "click",
      that.selector + ".multiselect > .title",
      function (e) {
        console.log(e.target.className);
        if (e.target.className.indexOf("close-icon") < 0) {
          that.open();
        }
      }
    );

    // khi lick 1 option
    $(document).on(
      "click",
      that.selector + ".multiselect option",
      function (e) {
        // lay value cua option
        var selection = $(this).attr("value");
        console.log($(this));
        var target = $(this).parent().parent().attr("data-target");

        // check va lay index cua option trong selections array
        var io = that.selections.search(selection);

        // neu ko co thi push vao selection
        if (io < 0) that.selections.push(selection);
        else that.selections.splice(io, 1); // neu co roi thi remove option

        // update neu multiple select co selection thi addClass selection
        // con ko co thi remove class selection
        that.selectionStatus();
        that.setSelectionsString();
      }
    );

    $(document).on(
      "click",
      that.selector + ".multiselect > .title > .close-icon",
      function (e) {
        that.clearSelections();
      }
    );

    $(document).click(function (e) {
      if (e.target.className.indexOf("title") < 0) {
        if (e.target.className.indexOf("text") < 0) {
          if (e.target.className.indexOf("-icon") < 0) {
            if (
              e.target.className.indexOf("selected") < 0 ||
              e.target.localName != "option"
            ) {
              that.close();
            }
          }
        }
      }
    });
  },

  // update neu multiple select co selection thi addClass selection
  // con ko co thi remove class selection
  selectionStatus: function () {
    var obj = $(this.selector + ".multiselect");

    if (this.selections.length) obj.addClass("selection");
    else obj.removeClass("selection");
  },

  clearSelections: function () {
    this.selections = [];
    this.selectionStatus();
    this.setSelectionsString();
  },

  getSelections: function () {
    return this.selections;
  },

  setSelectionsString: function () {
    //
    var selects = this.getSelectionsString().split(", ");
    $(this.selector + ".multiselect > .title").attr("title", selects);

    var opts = $(this.selector + ".multiselect option");
    var text = $(this.selector + ".multiselect > .title > .text");

    if (selects.length > 6) {
      var _selects = this.getSelectionsString().split(", ");
      _selects = _selects.splice(0, 6);
      $(this.selector + ".multiselect > .title > .text").text(
        _selects + " [...]"
      );
    } else {
      $(this.selector + ".multiselect > .title > .text").text(selects);
    }

    for (var i = 0; i < opts.length; i++) {
      $(opts[i]).removeClass("selected");
    }

    for (var j = 0; j < selects.length; j++) {
      var select = selects[j];

      for (var i = 0; i < opts.length; i++) {
        if ($(opts[i]).attr("value") == select) {
          $(opts[i]).addClass("selected");
          break;
        }
      }
    }
  },

  // join value trong selections array neu co data
  getSelectionsString: function () {
    if (this.selections.length > 0) return this.selections.join(", ");
    else return "Select";
  },

  setSelections: function (arr) {
    if (!arr[0]) {
      error("ERROR: This does not look like an array.");
      return;
    }

    this.selections = arr;
    this.selectionStatus();
    this.setSelectionsString();
  },

  setWidth: function (width) {
    this.width = width;
    return this;
  },

  isFull: function (compareWith) {
    if (this.with > compareWith) {
      return false;
    }
    return true;
  },
};

$(document).ready(function () {
  var multi = new Multiselect("#countries").setWidth(20);
});
