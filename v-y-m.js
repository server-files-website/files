  ;
(function () {

  var Modal = function () {

    var prefix = 'Modal-';

    this.Class = {
      stopOverflow: prefix + 'cancel-overflow',
      overlay: prefix + 'overlay',
      box: prefix + 'box',
      close: prefix + 'close' };


    this.Selector = {
      overlay: '.' + this.Class.overlay,
      box: '.' + this.Class.box,
      button: '[data-modal=button]' };

    this.Markup = {
      close: '<div class=" ' + this.Class.close + ' ">إغلاق X</div>',
      overlay: '<div class=" ' + this.Class.overlay + ' "></div>',
      box: '<div class=" ' + this.Class.box + ' "></div>' };


    this.youtubeID = false;

  };

  Modal.prototype = {

    toggleOverflow: function () {
      $('body').toggleClass(this.Class.stopOverflow);
    },

    videoContainer: function () {
      return '<div class="video-container"><iframe id="player" src="https://www.youtube.com/embed/' + this.youtubeID + '?autoplay=1&rel=0" frameborder="0"></iframe></div>';
    },

    addOverlay: function () {

      var self = this;

      $(this.Markup.overlay).appendTo('body').fadeIn('slow', function () {
        self.toggleOverflow();
      });

      $(this.Selector.overlay).on('click touchstart', function () {
        self.closeModal();
      });

    },

    addModalBox: function () {
      $(this.Markup.box).appendTo(this.Selector.overlay);
    },

    buildModal: function (youtubeID) {

      this.addOverlay();
      this.addModalBox();

      $(this.Markup.close).appendTo(this.Selector.overlay);
      $(this.videoContainer(youtubeID)).appendTo(this.Selector.box);

    },

    closeModal: function () {

      this.toggleOverflow();

      $(this.Selector.overlay).fadeOut().detach();
      $(this.Selector.box).empty();

    },

    getYoutubeID: function () {
      return this.youtubeID;
    },

    setYoutubeID: function (href) {

      var id = '';

      if (href.indexOf('youtube.com') > -1) {
        id = href.split('v=')[1];
      } else if (href.indexOf('youtu.be') > -1) {
        id = href.split('.be/')[1];
      } else {
        document.location = href;
      }

      this.youtubeID = id.indexOf('&') != -1 ? id.substring(0, amp) : id;

    },

    startup: function (href) {

      this.setYoutubeID(href);

      if (this.youtubeID) {
        this.buildModal();
      }

    } };



  $(document).ready(function () {

    var modal = new Modal();

    $(modal.Selector.button).on('click touchstart', function (e) {
      e.preventDefault();
      modal.startup(this.href);
    });

  });

})(this);
    
